let imageList = [];
let currentImageIndex = 0;
let backgroundImg;

function preload() {
  for (let i = 1; i <= 12; i++) {
    imageList.push(loadImage(  i + ".png")); // diferentes fusos
  }
  backgroundImg = loadImage("clock.png"); // imagem do relógio
}

function setup() {
  createCanvas(1133, 1133);
  currentImageIndex = hour() % 12;
  setInterval(changeImage, 1000 * 60 * 60); // 1 hour em millisegundos
}

function draw() {
  image(backgroundImg, 0, 0, width, height); //faz o fundo
  image(imageList[currentImageIndex], 150, 150, 100, 100); //troca as imagens
}

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % 12;
}
