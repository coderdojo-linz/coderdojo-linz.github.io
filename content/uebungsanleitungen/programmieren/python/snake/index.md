---
title: "Snake mit Python"
description: "In dieser Übung erstellen wir das Computerspiel Snake mit Python mit Hilfe des Packages Tkinter."
level: 2
img: "snake_head.png"
imgcover: false
---

# Python Snake

In dieser Übung erstellen wir das Computerspiel Snake mit Python. So wie für das *Bubble Blaster* Spiel werden wir auch hier auf das Package Tkinter zurückgreifen, um die Spielelemente (Kugeln aus denen die Schlage besteht, Apfel) auf den Bildschirm zu malen.

## Voraussetzungen

Es wäre ideal, wenn du das *Bubble Blaster* Spiel davor schon programmiert hast, um dich so mit Tkinter vertraut zu machen.

## 8 Schritte zum *fertigen* Snake Spiel

Es ist oft eine gute Strategie ein Programm nicht in einem einzelnen Wurf zu entwickeln, sondern es in kleine Unterschritte zu unterteilen, die für sich gesehen bewältigbarer sind. Snake werden wir in diesem Sinne in 8 Schritten entwicklen, wobei wir nach jedem Schritt ein ausführbares Programm bekommen, das wir gleich testen können.

> Wie isst man einen Elefanten? Stück für Stück!

Am Ende werden wir ein Spiel haben, das der Minimalanforderung eines *fertigen* Snake Spiels genügen sollte:

Ein Schlange startet in der Mitte des Bildschirms und ist mit den Pfeiltasten steuerbar. Am Bildschirm erscheint ein Apfel an einer zufälligen Position. Wenn die Schlange diesen erwischt, so wird sie um eine Kugel länger. Für jeden Apfel gibt es auch einen Punkt und der Punktestand wird mit einer Zahl links oben am Bildschirm mitgezählt. Bei Berühren der Wand und auch wenn sich die Schlange selbst beißt, ist das Spiel vorbei.

{{< imgblock "img/snapshot_7.png" "" >}}{{< /imgblock >}}

Richtig *fertig* muss das Spiel aber nach Schritt 7 nicht sein und es wird noch genug Potential geben, das du selbst umsetzen kannst. Wie wäre es z.B. mit einem schöneren Kopf für die Schlange, oder einer künstliche Intelligenz, welche die Schlange als Autopilot steuert?

### Schritt 0 - Eine unendliche Schlange die sich geradeaus bewegt

Zu Beginn wollen wir einfach eine Schlange programmieren, die sich gerade aus bewegt. Wir können die Schlage noch nicht steuern und sie wird auch einfach immer länger. Sie fährt schließlich über den Bildschirmrand hinaus

{{< imgblock "img/snapshot_0.png" "" >}}{{< /imgblock >}}

#### Imports

```python
from tkinter import *
from time import sleep
from PIL import Image, ImageTk
```

Wir benötigen tkinter, um eine Zeichenebene zu bekommen auf der wir Bilder darstellen können. Wie bei einem Videofilm werden wir in jedem Zeitschritt den Zustand dieser Leinwand etwas verändern. Um zwischen den Zeitschritten eine definiertes Intervall lange warten zu können, benötigen wir die Funktion *sleep*. Diese Libraries kamen auch schon beim *Bubble Blaster* Beispiel zum Einsatz. Zusätzlich verwenden wir die PIL library, um das Bild des Schlangenkörpers, das noch nicht die richtige Größe hat, verkleinern zu können.

Sollte bei dir die PIL Bibliothek nicht verfügbar sein, solltest du pillow mit Hilfe von pip aus der Kommandozeile installieren

```python
pip install pillow
```

#### Leinwand erzeugen

Wir erzeugen die Leinwand für das Spiel.

```python
# Leinwand erstellen
H = 500
B = 500
window = Tk()
window.title("Snake")
c = Canvas(window, width=B, height = H)
c.pack()
```
    
#### Definition der Gittergröße
Snake spielen wir auf einem Schachbrett, wo die Felder Quadrate mit der Seitenlänge grid_length sind.

```python
grid_length= 23
```

Bei uns ist die Seitenlänge der Felder auf 23 Pixel gesetzt.
#### Snake Körperelement laden

