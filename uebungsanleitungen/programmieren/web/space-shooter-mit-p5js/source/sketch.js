// x Position vom Raumschiff
let spaceshipX = 250;
// y Position vom Raumschiff
let spaceshipY = 360;
// Rotation vom Raumschiff
let rotation = 0;
// gibt an, ob das Spiel schon vorbei ist weil das Raumschiff getroffen wurde
let gameOver = false;
// Liste der Sterne
let stars = [];
// Liste der Asteroiden
const asteroids = [];
// Liste der abgefeuerten Laser
let lasers = [];
let explosions = [];

let spaceshipImg;
let asteroidImg;
let laserImg;
const shotImg = [];
const explosionImg = [];

// setzt den Focus aufs Spielfeld für die Tastatursteuerung
this.focus();

function preload() {
  spaceshipImg = loadImage('img/spaceship.png');
  asteroidImg = loadImage('img/asteroid.png');
  laserImg = loadImage('img/shot.png');
  
  for (let i = 1; i <= 10; i++) {
    explosionImg.push(loadImage('img/shot6_exp' + i.toString() + '.png'));
  }
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background('black');
  
  if (gameOver) {
    textSize(40);
    textAlign(CENTER, CENTER)
    fill('white');
    text('GAME OVER', width / 2, height / 2);
    return;
  }
  
  drawStars();
  drawAsteroids();
  drawLasers();
  drawExplosions();
  drawSpaceship();
  
  detectCollisions();
}

function keyPressed() {
  if (keyCode === 32) {
    lasers.push({ x: spaceshipX, y: spaceshipY, rotation: rotation, age: 0 });
  }
}

function drawAsteroids() {
  // neue Asteroiden generieren
  if (frameCount % 120 === 0) {
    asteroids.push({ x: random(0, width), y: 0, size: 10 });
  }
  
  // Asteroiden zeichnena
  for (let i = 0; i < asteroids.length; i++) {
    /*fill('yellow');
    circle(asteroids[i].x, asteroids[i].y, asteroids[i].size);*/
    push();
    translate(asteroids[i].x, asteroids[i].y)
    image(asteroidImg, asteroids[i].size / -2, asteroids[i].size / -2, asteroids[i].size, asteroids[i].size);
    pop();
    
    asteroids[i].y++;
    asteroids[i].size += 0.05;
  }
}

function drawLasers() {
  for (let i = 0; i < lasers.length; i++) {
    push();
    translate(lasers[i].x, lasers[i].y);
    rotate(lasers[i].rotation);
    /*fill('red');
    rect(-2, -20, 4, 20, 2);*/
    let imgNumber = Math.min(3, Math.floor(lasers[i].age / 3));
    image(laserImg,  -6,  0,  12,  60);
    pop();
     
    // neue Position berechnen
    lasers[i].x += 10 * sin(lasers[i].rotation);
    lasers[i].y -= 10 * cos(lasers[i].rotation);
    lasers[i].age++;
  }
  
  // alte Laser entfernen
  lasers = lasers.filter(l => l.x >= 0 && l.x <= width && l.y >= 0 && l.y <= height);
}

function drawExplosions() {
  for (let i = 0; i < explosions.length; i++) {
    push();
    translate(explosions[i].x, explosions[i].y);
    scale(2);
    let imgNumber = Math.min(9, Math.floor(explosions[i].duration / 3));
    image(explosionImg[imgNumber],  -24,  -24,  48,  48);
    pop();
    
    explosions[i].duration++;
  }
  
  explosions = explosions.filter(e => e.duration / 3 <= 9);
}

function drawSpaceship() {
  // links und rechts bewegen
  if (keyIsDown(LEFT_ARROW) && spaceshipX >= 2) {
    spaceshipX -= 2;
  } else if (keyIsDown(RIGHT_ARROW) && spaceshipX <= width - 2) {
    spaceshipX += 2;
  }
  
  // rotieren
  if (keyIsDown(65)) {
    rotation -= 0.05;
  } else if (keyIsDown(68)) {
    rotation += 0.05;
  }
  
  // Spaceship zeichnen
  push();
  
  //stroke('white');
  //fill('gray');
  
  translate(spaceshipX, spaceshipY);
  rotate(rotation);

  /*ellipse(0, -30, 40, 60);
  rect(-20, -30, 40, 60);
  triangle(-20, 30, -40, 30, -20, 0);
  triangle(20, 30, 40, 30, 20, 0);*/
  image(spaceshipImg, -30, -47, 60, 94);
  
  pop();
}

