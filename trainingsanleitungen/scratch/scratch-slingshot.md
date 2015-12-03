---
layout: sushi
title: Scratch Affe füttern
description: Wirf dem Affen mit der Steinschleuder Bananen zu
---

# Scratch Affe füttern

Drücke die Leertaste, um die Steinschleuder zu laden. Je länger du drückst, desto mehr wird die Steinschleuder 
gespannt und desto weiter wirfst du.

<p class="center"><img alt="Snake Game" src="scratch-slingshot/slingshot-affe-fuettern.png" /></p>

Das Spiel besteht aus 4 Figuren und 7 Skripten.

## Figuren anlegen

1. ![Figur löschen](scratch-slingshot/figur-loeschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

1. ![Bühnenbild anlegen](scratch-slingshot/buehne-und-figuren.png){: .right}
Lege ein Bühnenbild und die Figuren für die Steinschleuder, die Bananen, den Affen und das Gummiband an. 
Lege das Gummiband mit dem Pinsel an. Wir brauchen hier keine Figur auszuwählen, da wir das Gummiband später 
mit Hilfe eines Skripts zeichnen werden.

## Daten

1. ![Daten](scratch-slingshot/daten.png){: .right}
Wir brauchen für das Spiel verschiedene Variablen:
<br />**Geschwindigkeit**: sie gibt an, wie schnell die Banane abgeschossen wird und damit auch wie weit sie fliegt
<br />**MaxGeschwindigkeit**: sie gibt an, wie weit die Steinschleuder maximal geladen werden kann
<br />**Winkel**: der Winkel, in dem die Banane geworfen wird, wird verwenden hier 45°
<br />**bereit**: gibt an, ob die Steinschleuder gerade bereit für einen Wurf ist
<br />**t**: die vergangene Zeit während des Wurfs
<br />**x0**: die x-Position der Banane am Beginn des Wurfs
<br />**y0**: die y-Position der Banane am Beginn des Wurfs
<br />Alle Variablen gelten für alle Figuren.

## Skripte für das Gummiband

1. ![Spiel starten](scratch-slingshot/skripte-gummiband.png){: .right}
Das Gummiband enthält unter Kostüme nur ein leeres Kostüm. Wenn die Steinschleuder geladen ist, malen wir mit dem 
Stift das Gummiband. Es muss vom linken Rand der Steinschleuder zur Bananen und zurück zum rechten Rand der Steinschleuder gespannt werden.
  
## Skripte für die Banane

1. ![Skripte Stern](scratch-slingshot/skripte-banane-1.png){: .right}
Die Banane wird beim Drücken der Leertaste in der Steinschleuder eingespannt. Je länger man drückt, desto 
weiter wird die Banane zurückgezogen. So fliegt sie dann weiter.

1. ![Skripte Stern](scratch-slingshot/skripte-banane-2.png){: .right}
Wenn man die Leertaste loslässt, wird die Banane abgefeuert. Hier kommt jetzt die wirklich spannenden Teil. Du 
musst die Flugbahn der Banane berechnen.
	
## Weitere Ideen

* Mach den Winkel mit den Pfeiltaste veränderbar.
* Mache die Steinschleuder mit der Maus steuerbar. Unter [https://scratch.mit.edu/projects/89442992/](https://scratch.mit.edu/projects/89442992/){:target="_blank"} findest 
du ein Beispiel, wie das funktionieren könnte.

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/89889614/](https://scratch.mit.edu/projects/89889614/){:target="_blank"} ausprobieren.