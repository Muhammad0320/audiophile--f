import { useForm } from "react-hook-form";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useParams } from "react-router-dom";
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
    </Form2>
  );
}

export default ResetPasswordForm;
