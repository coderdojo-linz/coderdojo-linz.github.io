---
layout: sushi
title: Scratch Snake
description: Lass die Schlange die Äpfel aufsammeln aber berühre nicht den Rand und verwickle dich nicht, wenn die Schlange länger wird.
---

# Scratch Snake

Steuere die Schlange, um die Äpfel aufzusammeln. Aber pass auch, dass du nicht den Rand berührst und auch keinen Knoten in die Schlange machst, wenn sie länger wird.

![Snake Game](scratch-snake/snake-game.png)

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

4. ![Game Over hinzufügen](scratch-snake/figur-game-over.png){: .right}
Dann brauchst du noch eine Figur für die "Game Over" Meldung (Englisch für "das Spiel aus aus"), die angezeigt wird, wenn der Spieler verloren hat.

5. ![Figuren zentrieren](scratch-snake/figur-zentrieren.png){: .right}
Vergiss nicht, dass du mit Hilfe des Fadenkreuzes rechts oben für alle Figuren den Mittelpunkt markieren musst.

## Daten

1. ![Fisch bewegen](scratch-snake/07-move-fish.png){: .right}
Damit du den Fisch bewegen kannst, musst er nach links und rechts sowie oben und unten bewegt werden können.<br/><br/>
  • Wähle zuerst den Fisch aus, damit er blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du deinen Fisch nun bewegen. Verwende das Ereignis *Wenn Taste ... gedrückt* unter *Ereignisse*.<br/>
  • Verknüpfe es jeweils mit einer Drehung *setze Richtung auf ...* unter *Bewegung*, damit der Fisch in die richtige Richtung schaut.<br/>
  • Außerdem brauchen wir *gehe ...er Schritt*, um den Fisch zu bewegen.<br/><br/>
Für *Pfeil nach oben* gedrückt: Richtung 0 Grad, gehe 10er-Schritte.<br/>
Für *Pfeil nach unten* gedrückt: Richtung 180 Grad, gehe 10er-Schritte.<br/>
Für *Pfeil nach rechts* gedrückt: Richtung 90 Grad, gehe 10er-Schritte.<br/>
Für *Pfeil nach links* gedrückt: Richtung -90 Grad, gehe 10er-Schritte.<br/><br/>
Je größer die Schrittanzahl, desto schneller ist dein Fisch.


## Haifisch bewegen

1. ![Haifisch bewegen](scratch-snake/08-move-shark.png){: .right}
Jetzt soll der Haifisch im Aquarium herumschwimmen.<br/><br/> 
  • Wähle dazu den Haifisch aus, damit er blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du den Haifisch nun bewegen.<br/>
  • Unter *Ereignisse* wähle *Wenn ... angeklickt*.<br/>
  • Anschließend wähle *wiederhole fortlaufend* bei *Steuerung* aus.<br/>
  • Bewege den Haifisch mit *gehe 10er-Schritt*, *warte 0,1 Sek.", *pralle vom Rand ab* und *drehe dich um ... Grad*<br/>
  • Um etwas mehr Zufall reinzubringen, nimm im Menü *Operatoren* den Block *Zufallszahl von 1 bis 10* und ziehe ihn an die Stelle der 15 Grad.

  
## Fisch fangen

1. ![Fisch wird berührt](scratch-snake/09-touch-fish.png){: .right}
Wenn der Haifisch den Fisch berüht, soll der Fisch ausgeblendet und wieder ins linke obere Eck gesetzt werden.<br/><br/> 
  • Wähle dazu den Fisch aus, damit er blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du den Fisch verschwinden lassen, sobald er den Haifisch berührt.<br/>
  • Unter *Ereignisse* wähle *Wenn ... angeklickt*.<br/>
  • Setze den Fisch an Position -230 und 170 mittels *gehe zu x: -230, y: 170*, um den Fisch ins linke obere Eck zu setzen, und *zeige dich*.<br/>
  • Falls jetzt der Hai berührt wird (*Steuerung* *falls ... dann*), dann *sende "berührt" an alle*, *verstecke dich*, *warte 5 Sekunden*, *zeige dich*, und gehe wieder ins linke obere Eck mit *gehe zu x: -230, y: 170*. Anschließend sage *Willkommen zurück* für 2 Sekunden.


2. ![Hai wird berührt](scratch-snake/10-touch-shark.png){: .right}
Wenn der Haifisch den Fisch berüht, soll er zwei mal schnappen und das Spiel "Game Over" sein.<br/><br/> 
  • Wähle dazu den Haifisch aus, damit er blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du den Haifisch "Game Over" sagen lassen.<br/>
  • Unter *Ereignisse* wähle *Wenn ich ... empfange*, der Hai reagiert somit auf die vom Fisch ausgelöste Nachricht.<br/>
  • Anschließend wähle *wiederhole 2 mal* bei *Steuerung* aus.<br/>
  • Um den Haifisch schnappen zu lassen, gibt es unter *Aussehen* verschiedene Varianten des Hais. Füge folgende Blöcke in den Wiederhol-Block: *wechsle zu Kostüm b*, *warte 0,3 Sek.*, *wechsel zu Kostüm a*, *warte 0,3 Sek.*<br/>
  • Und um den Haifisch "Game over" sagen zu lassen, füge einen neuen *Wenn ich ... empfange* Block hinzu und *sage "Game Over!" für 4.5 Sekunden*.

## Weitere Ideen

* ...

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/73821694/](https://scratch.mit.edu/projects/73821694/){:target="_blank"} ausprobieren.

## Gesamte Skripte je Figur