let currentFrame = 0;
let reloj;
let images = [];
var canvas;

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
  frameRate(1); // Set the frame rate to 1 frame per hour
  changeImage(); // Initially change the image
  
  reloj = loadImage("clock.png");


  currentFrame = hour() % 12;

  images[0]  = loadImage("01.png");
  images[1]  = loadImage("02.png"); 
  images[2]  = loadImage("03.png");
  images[3]  = loadImage("04.png"); 
  images[4]  = loadImage("05.png");
  images[5]  = loadImage("06.png"); 
  images[6]  = loadImage("07.png");
  images[7]  = loadImage("08.png"); 
  images[8]  = loadImage("09.png");
  images[9]  = loadImage("10.png"); 
  images[10] = loadImage("11.png");
  images[11] = loadImage("12.png");
}

function draw() { 
  background(0);
  image(reloj, windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
  image(images[currentFrame], windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2);
}

function changeImage() {
  currentFrame = (currentFrame + 1) % 12;  // Use % to cycle through frames
 
}
