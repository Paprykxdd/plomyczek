import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/mockBooks';
import './BookDetailPage.css';

function BookDetailPage() {
  // 1. Pobieramy `bookId` z adresu URL (np. "/ksiazka/3" -> bookId = "3")
  const { bookId } = useParams();

  // 2. Znajdujemy książkę o pasującym ID
  //    Używamy `parseInt`, aby zamienić tekst "3" na liczbę 3
  const book = books.find(b => b.id === parseInt(bookId));

  // 3. Co jeśli książka nie istnieje?
  if (!book) {
    return (
      <div className="book-detail-container">
        <h2>Nie znaleziono książki</h2>
        <Link to="/sklep">Wróć do sklepu</Link>
      </div>
    );
  }

  // 4. Jeśli książka istnieje, wyświetlamy jej szczegóły
  return (
    <div className="book-detail-container">
      <div className="book-detail-card">
        <div className="book-detail-cover">
          <img src={book.coverUrl} alt={`Okładka ${book.title}`} />
        </div>
        <div className="book-detail-info">
          <h1 className="book-detail-title">{book.title}</h1>
          <h2 className="book-detail-author">{book.author}</h2>
          <p className="book-detail-price">{book.price}</p>
          <p className="book-detail-description">{book.description}</p>
          <button className="btn-buy-now">
            <a href={book.empikUrl} target="_blank" rel="noopener noreferrer">
              Kup teraz na Empik.com
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetailPage;