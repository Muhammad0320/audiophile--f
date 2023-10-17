import { styled } from "styled-components";

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
import { useContext } from "react";
import ViewPortProvider from "../features/context/ViewPort";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const NavList = styled.ul`
  display: flex;
  column-gap: clamp(
    var(--margin-tiny-2),
    var(--margin-tiny),
    var(--margin-very-small)
  );
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-left: 0;
`;

const NavItem = styled(NavLink)`
  color: var(--color-white-2);
  font-size: clamp(1rem, var(--font-tiny-2), var(--font-tiny));

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;

const HeaderIcon = styled(NavLink)`
  cursor: pointer;
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
  width: clamp(1.3rem, 1.7rem, 2rem);
  height: clamp(1.3rem, 1.7rem, 2rem);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -1rem;
  font-size: clamp(1rem, var(--font-tiny-2), var(--font-tiny));

  background-color: var(--color-white);
  color: rgba(0, 0, 0, 0.7);
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

const HamburgerIcon = styled(NavLink)`
  background-color: var(--color-white);

  padding: var(--padding-tiny);

  position: relative;

  margin-top: 3.5rem;
  &,
  &::before,
  &::after {
    height: 2px;
    width: 3rem;
    background-color: var(--color-dark-3);
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

  const { viewportWidth } = useContext(ViewPortProvider);

  return (
    <Modal>
      {type === "header" && (
        <StyledNav>
          <HeaderIcon to="/home">
            <SVG fill="white" src={IconLogo} />
          </HeaderIcon>

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
