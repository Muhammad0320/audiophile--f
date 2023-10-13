import { useState } from "react";
import RadioButton from "../../ui/RadioButton";
import { styled } from "styled-components";
import InputTypeHeader from "../../ui/InputTypeHeader";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import PayOnDelivery from "./PayOnDelivery";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Confirmation from "../../ui/Confirmation";
import { useCheckoutSession } from "../payment/useCheckoutSession";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-bottom: 3rem;
`;

function PaymentDetails() {
  const { checkout, isLoading } = useCheckoutSession();
  const [checked, setIsChecked] = useState("");

  const handleCheckout = () => {
    if (!isLoading) {
      console.log("Odeh stripe");

      // checkout();
    }
  };

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  const { register, formState, handleSubmit, reset } = useForm();

  const { errors } = formState;

  const onSubmit = () => {
    reset();
  };

  return (
    <Modal>
      <InputTypeHeader> payment details </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="payment method" position="left">
          <Input type="hidden" />
        </FormRow>

        <FormRow position="right">
          <RadioButtonsContainer>
            <RadioButton
              value="card"
              checked={checked === "card"}
              label="Pay with card"
              onChange={handleChange}
            />
            <RadioButton
              value="cash"
              checked={checked === "cash"}
              label="Cash on Delivery"
              onChange={handleChange}
            />
          </RadioButtonsContainer>
        </FormRow>

        {/* {checked === "card" && (
          <>
            <FormRow
              label="card Number"
              position="left"
              error={errors?.money?.message}
            >
              <Input
                placeholder="729027474"
                error={errors?.money?.message}
                {...register("money", {
                  required: "This field is required",

                  maxLength: {
                    value: 9,
                    message: "card Number should be at most 9",
                  },
                })}
              />
            </FormRow>

            <FormRow
              label="card PIN"
              error={errors?.pin?.message}
              position="right"
            >
              <Input
                placeholder="4967"
                error={errors?.pin?.message}
                {...register("pin", {
                  required: "This field is required",
                  maxLength: {
                    value: 4,
                    message: "card pin should be at most 4",
                  },
                })}
              />
            </FormRow>
          </>
        )} */}

        {checked === "cash" && (
          <FormRow position="both">
            <PayOnDelivery />
          </FormRow>
        )}

        {checked === "card" && (
          <FormRow position="right">
            <Modal.Open opens="checkout" checkout={handleCheckout}>
              <Button> Continue & pay </Button>
            </Modal.Open>
          </FormRow>
        )}

        {checked === "cash" && (
          <FormRow position="right">
            {!isLoading && (
              <Modal.Open opens="checkout">
                <Button> Continue & Accept </Button>
              </Modal.Open>
            )}
          </FormRow>
        )}

        <Modal.Window name="checkout" page="confirm">
          <Confirmation />
        </Modal.Window>
      </Form>
    </Modal>
  );
}

export default PaymentDetails;
