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

Damit du anfangen kannst zu programmieren, öffne den Starter-Code unter [https://stackblitz.com/edit/catch-the-sweets-starter](https://stackblitz.com/edit/catch-the-sweets-starter). Ein solches Spiel von Grund auf neu zu programmieren ist etwas zu schwierig für AnfängerInnen. Daher haben wir ein paar Dinge schon vorbereitet. Deshalb brauchst du den Starter-Code.

{{< imgblock "img/fork.png" "Fork" 4 >}} Damit du dir deine eigene Kopie des Starter-Codes bekommst, drücke auf _Fork_.
{{< /imgblock >}}

{{< imgblock "img/stackblitz.png" "Stackblitz" 8 >}} Nach dem Öffnen des Starter-Codes sollte dein Bildschirm so aussehen. Links ist die _Dateiliste_. Wir brauchen sie heute nicht, daher kannst du sie mit einem Klick ausblenden.

In der Mitte siehst du den _Programmierbereich_. Hier schreiben wir unseren Code.

Rechts siehst du die _Programmausgabe_. Hier wird unser Spiel zu sehen sein. Wenn du die Ausgabe gerade nicht brauchst, kannst du sie mit dem Knopf _Close_ rechts oben ausblenden. Mit _Open_ erscheint sie wieder.
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

{{< imgblock "img/background.png" "Hintergrund" 8 >}} Gratulation! Der erste Schritt zu unserem Spiel ist geschafft. Du müsstest jetzt den Hintergrund sehen.
{{< /imgblock >}}

{{< imgblock "img/bg-image.png" "Hintergrund" 6 >}} Jetzt kannst du kreativ werden. Du hast vielleicht die Zahl gesehen, die wir in der `preload`-Funktion an `loadImage` übergeben haben. Dadurch kannst du steuern, welches Bild als Hintergrund verwendet werden soll. Wir haben acht Bilder für die vorbereitet. Du kannst zwischen ihnen umschalten, indem du die Zahl auf einen Wert zwischen 1 und 8 änderst. Probiere es aus! Suche dir ein Hintergrundbild aus, das dir besonders gut gefällt.
{{< /imgblock >}}

## Coding-Tipps

Bevor wir weitermachen, ein paar super praktische Coding-Tipps.

### Red Squigglies

{{< imgblock "img/red-squigglies.png" "Red Squigglies" 5 >}} Gerade als AnfängerIn passiert es manchmal, dass Codeteils rot unterwellt dargestellt werden. In English sagt man dazu _Red Squigglies_. Lustiger Name, oder?

Die Red Squigglies zeigen dir an, dass du einen Fehler im Code hast. Entdeckst du den Fehler im Bild? Der Code enthält das Kommando `loadimage` statt `loadImage` (großes "I"). Diese Kleinigkeit führt schon dazu, dass der Code nicht funktioniert. Du musst also auf die Red Squgglies achten und deinen Tippfehler suchen, wenn sie auftauchen. Solange du Red Squigglies hast, wird dein Spiel mit großer Wahrscheinlichkeit nicht funktionieren.
{{< /imgblock >}}

### IntelliSense

{{< imgblock "img/intellisense.png" "Hintergrund" 5 >}} Der Editor versucht dir zu helfen, damit du weniger tippen musst. Wenn du die ersten Buchstaben eines Befehls eingetippt hast (im Bild zum Beispiel `lo`), dann zeigt dir der Editor gleich passende Kommando an (im Beispiel `loadImage`). Wenn das passiert, musst du nicht mehr weiter tippen. Klicke die Auswahl einfach an, drücke auf die _Enter_-Taste oder die _Tabulator_-Taste und schon ist der Befehl vervollständigt.
{{< /imgblock >}}

## Monster

{{< imgblock "img/scratch-arrays.png" "Felder in Scratch" 5 >}} Jetzt fügen wir unser freundliches Monster zum Spiel hinzu. Zum Spielbeginn haben wir nur ein Monster. Später werden wir aber Levels hinzufügen und in jedem Level taucht ein zusätzliches Monster auf.

Da wir mehrere Monster haben werden, müssen wir alle unsere Monster in einer Variable speichern. Um genau zu sein verwenden wir eine **Liste**. Vielleicht kennst du Listen schon von Scratch-Projekten, die du programmiert hast (siehe Abbildung).
{{< /imgblock >}}

Auf Englisch wird beim Programmieren eine Liste als _Array_ bezeichnet. Lass uns als erstes die Variable anlegen. Die Zeile sieht so aus (füge sie unter dem Hinweis `// vvvv Hier fügen wir die Variablen ein` ein, der schon im Starter-Code enthalten ist):

```ts
...
// vvvv Hier fügen wir die Variablen ein
const monsters: Monster[] = []; // <<< Diese Zeile musst du einfügen

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
    monsters.push(monster);
  }
  // ^^^ Bis hierher
}
```

{{< imgblock "img/scratch-loop.png" "Felder in Scratch" 4 >}} Mit diesen Zeilen werden drei Monster in einer **Schleife** geladen (daher das `<= 3` im Code). Schleifen kennst du wahrscheinlich schon aus Scratch (siehe Bild). In TypeScript macht man Schleifen unter anderem mit dem `for`-Kommando, das du gerade getippt hast.
{{< /imgblock >}}

Nach dem Laden wird das Monster an den linken Bildschirmrand gesetzt (Position 0). Zum Schluss wird das neue Monster zur Liste hinzugefügt (`push`).

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

Möchtest du sehen, wie die anderen Monster aussehen? In der `draw`-Funktion siehst du zwei Mal `monster[0]`. Ändere die `0` auf eine `1` oder eine `2` (in **beiden** Zeilen). Dann siehst du alle drei Monster.
{{< /imgblock >}}

## Hintergrundmusik

Zeit für unsere ersten Sound-Effekte. Wir starten mit Hintergrundmusik. Wie schon bei den Grafiken zuvor müssen wir auch die Musik als erstes laden. Das machen wir in der `preload()`-Funktion. Die Zeile sieht so aus (füge sie **ganz am Ende** der `preload()`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

```ts
function preload() {
  ...
  
  Sounds.loadSounds(1, 40); // <<< Diese Zeile musst du einfügen
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

Möchtest du ein anderes Lied? Wir haben drei für dich zur Auswahl vorbereitet. Du steuerst, welches Lied im Hintergrund läuft, mit dem ersten Parameter der `loadSound`-Funktion in `preload`. Die drei Lieder haben die Nummern 1, 2 und 3. Probiere sie aus!

Der zweite Parameter steuert die Lautstärke der Hintergrundmusik. `40` ist ein guter Wert. Wenn dir die Musik zu leise ist, ändere ihn z.B. auf `60`. Wenn du lange an dem Spiel programmierst, kannst du die Musik vielleicht irgendwann nicht mehr hören 🤣. In diesem Fall setze die Lautstärke einfach auf Null ( `0`).

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

    // vvv Diese Zeilen musst du einfügen
    monster.targetReached = () => {
      monster.walkToRandomPosition();
    };
    // ^^^ Bis hierher

    monsters.push(monster);
  }
  
  Sounds.loadSounds(1, 0.1);
}
```

Und? Spaziert dein Monster jetzt schon fröhlich durch die Halloween-Welt?

## Süßigkeiten werfen

Immer wenn unser Monster stehen bleibt, soll es Süßigkeiten in die Luft werfen, die wir treffen müssen. Wir haben eine ganze 