Der Körper unserer Schlange besteht aus lauter kleinen Kugeln, die wir aus der Datei [snake_body.png](img/snake_body.png) in ein Image Objekt aus der PIL Bibliothek laden. Dieses Bild ist nicht exakt 23 x 23 Pixel groß und wir müssen es daher zunächst noch auf diese Größe verkleinern. Der Zusatz Image.ANTIALIAS als Argument der *body_img.resize* Funktion hilft dabei zu verhinder, dass das Bild durch das Verkleinern *schlechter aussieht*.

```python
# Snake Körperelement laden
body_width = grid_length
body_height = grid_length
body_img = Image.open("snake_body.png")
body_img = body_img.resize((body_width, body_height), Image.ANTIALIAS)
body_img = ImageTk.PhotoImage(body_img)
```

Wir haben das Körperelement bisher noch nicht auf die Leinwand gemalen, aber dazu kommen wir bald.

#### Zustand des Schlangenkopfs definieren

Wir definieren den Zustand des Schlangenkopfs. Mit head_pos geben wir an, wo er sich befindet und mit richtung geben wir an in welche Richtung er sich bewegt

```python
richtung = (1,0)
head_pos = [B/2, H/2]
```

#### Koordinatensystem auf der canvas von tkinter

Das ist jetzt auch ein guter Zeitpunkt um zu erklären, wie man Objekte auf der canvas (= Leinwand) von tkinter positioniert. Dafür gibt man mit Koordinaten einen Ort auf der Leinwand an. Der Ort links oben im Eck ist dabei der Punkt mit den Koordinaten x=0 und y=0 oder kurz (0,0). Anders wie in dem Koordinatensystem, das du vielleicht aus der Schule kennst, zeigt die y-Achse bei tkinter nicht nach oben, sondern nach unten. Der rechte untere Eckpunkt hat bei uns daher die Koordinate (500,500), da man 500 Pixel nach unten und 500 Pixel nach rechts gehen muss, um von der linken oberen Ecke mit den Koordinaten (0,0) nach rechts unten zu kommen. Im folgenden Bild ist die tkinter canvas Skizziert und die Koordinaten von ein paar Punkten darauf dargestellt (in Blau):

{{< imgblock "img/coords_0.png" "" >}}{{< /imgblock >}}

Die Richtung in die sich die Schlange bewegt haben wir zu Beginn mit (1,0) gesetzt, das heißt die Schlange wandert zu Beginn nach rechts. In der Skizze sind in Grün auch die anderen 3 Richtungen eingezeichnet. Würde die Schlange nach unten wandern, wäre die Richtung z.B. (0,1).

#### Bewegen vom Schlangenkopf
    
```python
# Snake Head bewegen
def move_head():
    head_pos[0]+= richtung[0]*grid_length
    head_pos[1]+= richtung[1]*grid_length
```

Die Schlange bewegt sich, indem wir in jedem Zeitschritt den Zustand der Schlange verändern und so die Elemente aus denen die Schlange besteht (grüne Kugeln) immer an neuen Orten gezeichnet werden. Die *move_head()* Funktion führt diese Veränderung für die Position des Schlangenkopfs durch. Wir verändern dabei die globale Variable head_pos mit der wir die Position vom Schlangenkopf speichern. Dabei verändern wir den Ort immer gleich um eine ganze Feldlänge. Wenn richtung = (1,0) ist, so ist richtung[0] = 1 und richtung[1] = 0, daher wird nur head_pos[0], also die x Koordinate des Schlangenkopfs verändert und zwar um grid_length = 23 Pixel erhöht. Der Schlangenkopf wandert damit immer weiter nach rechts.

#### Zeichnen vom Schlangenkopf

Sichtbar wird die Schlange erst, wenn wir ihren Kopf zeichnen. Mit der Funktion *new_body()* wird in jedem Zeitschritt an die Position des Kopfs ein neues Schlangen Körperelement gezeichnet.

```python
# Neues Body Element erstellen
def new_body():
    c.create_image(head_pos[0], head_pos[1], image=body_img)
```

#### Hauptschleife

