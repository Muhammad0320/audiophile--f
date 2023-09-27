import styled from "styled-components";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUser } from "./useUser";
import { useUpdateUSer } from "./useUpdateUser";
import SpinnerMini from "../../ui/SpinnerMini";
import FileInput from "../../ui/FileInput";

const InfoDetails = styled.div`
  padding: 5rem 6rem;
  grid-column: 2 / -1;
`;

const FileGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;
`;

const UserImage = styled.img`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

function Settings() {
  const { user: { name, email, photo } = {} } = useUser();

  const { updateUser, isUpdating } = useUpdateUSer();

  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name, email }, e) => {
    e.preventDefault();

    updateUser({ name, email });
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

        <FileGroup>
          <UserImage src={`/assets/users/${photo}`} />

          <FileInput name="photo" id="photo" accept="image/*" />
        </FileGroup>

        {isUpdating ? (
          <Button withspinner="true" disabled={isUpdating}>
            {" "}
            <SpinnerMini /> <span> updating settings </span>{" "}
          </Button>
        ) : (
          <Button withspinner="true"> Save settings </Button>
        )}
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
