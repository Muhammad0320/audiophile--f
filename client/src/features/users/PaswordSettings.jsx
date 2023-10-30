import Form2 from "../../ui/Form2";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdatePassword } from "./useUpdatePassword";

function PaswordSettings() {
  const { updatePassword, isUpdatingPassowrd } = useUpdatePassword();

  const { register, handleSubmit, reset } = useForm();

  const onSubmitPassword = (
    { password, passwordConfirm, currentPassword },
    e
  ) => {
    e.preventDefault();

    updatePassword(
      { currentPassword, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form2 onSubmit={handleSubmit(onSubmitPassword)}>
      <FormRow account label="Current password">
        <Input
          type="password"
          disabled={isUpdatingPassowrd}
          placeholder="••••••••"
          account="true"
          {...register("currentPassword")}
        />
      </FormRow>

      <FormRow account label="Password">
        <Input
          type="password"
          disabled={isUpdatingPassowrd}
          placeholder="••••••••"
          account="true"
          {...register("password")}
        />
      </FormRow>

      <FormRow account label="Confirm password">
        <Input
          type="password"
          placeholder="••••••••"
          disabled={isUpdatingPassowrd}
          account="true"
          {...register("passwordConfirm")}
        />
      </FormRow>

      {isUpdatingPassowrd ? (
        <Button withspinner="true" disabled={isUpdatingPassowrd}>
          {" "}
          <SpinnerMini /> <span> updating password... </span>{" "}
        </Button>
      ) : (
        <Button withspinner="true"> Save password </Button>
      )}
    </Form2>
  );
}

export default PaswordSettings;
