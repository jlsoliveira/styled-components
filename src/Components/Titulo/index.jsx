import styledComponents from "styled-components";

const Titulo = styledComponents.h1 `
  color:  ${({theme}) => theme.text};
  padding: 25px 0;
`;

export default Titulo;
