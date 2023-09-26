import styled from "styled-components";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

const InfoDetails = styled.div`
  padding: 2rem 3rem;
  grid-column: 2 / -1;
`;

function Settings() {
  return (
    <InfoDetails>
      <Form2>
        <FormRow label="Name">
          <Input type="text" />
        </FormRow>

        <FormRow label="Email address">
          <Input type="text" />
        </FormRow>
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
