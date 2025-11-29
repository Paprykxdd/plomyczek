import React from 'react';
import './BookCard.css';

// Zmieniamy 'imageUrl' na 'coverUrl', aby pasowało do danych, które otrzymujemy
function BookCard({ title, author, coverUrl, empikUrl }) {
  return (
    <div className="book-card">
      {/* Używamy tutaj poprawnej nazwy 'coverUrl' */}
      <img src={coverUrl} alt={`Okładka książki ${title}`} className="book-cover" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        {empikUrl && (
          <a
            href={empikUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
            aria-label={`Kup ${title} na Empik`}
          >
            Kup na Empik
          </a>
        )}
      </div>
    </div>

    
  );
}

export default BookCard;

