---
title: "Snake mit p5.js"
description: "In dieser Übung programmierst du das Spiel Snake mit p5.js."
level: 2
categories:
- JavaScript
- p5.js
---

# Snake mit p5.js

## Ziel der Übung

In dieser Übung programmierst du das Spiel Snake mit p5.js.

{{< imgblock "img/snake.png" "Snake" >}}{{< /imgblock >}}

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
// Breite des Spielfelds
let boardWidth = 20;
// Höhe des Spielfels
let boardHeight = 20;
// Breite und Höhe einer Position (Schlangenteil oder Apfel)
let size = 15;
// Array mit allen Positionen der Schlange
let snakePos = [{ x: 5, y: 5 }];
// Länge der Schlange
let snakeLength = 3;
// x Position des Apfels
let applePosX = 0;
// y Position des Apfels
let applePosY = 0;
// Bewegung der Schlange in x Richtung (-1, 0 oder 1)
let dirX = 1;
// Bewegung der Schlange in y Richtung (-1, 0 oder 1)
let dirY = 0;
// gesammelte Punkte
let points = 0;
// Geschwindigkeit der Schlange
let speed = 3;
// Hintergrundfarbe
let backgroundColor = 'lightgray';

// Fokus wird auf das Spielfeld gesetzt
this.focus();
```

## Spielfeld vorbereiten

Jetzt bereiten wir das Spielfeld in der richtigen Größe vor. Die Funktion setup braucht dazu folgenden Code:

```js
function setup() {
  // Größe des Spielfelds definieren
  createCanvas(boardWidth * size, boardHeight * (size + 1));
  // Hintergrundfarbe setzen
  background(backgroundColor);
  // bei allen zukünftigen Zeichenoperationen (circle, rect, ...) soll keine Umrandung erfolgen
  noStroke();

  // frameRate setzt fest, wie oft die Funktion draw pro Sekunde aufgerufen wird
  frameRate(speed);
}
```

## Schlange malen

Als nächstes berechnen wir in der Funktion `draw` die nächste Position der Schlange und malen sie. Lösche dazu den Befehl `background(220);` aus der Funktion `draw` und füge stattdessen folgenden Code ein:

```js
function draw() {
  // Schlange von voriger Position entfernen
  if (snakePos.length >= snakeLength) {
    fill(backgroundColor);
    rect(snakePos[0].x * size, snakePos[0].y * size, size, size);
    snakePos.shift();
  }

  // neue Position der Schlange berechnen
  let posX = snakePos[snakePos.length - 1].x + dirX;
  let posY = snakePos[snakePos.length - 1].y + dirY;
  
  // neue Position der Schlange malen
  fill('green');
  rect(posX * size, posY * size, size, size);
  snakePos.push({ x: posX, y: posY });
}
```

Wenn du das Programm jetzt startest, sollte sich die Schlange schon nach rechts bewegen.

## Steuerung der Schlange

Wir wollen jetzt die Cursortasten (Pfeiltasten) verwenden, um die Schlange zu steuern. Dafür fügen wir ganz unten im Code die neue Funktion `keyPressed` ein:

```js
function keyPressed() {
  // Richtung der Schlange durch Cursortasten ändern
  if (keyCode === LEFT_ARROW) {
    dirX = -1;
    dirY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    dirX = 1;
    dirY = 0;
  } else if (keyCode === UP_ARROW) {
    dirX = 0;
    dirY = -1;
  } else if (keyCode === DOWN_ARROW) {
    dirX = 0;
    dirY = 1;
  }
}
```

Du solltest die Schlange jetzt in alle Richtungen bewegen können.

## Apfel malen

Der Apfel soll an einer zufälligen Position im Spielfeld auftauchen. Dafür fügen wir ganz unten im Code eine neue Funktion `drawApple` hinzu:

```js
function drawApple() {
  // zufällige Position für Apfel ermitteln
  applePosX = Math.round(Math.random() * (boardWidth - 1));
  applePosY = Math.round(Math.random() * (boardHeight - 1));

  // Apfel malen
  fill('red');
  ellipse(applePosX * size + size / 2, applePosY * size + size / 2, size);
  
  // Punktestand ausgeben
  fill('gray');
  rect(0, boardHeight * size, boardWidth * size, size + 5);
  fill('white');
  textSize(size - 5);
  text('Points: ' + points.toString(), size, boardHeight * (size + 1) - 5);
}
```

Jedesmal wenn ein neuer Apfel angezeigt wird, geben wir am unteren Rand des Spielfelds auch den aktuellen Punktestand aus.

In der Funktion `setup` müssen wir die Funktion `drawApple` nun auch aufrufen, damit beim Start des Spiels ein Apfel angezeigt wird. Füge dazu als letzte Zeile in der Funktion `setup` die Zeile `drawApple();` ein:

```js
function setup() {
  ...
  
  // ersten Apfel anzeigen
  drawApple();
}
```

## Apfel einsammeln

Wenn die Schlange auf den Apfel trifft, wird die Schlange länger und ein neuer Apfel wird angezeigt. Füge dazu in der Funktion `draw` befor die neue Position der Schlange gemalt wird folgenden Code ein:

{{< highlight js "hl_lines=13-28" >}}
function draw() {
  // Schlange von voriger Position entfernen
  if (snakePos.length >= snakeLength) {
    fill(backgroundColor);
    rect(snakePos[0].x * size, snakePos[0].y * size, size, size);
    snakePos.shift();
  }

  // neue Position der Schlange berechnen
  let posX = snakePos[snakePos.length - 1].x + dirX;
  let posY = snakePos[snakePos.length - 1].y + dirY;
  
  // prüfen, ob der Apfel berührt wird
  if (posX === applePosX && posY === applePosY) {
    // Punkte erhöhen
    points++;
    
    // Geschwindigkeit erhöhen
    if (speed < 20) {
      speed++;
      frameRate(speed);
    }
    
    // neuen Apfel zeichnen
    drawApple();
    // Länge der Schlange erhöhen
    snakeLength++;
  }
  
  // neue Position der Schlange malen
  fill('green');
  rect(posX * size, posY * size, size, size);
  snakePos.push({ x: posX, y: posY });
}
{{< /highlight >}}

## Kollisionen erkennen

Als letztes müssen wir jetzt noch erkennen, wenn die Schlange den Rand berührt oder sich selbst verknotet. Auch diesen Code musst du noch in die Funktion `draw` direkt unter das Ermitteln der neuen Position einfügen:

{{< highlight js "hl_lines=13-25" >}}
function draw() {
  // Schlange von voriger Position entfernen
  if (snakePos.length >= snakeLength) {
    fill(backgroundColor);
    rect(snakePos[0].x * size, snakePos[0].y * size, size, size);
    snakePos.shift();
  }

  // neue Position der Schlange berechnen
  let posX = snakePos[snakePos.length - 1].x + dirX;
  let posY = snakePos[snakePos.length - 1].y + dirY;
  
  // prüfen, ob die Schlange den Rand berührt
  if (posX < 0 || posX >= boardWidth|| posY < 0 || posY >= boardHeight) {
    background('red');
    return;
  }
  
  // prüfen, ob die Schlange sich selbst verknotet
  for (let i = 0; i < snakePos.length; i++) {
    if (snakePos[i].x === posX && snakePos[i].y === posY) {
      background('fuchsia');
      return;
    }
  }
  
  // prüfen, ob der Apfel berührt wird
  if (posX === applePosX && posY === applePosY) {
    // Punkte erhöhen
    points++;
    ...
}
{{< /highlight >}}

Du kannst das fertige Spiel unter [https://editor.p5js.org/karin112358/sketches/Vc2YHuXjk](https://editor.p5js.org/karin112358/sketches/Vc2YHuXjk) ausprobieren.