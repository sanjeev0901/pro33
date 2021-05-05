const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var bg;
var engine,world;
var snowMan,snowManImage;
var snowBall=[];
var rand;
 
function preload(){
  bg=loadImage("snow2.jpg");
  snowManImage=loadImage("snowman.png");
}

function setup() {
  var canvas=createCanvas(1000,1000);
  engine=Engine.create();
  world=engine.world;

  snowMan=createSprite(500,750.20,20);
  /*snowMan.addImage(snowManImage);
  snowMan.scale=0.5;*/
}

function draw() {
  background(bg);
  Engine.update(engine); 
  
  if(frameCount%50===0){
    rand=Math.round(random(20,900));
    snowBall.push(new snow(rand,-20,130));
    
  }
  console.log(frameCount);

  for (var m = 0;m < snowBall.length; m++) {
    snowBall[m].display();
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyDown===LEFT_ARROW){
    snowMan.x=snowMan.x+1;
  }else if(keyCode===RIGHT_ARROW){
    snowMan.x=snowMan.x+1;
  }
}