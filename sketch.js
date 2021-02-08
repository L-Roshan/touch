var fixedRect, movingRect;
var car,jet;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,100,30,30);
  car.shapeColor = "red";
  car.velocityX=2;

  jet = createSprite(700,100,50,50);
  jet.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)||(isTouching(movingRect,car))||(isTouching(movingRect,jet))){
    text("TOUCHING",400,300);
  }else{
    text("NOT TOUCHING",400,300);
  }
  if(isTouching(car,jet)){
   text("ALARM",200,700);
   jet.shapeColor = "purple";
  }
  
  drawSprites();
}



