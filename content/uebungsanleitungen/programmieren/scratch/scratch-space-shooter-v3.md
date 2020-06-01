---

title: Scratch Space Shooter
description: In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören.
scratch-images:
- scratch-space-shooter-v3/endgame.png
- scratch-space-shooter-v3/code-space-shooter-1.png
level: 2
scratch-sprites: 3
scratch-scripts: 13
scratch-data: 2
---

# Scratch Space Shooter <span class="badge badge-scratch3">Scratch 3.0</span> <a href="scratch-space-shooter.html" class="change-scratch-version">Scratch 2.0</a>

In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören.

## Bühne und Figuren anlegen

1. ![Bühnenbild und Figuren anlegen](scratch-space-shooter-v3/01-background.png){: .right}
Als erstes legst du fest, wie deine Bühne aussehen soll. Für dieses Spiel brauchst du das Weltall als Hintergrund. Wähle ein passendes Bild aus oder male selbst eines.

2. ![Raumschiff](scratch-space-shooter-v3/02-spaceship.png){: .right}
Als erste Figur brauchst du das Raumschiff. Es besteht aus zwei Kostümen: dem Raumschiff selbst und einem weiteren Kostüm das angezeigt wird, wenn das Spiel vorbei ist. Zeige den Text "Game Over" an oder male ein passendes Bild

3. ![Laser](scratch-space-shooter-v3/03-laser.png){: .right}
Die nächste Figur ist der Laserstrahl, der von der Rakete abgefeuert werden kann. Diesen kannst du dir selbst malen.

4. ![Meteroit](scratch-space-shooter-v3/04-meteorit.png){: .right}
Und als letzte Figur brauchst du noch einen Meteoriten. Diesen kannst du dir selbst malen.

## Daten

1. ![Daten](scratch-space-shooter-v3/05-data.png){: .right}
Wir brauchen für den Space Shooter einige Daten: die Anzahl der Treffer, die Enstehungszeit von Meteoriten, deren Geschwindigkeit und einen Indikator, ob ein Meteroit getroffen wurde. **Achtung**: die Variable getroffen gilt nur für die Figur "Meteroit", alle anderen Variablen gelten für alle Figuren.

## Skripte für das Raumschiff

Das Raumschiff hat drei Aufgaben:

* Es muss erkennen, wann es von einem Meteoriten getroffen wurde und dann das Spiel beenden.
* Mit den Pfeiltasten kann es nach links und rechts bewegt werden.
* Mit den Tasten a und d kann es nach links und rechts gedreht werden.

![Skripte für das Raumschiff](scratch-space-shooter-v3/06-spaceship.png)
![](scratch-space-shooter-v3/07-spaceship.png)
![](scratch-space-shooter-v3/08-spaceship.png)

## Skripte für den Laser

Jedesmal wenn die Leertaste gedrückt wird, muss ein neuer Laserstrahl erzeugt und abgefeuert werden.

![Skripte für den Laser](scratch-space-shooter-v3/09-laser.png)
![](scratch-space-shooter-v3/10-laser.png)


## Skripte für den Meteoriten

![Skripte für den Meteoriten](scratch-space-shooter-v3/11-meteorit.png)
![](scratch-space-shooter-v3/12-meteorit.png)
![](scratch-space-shooter-v3/13-meteorit.png)
![](scratch-space-shooter-v3/14-meteorit.png)
![](scratch-space-shooter-v3/15-meteorit.png)
![](scratch-space-shooter-v3/16-meteorit.png)

## Weitere Ideen

* Füge Klänge für das Treffen eines Meteoriten und das Zerstören des Raumschiffes hinzu.
* Verwende Variablen um die Geschwindigkeit der Meteoriten und die Anzahl der erzeugten Meteoriten mit der Zeit zu erhöhen.

## Herunterladen

Du kannst das fertige Projekt unter [space-shooter.sb3](scratch-space-shooter-v3/space-shooter.sb3) herunterladen.