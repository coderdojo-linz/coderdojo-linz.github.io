from tkinter import *
from time import sleep
from PIL import Image, ImageTk
from random import randint

# Leinwand erstellen
H = 550
B = 500
window = Tk()
window.title("Snake")
c = Canvas(window, width=B, height=H)
c.pack()

grid_length = 23

n_bodies0 = 10

n_board_fields = 20
x_left = 20
y_up = 50
x_right = x_left + n_board_fields * grid_length
y_down = y_up + n_board_fields * grid_length

start_pos = [x_left + grid_length * 0.5 + n_board_fields // 2 * grid_length,
             y_up + grid_length * 0.5 + n_board_fields // 2 * grid_length]

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

# Apfel Element vorbereiten
apple_img = Image.open("imgs/apple.png")
apple_img = apple_img.resize((grid_length, grid_length), Image.ANTIALIAS)
apple_img = ImageTk.PhotoImage(apple_img)
apple = None

bodies = []


# Snake Head bewegen
def move_head():
    head_pos[0] += richtung[0] * grid_length
    head_pos[1] += richtung[1] * grid_length


# Neues Body Element erstellen
def new_body():
    bodies.append(c.create_image(head_pos[0], head_pos[1], image=body_img))


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


c.bind_all("<Key>", richtung_aendern)


# Hinterstes Body Element löschen, wenn die Schlange schon zu lange ist
def delete_old_body():
    if len(bodies) > n_bodies:
        c.delete(bodies.pop(0))


def is_outside_board():
    return head_pos[0] < x_left or head_pos[0] > x_right or head_pos[1] > y_down or head_pos[1] < y_up


def does_head_bite_body():
    for body in bodies:
        x, y = c.coords(body)
        if head_pos[0] == x and head_pos[1] == y:
            return True
    return False


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


def head_eats_apple():
    return head_pos[0] == apple_pos[0] and head_pos[1] == apple_pos[1]


def redraw_apple():
    global apple
    if apple is not None:
        c.delete(apple)
    apple = c.create_image(apple_pos[0], apple_pos[1], image=apple_img)

score_text = c.create_text(30, 20, fill="black", font=("Helvetica", 30))

def show_points():
    c.itemconfig(score_text, text=str(score))

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
