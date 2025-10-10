import React from 'react';
import './Homepage.css';
import Search from '../Search/Search';
import Footer from '../Footer/Footer';

const Homepage = ({ isLoggedIn, addToCart }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="header-content">
          <h1>Welcome to My Book Store!</h1>
          <p>Your one-stop destination for books that inspire, educate, and entertain.</p>
          <div className="homepage-search">
            <h2>Find Your Next Favorite Book</h2>
            <Search addToCart={addToCart} />
          </div>
        </div>
      </header>

      <section className="homepage-featured">
        <h2>Featured Categories</h2>
        <div className="categories">
          <div className="category">
            <h3>Fiction</h3>
            <p>Explore imaginative worlds and compelling stories.</p>
          </div>
          <div className="category">
            <h3>Non-Fiction</h3>
            <p>Learn and grow with books on history, science, and more.</p>
          </div>
          <div className="category">
            <h3>Children's Books</h3>
            <p>Delight the young readers with fun and educational books.</p>
          </div>
          <div className="category">
            <h3>Fantasy</h3>
            <p>Explore magical worlds filled with epic quests and mythical creatures.</p>
          </div>
          <div className="category">
            <h3>Romance</h3> 
            <p>Discover passionate love stories that face trials and triumphs.</p>
          </div>
          <div className="category">
            <h3>Horror</h3>
            <p> Experience spine-tingling tales that evoke fear and suspense.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;