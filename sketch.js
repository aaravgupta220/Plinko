const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {

  createCanvas(480, 800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(240, 790, 480, 20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var a = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(a, 175));
  }

  for(var y = 65; y <= width; y = y + 50){
    plinkos.push(new Plinko(y, 275));
  }

  for(var x = 90; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 375));
  }

}

function draw() {

  background("black");  

  Engine.update(engine);

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 40; j <= plinkos.height; j++){
    plinkos[j].display();
  }

  for(var a = 15; j <= plinkos.height; a++){
    plinkos[a].display();
  }

  for(var y = 65; j <= plinkos.height; y++){
    plinkos[y].display();
  }

  for(var x = 90; j <= plinkos.height; x++){
    plinkos[x].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for(var z = 0; z < particles.length; z++){
    particles[z].display();
  }

  drawSprites();

}