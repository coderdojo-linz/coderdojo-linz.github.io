---
title: "Music Player"
description: "Wir programmieren einen Musicplayer in Python, mit dem du deine mp3-Dateien abspielen kannst. "
level: 2
img: "music-player.png"
imgposition: "center top"
---

# Music Player

Wir programmieren einen Musicplayer in Python, mit dem du deine mp3-Dateien abspielen kannst. Für das Interface verwenden wir das Package `Tkinter` und für die Steuerung der Musik benötigen wir `pygame`.

{{< imgblock "img/music-player.png" "" >}}{{< /imgblock >}}

## Voraussetzungen

Übungsbeispiel [Alien](../alien), um schon erste Erfahrungen mit Python und Tkinter gesammelt zu haben.

## Installieren von Packages

Wenn du das erste Mal `pygame` verwendest, dann musst du dieses Package einmal über die Kommmandozeile installieren. Starte dazu den Command Prompt in Windows, indem du auf den Windows Startbutton klickst und nach `cmd` suchst. Tippe folgenden Befehl ein und drücke Enter:

```cmd
py -3 -m pip install pygame
```

Wenn du auf einem Mac arbeitest, dann verwende den Terminal und einen der folgenden Befehle (es kann sein, dass je nach Version deines Betriebssysteme Fehlermeldungen kommen, dann probiere den nächsten Befehl):

```cmd
pip3 install pygame
pip 3 install pygame==1.9.3
pip 3 install pygame==2.0.0.dev6
```

## Python

Starte für Python die Programmierumgebung IDLE und öffne eine neue Datei (`File -> New File`) und speichere die Datei als `Musicplayer.py` auf deinem Computer (`File -> Save As`). Wähle als Dateityp `.pyw`, wenn du mit Windows arbeitest.

## Bilder und Icon

Lade dir die folgenden Bilder für die Knöpfe deines Music Players und das CoderDojo-Icon hier herunter. Speichere alle diese Dateien in dem Verzeichnis, wo auch dein Python-Programm gespeichert ist, in einem Unterverzeichnis `images` ab.

- [coderdojo.ico](img/coderdojo.ico)
- [pause.png](img/pause.png)
- [play.png](img/play.png)
- [stop.png](img/stop.png)

## Musik

Lege auch ein Unterverzeichnis `music` an, indem du einen Song als mp3 abspeicherst. Wir bezeichnen die Datei einmal mit `Song.mp3` (und du verwendest einfach deinen Songtitel).

## Laden von Packages

Zu Beginn laden wir alle benötigten Packages und initialisieren gleich den `mixer` (der ist verantwortlich für das Abspielen der Musik) und eine Variable `paused`, die uns anzeigt, ob die Musik gerade pausiert.

```python
from tkinter import *
import tkinter.messagebox
from tkinter import filedialog
from pygame import mixer
import os

mixer.init()
paused = False
```
 
## Ein Fenster erstellen
Wir starten mit einem neuen Fenster, das wir `window` nennen. Wir wählen eine Hintergrundfarbe für das Fenster, stellen die Größe ein, wählen einen passenden Titel und platzieren neben dem Titel das CoderDojo-Icon.

```python
# Fenster erstellen
bg_color = "lightsteelblue"
window = Tk()
window.geometry("300x260")
window.title("Music Player")
window.iconbitmap("images/coderdojo.ico")
window.configure(background = bg_color)
```
 
## Text anzeigen

So wie im Bild zu Beginn zeigen wir einen Text an für den wir auch die Schriftart, Größe und Farbe anpassen können. Der Text wird in einem sogenannten Label dargestellt.

```python
# Text anzeigen
text = Label(window, text = "Let's make music!",
             font = ("Comic Sans MS", 20, "bold"),
             fg = "red", bg = bg_color)
text.pack()
```
 
## Tasten platzieren

Unter dem Text kommen drei Tasten, mit denen wir das Abspielen der Musik steuern können. Würden wir alle Tasten mit der Methode `pack` im Fenster platzieren, so würden sie alle untereinander dargestellt werden. Es ist daher besser einen eigenen Rahmen (`Frame`) zu erstellen, in dem wir dann die Tasten  mit `grid` in einer Zeile anordnen können. Die Optionen `padx` und `pady` regeln den Abstand zu den anderen Elementen.

```python
# Rahmen für Tasten
frame = Frame(window, bg = bg_color)
frame.pack(padx=10, pady=10)
```
 
Für jede Taste laden wir zuerst das Bild aus unserem images – Ordner und erzeugen dann damit einen Button in unserem Rahmen.

```python
# Play Taste
play_photo = PhotoImage(file = "images/play.png")
play_button = Button(frame, image = play_photo, command = play_music)
play_button.grid(row=0, column=0, padx=10)

# Stop Taste
stop_photo = PhotoImage(file = "images/stop.png")
stop_button = Button(frame, image = stop_photo, command = stop_music)
stop_button.grid(row = 0, column = 1, padx=10)

# Pause Taste
pause_photo = PhotoImage(file = "images/pause.png")
pause_button = Button(frame, image = pause_photo, command = pause_music)
pause_button.grid(row = 0, column = 2, padx=10)
```
 
