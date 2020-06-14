---
title: "Bubble Blaster"
description: "Ein U-Boot, das mit Pfeiltasten gesteuert wird, soll in der vorgegebenen Zeit so viel Blasen wie möglich zum Platzen bringen."
---

# Bubble Blaster

Mit dem Package Tkinter programmieren wir ein erstes Spiel in Python. Ein U-Boot, das mit Pfeiltasten gesteuert wird, soll in der vorgegebenen Zeit so viel Blasen wie möglich zum Platzen bringen. (Die Beschreibung erfolgt in Anlehnung an Beispiele aus dem Buch [Programmieren supereasy](https://www.amazon.de/Programmieren-supereasy-Einfacher-Einstieg-SCRATCH/dp/3831027005/ref=sr_1_1?ie=UTF8&qid=1452990098&sr=8-1&keywords=programmieren+f%C3%BCr+kinder)).

{{< imgblock "img/bubble-blaster.png" "" >}}{{< /imgblock >}}

## Voraussetzungen

Übungsbeispiel „Alien“

## Python

Starte für Python die Programmierumgebung IDLE und öffne eine neue Datei (`File -> New File`) und speichere die Datei als Dateityp auf deinem Computer (`File -> Save As`). Wähle als Dateityp .pyw, wenn du mit Windows arbeitest.

## Laden von Packages

Für dieses Beispiel verwenden wir das Package `tkinter`. Um Zufallszahlen zu genierieren, brauchen wir auch das Package `random`. Für die Anzeige der Zeit und kurzen Pausen zwischen den Bewegungen der Bubbles brauchen wir die Funktionen `sleep` und `time` aus dem Package time.

```python
from tkinter import *
from random import *
from time import sleep, time
```

## Ein Fenster mit einer Leinwand erstellen

Zuerst erzeugen wir ein neues Fenster, das wir `window` nennen. Als Titel wählen wir „Bubble Blaster“). Die Leinwand wird 500 Pixel hoch und 800 Pixel breit, der Hintergrund ist dunkelblau.

```python
# Leinwand erstellen
H = 500
B = 800
window = Tk()
window.title("Bubble Blaster")
c = Canvas(window, width=B, height = H, bg = "darkblue")
c.pack()
```
 
## Das U-Boot laden

Für das U-Boot laden wir ein Bild, das du [hier](img/uboot.png) herunterladen kannst. Speichere dieses Bild in das gleiche Verzeichnis wie dein Python-Programm. Das geladene Bild positionieren wir dann in der Mitte der Leinwand (als x = B/2 und y = H/2). Den U-Boot Radius brauchen wir dann etwas später.

```python
# U-Boot zeichnen
img = PhotoImage(file="uboot.png")
uboot = c.create_image(B/2, H/2, image=img)
UBOOT_R = 45
```
 
## Das U-Boot steuern

Das U-Boot soll mit den Pfeiltasten bewegt werden. Bei jedem Tastendruck ändert sich die Position des U-Bootes um die U-Boot Geschwindigkeit, die wir hier mit 10 festlegen. 

-	Wird die Pfeiltaste „rechts“ gedrückt, wird die x -Koordinate um 10 größer, bei „links“ um 10 kleiner. Die y-Koordinate ändert sich nicht. 
-	Bei Pfeiltaste „unten“ wird die y-Koordinate größer, bei „oben“ wird die y-Koordinate kleiner. (Der Koordinatenursprung ist links oben!) die x-Koordinate bleibt gleich.
-	Damit das U-Boot sich nicht über den Rand der Leinwand hinausbewegen kann, fragen wir zuerst die Koordinaten x, y des U-Boots ab. Die Bewegung des U-Boots wird nur dann durchgeführt, wenn das U-Boot auch nach der Bewegung innerhalb der Leinwand bleibt.

```python
# U-Boot steuern
UBOOT_GESCHW = 10
def uboot_bewegen(event):
    x, y = c.coords(uboot)
    if event.keysym == "Up":
        if y >= UBOOT_GESCHW:
            c.move(uboot, 0, -UBOOT_GESCHW)
    elif event.keysym == "Down":
        if y <= H - UBOOT_GESCHW:
            c.move(uboot, 0, UBOOT_GESCHW)
    elif event.keysym == "Left":
        if x >= UBOOT_GESCHW:
            c.move(uboot, -UBOOT_GESCHW, 0)
    elif event.keysym == "Right":
        if x <= B - UBOOT_GESCHW:
            c.move(uboot, UBOOT_GESCHW, 0)
c.bind_all("<Key>", uboot_bewegen)
```
 
## Bubbles erzeugen

Für die Bubbles laden wir auch ein Bild, das du [hier](img/bubble.png) herunterladen kannst. Den Bubble Radius benötigen wir später. Im Gegensatz zum U-Boot, brauchen wir mehrere Bubbles, die von rechts nach links mit unterschiedlichen Geschwindigkeiten über den Bildschirm wandern und dann wieder verschwinden. Es entstehen auch laufend neue Bubbles. Um immer einen Überblick zu haben welche Bubbles mit welchen Geschwindigkeiten es gibt, verwenden wir zwei Listen:

- **bub_id**: In dieser Liste merken wir uns den Namen (ID, eindeutige Nummer) der Bubbles. In eine Liste kann man mehrere Einträge mit Beistrichen getrennt hineinschreiben, zusammengefasst werden diese Einträge in Python mit einer eckigen Klammer. Zu Beginn haben wir noch keine Bubbles, also ist diese Liste noch leer.
-	**bub_geschw**: Die Geschwindigkeiten schreiben wir auch in eine Liste, die ebenfalls zu Beginn noch leer ist.

Die Geschwindigkeit der Bubbles beschränken wir durch die Konstante MAX_BUB_GESCHW, die wir auf 10 setzen und dann definieren wir noch eine Konstante GAP, die wir für die Anfangsposition der Bubbles brauchen.

Nun schreiben wir uns eine Funktion, die genau eine Bubble erzeugt. Die Bubble entsteht rechts etwas außerhalb unseres Fensters. Die x-Koordinate setzen wir auf die Fensterbreite plus unseren definierten GAP. Die y-Koordinate soll eine Zufallszahl zwischen 0 und H sein (dafür verwenden wir den Befehl `randint`) und auch die Geschwindigkeit v wählen wir zufällig zwischen 1 und der maximal möglichen Geschwindigkeit.

Nun erzeugen wir die Bubble und hängen die ID (id_num) an unsere ID-Liste an und die Geschwindigkeit hängen wir an unsere Geschwindigkeits-Liste an (mit der Methode `append`).

```python
# Bubbles erzeugen
bubble_img = PhotoImage(file="bubble.png")
BUB_R = 25
bub_id = []
bub_geschw = []
MAX_BUB_GESCHW = 10
GAP = 100

def erzeuge_bubble():
    x = B + GAP
    y = randint(0, H)
    v = randint(1, MAX_BUB_GESCHW)
    id_num = c.create_image(x, y, image = bubble_img)
    bub_id.append(id_num)
    bub_geschw.append(v)
```
 
## Bubbles bewegen

Für die Bewegung der Bubbles über den Bildschirm verwenden wir auch eine Funktion. Diese Funktion geht jede Bubble der Reihe nach durch. Die Anzahl der aktuell vorhandenen Bubbles bekommen wir über die Länge unserer ID-Liste: `len(bub_id)`. Bei jeder Bubble wird die x-Koordinate um ihre Geschwindigkeit verringert und die y-Koordinate gleich gelassen. Damit wandern die Bubbles horizontal nach links.

```python
# Bubbles bewegen
def bewege_bubbles():
    for i in range(len(bub_id)):
        c.move(bub_id[i], -bub_geschw[i], 0)
```

## Hauptschleife – 1. Test

Nun ist es an der Zeit die, bis jetzt geschriebenen, Funktionen zu testen. In einer ersten Version unserer Hauptschleife verwenden wir eine Endlosschleife `(while True)`, in der wir laufend Blasen erzeugen, die Bubbles bewegen, das Fenster aktualisieren und dann kurz warten.

Damit nicht zu viele Blasen erzeugt werden, sondern nur durchschnittlich in einem Zehntel der Zeitschritte, erzeugen wir eine Zufallszahl zwischen 1 und 10. Nur wenn diese Zufallszahl 1 ist, dann erzeugen wir eine Bubble und sonst nicht.

```python
# HAUPTSCHLEIFE
while true:
  if randint(1, 10) == 1:
    erzeuge_bubble()
  bewege_bubbles()
  window.update()
  sleep(0.01)
```

## Bubbles entfernen

Jetzt beschäftigen wir uns mit dem Entfernen der Bubbles. Bubbles verschwinden, wenn sie komplett über den Bildschirm gewandert sind und auch wenn das U-Boot die Bubble zum Platzen gebracht hat. Für beides brauchen wir eine Funktion, die eine Bubble löschen kann.

Mit der Methode `delete` können wir das Bild einer Bubble entfernen, indem wir die ID angeben. Wir müssen aber auch unsere beiden Listen aktuell halten und dort die entsprechenden Einträge löschen.

```python
# Bubble löschen
def lösche_bubble(i):
    c.delete(bub_id[i])
    del bub_id[i]
    del bub_geschw[i]
```
 
Für das Entfernen der Bubbles, wenn sie über den linken Bildschirmrand hinausgewandert sind, verwenden wir folgende Funktion:

```python
# Bubbles entfernen (wenn sie über den Bildschirm gewandert sind)
def entferne_bubbles():
    for i in range(len(bub_id)-1, -1, -1):
        x, y = c.coords(bub_id[i])
        if x < -GAP:
            lösche_bubble(i)
```
 
Auch hier gehen wir wieder jede Bubble durch, holen und die aktuellen Koordinaten mit der Methode `coords` und löschen die Bubble, wenn die x-Koordinate mehr als unser GAP hinter dem linken Fensterrand liegt. Aber Achtung: Hier müssen wir die Liste unserer Bubbles von hinten durcharbeiten, sonst kommt unserer Nummerierung der Bubbles durcheinander. Würden wir z. B. die zweite Bubble löschen, dann wäre Bubble Nr. 3 plötzlich Bubble Nr. 2. Wir beginnen also bei der letzten Bubble (diese hat die Nr. `len(bub_id)`-1, weil ja Python bei 0 zu zählen beginnt). Dann ändern wir die Nummer immer um -1 und lassen den `range` bis -1 laufen, da das `range`-Objekt den letzten Eintrag nicht mehr dazu nimmt, also ist 0 der letzte Wert, den wir für i bekommen.

## Hauptschleife – 2. Test

Das Entfernen der Bubbles können wir gleich in unsere Hauptschleife einbauen:

```python
# HAUPTSCHLEIFE
while true:
  if randint(1, 10) == 1:
    erzeuge_bubble()
  bewege_bubbles()
  entferne_bubbles()
  window.update()
  sleep(0.01)
```
 
## Bubbles platzen lassen

Wenn eine Bubble vom U-Boot getroffen wird, soll sie platzen und vom Bildschirm verschwinden. Um feststellen zu können, ob das U-Boot eine Bubble trifft, brauchen wir eine Funktion, die den Abstand zwischen dem U-Boot und einer Bubble berechnen kann. Dazu holen wir uns die aktuellen Koordinaten von U-Boot und Bubble und wenden den Satz von Pythagoras an. Die dazu notwendige Wurzelfunktion (`sqrt`) importieren wir aus dem `math`-Package. Der Abstand a wird als Wert der Funktion ausgegeben.

```python
# Entfernung zwischen Punkten
from math import sqrt
def abstand(uboot, id_bubble):
    x1, y1 = c.coords(uboot)
    x2, y2 = c.coords(id_bubble)
    a = sqrt((x2-x1)**2 + (y2-y1)**2)
    return a
```
 
In einer Schleife gehen wir die Liste der Bubbles wieder von hinten durch. Wenn der Abstand zwischen U-Boot und Bubble kleiner ist als die Summe von U-Boot-Radius und Bubble-Radius, dann hat das U-Boot die Bubble getroffen. Wir erhöhen die Punkteanzahl, die wir zu Beginn auf 0 gesetzt haben um den Bubble-Radius + Bubble-Geschwindigkeit. Damit erreichen wir mehr Punkte, wenn die Bubble schneller ist. Die getroffene Bubble wird gelöscht und die erreichte Punkteanzahl wird ausgegeben.

```python
# Bubbles platzen lassen (wenn sie vom U-Boot getroffen werden)
def treffer():
    punkte = 0
    for i in range(len(bub_id)-1, -1, -1):
        if abstand(uboot, bub_id[i]) < (UBOOT_R + BUB_R):
            punkte += (BUB_R + bub_geschw[i])
            lösche_bubble(i)
    return punkte
```
 
## Hauptschleife – 3. Test

Um diese Funktion zu testen, bauen wir eine Variable score, die die Gesamtpunkteanzahl abspeichert, in die Hauptschleife ein. Zu Beginn ist die Punkteanzahl 0 und in jedem Zeitschritt wird die Punkteanzahl um die erreichten Treffer erhöht. Um die Punkteanzahl mitzuverfolgen, lassen wir sie im Shell-Fenster ausgeben.

```python
# HAUPTSCHLEIFE
score = 0
while true:
  if randint(1, 10) == 1:
    erzeuge_bubble()
  bewege_bubbles()
  entferne_bubbles()
  score += treffer()
  print (score)
  window.update()
  sleep(0.01)
```
 
## Zeit und Punkte anzeigen
In der Endversion des Spiels soll die Zeit und die Punktanzahl in unserem Fenster angezeigt werden. Wir schreiben dazu `create_text` einen passenden Text in die linke obere Ecke unserer Leinwand. Die beiden Zahlen geben die x und y Koordinaten an, mit der Option `fill` wird die Textfarbe festgelegt. Für die Anzeige der aktuellen Zeit und Punkteanzahl erzeugen wir die Objekte `time_text` und `score_text`. Mit den Funktionen `zeige_punkte` und `zeige_zeit`, ändern wir diese Objekte so, dass immer der aktuelle Stand zu sehen ist. Achtung: Der Text muss immer vom Datentyp string sein. Da die Zeit und die Punkte Zahlen sind, müssen wir sie mit der Funktion `str` in einen string umwandeln.

```python
# Zeit und Punkte anzeigen
c.create_text(50, 30, text = "ZEIT", fill="white")
c.create_text(150, 30, text = "PUNKTE", fill="white")
time_text = c.create_text(50, 50, fill="white")
score_text = c.create_text(150, 50, fill="white")
def zeige_punkte(score):
    c.itemconfig(score_text, text = str(score))
def zeige_zeit(time_left):
    c.itemconfig(time_text, text=str(time_left))
```
 
Hauptschleife - komplett
Nun können wir die Hauptschleife fertigstellen. Wir geben ein Zeitlimit von 30 Sekunden für das Spiel vor. In der Variable `ende` speichern wir den Endzeitpunkt des Spiels. Das ist die aktuelle Zeit, wenn das Spiel gestartet wird plus unser Zeitlimit. Die aktuelle Zeit bekommen wir mit dem Befehl `time()`. Anstelle der Endlosschleife überprüfen wir, ob unsere Spielzeit noch nicht abgelaufen ist. In der Schleife ergänzen wir die Anzeige der aktuellen Zeit und der Punkte.

Ist das Spiel aus, zeigen wir den Text „GAME OVER“ und die erreichte Punkteanzahl an.

```python
# HAUPTSCHLEIFE
score = 0
TIME_LIMIT = 30
ende = time() + TIME_LIMIT
while time() < ende:
    if randint(1, 10) == 1:
        erzeuge_bubble()
    bewege_bubbles()
    entferne_bubbles()
    score += treffer()
    zeige_punkte(score)
    zeige_zeit(int(ende-time()))
    window.update()
    sleep(0.01)

c.create_text(B/2, H/2, text = "GAME OVER", \
              fill = "white", font=("Helvetica", 30))
c.create_text(B/2, H/2 + 30, \
              text = "Punkte: " + str(score), fill = "white")
```
 
## Aktivierung des Fensters

Zu guter Letzt gibt es noch einen Befehl, um das Fenster zu aktivieren:

```python
# Aktivierung des Fensters
window.mainloop()
```
 
Wenn du nun das Programm speicherst (STRG + S), kannst du es ausführen (F5). Wie viele Punkte kannst du erreichen?

## Erweiterungsmöglichkeiten

-	Zeichne, anstelle des Bubble-Bildes, Kreise als Bubbles. Die Kreise können unterschiedliche Größen und Farben haben. Wenn Bubbles mit einer bestimmten Farbe zum Platzen gebracht werden, gibt es die doppelte Punkteanzahl.
-	Erstelle eine Highscore-Liste, auf der die höchsten Punktezahlen gespeichert werden.
-	Gib 30 Sekunden Bonus-Zeit zum Spielen, wenn in der vorgegebenen Zeit mindestens 2000 Punkte erreicht werden.
