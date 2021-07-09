const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber= new Rubber(100,100,100,100)
    iron= new Iron(200,100,100,100)
    stone= new Stone(300,100,100,100)

  


}

function draw(){
    Matter.Body.setStatic(plane.body,true)
    background("lightBlue");
    Engine.update(engine);
    iron.display();
    rubber.display();
    stone.display();
    plane.display();
    hammer.display();
    

    
 
}