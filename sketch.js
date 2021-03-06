const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 var ball;
 var ball2;
let engine;
let world;
var con;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options={restitution:0.8
  }
  ball = Bodies.circle(200,50,10,ball_options)
  ball2 = Bodies.circle(350,10,12,ball_options)
  World.add(world,ball);
  World.add(world,ball2)
  con = Constraint.create({
    pointA:{ x:200,y:20},
bodyB: ball, 
pointB: {
  x:0, y:0
},
length:100, 
stifness: 0.1
  })
  con2 = Constraint.create({
    bodyA: ball,
pointA:{x:0, y:0},
bodyB:ball2, 
pointB: {
  x:0, y:0
},
length:100, 
stifness: 0.1
  })
  World.add(world, con)
World.add(world,con2)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 10)
  ellipse(ball2.position.x,ball2.position.y,12)
  push()
  strokeWeight(2)
  stroke(255)
  line(con.pointA.x,con.pointB.y, ball.position.x, ball.position.y)
  line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y)
  pop()
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{
      x:0,y:0
    },
    {
      x:0.05,y:0
    }
    )
  }
}
