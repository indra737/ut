var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var count=0;
var gameState="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 // ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
      // plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
      // plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
     //  plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",20,700)
 text("500",100,700)
 text("500",180,700)
 text("300",260,700)
 text("200",340,700)
 text("100",420,700)
 text("300",500,700)
  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
    
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!= null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<250){
         score= score+500;
       }else if(particle.body.position.x<300 && particle.body.position.x>=250){
         score=score+300;
       }else if(particle.body.position.x<400 && particle.body.position.x>=300){
        score=score+200;
      }else if(particle.body.position.x<480 && particle.body.position.x>=400){
        score=score+100;
      }else if(particle.body.position.x<560 && particle.body.position.x>=480){
        score=score+300;
      }else if(particle.body.position.x<800 && particle.body.position.x>=560){
        score=score+500;
      }
       particle= null;
     }
   }
  if(count>=5){
   gameState="end"
   textSize(50)
   text("Game Over !",width/4,height/2)
  }
   console.log(count)
  
}

function mousePressed(){
  if(gameState!=="end"){
    particle= new Particle(mouseX,10,10,10) 
       //particles.push(particle);
    
    count++;
    }
}