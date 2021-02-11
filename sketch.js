const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32;
var sling;
var polygon,polygonI;
var options;

function preload(){
    polygonI = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

   options = {
       density: 0.5
   }

    polygon = Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon,{x:100,y:200});

    ground1 = new Ground(600,800,1500,50);
    ground2 = new Ground(500,600,330,20);
    ground3 = new Ground(800,300,300,20);
    block1 = new Block(440,590);
    block2 = new Block(460,590);
    block3 = new Block(480,590);
    block4 = new Block(500,590);
    block5 = new Block(520,590);
    block6 = new Block(540,590);
    block7 = new Block(560,590);
    block8 = new Block(460,560);
    block9 = new Block(480,560);
    block10 = new Block(500,560);
    block11 = new Block(520,560);
    block12 = new Block(540,560);
    block13 = new Block(480,530);
    block14 = new Block(500,530);
    block15 = new Block(520,530);
    block16 = new Block(500,510);
    block17 = new Block(740,290);
    block18 = new Block(760,290);
    block19 = new Block(780,290);
    block20 = new Block(810,290);
    block21 = new Block(820,290);
    block22 = new Block(840,290);
    block23 = new Block(860,290);
    block24 = new Block(760,260);
    block25 = new Block(787,260);
    block26 = new Block(800,260);
    block27 = new Block(820,260);
    block28 = new Block(840,260);
    block29 = new Block(788,230);
    block30 = new Block(795,230);
    block31 = new Block(825,230);
    block32 = new Block(803,200);


}

function draw(){
    background(0);

    Engine.update(engine);

  

    ground1.display();
    ground2.display();
    ground3.display();
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
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    sling.display();
    
    imageMode(CENTER);
    image(polygonI,polygon.position.x,polygon.position.y,40,40);

    push();
    textSize(15);
    fill("yellow");
    text("Drag The Hexagonal Stone And Release It, To Launch It Towards The Blocks!",50,80);
    pop();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon);
    }
}