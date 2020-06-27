from tkinter import *
from random import *
from time import sleep, time

# Leinwand erstellen
H = 500
B = 800
window = Tk()
window.title("Bubble Blaster")
c = Canvas(window, width=B, height = H, bg = "darkblue")
c.pack()

# U-Boot zeichnen
img = PhotoImage(file="uboot.png")
uboot = c.create_image(B/2, H/2, image=img)
UBOOT_R = 45

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

# Bubbles bewegen
def bewege_bubbles():
    for i in range(len(bub_id)):
        c.move(bub_id[i], -bub_geschw[i], 0)

# Bubble löschen
def lösche_bubble(i):
    c.delete(bub_id[i])
    del bub_id[i]
    del bub_geschw[i]

# Bubbles entfernen (wenn sie über den Bildschirm gewandert sind)
def entferne_bubbles():
    for i in range(len(bub_id)-1, -1, -1):
        x, y = c.coords(bub_id[i])
        if x < -GAP:
            lösche_bubble(i)
            
# Entfernung zwischen Punkten
from math import sqrt
def abstand(uboot, id_bubble):
    x1, y1 = c.coords(uboot)
    x2, y2 = c.coords(id_bubble)
    a = sqrt((x2-x1)**2 + (y2-y1)**2)
    return a

# Bubbles platzen lassen (wenn sie vom U-Boot getroffen werden)
def treffer():
    punkte = 0
    for i in range(len(bub_id)-1, -1, -1):
        if abstand(uboot, bub_id[i]) < (UBOOT_R + BUB_R):
            punkte += (BUB_R + bub_geschw[i])
            lösche_bubble(i)
    return punkte

# Zeit und Punkte anzeigen
c.create_text(50, 30, text = "ZEIT", fill="white")
c.create_text(150, 30, text = "PUNKTE", fill="white")
time_text = c.create_text(50, 50, fill="white")
score_text = c.create_text(150, 50, fill="white")
def zeige_punkte(score):
    c.itemconfig(score_text, text = str(score))
def zeige_zeit(time_left):
    c.itemconfig(time_text, text=str(time_left))
         
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

# Aktivierung des Fensters
window.mainloop()


