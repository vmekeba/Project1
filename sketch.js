//Interact with this animation using your mouse! Pressing your mouse will draw directly over the rainbow circle and squares that are self-populating. Releasing your mouse will stop drawing and allow you to reposition your mouse to draw in another spot. Press the return key to clear your canvas and start again. Have fun!
// Patrice Reynolds Project 1

let x, y, r, g, b;

function setup() {
  createCanvas(600, 600);
  background(0);
  frameRate(9);
}

  function keyPressed() {
  if (keyCode === RETURN) {
  background(0);
  }}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(600);
  y = random(600);
  noStroke();
  fill(r, g, b, 150);
  square(x, y, 20);

  r = random(255);
  g = random(255);
  b = random(255);
  x = random(600);
  y = random(600);
  noStroke();
  fill(r, g, b, 75);
  circle(x, y, 20);
  
  frameRate(40);
  r = map(r, 0, 600, 0, 255);
  g = map(g, 0, 600, 0, 255);
  b = map(b, 0, 500, 0, 255);
  
  r = mouseX;
  g = mouseY;
  b = mouseX + mouseY/2;
  
  
  stroke(0)
  fill(r, g, 100);
  if (mouseIsPressed){
  ellipse(mouseX, mouseY, 20, 20);}
  
  
}
