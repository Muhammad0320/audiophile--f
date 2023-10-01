import { styled } from "styled-components";

import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import { IconCart, IconLogo } from "./Icons";
import Modal from "./Modal";
import Cart from "../features/cart/Cart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import { useUser } from "../features/users/useUser";
import Avatar from "../features/users/avatar";
import { Text } from "../features/category/Category";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.4rem;
`;

const NavItem = styled(NavLink)`
  color: var(--color-white-2);
  font-size: 1.3rem;

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;

const HeaderIcon = styled(NavLink)`
  cursor: pointer;

  & > svg {
    fill: var(--color-white);
  }

  position: relative;
`;

const CartIconNotification = styled.span`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1rem;
  right: -1rem;
  font-size: 1.2rem;
  background-color: var(--color-white);
  color: rgba(0, 0, 0, 0.7);
`;

const AuthButton = styled.a`
  text-decoration: none;
  display: grid;
  place-items: center;
  padding: 1rem 2.5rem;
  background-color: transparent;
  border: 2px solid var(--color-white);
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white);

    border: 2px solid var(--color-primary);
  }

  &:first-of-type {
    margin-right: 2rem;
  }
`;

const NavCornerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

function Nav({ type }) {
  const totalQuantity = useSelector(getTotalCartQuantity);

  const { user, isLoading } = useUser();

  return (
    <Modal>
      {type === "header" && (
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

          <NavCornerContainer>
            {user ? (
              <>
                <Avatar user={user} />

                <Modal.Open opens="cart">
                  <HeaderIcon>
                    <SVG src={IconCart} />
                    {totalQuantity > 0 && (
                      <CartIconNotification>
                        {" "}
                        {totalQuantity}{" "}
                      </CartIconNotification>
                    )}
                  </HeaderIcon>
                </Modal.Open>
                <Modal.Window name="cart">
                  <Cart />
                </Modal.Window>
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
