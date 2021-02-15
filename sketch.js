
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
var bobD = 40;
startPosX=width/2
startPosY=height/4+500
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(width/2,height/4,width/7,20)
bob1 = new Bob(startPosX,startPosY,bobD);
bob2 = new Bob(startPosX - bobD ,startPosY,bobD);
bob3 = new Bob(startPosX - 2*bobD ,startPosY,bobD);
bob4 = new Bob(startPosX + bobD ,startPosY,bobD);
bob5 = new Bob(startPosX + 2*bobD ,startPosY,bobD);
rope1=new String(bob1.body,roof.body,0,0)
rope2=new String(bob2.body,roof.body,-bobD,0)
rope3=new String(bob3.body,roof.body,-2*bobD,0)
rope4=new String(bob4.body,roof.body,bobD,0)
rope5=new String(bob5.body,roof.body,2*bobD,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  roof.display()
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}
function keyPressed(){
if (keyCode===32){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-50,y:-50})
}


}


