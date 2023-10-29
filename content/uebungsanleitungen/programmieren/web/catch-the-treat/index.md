---
title: "Halloween - Catch the Treat"
description: "Wir programmieren ein Halloween-Spiel, bei dem du Süßigkeiten erwischen musst."
level: 1
aliases:
- /trainingsanleitungen/web/feuerwerk-basics.html
categories:
- HTML
- TypeScript
- p5.js
---

# Halloween - Catch the Treats

## Einleitung

{{< imgblock "img/hero.png" "Hintergrund" 6 >}} Willkommen bei unserem Halloween-Spiel 🎃. Wir programmieren gemeinsam ein Spiel, bei dem freundliche Monster 👻 gruselige "Süßigkeiten" herumwerfen, die du erwischen musst. Wenn du sie nicht erwischst, verlierst du ein Leben. Wenn du alle Leben verloren hast, ist das Spiel vorbei. Wer schafft am meisten Punkte?

**Interessante Info** am Rande, die für diejenigen interessant sein könnte, die schon etwas mehr Erfahrung haben: Wir programmieren in dieser Übung mit der Programmiersprache _TypeScript_. Unsere Entwicklungsumgebung ist _Stackblitz_. Als Grafikbibliothek verwenden wir _p5js_.
{{< /imgblock >}}

## Vorbereitung

