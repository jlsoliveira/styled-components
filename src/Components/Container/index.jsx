import React from "react";
import styledComponents from "styled-components";
import Extrato from "../../Components/Extrato"
import Titulo from "../Titulo";
import Conta from "../Conta";

const Container = styledComponents.div `
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styledComponents.section `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color:  ${({theme}) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }

`;


export default() => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
