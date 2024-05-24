const slideshow = document.getElementById('slideshow');
const images = slideshow.getElementsByTagName('img');
let currentImage = 0;

function nextImage() {
  images[currentImage].style.opacity = 0;
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = 1;
}

setInterval(nextImage, 3000); // change the image every 3 seconds