import React from 'react';
import './BookingSection.css';
import { InlineWidget } from 'react-calendly';

const BookingSection = () => {
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
          <InlineWidget url="https://calendly.com/plubrycht/30-minute-meeting-clone" />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
