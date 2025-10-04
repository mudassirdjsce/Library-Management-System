import React, { useState } from "react";
import "./paymentModal.css";

const PaymentModal = ({ book, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment successful! You have purchased "${book.title}"`);
      onClose();
    }, 2000);
  };

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <div className="payment-header">
          <h2>Complete Your Purchase</h2>
          <button onClick={onClose} className="close-button">
            &times;
          </button>
        </div>

        <div className="payment-book-info">
          <div className="payment-book-cover">
            <img src={book.coverImage} alt={book.title} />
          </div>
          <div className="payment-book-details">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p className="payment-price">${book.price}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={() => setPaymentMethod("razorpay")}
              />
              Razorpay
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit/Debit Card
            </label>
          </div>

          {paymentMethod === "card" && (
            <>
              <div className="form-group">
                <label htmlFor="name">Cardholder Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name on card"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="payment-total">
            <p>
              Total: <span>${book.price}</span>
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-primary payment-button"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : `Pay $${book.price}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
