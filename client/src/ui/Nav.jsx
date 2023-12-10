import Modal from "./Modal";
import { Text } from "./Text";
import SVG from "react-inlinesvg";
import { IconLogo } from "./Icons";
import SpinnerMini from "./SpinnerMini";
import CategoryBox from "./CategoryBox";
import Cart from "../features/cart/Cart";
import { useSelector } from "react-redux";
import Avatar from "../features/users/avatar";
import { css, styled } from "styled-components";
import { useViewport } from "../context/ViewPort";
import { useUser } from "../features/users/useUser";
import { clampBuilder } from "../styles/clampFunction";
import { useLogout } from "../features/users/useLogout";
import { NavLink, useLocation } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { HamburgerContainer, HamburgerIcon } from "./HamburgerIcon";

import {
  HiArrowRightOnRectangle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import NavList from "./NavList";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);

  z-index: 1000;

  ${(props) =>
    props.type === "footer" &&
    css`
      @media (max-width: 920px) {
        align-items: flex-start;
        flex-flow: column;
        row-gap: 2rem;
      }

      @media (max-width: 420px) {
        align-items: center;
      }
    `}
`;

const HeaderIcon = styled(NavLink)`
  cursor: pointer;
  line-height: 1;
  font-size: clamp(var(--font-small), var(--font-medium-2), var(--font-medium));
  & > svg {
    color: var(--color-white);

    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary-muted);
    }
  }

  position: relative;
`;

const CartIconNotification = styled.span`
  display: flex;
  width: ${() => clampBuilder(350, 1200, 1.3, 2)};
  height: ${() => clampBuilder(350, 1200, 1.3, 2)};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -7px;
  right: -1rem;
  font-size: ${() => clampBuilder(350, 1200, 0.8, 1.3)};

  background-color: var(--color-white);
  color: var(--color-dark-3);
`;

const AuthButton = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  display: grid;
  place-items: center;
  padding-inline: ${() => clampBuilder(320, 1200, 0.7, 1.4)};
  padding-block: ${() => clampBuilder(320, 1200, 0.4, 0.8)};
  background-color: transparent;

  font-size: ${() => clampBuilder(320, 1200, 1, 1.6)};
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out;

  &:hover {
    color: var(--color-white);
  }

  &:first-of-type {
    border-style: solid;
    border-color: transparent;
    border-width: 2px;

    transition: border 0.3s ease-out;

    &:hover {
      border-color: var(--color-primary-dark);
    }
  }

  &:last-of-type {
    border: none;
    /* margin-right: 2rem; */
    background-color: var(--color-primary-muted);
    background-image: var(--color-gradient-dark);

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
`;

const LeftNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${() => clampBuilder(400, 920, 1, 2)};
`;

const NavCornerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--font-tiny);
`;

function Nav({ type }) {
  const totalQuantity = useSelector(getTotalCartQuantity);

  const { user, isLoading } = useUser();

  const { logout, isLoggingOut } = useLogout();

  const location = useLocation();

  const { viewportWidth } = useViewport();

  const handleLogoutFunction = () => {
    logout(null, {
      onSuccess: () => {
        localStorage.removeItem("user");
      },
    });
  };

  return (
    <Modal>
      {type === "header" && (
        <StyledNav>
          <LeftNavContainer>
            {viewportWidth <= 920 && (
              <Modal.Open opens="menu">
                <HamburgerContainer>
                  <HamburgerIcon />
                </HamburgerContainer>
              </Modal.Open>
            )}

            {viewportWidth <= 920 && (
              <Modal.Window name="menu" page="menu">
                <CategoryBox type="menu" />
              </Modal.Window>
            )}

            <HeaderIcon to="/home">
              <SVG fill="white" src={IconLogo} />
            </HeaderIcon>
          </LeftNavContainer>

          {viewportWidth >= 920 && <NavList />}

          <NavCornerContainer>
            {user ? (
              <>
                <Avatar user={user} />

                {location.pathname !== "/checkout" && (
                  <Modal.Open opens="cart">
                    <HeaderIcon as="a" title="cart preview">
                      <HiOutlineShoppingCart />
                      {totalQuantity > 0 && (
                        <CartIconNotification>
                          {" "}
                          {totalQuantity}{" "}
                        </CartIconNotification>
                      )}
                    </HeaderIcon>
                  </Modal.Open>
                )}

                <Modal.Window name="cart">
                  <Cart />
                </Modal.Window>

                {isLoggingOut ? (
                  <SpinnerMini />
                ) : (
                  <HeaderIcon
                    as="a"
                    title="Logout"
                    onClick={handleLogoutFunction}
                  >
                    <HiArrowRightOnRectangle />
                  </HeaderIcon>
                )}
              </>
            ) : isLoading ? (
              <Text type="avatar"> Loading... </Text>
            ) : (
              <>
                {" "}
                <AuthButton href="/login"> Login </AuthButton>{" "}
                <AuthButton href="/signup"> Signup </AuthButton>{" "}
              </>
            )}
          </NavCornerContainer>
        </StyledNav>
      )}

      {type === "footer" && (
        <StyledNav type="footer">
          <HeaderIcon to="/home">
            <SVG src={IconLogo} fill="white" />
          </HeaderIcon>

          <NavList />
        </StyledNav>
      )}
    </Modal>
  );
}

export default Nav;
