from tkinter import *
from time import sleep
from PIL import Image, ImageTk
from random import randint


# Leinwand erstellen
H = 500
B = 500
window = Tk()
window.title("Snake")
c = Canvas(window, width=B, height = H)
c.pack()

n_bodies = 4

grid_length= 23
n_board_fields = 20

body_img = Image.open("snake_body.png")
body_img = body_img.resize((grid_length,grid_length))
body_img = ImageTk.PhotoImage(body_img)

apple_img = Image.open("apple.png")
apple_img = apple_img.resize((grid_length,grid_length))
apple_img = ImageTk.PhotoImage(apple_img)
    
def redraw_apple():
    c.create_image(apple_pos[0],apple_pos[1],image=apple_img)

head_pos = [B/2, H/2]
richtung = (1,0)
bodies = []
apple_pos=[]

def richtung_aendern(event):
    global richtung
    print(event.keysym)
    if event.keysym == "Up":
        richtung = (0, -1)
    elif event.keysym == "Down":
        richtung = (0,1)
    elif event.keysym == "Left":
        richtung = (-1,0)
    elif event.keysym == "Right":
        richtung = (1,0)
        
c.bind_all("<Key>", richtung_aendern)

def gen_apple_pos():
    candidate = [grid_length*0.5 + randint(0,n_board_fields-1)*grid_length,
                  grid_length*0.5 + randint(0,n_board_fields-1)*grid_length]
    return candidate

def move_head():
    head_pos[0]=head_pos[0] + richtung[0]*23
    head_pos[1]=head_pos[1] + richtung[1]*23

def new_body():
    body = c.create_image(head_pos[0], head_pos[1],image=body_img)
    bodies.append(body)

def delete_old_body():
    if len(bodies)>n_bodies:
        body = bodies.pop(0)
        c.delete(body)

apple_pos = gen_apple_pos()
redraw_apple()
while True:
    move_head()
    new_body()
    delete_old_body()
    window.update()
    sleep(0.5)
