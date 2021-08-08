//Create variables here
var dog, dog_img, happyDog, database, foodStock, foodS,firebase;

function preload()
{
  //load images here
  happyDog = loadImage("images/dogImg1.png");
  dogimg = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(46, 139, 87);
  dog = createSprite(250,250,10,10);
  dog.addImage("dog", dogimg);
  dog.scale = 0.25;
  database = firebase.database();
  foodStock = database.ref('Food');
  //foodStock.on("value",readStock(data));
  foodStock.on("value",readStock);
  textSize(25);
  fill('white');
  stroke('black');
}


function draw() {  

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodStock);
    dog.addImage(happyDog);
  }
  //readStock(data)
  //writeStock(x);
  drawSprites();


  text("Food Stock: " + foodStock,200,400);
  //add styles here

}

function readStock(data){
  foodStock=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


