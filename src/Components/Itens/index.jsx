import React from "react";
import styledComponents from "styled-components";
import Item from "../Item";
import IconesFiltro from "../UI/iconesFiltro"


const Itens = styledComponents.div `
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  aling-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) =>{
  return (
    <Itens>
      {IconesFiltro(props.type)}
      <Item 
        {...props}
      />
      <spa>{props.date}</spa>
    </Itens>
  )
}
