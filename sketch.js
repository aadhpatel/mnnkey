var banana, bananaImage;
var stone, stoneImage;
var stoneGroup;
var jungle, jungleImage;
var score=0;
var player, playerImage;

function preload(){
backgroundImage=loadImage("jungle.jpg");
playerImage =
loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

              
              
bananaImage=loadImage("Banana.png")
stoneImage=loadImage("stone.png");
}
                                      
              


function setup() {
  createCanvas(400, 400);
jungle=createSprite(400,400,400,400);
  jungle.addImage("jungle",jungleImage);
jungle.velocityX=-4;  

ground.visible=false;
  
  player=createSprite(45,351,20,50);
  player.addAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png", playerImage);
  player.scale=0.2;
}

function draw() {
  background(220);
background.x=background.width/2;

  spawnbanana();
  spawnstone();
  
if(foodGroup.isTouching(player)) {
score=score+2;
  foodGroup.destroyEach(banana);
  }

  switch(score) {
    case 10: player.scale=0.12;
            break;
    case 20: player.scale=0.14;
            break;
    case 30: player.scale=0.16;
            break;
    case 40: player.scale=0.18;
            break;
            default: break;       
  }
  
if(obstacleGroup.isTouching(player)) {
player.scale=0.2;
  
}



if(player.collide(stone)) {
scale=0.1;
} 
  else if(player.collide(stone)) {
    gameState=END;
}


   
  
  
  
  
  
  function spawnbanana () {   
if (frameCount % 80 === 0) {
 banana = createSprite(391, 288,20,20);
banana.y= randomNumber(120,200);
banana.setAnimation("Banana");
banana.scale=0.1;
banana.velocityX=-3;
banana.lifetime=134;
bananaGroup.add(banana);
    }
  }
   function spawnstone() {
if (frameCount % 300 === 0) {
stone = createSprite(199, 365,20,20);
stone.velocityX = -6;
stone.setAnimation("Stone");
stone.scale = 0.1;
   stone.lifetime = 70;
   stoneGroup.add(stone);      
} 
  
  
  
  }
  
  
} 
  
  
  
  
  