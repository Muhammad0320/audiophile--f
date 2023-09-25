import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function SignupForm() {
  const { register, reset, handleSubmit } = useForm();

  const { login, isLoading } = useLogin();

  const onSubmit = ({ email, password }, e) => {
    e.preventDefault();

    login(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form2 onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email">
        <Input
          id="email"
          type="email"
          {...register("email", { required: " User must have an email " })}
        />
      </FormRow>

      <FormRow label="Password">
        <Input
          id="password"
          type="password"
          {...register("password", { required: "Please input your password" })}
        />
      </FormRow>

      {isLoading ? (
        <Button withspinner={"true"}>
          {"  "}
          <SpinnerMini />
          {"  "}
          <span> Creating Account... </span>{" "}
        </Button>
      ) : (
        <Button> Create Account </Button>
      )}
    </Form2>
  );
}

export default SignupForm;
