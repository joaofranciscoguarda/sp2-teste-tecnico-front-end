import { useEffect, useState } from "react";
import { useLocal } from "../../context/context";
import { Container, DivisionBase, Header, Infos, InfosContainer, Money } from "./styles";

function Values() {
  const { data } = useLocal();

  return (
    <Container>
      <>
        <Header>Você receberá:</Header>
        <DivisionBase></DivisionBase>
        <InfosContainer>
          {!!data &&
            Object.keys(data).map((key, index) => {
              return (
                <Infos key={index}>
                  {key === '1' ? "Amanhã" : `Em ${key} dias`} <Money>: R$ {data[key].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Money>
                </Infos>
              );
            })}
        </InfosContainer>
      </>
    </Container>
  );
}

export default Values;
