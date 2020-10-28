
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();

	world = engine.world;
    
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	
	
    
	//Create the Bodies Here
    paper=new Paper(200,450,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW)  {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	  
  }
}


