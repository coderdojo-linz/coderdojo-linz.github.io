---
layout: sushi
title: Scratch Snake
description: Lass die Schlange die Äpfel aufsammeln aber berühre nicht den Rand und verwickle dich nicht, wenn die Schlange länger wird.
---

# Scratch Snake

Steuere die Schlange, um die Äpfel aufzusammeln. Aber pass auch, dass du nicht den Rand berührst und auch keinen Knoten in die Schlange machst, wenn sie länger wird.

<p class="center"><img alt="Snake Game" src="scratch-snake/snake-game.png" /></p>

Das Spiel besteht aus 3 Figuren und 14 Skripten. In der folgenden Anleitung findest du einige Fragezeichen in den Skripten. Hier bist du gefordert, die richtige Lösung zu finden!

Wenn du noch keine Idee hast, welche Bausteine hier fehlen könnten, findest am Ende der Anleitung die vollständigen Skripte.

## Figuren anlegen

1. ![Figur löschen](scratch-snake/figur-loeschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

2. ![Schlange hinzufügen](scratch-snake/figur-schlange.png){: .right}
Die Schlange besteht aus zwei Kostümen - dem Kopf und dem Körper. Wir wollen, dass sich die Schlange später in 20iger Schritten bewegt. Die Figur darf daher nicht größer als 20 sein. 
Eine Ausnahme ist die Zunge, die darf etwas länger sein.

3. ![Apfel hinzufügen](scratch-snake/figur-apfel.png){: .right}
Der Apfel braucht nur ein Kostüm. Damit er von der Schlange nur erwischt wird, wenn diese sich genau über den Apfel bewegt, darf auch der Apfel nicht größer als 20 sein.

4. ![SpielZuEnde hinzufügen](scratch-snake/figur-game-over.png){: .right}
Dann brauchst du noch eine Figur für die "Game Over" Meldung (Englisch für "das Spiel aus aus"), die angezeigt wird, wenn der Spieler verloren hat.

5. ![Figuren zentrieren](scratch-snake/figur-zentrieren.png){: .right}
Vergiss nicht, dass du mit Hilfe des Fadenkreuzes rechts oben für alle Figuren den Mittelpunkt markieren musst. Bei der Schlange musst du das für beide Kostüme machen.

## Daten

1. ![Daten](scratch-snake/daten.png){: .right}
Damit sich die Schlange bewegen kann müssen wir zwei Informationen speichern: die Länge der Schlange und wie lange jeder Teil der Schlange auf einer Position bleibt.<br/><br/>
Lege dafür zwei Variablen mit den Namen "DauerProPosition" und "Länge" an, die für alle Figuren zur Verfügung stehen.

## Skripte für die Schlange

1. ![Bewege die Schlange](scratch-snake/skript-schlange-1.png){: .right}
Zeige als erstes den Kopf der Schlange in der Mitte der Bühne an und lass sie nach rechts schauen.<br/><br/>
Dann setze die Werte für die Daten Länge auf 5 und für DauerProPosition auf 0.2.<br/><br/>
Dann lass die Schlange fortlaufend 20iger Schritte gehen, warte für DauerProPosition Sekunden und erzeuge dann einen Klon. Der Klon wird später der Körber der Schlange.

2. ![Mache den Klon zum Körper der Schlange](scratch-snake/skript-schlange-2.png){: .right}
Mache den Klon zum Körper der Schlange indem du das Kostüm auf Körper wechselst.<br/><br/>
Zeige Klon für jede Position im Körper für die LängeProPosition an.<br/><br/>
Wenn die Schlange eine Länge von 3 hat, dann wird der Klon für 3 * 0.2 Sekunden = 0.6 Sekunden angezeigt. Wenn die Schlange schon eine Länge von 10 hat, 
dann wird der Klon für 10 * 0.2 Sekunden = 2 Sekunden angezeigt.<br/><br/>
Lösche dann den Klon.

3. ![Ändere die Richtung der Schlange](scratch-snake/skript-schlange-3.png){: .right}
Ändere mit den Pfeiltasten die Richtung der Schlange.
  
## Skripte für den Apfel

1. ![Skripte Apfel](scratch-snake/skript-apfel-1.png){: .right}
Der Apfel muss zwei Aufgaben erfüllen: er muss eine Position finden, an der sich die Schlange gerade nicht befindet und er muss erkennen, wenn er von der Schlange berührt wird.<br/><br/> 
  • Zeige den Apfel als erste an und setzte ihn auf die Position x: 20, y: 0.<br/>
  • Dann wiederhole fortlaufend folgende Schritte:<br/>
    • Finde eine Position, an der sich die Schlange gerade nicht befindet.<br/>
    • Generiere dazu Zufallszahlen, die ein Vielfaches von 20 sind. Wir bewegen die Schlange in 20iger Schritten, daher sollte auch der Apfel auf einem Vielfachen von 20 platziert sein.<br/>
    • Wiederhole das Generieren der Zufallszahlen solange, bis du eine Position findest, an der die Schlange gerade nicht berührt wird.<br />
	• Dann warte bis der Apfel von der Schlange berührt wird.<br />
	• Spiele einen Klang ab und mach die Schlange um einen Körperteil länger.<br />
	• Dann beginne wieder von vorne und suche eine neue Position für den Apfel.
	
## Skripte für SpielZuEnde

1. ![Game Over](scratch-snake/skript-game-over-1.png){: .right}
Die Figur SpielZuEnde wird erst angezeigt, wenn du mit der Schlange entweder den Rand oder die Schlange selbst berührst.
  • Beim Start des Spiels verstecke die Figur SpielZuEnde und setzte sie in die Mitte der Bühne.<br/>
  • Wenn du die Nachricht "Verloren" empfängst, zeige die Figur an und spiele einen Klang. Nach drei Sekunden kannst du die Figur wieder verstecken und alle Skripte stoppten.

## Weitere Ideen

* Zähle mit, wie viele Äpfel du erwischst, bevor die Schlange zu lange wird.

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/73821694/](https://scratch.mit.edu/projects/73821694/){:target="_blank"} ausprobieren.

## Gesamte Skripte je Figur

### Schlange

![Skripte für die Schlange](scratch-snake/skript-schlange.png)

### Apfel

![Skripte für den Apfel](scratch-snake/skript-apfel.png)

### SpielZuEnde

![Skripte für die Game Over Meldung](scratch-snake/skript-game-over.png)