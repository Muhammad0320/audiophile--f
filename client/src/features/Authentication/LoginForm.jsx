import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const { register, reset, handleSubmit } = useForm();

  return (
    <Form2 onSubmit={{}}>
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

      {/* {isLoading ? (
        <Button withspinner={"true"}>
          {"  "}
          <SpinnerMini />
          {"  "}
          <span> Creating Account... </span>{" "}
        </Button>
      ) : (
        <Button> Create Account </Button>
      )} */}
    </Form2>
  );
}

export default SignupForm;
