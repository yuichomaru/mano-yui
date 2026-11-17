// 最終課題を制作しよう

let targets = [];
let particles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
   targets = [];
}

function windowResized(){ 
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(31 , 47, 84);

  if(frameCount % 100 === 0) { 
    targets.push({
  x: random(width),
  y: height,
  vx:0,
  vy: -7,
})
 }

for(let i = targets.length -1; i >= 0; i--){
    let t = targets[i];

    fill(255);
  
    ellipse(t.x, t.y, 8);

    t.x += t.vx;
    t.y += t.vy;
    t.vy += 0.05;
    t.size += 1;

if(t.vy > 0){

  for(let j = 0; j < 50; j++){
    let angle = random(TWO_PI);
    let speed = random(1, 5);

    particles.push({
      x: t.x,
      y: t.y,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed,
      life:100
    });
  }

  targets.splice(i, 1);
 }
} 

for(let i= particles.length -1;i>=0; i--){
  let p = particles[i];

  fill(255,200,0);
  ellipse(p.x,p.y,5);

  p.x +=p.vx;
  p.y += p.vy;

  p.vy += 0.03;
  p.life--;

  if(p.life <= 0){
     particles.splice(i,1);
  }
}


}
