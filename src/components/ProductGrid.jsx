import React from 'react';
import { books } from '../data/mockBooks';
import BookCard from './BookCard';
import './ProductGrid.css';

function ProductGrid() {
  return (
    <section className="product-grid-section">
      <h2 className="grid-title">Wszystkie nasze książki</h2>
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

export default ProductGrid;

