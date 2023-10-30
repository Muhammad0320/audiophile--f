import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { clampBuilder } from "../../styles/clampFunction";
import { useState } from "react";
import { useDeleteUser } from "./useDeleteUser";
import Modal from "../../ui/Modal";
import DeleteConfirm from "../../ui/DeleteConfirm";

const DangerousOperation = styled.section`
  padding-top: ${() => clampBuilder(320, 1200, 5, 8)};

  display: flex;
  flex-direction: column;

  row-gap: ${() => clampBuilder(320, 1200, 1, 2)};

  color: var(--color-red-light);

  font-weight: 600;
`;

function DeleteUserAccount() {
  const [deleteInput, setDeleteInput] = useState();

  const { deleteUser, isDeleting } = useDeleteUser();

  console.log(deleteInput);

  const onSubmit = () => {
    deleteUser({ currentPassword: deleteInput });
  };

  return (
    <Modal>
      <DangerousOperation>
        <FormRow type="danger" account="true" label={"Password"}>
          <Input
            id="delete"
            type="password"
            account
            dangerous="danger"
            placeholder="••••••••"
            onChange={(e) => setDeleteInput(e.target.value)}
          />
        </FormRow>

        <Modal.Open opens="deleteAccount">
          <Button variation="danger"> Delete my account </Button>
        </Modal.Open>

        <Modal.Window page="confirmDelete" name="deleteAccount">
          <DeleteConfirm
            OnConfirm={onSubmit}
            resource="account"
            isDeleting={isDeleting}
          />
        </Modal.Window>
      </DangerousOperation>
    </Modal>
  );
}

export default DeleteUserAccount;
