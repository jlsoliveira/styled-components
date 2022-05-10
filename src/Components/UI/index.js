import styledComponents from "styled-components";

export const Icone = styledComponents.img `
  height: 25px;
  width: 25px;
`;
export const IconeTema = styledComponents(Icone) `
  filter: ${({theme}) => theme.filter};
`;

export const Box = styledComponents.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:  ${({theme}) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
  
`;

export const Button = styledComponents.button `
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #41d3be;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Saldo = styledComponents.div `
  font-weight: 700;
  font-size: 32px;
`;

export const Detalhe = styledComponents.span `
  color: #41d3be;
  font-size: 24px;
`;

export const BtnTema = styledComponents.button `
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: 0px;
  cursor: pointer;
`;