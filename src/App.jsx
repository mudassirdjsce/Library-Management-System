import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/user/Dashboard';
import BookDetails from './components/books/BookDetails';
import mockBooks from './data/mockData';
import './styles.css';

function App() {
  const [books, setBooks] = useState(mockBooks);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);
  
  const borrowBook = (bookId, userId) => {

    setBooks(books.map(book => 
      book.id === bookId ? { ...book, available: false } : book
    ));
    
   
    const book = books.find(b => b.id === bookId);
    setBorrowedBooks([
      ...borrowedBooks,
      {
        ...book,
        borrowDate: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        userId
      }
    ]);
  };
  
  const returnBook = (bookId) => {
   
    setBooks(books.map(book => 
      book.id === bookId ? { ...book, available: true } : book
    ));
    
  
    setBorrowedBooks(borrowedBooks.filter(book => book.id !== bookId));
  };
  
  const reserveBook = (bookId, userId) => {

    const book = books.find(b => b.id === bookId);
    setReservedBooks([
      ...reservedBooks,
      {
        ...book,
        reservationDate: new Date().toISOString().split('T')[0],
        userId
      }
    ]);
  };
  
  const cancelReservation = (bookId) => {
   
    setReservedBooks(reservedBooks.filter(book => book.id !== bookId));
  };
  
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard 
                      borrowedBooks={borrowedBooks}
                      reservedBooks={reservedBooks}
                      returnBook={returnBook}
                      cancelReservation={cancelReservation}
                    />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/book/:id" 
                element={
                  <BookDetails 
                    books={books} 
                    borrowBook={borrowBook}
                    reserveBook={reserveBook}
                  />
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;