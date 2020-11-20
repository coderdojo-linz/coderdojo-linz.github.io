---
title: "Space Shooter mit p5.js"
description: "In dieser Übung programmierst du einen Space Shooter mit dem du herunterfallende Meteoriten abschießt."
level: 2
categories:
- JavaScript
- p5.js
---

# Space Shooter mit p5.js

## Ziel der Übung

In dieser Übung programmierst du einen Space Shooter mit dem du herunterfallende Meteoriten abschießt. Mit den Pfeiltasten kannst du das Raumschiff nach links und rechts bewegen. Mit den Tasten `a` und `d` kannst du es drehen. Und mit der Leertaste kannst du Laser abfeuern, um die herunterfallenden Meteoriten zu zerstören.

<iframe src="source/index.html" width="500" height="400" style="max-width: 100%" class="inline-game"></iframe>

## p5.js

Wir verwenden für diese Übung die JavaScript Bibliothek [p5.js](https://p5js.org/). Du kannst den online Editor verwenden, um damit Programme zu bauen, du kannst die Bibliothek aber auch in deine eigene Webseite einbauen.

Öffne zum Starten den [p5.js editor](https://editor.p5js.org/).

Dort wird dir folgender Code angezeigt:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

## HTML

Wähle auf der linke Seite zuerst die Datei `index.html` aus. Dort müssen wir noch die Verweise auf zwei weiter JavaScript Bibliotheken einfügen:

{{< highlight html "hl_lines=6 13" >}}
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <script src="https://unpkg.com/p5.collide2d"></script>   
    
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
  </head>
  
  <body>
    <script src="https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/transformer.js"></script>
    <script src="sketch.js"></script>
  </body>
</html>
{{< /highlight >}}

## Variablen

Wechsle jetzt zurück zur Datei `sketch.js`. Als erstes legen wir alle Variablen an, die wir für das Spiel brauchen. Füge die Variablen ganz am Anfang des Codes ein. Zeilen die mit `//` beginnen sind Kommentare, die sind nicht nötig, damit das Programm läuft:

```js
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
const lasers = [];

// setzt den Focus aufs Spielfeld für die Tastatursteuerung
this.focus();
```

## Grafiken laden

Direkt darunter und noch über der Funktion `setup` fügen wir eine neue Funktion `preload` ein, mit der wir alle Grafiken für das Spiel laden:

```js
function preload() {
  spaceshipImg = loadImage('https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/spaceship.png');
  asteroidImg = loadImage('https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/asteroid.png');
  laserImg = loadImage('https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/shot_0.png');
  
  for (let i = 1; i <= 10; i++) {
    explosionImg.push(loadImage('https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/source/img/shot6_exp' + i.toString() + '.png'));
  }
}
```

## Spielfeld vorbereiten

Für das Spielfeld nutzen wir die Funktion `setup`, die einmal beim Starten des Programms aufgerufen wird. Ändere in dieser Funktion die Breite des Spielfelds auf 500:

{{< highlight js "hl_lines=2" >}}
function setup() {
  createCanvas(500, 400);
}
{{< /highlight >}}

## Spielfeld updaten

In der Funktion `draw` wird das Spielfeld regelmäßig upgedated. Dazu setzen wir in jedem Durchlauf die Hintergrundfarbe auf schwarz. Außerdem rufen wir eine neue Funktion zum Zeichnen des Raumschiffs auf, die wir gleich nachher noch anlegen werden.

{{< highlight js "hl_lines=2 4" >}}
function draw() {
  background('black');
  
  drawSpaceship();
}
{{< /highlight >}}

## Raumschiff

Nun fügen wir die neue Funktion zum Zeichnen und Steuern des Raumschiffs ein. Füge die Funktion am Ende des Codes ein:

```js
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
  translate(spaceshipX, spaceshipY);
  rotate(rotation);
  image(spaceshipImg, -30, -47, 60, 94);
  pop();
}
```

## Meteoriten

Als nächstes lassen wir neue Asteroiden entstehen, die Richtung Raumschiff fallen. Die neue Funktion kannst du am Ende der Datei einfügen:

```js
function drawAsteroids() {
  // neue Asteroiden generieren
  if (frameCount % 120 === 0) {
    asteroids.push({ x: random(0, width), y: 0, size: 10 });
  }
  
  // Asteroiden zeichnen
  for (let i = 0; i < asteroids.length; i++) {
    push();
    translate(asteroids[i].x, asteroids[i].y)
    image(asteroidImg, asteroids[i].size / -2, asteroids[i].size / -2, asteroids[i].size, asteroids[i].size);
    pop();
    
    asteroids[i].y++;
    asteroids[i].size += 0.05;
  }
}
```

Zusätzlich muss du die neue Funktion auch in der `draw` Funktion aufrufen:

{{< highlight js "hl_lines=4" >}}
function draw() {
  background('black');
  
  drawAsteroids();
  drawSpaceship();
}
{{< /highlight >}}

## Laser

Als nächstes wollen wir mit der Leertaste Laser abfeuern. Dazu fügen wir die neue Funktion `keyPressed` ein, um neue Laser entstehen zu lassen:

```js
function keyPressed() {
  if (keyCode === 32) {
    lasers.push({ x: spaceshipX, y: spaceshipY, rotation: rotation, age: 0 });
  }
}
```

Weiters brauchen wir eine neue Funktion `drawLasers`, um diese ins Spielfeld zu malen:

```js
function drawLasers() {
  for (let i = 0; i < lasers.length; i++) {
    push();
    translate(lasers[i].x, lasers[i].y);
    rotate(lasers[i].rotation);
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
```

Und auch in die `draw` Funktion müssen wir wieder einen Aufruf, zum Zeichnen der Laser einfügen:

{{< highlight js "hl_lines=5" >}}
function draw() {
  background('black');
  
  drawAsteroids();
  drawLasers();
  drawSpaceship();
}
{{< /highlight >}}

## Kollisionen erkennen

Um zu erkennen, ob ein Laser einen Meteoriten berührt, oder ob ein Meteorit das Raumschiff berührt, brauchen wir die folgenden drei Funktionen:

```
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

function getSpaceshipPolygon() {
  let spaceshipPolygon = [];
  addPointToPolygon(spaceshipPolygon, 0, -50);
  addPointToPolygon(spaceshipPolygon, 20, -30);
  addPointToPolygon(spaceshipPolygon, 20, 0);
  addPointToPolygon(spaceshipPolygon, 25, 40);
  addPointToPolygon(spaceshipPolygon, -25, 40);
  addPointToPolygon(spaceshipPolygon, -20, 0);
  addPointToPolygon(spaceshipPolygon, -20, -30);
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
```

Außerdem brauchen wir in der `draw` Methode einen Aufruf `detectCollisions()`:

{{< highlight js "hl_lines=8" >}}
function draw() {
  background('black');
  
  drawAsteroids();
  drawLasers();
  drawSpaceship();

  detectCollisions();
}
{{< /highlight >}}

## Explosion

Als nächsters folgt eine Funktion zum Zeichnen aller Explosionen:

```
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
```

Auch diese Funtion wird wieder in der `draw` Methode aufgerufen:

{{< highlight js "hl_lines=6" >}}
function draw() {
  background('black');
  
  drawAsteroids();
  drawLasers();
  drawExplosions();
  drawSpaceship();

  detectCollisions();
}
{{< /highlight >}}

## Sterne

Die Funktion zum Zeichnen der Sterne sieht so aus:

```
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
    sx = star.x / star.z * width;
    sy = star.y / star.z * height;
    r = map(star.z, width, 0, 0, 8);
    circle(sx, sy, r);
  }
  
  pop();
}
```

Auch diese Funtion wird wieder in der `draw` Methode aufgerufen:

{{< highlight js "hl_lines=4" >}}
function draw() {
  background('black');
  
  drawStars();
  drawAsteroids();
  drawLasers();
  drawExplosions();
  drawSpaceship();

  detectCollisions();
}
{{< /highlight >}}

## Game Over

Zu guter letzt müssen wir in der `draw` Methode noch erkennen, ob das Spiel schon verloren ist:

{{< highlight js "hl_lines=4-10" >}}
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
{{< /highlight >}}

## Source Code

Hier findest du den gesamten Source Code:

- [index.html](source/index.html)
- [sketch.js](source/sketch.js)
- [style.js](source/style.js)
- [transformer.js](source/transformer.js)
- img
  - [asteroid.png](source/img/asteroid.png)
  - [shot.png](source/img/shot.png)
  - [shot6_exp1.png](source/img/shot6_exp1.png)
  - [shot6_exp2.png](source/img/shot6_exp2.png)
  - [shot6_exp3.png](source/img/shot6_exp3.png)
  - [shot6_exp4.png](source/img/shot6_exp4.png)
  - [shot6_exp5.png](source/img/shot6_exp5.png)
  - [shot6_exp6.png](source/img/shot6_exp6.png)
  - [shot6_exp7.png](source/img/shot6_exp7.png)
  - [shot6_exp8.png](source/img/shot6_exp8.png)
  - [shot6_exp9.png](source/img/shot6_exp9.png)
  - [shot6_exp10.png](source/img/shot6_exp10.png)
  - [spaceship.png](source/img/spaceship.png)