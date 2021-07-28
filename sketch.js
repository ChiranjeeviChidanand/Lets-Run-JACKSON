var bombImg,coinImg,energyDrinkImg,pathImg,powerImg;
var runner,runnerAnimation;
var track;
var leftBoder,rightBoder;

function preload(){
  //pre-load images
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  pathImg = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200,10,10);
  track.addImage(pathImg);
  track.y=height/2;
  track.velocityY=4;
  track.scale = 1.2;

  runner = createSprite(200,340,10,10);
  runner.addAnimation("running",runnerAnimation);
  runner.scale=0.1

  leftBoder = createSprite(0,200,20,400);
  leftBoder.visible = false;

  rightBoder = createSprite(400,200,20,400);
  rightBoder.visible = false;
}

function draw() {
  background(220);
  // track.velocityY=4;


  if (track.y>400){
    track.y =height/2;
  }

  runner.x = mouseX

  runner.collide(leftBoder);
  runner.collide(rightBoder);

  drawSprites()
}
