import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export default function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3001/login', {
        username: username,
        password: password
      });
      if (response.status === 200) {
        localStorage.setItem('jwtToken', response.data.token);
        navigate('/CreatePost');
      }
    } catch (error) {
      setLoginError('Invalid Username or Password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleForm} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {loginError && <h2 className="error-message">{loginError}</h2>}
    </div>
  );
}