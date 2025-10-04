import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Library Management System</h3>
            <p>Your gateway to knowledge and learning resources.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/catalog">Book Catalog</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/help">Help & Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>Email: library@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Library St, Bookville</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Library Management System. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
