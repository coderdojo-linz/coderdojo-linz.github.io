---
title: "Space Shooter"
description: "In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören."
img: "endgame.png"
imgposition: "center bottom"
level: 2
sprites: 3
scripts: 13
data: 2
---

# Scratch Space Shooter <span class="badge badge-scratch3">Scratch 3.0</span> <a href="scratch-space-shooter.html" class="change-scratch-version">Scratch 2.0</a>

In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören.

## Bühne und Figuren anlegen

1. ![Bühnenbild und Figuren anlegen](01-background.png){: .right}
Als erstes legst du fest, wie deine Bühne aussehen soll. Für dieses Spiel brauchst du das Weltall als Hintergrund. Wähle ein passendes Bild aus oder male selbst eines.

2. ![Raumschiff](02-spaceship.png){: .right}
Als erste Figur brauchst du das Raumschiff. Es besteht aus zwei Kostümen: dem Raumschiff selbst und einem weiteren Kostüm das angezeigt wird, wenn das Spiel vorbei ist. Zeige den Text "Game Over" an oder male ein passendes Bild

3. ![Laser](03-laser.png){: .right}
Die nächste Figur ist der Laserstrahl, der von der Rakete abgefeuert werden kann. Diesen kannst du dir selbst malen.

4. ![Meteroit](04-meteorit.png){: .right}
Und als letzte Figur brauchst du noch einen Meteoriten. Diesen kannst du dir selbst malen.

## Daten

1. ![Daten](05-data.png){: .right}
Wir brauchen für den Space Shooter einige Daten: die Anzahl der Treffer, die Enstehungszeit von Meteoriten, deren Geschwindigkeit und einen Indikator, ob ein Meteroit getroffen wurde. **Achtung**: die Variable getroffen gilt nur für die Figur "Meteroit", alle anderen Variablen gelten für alle Figuren.

## Skripte für das Raumschiff

Das Raumschiff hat drei Aufgaben:

* Es muss erkennen, wann es von einem Meteoriten getroffen wurde und dann das Spiel beenden.
* Mit den Pfeiltasten kann es nach links und rechts bewegt werden.
* Mit den Tasten a und d kann es nach links und rechts gedreht werden.

![Skripte für das Raumschiff](06-spaceship.png)
![](07-spaceship.png)
![](08-spaceship.png)

## Skripte für den Laser

Jedesmal wenn die Leertaste gedrückt wird, muss ein neuer Laserstrahl erzeugt und abgefeuert werden.

![Skripte für den Laser](09-laser.png)
![](10-laser.png)


## Skripte für den Meteoriten

![Skripte für den Meteoriten](11-meteorit.png)
![](12-meteorit.png)
![](13-meteorit.png)
![](14-meteorit.png)
![](15-meteorit.png)
![](16-meteorit.png)

## Weitere Ideen

* Füge Klänge für das Treffen eines Meteoriten und das Zerstören des Raumschiffes hinzu.
* Verwende Variablen um die Geschwindigkeit der Meteoriten und die Anzahl der erzeugten Meteoriten mit der Zeit zu erhöhen.

## Herunterladen

Du kannst das fertige Projekt unter [space-shooter.sb3](space-shooter.sb3) herunterladen.