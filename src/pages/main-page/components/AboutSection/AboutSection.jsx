import React from "react";
import "./AboutSection.css";
import Ewelina from "assets/images/Ewelina.jpg";
import EwelinaBooks from "assets/images/Ewelina books.jpg";

const AboutSection = () => {
  return (
    <section className="about-section" id="about" aria-label="O nas">
      <div className="about-content-up">
        <div className="about-inner">
          <div className="about-content-up-left">
            <div className="about-up-picture-container">
              <img src={Ewelina} alt="Zespół logopedyczny" />
            </div>
          </div>
          <div className="about-content-up-right">
            <h2>Z pasją i wiedzą</h2>
            <div className="about-up-underline" aria-hidden="true" />
            <p data-aos="fade-up">
              Mova to przestrzeń dla dziecka, dla rodzica, dla logopedy,
              Jesteśmy tu DLA WAS. Powstaliśmy z ideą pomocy w rozwijaniu
              prawidłowej mowy u dzieci i dorosłych, w celu edukowania rodziców
              w temacie komunkacji, karmienia, zabawy, rozwoju. Jesteśmy tu
              także by wspierać logopedów, służymy gotowymi narzędziami, a także
              doświadczeniem i wiedzą na temat diagnozy i terapii mowy.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-down">
        <div className="about-inner">
          <div className="about-content-down-left">
            <div className="about-down-picture-container">
              <img src={EwelinaBooks} alt="Zespół logopedyczny" />
            </div>
          </div>
          <div className="about-content-down-right">
            <div className="about-down-text-box">
              <h2>O nas</h2>
              <p data-aos="fade-up">
                Nazywam się Ewelina Lubrycht. Jestem logopedą ze specjalizacją
                neurologopedii i wczesnej interwencji logopedycznej. Swój dyplom
                uzyskałam studiując na Uniwersytecie Gdańskim i Gdańskim
                Uniwersytecie Medycznym. Działam zawodowo już od 2018 roku.
                Pracuję z maluchami mieszkającymi w Polsce i za granicą.
                Prowadzę diagnozy i terapie online – wygodnie i skutecznie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
