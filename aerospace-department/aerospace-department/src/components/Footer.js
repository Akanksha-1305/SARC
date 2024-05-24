// src/components/Footer.js
import React from 'react';
import '/home/priyanshi/aerospace-department/src/App.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section about">
        <img src="/home/priyanshi/Downloads/SARC/flogo.svg" alt="IIT Bombay" className="flogo" height="140" width="616" />
        <p style={{ color: '#7a868e' }}>Main Gate Rd, IIT Area, Powai, Mumbai, Maharashtra 400076<br /><br /></p>
        <button href="#" style={{ fontSize: 'large', fontWeight: 'bold', height: '50px', color: '#0b3589', backgroundColor: 'white', borderRadius: '15px' }}>LOCATION</button>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#alumni-corner">Alumni Corner</a></li>
          <li><a href="#donor-wall">Donor Wall</a></li>
          <li><a href="#batch-legacy">Batch Legacy</a></li>
          <li><a href="#giving-back">Giving Back</a></li>
          <li><a href="#corporate-connect">Corporate Connect</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <ul>
          <li>Powai, Mumbai, Maharashtra, India</li>
          <li>+91-22-2572-2545</li>
          <li>info@iitb.ac.in</li>
        </ul>
      </div>
      <div className="footer-section social">
        <h3>Follow Us</h3>
        <ul>
          <button className="scl">f</button>
          <button className="scl">in</button>
        </ul>
      </div>
      <div className="footer-bottom">
        © 2024 IIT Bombay. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
