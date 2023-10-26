---
title: "Halloween - Catch the Treat"
description: "Wir programmieren ein Halloween-Spiel, bei dem du Süßigkeiten erwischen musst."
level: 2
aliases:
- /trainingsanleitungen/web/feuerwerk-basics.html
categories:
- HTML
- TypeScript
- p5.js
---

# Halloween - Catch the Treats

## ⚠️ DIESE ÜBUNGSANLEITUNG IST NOCH IN ARBEIT, NICHT FERTIG!

## Einleitung

{{< imgblock "img/hero.png" "Hintergrund" 6 >}} Willkommen bei unserem Halloween-Spiel. Wir programmieren gemeinsam ein Spiel, bei dem freundliche Monster gruselige "Süßigkeiten" herumwerfen und du sie erwischen musst. Wenn du sie nicht erwischst, verlierst du ein Leben. Wenn du alle Leben verloren hast, ist das Spiel vorbei. Wer schafft am meisten Punkte?

**Interessante Info**: Wir programmieren in dieser Übung mit der Programmiersprache _TypeScript_.
{{< /imgblock >}}

## Vorbereitung

{{< imgblock "img/fork.png" "Fork" 4 >}} Damit du anfangen kannst zu programmieren, öffne den Starter-Code unter [https://stackblitz.com/edit/catch-the-sweets-starter](https://stackblitz.com/edit/catch-the-sweets-starter). Ein solches Spiel von Grund auf neu zu programmieren ist etwas zu schwierig für AnfängerInnen. Daher haben wir ein paar Dinge schon vorbereitet. Deshalb brauchst du den Starter-Code.

Damit du dir deine eigene Kopie des Starter-Codes bekommst, drücke auf _Fork_.
{{< /imgblock >}}

## Hintergrundgrafik

Wie auch bei Scratch-Spielen, fangen wir auch bei unserem Spiel mit der Hintergrundgrafik an. Bevor wir sie verwenden können, müssen wir sie laden. Das machen wir in der `preload()`-Funktion. Du musst eine Zeile zu ihr hinzufügen. Die Zeile sieht so aus:

```ts
function preload() {
  Background.loadImage(3); // <<< Diese Zeile musst du einfügen
}
```

Hier ein paar wichtige Tipps, die du dir für die ganze Übung merken solltest:

1. Den Hinweis `// <<< Diese Zeile musst du einfügen` musst du **nicht** in deinem Code schreiben. Er ist nur da, um dir zu zeigen, welche Zeile du einfügen musst. Schreibe nur den Code, der links von dem Hinweis steht.
2. Achte immer genau darauf, dass du den Code richtig abschreibst. **Jedes** Zeichen ist wichtig, auch Groß- und Kleinschreibung sind zu beachten!
3. Passe besonders darauf auf, dass der Code immer richtig innerhalb der geschweiften Klammern (`{` und `}`) steht.

Nachdem wir den Hintergrund geladen haben, müssen wir ihn anzeigen. Das passiert in zwei Schritten. Erstens müssen wir in der `setup()`-Funktion eine "Leinwand" erstellen, auf der wir den Hintergrund malen können. Auf Englisch heißt "Leinwand" _Canvas_. Die Zeile sieht so aus:

```ts
function setup() {
  Background.createCanvas(); // <<< Diese Zeile musst du einfügen
}
```

Jetzt können wir den Hintergrund malen. "Malen" heißt auf Englisch _Draw_. Daher malen wir den Hintergrund in der `draw()`-Funktion. Die Zeile sieht so aus:

```ts
function draw() {
  Background.draw(); // <<< Diese Zeile musst du einfügen
}
```

{{< imgblock "img/background.png" "Hintergrund" 6 >}} Gratulation! Der erste Schritt zu unserem Spiel ist geschafft. Du müsstest jetzt den Hintergrund sehen.
{{< /imgblock >}}

{{< imgblock "img/bg-image.png" "Hintergrund" 5 >}} Jetzt kannst du kreativ werden. Du hast vielleicht die Zahl gesehen, die wir in der `preload`-Funktion an `loadImage` übergeben haben. Dadurch kannst du steuern, welches Bild als Hintergrund verwendet werden soll. Wir haben acht Bilder für die vorbereitet. Du kannst zwischen ihnen umschalten, indem du die Zahl auf einen Wert zwischen 1 und 8 änderst. Probiere es aus! Suche dir ein Hintergrundbild aus, das dir besonders gut gefällt.
{{< /imgblock >}}

## Monster

Jetzt fügen wir unser freundliches Monster zum Spiel hinzu. Zum Spielbeginn haben wir nur ein Monster. Später werden wir aber Levels hinzufügen und in jedem Level taucht ein zusätzliches Monster auf.

Da wir mehrere Monster haben werden, müssen wir alle unsere Monster in einer Variable speichern. Um genau zu sein verwenden wir eine Liste. Vielleicht kennst du Listen schon von Scratch-Projekten, die du programmiert hast. Auf Englisch wird beim Programmieren eine Liste als _Array_ bezeichnet. Lass uns als erstes die Variable anlegen. Die Zeile sieht so aus (füge sie ziemlich am Anfang deines Programms gleich nach den vielen `import`-Zeilen ein):

```ts
...
import { HealthHearts } from './health'; // <<< Diese Zeile gibt es schon

const monsters: Monster[] = []; // <<< Diese Zeile musst du einfügen

export let p: p5; // <<< Diese Zeile gibt es schon
...
```

Als nächstes müssen wir unsere Monster laden. Wie beim Hintergrund machen wir das in der `preload()`-Funktion. Die Zeilen sehen so aus:

```ts
function preload() {
  Background.loadImage(8); // <<< Diese Zeile gibt es schon

  // vvv Diese Zeilen musst du einfügen
  for (let i = 1; i <= 3; i++) {
    const monster = new Monster(i);
    monster.loadMonster();
    monster.position.x = 0;
    monsters.push(monster);
  }
  // ^^^ Bis hierher
}
```

Mit diesen Zeilen werden drei Monster geladen (daher das `<= 3` im Code). Nach dem Laden wird das Monster an den linken Bildschirmrand gesetzt (Position 0). Zum Schluss wird das neue Monster zur Liste hinzugefügt (`push`).

Beim Start des Spieles wollen wir die Monster in die Mitte des Bildschirms spazieren lassen. Das machen wir in der `setup()`-Funktion. Die Zeilen sehen so aus:

```ts
function setup() {
  Background.createCanvas(); // <<< Diese Zeile gibt es schon
  
  // vvv Diese Zeilen musst du einfügen
  for (const monster of monsters) {
    monster.goto(1920 / 2);
  }
  // ^^^ Bis hierher
}
```

Zum Schluss müssen wir das erste Monster anzeigen. Das machen wir in der `draw()`-Funktion. Die Zeilen sehen so aus:

```ts
function draw() {
  Background.draw(); // <<< Diese Zeile gibt es schon
  
  // vvv Diese Zeilen musst du einfügen
  monsters[0].move();
  monsters[0].draw();
  // ^^^ Bis hierher
}
```

{{< imgblock "img/monster-here.png" "Hintergrund" 5 >}} Wenn du alles richtig gemacht hast, spaziert ein Monster über den Bildschirm.

Möchtest du sehen, wie die anderen Monster aussehen? In der `draw`-Funktion siehst du zwei Mal `monster[0]`. Ändere die `0` auf eine `1` oder eine `2` (in beiden Zeilen). Dann siehst du alle drei Monster.
{{< /imgblock >}}

## Hintergrundmusik

Zeit für unsere ersten Sound-Effekte. Wir starten mit Hintergrundmusik. Wie schon bei den Grafiken zuvor müssen wir auch die Musik als erstes laden. Das machen wir in der `preload()`-Funktion. Die Zeile sieht so aus (füge sie **ganz am Ende** der `preload()`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

```ts
function preload() {
  ...
  
  Sounds.loadSounds(1, 0.1); // <<< Diese Zeile musst du einfügen
}
```

Jetzt müssen wir die Musik nur noch starten. Das machen wir in der `setup()`-Funktion. Die Zeile sieht so aus (füge sie **ganz am Ende** der `setup()`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

```ts
function setup() {
  ...
  
  Sounds.playBackgroundMusic();  // <<< Diese Zeile musst du einfügen
}
```

Du müsstest jetzt Hintergrundmusik hören!

{{< imgblock "img/bg-music.png" "Hintergrund" 5 >}} Möchtest du ein anderes Lied? Wir haben drei für dich zur Auswahl vorbereitet. Du steuerst, welches Lied im Hintergrund läuft, mit dem ersten Parameter der `loadSound`-Funktion in `preload`. Die drei Lieder haben die Nummern 1, 2 und 3. Probiere sie aus!

Der zweite Parameter steuert die Lautstärke der Hintergrundmusik. `0.1` ist ein guter Wert. Wenn dir die Musik zu leise ist, ändere ihn z.B. auf `0.2`.
{{< /imgblock >}}

Wenn du lange an dem Spiel programmierst, kannst du die Musik vielleicht irgendwann nicht mehr hören 🤣. In diesem Fall kannst du aus der Zeile in `setup` einen Kommentar machen, indem du zwei `//`-Zeichen an den Anfang der Zeile setzt:

```ts
function setup() {
  ...
  
  // Sounds.playBackgroundMusic();
}
```

Jetzt ignoriert der Computer diese eine Zeile. Wenn du die Musik wieder hören möchtest, entferne einfach die zwei `//`-Zeichen.

## Monster läuft herum

{{< imgblock "img/monster-walking.gif" "Monster spaziert herum" 5 >}} Unser nächster Schritt ist, dass wir das Monster herumlaufen lassen. Es soll sich zufällig nach links oder rechts bewegen. Wenn es angekommen ist, soll es eine zufällig lange Zeit warten, bevor es sich wieder bewegt.

Programmieren können wir das in der `preload`-Funktion. Die Zeilen, die du einfügen musst, sind im folgenden Codeabschnitt hervorgehoben. **Achtung**: Die anderen Zeilen gibt es schon. Achte darauf, dass du die neuen Zeilen genau an der richtigen Stelle einfügst!
{{< /imgblock >}}

```ts
function preload() {
  Background.loadImage(8);

  for (let i = 1; i <= 3; i++) {
    const monster = new Monster(i);
    monster.loadMonster();
    monster.position.x = 0;

    // vvv Diese Zeilen musst du einfügen
    monster.targetReached = () => {
      setTimeout(() => {
        monster.goto(p.random(1920));
      }, p.random(500, 2000));
    };
    // ^^^ Bis hierher

    monsters.push(monster);
  }
  
  Sounds.loadSounds(1, 0.1);
}
```
