import Form2 from "../../ui/Form2";
import Input from "../../ui/Input";
import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useUser } from "./useUser";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUpdatePassword } from "./useUpdatePassword";
import Spinner from "../../ui/Spinner";
import { clampBuilder } from "../../styles/clampFunction";
import UserDataSettings from "./userDataSettings";

const InfoDetails = styled.div`
  padding: ${() => clampBuilder(320, 1200, 3, 5)};
  ${() => clampBuilder(320, 1200, 4, 7)};
  grid-column: 2 / -1;
  overflow: auto;

  display: flex;
  justify-content: center;

  flex-flow: column;

  & > form:first-of-type {
    border-bottom: 2px solid var(--color-dark-2);
    padding-bottom: ${() => clampBuilder(320, 1200, 6, 10)};
  }

  & > form:last-of-type {
    padding-block: ${() => clampBuilder(320, 1200, 5, 8)};

    border-bottom: 2px solid var(--color-dark-2);
  }
`;

const DangerousOperation = styled.section`
  padding-top: ${() => clampBuilder(320, 1200, 5, 8)};

  display: flex;
  flex-direction: column;

  row-gap: ${() => clampBuilder(320, 1200, 1, 2)};

  color: var(--color-red-light);

  font-weight: 600;
`;

function Settings() {
  const { user = {}, isLoading } = useUser();

  const { updatePassword, isUpdatingPassowrd } = useUpdatePassword();

  const { register, handleSubmit, reset } = useForm();

  if (isLoading) return <Spinner />;

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
      <UserDataSettings user={user} />

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
    </InfoDetails>
  );
}

export default Settings;
