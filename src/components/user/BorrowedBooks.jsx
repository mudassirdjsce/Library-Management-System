import React, { useState, useContext } from "react";
import { useAuth } from "../../context/AuthContext";

const BorrowedBooks = ({ returnBook }) => {
  const { currentUser } = useAuth();

  // Mock borrowed books data - in a real app, this would come from an API
  const [borrowedBooks, setBorrowedBooks] = useState([
    {
      id: 101,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://z-cdn-media.chatglm.cn/files/453b8500-4736-4f8a-b010-5cc4c94e2596_pasted_image_1756575213599.png?auth_key=1788112062-72680c7dcad74873aab0d3957e38c7b1-0-a09b91627a7c0db033ff94623e7bffd1",
      borrowDate: "2023-08-15",
      dueDate: "2023-09-15",
      userId: currentUser?.id || 1,
    },
    {
      id: 105,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      borrowDate: "2023-08-20",
      dueDate: "2023-09-20",
      userId: currentUser?.id || 1,
    },
  ]);

  const handleReturn = (bookId) => {
    // In a real app, this would be an API call
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
    alert("Book returned successfully!");
  };

  if (borrowedBooks.length === 0) {
    return <p>You haven't borrowed any books yet.</p>;
  }

  return (
    <div className="borrowed-books">
      {borrowedBooks.map((book) => (
        <div key={book.id} className="borrowed-book-card">
          <div className="borrowed-book-cover">
            <img src={book.coverImage} alt={book.title} />
          </div>
          <div className="borrowed-book-info">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <div className="borrowed-book-dates">
              <p>
                <strong>Borrowed:</strong> {book.borrowDate}
              </p>
              <p>
                <strong>Due:</strong> {book.dueDate}
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleReturn(book.id)}
            >
              Return Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
