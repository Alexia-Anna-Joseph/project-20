
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new PAPER(100,200,20);
    ground = new GROUND(750,610,1500,100)
    side1 = new DUSTBIN (930,485,20,120)
    side2 = new DUSTBIN (1140, 485, 20, 120)
    side3 = new DUSTBIN (1036, 550, 230, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  side1.display();
  side2.display();
  side3.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}



