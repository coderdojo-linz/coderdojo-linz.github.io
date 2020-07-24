---
title: "Fang mich"
description: "Wir verwenden das Package Tkinter um ein einfaches Spiel in Python zu programmieren. Der Fisch, den du mit Pfeiltasten steuern kann, versucht dem Hai zu entkommen, damit er nicht von ihm gefressen wird."
level: 1
img: "fang-mich.png"
imgposition: "left top"
---

# Fang mich

Wir verwenden das Package Tkinter um ein einfaches Spiel in Python zu programmieren. Der Fisch, den du mit Pfeiltasten steuern kann, versucht dem Hai zu entkommen, damit er nicht von ihm gefressen wird.

{{< imgblock "img/fang-mich.png" "" >}}{{< /imgblock >}}

## Voraussetzungen

Übungsbeispiel [Alien](../alien), um schon erste Erfahrungen mit Python und Tkinter gesammelt zu haben.

## Python

Starte für Python die Programmierumgebung IDLE und öffne eine neue Datei (`File -> New File`) und speichere die Datei als Dateityp auf deinem Computer (`File -> Save As`). Wähle als Dateityp `.pyw`, wenn du mit Windows arbeitest.

## Laden von Packages

Für dieses Beispiel benötigen wir einige Packages:

- `tkinter` für die Darstellung des Hintergrunds und aller Figuren
- `PIL` um Bilder zu drehen
- `random` zum Erzeugen von Zufallszahlen 
- Die Funktion `sleep` aus dem Package `time` um Pausen zwischen den Bewegungen einzufügen.
- `math` für ein paar mathematische Funktion, wie z. B. die Wurzelfunktion

```python
from tkinter import *
from PIL import ImageTk, Image
from time import sleep
from random import randint
import math
```
 
## Ein Fenster mit einer Leinwand erstellen

Zuerst erzeugen wir ein neues Fenster, das wir window nennen. Als Titel wählen wir „Fang mich“. Die Leinwand wird 800 Pixel hoch und 1000 Pixel breit.

```python
# Leinwand erstellen
window = Tk()
window.title("Fang mich")
H = 800
B = 1000
c = Canvas(window, height = H, width = B)
c.pack()
```
 
## Hintergrund erstellen und Figuren laden

Wir benötigen für dieses Spiel 3 Bilder: [Unterwasserwelt.png](img/Unterwasserwelt.png) für den Hintergrund und [Fisch.png](img/Fisch.png) und [Hai.png](img/Hai.png) für die Figuren. Lade die Bilder herunter und speichere sie in das gleiche Verzeichnis wie dein Python-Programm. Dann laden wir alle Bilder in Python und zeichnen den Hintergrund und den Fisch auf unsere Leinwand. Der Hai kommt etwas später dazu. Er wird zuerst noch gedreht, daher verwenden wir für ihn auch die Funktion `Image` aus dem Package `PIL`.

```python
# Hintergrund erstellen
bg_image = PhotoImage(file="Unterwasserwelt.png")
bg = c.create_image(0, 0, anchor = NW, image=bg_image)

# Figuren laden
fish_image = PhotoImage(file="Fisch.png")
fish = c.create_image(0, 0, image=fish_image)
hai_img = Image.open("Hai.png")
```
 
## Den Fisch bewegen

Der Fisch wird mit den Pfeiltasten gesteuert. Bei jedem Tastendruck ändert sich die Position des Fisches um seine Geschwindigkeit, die wir hier mit 100 festlegen. 

- Wird die Pfeiltaste „rechts“ gedrückt, wird die x -Koordinate um 100 größer, bei „links“ um 100 kleiner. Die y-Koordinate ändert sich nicht. 
- Bei Pfeiltaste „unten“ wird die y-Koordinate größer, bei „oben“ wird die y-Koordinate kleiner. (Der Koordinatenursprung ist links oben!) die x-Koordinate bleibt gleich.
- Damit der Fisch sich nicht über den Rand der Leinwand hinausbewegen kann, fragen wir zuerst seine Koordinaten x und y ab. Der Fisch wird nur bewegt, wenn er auch nach der Bewegung innerhalb der Leinwand bleibt.

```python
# Fisch bewegen
FISH_GESCHW = 100
FISH_R = 75
def move_fish(event):
    x, y = c.coords(fish)
    if event.keysym == "Left":
        if x >= FISH_GESCHW:
            c.move(fish, -FISH_GESCHW, 0)
    elif event.keysym == "Right":
        if x <= B - FISH_GESCHW:
            c.move(fish, FISH_GESCHW, 0)
    elif event.keysym == "Up":
        if y >= FISH_GESCHW:
            c.move(fish, 0, -FISH_GESCHW)
    elif event.keysym == "Down":
        if y <= H - FISH_GESCHW:
            c.move(fish, 0, FISH_GESCHW)
window.bind("<Key>", move_fish)
```
 
