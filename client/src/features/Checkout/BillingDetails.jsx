import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import InputTypeHeader from "../../ui/InputTypeHeader";
import Form from "../../ui/Form";
import { styled } from "styled-components";
import Button from "../../ui/Button";

const FormHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 500;

  margin: 3rem 0;
  color: var(--color-dark);
`;

function BillingDetails() {
  const { register, reset, formState, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = () => {
    reset();
  };

  return (
    <>
      <FormHeader> Checkout </FormHeader>
      <InputTypeHeader> Billing Details </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Name" position="left" error={errors?.name?.message}>
          <Input
            id="email"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Email" position="right" error={errors?.email?.message}>
          <Input
            id="email"
            type="email"
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
          position="left"
          error={errors?.phone?.message}
        >
          <Input
            id="phone"
            placeholder="+123 4567 8912 34"
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

        <FormRow position="left">
          <Button> Next </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default BillingDetails;
