// src/components/Slideshow.js
import React, { useEffect, useRef } from 'react';
import '/home/priyanshi/aerospace-department/src/App.css';

const Slideshow = () => {
  const slideshowRef = useRef(null);
  let currentImage = 0;

  useEffect(() => {
    const images = slideshowRef.current.getElementsByTagName('img');
    const nextImage = () => {
      images[currentImage].style.opacity = 0;
      currentImage = (currentImage + 1) % images.length;
      images[currentImage].style.opacity = 1;
    };
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="slideshow" ref={slideshowRef}>
      <img src="i1.jpeg" alt="Image 1" />
      <img src="i2.jpeg" alt="Image 2" />
      <img src="i3.jpeg" alt="Image 3" />
      <img src="i4.jpeg" alt="Image 4" />
            {/* Add more images here */}
    </div>
  );
};

export default Slideshow;
