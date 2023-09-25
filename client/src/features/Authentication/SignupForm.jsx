import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function SignupForm() {
  return (
    <Form2>
      <FormRow label="name">
        <Input />
      </FormRow>

      <FormRow label="email">
        <Input />
      </FormRow>

      <FormRow label="password">
        <Input />
      </FormRow>

      <FormRow label="passwordConfirm">
        <Input />
      </FormRow>
    </Form2>
  );
}

export default SignupForm;
