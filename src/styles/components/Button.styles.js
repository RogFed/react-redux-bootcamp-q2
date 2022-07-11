import styled from "styled-components";

export const StyledButton = styled.button`
width: 100%;
padding: 1.6rem;
color: #fff;
background: var(--primary-blue-color);
border: none;

&:hover {
  background: var(--highlight-grey-color);
  color: var(--primary-blue-color);
  font-weight: 700;
}
`;