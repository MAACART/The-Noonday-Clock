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

function windowResized() {
  
    pos = canvas.position();
    slider.position(pos.x,pos.y+35);
    daytxt.position(pos.x+15,pos.y+60);
    acctxt.position(pos.x+15,pos.y);
    info.position(pos.x+15,pos.y+height-30);
    modal.position(pos.x,pos.y);
    modal.size(width,height);
    //close.position(15,height-30);
  
}


function draw() { 
  background(0);
  image(reloj, windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
  image(images[currentFrame], windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
}

function changeImage() {
  currentFrame = (currentFrame + 1) % 12;  // Use % to cycle through frames
 
}
