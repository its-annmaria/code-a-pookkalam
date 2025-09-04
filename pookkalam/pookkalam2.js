let particles = [];

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  noLoop();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  for(let i=0; i<50; i++){
    particles.push({x: random(-250,250), y: random(-250,250), size: random(2,5)});
  }
}

function draw() {
  background("#f09e1aff"); 
  translate(width/2, height/2);

  //yellow base circle
  noStroke();
  fill("#f7d127ff");
  circle(0, 0, 390);

  //particles
  noStroke();
  fill(255, 200, 0, 150);
  particles.forEach(p => circle(p.x, p.y, p.size));

  let colors = ["#e25c1eff","#f1b510ff","#3e5d0bff","#8819c4ff","#b7335dff"];

  //petals
  for (let r = 150; r > 20; r -= 30) {
    let c = random(colors);
    fill(c);
    stroke(255);
    strokeWeight(2);

    for (let a = 0; a < 360; a += 30) {
      push();
      rotate(a);
      ellipse(r, 0, 90, 80);
      pop();
    }
  }


  let txt = "HAPPY ONAM";
  let txtRadius = 220; 
  let angleStep = 180 / (txt.length - 1);

  fill("#8d380eff"); 
  textSize(20);
  

  push();
  rotate(-90); // start from top
  for (let i = 0; i < txt.length; i++) {
    let angle = -90 + i * angleStep; 
    let x = txtRadius * cos(angle);
    let y = txtRadius * sin(angle);
    push();
    translate(x, y);
    rotate(angle + 90); // rotate letter to align with curve
    text(txt[i], 0, 0);
    pop();
  }
  pop();
}

//refresh button
function refreshPookkalam() {
  redraw();
}

