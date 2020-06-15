from tkinter import *

window = Tk()
window.title("Alien")
window.attributes("-topmost", 1)
c = Canvas(window, height=400, width=400, bg="yellow")
c.pack()

# Wir zeichnen einen Alien
körper = c.create_oval(100, 150, 300, 250, fill="green")
auge = c.create_oval(170, 70, 230, 130, fill="white")
pupille = c.create_oval(190, 90, 210, 110, fill="black")
mund = c.create_oval(150, 220, 250, 240, fill="red")
hals = c.create_line(200, 150, 200, 130, width=10)
hut = c.create_polygon(160, 75, 240, 75, 200, 20, fill="blue")

# Mund auf und zu
def mund_auf(event):
    c.itemconfig(mund, fill="black")

def mund_zu(event):
    c.itemconfig(mund, fill="red")

# Auge zu und auf
def auge_zu(event):
    c.itemconfig(auge, fill="green")
    c.itemconfig(pupille, state=HIDDEN)

def auge_auf(event):
    c.itemconfig(auge, fill="white")
    c.itemconfig(pupille, state=NORMAL)

c.bind_all("<KeyPress-a>", auge_auf)
c.bind_all("<KeyPress-z>", auge_zu)
c.bind_all("<KeyPress-b>", mund_zu)
c.bind_all("<KeyPress-o>", mund_auf)

# Text
text1 = c.create_text(200, 280, text = "Drücke a und z \
um meine Augen auf und zu zu machen.")
text2 = c.create_text(200, 300, text = "Drücke b und o, \
um meinen Mund auf und zu zu machen.")

# Aktivierung des Fensters
window.mainloop()










