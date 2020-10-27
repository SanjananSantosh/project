const Constraint=Matter.Constraint

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var slingShot;

function setup() {
  createCanvas(900,400);
  engin=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground();
  stand1=new Stand(390.290,240,15)
  stand2=new Stand(690.220,200,15)
  block1=new Stand(300,275,30,40)
  block2=new Stand(330,275,30,40)
  block3=new Stand(360,275,30,40)
  block4=new Stand(390,275,30,40)
  block5=new Stand(420,275,30,40)
  block6=new Stand(450,275,30,40)
  block7=new Stand(480,275,30,40)
  block8=new Stand(300,275,30,40)
  block9=new Stand(330,275,30,40)
  block10=new Stand(350,275,30,40)
  block12=new Stand(390,275,30,40)
  block13=new Stand(420,275,30,40)
  block14=new Stand(450,275,30,40)





  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}