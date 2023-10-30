import { useUser } from "./useUser";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import PaswordSettings from "./PaswordSettings";
import UserDataSettings from "./userDataSettings";
import DeleteUserAccount from "./DeleteUserAccount";
import { clampBuilder } from "../../styles/clampFunction";

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

function Settings() {
  const { user = {}, isLoading } = useUser();

  if (isLoading) return <Spinner />;

  return (
    <InfoDetails>
      <UserDataSettings user={user} />
      <PaswordSettings />
      <DeleteUserAccount />
    </InfoDetails>
  );
}

export default Settings;