Damit sind wir fast am Ende von Schritt 0 angelangt, es fehlt nur noch die Hauptschleife. In dieser while Schleife, die nie endet, entspricht jeder Schleifendurchlauf einem Zeitschritt in der Schlangenwelt. Am Ende eines Schleifendurchlaufs wird das Programm für die *sleep_seconds* Sekunden angehalten, damit die Bewegung nicht allzu schnell abläuft. Bei uns ist sleep_seconds so eingestellt, das in einer Sekunde 5 Zeitschritte ablaufen.

In jedem dieser Zeitschritte wird die Position des Kopfs mit der *move_head()* Funktion angepasst, mit der *new_body()* Funktion ein neues Schlangen Element beim Kopf gezeichnet und mit window.update() das Fenster aktualisert, damit es die Änderung korrekt darstellt
    
```python
sleep_seconds = 0.2
while True:
    move_head()
    new_body()
    window.update()
    sleep(sleep_seconds)
```

#### Resultat für Schritt 0

Damit haben wir die erste lauffähige Version von unserem Spiel erstellt! Versuche den Code selbst zu programmieren und experimentiere mit dem Python Programm. Was passiert z.B. wenn du die richtung änderst? Du kannst den Python Code auch [hier](source/snake_00_gerade_unendlich.py) downloaden.

### Schritt 1 - Die Schlange lässt sich steuern

Es wird Zeit, dass wir die Schlange auch steuerbar machen. Wie beim bubble-buster Programm verwenden wir dafür die bind_all Fuktion der tkinter canvas. Dort geben wir eine Funktion an, die aufgerufen wird, wenn vom Spieler eine Taste am Keyboard gedrückt wird (so etwas nennt man einen Callback). Die Funktion, die wir dafür schreiben ist *richtung_aendern(event)* und sie ändert die Richtung, abhängig von der gedrückten Taste.

```python
# Richtung ändern
def richtung_aendern(event):
    global richtung
    if event.keysym == "Up":
        richtung = (0,-1)
    elif event.keysym == "Down":
        richtung= (0,1)
    elif event.keysym == "Left":
        richtung = (-1,0)
    elif event.keysym == "Right":
        richtung = (1,0)

c.bind_all("<Key>", richtung_aendern)
```
    
Das ist auch schon alles, das wir machen müssen, um die Schlange steuerbar zu machen. Den Source Code findest du [hier](source/snake_01_steuerbar_unendlich.py). 

{{< imgblock "img/snapshot_1.PNG" "" >}}{{< /imgblock >}} 
 
Dieser Schritt war zum Glück viel kürzer als Schritt 0. Wir werden jetzt versuchen die Schritte eher kurz zu halten, denn mit kleinen Schritten lässt sich leichter der Überblick bewahren und es ist auch motivierender, wenn man die Änderungen im Code schnell sehen kann. Im Schritt 0 mussten wir aber zunächst einmal das Grundgerüst schaffen und das hat uns etwas mehr Mühe gekostet.

### Schritt 2 - Die Schlange wird endlich

Momentan wächst die Schlange noch unendlich lange. Um das zu unterbinden, müssen wir alte Elemente der Schlange löschen, wenn die Schlange eine gewisse Länge überschreiten würde. Für die maximale Schlangenlänge führen wir eine Variable ein

```python
n_bodies = 10
```

Weiters definieren wir die Variable bodies, die wir zu Beginn auf eine leere Liste setzen

```python
bodies = []
```
    
Wenn wir ein neues Schlangenelement erstellen, dann speichern wir es in der bodies Liste, damit wir das Element später wieder löschen können. Die *new_body()* Funktion wird daher geändert

```python
# Neues Body Element erstellen
def new_body():
    bodies.append(c.create_image(head_pos[0], head_pos[1], image=body_img))
```
        
Jetzt wird das neue Element nicht nur erstellt, sondern auch eine Referenz darauf in die bodies Liste gespeichert. Mit dieser Referenz können wir ein Element wieder löschen. Das machen wir in der *delete_old_body()* Funktion, wenn die Länge der Schlange größer als n_bodies ist. 
    
```python
# Hinterstes Body Element löschen, wenn die Schlange schon zu lange ist
def delete_old_body():
    if len(bodies)>n_bodies:
        c.delete(bodies.pop(0))
```

bodies.pop(0) gibt das erste (und daher älteste) Element der Liste zurück und löscht es auch aus der Liste heraus. Mit c.delete wird das Schlangenelement von der tkinter canvas gelöscht.

