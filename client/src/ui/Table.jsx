import styled from "styled-components";

const TableContainer = styled.div`
  margin: 2rem 0;

  border: 1px solid var(--color-dark-2);

  background-color: var(--color-white-2);

  font-size: 1.5rem;

  color: var(--color-dark);
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.column};
  align-content: center;

  column-gap: 2rem;
`;

// const TableHeader = styled(CommonRow)`

//     padding: ;

// `
