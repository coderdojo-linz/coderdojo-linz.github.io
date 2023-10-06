---
title: "Moorhuhn Jagd"
description: "In diesem Spiel musst du Moorhühner treffen. Wie viele erwischst du?"
level: 2
categories:
- HTML
- p5.js
---

# Moorhuhn Jagd

## Einleitung

{{< imgblock "img/titel.png" "Hintergrund" 5 >}} In dieser Übung programmierst du das Spiel _Moorhuhn Jagd_ [erst mit Scratch](../../scratch/moorhuhn-jagd/) und danach mit TypeScript und p5.js. In dieser Anleitung gehen wir davon aus, dass du schon etwas Erfahrung mit TypeScript und p5.js hast.
{{< /imgblock >}}

## Das Scratch-Spiel

Damit du mit dem Spielprinzip vertraut wirst, baue das Spiel zuerst mit Scratch nach. Die Anleitung dazu findest du [hier](../../scratch/moorhuhn-jagd/). Dieser Schritt ist wirklich wichtig, nicht auslassen!

## Der Starter-Code

{{< imgblock "img/fork.png" "Fork" 6 >}} Öffne als erstes den [Starter-Code](https://stackblitz.com/edit/crazy-chicken-part-2-starter). Er enthält etwas Basiscode, der langweilig zu schreiben wäre. Wir haben ihn für dich vorbereitet. Du baust auf diesem Code auf. Damit du dir deine eigene Kopie des Codes erstellst, drücke auf _Fork_.
{{< /imgblock >}}

## Fadenkreuz

{{< imgblock "img/crosshairs.png" "Fadenkreuz" 5 >}} Als erstes programmieren wir das _Fadenkreuz_. Es soll immer an der Position der Maus gemalt werden. Das Fadenkreuz besteht aus vier Linien (oben, rechts, unten, link) und zwei Kreisen. Füge als erstes folgende _Methode_ ganz **am Ende** des Programms hinzu.

```ts
function drawCrosshairs() {
  p.push();
  p.stroke('black');
  p.strokeWeight(1);
  p.line(p.mouseX, p.mouseY - 30, p.mouseX, p.mouseY - 4);
  p.line(p.mouseX - 30, p.mouseY, p.mouseX - 4, p.mouseY);
  p.line(p.mouseX, p.mouseY + 4, p.mouseX, p.mouseY + 30);
  p.line(p.mouseX + 4, p.mouseY, p.mouseX + 30, p.mouseY);
  p.noFill();
  p.circle(p.mouseX, p.mouseY, 20);
  p.circle(p.mouseX, p.mouseY, 40);
  p.pop();
}
```

Diese Methode rufen wir innerhalb der _draw_-Funktion auf, und zwar genau nach dem Kommentar `// <<<<< Zeichenfunktionen >>>>>`. Füge sowohl den Aufruf von `p.pop();` als auch den von `drawCrosshairs();` ein:

```ts
function draw() {
  ...

  // <<<<< Zeichenfunktionen >>>>>
  p.pop();
  drawCrosshairs();

}
```

Jetzt hast du ein Fadenkreuz, das deinem Mauszeiger folgt.
{{< /imgblock >}}

## Hügel

{{< imgblock "img/hills.png" "Hügel" 5 >}} Als nächstes zeichnen wir die Hügel. Füge als erstes folgende _Methode_ ganz **am Ende** des Programms hinzu.

```ts
function drawHills() {
  p.push();
  p.fill(p.color(29, 80, 89));
  p.noStroke();
  p.ellipse(-240, 160, 300, 350);
  p.ellipse(-70, 220, 300, 300);
  p.ellipse(70, 200, 250, 450);
  p.ellipse(200, 150, 200, 250);
  p.pop();
}
```

Diese Methode rufen wir innerhalb der _draw_-Funktion auf, und zwar genau vor den Zeilen, die wir im vorigen Schritt geschrieben haben:

```ts
function draw() {
  ...

  // <<<<< Zeichenfunktionen >>>>>
  drawHills();
  
  p.pop();
  drawCrosshairs();
}
```
{{< /imgblock >}}

## Punkteanzeige

{{< imgblock "img/points.png" "Punkte" 3 >}} Jetzt zeigen wir den Punktestand an. Füge als erstes folgende _Variable_ am Beginn des Programms nach dem Kommentar `// <<<<< VARIABLEN >>>>>` hinzu:

```ts
...
// <<<<< VARIABLEN >>>>>
// Aktuelle Punkte
let points = 0;
...
```

Als nächstes füge folgende _Methode_ ganz **am Ende** des Programms hinzu.

```ts
function drawPoints() {
  p.push();
  p.textAlign(p.LEFT);
  p.noStroke();
  p.textFont(font);
  p.fill('red');
  p.textSize(40);
  p.textFont(font);
  p.text(`Punkte: ${points}`, -220, 160);
  p.pop();
}
```

Jetzt müssen wir in der _draw_-Methode die neue Methode noch aufrufen:

```ts
function draw() {
  ...

  // <<<<< Zeichenfunktionen >>>>>
  drawHills();
  drawPoints();

  p.pop();
  drawCrosshairs();
}
```
{{< /imgblock >}}

## Die Hühner

{{< imgblock "img/chicken.png" "Hühner" 3 >}} Jetzt legen wir so richtig los und lassen die Hühner fliegen. Als erstes brauchen wir eine ganze Menge _Variablen_. Füge sie unmittelbar nach der zuvor angelegten `points`-Variable ein:

```ts
// Aktuelle Position des Huhns
let chickenPosition: Position = { x: 0, y: 138 };
// Huhn-Bild, das aktuell vewendet wird (siehe `chickens`-Variable)
let currentChicken: number = 0;
// Aktuelle Geschwindigkeit vom Huh, steigert sich langsam
let chickenSpeed = 1;
// Aktuelle Bewegungsrichtung vom Huhn
let chickenMovement: number = 0;
// Zeigt an, ob ein Huhn getroffen wurde
let hit = false;
// Anzahl verpasster Hühner
let missed = 0;
// Zeigt an, ob das Spiel zu Ende ist
let gameOver = false;
```

{{< /imgblock >}}

Als nächstes brauchen wir zwei _Methoden_, die die Hühner bewegen bzw. ein neues Huhn starten falls das vorherige gelandet ist oder abgeschossen wurde. Wie immer kommen die Methoden **ganz ans Ende**.

```ts
function moveChicken() {
  // Huhn bewegen
  chickenPosition.y += chickenMovement;

  // Muss Huhn nach dem Flug nach oben umkehren?
  if (chickenMovement < 0 && chickenPosition.y < -60) {
    // Huhn ist am höchsten Punkt, muss umkehren
    chickenMovement *= -1;
  }

  // Ist Huhn wieder gelandet und wurde nicht getroffen?
  if (chickenPosition.y > 138 || hit) {
    newChicken();
  }
}

function newChicken(first: boolean = false) {
  if (!hit && !first) {
    // Huhn wurde nicht getroffen
    missed++;
    if (missed >= 5) {
      gameOver = true;
    }
  }

  // Huhnposition zufällig ermitteln
  chickenPosition.x = Math.floor(p.random(-240, 240));
  chickenPosition.y = 138;
  // Huhnbild zufällig auswählen
  currentChicken = Math.floor(p.random(chickens.length));
  // Anfangsgeschwindigkeit festlegen
  chickenMovement = chickenSpeed * -1;
  // Treffer-Hinweis zurücksetzen
  hit = false;
}
```

Jetzt müssen wir die beiden Methoden noch aufrufen. Die `newChicken`-Methode müssen wir in `setup` aufrufen, damit das erste Huhn gleich zu Beginn startet. Füge den Methodenaufruf **ganz am Ende** der `setup`-Methode hinzu:

```ts
function setup() {
  ...
  
  // Lade Schrift
  font = p.loadFont(
    'https://cddataexchange.blob.core.windows.net/images/monster-run/fonts/BebasNeue-Regular.ttf'
  );

  newChicken(true); // <<< DAS MUSST DU HINZUFÜGEN
}
```

In der `draw`-Methode müssen wir jetzt noch das Huhn auf den Bildschirm malen und es bewegen. So muss der Codebereich nach dem `// <<<<< Zeichenfunktionen >>>>>`-Kommentar aussehen. **Achtung:** Einige Zeilen sind schon da. Du musst nur wenige ergänzen Vergleiche den folgenden Code Zeile für Zeile mit deinem Code und passe ihn an:

```ts
function draw() {
  ...

  // <<<<< Zeichenfunktionen >>>>>
  // Zeichne das Huhn
  if (!gameOver) {
    p.image(
      chickens[currentChicken],
      chickenPosition.x,
      chickenPosition.y,
      CHICKEN_SIZE,
      CHICKEN_SIZE
    );
  }

  drawHills();
  drawPoints();

  p.pop();
  drawCrosshairs();

  moveChicken();
}
```

## Ballon

{{< imgblock "img/balloon.png" "Ballon" 3 >}} Als nächstes kommen die Ballons dran. Wir starten wieder mit den _Variablen_. Füge sie unmittelbar nach der zuvor angelegten Variablen ein:

```ts
// Ballonrichtigun (1 oder -1)
let balloonDirection = 1;
// Aktuelle Position des Ballons
let balloonPosition: Position = { x: 0, y: -145 };
// Zeigt an, ob aktuell ein Ballon fliegt
let balloonVisible = false;
```

{{< /imgblock >}}

Als nächstes brauchen wir zwei _Methoden_, die die Ballons bewegen bzw. einen neuen Ballon starten. Wie immer kommen die Methoden **ganz ans Ende**.

```ts
function drawAndMoveBalloon() {
  p.image(
    balloon,
    balloonPosition.x,
    balloonPosition.y,
    BALLOON_SIZE,
    BALLOON_SIZE
  );

  balloonPosition.x += balloonDirection;
  if (Math.abs(balloonPosition.x) > 210) {
    newBalloon();
  }
}

function newBalloon() {
  balloonVisible = false;
  // Warte eine zufällige Zeit zwischen 1 und 2 Sekunden
  const waitingTimeInMs = (Math.floor(p.random(5)) + 1) * 1000;
  setTimeout(() => {
    // Ballonposition zufällig festlegen
    balloonDirection = Math.floor(p.random(2)) === 0 ? -1 : 1;
    balloonPosition.x = 210 * balloonDirection * -1;
    // Ballon aktivieren
    balloonVisible = true;
  }, waitingTimeInMs);
}
```

Jetzt müssen wir die beiden Methoden noch aufrufen. Die `newBalloon`-Methode müssen wir in `setup` aufrufen, damit der erste Ballon gleich zu Beginn startet. Füge den Methodenaufruf **ganz am Ende** der `setup`-Methode hinzu:

```ts
function setup() {
  ...
  
  // Lade Schrift
  font = p.loadFont(
    'https://cddataexchange.blob.core.windows.net/images/monster-run/fonts/BebasNeue-Regular.ttf'
  );

  newChicken(true);
  newBalloon(); // <<< DAS MUSST DU HINZUFÜGEN
}
```

In der `draw`-Methode müssen wir jetzt noch den Ballon auf den Bildschirm malen und ihn bewegen. So muss der Codebereich nach dem `// <<<<< Zeichenfunktionen >>>>>`-Kommentar aussehen. **Achtung:** Einige Zeilen sind schon da. Du musst nur wenige ergänzen Vergleiche den folgenden Code Zeile für Zeile mit deinem Code und passe ihn an:

```ts
function draw() {
  ...

  drawHills();
  drawPoints();

  if (balloonVisible) {   // <<< DAS MUSST DU HINZUFÜGEN
    drawAndMoveBalloon(); // <<< DAS MUSST DU HINZUFÜGEN
  }                       // <<< DAS MUSST DU HINZUFÜGEN

  p.pop();
  drawCrosshairs();

  moveChicken();
}
```

## Abschießen

Alles fliegt, jetzt wollen wir abschießen können. Wir machen das so: Wenn der Benutzer irgendwo klickt und er trifft nicht den Himmel (=Blau), nicht die Hügel (=Grün) und nicht die Punkte-Schrift (=Rot), dann hat er ein Huhn oder den Ballon getroffen. Zum Vergleichen der Farben brauchen wir eine Hilfsfunktion. Ihr Inhalt ist etwas technisch und wir beschreiben ihn hier nicht im Detail. Sieh die paar Zeilen einfach als Tippübung.

```ts
function isEqualColor(c1: number[], c2: number[]) {
  if (c1.length === c2.length) {
    for (let i = 0; i < c1.length; i++) {
      if (c1[i] !== c2[i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}
```

Als nächstes müssen wir die `mouseClicked`-Methode **ersetzen** (**Achtung:** Sie ist schon im Code enthalten, du musst sie **ändern**).

```ts
function mouseClicked() {
  // Ist der Mausklick innerhalb des Spielfelds?
  if (p.mouseX > 0 && p.mouseY > 0 && p.mouseX <= 480 && p.mouseY <= 360) {
    // Wurde eine andere Farbe als Blau (Himmel), Grün (Hügel),
    // Schwarz (Fadenkreuz) oder Rot (Punkte-Schrift) angeklickt?
    if (
      !isEqualColor(BLUE, p.get(p.mouseX, p.mouseY)) &&
      !isEqualColor(GREEN, p.get(p.mouseX, p.mouseY)) &&
      !isEqualColor(BLACK, p.get(p.mouseX, p.mouseY)) &&
      !isEqualColor(RED, p.get(p.mouseX, p.mouseY))
    ) {
      // Ballonposition ausrechnen
      const balloonX1 = balloonPosition.x + 240 - BALLOON_SIZE / 2;
      const balloonY1 = balloonPosition.y + 180 - BALLOON_SIZE / 2;
      const balloonX2 = balloonX1 + BALLOON_SIZE;
      const balloonY2 = balloonY1 + BALLOON_SIZE;
      // Wurde auf den Ballon geklickt?
      if (
        p.mouseX >= balloonX1 &&
        p.mouseX <= balloonX2 &&
        p.mouseY >= balloonY1 &&
        p.mouseY <= balloonY2
      ) {
        // Ballon ist 5 Punkte wert
        points += 5;
        newBalloon();
      } else {
        // Huhn wurde getroffen
        hit = true;
        points += Math.ceil(chickenSpeed);
      }
    }
  }
}
```

Probiere es! Du kannst schon Hühner und Ballons abschießen. Die Punkte werden auch schon gezählt.

## Hühner schneller machen

Unsere Hühner sollen im Lauf der Zeit schneller werden. Das ist einfach. Du musst nur eine Zeile am Ende von `setup` hinzufügen:

```ts
function setup() {
  ...

  // Starte neues Huhn und neuen Ballon
  newChicken(true);
  newBalloon();

  // Hühnergeschwindigkeit muss sich alle 5 Sekunden erhöhen
  setInterval(() => (chickenSpeed += 0.5), 5000); // <<< DAS MUSST DU HINZUFÜGEN
}
```

## Game Over

{{< imgblock "img/gameover.png" "Game Over" 3 >}} Jetzt brauchen wir zum Abschluss noch eine Meldung, wenn das Spiel vorbei ist. Es soll vorbei sein, wenn wir fünf Hühner verpasst haben. Wir brauchen eine Methode, die _Game Over_ auf den Bildschirm schreibt. Füge sie wie immer ganz **am Ende** des Programms hinzu:

```ts
function drawGameOver() {
  p.push();
  p.fill('red');
  p.textFont(font);
  p.textAlign(p.CENTER);
  p.textSize(60);
  p.text('Game Over', 0, 0);
  p.pop();
}
```
{{< /imgblock >}}

In der `draw`-Methode müssen wir jetzt die Meldung _Game Over_ ausgeben falls das Spiel zu Ende ist. So muss der Codebereich nach dem `// <<<<< Zeichenfunktionen >>>>>`-Kommentar aussehen. **Achtung:** Einige Zeilen sind schon da. Du musst nur wenige ergänzen Vergleiche den folgenden Code Zeile für Zeile mit deinem Code und passe ihn an:

```ts
function draw() {
  ...

  drawHills();
  drawPoints();

  if (gameOver) {
    drawGameOver();
    return;
  }

  if (balloonVisible) {
    drawAndMoveBalloon();
  }
  ...
}
```

## Gratulation, geschafft!

**Perfekt gemacht!** Du hast dein eigenes _Moorhuhn Jagd_-Spiel programmiert!
