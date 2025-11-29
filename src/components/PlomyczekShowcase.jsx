import React from 'react';
import { Link } from 'react-router-dom';
import './PlomyczekShowcase.css';

function PlomyczekShowcase() {
  return (
    <section className="plomyczek-showcase">
      <div className="showcase-container">
        
        {/* Część tekstowa */}
        <div className="showcase-content">
          <h2 className="showcase-title">Poznaj wyjątkowego Smoka Płomyczka!</h2>
          
          <div className="showcase-text">
            <p>
                Bohatera książek dla dzieci, które uczą empatii i akceptacji dla innych, a także pomagają
                odkrywać własną wyjątkowość i budować poczucie własnej wartości.
            </p>
            <p>
                Daleko, daleko stąd istnieje malownicza smocza kraina. Wśród zielonych łąk i skał mieszkają
                najprawdziwsze w świecie smoki… A wśród nich Płomyczek – przyjazny smok, który jako
                jedyny w całej krainie urodził się bez skrzydeł i nie potrafi latać.
            </p>
            <p>
                Dzięki niemu dzieci uczą się, że każdy jest inny i każdy jest wyjątkowy!
            </p>
            <h2>Pomysł na wizualne cytaty na stronie</h2>
            <p>
                Obok głównego tekstu lub w formie małych, kolorowych banerów/chmurek można umieścić
                cytaty:
            </p>
            <ul>
                <li>„Inny nie znaczy gorszy!”– np. w chmurce nad Płomyczkiem, przy jego ilustracji.</li>
                <li>„Jesteś wyjątkowy!” – np. w formie rozświetlonego napisu na tle krajobrazu krainy.</li>
            </ul>
            <h2>
                Dodatkowe elementy wizualne:
            </h2>
            <ul>
                <li>Ilustracja Płomyczka w centrum bloku, najlepiej w otoczeniu zielonych łąk i skał.</li>
                <li>Małe ikony lub grafiki przy cytatach (np. gwiazdki, małe płomyki), które podkreślą
                    bajkowy klimat.</li>
                <li>Opcjonalnie animacja chmurki z cytatem pojawiająca się przy przewijaniu strony,
                    żeby przyciągnąć uwagę dzieci.</li>
            </ul>
          </div>

          <div className="showcase-actions">
            <Link to="/czytamy-plomyczek" className="btn-primary">
              Dołącz do akcji #czytamypłomyczka
            </Link>
            <Link to="/sklep" className="btn-secondary">
              Zobacz książkę
            </Link>
          </div>
        </div>

        {/* Część obrazkowa - duża, otwarta grafika */}
        <div className="showcase-image">
          {/* Tu idealnie pasowałaby ilustracja smoka bez tła (PNG), ale JPG też zadziała */}
          <img src="/img/images-removebg-preview.png" alt="Smok Płomyczek" />
        </div>

      </div>
    </section>
  );
}

export default PlomyczekShowcase;