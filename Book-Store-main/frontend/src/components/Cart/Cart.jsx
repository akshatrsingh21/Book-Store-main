// filepath: e:\College_Work\FSD\Task-5\Book\books\src\components\Cart\Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book, index) => (
            <div key={index} className="cart-item">
              {book.imageLinks?.thumbnail && (
                <img
                  src={book.imageLinks.thumbnail}
                  alt={`${book.title} cover`}
                  className="cart-book-image"
                />
              )}
              <div className="cart-book-info">
                <h3>{book.title}</h3>
                {book.authors && <p><strong>Author(s):</strong> {book.authors.join(', ')}</p>}
                {book.publisher && <p><strong>Publisher:</strong> {book.publisher}</p>}
                {book.publishedDate && <p><strong>Published:</strong> {book.publishedDate}</p>}
                <button onClick={() => removeFromCart(index)} className="remove-from-cart-button">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;