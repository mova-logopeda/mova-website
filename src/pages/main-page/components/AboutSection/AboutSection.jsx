import React from 'react';
import './AboutSection.css';
import Ewelina from "../../../../assets/images/Ewelina.jpg";
import EwelinaBooks from "../../../../assets/images/Ewelina books.jpg";

const AboutSection = () => {
  return (
    <section className="about-section" id="about" aria-label="O nas">
      <div className="about-content-up">
        <div className="about-inner">
          <div className="about-content-up-left">
            <div className="about-up-picture-container">
              <img
                src={Ewelina}
                alt="Zespół logopedyczny"
              />
            </div>
          </div>
          <div className="about-content-up-right">
            <h2>Z pasją i wiedzą</h2>
            <div className="about-up-underline" aria-hidden="true" />
            <p>
              Mowa to przestrzeń dla dziecka, dla rodzica, dla logopedy. Jesteśmy tu DLA WAS.
              Pracowaliśmy z jedną osobą w regularnym prowadzeniu mowy i z trudnymi dorosłymi,
              w celu odbudowania relacji z komunikacją. Lubimy być w terenie: wyjazdy do
              przedszkoli, placówek, spotkania domowe. Lubimy też współpracę logopedyczną,
              działamy zespołowo, naturalnie dzielimy się naszymi doświadczeniami i zmieniamy
              je na konkretne działania.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-down">
        <div className="about-inner">
          <div className="about-content-down-left">
            <div className="about-down-picture-container">
              <img
                src={EwelinaBooks}
                alt="Zespół logopedyczny"
              />
            </div>
          </div>
          <div className="about-content-down-right">
            <div className="about-down-text-box">
              <h2>O nas</h2>
              <p>
                Nazywam się Ewelina Lubrycht. Jestem logopedą ze specjalizacją
                neurologopedii i wczesnej interwencji logopedycznej. Swój dyplom
                uzyskałam studiując na Uniwersytecie Gdańskim i Gdańskim Uniwersytecie
                Medycznym. Działam zawodowo już od 2018 roku. Pracuję z maluchami mieszkającymi
                w Polsce i za granicą. Prowadzę diagnozy i terapię online – wygodnie i
                skutecznie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
