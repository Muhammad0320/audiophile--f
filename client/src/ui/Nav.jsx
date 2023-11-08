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

const NavList = styled.ul`
  display: flex;
  column-gap: ${() => clampBuilder(430, 1200, 1.4, 5)};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-left: 0;

  @media (max-width: 920px) {
    column-gap: ${() => clampBuilder(350, 1200, 1.8, 3)};
  }

  @media (max-width: 420px) {
    flex-direction: column;
    row-gap: 1.2rem;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  color: var(--color-white-2);
  font-size: ${() => clampBuilder(920, 1200, 1, 1.5)};

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }

  @media (max-width: 920px) {
    font-size: ${() => clampBuilder(350, 920, 1, 1.4)};
  }
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
  text-decoration: none;
  display: grid;
  place-items: center;
  padding: 0.8rem 1.4rem;
  background-color: transparent;
  border: 1px solid var(--color-white);
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    background-color: var(--color-primary-muted);
    background-image: var(--color-gradient-dark);
  }

  &:first-of-type {
    border: none;
    margin-right: 2rem;

    &:hover {
    }
  }

  &:last-of-type {
    border: none;
    margin-right: 2rem;
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

          {viewportWidth >= 920 && (
            <NavList>
              <NavItem to="/home">Home</NavItem>

              <NavItem to="/headphones">Headphones</NavItem>

              <NavItem to="/speakers">speakers</NavItem>

              <NavItem to="/earphones">earphones</NavItem>
              <NavItem to="/success">success</NavItem>
            </NavList>
          )}

          <NavCornerContainer>
            {user ? (
              <>
                <Avatar user={user} />

                {location.pathname !== "/checkout" && (
                  <Modal.Open opens="cart">
                    <HeaderIcon>
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
                  <HeaderIcon as="a" onClick={logout}>
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

          <NavList>
            <NavItem to="/home">Home</NavItem>

            <NavItem to="/headphones">Headphones</NavItem>

            <NavItem to="/speakers">speakers</NavItem>

            <NavItem to="/earphones">earphones</NavItem>
          </NavList>
        </StyledNav>
      )}
    </Modal>
  );
}

export default Nav;
