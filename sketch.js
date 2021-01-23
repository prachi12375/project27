
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200, 550, 500);
	roof1 = new Roof(400, 200, 600, 50);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  roof1.display();
  
  drawSprites();
}



