var bg , bgImg;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;

function preload() {
    //load the images here
bgImg = loadImage("images/garden.png");
catImg1 = loadAnimation("images/cat1.png");
mouseImg1 = loadAnimation("images/mouse1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here


cat = createSprite(800,600,20,20);
cat.addAnimation("catHappy",catImg1);
cat.scale=0.1;
mouse = createSprite(50,600,10,10);
mouse.addAnimation("mouseHappy",mouseImg1);
mouse.scale=0.1;



}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
     if(cat.x - mouse.x<(cat.width-mouse.width)/2){
         cat.velocityX = 0;
         cat.addAnimation("catHappy",catImg1);
         cat.changeAnimation("catHappy");

         mouse.addAnimation("mouseHappy",mouseImg1);
         mouse.changeAnimation("mouseHappy");
     }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseTeasing",mouseImg2);
   mouse.changeAnimation("mouseTeasing");
   mouse.frameDelay = 25;

   cat.velocityX=-5;
   cat.addAnimation("catRunning",catImg2);
   cat.changeAnimation("catRunning");
  }

  /* if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2){
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    }*/


   }







