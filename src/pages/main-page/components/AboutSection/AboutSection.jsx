import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h2>Kim jesteśmy?</h2>
      <div className="about-content">
        <img
          src={require('../../../../assets/images/IMG_2122.JPG')}
          alt="Zespół logopedyczny"
        />
        <p>
          Mowa to przestrzeń dla dziecka, dla rodzica, dla logopedy. Jesteśmy tu DLA WAS.
          Pracowaliśmy z jedną osobą w regularnym prowadzeniu mowy i z trudnymi dorosłymi,
          w celu odbudowania relacji z komunikacją. Lubimy być w terenie: wyjazdy do przedszkoli,
          placówek, spotkania domowe. Lubimy też współpracę logopedyczną, działamy zespołowo,
          naturalnie dzielimy się naszymi doświadczeniami i zmieniamy je na konkretne działania.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
