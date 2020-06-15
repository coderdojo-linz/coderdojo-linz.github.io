---
title: "Von Scratch zu Python"
description: "Du zeichnest eine geometrische Figur in Scratch und dann übersetzt du das Programm in die Programmiersprache Python."
---

# Von Scratch zu Python

Du zeichnest eine geometrische Figur in Scratch und dann übersetzt du das Programm in die Programmiersprache Python.

{{< imgblock "img/von-scratch-zu-python.png" "Von Scratch zu Python" >}}{{< /imgblock >}} 

## Voraussetzungen

Übungsbeispiel: [Erste Schritte in Python](../erste-schritte)

## Scratch

### Laden des Malstifts

Um in Scratch zu zeichnen, muss man zuerst die Erweiterung „Malstift“ laden. Klicke dazu auf das Symbol in der linken unteren Ecke und wähle dann den Malstift aus. Damit bekommst du einen neuen Eintrag „Malstift“ im Menü am linken Bildschirmrand und eine Menge neuer Blöcke, die du zum Zeichnen verwenden kannst.

{{< imgblock "img/scratch-malstift.png" "Scratch - Malstift" >}}{{< /imgblock >}}

### Neuer Block zum Zeichnen von Vielecken

Um ein beliebiges Vieleck (Fünfeck, Achteck, Siebzehneck, …) zu zeichnen, definieren wir einen eigenen Block, wo wir uns aussuchen können, wie viele Ecken und welche Seitenlänge es haben soll.

