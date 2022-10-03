import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  background-color: var(--gray-100);
`;

export const CalculatorContainer = styled.div`
  width: fit-content;
  height: 500px;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  background-color: var(--white-default);
  border-radius: 12px;
  `;

export const Form = styled.form`
  width: 400px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 25px;
  border: 2px solid var(--gray-200);
  border-right: 0;
  border-radius: 12px 0px 0px 12px;
  background-color: var(--white-default);

  & > button {
    width: 150px;
    border: 1px solid var(--blue-600);
    border-radius: 8px;
    padding: 12px;
    background-color: var(--blue-100);
    margin-top: 12px;
  }
`;

export const FormHeader = styled.header`
  font-size: 28px;
  font-weight: 700;
`;
