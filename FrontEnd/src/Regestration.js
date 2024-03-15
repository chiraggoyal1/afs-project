
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Registration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post('http://localhost:3001/register', {
        username: username,
        password: password
      });
      if (response.status === 201) {
        navigate('/app');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form onSubmit={handleForm} className="registration-form">
        <div className="form-group">
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
        <div className="form-group">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}