import Button from "../../ui/Button";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

function PaswordSettings() {
  return (
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
  );
}

export default PaswordSettings;
