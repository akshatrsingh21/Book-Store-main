import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
    localStorage.removeItem('isLoggedIn'); // Clear login state from localStorage
    alert('Logged out successfully!');
    navigate('/'); // Redirect to homepage
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Book Store</Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li> {/* Cart button */}
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;