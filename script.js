const images = [
  "images/image1.png",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];

let currentIndex = 0;

function changeImage() {
  const imgElement = document.getElementById("slideshowImage");
  imgElement.style.opacity = 0; // Fade out

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    imgElement.src = images[currentIndex]; // Change the image source
    imgElement.style.opacity = 1; // Fade in
  }, 500); // Wait for the fade-out effect
}

setInterval(changeImage, 5000); // Change image every 3 seconds
