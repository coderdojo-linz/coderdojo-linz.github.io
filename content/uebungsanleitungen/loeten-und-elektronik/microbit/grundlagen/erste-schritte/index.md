---
title: "Erste Schritte"
description: "Baue dein erstes Programm für den micro:bit."
weight: 3
img: "erste-schritte.jpg"
---

# Deine ersten Schritte mit micro:bit - Blockprogrammierung

Der BBC micro:bit ist ein kleiner anprogrammierbarer Computer mit Bewegungssensoren und Kompass. Weitere Informationen und einer ausführerlichen Anleitung zu den ersten Schritten gibt es [hier](http://microbit.org/de/guide/).

## Ausstattung
{{< imgblock "img/microbit_Front.gif" "" >}}{{< /imgblock >}}

In der Mitte befinden sich 25 LED-Lämpchen in einem 5x5 Raster. Links hast du den A-Knopf (Button) und rechts den B-Knopf. Auf der Rückseite befinden sich die Anschlüsse für das Batteriefach und ein Micro-USB-Kabel.


## Verbinde den micro:bit
Um zu Beginnen verbinde deinen micro:bit mit dem zusätzlichen Batteriefach oder mit einem USB-Kabel mit deinem Laptop.

Drücke die Knöpfe (Buttons) wenn dich dein micro:bit mit Lichtzeichen (A und B) dazu auffordert. 

## Entwicklungsumgebung

Öffne in einem Webbrowser die folgende URL: [https://makecode.microbit.org/](https://makecode.microbit.org/) 

{{< imgblock "img/microbit_startpage.JPG" "Startseite von https://makecode.microbit.org/" >}}{{< /imgblock >}}

Das ist der Editor mit dem wir ähnlich wie bei Scratch mit den bunten Blöcken oder mit JavaScript programmieren können. 

## Erstes Programm - Würfel

Dein erstes Programm soll einen zufälligen Würfelwurf nachstellen. Wenn der micro:bit geschüttelt wird soll er danach eine Augenzahl von 1-6 anzeigen.

1. Lege eine Variable für die Zufallszahl an.

   {{< imgblock "img/microbit_wuerfel_01.PNG" "" >}}{{< /imgblock >}}

2. Bei Eingabe können wir auf das Schütteln reagieren und uns eine Zufallszahl speichern. Unter Mathematik findest du den Block für eine Zufallszahl. Zufallszahlen starten immer bei 0, daher benötigen wir eine Zufallszahl von 0-5. Ist die Zufallszahl eine 0, dann zeigt der Würfel eine 1. Ist die Zahl eine 5, zeigt der Würfel eine 6. 

{{< imgblock "img/microbit_wuerfel_02.PNG" "" >}}{{< /imgblock >}}

3. Für die Entscheidung welche Augenzahl angezeigt werden soll verwendest du den Wenn-Dann-Block und den Vergleichsoperator = unter Logik. Mit dem Zeige-LEDs-Block unter Grundlagen kannst du einzelne LEDs zum Leucht bringen und somit ein Muster für die Augenzahlen entwerfen.

{{< imgblock "img/microbit_wuerfel_03.PNG" "" >}}{{< /imgblock >}}

4. Probiere die weiteren Augenzahlen selbstständig zu lösen.

### Übertragung des Programms auf den micro:bit 

Um das ganze jetzt auszuprobieren muss das Programm auf den micro:bit übertragen werden. Dazu muss der micro:bit über ein USB-Kabel mit dem Laptop verbunden sein.

1. Lade das Programm vom Webbrowser herunter.
2. Öffne den Ordner in den du das Programm heruntergeladen hast.
3. Übertage das Programm auf den Microbit. Klicke mit der rechten Maustaste auf die Datei um das Context Menu zu öffnen. (Oder kopiere in von den Ordner auf den Micro:bit).

{{< imgblock "img/microbit_wuerfel_06.PNG" "" >}}{{< /imgblock >}}

### Fertiges Programm

Das fertige Programm könnten so aussehen:
{{< imgblock "img/microbit_wuerfel_04.PNG" "" >}}{{< /imgblock >}}
