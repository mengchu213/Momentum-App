const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
      
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