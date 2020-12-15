const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body

var box1,box2,box3;
var ground, ball;

function setup(){
  createCanvas(1600,600)

  engine=Engine.create()
  world=engine.world

  //Ground=new ground(300,590)
  //Package=new paper(150,580)
  //Body1=new rectangle(350,550)
  //Body2=new rectangle(487,550)

  // Creating the dustbin shape as per the project document
  box1=new Dustbin(1300,565,170,20)
  box2=new Dustbin(1205,515,20,120)
  box3=new Dustbin(1395,515,20,120)
  
  // Creating new Ground
  ground=new Ground(800,585)

  // Creating the paperball
  ball=new Paper(250,450,40)

}

function draw(){
  background(0)
  Engine.update(engine)

  ground.display()
  ball.display()
  box1.display()
  box2.display()
  box3.display()

  }

  function keyPressed(){ //P should be capital in keypressed and that is why the project was not working
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85}); 
     } 
   }
  
  
  

 
      

