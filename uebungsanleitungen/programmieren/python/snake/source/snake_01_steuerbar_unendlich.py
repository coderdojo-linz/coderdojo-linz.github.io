from tkinter import *
from time import sleep
from PIL import Image, ImageTk

# Leinwand erstellen
H = 500
B = 500
window = Tk()
window.title("Snake")
c = Canvas(window, width=B, height = H)
c.pack()

grid_length= 23

# Snake Körper zeichnen
body_img = Image.open("imgs/snake_body.png")
body_img = body_img.resize((grid_length, grid_length), Image.ANTIALIAS)
body_img = ImageTk.PhotoImage(body_img)

richtung = (1,0)
head_pos = [B/2, H/2]

# Snake Head bewegen
def move_head():
    head_pos[0]+= richtung[0]*grid_length
    head_pos[1]+= richtung[1]*grid_length

# Neues Body Element erstellen
def new_body():
    c.create_image(head_pos[0], head_pos[1], image=body_img)

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

sleep_seconds = 0.2
while True:
    move_head()
    new_body()
    window.update()
    sleep(sleep_seconds)