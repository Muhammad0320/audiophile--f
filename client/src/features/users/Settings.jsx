import styled from "styled-components";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

const InfoDetails = styled.div`
  padding: 5rem 6rem;
  grid-column: 2 / -1;
`;

function Settings() {
  const { register, handleSubmit } = useForm();

  return (
    <InfoDetails>
      <Form2>
        <FormRow account label="Name">
          <Input
            account="true"
            type="text"
            {...register("name", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow account label="Email address">
          <Input account="true" type="text" {...register("email")} />
        </FormRow>
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
