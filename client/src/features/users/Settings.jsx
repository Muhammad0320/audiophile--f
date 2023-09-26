import styled from "styled-components";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const InfoDetails = styled.div`
  padding: 5rem 6rem;
  grid-column: 2 / -1;
`;

function Settings() {
  return (
    <InfoDetails>
      <Form2>
        <FormRow account label="Name">
          <Input account="true" type="text" />
        </FormRow>

        <FormRow account label="Email address">
          <Input account="true" type="text" />
        </FormRow>
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
