const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=  Matter.Bodies;
let ball,ground,engine,world;



function setup(){
   createCanvas(600,400);
    engine= Engine.create();
    world= engine.world;
    
    var ground_option={
        isStatic:true
    }
    ground= Bodies.rectangle(300,380,600,20,ground_option);
    World.add(world,ground);
    console.log(ground);

    var ball_op={
        restitution:1
    }

    ball= Bodies.circle(300,200,40,ball_op);
    World.add(world,ball);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,600,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
}