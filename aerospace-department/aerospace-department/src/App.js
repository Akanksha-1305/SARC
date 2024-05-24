import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'; // Create and use this file for global styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slideshow />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
