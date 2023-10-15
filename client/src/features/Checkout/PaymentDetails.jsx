import { useState } from "react";
import RadioButton from "../../ui/RadioButton";
import { styled } from "styled-components";
import InputTypeHeader from "../../ui/InputTypeHeader";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import PayOnDelivery from "./PayOnDelivery";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Confirmation from "../../ui/Confirmation";
import { getCheckoutSesionApi } from "../../service/apiOrder";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-bottom: 3rem;
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

  return (
    <Modal>
      <InputTypeHeader> payment details </InputTypeHeader>
      <Form>
        <FormRow label="payment method" position="left">
          <Input type="hidden" />
        </FormRow>

        <FormRow position="right">
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
              // disabled={step !== 3}
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
            <Modal.Open opens="confirmation">
              <Button> Continue & Accept </Button>
            </Modal.Open>
          </FormRow>
        )}

        <Modal.Window name="confirmation" page="confirm">
          <Confirmation />
        </Modal.Window>
      </Form>
    </Modal>
  );
}

export default PaymentDetails;
