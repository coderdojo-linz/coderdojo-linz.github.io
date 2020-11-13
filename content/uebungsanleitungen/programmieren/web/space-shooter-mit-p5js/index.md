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

In dieser Übung programmierst du einen Space Shooter mit dem du herunterfallende Meteoriten abschießt.

{{< imgblock "img/space-shooter.png" "Space Shooter" >}}{{< /imgblock >}}

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

## Variablen

Als erstes legen wir alle Variablen an, die wir für das Spiel brauchen. Füge die Variablen ganz am Anfang des Codes ein. Zeilen die mit `//` beginnen sind Kommentare, die sind nicht nötig, damit das Programm läuft:

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

## Spielfeld vorbereiten

Für das Spielfeld nutzen wir die Funktion `setup`, die einmal beim Starten des Programms aufgerufen wird:

```js
function setup() {
  createCanvas(500, 400);
}
```

## Raumschiff

Als erstes fügen wir eine neue Funktion zum Zeichnen und Steuern des Raumschiffs ein. Füge die Funktion am Ende des Codes ein:

```js
function drawSpaceship() {
  // links und rechts bewegen
  if (keyIsDown(LEFT_ARROW)) { 
    if (spaceshipX >= 2) {
      spaceshipX -= 2;
    }
  } else if (keyIsDown(RIGHT_ARROW)) { 
    if (spaceshipX <= width - 2) {
      spaceshipX += 2;
    }
  }
  
  // rotieren
  if (keyIsDown(65)) {
    rotation -= 0.05;
  } else if (keyIsDown(68)) {
    rotation += 0.05;
  }
  
  // Spaceship zeichnen
  push();
  
  stroke('white');
  fill('gray');
  
  translate(spaceshipX, spaceshipY);
  rotate(rotation);

  ellipse(0, -30, 40, 60);
  rect(-20, -30, 40, 60);
  triangle(-20, 30, -40, 30, -20, 0);
  triangle(20, 30, 40, 30, 20, 0);
  
  pop();
}
```

