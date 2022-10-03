import styled from "styled-components";

interface DivProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  width: 240px;
  height: 100%;
  padding: 24px;
  text-align: left;

  border-radius: 0px 12px 12px 0px;

  background-color: var(--gray-200);
`;

export const Header = styled.header`
  color: var(--blue-600);
  font-size: 24px;
  justify-self: flex-start;
`;

export const DivisionBase = styled.div`
width: 100%;

border: 1px solid var(--blue-600);

margin: 4px 0px 12px 0px;
`

export const InfosContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  align-items: left;
  justify-content: center;
  justify-self: center;
  text-align: left;
`;

export const Infos = styled.div`
  margin-top: 10px;
  display: flex;
  color: var(--blue-500);
`;


export const Money = styled.div`
  color: var(--blue-600);
  font-weight:500;
`;
