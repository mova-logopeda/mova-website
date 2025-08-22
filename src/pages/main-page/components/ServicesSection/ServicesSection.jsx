import './ServicesSection.css'
import React from 'react';

const ServicesSection = () => {
  const handleScroll = () => {
    const bookingSection = document.getElementById("BookingSection");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-section" >
      <h2 className="services-title" id="services">Usługi</h2>
      <div className="services-line"></div>
      <p className="services-subtitle">
        Oferujemy kompleksową opiekę logopedyczną dostosowaną do potrzeb dzieci i dorosłych.
      </p>

      <div className="services-grid">
        <div className="service-card beige1" data-aos="fade-up" >Konsultacja <br />logopedyczna</div>
        <div className="service-card beige2" data-aos="fade-up" >Terapie <br />logopedyczne</div>
        <div className="service-card beige3" data-aos="fade-up" >Diagnozy <br />logopedyczne</div>
        <div className="service-card beige4" data-aos="fade-up" >Terapie <br />neurologopedyczne</div>
      </div>

      <a href="#booking" className="services-button" onClick={handleScroll} data-aos="fade-up" > 
        Umów się na wizytę
      </a>
    </section>
  );
};

export default ServicesSection;