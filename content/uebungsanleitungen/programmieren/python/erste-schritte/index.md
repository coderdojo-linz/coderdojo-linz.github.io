---
title: Erste Schritte mit Python
description: Diese Übung gibt eine erste Einführung in das Programmieren mit Python.
level: 1
weight: 1
img: "erste-schritte.png"
imgposition: "left top"
aliases: 
 - /trainingsanleitungen/python/python-erste-schritte.html
---

# Erste Schritte mit Python

Diese Übung gibt eine erste Einführung in das Programmieren mit Python.
Die Inhalte sind zum größten Teil aus dem Buch [Programmieren super*easy*](http://www.amazon.de/Programmieren-supereasy-Einfacher-Einstieg-SCRATCH/dp/3831027005/ref=sr_1_1?ie=UTF8&qid=1452990098&sr=8-1&keywords=programmieren+f%C3%BCr+kinder).


## Was ist Python?

Python ist eine Programmiersprache, die mit englischen Textbefehlen arbeitet. Sie ist etwas schwieriger als Scratch, dafür gibt es allerdings viel mehr Verwendungsmöglichkeiten.

Zur Vorbereitung werden wir nun zuerst Python installieren und uns dann mit der Oberfläche vertraut machen.


## Python installieren

Lade Python nun herunter und installiere es auf deinem Computer. Python 3 ist kostenlos, einfach zu installieren und funktioniert mit den Betriebssystemen Windows, Mac-OS und mit Linux-Systemen wie Ubuntu.

1. Gehe zur Python-Webseite [www.python.org](http://www.python.org).
2. Unter *Downloads* wähle die entsprechende Version (z.B. Python 3.5.1 für Windows (64-bit)).
3. Nach dem Herunterladen der Installationsdatei (z.B. python-3.5.1.exe), führe die Installation aus.
4. Starte nun die Programmierumgebung **IDLE** (**I**ntegrated **D**eve**L**opment **E**nvironment).
5. Nun sollest du (unter Windows) folgendes Fenster sehen:

{{< imgblock "img/IDLE-Windows.png" "" >}}{{< /imgblock >}}

## Das Shell-Fenster

Dieses Fenster nennt man das "Shell-Fenster". Wenn du hinter den 3 spitzen Klammern (> > >) Code einfügst und mit der ENTER-Taste bestätigtst, wird dieser Code sofort ausgeführt.

6. Lass uns das gleich ausprobieren. Gib nun folendes ein:   
   `print('Hello Python!')` und drücke die ENTER-Taste
   
   In der nächsten Zeile wird nun "**Hello Python!**" ausgegeben und darunter erscheinen sofort wieder die 3 spitzen Klammern und warten auf deine nächste Eingabe.

7. Als nächstes wollen wir testen, ob Python auch rechnen kann. Gibt dazu eine Rechnung ein, z.B. `3 + 2` und drücke ENTER.

   Tatsächlich denkt Python mit und liefert sofort das Ergebnis "**5**". Das funktioniert natürlich auch mit allen anderen Grundrechnungsarten (`+`, `-`, `*`, `/`) und den Klammern(`(`, `)`). Probier es aus.

8. Wie Scratch, kann sich Python auch Werte in Variablen merken und dann mit diesen arbeiten. Gib folendes ein:
   1. `a = 4` ENTER
   2. `b = 2` ENTER
   3. `a * b` ENTER
   4. `a + a - b` ENTER

   Nun sollte Python zuerst "8" ausgeben, weil es 4 * 2 gerechnet hat, und anschließend "6" (für 4 + 4 - 2).

9. Du kannst den Inhalt einer Variablen auch ändern. Gib foldendes ein:
   1. `b = 10` ENTER
   2. `a + b` ENTER

   Nun sollte die Ausgabe "14" lauten (4 + 10).


## Zeichnen mit der Schildkröte

Zum Abschluss noch ein kleiner Vorgeschmack darauf, was Python alles kann, zum Beispiel **Zeichnen**. Dazu benutzt Python eine Schildkröte (engl. *turtle*). Gib foldendes ein:

1. `from turtle import *` ENTER
2. `forward(100)` ENTER  
   Jetzt erscheint ein neues Fenster in dem die *Turtle* eine gerade, schwarze Linie von links nach rechts zieht.
3. `right(120)` ENTER
4. `forward(200)` ENTER
5. `left(120)` ENTER
6. `forward(100)` ENTER
7. `penup()` ENTER
8. `left(90)` ENTER
9. `forward(80)` ENTER
10. `right(90)` ENTER
11. `backward(20)` ENTER
12. `pendown()` ENTER
13. `backward(60)` ENTER
14. `penup()` ENTER
15. `forward(200)` ENTER

Nun haben wir ein schönes Z gezeichnet und die *Turtle* steht rechts daneben.

Mit `clear()` können wir unsere Zeichnung wieder löschen.

Das ist schon ein richtiges kleines Programm und es ist schade, dass wir daran keine Änderungen mehr vornehmen können, weil es sofort ausgeführt wurde und wir es nicht in einer Datei gespeichert haben. Aber keine Angst, genau das können wir mit Python natürlich auch machen.


## Das Code-Fenster

{{< imgblock "img/IDLE-NewFile.png" "Neue Datei öffnen" 3 >}}
Dazu öffnen wir nun ein neues Fenster, das sogenannte *Code-Fenster*. Klicke dazu mit der Maus im "Shell-Fenster" auf das Menü `File` und dort wiederum auf `New File`.
{{< /imgblock >}}

11. Schreibe nun die Befehle von vorhin noch einmal in das neue Fenster:

```python
from turtle import *

clear()
forward(100)
right(120) 
forward(200)
left(120)
forward(100)
penup()  
left(90)
forward(80)
right(90)
backward(20)
pendown()
backward(60)
penup()
forward(200)
```

12. {{< imgblock "img/IDLE-Save.png" "Datei speichern" 3 >}}
Jetzt speichern wir unser erstes Python-Programm aber sofort ab. Klicke dazu im Menü `File` auf `Save` (oder drücke STRG+S).
{{< /imgblock >}}

13. Starten können wir unser Programm, indem wir einfach F5 drücken (oder Menü `Run` und dort `Run Module` im Code-Fenster).
    Nun wir unser Z ganz von alleine in einem Zug gezeichnet. Cool!

14. Jetzt können wir unser Programm auch noch verändern, indem wir z.B. folgende Zeilen zwischen `clear()` und `forward(100)` (im Code-Fenster) einfügen:

```python
speed(1)
pencolor('blue')
pensize(8)
```
	
	Im Code-Fenster speichern wir wieder mit STRG-S und starten das Programm mit F5.


## Welches Fenster verwendest du wofür?

* **Code-Fenster**:
  Das Code-Fenster eigent sich gut für längere Programme, weil du sie speichern und bearbeiten kannst. Das ist leichter als immer wieder von vorne anzufangen, sobald du Abschnitte wiederholen oder ändern willst.

* **Shell-Fenster**:
  Das Shell-Fenster eignet sich gut für schnelle Experimente, wen du z.B. wissen willst, was ein Befehl bewirkt. Außerdem ist es ein praktischer "Taschenrechner".  
  Die Befehle werde aber nicht gespeichert, sodass du Dinge, die du öfter brauchst, doch lieber im Code-Fenster bearbeiten solltest.


## Hilfe

Zum Abschluss noch ein Tipp: Falls du mal nicht weiter weißt, bietet die IDLE schon eine direkt integrierte Hilfe-Funktion (drücke F1 oder Menü `Help` und `Python Docs`). Dort findest du viele hilfreiche Informationen, z.B. alle Befehle, die die *Turtle* versteht. Die Hilfe ist (natürlich) auf Englisch, wie so vieles gerade im IT-Bereich.
Wer trotzdem lieben auf Deutsch über Python nachschlagen will, der kann z.B. folgende Links versuchen:

* [Das Python-Tutorial](https://py-tutorial-de.readthedocs.org/de/python-3.3/)
* [Python 3 Tutorial](http://www.python-kurs.eu/python3_kurs.php)


Viel Spaß beim Ausprobieren!
