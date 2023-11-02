let imageList = [];
let currentImageIndex = 0;
let backgroundImg;

function preload() {
  for (let i = 1; i <= 12; i++) {
    imageList.push(loadImage( "0" + i + ".png"));
  }
  backgroundImg = loadImage("clock.png"); // Load your background image here
}

function setup() {
  createCanvas(1133, 1133);
  currentImageIndex = hour() % 12;
  setInterval(changeImage, 1000 * 60 * 60); // 1 hour in milliseconds
}

function draw() {
  image(backgroundImg, 0, 0, width, height); // Display the background image
  image(imageList[currentImageIndex], 150, 150, 100, 100); // Display the current image
}

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % 12;
}
