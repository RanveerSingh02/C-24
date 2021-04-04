const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
 
    box1 = new Box(1000,300,70,70);
    box2 = new Box(750,300,70,70);
    box3 = new Box(1000,200,70,70);
    box4 = new Box(750,200,70,70);
    box5 = new Box(870,60,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(870,300)
    pig2 = new Pig(870,200)
    log1 = new Logs(870,250,350,PI/2)
    log2 = new Logs(870,100,350,PI/2)
    log3 = new Logs(870,50,200,PI/7)
    log4 = new Logs(900,50,200,-PI/7)
    bird = new Bird(500,500)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}