Die *delete_old_body()* Funktion wird schließlich auch in der Hauptschleife aufgerufen:

```python
sleep_seconds = 0.2
while True:
    move_head()
    new_body()
    delete_old_body()
    window.update()
    sleep(sleep_seconds)
```

Damit haben wir eine endliche, steuerbare Schlange.

{{< imgblock "img/snapshot_2.PNG" "" >}}{{< /imgblock >}}

Den Source Code kannst du [hier](source/snake_02_steuerbar_endlich.py) downloaden.

### Schritt 3 - Die Schlange wird sterblich

Bis jetzt ist es unmöglich das Spiel zu verlieren, die Schlange lebt einfach immer weiter, selbst wenn sie das Fenster verlässt, oder sich selbst beißt. Im nächsten Schritt werden wir ein Spielfeld einführen, an das die Schlange nicht stoßen soll. Tut sie das trotzdem, dann beginnt das Spiel von neu.

Dafür definieren wir zunächst wie das Bord aussieht. Unser Spielbrett soll quadratisch sein und aus n_board_fields x n_board_fields Feldern bestehen.

```python
n_board_fields = 20
```

Das Tupel (x_left, y_up) gibt die linke obere Ecke des Spielbretts an

```python
x_left = 20
y_up = 20
```
    
Die rechte untere Ecke liegt dann bei (x_right, y_down) und kann wie folgt berechnet werden

```python
x_right = x_left + n_board_fields * grid_length
y_down = y_up +n_board_fields * grid_length
```

Das Fenster, das Spielfeld und die oben definierten Koordinaten sind auf folgender Skizze noch einmal dargestellt:

{{< imgblock "img/coords_1.png" "" >}}{{< /imgblock >}}

Wir definieren die Startposition des Schlangenkopfs als das Feld in der Mitte
    
```python
start_pos= [x_left+ grid_length*0.5+ n_board_fields//2*grid_length, y_up + grid_length*0.5 + n_board_fields//2*grid_length]
```

Um das Spielbrett auch visuell sichtbar zu machen, zeichnen wir 4 Linien zwischen den 4 Eckpunkten

```python 
# Board zeichnen
line_width = 5
c.create_line(x_left, y_down, x_left, y_up, width=line_width)
c.create_line(x_right, y_down, x_right, y_up, width=line_width)
c.create_line(x_left, y_up, x_right, y_up, width=line_width)
c.create_line(x_left, y_down, x_right, y_down, width=line_width)
```

Wir schreiben die Funktion *is_outside_board()*, welche *True* zurückgibt, wenn der Kopf außerhalb des Spielfelds ist

```python
def is_outside_board():
    return head_pos[0] < x_left or head_pos[0] > x_right or head_pos[1] > y_down or head_pos[1] < y_up
```

In der Hauptschleife stellen wir sicher, dass das Spiel neugestartet wird, wenn *is_outside_board()* True zurückgibt

```python
sleep_seconds = 0.2
while True:
    richtung = (1, 0)
    head_pos = list(start_pos)
    for body in bodies:
        c.delete(body)
    bodies = []
    while True:
        move_head()
        new_body()
        delete_old_body()
        if is_outside_board():
            break
        window.update()
        sleep(sleep_seconds)
```

Die Hauptschleife ist damit etwas komplexer geworden. Es gibt jetzt außen herum eine weitere while Schleife. Zu Beginn dieser Schleife wird der Zustand des Spiels neu initialisiert. Insbesondere werden auch alle Schlangenelemente vom vorherigen Spiel von der tkinter canvas gelöscht.

Die innere while Schleife ist nach wie vor die while Schleife von einem Spiel, welches anders wie vorher aber abbrechen kann. Momentan bricht das Spiel nur ab, wenn wir außerhalb des Spielbretts kommen.

Damit ist unsere Schlange nicht mehr unsterblich

{{< imgblock "img/snapshot_3.PNG" "" >}}{{< /imgblock >}}

Den Source Code kannst du [hier](source/snake_03_spielfeld.py) downloaden.

### Schritt 4 - Die Schlange kann sich selbst beißen

Als nächstes programmieren wir, dass die Schlange auch stirbt, wenn der Kopf in den bereits vorhandenen Körper beißt

