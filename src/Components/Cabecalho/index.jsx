import React from "react";
import styledComponents from "styled-components";
import { corPrimaria } from "../UI/variaveis";
import bank_logo from "../../assets/images/bank_logo.svg";

const StyledHeader = styledComponents.nav `
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styledComponents.img `
  height: 50px;
  width: 50px;
`;

const BtnHeader = styledComponents.a `
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props => (props.primary ? "white" : corPrimaria))};
  color: ${(props => (props.primary ? corPrimaria : "white"))};
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com"> Ajuda </BtnHeader>
        <BtnHeader href="https://google.com"> Sair </BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
