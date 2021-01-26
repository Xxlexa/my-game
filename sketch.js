const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var opponent;

function preload() {
    backgroundImg = loadImage("sprites/bball.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    player = new Player(600,100,150,150);
    opponent = new Opponent(450,50,70,70);
    ball = new Ball(600,200,50,50);
    dribble = new Dribble(ball.body,player.body);
    ground = new Ground(600,height,1200,20);
    console.log(ball);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ball.display();
    ground.display();
    opponent.display();
    player.display();
       
}

function mouseDragged()
{
    Matter.Body.setPosition(player.body,{
        x :mouseX,
        y : mouseY
    })

}

function mouseReleased()
{

}
