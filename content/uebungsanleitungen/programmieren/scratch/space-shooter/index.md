---
title: "Space Shooter"
description: "In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 2
version: 3
sprites: 3
scripts: 13
data: 2
aliases:
- /trainingsanleitungen/scratch/scratch-space-shooter-v3.html
---

## Bühne und Figuren anlegen

1. {{< imgblock "img/01-background.png" "Bühnenbild und Figuren anlegen" >}}
Als erstes legst du fest, wie deine Bühne aussehen soll. Für dieses Spiel brauchst du das Weltall als Hintergrund. Wähle ein passendes Bild aus oder male selbst eines.
{{< /imgblock >}}

2. {{< imgblock "img/02-spaceship.png" "Raumschiff" 3 >}}
Als erste Figur brauchst du das Raumschiff. Es besteht aus zwei Kostümen: dem Raumschiff selbst und einem weiteren Kostüm das angezeigt wird, wenn das Spiel vorbei ist. Zeige den Text "Game Over" an oder male ein passendes Bild
{{< /imgblock >}}

3. {{< imgblock "img/03-laser.png" "Laser" 3 >}}
Die nächste Figur ist der Laserstrahl, der von der Rakete abgefeuert werden kann. Diesen kannst du dir selbst malen.
{{< /imgblock >}}

4. {{< imgblock "img/04-meteorit.png" "Meteroit" 3 >}}
Und als letzte Figur brauchst du noch einen Meteoriten. Diesen kannst du dir selbst malen.
{{< /imgblock >}}

## Daten

1. {{< imgblock "img/05-data.png" "Daten" >}}
Wir brauchen für den Space Shooter einige Daten: die Anzahl der Treffer, die Enstehungszeit von Meteoriten, deren Geschwindigkeit und einen Indikator, ob ein Meteroit getroffen wurde. **Achtung**: die Variable getroffen gilt nur für die Figur "Meteroit", alle anderen Variablen gelten für alle Figuren.
{{< /imgblock >}}

## Skripte für das Raumschiff

Das Raumschiff hat drei Aufgaben:

* Es muss erkennen, wann es von einem Meteoriten getroffen wurde und dann das Spiel beenden.
* Mit den Pfeiltasten kann es nach links und rechts bewegt werden.
* Mit den Tasten a und d kann es nach links und rechts gedreht werden.

{{< imgblock "img/06-spaceship.png" "Skripte für das Raumschiff" >}}{{< /imgblock >}}
{{< imgblock "img/07-spaceship.png" "" >}}{{< /imgblock >}}
{{< imgblock "img/08-spaceship.png" "" >}}{{< /imgblock >}}

## Skripte für den Laser

Jedesmal wenn die Leertaste gedrückt wird, muss ein neuer Laserstrahl erzeugt und abgefeuert werden.

{{< imgblock "img/09-laser.png" "Skripte für den Laser" >}}{{< /imgblock >}}
{{< imgblock "img/10-laser.png" "" >}}{{< /imgblock >}}


## Skripte für den Meteoriten

{{< imgblock "img/11-meteorit.png" "Skripte für den Meteoriten" >}}{{< /imgblock >}}
{{< imgblock "img/12-meteorit.png" "" >}}{{< /imgblock >}}
{{< imgblock "img/13-meteorit.png" "" >}}{{< /imgblock >}}
{{< imgblock "img/14-meteorit.png" "" >}}{{< /imgblock >}}
{{< imgblock "img/15-meteorit.png" "" >}}{{< /imgblock >}}
{{< imgblock "img/16-meteorit.png" "" >}}{{< /imgblock >}}

## Weitere Ideen

* Füge Klänge für das Treffen eines Meteoriten und das Zerstören des Raumschiffes hinzu.
* Verwende Variablen um die Geschwindigkeit der Meteoriten und die Anzahl der erzeugten Meteoriten mit der Zeit zu erhöhen.

## Herunterladen

Du kannst das fertige Projekt unter [space-shooter.sb3](space-shooter.sb3) herunterladen.