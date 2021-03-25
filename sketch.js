//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;

//var engine, world;
//var box1, pig1;
//var backgroundImg,platform;
var PLAY = 1;
var END = 0;
var OVER=2;
var life=10;
var rocket,rocketImg;
 var obstacle;
 var gamestate=PLAY;
 var obstaclesGroup;
 var bullet;
 var score=0;


 var gamestate=PLAY;
function preload() {
  //  //backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
  canvas = createCanvas(1360,700);
    //engine = Engine.create();
    //world = engine.world;
    rocket=createSprite(675,500,50,50);

    bullet=createSprite(-100,400,5,50);

    //rocket.addImage(rocketImg);
    //rocket.scale=0.5;
    
    //moon=createSprite(675,9900);
    //moon.addImage(moonImg);
    //moon.scale=2.5;

    //earth=createSprite(675,150);
    //earth.addImage(earthImg);
    //earth.scale=1;

   /* ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 500, 270);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);*/

    obstaclesGroup = new Group();

}

function draw(){

    background("black");

    if(keyWentDown("RIGHT_ARROW")){
    
        rocket.velocityX = 15;
        rocket.velocityY=0;
      }
      if(keyWentUp("RIGHT_ARROW")){
        
        rocket.velocityX=0;
        rocket.velocityY=0;
      }
      
      if(keyWentDown("LEFT_ARROW")){
        
        rocket.velocityX = -15;
        rocket.velocityY=0;
      }
      if(keyWentUp("LEFT_ARROW")){
        
        rocket.velocityX= 0;
        rocket.velocityY=0;
      }
       if(keyWentDown("UP_ARROW")){
        
        rocket.velocityY = -15;
        rocket.velocityX=0;
        
      }
      if(keyWentUp("UP_ARROW")){
        
        rocket.velocityY=0;
        rocket.velocityX=0;
      }
      
      if(keyWentDown("DOWN_ARROW")){
        
        rocket.velocityY=15;
        rocket.velocityX = 0;
        
      }
      if(keyWentUp("DOWN_ARROW")){
        rocket.velocityY=0;
        rocket.velocityX= 0;
      }
    
if(keyWentDown("space")){

  bullet=createSprite(rocket.x,rocket.y,5,50);
  bullet.velocityY=-15;


}

    /*Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();*/
spawnObstacles();

if(bullet.isTouching(obstaclesGroup)){

 obstaclesGroup.destroyEach();
 score=score+1;
  //  obstaclesGroup.destroyEach();
  }
  
  if(rocket.isTouching(obstaclesGroup)){

    obstaclesGroup.destroyEach();
    life=life-1;
     //  obstaclesGroup.destroyEach();
     }

  if(keyWentDown("r")){
  
   life=10;
   rocket.visible=true;
   score=0;
      
  }

    if(life===0){
      fill("blue");
      text("Game Over",rocket.x,rocket.y);
      obstaclesGroup.setVelocityEach(0,0);
      rocket.visible=false;

    }


    /*Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();*/
spawnObstacles();
            
              drawSprites();
              fill("yellow");
              text("Score:" + score,1300,50);
              text("Life:" + life,1300,75);
  
          //camera.position.x = rocket.position.x;
          //camera.position.y = rocket.position.y;
  }


 






//text("Score"+score,1200,50);



    function spawnObstacles() {
        if(frameCount % 250 === 0) {
          var obstacle = createSprite(Math.round(random(displayWidth - 20)),150,40,40);
          //obstacle.debug = true;
          obstacle.velocityY = 10;
          //obstacle.addImage(obstacleImg);
          //obstacle.scale=0.1;
          obstacle.lifetime = 5000;

          obstaclesGroup.add(obstacle);
          
          }
          
          //assign scale and lifetime to the obstacle           
          //obstacle.scale = 0.5;
          
          //add each obstacle to the group
         
        }