## Hauptschleife – 1. Test

Nun ist es an der Zeit, die Bewegung des Fisches zu Testen und auch den Hai schon einmal auftauchen zu lassen. Den Hai platzieren wir in der Mitte des Fensters und setzen dafür die Koordinaten des Hais (`hai_x` und `hai_y`) auf die halbe Breite und halbe Höhe des Fensters. Zu Beginn ist die Richtung des Hais 0, d. h. er schaut nach rechts. In einer Endlosschleife (`while True`) drehen wir den Hai zufällig in verschiedene Richtungen, aktualisieren das Fenster und warten kurz, damit die Drehungen auch gut sichtbar sind. 
Lasse das Programm einmal laufen (F5) und bewege den Fisch mit den Pfeiltasten. Beobachte die Bewegungen des Hais, aber keine Angst, er wird dich noch nicht fressen.

```python
# Hauptschleife
richtung = 0
hai_x, hai_y = B/2, H/2

while True:
	richtung += randint(0, 10)
	richtung %= 360
	hai_tkimg = ImageTk.PhotoImage(hai_img.rotate(richtung))
	hai = c.create_image(hai_x, hai_y, image=hai_tkimg)
	window.update()
	sleep(0.1)
``` 
 
## Haifisch bewegen

Die Bewegung des Haifisches soll automatisiert sein. Er bewegt sich zu Beginn in eine bestimmte Richtung, die wir durch 2 Zahlen beschreiben: `step_x` und `step_y`. Da beide zu Beginn auf 50 gesetzt werden, bewegt sich der Hai 50 Pixel nach rechts und 50 Pixel nach unten. Wandert der Hai dabei über unser Fenster hinaus, dann ändern wir die Richtung, indem wir einfach das Vorzeichen von `step_x` oder `step_y` umdrehen.

{{< imgblock "img/hai-bewegen.png" "" >}}{{< /imgblock >}}

```python
# Haifisch bewegen
HAI_R = 115
step_x = 50
step_y = 50

def move_hai(hai, hai_x, hai_y, step_x, step_y):
    c.move(hai, step_x, step_y)
    hai_x, hai_y = c.coords(hai)
    if hai_y > H or  hai_y < 0:
        step_y = step_y * -1
    if hai_x > B or hai_x < 0:
        step_x = step_x * -1
    return hai_x, hai_y, step_x, step_y
```

## Hauptschleife – 2. Test

Die Haibewegung können wir gleich in unsere Hauptschleife einbauen und testen:

```python
# Hauptschleife
richtung = 0
hai_x, hai_y = B/2, H/2

while True:
	richtung += randint(0, 10)
	richtung %= 360
	hai_tkimg = ImageTk.PhotoImage(hai_img.rotate(richtung))
	hai = c.create_image(hai_x, hai_y, image=hai_tkimg)
	hai_x, hai_y, step_x, step_y = move_hai(hai, hai_x, hai_y, step_x, step_y)
	window.update()
	sleep(0.1)
``` 
 
## Der Fisch wird gefangen

Wenn der Fisch dem Hai zu nahekommt, wird er gefangen und verschwindet vom Bildschirm. Um feststellen zu können, ob der Hai den Fisch berührt, brauchen wir eine Funktion, die den Abstand zwischen dem Hai und dem Fisch berechnen kann. Dazu holen wir uns die aktuellen Koordinaten von beiden Figuren und wenden den Satz von Pythagoras an. Die dazu notwendige Wurzelfunktion (`sqrt`) importieren wir aus dem `math`-Package. Der Abstand `a` wird als Wert der Funktion ausgegeben.

```python
# Abstand zwischen Fisch und Hai
def abstand(fish, hai):
    x1, y1 = c.coords(fish)
    x2, y2 = c.coords(hai)
    a = math.sqrt((x2-x1)**2 + (y2-y1)**2)
    return a
```
 
Nun brauchen wir noch eine Funktion, die uns sagt, ob der Fisch gefangen wurde.  Wir überprüfen, wie groß der Abstand zwischen Hai und Fisch ist. Ist dieser kleiner als die Summe von Fisch-Radius und Hai-Radius, dann hat der Hai den Fisch erwischt. Als Rückgabewert nehmen wir dazu eine Variable gefangen, die entweder True (Fisch gefangen) oder False ist (Fisch nicht gefangen). Solche Variablen nennt man beim Programmieren auch Boolesche Variablen.

