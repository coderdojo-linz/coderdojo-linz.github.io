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
n_bodies = 10

n_board_fields = 20
x_left = 20
y_up = 20
x_right = x_left + n_board_fields * grid_length
y_down = y_up + n_board_fields * grid_length

start_pos= [x_left+ grid_length*0.5+ n_board_fields//2*grid_length, y_up + grid_length*0.5 + n_board_fields//2*grid_length]

# Board zeichnen
line_width = 5
c.create_line(x_left, y_down, x_left, y_up, width=line_width)
c.create_line(x_right, y_down, x_right, y_up, width=line_width)
c.create_line(x_left, y_up, x_right, y_up, width=line_width)
c.create_line(x_left, y_down, x_right, y_down, width=line_width)

# Snake Körper Element vorbereiten
body_img = Image.open("imgs/snake_body.png")
body_img = body_img.resize((grid_length, grid_length), Image.ANTIALIAS)
body_img = ImageTk.PhotoImage(body_img)

bodies = []

# Snake Head bewegen
def move_head():
    head_pos[0]+= richtung[0]*grid_length
    head_pos[1]+= richtung[1]*grid_length

# Neues Body Element erstellen
def new_body():
    bodies.append(c.create_image(head_pos[0], head_pos[1], image=body_img))

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

# Hinterstes Body Element löschen, wenn die Schlange schon zu lange ist
def delete_old_body():
    if len(bodies)>n_bodies:
        c.delete(bodies.pop(0))

def is_outside_board():
    return head_pos[0]<x_left or head_pos[0] > x_right or head_pos[1] > y_down or head_pos[1] < y_up

def does_head_bite_body():
    for body in bodies:
        x,y = c.coords(body)
        if head_pos[0] == x and head_pos[1] == y:
            return True
    return False

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

