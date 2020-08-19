from tkinter import *
import tkinter.messagebox
from tkinter import filedialog
from pygame import mixer
import os

mixer.init()
paused = False

# Funktionen
def browse_file():
    global filename
    filename = filedialog.askopenfilename()

def exit_player():
    mixer.music.stop()
    window.destroy()

def about_us():
    tkinter.messagebox.showinfo(title="About Music Player",
    message ="This is a music player build with Python.")


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
            
def stop_music():
    mixer.music.stop()
    statusbar["text"] = "Music stopped"

def pause_music():
    global paused
    paused = True
    mixer.music.pause()
    statusbar["text"] = "Music paused"

def set_volume(value):
    volume = int(value)/100
    mixer.music.set_volume(volume)

# Fenster erstellen
bg_color = "lightsteelblue"
window = Tk()
window.geometry("300x260")
window.title("Music Player")
window.iconbitmap("images/coderdojo.ico")
window.configure(background = bg_color)

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


# Text anzeigen
text = Label(window, text = "Let's make music!",
             font = ("Comic Sans MS", 20, "bold"),
             fg = "red", bg = bg_color)
text.pack()

# Rahmen für Tasten
frame = Frame(window, bg = bg_color)
frame.pack(padx=10, pady=10)

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

# Statuszeile
statusbar = Label(window, text="Welcome to Musicplayer",
                  relief=SUNKEN, anchor=W,
                  font=("Calibri", 10, "italic"))
statusbar.pack(side=BOTTOM, fill = X)

window.mainloop()

# build executable file
#py setup.py build 

