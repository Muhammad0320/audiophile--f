import { useEffect } from "react";
import Form2 from "../../ui/Form2";
import Input from "../../ui/Input";
import { useUser } from "./useUser";
import Button from "../../ui/Button";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import FileInput from "../../ui/FileInput";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdateUSer } from "./useUpdateUser";
import { clampBuilder } from "../../styles/clampFunction";

const FileGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: ${() => clampBuilder(320, 1200, 1.2, 2)};
  margin-bottom: ${() => clampBuilder(320, 1200, 1.2, 2)};
`;

const UserImage = styled.img`
  position: relative;
  width: ${() => clampBuilder(320, 1200, 3.5, 5)};
  height: ${() => clampBuilder(320, 1200, 3.5, 5)};
  border-radius: 50%;
`;

function UserDataSettings({ user }) {
  const { updateUser, isUpdating } = useUpdateUSer();

  const { register, handleSubmit, setValue } = useForm();

  const { photo, name, email } = user;

  useEffect(() => {
    if (user) {
      setValue("name", name || "");
      setValue("email", email || "");
    }
  }, [name, email, setValue, user]);

  const onSubmitData = ({ name, email, photo }, e) => {
    e.preventDefault();

    updateUser({ name, email, photo: photo[0] });
  };

  return (
    <Form2 onSubmit={handleSubmit(onSubmitData)}>
      <FormRow account label="Name">
        <Input
          account="true"
          disabled={isUpdating}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow account label="Email address">
        <Input
          account="true"
          id="email"
          disabled={isUpdating}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FileGroup>
        <UserImage src={`/assets/users/${photo}`} />

        <FileInput
          name="photo"
          disabled={isUpdating}
          id="photo"
          accept="image/*"
          {...register("photo")}
        />
      </FileGroup>

      {isUpdating ? (
        <Button withspinner="true" disabled={isUpdating}>
          {" "}
          <SpinnerMini /> <span> updating settings... </span>{" "}
        </Button>
      ) : (
        <Button withspinner="true"> Save settings </Button>
      )}
    </Form2>
  );
}

export default UserDataSettings;
