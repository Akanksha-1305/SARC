// src/components/Header.js
import React from 'react';
import '/home/priyanshi/aerospace-department/src/App.css'; // Create this CSS file for styling

const Header = () => {
  return (
    <header>
      <ul>
        <div className="logo">
          <img src="/home/priyanshi/aerospace-department/src/flogo.svg" alt="IIT Bombay Logo" />
          <div className="title">
            <h1>Department of Aerospace Engineering</h1>
            <p>Indian Institute of Technology Bombay</p>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default Header;
