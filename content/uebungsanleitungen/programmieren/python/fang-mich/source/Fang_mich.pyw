from tkinter import *
from PIL import ImageTk, Image
from time import sleep
from random import randint
import math

# Leinwand erstellen
window = Tk()
window.title("Fang mich")
H = 800
B = 1000
c = Canvas(window, height = H, width = B)
c.pack()

# Hintergrund erstellen
bg_image = PhotoImage(file="Unterwasserwelt.png")
bg = c.create_image(0, 0, anchor = NW, image=bg_image)

# Figuren laden
fish_image = PhotoImage(file="Fisch.png")
fish = c.create_image(0, 0, image=fish_image)
hai_img = Image.open("Hai.png")

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

# Abstand zwischen Fisch und Hai
def abstand(fish, hai):
    x1, y1 = c.coords(fish)
    x2, y2 = c.coords(hai)
    a = math.sqrt((x2-x1)**2 + (y2-y1)**2)
    return a

# Fisch gefangen
def fangen(fish, hai):
    if abstand(fish, hai) < (HAI_R + FISH_R):
        gefangen = True
        c.itemconfig(fish, state=HIDDEN)
    else:
        gefangen = False
    return gefangen

# Anzeige von Text für eine bestimmte Zeit
def zeige_text(nachricht, x, y, farbe, schrift, größe, zeit):
    text = c.create_text(x, y, text=nachricht, fill = farbe, font =(schrift, größe))
    window.update()
    sleep(zeit)
    c.itemconfig(text, state = HIDDEN)
    window.update()
    
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

# Aktivierung des Fensters
window.mainloop()

