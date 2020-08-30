
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball;
var ground;
var red1;
var red2;
var red3;

function preload()
{
	
}

function setup() {

createCanvas(1000, 690);

engine = Engine.create();
world = engine.world;

red1 = new Boxred(880,height-70,150,20);


red2 = new Boxred(955,height-120,20,100);


red3 = new Boxred(805,height-120,20,100);
   

ground1 = createSprite(100,height-55,3000,10);
ground1.shapeColor = "yellow";

ground = Bodies.rectangle(width/2, 610, 3000, 10 , {isStatic:true} );
World.add(world, ground);

ball = new Box(56,320,35,35,options,{isStatic:true});

console.log(ground);

var options={
 isStatic:true,
 restitution:0.3,
 friction:0.5,
 density:1.2
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ball.display();
red1.display();
red2.display();
red3.display();

drawSprites();
}

function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-60});
}
}

