var paper,ground,dustbin1,bustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	dustbin1 = createSprite(700,685,170,20)
	dustbin1.shapeColor=color("red")

	dustbin2 = createSprite(615,640,30,100)
	dustbin2.shapeColor=color("red")

	dustbin3 = createSprite(785,640,30,100)
	dustbin3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,100,20,20);
	ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display();
ground.display();
drawSprites();
keyPressed();
}

function keyPressed(){
 	if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body,{x:8228,y:-8578});
	 }

	}
