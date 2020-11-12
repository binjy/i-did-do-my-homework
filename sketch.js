var car,wall,speed,weight,line1,line2,line3,line4,car2,car3,car4,wall2,wall3,wall4





function setup() {
  createCanvas(1600,400);

wall = createSprite(368,24,10,30)

  car = createSprite(25,19,9,9)
  
  car2 = createSprite(22,118,9,9)
  
  line2 = createSprite(19,174,900,10)
  
  car3 = createSprite(20,230,9,9)
  
  line3 = createSprite(19,259,900,9)
  
  line1 = createSprite(32,60,900,10)
  
  wall2 = createSprite(363,113,10,30)
  wall3 = createSprite(360,212,10,30)
  wall4 = createSprite(363,289,10,30)
  
  
  car4 = createSprite(19,299,9,9)
  
  
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed
  car2.velocityX = speed
  car3.velocityX = speed
car4.velocityX = speed  
}

function draw() {
  background("white");  

if (wall.x - car.x < wall.width/2 + car.width/2 &&
  wall.x -car.x < wall.width/2 + car.width/2 && 
  wall.y - car.y < wall.height/2 + car.height/2 &&
  car.y - wall.y < wall.height/2 + car.height/2) {
  wall.shapeColor = "red"
  car.shapeColor = "red"
  car.shapeColor = "red"
}
else {
wall.shapeColor = "grey"
car.shapeColor = "grey"

}
if (car.isTouching(wall)) {
  reset()
}

if (car2.isTouching(wall)) {
  reset()
}

if (car3.isTouching(wall)) {
  reset()
}

if (car4.isTouching(wall)) {
  reset()
}



if (car4.isTouching(wall4)) {
  reset();
}


if (keyDown("space")) {
  car.velocityX = speed
  car2.velocityX = speed
  car3.velocityX = speed
  car4.velocityX = speed
}


if (wall.x-car.x <(car.width+wall.width)/2) {
car.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  car.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
car.shapeColor  = color(230,230,0) 
  
}

if (wall2.x-car2.x <(car.width+wall2.width)/2) {
car2.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  car2.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
car2.shapeColor  = color(230,230,0) 
  
}



if (wall3.x-car3.x <(car3.width+wall3.width)/2) {
car3.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  car3.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
car3.shapeColor  = color(230,230,0) 
  
}

if (wall3.x-car.x <(car4.width+wall3.width)/2) {
car4.velocityX = 0
var deformation = 0.5 * weight * speed* speed/22509
}

if(deformation>180){
  car4.shapeColor = color(255,0,0)
  
}

if(deformation<160 && deformation>100){
car4.shapeColor  = color(230,230,0) 
  
}



text("press space",171,113)



  drawSprites();
}





function reset(){
 car.x = 25
 car.y = 19
 car2.x=22
 car2.y=118
 car3.x=20
 car3.y =230
 car4.x = 19
 car4.y =299
 
  car.velocityX = 0
  car2.velocityX = 0
  car3.velocityX = 0
  car4.velocityX = 0
}