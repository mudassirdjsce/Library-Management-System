import React, { useState, useContext } from "react";
import { useAuth } from "../../context/AuthContext";

const ReservedBooks = ({ cancelReservation }) => {
  const { currentUser } = useAuth();

  // Mock reserved books data - in a real app, this would come from an API
  const [reservedBooks, setReservedBooks] = useState([
    {
      id: 103,
      title: "1984",
      author: "George Orwell",
      coverImage: "https://z-cdn-media.chatglm.cn/files/49ef5616-27ff-42ef-b3fe-3a6fa06b4803_pasted_image_1756575151140.png?auth_key=1788112062-2cb0c9d2d16b48e9b705eb9c497140ac-0-41f53b7ca4708ad96b576b8d3091cb09",
      reservationDate: "2023-08-25",
      userId: currentUser?.id || 1,
    },
  ]);

  const handleCancel = (bookId) => {
    // In a real app, this would be an API call
    setReservedBooks(reservedBooks.filter((book) => book.id !== bookId));
    alert("Reservation cancelled successfully!");
  };

  if (reservedBooks.length === 0) {
    return <p>You don't have any reserved books.</p>;
  }

  return (
    <div className="reserved-books">
      {reservedBooks.map((book) => (
        <div key={book.id} className="reserved-book-card">
          <div className="reserved-book-cover">
            <img src={book.coverImage} alt={book.title} />
          </div>
          <div className="reserved-book-info">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <div className="reserved-book-date">
              <p>
                <strong>Reserved on:</strong> {book.reservationDate}
              </p>
            </div>
            <button
              className="btn btn-outline"
              onClick={() => handleCancel(book.id)}
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservedBooks;
