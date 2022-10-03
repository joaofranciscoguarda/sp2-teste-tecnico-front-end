import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: fit-content;

  text-align: left;

  margin-top: 5%;
`;

interface InputProps {
  error: boolean;
}

export const InputField = styled.input<InputProps>`
  width: 300px;
  height: 45px;

  border: 1.5px solid var(--black-default);
  border-radius: 12px;

  ${(props) =>
    props.error === true &&
    css`
      border: 2px solid var(--red-600);
    `}

  &:focus {
    border: 2px solid var(--blue-700);
  }
`;

export const ErrorMessage = styled.p<InputProps>`
  color: var(--red-600);
  font-size: 14px;
`;

export const Label = styled.label`
  width: 100%;
  height: 20px;
`;
