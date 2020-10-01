var bullet , wall,thickness;
var speed , weight;
function setup() {
  createCanvas(1600,400)
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  bullet=createSprite(50,200,40,10);
  bullet.velocityX=speed;
}

function draw() {
  background("red");  
  if(isTouching(wall,bullet)){
    wall.shapeColor="green";
    bullet.shapeColor="green" ;
  }
  else{
    wall.shapeColor="blue"
    bullet.shapeColor=225
  }
  bullet.collide(wall)
  drawSprites();
}
