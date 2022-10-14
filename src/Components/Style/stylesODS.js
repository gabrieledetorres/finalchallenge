import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
  
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
  }
`;

export const Objetivos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 50px;
`;

export const ObjetivosImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const Button = styled.button`
  border: none;
  margin-left: 5px;
  background-color: transparent;
  img {
    width: 100px;
  }
`;
