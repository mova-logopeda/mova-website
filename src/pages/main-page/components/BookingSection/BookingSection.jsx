import React, { useEffect, useState } from 'react';
import './BookingSection.css';
import { InlineWidget } from 'react-calendly';

const BookingSection = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    const consent = JSON.parse(localStorage.getItem('cookieConsent') || '{}');
    if (consent.calendly) {
      setShowCalendly(true);
    }

    const handleConsentUpdate = () => {
      const updatedConsent = JSON.parse(localStorage.getItem('cookieConsent') || '{}');
      setShowCalendly(!!updatedConsent.calendly);
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
  }, []);

  return (
    <section className="booking-section" id="booking">
      <div className="booking-content">
        <div className="booking-left-side">
          <div className="booking-header">
            <h2>Jak się umówić?</h2>
          </div>
          <div className="booking-text-wrapper" data-aos="fade-up">
            <div className="booking-text">
              <ol>
                <li><span className="step-number">1</span> wybierz termin wizyty</li>
                <li><span className="step-number">2</span> wypełnij formularz zgłoszeniowy</li>
                <li><span className="step-number">3</span> otrzymasz link do spotkania</li>
                <li><span className="step-number">4</span> resztę zostaw w rękach naszego doświadczonego specjalisty</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="calendly-container">
          {showCalendly ? (
            <InlineWidget url="https://calendly.com/logostudio-online/30min" />
          ) : (
            <p>
              Aby umówić wizytę online, musisz wyrazić zgodę na pliki cookies dla
              usługi Calendly. Zarządzaj zgodą w stopce strony.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
