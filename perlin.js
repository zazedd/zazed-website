let particles = [];
const num = 10000;

const noiseScale = 0.005 / 2;

function setup() {
  let bg = createDiv();
  bg.addClass("p5canvas");
  let canvas = createCanvas(2440, 1370);
  canvas.parent(bg);
  for (let i = 0; i < num; i++) {
    particles.push(createVector(0, 0));
  }
  stroke(155, 50);
  // For a cool effect try uncommenting this line
  // And comment out the background() line in draw
  // stroke(255, 50);
  clear();
}

function draw() {
  background(0, 20);
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
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
