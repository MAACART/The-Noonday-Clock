let currentFrame = 0;
let reloj;
let images = [];

function setup() {
  createCanvas(1133, 1133);
  frameRate(1); // Set the frame rate to 1 frame per hour
  changeImage(); // Initially change the image
  
  reloj = loadImage("clock.png");
  // You can resize the image if needed
  // reloj.resize(200, 0);

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
  image(reloj, width / 4, height / 4, width / 2, height / 2);
  image(images[currentFrame], width / 4, height / 4, width / 2, height / 2);
}

function changeImage() {
  currentFrame = (currentFrame + 1) % 12;  // Use % to cycle through frames
  
}
