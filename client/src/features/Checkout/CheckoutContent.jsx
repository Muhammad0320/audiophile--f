import { styled } from "styled-components";
import ContainerContent from "../../ui/ContainerContent";
import ContainerLayout from "../../ui/ContainerLayout";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";
import Cart from "../cart/Cart";
import BillingDetails from "./BillingDetails";
import Checkout from "./Checkout";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";

const StyledCheckoutForm = styled.div`
  background-color: var(--color-white);
  padding: 3rem 5rem;
  border-radius: 1.5rem;
  width: 70%;
`;

function CheckoutContent() {
  const cart = useSelector(getCart);

  const navigate = useNavigate();

  if (!cart.length) return navigate(`/home`);

  return (
    <ContainerLayout page="checkout">
      <Header />

      <ContainerContent>
        <Checkout>
          <StyledCheckoutForm>
            <BillingDetails />
            <ShippingInfo />
            <PaymentDetails />
          </StyledCheckoutForm>

          <Cart page="checkout" />
        </Checkout>
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default CheckoutContent;
