function userDataSettings() {
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

export default userDataSettings;