```python
def does_head_bite_body():
    for body in bodies:
        x,y = c.coords(body)
        if head_pos[0] == x and head_pos[1] == y:
            return True
    return False
```

Die Funktion *does_head_bite_body()* prüft, ob der Kopf die gleichen Koordinaten wie eine der Schlangenelemente hat. Die Koordinaten eines Schlangenelements bekommen wir mittels
    
```python
x,y = c.coords(body)
```

Wobei body die Referenz auf das entsprechende Schlangenelement ist. *does_head_bite_body()* sollte dabei aufgerufen werden, bevor der Kopf selbst zum Schlangenelement geworden ist. In der neuen Hauptschleife ist dann nur eine kleine Änderung notwendig:

```python
sleep_seconds = 0.2
while True:
    richtung = (1, 0)
    head_pos = list(start_pos)
    for body in bodies:
        c.delete(body)
    bodies = []
    while True:
        move_head()
        if does_head_bite_body():
            break
        new_body()
        delete_old_body()
        if is_outside_board():
            break
        window.update()
        sleep(sleep_seconds)
```

Damit stirbt unsere Schlange jetzt auch, wenn sie sich selbst beißt. Den Source Code kannst du [hier](source/snake_04_selbstbiss.py) downloaden.

### Schritt 5 - Umkehr verbieten

Wenn die Schlange jetzt nach rechts unterwegs ist und wir drücken die linke Pfeiltaste, dann stirbt die Schlange sofort. Das ist nicht besonders benutzerfreundlich und wir möchten in so einem Fall daher lieber die Eingabe der linken Pfeiltaste ignorieren. Das können wir durch Ändern der *richtung_aendern* Funktion, wie folgt, erreichen:

```python
# Richtung ändern
def richtung_aendern(event):
    global richtung
    if event.keysym == "Up":
        if richtung != (0, 1):
            richtung = (0, -1)
    elif event.keysym == "Down":
        if richtung != (0, -1):
            richtung = (0, 1)
    elif event.keysym == "Left":
        if richtung != (1, 0):
            richtung = (-1, 0)
    elif event.keysym == "Right":
        if richtung != (-1, 0):
            richtung = (1, 0)
```

Den neuen Source Code kansst du [hier](source/snake_05_zurueck_verbieten.py) downloaden.

### Schritt 6 - Endlich kommt der Apfel ins Spiel

Bisher hat immer noch der Apfel gefehlt. Diesen wollen wir jetzt zufällig am Spielbrett platzieren und essbar machen. Wenn der Apfel gegessen wird, soll die Schlange um ein Element länger werden.

```python
from random import randint
```

Wir importieren die randint Funktion aus der random Bibliothek. Mit *randint(0,2)* bekommen wir zufällig eine der 3 Zahlen 0, 1 oder 2. Damit können wir eine zufällige Position für den Apfel am Spielfeld wählen

```python
def gen_apple_pos():
    while True:
        candidate = [x_left + grid_length*0.5 + randint(0, n_board_fields-1) * grid_length,
                        y_up + grid_length*0.5 + randint(0, n_board_fields-1) * grid_length]
        candidate_valid = True
        for body in bodies:
            x, y = c.coords(body)
            if x == candidate[0] and y == candidate[1]:
                candidate_valid = False
        if candidate_valid:
            return candidate
```
                
Die Funktion *gen_apple_pos()* gibt eine zufällig gewählte neue Position für den Apfel zurück. Es ist wichtig, dass wir den Apfel nicht auf ein Feld setzen, das durch ein Schlangenelement besetzt ist. Deswegen überprüfen wir nach Wahl eines möglichen Kanditaten für die Apfelposition, ob dieses auch durch die Schlange besetzt ist. Wenn ja, dann wird noch einmal eine zufällige Position für den Apfel gewürfelt, bis wir irgendwann eine gültige Position bekommen.

```python
def head_eats_apple():
    return head_pos[0] == apple_pos[0] and head_pos[1] == apple_pos[1]
```

mit dieser Funktion können wir prüfen, ob der Kopf gerade am selben Feld wie der Apfel ist und ihn daher essen kann.

```python
def redraw_apple():
    global apple
    if apple is not None:
        c.delete(apple)
    apple = c.create_image(apple_pos[0], apple_pos[1], image=apple_img)
```

