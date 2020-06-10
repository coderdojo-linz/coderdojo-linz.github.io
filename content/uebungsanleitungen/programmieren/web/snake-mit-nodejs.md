---
title: "Snake mit Node.js"
description: "In dieser Übung programmierst du das Spiel Snake mit Node.js"
level: 2
---

# Snake mit Node.js

![Snake](snake-mit-nodejs/snake.png){: .max-full }

## Ziel der Übung

In dieser Übung lernst du, wie du mit Node.js einfache Spiele programmieren kannst.

## Systemvoraussetzungen

Du brauchst für diese Übung die gleichen Tools (Visual Studio Code, Node.js, npm), die schon in der Übung [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html) erwähnt sind. Falls du die Übung schon gemacht hast, hast du schon alle notwendigen Tools. Falls nicht, schau dort bitte nach.

Du kannst das Beispiel unter Windows, Linux oder MacOS bauen. Alle verwendeten Tools sind plattformunabhängig.

## Grundgerüst der Applikation erstellen

Als erstes brauchen wir einen Ordern, in dem wir das Spiel erstellen können. Lege im Dateiexplorer einen Ordner an und öffne dann diesen Pfad in der Eingabeaufforderung. Dort rufst du den Befehl `npm init` auf. Damit wird in deinem Ordner eine Datei `package.json` erzeugt, in der wir zusätzlich benötigte Pakete speichern können.

![npm init](snake-mit-nodejs/npm-init.png){: .max-full }

Wir brauchen für unser Spiel die beiden Pakete `ansi` und `keypress`. Diese können wir durch die folgenden beiden Befehle in der Eingabeaufforderung laden:

```
npm install ansi
npm install keypress
``` 

Nachdem du die beiden Pakete installiert hast, kannst du in deinem Ordner eine neue Datei für dein Spiel anlegen (z.B. game.js). Zum Starten geben wir den Text "MY GAME" aus und malen ein paar farbige Punkte:

```js
/*jslint node: true, for: true */
'use strict';
var ansi = require('ansi');

var cursor = ansi(process.stdout);

try {
    // cursor.bg.... setzt die Hintergrundfarbe, so können wir mit dem Leerzeichen farbige Flächen malen
    cursor.bg.red();
    cursor.goto(5, 5).write(' ');
    cursor.goto(6, 5).write(' ');
    cursor.goto(7, 5).write(' ');
    // mit reset setzt du die Hintergrundfarbe wieder zurück
    cursor.bg.reset();

    // cursor..... setzt die Textfarbe
    cursor.yellow();
    cursor.goto(9, 5).write('MY GAME');
    cursor.reset();

    cursor.bg.red();
    cursor.goto(17, 5).write(' ');
    cursor.goto(18, 5).write(' ');
    cursor.goto(19, 5).write(' ');
    cursor.bg.reset();
} catch (ex) {
    // hier werden Fehler erkannt und ausgegeben
    console.log(ex.toString());
} finally {
    // zum Schluss müssen wir das Spiel beenden
    quitGame();
}

function quitGame() {
    cursor.reset();
    cursor.bg.reset();
    cursor.goto(1, 10);
    process.exit();
}
```

Du kannst das Programm ausführen, indem du in der Eingabeaufforderung folgendes Kommando eingibst:

```
node game.js
```

Wenn du das Spiel nun laufen lässt, werden zuerst drei Leerzeichen mit roten Hintergrund gezeichnet, dann wird der Text "MY GAME" in gelb ausgegeben, und dann kommen wieder drei Leerzeichen mit rotem Hintergrund.

![MY GAME](snake-mit-nodejs/my-game.png){: .max-full }

## Spielfeld zeichnen

Als nächstes wollen wir ein Spielfeld zeichnen:

![Spielfeld](snake-mit-nodejs/game-area.png){: .max-full }

