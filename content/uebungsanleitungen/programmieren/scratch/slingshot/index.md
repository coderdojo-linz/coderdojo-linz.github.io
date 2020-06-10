---
title: "Affe füttern"
description: "Wirf dem Affen mit der Steinschleuder Bananen zu. Drücke die Leertaste, um die Steinschleuder zu laden. Je länger du drückst, desto mehr wird die Steinschleuder gespannt und desto weiter wirfst du."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 2
version: 3
sprites: 4
scripts: 7
data: 7
aliases:
  - /trainingsanleitungen/scratch/scratch-slingshot-v3.html
---

## Figuren anlegen

1. {{< imgblock "img/loeschen.png" "Figur löschen" >}}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite 1* indem du mit der rechten Maustaste darauf klickst. Im angezeigten Menü kannst du Scratchy löschen.
{{< /imgblock >}}

1. {{< imgblock "img/buehne.png" "Bühnenbild anlegen" >}}
Lege oder male ein Bühnenbild und die Figuren für die Steinschleuder, die Bananen, den Affen und das Gummiband an. Lege das Gummiband mit dem Pinsel an. Wir brauchen hier keine Figur auszuwählen, da wir das Gummiband später mit Hilfe eines Codeblockes zeichnen werden.
{{< /imgblock >}}

## Daten

1. {{< imgblock "img/daten.png" "Daten" 4 >}}
Wir brauchen für das Spiel verschiedene Variablen:

| Variable | Erklärung |
|----|----|
| *Geschwindigkeit* | gibt an, wie schnell die Banane abgeschossen wird und damit auch wie weit sie fliegt |
| *MaxGeschwindigkeit* | sie gibt an, wie weit die Steinschleuder maximal geladen werden kann |
| *Winkel* | der Winkel, in dem die Banane geworfen wird, wird verwenden hier 45° |
| *bereit* | gibt an, ob die Steinschleuder gerade bereit für einen Wurf ist |
| *t* | die vergangene Zeit während des Wurfs |
| *x0* | die x-Position der Banane am Beginn des Wurfs |
| *y0* | die y-Position der Banane am Beginn des Wurfs |

Alle Variablen gelten für alle Figuren.
{{< /imgblock >}}

## Skripte für das Gummiband

{{< imgblock "img/code-gummi.png" "Spiel starten" 8 >}}
Das Gummiband enthält unter Kostüme nur ein leeres Kostüm. Wenn die Steinschleuder geladen ist, malen wir mit dem Stift das Gummiband. Es muss vom linken Rand der Steinschleuder zur Bananen und zurück zum rechten Rand der Steinschleuder gespannt werden.
{{< /imgblock >}}
  
## Skripte für die Banane

{{< imgblock "img/code-banane-1.png" "Code" >}}
Die Banane wird beim Drücken der Leertaste in der Steinschleuder eingespannt. Je länger man drückt, desto weiter wird die Banane zurückgezogen. So fliegt sie dann weiter.
{{< /imgblock >}}

{{< imgblock "img/code-banane-2.png" "Code" 6 >}}{{< /imgblock >}}

{{< imgblock "img/code-banane-3.png" "Code" 9 >}}
Wenn man die Leertaste loslässt, wird die Banane abgefeuert. Hier kommt jetzt der wirklich spannenden Teil. Du musst die Flugbahn der Banane berechnen.
{{< /imgblock >}}

## Weitere Ideen

* Mach den Winkel mit den Pfeiltasten veränderbar.

## Herunterladen

Du kannst das fertige Projekt unter [steinschleuder.sb3](sling-shot.sb3) herunterladen.
