import styled from "styled-components";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUser } from "./useUser";

const InfoDetails = styled.div`
  padding: 5rem 6rem;
  grid-column: 2 / -1;
`;

function Settings() {
  const {
    user: { name, email },
  } = useUser();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name, email }, e) => {
    e.preventDefault();

    console.log(email, name);
  };

  return (
    <InfoDetails>
      <Form2 onSubmit={handleSubmit(onSubmit)}>
        <FormRow account label="Name">
          <Input
            account="true"
            type="text"
            defaultValue={name}
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow account label="Email address">
          <Input
            account="true"
            defaultValue={email}
            type="text"
            {...register("email")}
          />
        </FormRow>
        <Button> Save settings </Button>
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
