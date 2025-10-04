import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PaymentModal from '../payment/PaymentModal';
import './bookDetails.css';

const BookDetails = ({ books, borrowBook, reserveBook }) => {
  const { id } = useParams();
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  const book = books.find(b => b.id === parseInt(id));
  
  if (!book) {
    return <div className="not-found">Book not found</div>;
  }
  
  const handleBorrow = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // In a real app, this would check if the user has any overdue books
    borrowBook(book.id, currentUser.id);
    alert(`You have successfully borrowed "${book.title}"`);
  };
  
  const handleReserve = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    reserveBook(book.id, currentUser.id);
    alert(`You have successfully reserved "${book.title}"`);
  };
  
  const handleBuy = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    setShowPaymentModal(true);
  };
  
  return (
    <div className="book-details-container">
      <div className="book-details">
        <div className="book-cover-large">
          <img src={book.coverImage} alt={book.title} />
          {book.available ? (
            <span className="availability-badge available">Available</span>
          ) : (
            <span className="availability-badge unavailable">Borrowed</span>
          )}
        </div>
        <div className="book-info-large">
          <h1 className="book-title-large">{book.title}</h1>
          <p className="book-author-large">by {book.author}</p>
          <div className="book-meta-large">
            <span className="book-genre">{book.genre}</span>
            <span className="book-year">{book.publishYear}</span>
            <span className="book-pages">{book.pages} pages</span>
          </div>
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          <div className="book-actions">
            {book.available ? (
              <>
                <button 
                  className="btn btn-primary" 
                  onClick={handleBorrow}
                >
                  Borrow Book
                </button>
                <button 
                  className="btn btn-outline" 
                  onClick={handleReserve}
                >
                  Reserve
                </button>
              </>
            ) : (
              <button 
                className="btn btn-outline" 
                onClick={handleReserve}
              >
                Reserve for Later
              </button>
            )}
            <button 
              className="btn btn-secondary" 
              onClick={handleBuy}
            >
              Buy (${book.price})
            </button>
          </div>
        </div>
      </div>
      
      {showPaymentModal && (
        <PaymentModal 
          book={book} 
          onClose={() => setShowPaymentModal(false)} 
        />
      )}
    </div>
  );
};

export default BookDetails;