import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { handleFormStep } from "./handleFormStep";
import { useViewport } from "../../context/ViewPort";
import InputTypeHeader from "../../ui/InputTypeHeader";
import { clampBuilder } from "../../styles/clampFunction";

const FormHeader = styled.div`
  font-size: ${() => clampBuilder(320, 1200, 2.6, 3.5)};
  font-weight: 500;

  margin: ${() => clampBuilder(320, 1200, 1.8, 3)} 0;
  color: var(--color-dark);
`;

function BillingDetails({ step, setStep }) {
  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = handleFormStep(step, setStep);

  const { viewportWidth } = useViewport();

  const isSmallVW = viewportWidth < 600;

  return (
    <>
      <FormHeader> Checkout </FormHeader>
      <InputTypeHeader> Billing Details </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Name"
          position={isSmallVW ? "both" : "left"}
          error={errors?.name?.message}
        >
          <Input
            id="email"
            disabled={step !== 1}
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Email"
          position={isSmallVW ? "both" : "right"}
          error={errors?.email?.message}
        >
          <Input
            id="email"
            type="email"
            disabled={step !== 1}
            placeholder="example@gmail.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Wrong email format",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Phone Number"
          disabled={step !== 1}
          position={isSmallVW ? "both" : "left"}
          error={errors?.phone?.message}
        >
          <Input
            id="phone"
            placeholder="+123 4567 8912 34"
            disabled={step !== 1}
            error={errors?.phone?.message}
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value:
                  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: "Wrong phone number format",
              },
            })}
          />
        </FormRow>

        <FormRow position={isSmallVW ? "both" : "left"}>
          <Button disabled={step !== 1}> Next </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default BillingDetails;
