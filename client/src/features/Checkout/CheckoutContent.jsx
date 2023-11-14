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
import { useState } from "react";
import { clampBuilder } from "../../styles/clampFunction";

const StyledCheckoutForm = styled.div`
  background-color: var(--color-white);
  padding: ${() => clampBuilder(320, 1200, 1.8, 2.8)};
  ${() => clampBuilder(320, 1200, 3, 5)};
  border-radius: 1.5rem;
  background-image: var(--color-gradient-dark);
  box-shadow: var(--box-shadow-light);
`;

function CheckoutContent() {
  const cart = useSelector(getCart);

  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(1);

  if (!cart.length) return navigate(`/home`);

  return (
    <ContainerLayout page="checkout">
      <Header />
      <ContainerContent>
        <Checkout>
          <StyledCheckoutForm>
            <BillingDetails step={formStep} setStep={setFormStep} />
            <ShippingInfo step={formStep} setStep={setFormStep} />
            <PaymentDetails step={formStep} setStep={setFormStep} />
          </StyledCheckoutForm>

          <Cart page="summary" />
        </Checkout>
      </ContainerContent>

      <Footer />
    </ContainerLayout>
  );
}

export default CheckoutContent;
