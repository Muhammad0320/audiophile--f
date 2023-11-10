import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { register, reset, handleSubmit } = useForm();

  const { login, isLoading } = useLogin();

  const onSubmit = ({ email, password }, e) => {
    e.preventDefault();

    const user = login(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );

    console.log(user);
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
          <span> Logging user in... </span>{" "}
        </Button>
      ) : (
        <Button> Login </Button>
      )}
    </Form2>
  );
}

export default LoginForm;
