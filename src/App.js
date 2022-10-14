import React from "react";
import Rota from "./Routes/Route";
import { GlobalStyle } from "./Components/Style/Global/GlobalStyle";
import * as S from "./Components/Style/styles";

export default function App() {
  return (
    <S.Div>
      <GlobalStyle />
      <Rota />
    </S.Div>
  );
}
