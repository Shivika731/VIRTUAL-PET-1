//Create variables here
var dog, happyDog, dogImg, happyDogImg;
var database;
var foodS, foodStock,readStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  dog = createSprite(250,250,150,150);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
}


function draw() {  
 background(rgb(46,139,87));

 text("NOTE : Press up arrow key to feed drago milk",150,50)
 text("Food Stock :",200,70);
 stroke(7);
 fill(200);
 
 textSize(40);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.Image(happyDogImg)
 }
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();

} 

function writeStock(x){

    if(x <= 0 ){
      x = 0;
    }else{
     x = x - 1
    }
    database.ref('/'),update({
    Food : x

   })
}


