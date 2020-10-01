var ground,bananaImage,obstacleImage,obstaclegroup,score,backgrd,running_monkey,monkey,banana,obstacle,invisibleground,bananaGroup,obstacleGroup;


function preload(){
  backgrd=loadImage("jungle.jpg");
  running_monkey= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
  
}  


function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 180, 800, 20);
  ground.addImage(backgrd);
  
  monkey = createSprite(50,380,20,20);
  monkey.scale=0.15;
  monkey.addAnimation("running",running_monkey);
  
  invisibleground=createSprite(200,398,800,10);
  invisibleground.visible=false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;
}

function draw() {
  background("white");
  stroke("white");
  textSize(20);
  fill("white");
  ground.velocityX=-10;
  if (ground.x < 400){
    ground.x = ground.width/2;
  }
  if(keyDown("space") ){
      monkey.velocityY = -10 ;
  }  
  
  monkey.velocityY=monkey.velocityY+0.5;  
  bananas();
  obstacles();
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2;
  }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.15;
  }
  switch(score){
    case 10:monkey.scale=0.18;
      break;
    case 20:monkey.scale=0.20;
      break;
    case 30:monkey.scale=0.22;
      break;
    case 40:monkey.scale=0.24;
      break;
    default: break;
      
  }
  
  
  
  
  
  
  
  
  console.log(monkey.y);
  monkey.collide(invisibleground); 
  drawSprites();
  text("Score: " + score,640,100);

}
function bananas()
{
  if(World.frameCount % 80===0)
  {
    var banana=createSprite(800,100,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.08 ;
    banana.y=random(50,120);
    banana.velocityX=-7;
    banana.lifetime=114;
    bananaGroup.add(banana);
  }
}
function obstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(800,365,10,40);
    obstacle.velocityX = - 6 ;    
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime = 133;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}









