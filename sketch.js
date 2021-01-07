var bullet,wall,speed,weight,thikness;

function setup() {
  createCanvas(1800,400);

  speed=random(55,90);
  weight=random(400,1500);
  thikness=random(22,83);
  

  bullet=createSprite(50,200,50,10);
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thikness,height/2);


  }


  


function draw(){
background(0);
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikness*thikness*thikness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  
    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  
  drawSprites();

}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge){

  return true
}  

return false;
}}