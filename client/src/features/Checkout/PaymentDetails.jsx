import { useState } from "react";
import RadioButton from "../../ui/RadioButton";
import { styled } from "styled-components";
import InputTypeHeader from "../../ui/InputTypeHeader";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import PayOnDelivery from "./PayOnDelivery";
import Button from "../../ui/Button";

import { getCheckoutSesionApi } from "../../service/apiOrder";
import { useNavigate } from "react-router-dom";
import { useViewport } from "../../context/ViewPort";
import { clampBuilder } from "../../styles/clampFunction";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-block: ${() => clampBuilder(320, 1200, 2, 3)};
`;

function PaymentDetails({ step }) {
  const [checked, setIsChecked] = useState("");

  const handleCheckout = async (e) => {
    e.preventDefault();

    await getCheckoutSesionApi();
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
            <Button onClick={handleCheckout}> Continue & pay </Button>
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
