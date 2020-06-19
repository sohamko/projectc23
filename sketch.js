var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundBody,wall1,wall2;
var wallSprite1,wallSprite2,package1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("sprites/helicopter.png")
	packageIMG=loadImage("sprites/package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//package1=new Package(width/2,200);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1
	

	groundSprite=createSprite(width/2,height-50 , 200,20);
	groundSprite.shapeColor=color(255,0,0);

	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//create package body from its class
	
	

	//Create a Ground
	groundBody= Bodies.rectangle(width/2,height-50, 200, 55 , {isStatic:true} );
	 World.add(world, groundBody);

	 //create wall bodies on side of groundbody
	 	wall1= new Wall(300,height-100);
		wall2= new Wall(500,height-100);

	//create wall sprite for wall body
	wallSprite1=createSprite(285,height-90,wall1.width,wall1.height);
	wallSprite1.shapeColor=color(255,0,0);

	wallSprite2=createSprite(515,height-90,wall2.width,wall2.height);
	wallSprite2.shapeColor=color(255,0,0);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  //package1.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