Mit der *redraw_apple()* Funktion wird der Apfel auf der tkinter canvas gelöscht und an seiner neuen Position neu gezeichnet. Die Variable apple ist eine globale Variable, welche zu Beginn auf *None* gesetzt ist.

```python
apple = None
```

Die *apple* Variable speichert die Referenz auf das gezeichnete apple Objekt auf der tkinter Leinwand, damit wir das alte Apfelbild löschen können, wenn der Apfel eine neue Position bekommnt

```python
n_bodies0 = 10
```

Nachdem die Schlangenlänge jetzt nicht mehr fix ist, gibt es eine Variable n_bodies0, mit welcher n_bodies zu Beginn eines Spiels initialisiert wird.

```python
sleep_seconds = 0.2
while True:
    n_bodies = n_bodies0
    richtung = (1, 0)
    head_pos = list(start_pos)
    apple_pos = gen_apple_pos()
    redraw_apple()
    for body in bodies:
        c.delete(body)
    bodies = []
    while True:
        move_head()
        if does_head_bite_body():
            break
        new_body()
        delete_old_body()
        if head_eats_apple():
            apple_pos = gen_apple_pos()
            redraw_apple()
            n_bodies += 1

        if is_outside_board():
            break
        window.update()
        sleep(sleep_seconds)
```

In der neuen Hauptschleife prüfen wir jetzt ob der Kopf den Apfel isst und vergrößern in dem Fall auch die Länge der Schlage. Zusätzlich muss der Apfel eine neue Position bekommen und neugezeichnet werden. Auch zu Beginn eines Spiels erzeugen wir eine neue Apfel Version, mit der er frisch auf die Leinwand gezeichnet wird.

Damit kann unsere Schlange jetzt durch das Essen von Äpfeln über sich hinaus wachsen. Den Source Code findest du [hier](source/snake_06_apfel.py).

### Schritt 7 - Punkte mitzählen und anzeigen

Schließlich wollen wir auch mitzählen wieviele Äpfel die Schlange bereits verspeist hat und diesen Punktestand auch anzeigen lassen.

```python
H = 550
```

Wir machen unser Fenster etwas größer.

```python
x_left = 20
y_up = 50
```

Außerdem lassen wir das Spielfeld erst weiter unten beginnen, um Platz für den Punktestand zu lassen.

```python
score_text = c.create_text(30, 20, fill="black", font=("Helvetica", 30))

def show_points():
    c.itemconfig(score_text, text=str(score))
```

Wir platzieren ein Textelement auf der canvas und halten dieses mit der *show_points()* Funktion stets aktuell, indem wir den momentanen score hineinschreiben.

Diesen score initialisieren wir in der neuen Hauptschleife bei einem Spielbeginn mit 0 und erhöhen ihn, wenn ein Apfel gegessen wird.

```python
sleep_seconds = 0.2
while True:
    n_bodies = n_bodies0
    richtung = (1, 0)
    head_pos = list(start_pos)
    apple_pos = gen_apple_pos()
    redraw_apple()
    for body in bodies:
        c.delete(body)
    bodies = []
    score = 0
    show_points()
    while True:
        move_head()
        if does_head_bite_body():
            break
        new_body()
        delete_old_body()
        if head_eats_apple():
            apple_pos = gen_apple_pos()
            redraw_apple()
            n_bodies += 1
            score += 1
            show_points()
        if is_outside_board():
            break
        window.update()
        sleep(sleep_seconds)
```

Damit sind wir am Ende von Schritt 7 angekommen. Gratulation du solltest jetzt ein *fertiges* Snake Spiel haben! Den Source Code findest du [hier](source/snake_07_punkte.py). Jetzt kannst du versuchen einen High Score aufzustellen, oder weitere Features einbauen. Man könnte z.B.

* Den High Score abspeichern und am Ende eines Spiels immer den aktuellen Score mit dem High Score vergleichen.
* Der Schlange einen schönen Kopf geben, der nicht einfach ein normales Schlangenelement ist. Es gebe dafür z.B. das Bild [snake_head.png](img/snake_head.png).
* Hindernisse einbauen
* Mehr als einen Apfel gleichzeitig platzieren
* Die Schlange mit einer künstlichen Intelligenz automatisch steuern lassen
* etc.

Deiner Fantasie sollen keine Grenzen gesetzt sein :-)