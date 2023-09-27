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
import { useUpdatePassword } from "./useUpdatePassword";

const InfoDetails = styled.div`
  padding: 5rem 6rem;
  grid-column: 2 / -1;

  display: flex;
  justify-content: center;
  /* width: 90%; */

  overflow: auto;

  flex-flow: column;

  /* row-gap: 5rem; */

  &:has(form) form:first-of-type {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 10rem;
  }

  &:has(form) form:last-of-type {
    /* border-bottom: 2px solid rgba(0, 0, 0, 0.2); */
    padding-top: 8rem;
  }
`;

const FileGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 2rem;
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

  const { updatePassword, isUpdatingPassowrd } = useUpdatePassword();

  const { register, handleSubmit, reset } = useForm();

  const onSubmitData = ({ name, email }, e) => {
    e.preventDefault();

    updateUser({ name, email });
  };

  const onSubmitPassword = (
    { password, passwordConfirm, currentPassword },
    e
  ) => {
    e.preventDefault();

    updatePassword(
      { currentPassword, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <InfoDetails>
      <Form2 onSubmit={handleSubmit(onSubmitData)}>
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
            <SpinnerMini /> <span> updating settings... </span>{" "}
          </Button>
        ) : (
          <Button withspinner="true"> Save settings </Button>
        )}
      </Form2>

      <Form2 onSubmit={handleSubmit(onSubmitPassword)}>
        <FormRow account label="Current password">
          <Input
            type="password"
            placeholder="••••••••"
            account="true"
            {...register("currentPassword")}
          />
        </FormRow>

        <FormRow account label="Password">
          <Input
            type="password"
            placeholder="••••••••"
            account="true"
            {...register("password")}
          />
        </FormRow>

        <FormRow account label="Confirm password">
          <Input
            type="password"
            placeholder="••••••••"
            account="true"
            {...register("passwordConfirm")}
          />
        </FormRow>

        {isUpdatingPassowrd ? (
          <Button withspinner="true" disabled={isUpdatingPassowrd}>
            {" "}
            <SpinnerMini /> <span> updating password... </span>{" "}
          </Button>
        ) : (
          <Button withspinner="true"> Save password </Button>
        )}
      </Form2>
    </InfoDetails>
  );
}

export default Settings;
