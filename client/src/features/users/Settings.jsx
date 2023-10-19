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
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { clampBuilder } from "../../styles/clampFunction";

const InfoDetails = styled.div`
  padding: ${() => clampBuilder(320, 1200, 3, 5)};
  ${() => clampBuilder(320, 1200, 4.5, 7)};
  grid-column: 2 / -1;
  overflow: auto;

  display: flex;
  justify-content: center;

  flex-flow: column;

  &:has(form) form:first-of-type {
    border-bottom: 2px solid var(--color-dark-2);
    padding-bottom: ${() => clampBuilder(320, 1200, 6, 10)};
  }

  &:has(form) form:last-of-type {
    padding-top: ${() => clampBuilder(320, 1200, 5, 8)};
  }
`;

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
function Settings() {
  const { user = {}, isLoading } = useUser();

  const { photo, name, email } = user;

  const { updateUser, isUpdating } = useUpdateUSer();

  const { updatePassword, isUpdatingPassowrd } = useUpdatePassword();

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (user) {
      setValue("name", name || "");
      setValue("email", email || "");
    }
  }, [name, email, setValue, user]);

  if (isLoading) return <Spinner />;

  const onSubmitData = ({ name, email, photo }, e) => {
    console.log(name, email);

    e.preventDefault();

    updateUser({ name, email, photo: photo[0] });
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

      <Form2 onSubmit={handleSubmit(onSubmitPassword)}>
        <FormRow account label="Current password">
          <Input
            type="password"
            disabled={isUpdatingPassowrd}
            placeholder="••••••••"
            account="true"
            {...register("currentPassword")}
          />
        </FormRow>

        <FormRow account label="Password">
          <Input
            type="password"
            disabled={isUpdatingPassowrd}
            placeholder="••••••••"
            account="true"
            {...register("password")}
          />
        </FormRow>

        <FormRow account label="Confirm password">
          <Input
            type="password"
            placeholder="••••••••"
            disabled={isUpdatingPassowrd}
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
