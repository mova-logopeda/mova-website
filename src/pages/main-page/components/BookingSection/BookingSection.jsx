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
      <h2>Jak się umówić?</h2>
      <div className="booking-content">
        <div className="booking-text">
          <ul>
            <li>wybierz termin wizyty</li>
            <li>wypełnij formularz zgłoszeniowy</li>
            <li>otrzymasz link do spotkania</li>
            <li>resztę zostaw w rękach naszego doświadczonego specjalisty</li>
          </ul>
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
