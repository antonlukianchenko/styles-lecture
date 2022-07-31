import styled, { css, keyframes } from "styled-components";

const outlinedButtonStyles = css`
  border: 1px solid red;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonStyled = styled.button`
  background-color: #790606;
  color: white;
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.$shadowXl};
  font-size: ${({ theme }) => theme.$fontXl};
  height: ${({ height }) => height + "px"};
  ${({ variant }) => (variant === "outlined" ? outlinedButtonStyles : "")}
  animation: ${rotate} 6s infinite ease;
`;
