import { css, styled } from "styled-components";

import SVG from "react-inlinesvg";
import { NavLink, useLocation } from "react-router-dom";
import { IconLogo } from "./Icons";
import Modal from "./Modal";
import Cart from "../features/cart/Cart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useUser } from "../features/users/useUser";
import Avatar from "../features/users/avatar";
import { Text } from "../features/category/Category";
import { useLogout } from "../features/users/useLogout";
import {
  HiArrowRightOnRectangle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import SpinnerMini from "./SpinnerMini";
import { useViewport } from "../features/context/ViewPort";
import { clampBuilder } from "../styles/clampFunction";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
  max-width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  column-gap: ${() => clampBuilder(920, 1200, 1.4, 5)};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-left: 0;
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
  top: -5px;
  right: -1rem;
  font-size: ${() => clampBuilder(350, 1200, 1, 1.5)};

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

const HamburgerContainer = styled.button`
  outline: transparent;
  background: transparent;
  border: none;

  padding: ${() => clampBuilder(700, 1200, 1.2, 2)};

  translate: 0 -5px;

  &:hover > *::before {
    top: -1rem;
  }

  &:hover > *::after {
    top: 1rem;
  }

  ${(props) =>
    props.clicked === "true" &&
    css`
      & > :first-child {
        background-color: transparent;
      }

      & > :first-child::before {
        transform: rotate(125deg);
        top: 0;
      }

      & > :first-child::after {
        transform: rotate(-125deg);
        top: 0;
      }
    `}
`;

const HamburgerIcon = styled(NavLink)`
  align-self: self-start;

  position: relative;
  &,
  &::before,
  &::after {
    height: 2px;
    width: ${() => clampBuilder(400, 920, 2, 3)};
    background-color: var(--color-white);
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::after {
    top: 0.8rem;
  }

  &::before {
    top: -0.8rem;
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
            <HamburgerContainer>
              {viewportWidth <= 920 && <HamburgerIcon />}
            </HamburgerContainer>

            <HeaderIcon to="/home">
              <SVG fill="white" src={IconLogo} width={142} />
            </HeaderIcon>
          </LeftNavContainer>

          {viewportWidth >= 920 && (
            <NavList>
              <NavItem to="/home">Home</NavItem>

              <NavItem to="/headphones">Headphones</NavItem>

              <NavItem to="/speakers">speakers</NavItem>

              <NavItem to="/earphones">earphones</NavItem>
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
        <StyledNav>
          <HeaderIcon to="/home">
            <SVG src={IconLogo} />
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