```python
# Fisch gefangen
def fangen(fish, hai):
    if abstand(fish, hai) < (HAI_R + FISH_R):
        gefangen = True
        c.itemconfig(fish, state=HIDDEN)
    else:
        gefangen = False
    return gefangen
```
 
## Hauptschleife – 3. Test

Wir bauen nun in unsere Hauptschleife eine Verzweigung ein:

- Solange der Fisch nicht gefangen wurde, bewegt sich der Hai in unserem Fenster. Wir überprüfen nach jeder Bewegung, ob der Fisch gefangen wurde.
- Falls der Fisch gefangen wurde, lassen wir auch den Hai vom Bild verschwinden und stellen die Ausgangssituation wieder her: Variablen werden wieder auf die ursprünglichen Werte zurückgesetzt und der Fisch erscheint wieder in der linken oberen Ecke. Dazu fragen wir zuerst die aktuellen Koordinaten des Fisches ab und bewegen ihn dann so, dass seine Koordinaten  nach der Bewegung wieder im Koordinatenursprung (0, 0) sind.

```python
while True:
    # Fisch versucht Hai zu entkommen
    if not gefangen:
        richtung += randint(0, 10)
        richtung %= 360
        hai_tkimg = ImageTk.PhotoImage(hai_img.rotate(richtung))
        hai = c.create_image(hai_x, hai_y, image=hai_tkimg)
        hai_x, hai_y, step_x, step_y = move_hai(hai, hai_x, hai_y, step_x, step_y)
        gefangen = fangen(fish, hai)
        window.update()
        sleep(0.1)
    # Fisch wurde gefangen
    else:
        zeige_text("Game over", B/2, H/2, "orangered", "Helvetica", 30, 4)
        c.itemconfig(hai, state = HIDDEN)
        # Ausgangssituation wieder herstellen
        gefangen = False
        richtung = 0
        hai_x, hai_y = B/2, H/2
        c.itemconfig(fish, state=NORMAL)
        fish_x, fish_y = c.coords(fish)
        c.move(fish, -fish_x, -fish_y)
```
 
## Der letzte Feinschliff

Wir blenden nun einen Text ein, wenn der Fisch gefangen wurde („Game over“) und wenn der Fisch wieder am Start zurück ist („Willkommen zurück“). Diese Text sollen nur für eine bestimmte Zeit am Bildschirm erscheinen und dazu verwenden wir folgende Funktion:

```python
# Anzeige von Text für eine bestimmte Zeit
def zeige_text(nachricht, x, y, farbe, schrift, größe, zeit):
    text = c.create_text(x, y, text=nachricht, fill = farbe, font =(schrift, größe))
    window.update()
    sleep(zeit)
    c.itemconfig(text, state = HIDDEN)
    window.update()
```
 
## Hauptschleife - komplett

Nun können wir die Anzeige der Texte in die Hauptschleife einbauen:

```python
# Hauptschleife
gefangen = False
richtung = 0
hai_x, hai_y = B/2, H/2

while True:
    # Fisch versucht Hai zu entkommen
    if not gefangen:
        richtung += randint(0, 10)
        richtung %= 360
        hai_tkimg = ImageTk.PhotoImage(hai_img.rotate(richtung))
        hai = c.create_image(hai_x, hai_y, image=hai_tkimg)
        hai_x, hai_y, step_x, step_y = move_hai(hai, hai_x, hai_y, step_x, step_y)
        gefangen = fangen(fish, hai)
        window.update()
        sleep(0.1)
    # Fisch wurde gefangen
    else:
        zeige_text("Game over", B/2, H/2, "orangered", "Helvetica", 30, 4)
        c.itemconfig(hai, state = HIDDEN)
        # Ausgangssituation wieder herstellen
        gefangen = False
        richtung = 0
        hai_x, hai_y = B/2, H/2
        c.itemconfig(fish, state=NORMAL)
        fish_x, fish_y = c.coords(fish)
        c.move(fish, -fish_x, -fish_y)
        zeige_text("Willkommen zurück", B/2, 30, "orangered", "Helvetica", 30, 2)
```
 
## Aktivierung des Fensters

Zu guter Letzt gibt es noch einen Befehl, um das Fenster zu aktivieren:

```python
# Aktivierung des Fensters
window.mainloop()
```
 
Wenn du nun das Programm speicherst (`STRG + S`), kannst du es ausführen (`F5`). Kannst du dem Hai entkommen?

## Erweiterungsmöglichkeiten

- Zähle mit, wie oft der Fisch gefangen wurde und zeige diese Zahl auf der Leinwand an.
- Programmiere einen Timer, der die Spielzeit begrenzt. Zeige auch die laufende Zeit auf der Leinwand an. 

Hier kannst du den gesamten [Sourcecode downloaden](source/Fang_mich.pyw).
