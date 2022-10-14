import React from "react";
import * as S from "./Style/stylesPortfolio";

export default function Main() {
  return (
    <div>
      <S.BoxFig>
        <S.BoxFig>
          <a href="https://github.com/gabrieletorres/portflow">
            <S.PrintImage
              src="https://i.postimg.cc/SQ9PvV21/Portflow.jpg"
              alt="Portflow"
            />
            <div>
              <p>Portflow</p>
            </div>
          </a>
        </S.BoxFig>

        <S.BoxFig>
          <a href="https://github.com/gabrieletorres/Beat">
            <S.PrintImage
              src="https://i.postimg.cc/tgjWrPTL/Beat.jpg"
              alt="Beat"
            />
            <div>
              <p>Beat</p>
            </div>
          </a>
        </S.BoxFig>

        <S.BoxFig>
          <a href="https://github.com/gabrieletorres/recipes">
            <S.PrintImage
              src="https://i.postimg.cc/xTSZDHLf/Recipes.jpg"
              alt="Recipes"
            />
            <div>
              <p>Recipes</p>
            </div>
          </a>
        </S.BoxFig>

        <S.BoxFig>
          <a href="https://github.com/gabrieletorres/CalculatorStyledComponent">
            <S.PrintImage
              src="https://i.postimg.cc/Xq9DB766/Calculadora.jpg"
              alt="Calculadora"
            />
            <div>
              <p>Calculadora</p>
            </div>
          </a>
        </S.BoxFig>

        <S.BoxFig>
          <a href="https://github.com/gabrieletorres/toDoTwo">
            <S.PrintImage
              src="https://i.postimg.cc/nzyPL951/To-Do.jpg"
              alt="ToDo"
            />
            <div>
              <p>To-Do</p>
            </div>
          </a>
        </S.BoxFig>
      </S.BoxFig>
    </div>
  );
}
