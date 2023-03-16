// array of image file names
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
      
// function to choose a random image and set it as the background
function setRandomBackground() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = `imgs/${chosenImage}`;
  document.body.style.backgroundImage = 
    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('" +
    bgImage.src +
    "')";
}

setRandomBackground();
setInterval(setRandomBackground, 60000);