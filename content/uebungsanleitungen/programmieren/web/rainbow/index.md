---
title: "Regenbogen"
description: "In dieser Übung zeichnest du einen Regenboen."
level: 1
categories:
- HTML
- JavaScript
- p5.js
---

# Regenbogen

## Ziel der Übung

Du malst eine Landschaft mit Blumen und Wolken und einem Regenbogen, der erscheint, wenn du die Maus nach rechts bewegst.

{{< imgblock "img/rainbow.gif" "Rainbow" >}}{{< /imgblock >}}

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

## Hintergrund

Als erstes ändern wir den Farbmodus auf [HSB](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html). Dadurch können wir die Regenbogenfarben am besten abbilden. Füge dazu in der Funktion `setup()` folgende Zeile ein:

{{< highlight js "hl_lines=3" >}}
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}
{{< /highlight >}}

Für den Himmel brauchen wir in der Funktion `draw()` die folgende Zeile:

{{< highlight js "hl_lines=2-3" >}}
function draw() {
  // Himmel
  background('skyblue');
}
{{< /highlight >}}

## Regenbogen

Als nächstes fügen wir in der Funktion  `draw()` den Regenbogen ein:

{{< highlight js "hl_lines=5-14" >}}
function draw() {
  // Himmel
  background('skyblue');
  
  // Regenbogen
  strokeWeight(10);
  noFill();
  
  let opacity = mouseX / 400;
  
  for (let i = 0; i < 6; i++) {
    stroke(360 / 6 * i, 100, 100, opacity);
    ellipse(200, 200, 200 + i * 20, 200 + i * 20);
  }
}
{{< /highlight >}}

Wenn du die Maus langsam über dem Himmel nach rechts bewegst, taucht jetzt schon der Regenbogen auf.

{{< imgblock "img/rainbow-simple.png" "Rainbow" >}}{{< /imgblock >}}

## Wiese

Als nächstes fügen wir die Wiese zu unserem Bild hinzu.

{{< highlight js "hl_lines=16-19" >}}

function draw() {
  // Himmel
  background('skyblue');
  
  // Regenbogen
  strokeWeight(10);
  noFill();
  
  let opacity = mouseX / 400;
  
  for (let i = 0; i < 6; i++) {
    stroke(360 / 6 * i, 100, 100, opacity);
    ellipse(200, 200, 200 + i * 20, 200 + i * 20);
  }

  // Wiese
  noStroke();
  fill(120, 100, 60);
  rect(0, 250, 400, 150);
}
{{< /highlight >}}

Jetzt wird am unteren Bildrand auf die Wiese angezeigt.

{{< imgblock "img/rainbow-wiese.png" "Rainbow" >}}{{< /imgblock >}}

## Blumen

Als nächstes kümmern wir uns um die Blumen. Da wir mehrere Blumen zeichnen möchten, legen wir dafür eine eine eigene Funktion an. Mit dieser Funktion können wir Code schreiben, der öfters aufgerufen wird.

Füge dazu ganz unten im Program folgende Code hinzu:

{{< highlight js >}}
function drawFlower(x, y, color) {
  noStroke();
  
  if (!color) {
    color = 30;
  }
  
  fill(color, 100, 100);
  ellipse(x - 10, y - 10, 20);
  ellipse(x - 10, y + 10, 20);
  ellipse(x + 10, y - 10, 20);
  ellipse(x + 10, y + 10, 20);
  
  fill(50, 100, 100);
  ellipse(x, y, 20, 20);
}
{{< /highlight >}}

In der Funktion `draw()` können wir diese Funktion jetzt verwenden, um mehrere Blumen zu malen. Als Parameter übergeben wir:

- x: wie weit rechts wird die Blume gemalt
- y: wie weit unten wird die Blume gemalt
- color: welche Farbe erhalten die Blütenblätter

Füge in der Funktion `draw()` folgende Zeilen hinzu:

{{< highlight js "hl_lines=21-29" >}}
function draw() {
  // Himmel
  background('skyblue');
  
  // Regenbogen
  strokeWeight(10);
  noFill();
  
  let opacity = mouseX / 400;
  
  for (let i = 0; i < 6; i++) {
    stroke(360 / 6 * i, 100, 100, opacity);
    ellipse(200, 200, 200 + i * 20, 200 + i * 20);
  }
  
  // Wiese
  noStroke();
  fill(120, 100, 60);
  rect(0, 250, 400, 150);
  
  // Blumen
  drawFlower(350, 280, 30);
  drawFlower(110, 320, 20);
  drawFlower(30, 370, 35);
  drawFlower(220, 350, 25);
  drawFlower(220, 350, 70);
  drawFlower(270, 310, 320);
  drawFlower(50, 290, 290);
  drawFlower(360, 370, 330);
}
{{< /highlight >}}

Jetzt werden mehrere Blumen in die Wiese gemalt:

{{< imgblock "img/rainbow-blumen.png" "Rainbow" >}}{{< /imgblock >}}

## Wolken

Als letztes fügen wir ganz am Ende des Programms noch eine neue Funktion zum Malen von Wolken ein:

{{< highlight js >}}
function drawCloud(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 24);
  ellipse(x + 10, y + 10, 24);
  ellipse(x + 30, y + 10, 24);
  ellipse(x + 30, y - 10, 24);
  ellipse(x + 20, y - 10, 24);
  ellipse(x + 40, y, 24);
}
{{< /highlight >}}

Auch für diese Funktion brauchen wir in der `draw()` Funktion noch einige Aufrufe, um die Wolken zu platzieren. Füge dazu folgende Zeilen ein:

{{< highlight js "hl_lines=31-34" >}}
function draw() {
  // Himmel
  background('skyblue');
  
  // Regenbogen
  strokeWeight(10);
  noFill();
  
  let opacity = mouseX / 400;
  
  for (let i = 0; i < 6; i++) {
    stroke(360 / 6 * i, 100, 100, opacity);
    ellipse(200, 200, 200 + i * 20, 200 + i * 20);
  }
  
  // Wiese
  noStroke();
  fill(120, 100, 60);
  rect(0, 250, 400, 150);
  
   // Blumen
  drawFlower(350, 280, 30);
  drawFlower(110, 320, 20);
  drawFlower(30, 370, 35);
  drawFlower(220, 350, 25);
  drawFlower(220, 350, 70);
  drawFlower(270, 310, 320);
  drawFlower(50, 290, 290);
  drawFlower(360, 370, 330);
  
  // Wolken
  drawCloud(20, 30);
  drawCloud(300, 50);
  drawCloud(140, 100);
}
{{< /highlight >}}

Jetzt ist dein Regenbogenbild fertig.

{{< imgblock "img/rainbow.png" "Rainbow" >}}{{< /imgblock >}}