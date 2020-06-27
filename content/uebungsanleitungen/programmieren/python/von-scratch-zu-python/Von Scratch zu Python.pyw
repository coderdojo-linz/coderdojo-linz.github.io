from turtle import *
from random import random

def vieleck(n, a):
    for i in range(n):
        forward(a)
        right(360/n)

anzahl = 30 # Anzahl der Vielecke
n = 9       # Anzahl der Ecken des Vielecks
a = 50      # Seitenlänge des Vielecks

clear()
speed(1000)
pensize(3)

for i in range(anzahl):
    pencolor(random(), random(), random())
    vieleck(n, a)
    left(360/anzahl)