Gehe dazu unter dem Menüpunkt „Meine Blöcke“ auf „Neuer Block“. Nenne den Block Vieleck und füge zwei Eingabefelder für Zahl hinzu und nenne die Eingabefelder n (für die Anzahl der Ecken und a (für die Seitenlänge des Vielecks).

{{< imgblock "img/scratch-meine-bloecke.png" "Scratch - Meine Blöcke" >}}{{< /imgblock >}}

Um ein n-Eck zu zeichnen müssen wir einen Schritt mit der Seitenlänge a gehen, dann eine Drehung um 360/n machen und das Ganze n-Mal wieder wiederholen. (Für ein regelmäßiges Viereck, also ein Quadrat, wären das n Wiederholungen und dazwischen eine Drehung um 90 Grad.) Die roten Felder mit den Variablen n und a, die du hier brauchst, holst du einfach aus dem ersten Block „Definiere Vieleck“, indem du die gewünschte Variable einfach mit der Maus nach unten ziehst.

{{< imgblock "img/scratch-block-vieleck.png" "Scratch - Block Vieleck" >}}{{< /imgblock >}}
 
### Festlegen von Variablen

Wir definieren nun zwei Variablen Anzahl (für die Anzahl der Vielecke) und n (für die Anzahl der Ecken im Vieleck). Gehe dazu unter „Variablen“ auf „Neue Variable“ und gib die passenden Namen ein. Wenn du mit der rechen Maustaste auf die angezeigte Variable klickst, kannst du auch einen verstellbaren Schieberegler daraus machen.
 
{{< imgblock "img/scratch-schieberegler.png" "Scratch - Schieberegler" >}}{{< /imgblock >}}

### Mit vielen Vielecken ein buntes Muster zeichnen

Mit dem selbst definierten Block zum Zeichnen von Vielecken können wir nun ein buntes geometrisches Muster mit vielen Vielecken zeichnen.

Wenn das Spiel gestartet wird, dann führen wir folgende Schritte durch:

- Wir verstecken unsere Figur (Katze), da wir nur unsere Zeichnung haben wollen.
- Wir löschen alles, um immer wieder mit einem leeren Fenster zu starten.
- Wir schalten den Malstift ein.
- Die Stiftdicke setzten wir auf 2.
- Dann zeichnen wir so viele Vielecke, wie wir bei Anzahl ausgewählt haben. Dazu verwenden wir eine Schleife mit „Wiederhole Anzahl mal“,
- Die Farbe ändern wir bei jedem Vieleck zufällig.
- Zum Zeichnen des Vielecks verwenden wir unseren definierten Block, wobei wir als n die erstellte Variable verwenden und als Seitenlänge a = 50.
- Nachdem ein Vieleck gezeichnet wurde, drehen wir uns um 360/Anzahl Grad, um dann das nächste Vieleck zu zeichnen. 

{{< imgblock "img/zeichne-vielecke.png" "Scratch - zeichne Vielecke" >}}{{< /imgblock >}}
 
So kannst du zum Beispiel 30 verschiedenfärbige 9-Ecke zeichnen.

{{< imgblock "img/zeichne-vielecke-ergebnis.png" "Scratch - zeichne Vielecke" >}}{{< /imgblock >}}

## Python

Starte für Python die Programmierumgebung IDLE und öffne eine neue Datei (`File -> New File`) und speichere die Datei auf deinem Computer (`File -> Save As`).

### Laden von Packages

So wie du auch in Scratch eine eigene Erweiterung für den Malstift geladen hast, musst du auch in Python eine Erweiterung (Package) für das Zeichnen mit der Schildkröte (`turtle`) laden.

Auch für das Zufallszahlen (die wir dann für die zufällige Auswahl der Farben brauchen) ist es notwendig eine Funktion aus dem Package `random` zu laden.

```python
from turtle import *
from random import random
```
 
Da wir aus dem Package turtle mehrere Funktionen benötigen, laden wir hier alle Funktionen (mit dem Symbol *). Aus dem Package `random` laden wir nur die Funktion `random`.

### Neue Funktion zum Zeichnen von Vielecken

So wie wir in Scratch einen eigenen Block zum Zeichnen von Vielecken erstellt haben, definieren wir hier in Python eine eigene Funktion `vieleck` ebenfalls mit den Eingabewerten `n` und `a`.

```python
def vieleck(n, a):
    for i in range(n):
        forward(a)
        right(360/n)
```
 
Das n-malige Wiederholen geschieht mit einer `for`-Schleife, wobei die Variable `i` mitzählt.

Achtung: In Python beginnt man mit 0 beim Zählen und nicht bei 1 und die Zahl, die in range angegeben ist, zählt nicht mehr dazu. Also, wenn n = 10 ist, dann zählt i in range(n)von 0, 1, 2, … bis 9. Das sind aber dann trotzdem 10 Zahlen, du kannst gerne nachzählen.

Alles was in zu dieser `for`-Schleife gehört muss um vier Leerzeichen eingerückt werden (so wie du in Scratch die Blöcke in den Wiederholen-Block hineinpackst). `forward(a)` lässt die Turtle um a Schritte vorwärts gehen, `right(360/n)` machte eine Rechtsdrehung um 360/n Grad.

### Festlegen von Variablen

Wir definieren, so wie Scratch, Variablen für die Anzahl der Vielecke und die Anzahl der Ecken eines Vielecks. Auch die Seitenlänge des Vielecks legen wir gleich fest. Um deinen Python-Code auch später noch gut zu verstehen, ist es hilfreich, wenn du Kommentare einfügst. Alles was du hinter einem # schreibst, dient als Erklärung für dich, hat aber keinen Einfluss auf das Programm selbst.

```python
anzahl = 30 # Anzahl der Vielecke
n = 9       # Anzahl der Ecken des Vielecks
a = 50      # Seitenlänge des Vielecks
```
 
### Mit vielen Vielecken ein buntes Muster zeichnen

Nun können wir mit dem eigentlichen Programm beginnen:

- Wir löschen das Fenster zu Beginn.
- Dann schalten wir den Turbo unserer Turtle ein und erhöhen die Geschwindigkeit auf 100. 
- Die Stiftdicke setzen wir auf 3.
- In einer Schleife machen wir wieder so viele Wiederholungen, wie wir als anzahl vorgegeben haben.
- Die Stiftfarbe wählen wir zufällig. Eine Zufallszahl bekommst du mit dem Befehl random(). Eine Farbe kann man über ihren Rot-, Grün- und Blau-Anteil festlegen, daher verwenden wir hier 3 Zufallszahlen.
- Das Vieleck zeichnen wir mit der zuvor definierten Funktion.
- Nach jedem Vieleck machen wir eine Drehung um 360/anzahl Grad.

```python
clear()
speed(1000)
pensize(3)

for i in range(anzahl):
    pencolor(random(), random(), random())
    vieleck(n, a)
    left(360/anzahl)
```
 
Wenn du diesen Code fertig geschrieben hast, speichere die Datei nochmals mit `File -> Save` (oder drücke STRG+S). Um dann das Programm zu starten kannst du im Menü `Run -> Run Module` auswählen oder schneller einfach F5 drücken.

Du erhältst dann das Bild, das zu Beginn dieser Anleitung zu sehen ist (vermutlich mit etwas anderen Farben).

## Erweiterungsmöglichkeiten
- Wie könntest du (zumindest annähernd) Kreise zeichnen?
- Du könntest im Programm abfragen, wie viele Ecken das n-Eck haben soll, wie viele Vielecke gezeichnet werden sollen oder wie groß sie sein sollen. (Sieh dir dazu die Übungsanleitung „Zahlen raten mit Python“ an.)
