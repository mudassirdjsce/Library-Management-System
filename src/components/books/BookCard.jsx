import React from 'react';
import { Link } from 'react-router-dom';
import './bookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.coverImage} alt={book.title} />
        {book.available ? (
          <span className="availability-badge available">Available</span>
        ) : (
          <span className="availability-badge unavailable">Borrowed</span>
        )}
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-meta">
          <span className="book-genre">{book.genre}</span>
          <span className="book-year">{book.publishYear}</span>
        </div>
        <Link to={`/book/${book.id}`} className="btn btn-outline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;