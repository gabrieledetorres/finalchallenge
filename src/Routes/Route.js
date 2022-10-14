import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Objetivos from "../Components/objetivos";
import Sobre from "../Components/sobre";
import Portfolio from "../Components/portfolio";
import Home from "../Components/home";
import * as S from "../Components/Style/styles";

const Rota = () => {
  return (
    <BrowserRouter>
      <Rotas rota="Home" rota2="Objetivos" rota3="Sobre" rota4="Portfólio" />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/objetivos" element={<Objetivos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rota;

function Rotas({ rota, rota2, rota3, rota4 }) {
  return (
    <S.Nav>
      <S.UL>
        <S.Li>
          <S.LinkNav to="/home">{rota}</S.LinkNav>
        </S.Li>

        <S.Li>
          <S.LinkNav to="/objetivos">{rota2}</S.LinkNav>
        </S.Li>

        <S.Li>
          <S.LinkNav to="/sobre">{rota3}</S.LinkNav>
        </S.Li>

        <S.Li>
          <S.LinkNav to="/portfolio">{rota4}</S.LinkNav>
        </S.Li>
      </S.UL>
    </S.Nav>
  );
}
