import { useForm } from "react-hook-form";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function ResetPasswordForm() {
  const { register, reset, handleSubmit } = useForm();

  return (
    <Form2>
      <FormRow label="New Password">
        <Input id="password" type="password" placeholder="••••••••" />
      </FormRow>

      <FormRow label="Confirm New Password">
        <Input id="password" type="password" placeholder="••••••••" />
      </FormRow>
    </Form2>
  );
}

export default ResetPasswordForm;

/* 


const Container = styled.section`
  height: 100dvh;
  background-color: var(--color-white-2);

  display: grid;
  place-items: center;
`;

function ResetPassword() {
  return <></>;
}

export default ResetPassword;


*/
