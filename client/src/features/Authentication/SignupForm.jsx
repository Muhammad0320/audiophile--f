import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";

function SignupForm() {
  const { register, reset, handleSubmit, formState } = useForm();

  return (
    <Form2>
      <FormRow label="name">
        <Input
          id="name"
          type="text"
          {...register("name", { required: "User must have a name" })}
        />
      </FormRow>

      <FormRow label="email">
        <Input
          id="email"
          type="email"
          {...register("name", { required: " User must have an email " })}
        />
      </FormRow>

      <FormRow label="password">
        <Input
          id="password"
          type="password"
          {...register("name", { required: "Please input your password" })}
        />
      </FormRow>

      <FormRow label="confirm password">
        <Input
          id="passwordConfirm"
          type="passwordConfirm"
          {...register("passwordConfirm", {
            required: "confirm your password",
          })}
        />
      </FormRow>
    </Form2>
  );
}

export default SignupForm;
