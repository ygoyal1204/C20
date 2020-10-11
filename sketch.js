var fixedRect,movingRect
var fixedRect2,movingRect2


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,200,80,50)
  movingRect.shapeColor = "green"
  movingRect.debug = true
  fixedRect.debug = true

  fixedRect2=createSprite(400, 100, 50, 80);
  fixedRect2.shapeColor="blue";
  movingRect2=createSprite(400, 800, 80, 50);
  movingRect2.shapeColor= "blue";
  fixedRect2.debug=true;
  movingRect2.debug=true;

  movingRect2.velocityY=-5;
  fixedRect2.velocityY=5;
}

function draw() {
  background("yellow"); 
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY 


  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/ 2&& 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
else {
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
}
if(movingRect2.x-fixedRect2.x<fixedRect2.width/2+movingRect2.width/2 &&
  fixedRect2.x - movingRect2.x < fixedRect2.width/2+movingRect2.width/2){
    movingRect2.velocityX=movingRect2.velocityX*(-1)
    fixedRect2.velocityX=fixedRect2.velocityX*(-1)
  }
  if(movingRect2.y-fixedRect2.y<fixedRect2.height/2+movingRect2.height/2 &&
    fixedRect2.y - movingRect2.y< fixedRect2.height/2+movingRect2.height/2){
      movingRect2.velocityY=movingRect2.velocityY*(-1)
      fixedRect2.velocityY=fixedRect2.velocityY*(-1)
    }

  drawSprites();
}
