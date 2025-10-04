import React, { useState, useEffect } from 'react';
import BookList from '../components/books/BookList';
import SearchBar from '../components/books/SearchBar';
import BackgroundSlideshow from '../components/common/BackgroundSlideshow';
import mockBooks from '../data/mockData';
import './catalog.css';

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  
  useEffect(() => {
    // In a real app, this would be an API call
    setBooks(mockBooks);
    setFilteredBooks(mockBooks);
  }, []);
  
  useEffect(() => {
    let result = books;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
      );
    }
    
    // Filter by genre
    if (selectedGenre !== 'All') {
      result = result.filter(book => book.genre === selectedGenre);
    }
    
    setFilteredBooks(result);
  }, [books, searchQuery, selectedGenre]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  // Get unique genres for filter dropdown
  const genres = ['All', ...new Set(books.map(book => book.genre))];
  
  return (
    <div className="catalog-container">
      <BackgroundSlideshow />
      <div className="catalog-content">
        <div className="catalog-header">
          <h1>Book Catalog</h1>
          <p>Browse our extensive collection of books</p>
        </div>
        
        <div className="catalog-controls">
          <SearchBar onSearch={handleSearch} books={books} />
          
          <div className="filter-container">
            <label htmlFor="genre-filter">Filter by Genre:</label>
            <select 
              id="genre-filter"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="catalog-results">
          <p>{filteredBooks.length} books found</p>
        </div>
        
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
};

export default Catalog;