Du kannst den Code zwischendurch immer wieder testen, indem du das Programm mit `F5` laufen lässt. Du wirst sehen, dass die Tasten vorhanden sind und man auch darauf klicken kann, aber sie führen noch keine Funktion aus. Wie denn auch, wir haben das ja auch noch nicht programmiert. Das kommt etwas später,  zuerst ergänzen wir aber noch unser Interface.

## Lautstärkeregler

Ein Musicplayer muss natürlich auch in der Lage sein, die Lautstärke zu verändern. Dazu verwenden wir einen Schieberegler, den wir mit Hilfe von `Scale` bekommen. Den Bereich des Reglers wählen wir von 0 – 100 und setzen unseren Ausgangswert auf 70.  Das alleine reicht aber noch nicht, wir müssen auch unserem Mixer sagen, dass er die Lautstärke anpassen muss. Der Mixer hat einen Bereich von 0 – 1 für die Lautstärke, d.h. unser Wert 70 auf dem Regler entspricht 0.7 für den Mixer.

```python
# Lautstärke
volume = Scale(window, from_ = 0, to = 100, orient=HORIZONTAL, bg = bg_color,
               command = set_volume)
volume.pack(pady=15)
volume.set(70)
mixer.music.set_volume(0.7)
```
 
## Statuszeile

Ganz unten im Fenster bekommt unser Musicplayer noch eine Statuszeile, wo wir dann z. B. auch den Songtitel anzeigen können. Grundsätzlich wird die Statuszeile wieder in ein Label gepackt, das wir ganz unten über die ganze Fensterbreite platzieren. Als Starttext zeigen wir zunächst „Welcome to Musicplayer“ an.

```python
# Statuszeile
statusbar = Label(window, text="Welcome to Musicplayer",
                  relief=SUNKEN, anchor=W,
                  font=("Calibri", 10, "italic"))
statusbar.pack(side=BOTTOM, fill = X)
```
 
## Die Tasten mit Funktionen belegen

Nun ist es an der Zeit, unseren Tasten die Funktionalität zu geben, die man von ihnen erwartet. Für jede Taste schreiben wir eine Funktion, die wir dann dem jeweiligen Button übergeben. Schreibe diese Funktion am Beginn deines Codes, nachdem du die Packages geladen hast.

Wir beginnen mit der Stop-Taste, die am einfachsten zu programmieren ist. Wir müssen nur den Mixer stoppen und zeigen auch in der Statuszeile an, dass die Musik gestoppt wurde. 

```python
def stop_music():
    mixer.music.stop()
    statusbar["text"] = "Music stopped"
```
 
Bei der Pause-Taste müssen wir noch zusätzlich unsere Variable `paused` auf True setzen. Damit wir den Wert dieser Variable auch außerhalb dieser Funktion kennen, verwenden wir dazu eine globale Variable.

```python
def pause_music():
    global paused
    paused = True
    mixer.music.pause()
    statusbar["text"] = "Music paused"
```
 
Mit der Play-Taste ist es etwas komplexer, weil wir unterscheiden müssen, ob der Song von Beginn weg gespielt wird, oder ob die Wiedergabe nach einer Pause einfach weiterläuft. Für die Wiedergabe verwenden wir unseren Song, der im Verzeichnis `music` gespeichert ist. (Später werden wir aber eine Möglichkeit einbauen, wie man einen Song aus einem beliebigen Verzeichnis laden kann.) In der Statuszeile zeigen wir den Songtitel an, den wir über den `basename` des Dateipfades bekommen.

```python
def play_music():
    global paused
    if paused:
        mixer.music.unpause()
        paused = False
        statusbar["text"] = "Playing music: " + os.path.basename(filename)
    else:
        mixer.music.load(filename)
        mixer.music.play()
        statusbar["text"] = "Playing music: " + os.path.basename(filename)
```
 
Schließlich fehlt noch eine Funktion für unseren Lautstärkeregler. Zu berücksichtigen ist, dass der Schieberegler Werte zwischen 0 und 100 verwendet, im Mixer aber nur ein Bereich von 0 – 1 zur Verfügung steht. Wir rechnen daher vorher den Eingabewert aus dem Regler (`value`) um.

```python
def set_volume(value):
    volume = int(value)/100
    mixer.music.set_volume(volume)
```
 
Nun haben wir alle notwendigen Funktionen definiert und müssen sie nur bei den passenden Buttons einbauen. Mit der Option `command` kann man diese Funktionen zuweisen. Ergänze diese in den drei Buttons und im Lautstärkeregler.

