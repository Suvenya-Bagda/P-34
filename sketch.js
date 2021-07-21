//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  happyDog=createSprite(200,200,10,10);
  happyDog.addImg("dogImg1.png");
  happyDog.scale=0.15;

  dog=createSprite(200,200,10,10);
  dog.addImg(dog);
  dog.scale=0.15;
  
  foodStock=database.ref('Food');
  foodStock.on("value,readStock");
}


function draw() {
  background(46,139,87);
  
  if(keyDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage("dogImg1.png");
  }

  drawSprites();
  //add styles here
    textSize(35);
    fill("white");
    stroke(4);
}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
  
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }

  database.ref('/').update({
    Food:x
  })
}
