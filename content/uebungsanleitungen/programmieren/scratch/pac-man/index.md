---
title: "Pac Man"
description: "Friss dich durch's Labyrinth."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 3
version: 3
scratch-sprites: 3
scratch-scripts: 19
scratch-data: 28
aliases:
- /trainingsanleitungen/scratch/scratch-pac-man-v3.html
- /trainingsanleitungen/scratch/scratch-pac-man.html
---

Pac-Man ist ein klassisches Computerspiel. Es erschien erstmals 1980 in Japan.

Pac-Man muss alle bunten Pillen einsammeln, ohne den Geistern in die Arme zu laufen. Die blauen Pillen verleihen ihm für kurze Zeit Superkräfte, und er kann Geister einfrieren.

## Vorbereitungen

{{< imgblock "img/figuren.png" "Figuren" >}}
Grafiken und Musik stellen dir deine Mentoren gerne via Memorystick zur Verfügung, bzw. kannst du sie auch unter [pac-man.zip](pac-man.zip) herunterladen.
Für das Spiel benötigen wir ein Bühnenbild, und insgesamt drei Figuren: PacMan, Ghost und Pill.
{{< /imgblock >}}

## Downloads

[Stage](Stage.png)

[PacMan](PacMan.sprite3)

[Ghost](Ghost.sprite3)

[Pill](Pill.sprite3)

## Die Bühne *Stage*

{{< imgblock "img/daten-stage.png" "Daten" 4 >}}
In das Bühnenbild lädst du bitte die Grafik *Stage.png* und den Klang *PacMan.mp3*. Auf der Bühne wollen wir auch die globalen Variablen definieren, und eine Liste namens *GridDef*:
{{< /imgblock >}}

{{< imgblock "img/code-buehne-1.png" "Code Bühne" 4 >}}
Weiters beinhaltet die Bühne Codeblöcke für den Spielstart und das Abspielen der Hintergrundmusik:

Die Grid-Daten stehen in der Liste *GridDef*. Jeder Listen-Eintrag beinhaltet eine Ziffernkette. Die Ziffern bestimmen wie das jeweilige Gridfeld aussieht, und zwar nach folgendem Schema:

0 = Wand

1 = Gelbe Pille

2 = Blaue Pille

3 = Leer

4 = Tunnel
{{< /imgblock >}}

Damit du das nicht alles einzeln abtippen musst, hier nochmal die Daten in Textform; wenn du diese Seite im Internet unter [http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man.html](http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man.html) aufrufst, kannst du Zeile für Zeile in die Zwischenablage kopieren und in dein Skript einfügen.

```shell
0000000000000000000000000000000000000000000000000000
0111111111111001111111111001111111111001111111111110
0100001000001001000000001001000000001001000001000010
0100001000001001000000001001000000001001000001000010
0100001000001001000000001001000000001001000001000010
0211111111111111111111111111111111111111111111111120
0100001001000000001001000000001001000000001001000010
0100001001000000001001000000001001000000001001000010
0111111001111001111001111001111001111001111001111110
0000001001001001000000001001000000001001001001000000
0000001001001001000000001001000000001001001001000000
0000001001001111111001111111111001111111001001000000
0000001001001000001001000030001001000001001001000000
0000001001001000001001000030001001000001001001000000
0411111111111001111111000030001111111001111111111140
0000001001000001000001000000001000001000001001000000
0000001001000001000001000000001000001000001001000000
0000001001111111111001111111111001111111111001000000
0000001001000000001001000000001001000000001001000000
0000001001000000001001000000001001000000001001000000
0211111111111001111111111001111111111001111111111120
0100001000001001000000001001000000001001000001000010
0100001000001001000000001001000000001001000001000010
0111001111111111111111111111111111111111111111001110
0001001001000000001001000000001001000000001001001000
0001001001000000001001000000001001000000001001001000
0111111001111001111001111001111001111001111001111110
0100000000001001000000001001000000001001000000000010
0100000000001001000000001001000000001001000000000010
0111111111111111111111111111111111111111111111111110
0000000000000000000000000000000000000000000000000000
```

{{< imgblock "img/code-buehne-2.png" "Daten GridDef" >}}{{< /imgblock >}}

## Die Figur *Pac-Man*

PacMan besteht aus acht Kostümen, für jeweils jede Richtung und einmal mit geschlossenem, einmal mit offenem Mund. Lade dazu einfach die *PacMan.png* Grafiken in die Figur.

{{< imgblock "img/pac-man.png" "Kostüme Pac Man" >}}
Die PacMan Codeblöcke sind relativ umfangreich. Hier die benötigten Variablen, bitte denke daran, dass du sie als *Nur für diese Figur* definierst (außer PosX, PosY, Level, Life und Points, die wir ja schon global in der Bühne definiert haben):
{{< /imgblock >}}

{{< imgblock "img/daten-pac-man.png" "Daten Pac Man" 6 >}}{{< /imgblock >}}

Wir verwenden wieder rosa Blöcke zur Wiederverwendung von Code. Bitte achte darauf, dass du dabei immer die Option *Ohne Bildschirmaktualisierung laufen lassen* selektierst, sonst könnte es sein, dass dein Programm zu langsam ist.

Hier läuft ein sogenannter Timer, damit PacMan nach zehn Sekunden seine Superkräfte auch wieder verliert. Der *Reset*-Block dient dem Zurücksetzen auf den Ursprungszustand von PacMan. Die Tastatursteuerung ist hier ebenfalls implementiert.

