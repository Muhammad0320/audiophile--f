import Form from "../../ui/Form";
import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import PayOnDelivery from "./PayOnDelivery";
import RadioButton from "../../ui/RadioButton";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { useViewport } from "../../context/ViewPort";
import { getTotalCartPrice } from "../cart/cartSlice";
import InputTypeHeader from "../../ui/InputTypeHeader";
import { clampBuilder } from "../../styles/clampFunction";
import { getCheckoutSesionApi } from "../../service/apiOrder";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-block: ${() => clampBuilder(320, 1200, 2, 3)};
`;

const BtnPriceContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  column-gap: ${() => clampBuilder(320, 1200, 0.4, 0.8)};

  text-align: center;

  font-size: ${() => clampBuilder(320, 1200, 1.3, 1.5)};
  & > em {
    font-weight: 500;
  }
`;

function PaymentDetails({ step }) {
  const [checked, setIsChecked] = useState("");

  const price = useSelector(getTotalCartPrice);

  const totalPrice = formatCurrency(price);

  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsRedirecting(true);
    await getCheckoutSesionApi();
    setIsRedirecting(false);
  };

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  const navigate = useNavigate();

  const { viewportWidth } = useViewport();

  const isSmallVW = viewportWidth < 600;

  return (
    <>
      <InputTypeHeader> payment details </InputTypeHeader>
      <Form>
        {viewportWidth > 600 && (
          <FormRow label="payment method">
            <Input type="hidden" />
          </FormRow>
        )}

        <FormRow position={isSmallVW ? "both" : "right"}>
          <RadioButtonsContainer>
            <RadioButton
              value="card"
              disabled={step !== 3}
              checked={checked === "card"}
              label="Pay with card"
              onChange={handleChange}
            />
            <RadioButton
              value="cash"
              checked={checked === "cash"}
              label="Cash on Delivery"
              disabled={step !== 3}
              onChange={handleChange}
            />
          </RadioButtonsContainer>
        </FormRow>

        {checked === "cash" && (
          <FormRow position="both">
            <PayOnDelivery />
          </FormRow>
        )}

        {checked === "card" && (
          <FormRow position="right">
            <Button
              disabled={isRedirecting}
              withspinner={isRedirecting && "true"}
              onClick={handleCheckout}
            >
              {" "}
              {isRedirecting ? (
                "Redirecting to checkout..."
              ) : (
                <BtnPriceContainer>
                  <span> Pay </span> <em> {totalPrice} </em>
                </BtnPriceContainer>
              )}
            </Button>
          </FormRow>
        )}

        {checked === "cash" && (
          <FormRow position="right">
            <Button onClick={() => navigate("/success")}>
              {" "}
              Continue & Accept{" "}
            </Button>
          </FormRow>
        )}
      </Form>
    </>
  );
}

export default PaymentDetails;