Damit du anfangen kannst zu programmieren, öffne den _Starter-Code_ unter [https://meet.coderdojo.net/catch-starter](https://meet.coderdojo.net/catch-starter). Ein solches Spiel von Grund auf neu zu programmieren ist etwas zu schwierig für AnfängerInnen. Daher haben wir ein paar Dinge schon vorbereitet. Deshalb brauchst du den Starter-Code.

{{< imgblock "img/fork.png" "Fork" 4 >}} Damit du dir deine eigene Kopie des Starter-Codes bekommst, drücke auf _Fork_. Das Bild zeigt dir, wie der _Fork_-Knopf aussieht.
{{< /imgblock >}}

{{< imgblock "img/stackblitz.png" "Stackblitz" 8 >}} Nach dem Öffnen des Starter-Codes sollte dein Bildschirm so aussehen, wie im Bild gezeigt. Links ist die _Dateiliste_. Wir brauchen sie heute nicht, daher kannst du sie mit einem Klick ausblenden (siehe roter Pfeil im Bild).

In der Mitte siehst du den _Programmierbereich_. Hier schreiben wir unseren Code.

Rechts siehst du die _Programmausgabe_. Hier wird unser Spiel zu sehen sein. Wenn du die Ausgabe gerade nicht brauchst, kannst du sie mit dem Knopf _Close_ rechts oben ausblenden. Mit _Open_ erscheint sie wieder. Durch den Knopf _Open in New Tab_ kannst du dein Spiel in einem eigenen Browser-Fenster öffnen. Dann siehst du es noch größer.
{{< /imgblock >}}

## Hintergrundgrafik 🖼️

### Bild laden

Wir fangen bei unserem Spiel genau wie bei Scratch-Spielen mit der Hintergrundgrafik an. Bevor wir ein Hintergrundbild verwenden können, müssen wir es laden. Das machen wir in der `preload`-Funktion. Du musst eine Zeile zu ihr hinzufügen. Die Zeile sieht so aus:

{{< highlight js "hl_lines=2" >}}
function preload() {
  Background.loadImage(3); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

### 💡 Wichtige Tipps

Hier ein paar wichtige Tipps, die du dir für die ganze Übung merken solltest:

1. Hinweise wie `// <<< Diese Zeile musst du einfügen` musst du **nicht** in deinem Code schreiben. Das sind ein sogenannte _Kommentare_. Sie sind in Grün dargestellt. Kommentare sind nur da, um dir zu zeigen, welche Zeile du einfügen musst oder um dir zu erklären, was im Code passiert. Schreibe nur den Code, der kein Kommentar ist.
2. Achte immer genau darauf, dass du den Code richtig abschreibst. **Jedes Zeichen ist wichtig**, auch Groß- und Kleinschreibung sind zu beachten!
3. Passe besonders darauf auf, dass der Code immer richtig innerhalb der geschweiften Klammern (`{` und `}`) steht. Sie begrenzen _Codeblöcke_, also Teile vom Code, die zusammengehören.

### Leinwand erstellen und Hintergrund malen 🎨

Nachdem wir den Hintergrund geladen haben, müssen wir ihn anzeigen. Das passiert in zwei Schritten. Erstens müssen wir in der `setup`-Funktion eine "Leinwand" erstellen, auf der wir den Hintergrund malen können. Auf Englisch heißt "Leinwand" _Canvas_. Die Zeile sieht so aus:

{{< highlight js "hl_lines=2" >}}
function setup() {
  Background.createCanvas(); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Jetzt können wir den Hintergrund malen. "Malen" heißt auf Englisch _Draw_. Daher malen wir den Hintergrund in der `draw`-Funktion. Die Zeile sieht so aus:

{{< highlight js "hl_lines=2" >}}
function draw() {
  Background.draw(); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

{{< imgblock "img/background.png" "Hintergrund" 8 >}} Gratulation! Der erste Schritt zu unserem Spiel ist geschafft. Du müsstest jetzt den Hintergrund sehen.
{{< /imgblock >}}

### Eigenen Hintergrund verwenden

{{< imgblock "img/bg-image.png" "Hintergrund" 6 >}} Jetzt kannst du kreativ werden. Du hast vielleicht die Zahl gesehen, die wir in der `preload`-Funktion an `loadImage` übergeben haben. Dadurch kannst du steuern, welches Bild als Hintergrund verwendet werden soll. Wir haben acht Bilder für die vorbereitet. Du kannst zwischen ihnen umschalten, indem du die Zahl auf einen **Wert zwischen 1 und 8** änderst. Probiere es aus! Suche dir ein Hintergrundbild aus, das dir besonders gut gefällt.
{{< /imgblock >}}

## 💡 Coding-Tipps

Bevor wir weitermachen, ein paar super praktische Coding-Tipps.

### Red Squigglies

{{< imgblock "img/red-squigglies.png" "Red Squigglies" 5 >}} Gerade als AnfängerIn passiert es manchmal, dass Codeteils rot unterwellt dargestellt werden. In English sagt man dazu _Red Squigglies_. Lustiger Name, oder?

Die Red Squigglies zeigen dir an, dass du einen Fehler im Code hast. Entdeckst du den Fehler im Bild? Der Code enthält das Kommando `loadimage` statt `loadImage` (kleines "i" wurde geschrieben, es muss aber ein großes "I" sein). Diese Kleinigkeit führt schon dazu, dass der Code nicht funktioniert. Du musst also auf die Red Squgglies achten und deinen Tippfehler suchen, wenn sie auftauchen. Solange du Red Squigglies hast, wird dein Spiel mit großer Wahrscheinlichkeit nicht funktionieren.
{{< /imgblock >}}

### IntelliSense

{{< imgblock "img/intellisense.png" "Hintergrund" 5 >}} Der Editor versucht dir zu helfen, damit du weniger tippen musst. Wenn du die ersten Buchstaben eines Befehls eingetippt hast (im Bild zum Beispiel `lo`), dann zeigt dir der Editor gleich passende Kommandos an (im Beispiel `loadImage`). Wenn das passiert, musst du nicht mehr weiter tippen. Klicke die Auswahl einfach an, drücke auf die _Enter_-Taste oder die _Tabulator_-Taste und schon ist der Befehl vervollständigt. Praktisch, oder?
{{< /imgblock >}}

## Monster 🧌

{{< imgblock "img/scratch-arrays.png" "Felder in Scratch" 5 >}} Jetzt fügen wir unser freundliches Monster zum Spiel hinzu. Zum Spielbeginn haben wir nur ein Monster. Später werden wir aber Levels hinzufügen und in jedem Level taucht ein zusätzliches Monster auf.

### Monster in Liste speichern

Da wir mehrere Monster haben werden, müssen wir alle unsere Monster in einer Variable speichern. Um genau zu sein verwenden wir eine **Liste**. Vielleicht kennst du Listen schon von Scratch-Projekten, die du programmiert hast (siehe Abbildung).
{{< /imgblock >}}

Auf Englisch wird beim Programmieren eine Liste als _Array_ bezeichnet. Lass uns als erstes die Variable anlegen. Die Zeile sieht so aus (füge sie unter dem Hinweis `// vvvv Hier fügen wir die Variablen ein` ein, der schon im Starter-Code enthalten ist):

{{< highlight js "hl_lines=3" >}}
...
// vvvv Hier fügen wir die Variablen ein
const monsters: Monster[] = []; // <<< Diese Zeile musst du einfügen

...
{{< /highlight >}}

### Monster laden

Als nächstes müssen wir unsere Monster laden. Wie beim Hintergrund machen wir das in der `preload`-Funktion. Die Zeilen sehen so aus:

{{< highlight js "hl_lines=5-9" >}}
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
{{< /highlight >}}

{{< imgblock "img/scratch-loop.png" "Felder in Scratch" 4 >}} Mit diesen Zeilen werden **drei Monster in einer Schleife** geladen (daher das `<= 3` im Code). Schleifen kennst du wahrscheinlich schon aus Scratch (siehe Bild). In TypeScript macht man Schleifen unter anderem mit dem `for`-Kommando, das du gerade getippt hast. Nach dem Laden wird das Monster zur Liste hinzugefügt (`push`).
{{< /imgblock >}}

### Monster bewegen und zeichnen

Beim Start des Spieles wollen wir die Monster in die Mitte des Bildschirms spazieren lassen. Das machen wir in der `setup`-Funktion und verwenden dafür wieder eine `for`-Schleife, allerdings eine etwas andere Variante. Die Zeilen sehen so aus:

{{< highlight js "hl_lines=5-7" >}}
function setup() {
  Background.createCanvas(); // <<< Diese Zeile gibt es schon
  
  // vvv Diese Zeilen musst du einfügen
  for (const monster of monsters) {
    monster.goto(1920 / 2);
  }
  // ^^^ Bis hierher
}
{{< /highlight >}}

Zum Schluss müssen wir das erste Monster anzeigen. Das machen wir in der `draw`-Funktion. Die Zeilen sehen so aus:

{{< highlight js "hl_lines=5-6" >}}
function draw() {
  Background.draw(); // <<< Diese Zeile gibt es schon
  
  // vvv Diese Zeilen musst du einfügen
  monsters[0].move();
  monsters[0].draw();
  // ^^^ Bis hierher
}
{{< /highlight >}}

{{< imgblock "img/monster-here.png" "Hintergrund" 5 >}} Wenn du alles richtig gemacht hast, spaziert ein Monster über den Bildschirm.

Möchtest du sehen, wie die anderen Monster aussehen? In der `draw`-Funktion siehst du zwei Mal `monster[0]`. Ändere die `0` auf eine `1` oder eine `2` (in **beiden** Zeilen). Dann siehst du alle drei Monster.
{{< /imgblock >}}

## Hintergrundmusik 🎶

Zeit für unsere ersten Sound-Effekte. Wir starten mit Hintergrundmusik. Wie schon bei den Grafiken zuvor müssen wir auch die Musik als erstes laden. Das machen wir in der `preload`-Funktion. Die Zeile sieht so aus (füge sie **ganz am Ende** der `preload`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=4" >}}
function preload() {
  ...
  
  Sounds.loadSounds(1, 40); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Jetzt müssen wir die Musik nur noch starten. Das machen wir in der `setup`-Funktion. Die Zeile sieht so aus (füge sie **ganz am Ende** der `setup`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=4" >}}
function setup() {
  ...
  
  Sounds.playBackgroundMusic();  // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Du müsstest jetzt Hintergrundmusik hören!

Möchtest du ein anderes Lied? Wir haben drei für dich zur Auswahl vorbereitet. Du steuerst, welches Lied im Hintergrund läuft, mit dem ersten Parameter der `loadSound`-Funktion in `preload`. Die drei Lieder haben die Nummern 1, 2 und 3. Probiere sie aus!

Der zweite Parameter steuert die Lautstärke der Hintergrundmusik. `40` ist ein guter Wert. Wenn dir die Musik zu leise ist, ändere ihn z.B. auf `60`. Wenn du lange an dem Spiel programmierst, kannst du die Musik vielleicht irgendwann nicht mehr hören 🤣. In diesem Fall setze die Lautstärke einfach auf Null ( `0`).

## Monster läuft herum

{{< imgblock "img/monster-walking.gif" "Monster spaziert herum" 5 >}} Unser nächster Schritt ist, dass wir das Monster herumlaufen lassen. Es soll sich zufällig nach links oder rechts bewegen. Wenn es angekommen ist, soll es eine zufällig lange Zeit warten, bevor es sich wieder bewegt.

Programmieren können wir das in der `preload`-Funktion. Die Zeilen, die du einfügen musst, sind im folgenden Codeabschnitt hervorgehoben. **Achtung**: Die anderen Zeilen gibt es schon. Achte darauf, dass du die neuen Zeilen genau an der richtigen Stelle einfügst!
{{< /imgblock >}}

{{< highlight js "hl_lines=9-11" >}}
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
{{< /highlight >}}

`targetReached` ist ein sogenannter _Callback_, ein _Rückruf_. Der Code, den wir `targetReached` zuweisen, wird immer dann aufgerufen, wenn das Monster sein aktuelles Ziel erreicht hat.

Und? Spaziert dein Monster jetzt schon fröhlich durch die Halloween-Welt?

## Süßigkeiten werfen 🍩

### Süßigkeiten in Liste verwalten

{{< imgblock "img/throwing-treats.gif" "Süßigkeiten werfen" 5 >}} Immer wenn unser Monster stehen bleibt, soll es Süßigkeiten (Englisch _Treats_ oder _Sweets_) in die Luft werfen, die wir treffen müssen. In unserem Programm müssen wir die Süßigkeiten, die gerade herumfliegen, irgendwo verwalten. Was bietet sich da an? Eine _Liste_, genau wie bei unseren Monster. Starten wir, indem wir die List als Variable anlegen. Kannst du dich noch erinnern, wo in unserem Programm die Variablen sind? Ziemlich weit oben im Programmcode.
{{< /imgblock >}}

{{< highlight js "hl_lines=3" >}}
// vvvv Hier fügen wir die Variablen ein
const monsters: Monster[] = []; // <<< Diese Zeile gibt es schon
const items: Items[] = [];      // <<< Diese Zeile musst du neu einfügen
{{< /highlight >}}

### Bilder für Süßigkeiten laden

Wir haben eine ganze Reihe an Halloween-Treats vorbereitet, die wir laden müssen, bevor wir sie verwenden können. Kannst du dich noch erinnern, in welcher Methode wir bisher immer Bilder und Sounds geladen haben? Richtig, es war die `preload`-Funktion. Der folgende Codeabschnitt zeigt, welche **zwei Zeilen** du wo in `preload` einfügen musst. Die erste lädt die Bilder für die Süßigkeiten und die zweite fügt immer dann, wenn das Monster stehenbleibt, eine neue Süßigkeit in unsere Liste ein (`push`).

{{< highlight js "hl_lines=3 10" >}}
function preload() {
  Background.loadImage(3);
  Items.loadItems();                            // <<< Diese Zeile musst du neu einfügen

  for (let i = 1; i <= 3; i++) {
    const monster = new Monster(i);
    monster.loadMonster();
    
    monster.targetReached = () => {
      items.push(new Items(monster.position));  // <<< Diese Zeile musst du neu einfügen
      monster.walkToRandomPosition();
    };

    monsters.push(monster);
  }

  Sounds.loadSounds(1, 40);
}
{{< /highlight >}}

### Süßigkeiten malen

Ein Schritt fehlt noch, bis Süßigkeiten fliegen: Wir müssen die gerade aktiven Süßigkeiten in der `draw`-Funktion auf den Bildschirm malen. Da mehrere Süßigkeiten gleichzeitig herumfliegen können, müssen wir das in einer Schleife für alle gerade aktiven Süßigkeiten machen.

{{< highlight js "hl_lines=8-10" >}}
function draw() {
  Background.draw();

  monsters[0].move();
  monsters[0].draw();

  // vvv Diese Zeilen musst du einfügen
  for (let i = 0; i < items.length; i++) {
    items[i].draw();
  }
  // ^^^ Bis hierher
}
{{< /highlight >}}

### Zu Boden gefallene Süßigkeiten entfernen

Geschafft! Das Monster wirft mit Süßigkeiten um sich! Aber Moment, wir haben ein Problem. Die Süßigkeiten bleiben am Boden liegen. Das soll nicht so sein. Wenn man beim Programmieren ein Objekt nicht mehr braucht, muss man es entfernen, sonst türmt sich "Müll" (Englisch _Garbage_) auf. Lass uns die `draw`-Funktion, die wir gerade geändert haben, noch verbessern. Immer wenn eine Süßigkeit den Boden berührt, spielen wir einen Soundeffekt ab und entfernen sie (`splice`):

{{< highlight js "hl_lines=6-11" >}}
function draw() {
  ...

  for (let i = 0; i < items.length; i++) {
    // vvv Diese Zeilen musst du einfügen
    if (items[i].touchesFloor) {
      Sounds.playDrop();
      items.splice(i--, 1);

      continue;
    }
    // ^^^ Bis hierher


    items[i].draw();
  }
}
{{< /highlight >}}

{{< imgblock "img/scratch-if.png" "Scratch wenn/dann" 3 >}} Jetzt passt es super. Die Süßigkeiten verschwinden, wenn sie am Boden laden.

Übrigens, ist dir im Code, den du gerade geschrieben hast, das `if` aufgefallen? Das ist die TypeScript-Variante vom _falls, dann_ oder _falls, dann, sonst_, das du bereits aus Scratch kennst.
{{< /imgblock >}}

## Süßigkeiten abschießen

### Fadenkreuz

{{< imgblock "img/crosshairs.png" "Fadenkreuz" 3 >}} Hintergrund ist da, Monster läuft herum, Monster wirft mit Süßigkeiten um sich - wir haben schon richtig viel geschafft! Jetzt machen wir uns daran, dass wir Süßigkeiten abschießen können. Als erstes zeichnen wir dafür an der Position der Maus ein Fadenkreuz, damit wir besser zielen können. Das machen wir in der `draw`-Funktion. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `draw`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):
{{< /imgblock >}}

{{< highlight js "hl_lines=4" >}}
function draw() {
  ...

  Crosshairs.draw(); // <<< Diese Zeile musst du am Ende der draw-Funktion einfügen
}
{{< /highlight >}}

### Auf Mausklick reagieren

{{< imgblock "img/scratch-click.png" "Scratch klick" 4 >}} Als nächstes müssen wir etwas machen, wenn die Spielerin oder der Spieler mit der Maus klicken. Dafür gibt es die Methode `mouseClicked`. Sie ist so etwas ähnliches wie das Scratch-Ereignis _Wenn diese Figur angeklickt wird_. Am besten du suchst sie als erstes in deinem Code. Sie ist ganz unten und im Moment noch leer.
{{< /imgblock >}}

Füge den folgenden Code in die `mouseClicked`-Funktion ein. Er ist etwas länger, aber mittlerweile bist du ja fast schon ein Profi 👍. **Zur Erinnerung:** Die Zeilen, die mit `//` beginnen, sind _Kommentare_. Sie sollen dir nur erklären, was der Code macht. Du musst sie **nicht** eintippen.

{{< highlight js "hl_lines=4 9-11 14-15 17-19 24-25" >}}
function mouseClicked() {
  // Wir prüfen, ob innerhalb der Spielfläche geklickt wurde.
  // Klicks außerhalb ignorieren wir.
  if (Background.isIn(p.mouseX, p.mouseY)) {
    // Wir gehen alle gerade herumfliegenden Süßigkeiten in
    // einer Schleife durch und prüfen, ob der Mausklick auf
    // der jeweiligen Süßigkeit stattgefunden hat. Wenn ja
    // wurde sie getroffen.
    for (let i = 0; i < items.length; i++) {
      const pos = items[i].getBox();
      if (pos.isIn(p.mouseX, p.mouseY)) {
        // Getroffen! Wir spielen einen Soundeffekt für den
        // Treffer ab und entfernen die Süßigkeit.
        Sounds.playHit();
        items.splice(i--, 1);
        // Wir sind fertig.
        return;
      }
    }

    // Wenn wir diese Zeile erreichen, hat der Mausklick
    // keine Süßigkeit erwischt. Wir spielen daher einen Soundeffekt
    // ab, der den Fehlschuss hörbar macht.
    Sounds.playMiss();
  }
}
{{< /highlight >}}

Probiere es aus! Du kannst jetzt Süßigkeiten abschießen.

### Explosion 💥

{{< imgblock "img/explosion.gif" "Explosion" 5 >}} Wäre es nicht cool, wenn eine Süßigkeit explodiert, wenn wir sie erwischen? Lass uns eine Explosion hinzufügen!

Kannst du erraten, was wir für die Explosion als erstes machen müssen? Wir müssen die Bilder der Explosion laden. Und das geschieht in welcher Methode? Richtig, `preload`. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `preload`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):
{{< /imgblock >}}

{{< highlight js "hl_lines=5" >}}
function preload() {
  ...

  Sounds.loadSounds(1, 40);  // <<< Diese Zeile gibt es schon
  Explosion.loadExplosion(); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Als nächstes müssen wir die Explosion auslösen, wenn eine Süßigkeit getroffen wurde. Das heißt, wir müssen den Code ändern, den wir im letzten Kapitel gerade geschrieben haben. Er ist in der `mouseClicked`-Funktion. Die neue Zeile sieht so aus:

{{< highlight js "hl_lines=8" >}}
function mouseClicked() {
  if (Background.isIn(p.mouseX, p.mouseY)) {
    for (let i = 0; i < items.length; i++) {
      const pos = items[i].getBox();
      if (pos.isIn(p.mouseX, p.mouseY)) {
        Sounds.playHit();
        items.splice(i--, 1);
        Explosion.explode(pos.middleX, pos.middleY); // <<< Diese Zeile musst du einfügen
        return;
      }
    }

    Sounds.playMiss();
  }
}
{{< /highlight >}}

Wenn du jetzt das Spiel probierst, wirst du sehen, dass immer noch keine Explosion auftaucht. Was fehlt? Wir müssen die Explosion noch auf den Bildschirm malen. "Malen" heißt auf Englisch _to draw_, daher machen wir das in der `draw`-Funktion. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `draw`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=5" >}}
function draw() {
  ...

  Crosshairs.draw(); // <<< Diese Zeile gibt es schon
  Explosion.draw();  // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Los gehts, lass Süßigkeiten explodieren 💥!

## Punkte

### Punkte in Variable speichern

{{< imgblock "img/points.png" "Punkte" 3 >}} Was wäre ein solches Spiel ohne Punkte, die man sammeln kann. Lass uns einen Punktezähler hinzufügen. Dafür brauchen wir als erstes eine Variable, in der wir die Punkte speichern.
{{< /imgblock >}}

{{< highlight js "hl_lines=4" >}}
// vvvv Hier fügen wir die Variablen ein
const monsters: Monster[] = []; // <<< Diese Zeile gibt es schon
const items: Items[] = [];      // <<< Diese Zeile gibt es auch schon
let points = 0;                 // <<< Diese Zeile musst du hinzufügen
{{< /highlight >}}

### Schriftarten

Zum Darstellen der Punkte brauchen wir eine passende Schriftart. Genau wie Bilder und Sounds müssen wir Schriftarten in der `preload`-Funktion laden. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `preload`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=5" >}}
function preload() {
  ...

  Explosion.loadExplosion(); // <<< Diese Zeile gibt es schon
  Fonts.loadFonts();         // <<< Diese Zeile musst du hinzufügen
}
{{< /highlight >}}

### Punkte zählen und anzeigen

Wann immer wir eine Süßigkeit treffen, müssen wir den Punktestand erhöhen. Hast du eine Idee, an welcher Stelle im Programm wir das machen sollten? In der `mouseClicked`-Funktion, in der wir die Süßigkeit explodieren lassen, wenn sie angeklickt wird. Die neue Zeile sieht so aus:

{{< highlight js "hl_lines=4" >}}
function mouseClicked() {
  ...
        Explosion.explode(pos.middleX, pos.middleY); // <<< Diese Zeile gibt es schon
        points++;                                    // <<< Diese Zeile musst du einfügen
        return;                                      // <<< Diese Zeile gibt es auch schon
  ...
}
{{< /highlight >}}

Jetzt müssen wir den Punktestand noch in der `draw`-Funktion auf den Bildschirm malen. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `draw`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=5" >}}
function draw() {
  ...

  Explosion.draw();                         // <<< Diese Zeile gibt es schon
  Texts.drawPoints(Fonts.Qahiri(), points); // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

Hurra, wir können Punkte sammeln!

## Leben

{{< imgblock "img/health.png" "Punkte" 3 >}} Unser Spiel ist schon richtig gut. Aber es fehlt noch etwas. Das Spiel endet nie. Lass uns Lebensenergie hinzufügen. Wir starten mit fünf Leben. Wenn eine Süßigkeit zu Boden fällt, verlieren wir ein Leben. Wenn wir alle Leben verloren haben, ist das Spiel zu Ende.
{{< /imgblock >}}

### Lebensenergie in Variable speichern

Als erstes brauchen wir zwei Variablen. Die eine (`health`) speichert die aktuelle Lebensenergie und die andere (`gameOver`) zeigt an, ob das Spiel zu Ende ist.

{{< highlight js "hl_lines=6-7" >}}
// vvvv Hier fügen wir die Variablen ein
const monsters: Monster[] = [];
const items: Items[] = [];
let points = 0;
// vvv Diese Zeilen muss du einfügen
let health = 5;
let gameOver = false;
// ^^^ Bis hierher
{{< /highlight >}}

### Lebensenergiebilder laden

Jetzt geht es wieder ans Laden von Bildern. Die Lebensenergie wird als kleines Herz rechts oben am Bildschirm angezeigt. Die Bilder dafür müssen wir wie üblich in der `preload`-Funktion laden. Die neue Zeile sieht so aus (füge sie **ganz am Ende** der `preload`-Funktion unmittelbar vor der geschweiften Klammer zu `}` ein):

{{< highlight js "hl_lines=5" >}}
function preload() {
  ...

  Fonts.loadFonts();          // <<< Diese Zeile gibt es schon
  HealthHearts.loadHearts();  // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

### Lebensenergie anzeigen

{{< imgblock "img/game-over.png" "Punkte" 4 >}} Jetzt überarbeiten wir die `draw`-Funktion. Du musst an **drei Stellen** etwas hinzufügen!

1. Der erste Code sorgt dafür, dass eine _Game Over_-Meldung angezeigt wird wenn das Spiel zu Ende ist.
2. Der zweite Code reduziert die Lebensenergie, wenn eine Süßigkeit zu Boden fällt. Außerdem setzt er `gameOver` auf `true`, wenn wir keine Lebensenergie mehr haben.
3. Ganz am Ende müssen wir die Lebensenergie am Bildschirm anzeigen.
{{< /imgblock >}}

{{< highlight js "hl_lines=5 8-10 21-22 26-27 39" >}}
function draw() {
  Background.draw();

  // vvv Diese Zeilen muss du einfügen
  if (gameOver) {
    // Falls Game Over ist, schreiben wir eine Meldung mit den erreichten
    // Punkten auf den Bildschirm und beenden das Spiel.
    Texts.drawGameOver(Fonts.Festive(), points);
    return;
  }
  // ^^^ Bis hierher

  monsters[0].move();
  monsters[0].draw();

  for (let i = 0; i < items.length; i++) {
    if (items[i].touchesFloor) {
      Sounds.playDrop();
      items.splice(i--, 1);
      // vvv Diese Zeilen muss du einfügen
      health--;
      if (health === 0) {
        // Wenn eine Süßigkeit zu Boden fällt, reduzieren wir
        // die Lebensenergie um 1. Wenn die Lebensenergie auf 
        // 0 fällt, ist das Spiel zu Ende.
        gameOver = true;
      }
      // ^^^ Bis hierher

      continue;
    }

    items[i].draw();
  }

  Crosshairs.draw();
  Explosion.draw();
  Texts.drawPoints(Fonts.Qahiri(), points); // <<< Diese Zeile gibt es schon
  HealthHearts.drawHealth(health);          // <<< Diese Zeile musst du einfügen
}
{{< /highlight >}}

### Game Over-Meldung fertig machen

{{< imgblock "img/font.png" "Punkte" 4 >}} Wie gefällt dir die Schriftart, die wir für _Game Over_ ausgewählt haben? Du kannst sie ändern, in dem du den Schriftnamen änderst. Dir stehen drei Möglichkeiten zur Verfügung:

1. Festive
2. Qahiri
3. Roboto
{{< /imgblock >}}

Eine letzte Sache noch, dann haben wir die Lebensenergie fertig. Wenn das Spiel zu Ende ist, soll es nicht mehr möglich sein, Süßigkeiten abzuschießen. Das machen wir in der `mouseClicked`-Funktion. Die neuen Zeilen sehen so aus (füge sie **ganz am Anfang** der `mouseClicked()`-Funktion ein):

{{< highlight js "hl_lines=3-5" >}}
function mouseClicked() {
  // vvv Diese Zeilen muss du einfügen
  if (gameOver) {
    return;
  }
  // ^^^ Bis hierher
  
  ...
}
{{< /highlight >}}

Probiere mal, ob das mit der Lebensenergie funktioniert, indem du bewusst Süßigkeiten zu Boden fallen lässt.

## Levels

{{< imgblock "img/level-3.gif" "Punkte" 5 >}} Wir sind in der Zielgeraden, eine letzte Funktion fehlt uns noch: Levels: Unser Spiel ist im Moment zu einfach. Man könnte es endlos spielen. Schwieriger machen können wir es, indem wir mehrere Monster gleichzeitig Süßigkeiten werfen lassen. Wir starten mit einem Monster und fügen dann nach und nach weitere Monster hinzu. Das machen wir mit einem Level-System: 

1. Wir starten mit Level 1, in dem es nur ein Monster gibt.
2. Wenn wir 25 Punkte erreicht haben, steigen wir auf Level 2 auf, in dem es zwei Monster gibt.
3. Wenn wir 50 Punkte erreicht haben, steigen wir auf Level 3 auf, in dem es drei Monster gibt.
{{< /imgblock >}}

### Aktuelles Level in Variable speichern

Als erstes brauchen wir eine Variable, in der wir das aktuelle Level speichern.

{{< highlight js "hl_lines=4" >}}
// vvvv Hier fügen wir die Variablen ein
...
let gameOver = false; // <<< Diese Zeile gibt es schon
let level = 3;        // <<< Diese Zeile musst du einfügen
{{< /highlight >}}

### Code zum Monster malen anpassen

Da es in den Levels 2 und 3 mehrere Monster gibt, müssen wir unseren `draw`-Code ändern. Statt immer nur ein Monster zu zeichnen, müssen wir in einer Schleife alle Monster malen, die gerade aktiv sind. Dazu müssen wir zwei Zeilen **löschen** und durch andere ersetzen:

{{< highlight js "hl_lines=5-6 10-13" >}}
function draw() {
  ...

  // vvv Die folgenden zwei Zeilen gibt es schon, du musst sie LÖSCHEN
  // monsters[0].move();
  // monsters[0].draw();
  // ^^^ Bis hierher

  // vvv Diese Zeilen musst du stattdessen einfügen
  for (let i = 0; i < level; i++) {
    monsters[i].move();
    monsters[i].draw();
  }
  // ^^^ Bis hierher

  ...
}
{{< /highlight >}}

### Levels umschalten

{{< imgblock "img/level-points.png" "Punkte" 5 >}} Zum Schluss müssen wir die Levels umschalten. Wenn wir 25 Punkte erreicht haben, geht es in Level 2. Bei 50 in Level 3. Natürlich kannst du die Punktegrenzen auch an deine Vorstellungen anpassen und so das Spiel schwerer oder leichter machen.
{{< /imgblock >}}

{{< highlight js "hl_lines=12-16" >}}
function mouseClicked() {
  ...

  if (Background.isIn(p.mouseX, p.mouseY)) {
    for (let i = 0; i < items.length; i++) {
      ...
      if (pos.isIn(p.mouseX, p.mouseY)) {
        ...
        points++; // <<< Diese Zeile gibt es schon

        // vvv Diese Zeilen musst du einfügen
        if (points === 25) {
          level = 2;
        } else if (points === 50) {
          level = 3;
        }
        // ^^^ Bis hierher

        return; // <<< Diese Zeile gibt es schon
      }
    }

    ...
  }
}
{{< /highlight >}}

## Geschafft!

Wow, gratulation, du hast es bis zum Ende geschafft. Du hast ein richtiges Browser-Game programmiert. Wir hoffen, dass es dir Spaß gemacht hat.

Hier zum Schluss noch der Link zum fertigen Spiel: [https://stackblitz.com/edit/catch-the-sweets-finished](https://stackblitz.com/edit/catch-the-sweets-finished?file=index.ts)
