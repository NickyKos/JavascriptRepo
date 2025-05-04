import React from 'react';

function Book({ title, author, year }) {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Published:</strong> {year}</p>
    </div>
  );
}

export default Book;
