import Form2 from "../../ui/Form2";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useSignup } from "./useSignup";
import { useForm } from "react-hook-form";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const { register, reset, handleSubmit } = useForm();

  const { signup, isLoading } = useSignup();

  const onSubmit = ({ name, email, password, passwordConfirm }, e) => {
    e.preventDefault();

    signup(
      { name, email, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  };
  
  return (  
    <Form2 onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name">
        <Input
          id="name"
          type="text"
          {...register("name", { required: "User must have a name" })}
        />
      </FormRow>

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

      <FormRow label="Confirm password">
        <Input
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm", {
            required: "confirm your password",
          })}
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
