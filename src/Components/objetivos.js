import React, { useState } from "react";
import * as S from "../Components/Style/stylesODS";

export default function Main() {
  const [status, setStatus] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);

  const Lista = () => {
    return (
      <div>
        <h1>Erradicação da Pobreza</h1>
        <h3>Objetivos</h3>
        <p>
          - Equalizar as oportunidades de acesso a emprego digno entre homens e
          mulheres{" "}
        </p>
      </div>
    );
  };

  const Lista2 = () => {
    return (
      <div>
        <h1>Educação de Qualidade</h1>
        <h3>Objetivos</h3>
        <p>- Democratizar o acesso à educação pública</p>
        <p>- Proteger e cuidar das escolas do bairro</p>
        <p>- Criar políticas de incentivo à permanência dos jovens</p>
        <p>- Incentivar o acesso ao ensino superior</p>
      </div>
    );
  };

  const Lista3 = () => {
    return (
      <div>
        <h1>Indústria, Inovação e Infraestrutura</h1>
        <h3>Objetivos</h3>
        <p>- Através da industrialização sustentável, gerar mais empregos</p>
        <p>
          - Criar economia participativa entre as pequenas empresas do bairro
        </p>
        <p>
          - Apoiar iniciativas de inovação oriundas dos empreendimentos locais
        </p>
      </div>
    );
  };

  const Lista4 = () => {
    return (
      <div>
        <h1>Redução das desigualdades</h1>
        <h3>Objetivos</h3>
        <p>- Distribuição de renda para mulheres mães solo</p>
        <p>- Acesso a oportunidades de emprego para jovens</p>
        <p>- Subsídios e políticas em torno do acesso a moradia</p>
      </div>
    );
  };

  return (
    <div>
      <h1>
        Os objetivos de desenvolvimento sustentável no bairro tancredo neves 2
      </h1>

      <>
        <S.Button
          onClick={() => {
            setStatus(!status);
          }}
        >
          {" "}
          {status ? (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-1.svg"
              alt=""
            />
          ) : (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-1.svg"
              alt=""
            />
          )}{" "}
        </S.Button>
        {status && Lista()}
        <S.Button
          onClick={() => {
            setStatus2(!status2);
          }}
        >
          {" "}
          {status2 ? (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg"
              alt=""
            />
          ) : (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg"
              alt=""
            />
          )}{" "}
        </S.Button>
        {status2 && Lista2()}
        <S.Button
          onClick={() => {
            setStatus3(!status3);
          }}
        >
          {" "}
          {status3 ? (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg"
              alt=""
            />
          ) : (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg"
              alt=""
            />
          )}{" "}
        </S.Button>
        {status3 && Lista3()}
        <S.Button
          onClick={() => {
            setStatus4(!status4);
          }}
        >
          {" "}
          {status4 ? (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg"
              alt=""
            />
          ) : (
            <img
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg"
              alt=""
            />
          )}{" "}
        </S.Button>
        {status4 && Lista4()}
      </>
    </div>
  );
}