{{< imgblock "img/code-pac-man-1.png" "Code Pac-man" >}}{{< /imgblock >}}

{{< imgblock "img/code-pac-man-2.png" "Code Pac-man" >}}{{< /imgblock >}}

Das PacMan-Hauptprogramm läuft in einer Schleife bis alle Leben verbraucht sind. Wird ein Geist berührt, verliert man ein Leben und PacMans Aussehen ändert sich.

Weiters wird die Bewegungsrichtung abgefragt, und PacMan bewegt sich im Grid entsprechend weiter. Jeder Schritt entspricht drei Bildschirmpixeln, und nach drei Schritten (also neun Pixeln) ist das nächste Grid-Feld erreicht. Wenn PacMan an einer Wand ansteht, stoppt die Bewegung.
Und wenn wir den Tunnel erreicht haben, wird der Block *HandlePortal* aufgerufen.

Am Schluss ändern wir noch die Bewegungsrichtung, falls in der Zwischenzeit eine Taste gedrückt wurde, und wenn wir abbiegen können. Das erlaubt dem Spieler schon vorzeitig Tasten zu drücken (noch bevor eine Abzweigung erreicht ist), und dadurch kann man PacMan sehr schnell lenken.

{{< imgblock "img/code-pac-man-3.png" "Code Pac-man" >}}{{< /imgblock >}}

Im Block *HandlePortal* durchsuchen wir die Grid-Definition nach dem Gegenportal, das ebenfalls den Wert *4* hat, und setzen PacMans Position neu.

{{< imgblock "img/code-pac-man-4.png" "Code Pac-man" >}}{{< /imgblock >}}

Schließlich benötigen wir noch folgenden Code für die Animation von PacMan; je nach Richtung wird eine andere Figur ausgewählt:

{{< imgblock "img/code-pac-man-5.png" "Code Pac-man" >}}{{< /imgblock >}}

## Die Figur *Ghost*

{{< imgblock "img/ghosts.png" "Kostüme Ghost" 3 >}}
Ghost hat drei Kostüme, Ghost1, Ghost2 und Ghost3, die du wieder auf dem Memorystick oder im Download-Archiv findest.
{{< /imgblock >}}

{{< imgblock "img/daten-ghosts.png" "Daten Ghost" 3 >}}
Die drei Geister werden wir als Klone erzeugen, daher ist es besonders wichtig alle Variablen von Ghost als *Nur für diese Figur* zu definieren, denn sonst gäbe es sie nur einmal global, und nicht für jeden Klon.
{{< /imgblock >}}

{{< imgblock "img/code-ghost-1.png" "Code Ghost" 4 >}}
Beim Start des Spieles klonen wir die drei Geister und setzen sie auf ihre Positionen.
{{< /imgblock >}}

{{< imgblock "img/code-ghost-2.png" "Code Ghost" >}}
In der Ghost-Hauptschleife bewegen wir den Geist ähnlich durch das Grid wie zuvor PacMan. Wird er von PacMan mit Superkräften berührt, so friert er für zehn Sekunden ein. Die Geister werden auch mit jedem Level schneller. Und wir rufen den Block *CalcNextDir* auf, um zu berechnen, wohin der Geist laufen soll.
{{< /imgblock >}}

Im Block *CalcNextDir* versucht der Geist möglichst rasch an PacMan heranzukommen. Dazu berechnen wir in welcher Richtung und wie weit entfernt PacMan steht. Ergibt sich eine Möglichkeit eine Abzweigung zu nehmen um die Distanz zu verkürzen, machen wir das durch Richtungswechsel; einem kleinen Zufallsfaktor folgend tun wir das aber nicht immer, dadurch vermeiden wir ein *Hängenbleiben* hinter Ecken, und auch, dass sich zwei Geister nebeneinander immer gleich bewegen. Wenn keine eindeutige Strategie möglich ist, wählen wir die nächste Richtung zufällig. Mit den *GridDef > 0*-Abfragen prüfen wir, ob der Geist das nächste Feld betreten kann.

{{< imgblock "img/code-ghost-3.png" "Code Ghost" >}}{{< /imgblock >}}

## Die Figur *Pill*

{{< imgblock "img/pill.png" "Kostüme Pill" 3 >}}
Die beiden Kostüme der Pillen können wir einfach aus der Scratch-Bibliothek laden (*Ball*).
{{< /imgblock >}}

{{< imgblock "img/daten-pill.png" "Daten Pill" 3 >}}
Wir benötigen folgende Variablen:
{{< /imgblock >}}

{{< imgblock "img/code-pill-1.png" "Code Pill" 6 >}}
Bei Spielstart befüllen wir das Grid mit den Pillen:
{{< /imgblock >}}

{{< imgblock "img/code-pill-2.png" "Code Pill" 4 >}}
Wenn PacMan seine Position verändert, fragen wir ab ob er eine Pille berührt, und löschen sie vom Bildschirm. Außerdem müssen wir auch den *GridDef*-Eintrag an der entsprechenden Stelle aktualisieren, denn das Feld ist jetzt leer. Und wir stellen hier fest, ob alle Pillen gegessen wurden - denn dann können wir den nächsten Level aktivieren.
{{< /imgblock >}}

{{< imgblock "img/code-pill-3.png" "Code Pill" >}}{{< /imgblock >}}
