import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1>Polityka Prywatności</h1>
        
        <p>Twoja prywatność jest dla nas ważna. Niniejsza polityka prywatności wyjaśnia, jakie dane zbieramy, w jakim celu i jak je chronimy.</p>

        <h2>1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest [Imię i Nazwisko ], prowadząca działalność pod nazwą [Nazwa firmy], z siedzibą w [adres], NIP: [numer NIP].</p>

        <h2>2. Jakie dane zbieramy?</h2>
        <ul>
          <li>Imię, adres e-mail i inne dane kontaktowe podawane przez formularze (np. podczas umawiania wizyty przez Calendly)</li>
          <li>Informacje zbierane automatycznie za pomocą plików cookies (np. adres IP, dane przeglądarki, zachowania na stronie)</li>
        </ul>

        <h2>3. W jakim celu przetwarzamy dane?</h2>
        <ul>
          <li>W celu umożliwienia rezerwacji wizyty przez system Calendly</li>
          <li>W celach analitycznych za pomocą Google Analytics, aby ulepszać stronę</li>
          <li>W celu odpowiedzi na zapytania wysyłane przez formularz kontaktowy</li>
        </ul>

        <h2>4. Pliki cookies</h2>
        <p>Nasza strona korzysta z plików cookies, aby zapewnić jej prawidłowe działanie i prowadzić anonimowe statystyki odwiedzin.</p>
        <p>Podczas pierwszej wizyty możesz zdecydować, czy chcesz zaakceptować pliki cookies (np. analityczne).</p>

        <h2>5. Google Analytics</h2>
        <p>Na stronie korzystamy z Google Analytics – narzędzia do analizy statystyk. Dane zbierane w ten sposób są anonimowe i służą do analizy sposobu korzystania z witryny.</p>

        <h2>6. Calendly</h2>
        <p>Do umawiania wizyt korzystamy z zewnętrznego systemu Calendly, który może zbierać Twoje dane kontaktowe. Zalecamy zapoznanie się z <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">polityką prywatności Calendly</a>.</p>

        <h2>7. Twoje prawa</h2>
        <p>Masz prawo do wglądu, sprostowania, usunięcia lub ograniczenia przetwarzania swoich danych osobowych. W tym celu skontaktuj się z nami mailowo: [adres e-mail].</p>

        <h2>8. Kontakt</h2>
        <p>W razie jakichkolwiek pytań lub wątpliwości związanych z przetwarzaniem danych osobowych, skontaktuj się z nami: [adres e-mail]</p>

        <p className="update-info">Data ostatniej aktualizacji: 30 lipca 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
