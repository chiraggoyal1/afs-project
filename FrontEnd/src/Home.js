import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import './Home.css'; // Import your CSS file for styling

export default function Home() {
  // Commented out Counter component to focus on home page design
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Site</h1>
        <p>Discover amazing features and services</p>
        <div className="cta-buttons">
          <Link to="/app" className="button button-login">Log In</Link>
          <Link to="/register" className="button button-signup">Sign Up</Link>
          <Link to="/DescribeFile" className="button button-about">About</Link>
        </div>
      </div>
      {/* Add images or background images for better visual appeal */}
      {/* <img src="image1.jpg" alt="Image1" className="background-image" /> */}
      {/* <img src="image2.jpg" alt="Image2" className="background-image" /> */}
    </div>
  );
}