Dazu definieren wir global die Größe des Spielfelds mit `var width = 40;`und `var height = 20;`. Den Code im `try` Block ändern wir, um die vier Linien zu zeichnen. Damit wir nicht jeden Punkt der Linie einzeln zeichnen müssen, bauen wir dafür die Funktionen `drawHorizontalLine` und `drawVerticalLine`.

In den neuen Funktionen verwenden wir sogeannten Schleifen (`for`) um einen Befehl mehrmals zu wiederholen. Zu Beginn der for-Schleife wird der Wert i auf 0 gesetzt. Bei jedem Schleifendurchlauf wird geprüft, ob i < length erfüllt wird. Wenn nicht wird die Schleife abgebrochen, sonst wird der Code ausgeführt. Zum Schluss wird noch `i++` ausgeführt - also i um 1 erhöht.

```js
/*jslint node: true, for: true */
'use strict';
var ansi = require('ansi');

var cursor = ansi(process.stdout);
var width = 40;
var height = 20;

try {
    // draw game area
    cursor.bg.grey();
    drawHorizontalLine(1, 1, width);
    drawHorizontalLine(1, height, width);
    drawVerticalLine(1, 1, height);
    drawVerticalLine(width, 1, height);
    cursor.bg.reset();
} catch (ex) {
    console.log(ex.toString());
} finally {
    quitGame();
}

...

function drawHorizontalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col + i, row).write(' ');
    }
}

function drawVerticalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col, row + i).write(' ');
    }
}
```

## Schlange zeichnen und bewegen

Die Schlange stellen wir als grünen Punkt dar. Dazu erweitern wir die globalen Variablen zu Beginn des Codes um `posX` und `posY` für die aktuelle Position der Schlange und um `dirX` und `dirY` für die Richtung der Schlange.

Variable | Wert | Beschreibung
--- | --- | ---
`posX` | -1 | nach links bewegen
`posX` | 0 | Bewegung nach oben oder unten durch `posY`
`posX` | 1 | nach rechts bewegen
`posY` | -1 | nach oben bewegen
`posY` | 0 | Bewegung nach links oder rechts durch `posX`
`posY` | 1 | nach unten bewegen

Zu Beginn des `try` Blocks ist noch Code enthalten, der den Cursor im Spiel ausblendet. Dieser muss in `quitGame` wieder eingeblendet werden.

Nach dem Malen des Spielfelds wird die initiale Position der Schlange gesetzt und dann wird die Game Loop gestartet. Das heißt, die Funktion `gameLoop` wird immer wieder aufgerufen, bis die Schlange den Rand berührt.

Achtung: hier brauchen wir das Spiel nicht im Block `finally` zu beenden, da das Spiel mit der Game Loop solange weiter laufen soll, bis die Schlange den Rand berührt.

```js
/*jslint node: true, for: true */
'use strict';
var ansi = require('ansi');
var keypress = require('keypress');

var cursor = ansi(process.stdout);
var width = 40;
var height = 20;
var posX = 0;
var posY = 0;
var dirX = 1;
var dirY = 0;

try {
    // clear output
    process.stdout.write('\x1Bc');
    // hide cursor
    process.stderr.write('\x1B[?25l');

    // draw game area
    cursor.bg.grey();
    drawHorizontalLine(1, 1, width);
    drawHorizontalLine(1, height, width);
    drawVerticalLine(1, 1, height);
    drawVerticalLine(width, 1, height);
    cursor.bg.reset();

    // set initial position of snake
    posX = Math.floor(width / 2);
    posY = Math.floor(height / 2);

    // start game loop
    gameLoop();
} catch (ex) {
    console.log(ex.toString());
    quitGame();
}

function gameLoop() {
    // remove snake at old position
    removeSnake(posX, posY);

    // set new position
    posX = posX + dirX;
    posY = posY + dirY;

    // check new position
    if (posX == 1 || posX == width || posY == 1 || posY == height) {
        cursor.red();
        cursor.bg.white();
        setText(width / 2 - 6, height / 2, "  GAME OVER  ");
        quitGame();
    }

    // draw snake at new position
    drawSnake();

    // call gameLoop
    setTimeout(gameLoop, 500);
}

function quitGame() {
    cursor.reset();
    cursor.bg.reset();
    process.stderr.write('\x1B[?25h');
    cursor.goto(1, height + 4);
    process.exit();
}

function removeSnake() {
    cursor.bg.black();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawSnake() {
    cursor.bg.green();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawPoint(col, row, char) {
    cursor.goto(col, row).write(' ');
}

function drawHorizontalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col + i, row).write(' ');
    }
}

function drawVerticalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col, row + i).write(' ');
    }
}

function setText(col, row, text) {
    cursor.goto(col, row).write(text);
}
```