function detectCollisions() {
  // Kollisionen von Asteroiden mit Lasern
  let asteroidCollisions = [];
  
  for (let l = 0; l < lasers.length; l++) {
    for (let a = 0; a < asteroids.length; a++) {
      if (collideRectCircle(
            lasers[l].x - 2, 
            lasers[l].y - 20, 
            4, 
            20, 
            asteroids[a].x, 
            asteroids[a].y, 
            asteroids[a].size)) {
          asteroidCollisions.push({ laserIndex: l, asteroidIndex: a });
          explosions.push({ x: lasers[l].x, y: lasers[l].y, duration: 0 });
      }
    }
  }
  
  for (let i = 0; i < asteroidCollisions.length; i++) {
    lasers.splice(asteroidCollisions[i].laserIndex, 1);
    asteroids.splice(asteroidCollisions[i].asteroidIndex, 1);
  }
  
  // Kollisionen von Asteroiden mit dem Raumschiff
  let spaceshipPolygon = getSpaceshipPolygon();
 
  for (let i = 0; i < asteroids.length && !gameOver; i++) {
    if (collideCirclePoly(
      asteroids[i].x, 
      asteroids[i].y, 
      asteroids[i].size, spaceshipPolygon)) {
      gameOver = true;
    }
  }
}

function drawStars() {
  // nach einer Lösung von https://editor.p5js.org/amyxiao/sketches/S1qEhKf2Z
  // alte Sterne löschen
  stars = stars.filter(star => star.z >= 0);
  
  // neue Sterne generieren
  for (let i = 0; i < frameCount / 600; i++) {
    stars.push({
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(width)
    });
  }
  
  // Sterne zeichnen
  push();
  translate(width / 2, height / 2);
  fill('white');
  noStroke();
  
  let speed = frameCount / 600 + 1;
  
  for (let i = 0; i < stars.length; i++) { 
    let star = stars[i];
    star.z = star.z - speed;
    // sx = map(star.x / star.z, 0, 1, 0, width);
    // sy = map(star.y / star.z, 0, 1, 0, height);
    // r = map(star.z, 0, width, 8, 0);
    sx = star.x / star.z * width;
    sy = star.y / star.z * height;
    r = map(star.z, width, 0, 0, 8);
    circle(sx, sy, r);
  }
  
  pop();
}

function getSpaceshipPolygon() {
  let spaceshipPolygon = [];
  addPointToPolygon(spaceshipPolygon, 0, -50);
  addPointToPolygon(spaceshipPolygon, 20, -30);
  addPointToPolygon(spaceshipPolygon, 20, 0);
  addPointToPolygon(spaceshipPolygon, 25, 40);
  addPointToPolygon(spaceshipPolygon, -25, 40);
  addPointToPolygon(spaceshipPolygon, -20, 0);
  addPointToPolygon(spaceshipPolygon, -20, -30);
  //drawPolygon(spaceshipPolygon);
  
  return spaceshipPolygon;
}

function addPointToPolygon(polygon, x, y) {
  push();
  tf = new Transformer();
  tf.rotate(rotation);
  tf.translate(x, y);
  polygon.push(createVector(spaceshipX + tf.x, spaceshipY + tf.y));
  pop();
}

function drawPolygon(polygon) {
  stroke('lightgreen');
  fill('pink')
  beginShape();
  vertex(polygon[0].x, polygon[0].y);
  vertex(polygon[1].x, polygon[1].y);
  vertex(polygon[2].x, polygon[2].y);
  vertex(polygon[3].x, polygon[3].y);
  vertex(polygon[4].x, polygon[4].y);
  vertex(polygon[5].x, polygon[5].y);
  vertex(polygon[6].x, polygon[6].y);
  endShape(CLOSE);
}
