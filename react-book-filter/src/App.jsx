import React from 'react';
import Book from './Book';

function App() {
  const books = [
    { id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { id: 5, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 6, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { id: 7, title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { id: 8, title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { id: 9, title: "A Brief History of Time", author: "Stephen Hawking", year: 1988 },
    { id: 10, title: "The Fault in Our Stars", author: "John Green", year: 2012 },
  ];

  const filteredBooks = books.filter(book => book.year < 2000);

  return (
    <div>
      <h1>Books Published Before 2000</h1>
      {filteredBooks.map(book => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
        />
      ))}
    </div>
  );
}

export default App;

