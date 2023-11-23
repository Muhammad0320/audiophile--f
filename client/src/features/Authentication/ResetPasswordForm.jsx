import Form2 from "../../ui/Form2";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";
import { useResetPassword } from "./useResetPassword";

function ResetPasswordForm() {
  const { register, reset, handleSubmit } = useForm();

  const { resetPassword, isLoading } = useResetPassword();

  const { token } = useParams();

  const onsubmit = ({ password, passwordConfirm }, e) => {
    e.preventDefault();

    resetPassword({ token, password, passwordConfirm });

    reset();
  };

  return (
    <Form2 onSubmit={handleSubmit(onsubmit)}>
      <FormRow label="New Password">
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password", { required: "Please input your password" })}
        />
      </FormRow>

      <FormRow label="Confirm New Password">
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("passwordConfirm", {
            required: "Please confirm your password",
          })}
        />
      </FormRow>

      {isLoading ? (
        <Button withspinner={"true"}>
          {"  "}
          <SpinnerMini />
          {"  "}
          <span> Resetting your password... </span>{" "}
        </Button>
      ) : (
        <Button> Reset </Button>
      )}
    </Form2>
  );
}

export default ResetPasswordForm;
