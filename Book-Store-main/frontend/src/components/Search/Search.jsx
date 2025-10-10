import React, { useState } from 'react';
import './Search.css';

const Search = ({ addToCart }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const searchBooks = async () => {
    if (!query.trim()) {
      setError('Please enter a search query.');
      return;
    }
    setError('');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=2`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
        setError('No results found.');
      }
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('An error occurred while fetching data.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBooks();
    }
  };

  return (
    <div className="container">
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for books..."
      />
      <button onClick={searchBooks}>Search</button>
      {error && <p className="error">{error}</p>}
      <div id="book-results">
        {books.map((item) => {
          const book = item.volumeInfo;
          return (
            <div key={item.id} className="book-item">
              {book.imageLinks?.thumbnail && (
                <img
                  src={book.imageLinks.thumbnail}
                  alt={`${book.title} cover`}
                  className="book-image"
                />
              )}
              <div className="book-info">
                <h3>{book.title}</h3>
                {book.authors && <p><strong>Author(s):</strong> {book.authors.join(', ')}</p>}
                {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
                {book.publishedDate && <p><strong>Published:</strong> {book.publishedDate}</p>}
                <button onClick={() => addToCart(book)} className="add-to-cart-button">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;