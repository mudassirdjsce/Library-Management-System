import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./home.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";



const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-container">
      <div className="heading">
        <img src="https://www.djsce.ac.in/images/djsce_logo.png" />
        <div className="social">
          <div className="logos">
            <FaFacebook />
            <FaTwitterSquare />

            <FaInstagramSquare />
            <RxLinkedinLogo />
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to DJSCE Library </h1>
          <p>Your gateway to knowledge and learning resources</p>
          <div className="hero-buttons">
            <Link to="/catalog" className="btn btn-primary">
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <h2>Our Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Extensive Collection</h3>
              <p>
                Browse through thousands of books across various genres and
                subjects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>
                Find books easily with our advanced search and filtering
                options.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Easy Management</h3>
              <p>Borrow, return, and reserve books with just a few clicks.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Purchase Books</h3>
              <p>
                Buy your favorite books directly through our secure payment
                system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-books">
        <div className="container">
          <h2>Featured Books</h2>
          <div className="featured-books-grid">
            <div className="featured-book">
              <div className="featured-book-cover">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/49ef5616-27ff-42ef-b3fe-3a6fa06b4803_pasted_image_1756575151140.png?auth_key=1788112062-2cb0c9d2d16b48e9b705eb9c497140ac-0-41f53b7ca4708ad96b576b8d3091cb09"
                  alt="1984"
                />
              </div>
              <h3>1984</h3>
              <p>George Orwell</p>
            </div>

            <div className="featured-book">
              <div className="featured-book-cover">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/453b8500-4736-4f8a-b010-5cc4c94e2596_pasted_image_1756575213599.png?auth_key=1788112062-72680c7dcad74873aab0d3957e38c7b1-0-a09b91627a7c0db033ff94623e7bffd1"
                  alt="The Great Gatsby"
                />
              </div>
              <h3>The Great Gatsby</h3>
              <p>F. Scott Fitzgerald</p>
            </div>

            <div className="featured-book">
              <div className="featured-book-cover">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/a9b7eb9a-2f65-4740-b31d-36add0957892_pasted_image_1756575431407.png?auth_key=1788112062-dd83efdc3c9e4af3aa812aab7d5c1e0e-0-334928e066f05c703c4739bea61365aa"
                  alt="Harry Potter"
                />
              </div>
              <h3>Harry Potter</h3>
              <p>J.K. Rowling</p>
            </div>

            <div className="featured-book">
              <div className="featured-book-cover">
                <img
                  src="https://z-cdn-media.chatglm.cn/files/2f8ae13b-d8bd-47e0-ab08-f19ec2b2f44e_pasted_image_1756575527427.png?auth_key=1788112062-9b4cfc187d8648278abdec8f55490673-0-72024c129c454cc1b537adcd545bba1d"
                  alt="The Lord of the Rings"
                />
              </div>
              <h3>The Lord of the Rings</h3>
              <p>J.R.R. Tolkien</p>
            </div>
          </div>
        </div>
      </div>

      {!isAuthenticated && (
        <div className="cta">
          <div className="container">
            <h2>Ready to explore?</h2>
            <p>Join our community of readers today!</p>
            <Link to="/register" className="btn btn-primary">
              Sign Up Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
