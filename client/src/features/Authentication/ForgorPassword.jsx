import styled from "styled-components";
import { clampBuilder } from "../../styles/clampFunction";
import Form2 from "../../ui/Form2";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useState } from "react";
import { useForgotPassword } from "./useForgotPassword";

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-block: ${() => clampBuilder(320, 1200, 2.2, 3.5)};

  padding-inline: ${() => clampBuilder(320, 1200, 1, 3)};

  background-color: var(--color-white-1);
  background-image: var(--color-gradient-light);
  border-radius: 1.5rem;
`;

function ForgorPassword() {
  const [email, setEmail] = useState("");

  const { forgotPassword, isLoading } = useForgotPassword();

  const handleSubmit = () => {
    if (!email) return;

    forgotPassword({ email });
  };

  return (
    <Container>
      <Form2 onSubmit={handleSubmit}>
        <FormRow label="Email" error={!email && "This field is required"}>
          <Input
            id="email"
            placeholder="Enter your email"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRow>

        <Button> Submit </Button>
      </Form2>
    </Container>
  );
}

export default ForgorPassword;
