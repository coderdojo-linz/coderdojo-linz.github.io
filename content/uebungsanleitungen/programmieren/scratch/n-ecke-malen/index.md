---
title: "n-Ecke malen"
description: "In dieser Übung lässt du Scratchy Figuren mit beliebig vielen Ecken malen, wie zum Beispiel ein Dreieck oder ein Viereck."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgcover: false
level: 1
version: 2
sprites: 3
scripts: 9
data: 0
aliases:
- /trainingsanleitungen/scratch/scratch-n-ecke-malen.html
---

## Lösche vorhandene Malspuren und schalte den Stift ein

1. {{< imgblock "img/scratch-malflaeche-initialisieren.png" "Malfläche initialisieren" >}}
Wische alle bereits vorhandenen Malspuren weg, schalte den Stift ein und wähle eine Farbe und Dicke für den Stift.
{{< /imgblock >}}

## Lass Scratchy fragen, wie viele Ecken sie malen soll

1. {{< imgblock "img/anzahl-ecken-abfragen.png" "Anzahl der Ecken abfragen" >}}
Lass Scratchy fragen *Wie viele Ecken soll die Figur haben, die ich malen soll?* Du bekommst unten ein Eingabefeld, indem du angeben musst, wieviel Ecken die Figur haben soll.
{{< /imgblock >}}

2. {{< imgblock "img/input.png" "Anzahl der Ecken abfragen" >}}
So sieht es aus, wenn Scratchy um die Anzahl an Ecken fragt:
{{< /imgblock >}}

## Male eine Figur mit der angegebenen Anzahl an Ecken

1. {{< imgblock "img/male-n-kanten.png" "Anzahl der Kanten malen" >}}
Eine Figur mit 3 Ecken (Dreieck) muss aus drei Kanten bestehen, eine Figur mit vier Ecken (Viereck) braucht vier Kanten. Für ein Dreieck kannst du Scratchy dreimal sagen, dass sie eine Linie malen soll und sich dann um einen Drittelkreis, also 120 Grad, drehen soll. Für ein Viereck musst du die beiden Anweisungen vier mal wiederholen.

Damit du beliebig viele Kanten malen kannst, kannst du einen Block einfügen, der die beiden Aufgaben *Linie malen* und *um x Grad drehen* beliebig oft wiederholt.
Wir müssen das Malen der Kante so oft wiederholen, wie wir als Antwort auf Scratchies Frage angegeben haben.
{{< /imgblock >}}

2. {{< imgblock "img/kante-malen.png" "Kanten malen" >}}
Innerhalb des Wiederhol-Blocks gibst du nun nur einmal an, dass Scratch 100 Schritte gehen soll und sich dann nach rechts drehen soll.<br/><br/>
Um herauszufinden, um wie viele Grad sich Scratchy drehen soll, musst du wissen, dass für eine geschlossene Figur in Summe immer 360 Grad notwendig sind. Wenn du nun für ein Dreieck drei Drehungen brauchst, dann muss jede davon 360 : 3 = 120 Grad groß sein. Für ein Viereck brauchst du vier Drehungen mit 360 : 4 = 90 Grad.<br/><br/>
Du kannst im Befehl *drehe dich um x Grad* also 360 durch die Anzahl der gewünschten Ecken dividieren.
{{< /imgblock >}}

3. {{< imgblock "img/ausgabe.png" "Ergebnis ausgeben" >}}
Lass Scratchy, wenn sie fertig ist, sagen, was sie gemacht hat. Damit sie die Antwort auf die Frage 
*Wie viele Ecken soll die Figur haben, die ich malen soll?* einbauen kann, musst du mehrere Text-Teile verbinden.
{{< /imgblock >}}

{{< imgblock "img/fertige-figur.png" "Anzahl der Kanten malen" >}}{{< /imgblock >}}

4. {{< imgblock "img/anzahl-schritte-anpassen.png" "Anzahl der Schritte anpassen" >}}
Du kannst jetzt Figuren mit vielen Ecken malen. Je mehr Ecken die Figur hat, desto größer wird sie. Ab ungefähr 10 Ecken reicht der Platz auf der Malfläche nicht mehr aus und Scratchy kann die Figur nicht mehr richtig malen.

Damit die Figur auch bei mehr Ecken wieder Platz hast, musst du die Anzahl der Schritte anpassen. Die gesamte Malfläche ist 480 breit. Wir dividieren diese Zahl durch die Anzahl der Ecken - so hat die Figur auch bei vielen Ecken wieder Platz.
{{< /imgblock >}}

5. {{< imgblock "img/kreis.png" "Kreis malen" >}}
Je mehr Ecken du Scratchy malen lässt, desto ähnlicher wird die Figur einem Kreis.
{{< /imgblock >}}

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/69094342/](https://scratch.mit.edu/projects/69094342/) ausprobieren.