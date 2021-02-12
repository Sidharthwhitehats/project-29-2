const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var polygon,polygon_img;
var slingShot;

function preload(){
    polygon_img= loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    

    engine = Engine.create();
    world = engine.world;

    block1= new Block(600,380,30,40);
    block2= new Block(570,380,30,40);
    block3= new Block(540,380,30,40);
    block4= new Block(510,380,30,40);
    block5= new Block(630,380,30,40);
    block6= new Block(660,380,30,40);
    block7= new Block(690,380,30,40);
    

    block8= new Block(630,340,30,40);
    block9= new Block(600,340,30,40);
    block10= new Block(570,340,30,40);
    block11= new Block(540,340,30,40);
    block12= new Block(660,340,30,40);
    block13= new Block(630,300,30,40);
    block14= new Block(600,300,30,40);
    block15= new Block(570,300,30,40);
    block16= new Block(600,260,30,40);
    
    block17= new Block(1000,260,30,40);
    block18= new Block(970,260,30,40);
    block19= new Block(940,260,30,40);
    block20= new Block(1030,260,30,40);
    block21= new Block(1060,260,30,40);
    block22= new Block(1030,230,30,40);
    block23= new Block(1000,230,30,40);
    block24= new Block(970,230,30,40);
    block25= new Block(1000,200,30,40);

    ground = new Ground(600,400,240,10);
    ground2 = new Ground(600,height,1200,20);
    platform= new Ground(1000,300,190,10);
    
    polygon= Bodies.circle(50,300,20);
    
    World.add(world,polygon);
   
    slingshot = new SlingShot(this.polygon,{x:200, y:100});
    Engine.run(engine);
}
function draw(){
    Engine.update(engine);
    background("white");
    strokeWeight(4);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
     
    

   block1.display();
   
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display(); 
   block13.display(); 

   block14.display(); 
   block15.display(); 
   block16.display(); 
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();
   block24.display();
   block25.display();
   
   slingshot.display();
   ground2.display();

   ground.display(); 
   platform.display(); 
  
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   slingshot.fly();
}

