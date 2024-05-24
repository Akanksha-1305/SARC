// src/components/Navbar.js
import React from 'react';
import '/home/priyanshi/aerospace-department/src/App.css';

const Navbar = () => {
  return (
    <nav>
      <span className="dropbtn"><a href="/home/priyanshi/Downloads/SARC/Untitled-1.html">Home</a></span>
      <span className="dropbtn">
      <ul className="tabs">
        <div className="dropdown">
          <li className="dropbtn">About ▾</li>
          <ul className="dropdown-content">
            <li><a href="/home/priyanshi/Downloads/SARC/history.html">History</a></li>
            <li><a href="/home/priyanshi/Downloads/SARC/od.html">Head of Department</a></li>
            <li><a href="/home/priyanshi/Downloads/SARC/vm.html">Vision and Mission</a></li>
            <li><a href="/home/priyanshi/Downloads/SARC/htru.html">How to reach us</a></li>
            <li><a href="/home/priyanshi/Downloads/SARC/ir.html">Industrial Relations</a></li>
            <li><a href="/home/priyanshi/Downloads/SARC/handbook.pdf">Handbook</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#contact_us">Contact Us</a></li>
          </ul>
        </div>
        {/* Continue for other dropdowns and links */}
      </ul>
      </span>
    </nav>
  );
};

export default Navbar;
