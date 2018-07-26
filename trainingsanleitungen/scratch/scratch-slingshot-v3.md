---
layout: sushi
title: Scratch Affe füttern
description: Wirf dem Affen mit der Steinschleuder Bananen zu
---

# Scratch Affe füttern

Drücke die Leertaste, um die Steinschleuder zu laden. Je länger du drückst, desto mehr wird die Steinschleuder gespannt und desto weiter wirfst du.

![Endgame](scratch-slingshot-v3/endgame.png){: .right}

Das Spiel besteht aus 4 Figuren und 7 Codeblöcken.

## Figuren anlegen

1. ![Figur löschen](scratch-slingshot-v3/löschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite 1* indem du mit der rechten Maustaste darauf klickst. Im angezeigten Menü kannst du Scratchy löschen.

1. ![Bühnenbild anlegen](scratch-slingshot-v3/bühne.png){: .right}
Lege oder male ein Bühnenbild und die Figuren für die Steinschleuder, die Bananen, den Affen und das Gummiband an. Lege das Gummiband mit dem Pinsel an. Wir brauchen hier keine Figur auszuwählen, da wir das Gummiband später mit Hilfe eines Codeblockes zeichnen werden.

## Daten

1. ![Daten](scratch-slingshot-v3/daten.png){: .right}
Wir brauchen für das Spiel verschiedene Variablen:
**Geschwindigkeit**: sie gibt an, wie schnell die Banane abgeschossen wird und damit auch wie weit sie fliegt
**MaxGeschwindigkeit**: sie gibt an, wie weit die Steinschleuder maximal geladen werden kann
**Winkel**: der Winkel, in dem die Banane geworfen wird, wird verwenden hier 45°
**bereit**: gibt an, ob die Steinschleuder gerade bereit für einen Wurf ist
**t**: die vergangene Zeit während des Wurfs
**x0**: die x-Position der Banane am Beginn des Wurfs
**y0**: die y-Position der Banane am Beginn des Wurfs
Alle Variablen gelten für alle Figuren.

## Skripte für das Gummiband

Das Gummiband enthält unter Kostüme nur ein leeres Kostüm. Wenn die Steinschleuder geladen ist, malen wir mit dem Stift das Gummiband. Es muss vom linken Rand der Steinschleuder zur Bananen und zurück zum rechten Rand der Steinschleuder gespannt werden.

![Spiel starten](scratch-slingshot-v3/code-gummi.png)
  
## Skripte für die Banane

Die Banane wird beim Drücken der Leertaste in der Steinschleuder eingespannt. Je länger man drückt, desto weiter wird die Banane zurückgezogen. So fliegt sie dann weiter.

![Code](scratch-slingshot-v3/code-banane-1.png)

![Code](scratch-slingshot-v3/code-banane-2.png)

Wenn man die Leertaste loslässt, wird die Banane abgefeuert. Hier kommt jetzt die wirklich spannenden Teil. Du musst die Flugbahn der Banane berechnen.

![Code](scratch-slingshot-v3/code-banane-3.png)

## Weitere Ideen

* Mach den Winkel mit den Pfeiltaste veränderbar.