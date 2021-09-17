---
title: "Monster Run"
description: "Wir schauen uns an, was man zum Programmieren eines Jump 'n' Run Spiels in p5js braucht"
level: 2
categories:
- HTML
- p5.js
---

# Monster Run

## Einleitung

{{< imgblock "img/monster-walk.gif" "Hintergrund" 5 >}} Wisst ihr was ein Jump 'n' Run-Spiel ist? Man steuert als Spielerin oder Spieler eine kleine Figur und läuft mir ihr durch ein Labyrinth. Meistens muss sich dabei gegen verschiedene Gegner behaupten. In diesem Workshop zeigt euch Rainer Grundlagen, die man zum Programmieren eines Jump 'n' Run in p5js braucht. Er baut mich euch einen *Monsterspaziergang*.

## Grafiken

In dieser Übung verwenden wir Grafiken der Plattform [*craftpix.net*](https://craftpix.net/). Du findest dort viele Grafiken für Spiele aller Art. Einige der Grafik-Pakete gibt es auch [kostenlos](https://craftpix.net/freebies/). In diesem Spiel verwenden wir die Bilder aus folgenden, kostenlosen Paketen:

* [Halloween 2D Game Backgrounds](https://craftpix.net/freebies/free-halloween-2d-game-backgrounds/)
* [Minotaur Tiny Style 2D Sprites](https://craftpix.net/freebies/free-minotaur-tiny-style-2d-sprites/)
{{< /imgblock >}}

## Spielhintergrund

{{< imgblock "img/hintergrund.png" "Hintergrund" 5 >}} Öffne [https://stackblitz.com/edit/monster-run-starter](https://stackblitz.com/edit/monster-run-starter) im Browser. Der TypeScript-Code ist noch unvollständig. Wir werden ihn in dieser Übung vervollständigen.

Als erstes möchten wir den Spielhintergrund laden. Lege vier Variablen **unmittelbar vor** der Funktion `preload` an:

```ts
let background: Background;
let maxX: number;
let minX: number;
let currentBackground = 1;
```
{{< /imgblock >}}

Wir haben vier Hintergrundbilder für dich vorbereitet. Wir müssen in `preload` diese Bilder laden. Dazu fügen wir **in** die Funktion `preload` folgenden Code ein:

```ts
background = new Background(p);
background.addImage('B1', assetBase + '1_game_background/1_game_background.png');
background.addImage('B2', assetBase + '2_game_background/2_game_background.png');
background.addImage('B3', assetBase + '3_game_background/3_game_background.png');
background.addImage('B4', assetBase + '4_game_background/4_game_background.png');
background.activateImage(`B${currentBackground}`);
maxX = background.width - 250 * background.scale; // äußerst rechte Position berechnen
minX = -520 * background.scale; // äußerst linke Position berechnen
```

**In** der Funktion `setup` müssen wir die Zeichenfläche mit der richtigen Größe anlegen. Dafür fügen wir folgenden Code **in** der Funktion `setup` ein:

```ts
p.createCanvas(background.width, background.height);
```

Als letztes müssen wir den Hintergrund auf den Bildschirm malen. Dazu fügen wir folgenden Code **in** der Funktion `draw` ein:

```ts
p.background(background.currentImage);
```

Jetzt müsstest du schon den Spielhintergrund sehen. Wenn du den Inhalt der Variable `currentBackground` änderst, kannst du zwischen den Hintergründen umschalten. Du kannst zwischen den Hintergründen 1, 2, 3 und 4 wählen.

## Monster

{{< imgblock "img/monster.gif" "Monster" 5 >}} Jetzt möchten wir unser Monster hinzufügen. Das Monster soll sich aber bewegen, nicht nur als Bild zu sehen sein. Dafür verwenden wir Animationen. Eine Animation ist eine rasche Abfolge von Einzelbildern und funktioniert damit ganz ähnlich wie ein Film am Bildschirm. In der Animation siehst du, wie die Animation fürs Gehen unseres Monsters aussieht.

Füge als erstes folgende Variablen an. Mach das dort, wo du schon oben die Variablen für den Hintergrund angelegt hast (**unmittelbar vor** der Funktion `preload`):

```ts
let monster: Sprite;
const monsterId = 3;
let walkingSpeed = 15;
```

Als nächstes füge **an das Ende** der Funktion `preload` folgenden Code ein. Er lädt die erste Animation, die abgespielt werden soll, wenn unser Monster untätig herumsteht.
{{< /imgblock >}}

```ts
monster = new Sprite(p, 720, 490, background.scale);

let images: string[];
images = [];
for (let i = 0; i < 11; i++) images.push(buildImageName(monsterId, 'Idle', i));
monster.addAnimation('idle', images, 100);

monster.activateAnimation('idle');
monster.x = -55 * background.scale;
monster.y = background.height * 0.95 - 490 * background.scale;
walkingSpeed *= background.scale;
```

Um das Monster auf den Bildschirm zu zeichnen, füge **an das Ende** der Funktion `draw` folgenden Code ein:

```ts
monster.draw();
```

## Angriff

Um die Arbeit mit Animationen zu üben, fügen wir jetzt noch eine Animation für einen Angriff ein. Suche dir in der `preload`-Funktion den Code heraus, mit dem die *Idle*-Animation eingefügt wird. Nach dem gleichen Muster fügst du die *Attacking*-Funktion hinzu:

```ts
...
images = [];
for (let i = 0; i < 11; i++) images.push(buildImageName(monsterId, 'Idle', i));
monster.addAnimation('idle', images, 100); // <<< BIS HIERHER HAST DU DEN CODE SCHON

// AB HIER MUSST DU DEN CODE EINFÜGEN
images = [];
for (let i = 0; i < 11; i++) images.push(buildImageName(monsterId, 'Attacking', i));
monster.addAnimation('attacking', images, 40);
...
```

Die Attacke soll ablaufen, wenn man die Leertaste (Key Code 32) drückt. Damit das geht, fügen wir **vor** der `monster.draw();`-Zeile in `draw` folgenden Code ein:

```ts
if (p.keyIsDown(32)) {
  monster.activateAnimation('attacking');
}  else {
  monster.activateAnimation('idle');
}
```

Probiere es aus und drücke die Leertaste (du kannst sie auch gedrückt halten, um einen längeren Angriff zu starten). Klappt die Animation?

## Gehen

Jetzt bist du schon erfahren mit Animationen, also sind wir bereit für den letzten Teil unserer Übung. Wir wollen unser Monster herumgehen lassen.

Füge **in** die Funktion `preload` das Laden einer dritten Animation ein:

```ts
images = [];
for (let i = 0; i < 17; i++) images.push(buildImageName(monsterId, 'Walking', i));
monster.addAnimation('walking', images, 20);
```

Wir wollen unser Monster mit den Cursortasten steuern. Dafür **ändern** wir den Code, den wir für die Attacke gerade vorhin angelegt haben, wie folgt (in Funktion `draw`):

```ts
if (p.keyIsDown(p.RIGHT_ARROW)) {
  monster.activateAnimation('walking');
  monster.flip = false;
  monster.x += walkingSpeed;
} else if (p.keyIsDown(p.LEFT_ARROW)) {
  monster.activateAnimation('walking');
  monster.flip = true;
  monster.x -= walkingSpeed;
} else if (p.keyIsDown(32)) {
  monster.activateAnimation('attacking');
} else {
  monster.activateAnimation('idle');
}
```

Probiere es aus und lass dein Monster herumspazieren.

## Hintergrund wechseln

Zum Abschluss möchten wir unser Monster von einem "Raum" in einen anderen gehen lassen. Dazu schalten wir zwischen den Hintergründen um. Füge dazu **vor** der `monster.draw();`-Zeile in `draw` folgenden Code ein:

```ts
if (monster.x > maxX) {
  if (currentBackground < 4) {
    background.activateImage(`B${++currentBackground}`);
    monster.x = minX;
  } else {
    monster.x = maxX;
  }
} else if (monster.x < minX) {
  if (currentBackground > 1) {
    background.activateImage(`B${--currentBackground}`);
    monster.x = maxX;
  } else {
    monster.x = minX;
  }
}
```

Juhuu, geschafft. Jetzt kannst du mit deinem Monster zwischen den Hintergründen herumgehen, indem du ganz nach rechts oder ganz nach links gehst.

## Fertige Übung

Du kannst die fertige Übung unter [https://stackblitz.com/edit/monster-run](https://stackblitz.com/edit/monster-run) ansehen.
