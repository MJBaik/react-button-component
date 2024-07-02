import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;

  &:hover,
  &:focus {
    outline: none;
    filter: brightness(1.2);
  }

  &:active {
    outline: none;
    filter: brightness(1.5);
  }
`;
