---
layout: sushi
title: Scratch Space Shooter
description: In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören.
---

# Scratch Space Shooter

In dieser Übung schießt du mit deinem Raumschiff herabfallende Meteoriten ab bevor sie dein Raumschiff zerstören.

## Bühne und Figuren anlegen

1. ![Bühnenbild und Figuren anlegen](scratch-space-shooter-v3/01-background.png){: .right}
Als erstes legst du fest, wie deine Bühne aussehen soll. Für dieses Spiel brauchst du das Weltall als Hintergrund. 
Wähle ein passendes Bild aus oder male selbst eines.

2. ![Raumschiff](scratch-space-shooter-v3/02-spaceship.png){: .right}
Als erste Figur brauchst du das Raumschiff. Es besteht aus zwei Kostümen: dem Raumschiff selbst und einem weiteren Kostüm das angezeigt wird, 
wenn das Spiel vorbei ist. Zeige den Text "Game Over" an oder male ein passendes Bild

3. ![Laser](scratch-space-shooter-v3/03-laser.png){: .right}
Die nächste Figur ist der Laserstrahl, der von der Rakete abgefeuert werden kann.

4. ![Meteroit](scratch-space-shooter-v3/04-meteorit.png){: .right}
Und als letzte Figur brauchst du noch einen Meteoriten.

## Daten

1. ![Daten](scratch-space-shooter-v3/05-data.png){: .right}
Wir brauchen für den Space Shooter einige Daten: die Anzahl der Treffer, die Enstehungszeit von Meteoriten, deren Geschwindigkeit und 
einen Indikator, ob ein Meteroit getroffen wurde. ACHTUNG: die Variable getroffen gilt nur für die Figur "Meteroit", 
alle anderen Variablen gelten für alle Figuren.

## Skripte für das Raumschiff

Das Raumschiff hat drei Aufgaben:

<div class="plainOrderedList">
    <ol>
        <li>Es muss erkennen, wann es von einem Meteoriten getroffen wurde und dann das Spiel beenden.</li>
        <li>Mit den Pfeiltasten kann es nach links und rechts bewegt werden.</li>
        <li>Mit den Tasten a und d kann es nach links und rechts gedreht werden.</li>
    </ol>
</div>

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

* Füge Klänge für das Abfeuern eines Laserstrahls, für das Treffen eines Metoriten und das Zerstören des Raumschiffes hinzu.
* Verwende Variablen um die Geschwindigkeit der Meteoriten und die Anzahl der erzeugten Meteoriten mit der Zeit zu erhöhen