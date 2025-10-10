import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import apiClient from '../../api';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await apiClient.post('/login', {
        username,
        password,
      });

      alert(res.data.message || 'Login successful!');
      setIsLoggedIn(true); // Set login status to true
      navigate('/'); // Redirect to homepage
    } catch (error) {
      alert(error.response?.data?.error || error.message || 'Login failed!');
    }
  };

  return (
    <div className="bg">
      <div className="login-container">
        <h1>Login Page</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
