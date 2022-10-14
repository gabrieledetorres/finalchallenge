import React from "react";
import * as S from "../Components/Style/stylesAbout";
import Footer from "../Components/footer";

export default function Main() {
  return (
    <div>
      <S.Description>
        <S.Figure>
          <S.Image
            src="https://scontent.fpav1-1.fna.fbcdn.net/v/t39.30808-6/279485399_5263916087062700_224796195324860594_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WokuLqY_zywAX9CsqaN&tn=2QKjxH895bJtw78e&_nc_ht=scontent.fpav1-1.fna&oh=00_AT8py0GaAWS72uXCy2c5Ezyt0C4k4ZEsPe71sb15WYBK9w&oe=634DEA65"
            alt="Nora"
          />

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
        </S.Figure>
        <S.Section>
          <h1>Olá, eu sou a Nora</h1>
          <p>
            Nora é meu nome islâmico e você pode me chamar assim. Tenho 22 anos,
            curso direito ao mesmo tempo que estudo tecnologia (por enquanto) e
            quero me tornar porta-voz de acesso à tecnologia no universo do
            desenvolvimento. Sonho grande, missão também!
          </p>
        </S.Section>
      </S.Description>
      <Footer />
    </div>
  );
}
