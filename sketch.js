var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie1,Zombie2,Zombie3,Zombie
var ZombieGroup
var Bullet,BulletGroup,BulletImg
var shootsound
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
zombie1 = loadImage("assets/zombie1.png")
Zombie2 = loadImage("assets/Zombie2.png")
Zombie3 = loadImage("assets/Zombie3.png")
  bgImg = loadImage("assets/bg.jpeg")
BulletImg = loadImage("assets/bullet.png")
shootsound = loadSound("assets/shoot.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   ZombieGroup = new Group()
   BulletGroup = new Group()


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 shootsound.play()
 
  player.addImage(shooter_shooting)
  createBullet()
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnZombie()
drawSprites();

}

function spawnZombie(){
  if (frameCount % 150 === 0){
    var Zombie = createSprite(displayWidth,165,10,40);
    Zombie.velocityX = -(6);
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: Zombie.addImage(zombie1);
               break;
       case 2: Zombie.addImage(Zombie2);
               break;
       case 3: Zombie.addImage(Zombie3);
               break;
      
       default: break;
     }
    Zombie.y=Math.round(random(100,600));
     //assign scale and lifetime to the obstacle           
     Zombie.scale = 0.3;
     Zombie.lifetime = 200;
    
    //add each obstacle to the group
     ZombieGroup.add(Zombie);
  }
 }
 function createBullet() {
  var Bullet= createSprite(100, 100, 60, 10);
  Bullet.addImage(BulletImg);
  Bullet.scale =0.1;
  Bullet.x = 360;
  Bullet.y=player.y;
  Bullet.velocityX = 6;
  Bullet.lifetime = 200;
  BulletGroup.add(Bullet);
}

 

