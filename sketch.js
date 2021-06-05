//Matter.Engine,Matter.World,Matter.Bodies
//NAMESPACING
const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
var ground;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  //JSON FORMAT
  var options = {
    isStatic : true
    //key    : value
  }
  var balloptions = {
    restitution : 1
  }
  ball = Bodies.circle(300,200,50,balloptions);
  World.add(world,ball);
  console.log(ball.position.x);
  console.log(ball.position.y);

  ground = Bodies.rectangle(200,390,400,10,options)
  World.add(world,ground);
}

function draw() {
  background(0); 
  Engine.update(engine) ;
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
}