import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import InputTypeHeader from "../../ui/InputTypeHeader";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { handleFormStep } from "./handleFormStep";
import { useViewport } from "../../context/ViewPort";

function ShippingInfo({ step, setStep }) {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const onSubmit = handleFormStep(reset, step, setStep);

  const { viewportWidth } = useViewport();

  const isSmallVW = viewportWidth < 600;

  return (
    <>
      <InputTypeHeader> Shipping info </InputTypeHeader>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Address"
          position="both"
          error={errors?.address?.message}
        >
          <Input
            id="address"
            type="text"
            disabled={step !== 2}
            placeholder="1137 williams avenue"
            {...register("address", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Zip Code"
          position={isSmallVW ? "both" : "left"}
          error={errors?.zip?.message}
        >
          <Input
            id="zip"
            error={errors?.zip?.message}
            type="text"
            placeholder="420101"
            disabled={step !== 2}
            {...register("zip", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{6}(?:-[0-9]{4})?$/,
                message: "Wrong Zip code format",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="City"
          position={isSmallVW ? "both" : "right"}
          error={errors?.city?.message}
        >
          <Input
            id="city"
            disabled={step !== 2}
            placeholder="NY CITY"
            error={errors?.city?.message}
            {...register("city", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="Country"
          position={isSmallVW ? "both" : "left"}
          error={errors?.country?.message}
        >
          <Input
            id="country"
            disabled={step !== 2}
            placeholder="USA"
            error={errors?.country?.message}
            {...register("country", {
              required: "This field is required",
            })}
          />

          <FormRow position={isSmallVW ? "both" : "right"}>
            <Button disabled={step !== 2}> Continue </Button>
          </FormRow>
        </FormRow>
      </Form>
    </>
  );
}

export default ShippingInfo;
