---
title: "Alien"
description: "Mit dem Package Tkinter zeichnen wir einen Alien und lassen ihn auf Tastendruck reagieren."
level: 1
img: "alien.png"
---

# Wir zeichnen einen Alien

Mit dem Package `Tkinter` zeichnen wir einen Alien und lassen ihn auf Tastendruck reagieren. Die Beschreibung erfolgt in Anlehnung an Beispiele aus dem Buch [Programmieren supereasy](https://www.amazon.de/Programmieren-supereasy-Einfacher-Einstieg-SCRATCH/dp/3831027005/ref=sr_1_1?ie=UTF8&qid=1452990098&sr=8-1&keywords=programmieren+f%C3%BCr+kinder).

{{< imgblock "img/alien.png" "Alien" >}}{{< /imgblock >}}

## Voraussetzungen
Übungsbeispiele [Erste Schritte in Python](../erste-schritte) und [Von Scratch zu Python](../von-scratch-zu-python).

## Python

Starte für Python die Programmierumgebung IDLE und öffne eine neue Datei (`File -> New File`) und speichere die Datei als Dateityp auf deinem Computer (`File -> Save A`). Wähle als Dateityp .pyw, wenn du mit Windows arbeitest.

## Laden von Packages

Für dieses Beispiel verwenden wir das Package `tkinter`. Damit kann man Fenster und Schaltflächen für eine grafische Benutzeroberfläche erstellen, aber auch Formen zeichnen.

```python
from tkinter import *
```
 
## Ein Fenster mit einer Leinwand erstellen

Zuerst erzeugen wir ein neues Fenster, das wir `window` nennen. Diesem Fenster kann man auch einen Namen geben (z. B. „Alien“). Dieses Fenster erscheint, wenn man das Programm mit F5 laufen lässt. Damit dieses Fenster immer gleich im Vordergrund ist, kann man das bei den Attributen einstellen.

```python
window = Tk()
window.title("Alien")
window.attributes("-topmost", 1)
c = Canvas(window, height=400, width=400, bg="yellow")
c.pack()
```

Um auch etwas zeichnen zu können, benötigen wir eine Leinwand (auf Englisch `Canvas`). Diese Leinwand kommt in unser Fenster, wir legen die Höhe (`height`), die Breite (`width`) und die Farbe des Hintergrunds (`bg` für background) fest. Die Leinwand nennen wir kurz `c` und packen sie in unser Fenster.

## Das Koordinatensystem in Tkinter

In Tkinter ist der Koordinatenursprung in der linken oberen Ecke des Fensters. Wenn unser Fenster 400 Pixel breit und 400 Pixel hoch ist, dann sieht das in etwa so aus:

{{< imgblock "img/koordinatensystem.png" "Koordinatensystem" >}}{{< /imgblock >}}

Der rot eingezeichnete Punkt wird dann durch seine waagrechte Entfernung x = 200 und seine Entfernung nach unten y = 100 beschrieben.

## Einen Alien zeichnen

Nun können wir einfache Formen erzeugen und damit einen Alien auf unsere Leinwand c zeichnen:

- Der Körper ist oval und grün. Die Zahlen in c.create_oval sind immer abwechselnd x und y Koordinaten und geben die linke obere Ecke und die rechte untere Ecke an.
 
- Das Auge ist ein weißer Kreis, der ebenfalls durch zwei Punkte festgelegt wird.
{{< imgblock "img/create-oval.png" "c.create_oval" >}}{{< /imgblock >}}
- Die Pupille ist ein schwarzer Kreis in der Mitte des Auges.
- Der Mund ist oval und rot.
- Der Hals ist eine Linie mit Dicke (width) 10, die das Auge und den Körper verbindet.
- Der Hut ist ein blau gefülltes Dreieck, das durch drei Eckpunkte beschrieben wird:  
A(160, 75), B(240, 75), C(200, 20).

```python
# Wir zeichnen einen Alien
körper = c.create_oval(100, 150, 300, 250, fill="green")
auge = c.create_oval(170, 70, 230, 130, fill="white")
pupille = c.create_oval(190, 90, 210, 110, fill="black")
mund = c.create_oval(150, 220, 250, 240, fill="red")
hals = c.create_line(200, 150, 200, 130, width=10)
hut = c.create_polygon(160, 75, 240, 75, 200, 20, fill="blue")
```
 
## Den Mund und die Augen animieren

Wir definieren Funktionen, die das Öffnen und Schließen von Mund und Auge simulieren. Achte beim Schreiben der Funktionen auf den Doppelpunkt in der ersten Zeile und die Einrückungen in den folgenden Zeilen.

- Wenn der Mund offen ist, wird er schwarz dargestellt, wenn er zu ist, dann ist er wieder rot.
- Wenn das Auge geschlossen ist, dann ist es grün, so wie der Körper und die Pupille verstecken wir.
- Wenn das Auge offen ist, wird es wieder weiß und die Pupille ist sichtbar.

```python
# Mund auf und zu
def mund_auf(event):
        c.itemconfig(mund, fill="black")

def mund_zu(event):
        c.itemconfig(mund, fill="red")

# Auge zu und auf
def auge_zu(event):
        c.itemconfig(auge, fill="green")
        c.itemconfig(pupille, state=HIDDEN)

def auge_auf(event):
        c.itemconfig(auge, fill="white")
        c.itemconfig(pupille, state=NORMAL)
```
 
Diese Funktionen kombinieren wir nun mit dem Drücken von bestimmten Tasten:

```python
c.bind_all("<KeyPress-a>", auge_auf)
c.bind_all("<KeyPress-z>", auge_zu)
c.bind_all("<KeyPress-b>", mund_zu)
c.bind_all("<KeyPress-o>", mund_auf)
```
 
## Text hinzufügen

Wir schreiben noch einen erklärenden Text in das Fenster. Hier geben die beiden Zahlen wieder die x und y Koordinaten der Textposition an. Mit dem Symbol \ kann man einen Zeilenumbruch im Code machen, wenn dieser zu lang für eine Zeile wird.

```python
# Text
text1 = c.create_text(200, 280, text = "Drücke a und z \
um meine Augen auf und zu zu machen.")
text2 = c.create_text(200, 300, text = "Drücke b und o, \
um meinen Mund auf und zu zu machen.")
```
 
## Aktivierung des Fensters

Zu guter Letzt gibt es noch einen Befehl, um das Fenster zu aktivieren:

```python
# Aktivierung des Fensters
window.mainloop()
```
 
Wenn du nun das Programm speicherst (STRG + S), kannst du es ausführen (F5). Probiere, ob dein Alien auf die Tastendrücke richtig reagiert!

## Erweiterungsmöglichkeiten

- Ändere die Farben und Formen deines Aliens.
- Kannst du einen Alien mit zwei Augen zeichnen? Passe auch die Funktionen zum Öffnen und Schließen der Augen an.

Hier kannst du den gesamten [Sourcecode downloaden](source/Python_Alien.pyw).