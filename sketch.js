
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new ball(300,350,50);
ball2=new ball(350,350,50);
ball3=new ball(400,350,50);
ball4=new ball(450,350,50);
ball5=new ball(500,350,50);

 
  ground1 = new Ground(400,100,300,40);
  sling1= new Rope(ball1.body,ground1.body,-50*2,0);
  sling2= new Rope(ball2.body,ground1.body,-25*2,0);
  sling3= new Rope(ball3.body,ground1.body,-0*2,0);
  sling4= new Rope(ball4.body,ground1.body,25*2,0);
  sling5= new Rope(ball5.body,ground1.body,50*2,0);
	Engine.run(engine);
  
}


function draw() {
  background('#FFFF00');
  rectMode(CENTER);
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 
} 