## Auf Eingabe des Benutzers reagieren

Damit wir die Schlange mit den Cursortasten steuern können müssen wir auf das Event `keypress` reagieren. Dazu fügen wir vor dem initalen Setzen der Position der Schlange eine neue Zeile ein.

```js
        // handle key press events
    process.stdin.on('keypress', handleInput);

    // set initial position of snake
    posX = Math.floor(width / 2);
    posY = Math.floor(height / 2);
```

Dann müssen wir auch die Funktion `handleInput` definieren:

```js
function handleInput(chunk, key) {
    if (key.name == 'q') {
        quitGame();
    } else if (key.name == 'right') {
        dirX = 1;
        dirY = 0;
    } else if (key.name == 'left') {
        dirX = -1;
        dirY = 0;
    } else if (key.name == 'up') {
        dirX = 0;
        dirY = -1;
    } else if (key.name == 'down') {
        dirX = 0;
        dirY = 1;
    }
}
```

Zusätzlich zu den Cursortasten behandeln wir auch die Taste `q`. Sie führt dazu, dass das Spiel abgebrochen wird.

## Apfel fressen

Nun brauchen wir noch den Apfel, der von der Schlange gefressen werden soll. Dazu brauchen wir noch einige Erweiterungen.

Bei den globalen Variablen brauchen wir die aktuelle Position des Apfels.

```js
var applePosX = 0;
var applePosY = 0;
```

Vor dem Start der Game Loop muss der erste Apfel gezeichnet werden:

```js
    // draw first apple
    drawApple();

    // start game loop
    gameLoop();
```

Die Funktion `drawApple` sieht so aus:

```js
function drawApple() {
    applePosX = Math.ceil(Math.random() * (width - 2)) + 1;
    applePosY = Math.ceil(Math.random() * (height - 2)) + 1;

    cursor.bg.red();
    drawPoint(applePosX, applePosY);
    cursor.bg.reset();
}
```

Bevor wir in der Game Loop die Schlange neu zeichnen, müssen wir überprüfen, ob der Apfel berührt wurde. Wenn ja, muss ein neuer Apfel gezeichnet werden.

```js
    // check if apple is touched
    if (posX == applePosX && posY == applePosY) {
        // draw new apple
        drawApple();
    }

    // draw snake at new position
    drawSnake();
```

## Punkte zählen und Geschwindigkeit erhöhen

Damit wir die Anzahl der gefressenen Äpfel ausgeben können und die Geschwindigkeit mit jedem Apfel erhöhen können, fügen wir zwei weitere globale Variablen hinzu:

```js
var points = 0;
var speed = 3; // moves per second
```

Diese verwenden wir als erstes in der Game Loop an der Stelle, an der wir prüfen, ob der Apfel berührt wird. Wenn ja, erhöhen wir die `points` und die `speed`:

```js
    // check if apple is touched
    if (posX == applePosX && posY == applePosY) {
        // increase points
        points++;

        // increase speed
        if (speed < 20) {
            speed++;
        }

        // draw new apple
        drawApple();
    }
```

Am Ende der Game Loop wird diese erneut aufgerufen. Hier ändern wir die Wartezeit, indem wir 1000 (Millisekunden) / durch die `speed` dividieren. Bei `speed` = 4 warten wir z.B. 250 ms bis zum nächsten Aufruf der Game Loop. 

