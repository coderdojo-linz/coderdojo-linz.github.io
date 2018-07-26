---
layout: sushi
title: Scratch Snake
description: Lass die Schlange die Äpfel aufsammeln aber berühre nicht den Rand und verwickle dich nicht, wenn die Schlange länger wird.
---

# Scratch Snake

![Endgame](scratch-snake-v3/endgame.png){: .right}
Steuere die Schlange, um die Äpfel aufzusammeln. Aber pass auf, dass du nicht den Rand berührst und auch keinen Knoten in die Schlange machst, wenn sie länger wird.
Das Spiel besteht aus 3 Figuren und 14 Skripten.

## Bühne & Figuren

![](scratch-snake-v3/bühne.png)
Das Spiel besteht aus drei Figuren: der Schlange, dem Apfel und einer Nachricht, wenn das Spiel zu Ende ist. Für dieses Spiel brauchen wir kein Bühnenbild. Du kannst es einfach weiß lassen. Die Schlange besteht aus zwei Kostümen: Kopf und Körper. Der Kopf und der Körper der Schlange dürfen nicht größer als 20 sein. Nur die Zunge beim Kopf darf das überschreiten. Am besten, du malst zuerst den Körper mit einer Größe von 20, kopierst diesen dann für den Kopf und fügst Augen und eine Zunge hinzu. Beachte auch, dass der Körper eine andere Farbe als der Kopf haben muss.

Schlange [Figur downloaden](https://scratch-snake-v3/Schlange.sprite2/){:target="_blank"}
![](scratch-snake-v3/schlange.png)

Der Apfel braucht nur ein Kostüm. Damit er von der Schlange nur erwischt wird, wenn diese sich genau über den Apfel befindet, darf auch der Apfel nicht größer als 20 sein.
Du kannst den Apfel selber malen, oder du verwendet den Apfel aus der Scratch Figurenbibliothek.

Apfel [Figur downloaden](https://scratch-snake-v3/Apfel.sprite2/){:target="_blank"}
![](scratch-snake-v3/apfel.png)

Dann brauchst du noch eine Figur für die *Game Over* Meldung (Englisch für *das Spiel aus aus*), die angezeigt wird, wenn der Spieler verloren hat.

SpielZuEnde [Figur downloaden](https://scratch-snake-v3/SpielZuEnde.sprite2/){:target="_blank"}
![](scratch-snake-v3/gameover.png)

## Daten

Damit sich die Schlange bewegen kann müssen wir zwei Informationen speichern: die Länge der Schlange und wie lange jeder Teil der Schlange auf einer Position bleibt. Lege dafür zwei Variablen mit den Namen *DauerProPosition* und *Länge* an, die für alle Figuren zur Verfügung stehen.

![Variablen](scratch-snake-v3/daten.png)

## Code für die Schlange

1. Zeige als erstes den Kopf der Schlange in der Mitte der Bühne an und lass sie nach rechts schauen. Dann setze die Werte für die Daten Länge auf 5 und für DauerProPosition auf 0.2. Dann lass die Schlange fortlaufend 20iger Schritte gehen, warte für DauerProPosition Sekunden und erzeuge dann einen Klon. Der Klon wird später der Körper der Schlange.

![Bewege die Schlange](scratch-snake-v3/Code-Schlange-1.png)

2. Mache den Klon zum Körper der Schlange indem du das Kostüm auf Körper wechselst Zeige Klon für jede Position im Körper für die LängeProPosition an. Wenn die Schlange eine Länge von 3 hat, dann wird der Klon für 3 * 0.2 Sekunden = 0.6 Sekunden angezeigt. Wenn die Schlange schon eine Länge von 10 hat, dann wird der Klon für 10 * 0.2 Sekunden = 2 Sekunden angezeigt. Lösche dann den Klon.

![Mache den Klon zum Körper der Schlange](scratch-snake-v3/Code-Schlange-2.png)

3. Ändere mit den Pfeiltasten die Richtung der Schlange.

![Ändere die Richtung der Schlange](scratch-snake-v3/Code-Schlange-3.png)

4. Mach die DauerProPosition alle 10 Sekunden um 0.02 kleiner. Wenn die Schlange weniger lang an einer Position verweilt wird sie schneller.

![Erhöhe die Geschwindigkeit](scratch-snake-v3/Code-Schlange-4.png)

5. Das Spiel ist vorbei wenn die Schlange entweder den Rand berührt oder wenn die Zunge der Schlange (rot) ihren Körper (grün) berührt. Sende dann die Nachricht *Verloren*.

![Erkenne wann das Spiel vorbei ist](scratch-snake-v3/Code-Schlange-5.png)

6. Wenn die Nachricht *Verloren* versandt wurde, stoppe alle Skripte und setzte die Schlange wieder auf die Anfangsposition.

![Stoppe alle Skripte](scratch-snake-v3/Code-Schlange-6.png)

## Skripte für den Apfel

1. Der Apfel muss zwei Aufgaben erfüllen: er muss eine Position finden, an der sich die Schlange gerade nicht befindet und er muss erkennen, wenn er von der Schlange berührt wird.

* Zeige den Apfel als erste an und setzte ihn auf die Position x: 20, y: 0.
* Dann wiederhole fortlaufend folgende Schritte:
    * Finde eine Position, an der sich die Schlange gerade nicht befindet.
    * Generiere dazu Zufallszahlen, die ein Vielfaches von 20 sind. Wir bewegen die Schlange in 20iger Schritten, daher sollte auch der Apfel auf einem Vielfachen von 20 platziert sein.

* Wiederhole das Generieren der Zufallszahlen solange, bis du eine Position findest, an der die Schlange gerade nicht berührt wird.
* Dann warte bis der Apfel von der Schlange berührt wird.
* Spiele einen Klang ab und mach die Schlange um einen Körperteil länger.
* Dann beginne wieder von vorne und suche eine neue Position für den Apfel.

![Code Apfel](scratch-snake-v3/Code-Apfel-1.png)

## Skripte für SpielZuEnde

1. Die Figur SpielZuEnde wird erst angezeigt, wenn du mit der Schlange entweder den Rand oder die Schlange selbst berührst.

* Beim Start des Spiels verstecke die Figur SpielZuEnde und setzte sie in die Mitte der Bühne.
* Wenn du die Nachricht *Verloren* empfängst, zeige die Figur an und spiele einen Klang. Nach drei Sekunden kannst du die Figur wieder verstecken und alle Skripte stoppten.</li>

![Gameover](scratch-snake-v3/Code-Gameover-1.png)

## Weitere Ideen

* Zähle mit, wie viele Äpfel du erwischst, bevor die Schlange zu lange wird.