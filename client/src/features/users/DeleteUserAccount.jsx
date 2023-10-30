import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { clampBuilder } from "../../styles/clampFunction";

const DangerousOperation = styled.section`
  padding-top: ${() => clampBuilder(320, 1200, 5, 8)};

  display: flex;
  flex-direction: column;

  row-gap: ${() => clampBuilder(320, 1200, 1, 2)};

  color: var(--color-red-light);

  font-weight: 600;
`;

function DeleteUserAccount() {
  return (
    <DangerousOperation>
      <FormRow type="danger" account label={"Password"}>
        <Input
          id="delete"
          type="password"
          account
          dangerous="danger"
          placeholder="••••••••"
        />
      </FormRow>

      <Button variation="danger"> Delete my account </Button>
    </DangerousOperation>
  );
}

export default DeleteUserAccount;
