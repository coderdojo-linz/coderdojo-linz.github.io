---
layout: sushi
title: Scratch The Game of Life
description: Erwecke Zellen zum Leben.
scratch-images:
- scratch-the-game-of-life/the-game-of-life.png
- scratch-the-game-of-life/funktion-insert-pattern.png
scratch-level: 3
scratch-sprites: 2
scratch-scripts: 21
scratch-data: 20
---

# The Game of Life

Die Idee zu „The Game Of Life“ geht auf den Mathematiker John Conway zurück. Das Spielfeld besteht aus einem großen Raster von Zellen, die zwei Zustände haben können: „tot“ (weiß) oder „lebendig“ (farbig). Basierend auf dem Zustand des Rasters wird die nächste Generation von Zellen berechnet, und zwar nach folgenden Regeln:

* Eine tote Zelle mit genau drei lebenden Nachbarn wird neu geboren
* Lebende Zellen mit weniger als zwei lebenden Nachbarn sterben an Einsamkeit
* Lebende Zellen mit zwei oder drei lebenden Nachbarn bleiben am Leben
* Lebende Zellen mit mehr als drei lebenden Nachbarn sterben an Überbevölkerung

<p class="center"><img alt="The Game of Life" src="scratch-the-game-of-life/the-game-of-life.png" /></p>

Durch diese einfachen Regeln können aus bestimmten Anfangsmustern komplexe Strukturen entstehen. Es gibt stabile Muster, oszillierende Objekte wie Pulsare oder sogar Raumschiffe. Wer weiß, vielleicht entsteht auf deinem Raster irgendwann eine neue künstliche Lebensform? Durch Klick in das Grid wird das vorausgewählte Muster angelegt.

Du kannst das fertige Spiel unter [https://scratch.mit.edu/projects/96326891](https://scratch.mit.edu/projects/96326891){:target="_blank"} auch gleich ausprobieren.

Das Spiel besteht aus 2 Figuren und 21 Skripten.

## Die Figuren und Skripte

Wir benötigen nur zwei Figuren namens „Selection“ und „Grid“. Selection dient der Anzeige eines einfachen Befehlsmenüs im unteren Bereich. Grid ist unser Spielfeld, das sich fortlaufend selbst neu zeichnet.

![Figuren](scratch-the-game-of-life/figuren.png)

## Die Figur Selection

![Kostüme Selection](scratch-the-game-of-life/kostueme-selection.png)

Für die Figur Selection benötigen wir sechs Kostüme für die sechs Kommandos, die man via Mausklick ausführen kann. Verwende dazu das Textwerkzeug, und schreibe die Namen der Kommandos wie oben angegeben in das Zeichenfeld. Setze den Drehpunkt der Kostüme jeweils in das linke untere Eck des Textbereichs. Wähle den Textbereich nicht zu groß, damit die Befehle nebeneinander Platz haben. Eine Höhe von etwa 20 Pixeln geht sich gut aus. Alternativ kannst du die Figur ohne Skripte auch hier herunterladen und in dein Projekt importieren:

[Selection.sprite2](scratch-the-game-of-life/Selection.sprite2)

Die Skripte von Selection sind relativ einfach. Sie dienen dazu die Menükommandos zu zeichnen, und bei Mausklick entsprechende Nachrichten an das Grid zu senden:

![Skripte Selection](scratch-the-game-of-life/skripte-selection.png)

## Die Figur Grid

Hier ist das eigentliche Spiel implementiert. Das Grid zeichnet sich mit dem Malstift selbst, daher hat es nur ein leeres Kostüm:

![Kostüme Grid](scratch-the-game-of-life/kostueme-grid.png)

Nun können wir die Variablen anlegen. Bitte erstelle alle Variablen für „Nur für diese Figur“, also für die Figur Grid:

![Daten Grid](scratch-the-game-of-life/daten-grid.png)

Jetzt müssen wir das Grid noch programmieren. Wir beginnen mit Funktionsblöcken, die wir später im Hauptprogramm benötigen werden.

InsertPattern dient dem Einfügen von Mustern in das Grid. Wichtig: Selektiere bei allen Blöcken „Ohne Bildschirmaktualisierung laufen lassen“, sonst ist das Programm zu langsam.

![Neue Funktion anelgen](scratch-the-game-of-life/neue-funktion.png)

![Funktion InsertPattern](scratch-the-game-of-life/funktion-insert-pattern.png)

In CalcNextGeneration wird die nächste Generation von Zellen berechnet:

![Funktion CalcNextGeneration](scratch-the-game-of-life/funktion-calc-next-generation.png)

Paint dient dem Zeichnen des Grids mit dem Malstift. In InitGrid wird das Grid leer befüllt:

![Funktionen Paint und InitGrid](scratch-the-game-of-life/funktion-paint-und-init-grid.png)

Nun folgt das Hauptprogramm, das zuerst alle Variablen initialisiert, und dann in einer Hauptschleife die Neuberechnung und das Zeichnen des Grids aufruft. Außerdem wird abgefragt, ob neue Muster einzufügen sind.

![Skripte Grid](scratch-the-game-of-life/skripte-grid-1.png)

Zuguterletzt benötigen wir noch einige Funktionen zur Nachrichtenbehandlung:

![Skripte Grid](scratch-the-game-of-life/skripte-grid-2.png)

Wie du siehst definieren wir hier die beiden großen Muster GliderGun und Pulsar. Wie das Grid selbst bestehen sie aus einer langen Zeichenkette von 0en und 1en – so lange, dass man sie gar nicht in einer Zeile drucken kann. Daher hier nochmal zum Abtippen oder Kopieren aus dem Internet:

GliderGun:<br/>
000000000000000000000000100000000000<br/>
000000000000000000000010100000000000<br/>
000000000000110000001100000000000000<br/>
000000000001000100001100000000000011<br/>
110000000010000010001100000000000011<br/>
110000000010001011000010100000000000<br/>
000000000010000010000000100000000000<br/>
000000000001000100000000000000000000<br/>
000000000000110000000000000000000000

Pulsar:<br/>
0011100011100<br/>
0000000000000<br/>
1000010100001<br/>
1000010100001<br/>
1000010100001<br/>
0011100011100<br/>
0000000000000<br/>
0011100011100<br/>
1000010100001<br/>
1000010100001<br/>
1000010100001<br/>
0000000000000<br/>
0011100011100<br/>


## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/96326891](https://scratch.mit.edu/projects/96326891){:target="_blank"} ausprobieren.

Diese Variante wurde weiter verbessert, und berechnet bzw. zeichnet ein Grid mit hundertfacher Zellenanzahl in zehnfacher Geschwindigkeit (Gesamt-Speedup = 1000). Das wird erreicht, indem das Programm sich merkt welche Zellen zuletzt verändert wurden, und welche Nachbarzellen neu berechnet werden müssen. Weiters werden 65536 Zellengruppen-Veränderungen zu Beginn einmal vorberechnet, und müssen dann nicht jedesmal neu kalkuliert werden. Und das Grid wird nicht als Zeichenkette gespeichert, sondern als Liste von Zahlen, wobei eine Zahl gleich mehrere Zellen beinhaltet.

Die Skripte werden dadurch allerdings auch etwas komplizierter. Solche Geschwindigkeitsverbesserungen sind eine wichtige Aufgabe in der Software-Entwicklung. 