```python
# Play Taste
play_photo = PhotoImage(file = "images/play.png")
play_button = Button(frame, image = play_photo, command = play_music)
play_button.grid(row=0, column=0, padx=10)

# Stop Taste
stop_photo = PhotoImage(file = "images/stop.png")
stop_button = Button(frame, image = stop_photo, command = stop_music)
stop_button.grid(row = 0, column = 1, padx=10)

# Pause Taste
pause_photo = PhotoImage(file = "images/pause.png")
pause_button = Button(frame, image = pause_photo, command = pause_music)
pause_button.grid(row = 0, column = 2, padx=10)

# Lautstärke
volume = Scale(window, from_ = 0, to = 100, orient=HORIZONTAL, bg = bg_color,
               command = set_volume)
volume.pack(pady=15)
volume.set(70)
mixer.music.set_volume(0.7)
```
 
## Ein Menü für unseren Musicplayer

Der folgende Code erzeugt ein Menü für unser Fenster mit den Einträgen „File“ und „Help“. Unter File können wir „Open“ und „Exit“ auswählen. 

```python
# Menü
menubar = Menu(window)
window.config(menu = menubar)

submenu = Menu(menubar, tearoff = 0)
menubar.add_cascade(label = "File", menu = submenu)
submenu.add_command(label = "Open", command = browse_file)
submenu.add_command(label = "Exit", command = exit_player)

submenu = Menu(menubar, tearoff = 0)
menubar.add_cascade(label = "Help", menu = submenu)
submenu.add_command(label = "About us", command = about_us)
```
 
Wählt man "Exit", wird die Musik gestoppt und das Fenster geschlossen. Über "Open" sollte die Auswahl einer Musik-Datei möglich sein und im Eintrag "Help" können wir über die Auswahl von „About us“ eine Information über unseren Musicplayer anzeigen. Die dafür notwendigen Funktionen werden nun definiert und unter den bereits vorhandenen Funktionen platziert:

```python
def browse_file():
    global filename
    filename = filedialog.askopenfilename()

def exit_player():
    mixer.music.stop()
    window.destroy()

def about_us():
    tkinter.messagebox.showinfo(title="About Music Player",
    message ="This is a music player build with Python.")
```
 
## Anpassen der Play-Taste
Über das Menü haben wir jetzt die Möglichkeit eine Datei aus einem beliebigen Verzeichnis auszuwählen. Wir müssen also nicht mehr unseren Song als `filename` angeben, sondern nehmen die Datei, die der User auswählt. 

Was passiert aber, wenn der User auf Play klickt ohne vorher eine Datei auszuwählen?
Dann geben wir eine passende Fehlermeldung aus.

Unsere Funktion `play_music` sieht in der Endversion dann so aus:

```python
def play_music():
    global paused
    if paused:
        mixer.music.unpause()
        paused = False
        statusbar["text"] = "Playing music: " + os.path.basename(filename)
    else:
        try:     
            mixer.music.load(filename)
            mixer.music.play()
            statusbar["text"] = "Playing music: " + os.path.basename(filename)
        except:
            tkinter.messagebox.showerror(title="File not found", \
                    message = "Please load a file first.")
```
 
## Aktivierung des Fensters

Zu guter Letzt gibt es noch einen Befehl, um das Fenster zu aktivieren:

```python
# Aktivierung des Fensters
window.mainloop()
```
 
Nun kannst du das Programm noch einmal testen und deine Lieblingsmusik genießen.

## Erweiterungsmöglichkeiten

Du kannst aus deinem Python-Programm auch eine exe-Datei erzeugen. Diese Datei könntest du auch an deine Freunde weitergeben, die dann deinen Musicplayer auch verwenden können ohne Python zu installieren.

Dazu brauchst du das Package `cx_Freeze`, das du wieder über die Kommandozeile (so wie pygame) installieren kannst.

Dann legst du dir eine neue Python-Datei `setup.py` an, in der du folgenden Code schreibst. Achte darauf, dass der Dateiname in der letzen Zeile mit dem Dateinamen deines Musicplayers übereinstimmt.

```python
import sys
from cx_Freeze import setup, Executable

build_exe_options = {"packages": ["os]}

base = None
if sys.platform == "win32":
    base = "Win32GUI"

setup(  name = "Musicplayer",
        version = "0.1",
        description = "Python Music Player",
        options = {"build_exe": build_exe_options},
        executables = [Executable("Musicplayer.pyw", base=base)])
```
 
Führe dann in der Kommandozeile folgenden Befehl aus:

```cmd
py setup.py build
```
Damit wird ein neuer Ordner „build“ erzeugt, in dem du auch eine exe-Datei findest. Damit diese Anwendung auch richtig ausgeführt werden kann, musst du noch deinen gesamten Ordner mit den Bildern in das Verzeichnis der exe-Datei kopieren. Das sieht dann in etwa so aus:

{{< imgblock "img/build-folder.png" "" >}}{{< /imgblock >}}

Nun hast du einen eigenständigen funktionsfähigen mp3-Player programmiert.

Hier kannst du den gesamten [Sourcecode downloaden](source/Musicplayer.pyw).