```js
    // call gameLoop
    setTimeout(gameLoop, 1000 / speed);
```

Außerdem fügen wir in der Funktion `drawApple` am Ende noch folgende Zeilen zum Ausgeben von `points` und `speed` ein:

```js
    setText(1, height + 2, "Points: " + points.toString());
    setText(1, height + 3, "Speed: " + speed.toString());
```

## Gesamter Code

```js
/*jslint node: true, for: true */
'use strict';
var ansi = require('ansi');
var keypress = require('keypress');

keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

var cursor = ansi(process.stdout);
var width = 40;
var height = 20;
var posX = 0;
var posY = 0;
var applePosX = 0;
var applePosY = 0;
var dirX = 1;
var dirY = 0;
var points = 0;
var speed = 3;

try {
    // clear output
    process.stdout.write('\x1Bc');
    // hide cursor
    process.stderr.write('\x1B[?25l');

    // draw game area
    cursor.bg.grey();
    drawHorizontalLine(1, 1, width);
    drawHorizontalLine(1, height, width);
    drawVerticalLine(1, 1, height);
    drawVerticalLine(width, 1, height);
    cursor.bg.reset();

    // handle key press events
    process.stdin.on('keypress', handleInput);

    // set initial position of snake
    posX = Math.floor(width / 2);
    posY = Math.floor(height / 2);

    // draw first apple
    drawApple();

    // start game loop
    gameLoop();
} catch (ex) {
    console.log(ex.toString());
    quitGame();
}

function gameLoop() {
    // remove snake at old position
    removeSnake(posX, posY);

    // set new position
    posX = posX + dirX;
    posY = posY + dirY;

    // check new position
    if (posX == 1 || posX == width || posY == 1 || posY == height) {
        cursor.red();
        cursor.bg.white();
        setText(width / 2 - 6, height / 2, "  GAME OVER  ");
        quitGame();
    }

    // check if apple is touched
    if (posX == applePosX && posY == applePosY) {
        // increase points
        points++;

        // increase speed
        if (speed < 20) {
            speed++;
        }

        // draw new apple
        drawApple();
    }

    // draw snake at new position
    drawSnake();

    // call gameLoop
    setTimeout(gameLoop, 1000 / speed);
}

function quitGame() {
    cursor.reset();
    cursor.bg.reset();
    process.stderr.write('\x1B[?25h');
    cursor.goto(1, height + 4);
    process.exit();
}

function handleInput(chunk, key) {
    if (key.name == 'q') {
        quitGame();
    } else if (key.name == 'right') {
        dirX = 1;
        dirY = 0;
    } else if (key.name == 'left') {
        dirX = -1;
        dirY = 0;
    } else if (key.name == 'up') {
        dirX = 0;
        dirY = -1;
    } else if (key.name == 'down') {
        dirX = 0;
        dirY = 1;
    }
}

function drawApple() {
    applePosX = Math.ceil(Math.random() * (width - 2)) + 1;
    applePosY = Math.ceil(Math.random() * (height - 2)) + 1;

    cursor.bg.red();
    drawPoint(applePosX, applePosY);
    cursor.bg.reset();

    setText(1, height + 2, "Points: " + points.toString());
    setText(1, height + 3, "Speed: " + speed.toString());
}

function removeSnake() {
    cursor.bg.black();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawSnake() {
    cursor.bg.green();
    drawPoint(posX, posY);
    cursor.bg.reset();
}

function drawPoint(col, row, char) {
    cursor.goto(col, row).write(' ');
}

function drawHorizontalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col + i, row).write(' ');
    }
}

function drawVerticalLine(col, row, length) {
    for (var i = 0; i < length; i++) {
        cursor.goto(col, row + i).write(' ');
    }
}

function setText(col, row, text) {
    cursor.goto(col, row).write(text);
}
```