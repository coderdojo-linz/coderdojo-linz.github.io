---
title: "Feuerwerk-Simulator"
description: "In dieser Übung programmierst du einen Feuerwerk-Simulator."
level: 2
aliases:
- /trainingsanleitungen/web/feuerwerk-basics.html
categories:
- HTML
- TypeScript
- p5.js
---

# Feuerwerksimulator (für AnfängerInnen)

## Ziel der Übung

Heute wollen wir gemeinsam einen Feuerwerk-Simulator programmieren. Dabei kannst du das Tippen von Code auf der Tastatur üben und lernst Grundlagen der Programmierung wie Variablen, Schleifen und Funktionen kennen.

Du solltest für diese Übung schon ein wenig Programmiererfahrung mit einer Blockprogrammiersprache wie [*Scratch*](/uebungsanleitungen/programmieren/scratch/) oder [*Snap!*](https://snap.berkeley.edu/) haben. Falls du noch nie Programmcode eingetippt hast, solltest du auch etwas Geduld mitbringen. Es ist am Anfang nicht immer leicht, die vielen Sonderzeichen im Code auf der Tastatur zu finden. Halte durch, Übung macht den Meister!

## Start

Du brauchst für diese Übung keine spezielle Software auf deinem Computer zu installieren. Es ist nur ein aktueller Web-Browser (vorzugsweise [Chrome](https://www.google.com/chrome/)) notwendig.

Um loszulegen, öffne die URL [https://stackblitz.com/edit/feuerwerk-basics-starter?file=index.ts](https://stackblitz.com/edit/feuerwerk-basics-starter?file=index.ts). Du wirst dadurch im Web-Browser ein Fenster sehen, das in etwa so aussieht:

{{< imgblock "img/Stackblitz.png" "Stackblitz im Web-Browser" >}}{{< /imgblock >}}

* Links siehst du eine Liste der Dateien. Wir programmieren heute nur in *index.ts*, daher kannst du die Dateien mit dem Symbol links oben ausblenden (siehe Pfeil *Ausblenden der Dateien* im Bild oben).
* Unseren Programmcode schreiben wir im Textfenster in der Mitte.
* Rechts sehen wir nach jeder Codeänderung gleich das Ergebnis.

## Experimente mit der ersten Rakete

Wir haben dir unter der oben genannten URL schon ein wenig Code zum Starten vorbereitet. Ein Programm wie den Feuerwerksimulator ganz von vorne zu programmieren, ist nichts für AnfängerInnen. Dafür braucht man etwas Übung.

Der von uns vorbereitete Code ist aber ziemlich dumm. Er schießt nach dem Laden der Ergebnisseite nur eine einzelne Rakete ab. Die dafür verantwortliche Zeile in unserem Code ist: `fireworks.push(new Firework(p, 60, p.width / 2, 75, 15));`. Deine **Aufgabe** ist, diese Codezeile zu suchen. Tipp: Sie ist in der *Funktion* `setup`.

Die Zeilen, die mit `//` beginnen, sind nur *Kommentare*. Kommentare schreibt man in den Code, damit man später noch versteht, was man sich gedacht hat, als man den Code geschrieben hat. In diesem Fall verwenden wir Kommentare, um dir zu erklären, was die Codezeilen machen.

Hier ein paar Erklärungen zu der Codezeile zum Abschießen der Rakete:

* `fireworks.push` bedeutet, dass wir eine Rakete zu einer Liste von Raketen hinzufügen, die wir auf den Bildschirm zeichnen wollen. *Push* ist Englisch und bedeutet *schieben* oder *schubsen*. Wir werden später `fireworks.push` oft aufrufen, um mehr als eine Rakete zu zeichnen.
* `new Firework` legt eine Rakete (*Firework* heißt auf Deutsch *Feuerwerkskörper* und *new* heißt *neu*) an. In den Klammern gibt man die *Parameter* für die Rakete an. Sie sind durch Kommas getrennt. **Achtung:** Achte beim Experimentieren darauf, dass du die Kommas nicht löscht.

Deine **Aufgabe** ist, mit den Parametern zu experimentieren. Hier ein paar Hinweise dazu:

* Den ersten Parameter `p` ändere bitte nicht. Er ist aus technischen Gründen notwendig und wir gehen heute nicht näher darauf ein.
* Ändere den zweiten Parameter `60` auf einen anderen Wert zwischen 0 und 360. Hier siehst du eine Darstellung, welcher Wert zu welcher Farbe wird:

{{< imgblock "https://upload.wikimedia.org/wikipedia/commons/a/ad/HueScale.svg" "Farbwerte" >}}{{< /imgblock >}}

* Beim dritten Parameter `p.width / 2` wird die Mitte des Bildschirms errechnet. Du kannst hier statt der Formel auch eine Zahl angeben. Je kleiner die Zahl, desto weiter links erscheint die Rakete, je größer desto weiter rechts. Probiere mal `20`, `200` und `400` aus. Siehst du, wie sich die Position der Rakete ändert?
* Der vierte Parameter `75` steuert, wie hoch die Rakete fliegen wird. 0 bedeutet, dass sie kaum abhebt und 100 bedeutet, dass sie bis zum oberen Bildschirmrand fliegen wird. Probiere mal `0`, `50`, `75` und `100` aus. Siehst du, wie sich die Höhe der Rakete ändert?
* Der fünfte Parameter `15` bestimmt die Größe der Explosion. Probiere mal `10`, `15` und `25` aus.

## Mehrere Raketen

Statt einer Rakete möchten wir jetzt mehrere Raketen gleichzeitig abschießen. Deshalb müssen wir die Codezeile zum Abschießen der Rakete, mit der wir gerade experimentiert haben, kopieren. Weißt du schon, wie das geht?

* Stelle deinen Cursor in die Codezeile, die du kopieren möchtest.
* Drücke *Strg + C* (erst *Strg*, *Strg* gedrückt halten, dann *C*, danach beide Tasten loslassen), um die Zeile zu *kopieren*.
* Drücke *Strg + V*, um die Zeile einzufügen.
* Jetzt hast du die Zeile zwei Mal im Code.

Deine **Aufgabe** ist es, die Zeile so oft zu kopieren, dass sie *fünf* Mal im Code ist.

Es macht natürlich keinen Sinn, wenn alle fünf Raketen an der gleichen Stelle losfliegen. Deine nächste **Aufgabe** ist es, den Code so zu ändern, dass die Raketen über die ganze Bildschirmbreite verteilt sind. So würde das aussehen:

```ts
fireworks.push(new Firework(p, 60, p.width * 0 / 4, 75, 15));
fireworks.push(new Firework(p, 60, p.width * 1 / 4, 75, 15));
fireworks.push(new Firework(p, 60, p.width * 2 / 4, 75, 15));
fireworks.push(new Firework(p, 60, p.width * 3 / 4, 75, 15));
fireworks.push(new Firework(p, 60, p.width * 4 / 4, 75, 15));
```

Fällt dir auf, dass du die Farbe (`60`) in jeder Zeile drinnen hast? Wenn du die Farbe ändern willst, musst du fünf mal die Zahl ändern. Das ist unpraktisch, oder? In einem solchen Fall verwendet man eine *Konstante*. Deine **Aufgabe** ist es, den Code so zu ändern, dass die Farbe nur noch einmal enthalten ist und dadurch das Ändern der Farbe einfacher wird. So muss der Code nach der Änderung aussehen:

```ts
const color = 180;
fireworks.push(new Firework(p, color, p.width * 0 / 4, 75, 15));
fireworks.push(new Firework(p, color, p.width * 1 / 4, 75, 15));
fireworks.push(new Firework(p, color, p.width * 2 / 4, 75, 15));
fireworks.push(new Firework(p, color, p.width * 3 / 4, 75, 15));
fireworks.push(new Firework(p, color, p.width * 4 / 4, 75, 15));
```

Deine nächste **Aufgabe** ist, nach dem gleichen Prinzip wie bei `color` auch für die Flughöhe der Raketen (vorletzter Parameter) und für die Größe der Explosion (letzter Parameter) Konstanten einzufügen und zu verwenden. So muss der Code nach der Änderung aussehen:

```ts
const color = 180;
const height = 75;
const size = 15;
fireworks.push(new Firework(p, color, p.width * 0 / 4, height, size));
fireworks.push(new Firework(p, color, p.width * 1 / 4, height, size));
fireworks.push(new Firework(p, color, p.width * 2 / 4, height, size));
fireworks.push(new Firework(p, color, p.width * 3 / 4, height, size));
fireworks.push(new Firework(p, color, p.width * 4 / 4, height, size));
```

Immer die gleiche Farbe ist langweilig, oder? Beim Programmieren kannst du ganz einfach *Zufallszahlen* erzeugen. Das funktioniert ähnlich wie bei Spielen durch Würfeln. Beim Programmieren kann man aber nicht nur Zufallszahlen zwischen 1 und 6 "würfeln", sondern beliebige Zahlen zufällig erzeugen lassen. Deine **Aufgabe** ist es, die Farbe *zufällig* vom Computer auswählen zu lassen. Du musst dafür nur den Wert der Konstanten `color` wie folgt anpassen:

```ts
const color = p.random(360);
```

Jedes Mal wenn du das Programm neu startest, wird der Computer eine zufällige Farbe verwenden.

## Raketen im Intervall abschießen

Wir möchten unser Programm jetzt so erweitern, dass jede Sekunde Raketen abgeschossen werden. Dafür brauchen wir eine *Schleife*. Bei unserem ersten Experiment möchten wir fortlaufend neue Raketen abschießen. Deshalb verwenden wir eine *Endlosschleife*, also eine Schleife, die für immer läuft. In *Scratch* wäre das die *Wiederhole fortlaufend*-Schleife.

Deine **Aufgabe** ist es, den Code so zu ändern, dass jede Sekunde Raketen starten. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=1" >}}
while (true) {
  const color = p.random(360);
  const height = 75;
  const size = 15;
  fireworks.push(new Firework(p, color, p.width * 0 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 1 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 2 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 3 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 4 / 4, height, size));
  await delay(1000);
}
{{< /highlight >}}

Die Zeile `await delay(1000);` wartet 1000 Millisekunden, also eine Sekunde. Deine **Aufgabe** ist es, mit dieser Zahl zu experimentieren. Wie sieht das Ergebnis aus, wenn du 2000 statt 1000 verwendest? Wie beim Wert von 500?

Bereit für eine Herausforderung? Lass uns genau 10 Mal Raketen abschießen, dann soll das Feuerwerk zu Ende sein. In solchen Fällen verwendet man eine `for`-Schleife. Deine **Aufgabe** ist es, die `while`-Schleife in eine `for`-Schleife umzubauen. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=1" >}}
for (let i = 0; i < 10; i++) {
  const color = p.random(360);
  const height = 75;
  const size = 15;
  fireworks.push(new Firework(p, color, p.width * 0 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 1 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 2 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 3 / 4, height, size));
  fireworks.push(new Firework(p, color, p.width * 4 / 4, height, size));
  await delay(1000);
}
{{< /highlight >}}

Hier ein paar Tipps zur `for`-Schleife:

* Sie beginnt bei Null zu zählen (`i = 0`).
* Sie läuft solange `i` kleiner als 10 ist, also zehn Mal.
* Bei jedem Schleifendurchlauf wird `i` um eins erhöht (`i++`).

Hmmm, könnten wir die `for`-Schleife nicht auch verwenden, um die vielen, kopierten Aufrufe von `fireworks.push` zu vereinfachen. Deine **Aufgabe** ist es, eine `for`-Schleife zu verwenden, um aus den fünf `fireworks.push`-Aufrufen einen zu machen. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=5-7" >}}
for (let i = 0; i < 10; i++) {
  const color = p.random(360);
  const height = 75;
  const size = 15;
  for (let j = 0; j < 5; j++) {
    fireworks.push(new Firework(p, color, (p.width * j) / 4, height, size));
  }
  await delay(1000);
}
{{< /highlight >}}

Was müssten wir ändern, damit wir nicht nur fünf Raketen parallel abschießen können, sondern beliebig viele? Wir müssen die Obergrenzen für `j` anpassen und die Berechnungsformel für die X-Koordinate (horizontale Abschussposition) ändern. Das ist deine nächste **Aufgabe**. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=5-7" >}}
for (let i = 0; i < 10; i++) {
  const color = p.random(360);
  const height = 75;
  const size = 15;
  const numberOfRockets = 10;
  for (let j = 0; j < numberOfRockets; j++) {
    fireworks.push(new Firework(p, color, (p.width * j) / (numberOfRockets - 1), height, size));
  }
  await delay(1000);
}
{{< /highlight >}}

Wow, da tut sich ordentlich was, oder?

Bevor wir weiter machen, hier noch ein paar Rätsel, die du **selbständig probieren** kannst. Unten findest du die Lösung. Probiere aber erst selbst auf die Antwort zu kommen, bevor du die Lösung abschreibst.

* Was musst du am Code ändern, damit *jede* Rakete eine andere Farbe hat. Es sollen also nicht immer alle gleichzeitig abgeschossenen Raketen in der gleichen Farbe sein.
* Was musst du am Code ändern, damit dein Feuerwerk länger wird, also mehr als 10 Mal Raketen abschießt?
* Was musst du am Code ändern, damit *jede* Rakete unterschiedlich groß explodiert?
* Was musst du am Code ändern, damit *jede* Rakete unterschiedlich hoch fliegt?

Hier die Lösung:

```ts
for (let i = 0; i < 100; i++) {
  const numberOfRockets = 10;
  for (let j = 0; j < numberOfRockets; j++) {
    fireworks.push(new Firework(p, p.random(360), (p.width * j) / (numberOfRockets - 1), p.random(100), p.random(25)));
  }

  await delay(1000);
}
```

Hier noch ein Tipp: Wenn du ein richtig großes Feuerwerk sehen willst, das über den ganzen Bildschirm geht, klicke auf *Open in New Window* (rechts oben im Bildschirmfenster), drücke danach *F11* (Vollbildschirm) und zum Schluss *F5* zum neu Laden. Cool, oder?

{{< imgblock "img/open-in-window.png" "Open in new window" >}}{{< /imgblock >}}

Um aus der *Vollbildschirmanzeige* rauszukommen, drücke einfach nochmals *F11*.

## Raketen in Formation

Jetzt wollen wir unsere Raketen in Formation fliegen lassen. Damit wir vom gleichen Startpunkt ausgehen, ist deine **Aufgabe**, den Code zu ändern, damit er so aussieht:

```ts
for (let i = 0; i < 100; i++) {
  const height = 75;
  const size = 15;
  const numberOfRockets = 5;
  for (let j = 0; j < numberOfRockets; j++) {
    fireworks.push(new Firework(p, p.random(360), (p.width * j) / (numberOfRockets - 1), height, size));
  }

  await delay(1000);
}
```

Als erstes möchten wir probieren, wie es aussieht, wenn man *jede zweite Rakete* nur 3/4 mal so hoch fliegen lässt. Hier eine Skizze, wie die Flughöhe aussehen soll:

{{< imgblock "img/formation.svg" "Formation" >}}{{< /imgblock >}}

Damit wir diese Herausforderung meistern können, brauchen wir ein wenig Mathematik. In der Schule hast du sicher schon Operationen wie Addition, Subtraktion oder Multiplikation gelernt. Es gibt beim Programmieren jedoch eine weitere Operation, die man häufig braucht: *Modulo*. *Modulo* gibt den Rest einer Division zurück. Hier ein paar Beispiele:

| Division | Ergebnis | Rest |
| -------- | -------: | ---: |
| 9 / 5    |        1 |    4 |
| 10 / 5   |        2 |    0 |
| 5 / 2    |        2 |    1 |
| 6 / 2    |        3 |    0 |
| 0 / 3    |        0 |    0 |

Was hilft uns das bei unserer Herausforderung? Wenn man fortlaufende Zahlen (0, 1, 2, 3, 4, 5 etc.) modulo 2 rechnet, erhält man abwechselnd 0 und 1. Um genau zu sein erhalten wir bei *geraden Zahlen* die 0 als Ergebnis der Modulo-Operation und bei ungeraden 1. Hier als Tabelle dargestellt:

| Zahl | Ergebnis der Zahl modulo 2 |
| ---: | -------------------------: |
|    0 |                          0 |
|    1 |                          1 |
|    2 |                          0 |
|    3 |                          1 |
|    4 |                          0 |
|    5 |                          1 |

*Modulo* schreibt man im Code mit dem Zeichen `%`. Deine **Aufgabe** ist jetzt, mit diesem Wissen den geforderten Formationsflug unserer Raketen zu programmieren. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=5-8" >}}
for (let i = 0; i < 100; i++) {
  const size = 15;
  const numberOfRockets = 8;
  for (let j = 0; j < numberOfRockets; j++) {
    let height: number;
    if (j % 2 == 0) height = 90;
    else height = 67.5;
    fireworks.push(new Firework(p, p.random(360), (p.width * j) / (numberOfRockets - 1), height, size));
  }

  await delay(1000);
}
{{< /highlight >}}

Als zweite Formation möchten wir, dass die Raketen eine Diagonale bilden. Die erste Rakete soll auf Höhe `25` fliegen, die letzte auf Höhe `100`. Hier eine Skizze, wie die Flughöhe aussehen soll:

{{< imgblock "img/formation-diagonal.svg" "Formation" >}}{{< /imgblock >}}

Hier brauchen wir wieder etwas Mathematik. In diesem Fall hilft uns *Prozentrechnung*. Falls du das in der Schule noch nicht gelernt hast, ist das kein Problem. Wenn du magst, bitte eine ältere Person, eine CoderDojo-Mentorin oder einen CoderDojo-Mentor, dir das Prinzip der *Prozentrechnung* zu erklären. Du kannst aber auch den unten angeführten Code abtippen und Geduld haben, bis ihr Prozentrechnung in der Schule lernt.

Die Höhe in unserem Fall berechnet sich wie folgt:

* Das Minimum ist `25`.
* Zu diesem Minimum addieren wir den Abstand zur Maximalhöhe (`100 - 25 = 75`) multipliziert mit dem Index der Rakete `j` dividiert durch die Anzahl der Raketen `numberOfRockets` minus 1.

Die Formel lautet also: `height = 25 + 75 * j / (numberOfRockets - 1)`

Deine **Aufgabe** ist es, diese Formel in unseren Code einzubauen. So muss der Code nach der Änderung aussehen:

{{< highlight ts "hl_lines=5-8" >}}
for (let i = 0; i < 100; i++) {
  const size = 15;
  const numberOfRockets = 8;
  for (let j = 0; j < numberOfRockets; j++) {
    let height = 25 + 75 * j / (numberOfRockets - 1);
    fireworks.push(new Firework(p, p.random(360), (p.width * j) / (numberOfRockets - 1), height, size));
  }

  await delay(1000);
}
{{< /highlight >}}

Einen besonders schönen Effekt bekommst du, wenn du zwei Diagonalen gegenläufig erzeugst. Eine steigt von links nach rechts und die andere von rechts nach links.

{{< imgblock "img/formation-two-diagonals.svg" "Formation" >}}{{< /imgblock >}}

Das ist schwer theoretisch zu erklären, man muss es probieren. Deine **Aufgabe** ist es, den Code wie folgt zu ändern:

{{< highlight ts "hl_lines=5-10" >}}
for (let i = 0; i < 100; i++) {
  const size = 15;
  const numberOfRockets = 8;
  for (let j = 0; j < numberOfRockets; j++) {
    let height = 25 + 75 * j / (numberOfRockets - 1);
    fireworks.push(new Firework(p, 60, (p.width * j) / (numberOfRockets - 1), height, size));
    fireworks.push(new Firework(p, 120, (p.width * j) / (numberOfRockets - 1), 25 + 100 - height, size));
  }

  await delay(3000);
}
{{< /highlight >}}

## Abschluss

Zum Abschluss möchten wir noch einen Neujahrsglückwunsch zu unserem Feuerwerk hinzufügen. Das kannst du mit wenigen Zeilen Code in der `draw`-Funktion erledigen. Deine **letzte Aufgabe** für heute ist es, die `draw`-Funktion zu suchen und die folgenden Zeilen für die Textausgabe hinzuzufügen:

{{< highlight ts "hl_lines=5-9" >}}
function draw(p: p5) {
  p.colorMode(p.RGB);
  p.background(0, 0, 0, 25);

  p.fill('red');
  p.textSize(60);
  p.textStyle(p.BOLD);
  p.textAlign(p.CENTER, p.CENTER);
  p.text('Schönes,\nneues Jahr\n🍾🥂🎉', p.width / 2, p.height / 4);

  for (let i = fireworks.length - 1; i >= 0; i--) {
    ...
  }
}
{{< /highlight >}}

{{< imgblock "img/happy-new-year.png" "Happy New Year" >}}{{< /imgblock >}}
