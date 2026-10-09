---
title: Parrot Escape
description: Fliege mit dem Papagei der Freiheit entgegen.
level: 2
img: "game.png"
type: "uebungsanleitungen/programmieren/scratch"
imgposition: "center top"
version: 1
sprites: 2
scripts: 6
data: 3
aliases:
  - /trainingsanleitungen/scratch/parrot-escape.html
---

## Vorbereitung

Du benötigst für das Spiel:

- einen Hintergrund (wähle aus, was dir gefällt)
- den Vogel **Parrot** aus der Scratch-Bibliothek
- Wände, die du selbst zeichnen oder als [Figur](assets/Wand.sprite3) herunterladen kannst

Wenn du den Hintergrund und alle Figuren eingerichtet hast, können wir loslegen.

## Der Vogel

{{< imgblock "img/parrot_variablen.png" "Variablen für den Vogel" 2 >}}
Zuerst legen wir zwei Variablen an. Wähle für beide die Option **Nur für diese Figur**:

- **Fallgeschwindigkeit**
- **Flattern**
{{< /imgblock >}}

{{< imgblock "img/parrot_main_loop.png" "Hauptschleife des Vogels" 5 >}}
Jetzt geht es los.

Der Papagei soll **links in der Mitte** starten, das **erste Kostüm** tragen, **nicht fallen** und **sichtbar sein**. Die ersten vier Blöcke kümmern sich darum.

Danach kommt die Hauptschleife. Sie erledigt Folgendes:

- Sie lässt den Vogel entsprechend seiner **Fallgeschwindigkeit** nach unten fallen.
- Sie überprüft, ob der Vogel eine **Wand** oder den **Rand** berührt. Wenn das passiert, **piept der Vogel** kurz und das **Spiel ist vorbei**.
{{< /imgblock >}}

{{< imgblock "img/parrot_fly_and_fall.png" "Schwerkraft und Steuerung des Vogels" 4 >}}
Das ist natürlich noch nicht alles. 😎

Wenn du die **Leertaste** drückst, soll der Vogel flattern und sich nach oben bewegen. **Ansonsten** zieht ihn die Schwerkraft nach unten und er fällt immer schneller.

**Fleißaufgabe:** Fällt dir an diesem Programmteil etwas auf? Könnte man ihn eleganter gestalten? 🤔
{{< /imgblock >}}

{{< imgblock "img/parrot_flapping.png" "Den Vogel flattern lassen" 3 >}}
Damit der Vogel sichtbar flattert, lassen wir ihn zwischen zwei Kostümen wechseln. Das passiert nur, wenn die Variable **Flattern** auf 1 steht.

Steht sie auf 0, zeigt der Vogel wieder sein erstes Kostüm.
{{< /imgblock >}}

Damit ist der Vogel fertig. Probiere ihn gleich einmal aus.

## Die Wände als Hindernisse

Die Wände sind längliche Figuren mit einer Lücke in der Mitte, durch die der Vogel fliegen kann. Wenn du eine Wand selbst zeichnest, achte darauf, dass sie oben und unten weit über den sichtbaren Spielfeldrand hinausragt.

Die Wände bewegen sich vom rechten zum linken Spielfeldrand. Wenn eine Wand den linken Rand erreicht, verschwindet sie und du erhältst einen Punkt.
{{< imgblock "img/points.png" "Punkte" 3 >}}
Damit die Punkte gezählt werden können, lege die Variable **Punkte** an. Wähle dafür die Option **Für alle Figuren**.
{{< /imgblock >}}

{{< imgblock "img/walls_main_loop.png" "Wände entstehen lassen" 4 >}}
Zu Beginn:

- setzen wir die Variable **Punkte** auf 0,
- **verstecken** die Wand und
- **drehen** sie in die **senkrechte Position**.

Danach wird die Wand alle fünf bis acht Sekunden geklont.
{{< /imgblock >}}

{{< imgblock "img/walls_lifecycle.png" "Geklonte Wand" 4 >}}
Sobald ein Klon entstanden ist:

- bewegen wir ihn **an den rechten Rand**,
- geben ihm eine **zufällige Höhe** und
- machen ihn **sichtbar**.

Dann warten wir, bis der Klon weit genug links ist. Anschließend **erhöhen wir die Punktzahl um eins** und **löschen den Klon**. Dadurch verschwindet diese Wand.
{{< /imgblock >}}

{{< imgblock "img/walls_movement.png" "Wände bewegen" 3 >}}
Die Wand soll sich gleichmäßig nach links bewegen.
{{< /imgblock >}}

## Fertig

Damit ist dein Spiel fertig. Viel Spaß damit!

Wenn dein Spiel nicht funktioniert oder du das fertige Spiel ausprobieren möchtest, kannst du es [hier spielen](https://scratch.mit.edu/projects/1390054726/).
