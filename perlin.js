let particles = [];
const num = 2000;
const noiseScale = 0.005 / 2;

function setup() {
  let bg = createDiv();
  bg.addClass("p5canvas");
  createCanvas(windowWidth, windowHeight).parent(bg);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(0, 0));
  }
  stroke(185, 40);
  clear();
}

function draw() {
  background(0, 10);
  for (let i = 0; i < num; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(
      p.x * noiseScale,
      p.y * noiseScale,
      frameCount * noiseScale * noiseScale
    );
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= windowWidth && v.y >= 0 && v.y <= windowHeight;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
