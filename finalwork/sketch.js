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

  if(frameCount % 200 === 0) { 
    targets.push({
  x: random(width),
  y: height,
  vx:0,
  vy: -7,
  size: 1
})
 }

for(let i = targets.length -1; i >= 0; i--){
    let t = targets[i];

    fill(255);
  
    ellipse(t.x, t.y, t.size);

    t.x += t.vx;
    t.y += t.vy;
    t.vy += 0.05;
    t.size = 8;

if(t.vy > 0){

let r = random(255);
    let g = random(255);
    let b = random(255);


  for(let j = 0; j < 50; j++){

    let angle = random(TWO_PI);
    let speed = random(1, 5);

    particles.push({
      x: t.x,
      y: t.y,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed,
      life:100,

      r:r,
      g:g,
      b:b,


    });
    
  }

  targets.splice(i, 1);
 }
} 

for(let i= particles.length -1;i>=0; i--){
  let p = particles[i];

  fill(p.r, p.g, p.b );
  noStroke();
  ellipse(p.x,p.y,5);

  p.x +=p.vx;
  p.y += p.vy;

  p.vy += 0.03;
  p.life--;

  if(p.life <= 0){
     particles.splice(i,1);
  }
}

if(frameCount % 280 === 0) { 
    targets.push({
  x: random(width),
  y: height,
  vx:0,
  vy: -5,
})
 }

for(let i = targets.length -1; i >= 0; i--){
    let t = targets[i];

    fill(255);
  
    ellipse(t.x, t.y, t.size);

    t.x += t.vx;
    t.y += t.vy;
    t.vy += 0.05;
    t.size = 8;

if(t.vy > 0){

   let r = random(255);
    let g = random(255);
    let b = random(255);

  for(let j = 0; j < 50; j++){

  
    let angle = random(TWO_PI);
    let speed = random(1, 5);

    particles.push({
      x: t.x,
      y: t.y,
      vx: cos(angle) * speed,
      vy: sin(angle) * speed,
      life:100,

      r:r,
      g:g,
      b:b,

    });
  }

  targets.splice(i, 1);
 }
} 

for(let i= particles.length -1;i>=0; i--){
  let p = particles[i];

  fill(p.r, p.g, p.b);
  noStroke();
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
