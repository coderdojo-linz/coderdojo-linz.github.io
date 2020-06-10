---
title: "Sterne fangen"
description: "Springe hoch, um die herumfliegenden Sterne zu fangen."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center top"
level: 2
version: 3
sprites: 3
scripts: 7
data: 3
aliases:
  - /trainingsanleitungen/scratch/scratch-sterne-fangen-v3.html
---

Verwende die Pfeiltasten nach links und rechts um am Boden zu laufen und die Pfeiltaste nach oben um hochzuspringen. Fange so viele Sterne wie möglich.

Das Spiel basiert auf dem Spiel [Gravity!! von gilnz21](https://scratch.mit.edu/projects/63121636/).

## Figuren anlegen

1. {{< imgblock "img/loeschen.png" "Figur löschen" >}}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite 1* indem du mit der rechten Maustaste darauf klickst. Im angezeigten Menü kannst du Scratchy löschen.
{{< /imgblock >}}

1. {{< imgblock "img/hintergrund.png" "Bühnenbild anlegen" >}}
Suche dir ein Bühnenbild für dein Spiel aus.
{{< /imgblock >}}

1. {{< imgblock "img/pico.png" "Pico hinzufügen" >}}
Füge eine Figur hinzu, die die Sterne fangen soll. In diesem Beispiel haben wir Pico ausgewählt. Passe die Größe der Figur an, so dass sie gut in dein Bühnenbild passt.
{{< /imgblock >}}

1. {{< imgblock "img/stern.png" "Stern hinzufügen" >}}
Füge eine Figur für die zu fangenden Sterne hinzu.
{{< /imgblock >}}

1. {{< imgblock "img/untergrund.png" "Untergrund hinzufügen" >}}
Male eine Figur für den Untergrund, auf dem Pico herumlaufen und springen kann.
{{< /imgblock >}}

## Daten

1. {{< imgblock "img/daten.png" "Daten" 4 >}}
Wir brauchen für das Spiel drei Informationen: die Punkte des Spielers, die Schwerkraft beim Springen und die Zeit. Lege dafür drei Variablen mit den Namen *Punkte*, *Schwerkraft* und *Zeit* an. Alle Variablen gelten für alle Figuren.
{{< /imgblock >}}

## Code für Pico

1. {{< imgblock "img/code-pico-1.png" "Spiel starten" 8 >}}
Wenn das Spiel gestartet wird, setze die Anzahl der Punkt auf 0 und die Zeit auf 20.
Jede Sekunde muss der Wert für die Zeit um 1 reduziert werden. Wenn die Zeit abgelaufen ist, sende eine Nachricht *SpielVorbei* an alle, stoppe die anderen Skripte und sage dem Spieler, wie viele Punkte er erreicht hat.
{{< /imgblock >}}

1. {{< imgblock "img/code-pico-2.png" "Pico nach links und rechts bewegen" 5 >}}
Mit den Pfeiltasten nach links und rechts, soll Pico nach links und rechts laufen, solange er kein Hindernis berührt. Ein Hindernis wird durch die grüne Farbe erkannt.
{{< /imgblock >}}

1. {{< imgblock "img/code-pico-3.png" "Pico springen lassen" 5 >}}
Mit der Pfeiltaste nach oben kann Pico springen, um mehr Sterne zu erwischen.
{{< /imgblock >}}
  
## Code für den Stern

1. {{< imgblock "img/code-stern-1.png" "Code Stern" 7 >}}
Beim Starten des Spiels verstecke gleich den Stern und erzeuge einen ersten Klon. Wenn ein neuer Klon entsteht, warte kurz, dann zeige den Stern und bewege ihn dann zufällig herum.
{{< /imgblock >}}

1. {{< imgblock "img/code-stern-2.png" "Code Stern" 4 >}}
Wenn ein neuer Klon entsteht, warte bis dieser von Pico berührt wird. Dann erhöhe die Punkte um eins, erzeuge einen neuen Klon und lösche den Alten.
{{< /imgblock >}}

1. {{< imgblock "img/code-stern-3.png" "Code Stern" 4 >}}
Wenn die Nachricht "SpielVorbei" gesendet wird, stoppe alle Skripte und lösche den Klon.
{{< /imgblock >}}
	
## Weitere Ideen

* Füge eine Highscore Liste ein.
* Baue mehrere Levels.
* Baue einen Hintergrund, der zufällig generiert wird.

## Herunterladen

Du kannst das fertige Projekt unter [sterne-fangen.sb3](Sterne-fangen.sb3) herunterladen.