import React from "react";
import * as S from "../Components/Style/stylesHome";

export default function Home() {
  return (
    <div>
      <S.Image
        src="https://scontent.fpav1-1.fna.fbcdn.net/v/t39.30808-6/279485399_5263916087062700_224796195324860594_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WokuLqY_zywAX9CsqaN&tn=2QKjxH895bJtw78e&_nc_ht=scontent.fpav1-1.fna&oh=00_AT8py0GaAWS72uXCy2c5Ezyt0C4k4ZEsPe71sb15WYBK9w&oe=634DEA65"
        alt="Nora"
      />
      <h1>Gabriele "Nora" Torres</h1>

      <h3>نورا</h3>
      <p>Desenvolvimento Web</p>

      <S.BoxSocial>
        <a href="https://github.com/gabrieletorres">
          <S.ImgSocial
            src="https://i.postimg.cc/HxYWBLyk/github.png"
            alt="github"
          />
        </a>
        <a href="https://linkedin.com/in/gabrieletorres">
          <S.ImgSocial
            src="https://i.postimg.cc/6QNp4c6R/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="https://instagram.com/gabrieledetorres">
          <S.ImgSocial
            src="https://i.postimg.cc/cJM4R36z/instagram.png"
            alt="instagram"
          />
        </a>
      </S.BoxSocial>

      <S.LogoBox>
        <S.LogoLang src="https://i.postimg.cc/d0wq8FgV/react.png" alt="react" />
        <S.LogoLang src="https://i.postimg.cc/6pdW2qjP/js.png" alt="js" />
        <S.LogoLang src="https://i.postimg.cc/NjhGjm4T/css-3.png" alt="css" />
      </S.LogoBox>
    </div>
  );
}
