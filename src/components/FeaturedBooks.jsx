    import React from 'react';
    import { books } from '../data/mockBooks'; // Importujemy nasze dane
    import BookCard from './BookCard'; // Importujemy komponent karty
    import './FeaturedBooks.css';

    function FeaturedBooks() {
      return (
          <section className="product-grid-section">
      <h2 className="grid-title">Nasze książki</h2>
      <div className="product-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            // Upewniamy się, że przekazujemy WŁAŚCIWĄ daną: book.coverUrl
            coverUrl={book.coverUrl}
            empikUrl={book.empikUrl}
          />
        ))}
          </div>
        </section>
      );
    }

    export default FeaturedBooks;
    
