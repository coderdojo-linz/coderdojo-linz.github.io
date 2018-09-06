---
layout: sushi
title: Wechselblinker löten
description: Baue eine Schaltung, die zwei LEDs abwechselnd blinken lässt
---

# Wechselblinker

## Einleitung

![Fertige Wechselblinker-Schaltung](wechselblinker/cd-wechselblinker.gif)

In dieser Übung baust du eine Schaltung, die zwei LEDs abwechselnd blinken lässt (*Wechselblinker*). In der Fachsprache bezeichnet man diese Schaltung als [*Multivibrator*](https://de.wikipedia.org/wiki/Multivibrator).

In dieser Anleitung lernst du, wie du die Schaltung auf einem experimentier-Steckboard *ohne Löten* zusammenstellst. Im CoderDojo machen wir Löt-Workshops, in denen du die Schaltung dann löten kannst.

So eine Schaltung kann man natürlich auch berechnen. Wir gehen aber in dieser Übung nicht auf die technischen Details und die Mathematik dahinter ein. Ziel ist es, sie nachzubauen und den Umgang mit den Bauelementen sowie das Löten zu üben. In höheren Klassen in der Schule werdet ihr die Physik, die dahinter steckt, lernen. Wer jetzt schon neugierig ist, findet zum Beispiel im [online *Elektronik-Kurs*](https://www.elektronik-kurs.de/index.html?schaltungen_wechselblinker.html) Details über Funktionsweise und Berechnung der Schaltung.

## Das Steckboard

Experimentier-Steckboards sind zum Basteln sehr praktisch, da man mit ihnen ohne löten zu müssen Schaltungen ausprobieren kann.

Am oberen und unteren Ende des Steckboards sind die Anschlüsse alle *horizontal* miteinander verbunden. Üblicherweise verbindet man sie mit einer Stromquelle wie einer Batterie. Die folgende Abbildung zeigt, wie das gemeint ist.

![Steckboard Stromversorgung](wechselblinker/steckboard-stromversorgung.png)

Die Anschlüsse in der Mitte (im Bild oben als *a* bis *j*) bezeichnet sind *vertikal* miteinander verbunden. Das bedeutet, dass *a* bis *e* und *f* bis *j* verbunden sind. Die folgende Schaltung zeigt, wie man das verwendet. Sie verbindet den Plus-Pol der Stromversorgung mit einem [*Vorwiderstand*](https://www.elektronik-kompendium.de/sites/grd/1006011.htm) (in diesem Fall 470 Ohm). Aus dem Widerstand fließt der Strom in ein LED-Lämpchen und bringt es zum Leuchten. Auf der anderen Seite ist es mit dem Minus-Pol der Stromversorgung verbunden und der Stromkreis wird dadurch geschlossen.

![Steckboard Verbindungen](wechselblinker/steckboard-verbindungen.png)

Wenn du ein Steckboard und die oben genannten Bauteile zur Verfügung hast, probiere aus, diese Schaltung zusammenzustecken. Falls nicht, kannst du das auch am Computer simulieren. [*Tinkercad Circuits*](https://www.tinkercad.com/circuits) ist eine Webseite, auf der du im Web-Browser kostenlos auf einem virtuellen Steckboard experimentieren kannst.

**Im CoderDojo kannst du probieren, diese Schaltung zu löten.**

## Der Wechselblinker

### Schaltplan

Lass uns mit dem Wechselblinker loslegen. Hier ist der Schaltplan (Quelle: [*Elektronik-Kurs*](https://www.elektronik-kurs.de/index.html?schaltungen_wechselblinker.html)):

![Schaltplan](wechselblinker/schaltplan_wechselblinker.gif)

Falls du den Schaltplan noch nicht verstehst, keine Angst. Das CoderDojo-Mentoringteam hilft dir weiter und mit den Abbildungen, die du unten findest, kannst du die Schaltung auch so bauen. Wenn du mehr über die Bauteile und deren Symbole wissen möchtest, findest du Informationen im [Bauteil-Verzeichnis des *Elektronik-Kurs*](https://www.elektronik-kurs.de/index.html?bauteile_index.html).

### Bauteile

Um den Wechselblinker nachzubauen, brauchst du folgende Bauteile:

* Ein [Steckboard](https://de.wikipedia.org/wiki/Steckplatine) mit Verbindungskabeln (auch als *Jumper*-Kabel bekannt)
* Eine [9V Batterie](https://de.wikipedia.org/wiki/9-Volt-Block)
* Ein Batterieanschlusskabel (auch als *Battierclip* bekannt)
* Zwei [Widerstände](https://de.wikipedia.org/wiki/Widerstand_(Bauelement)) (470 Ohm, 1/4 Watt)
* Zwei Widerstände (4.7k Ohm, 1/4 Watt)
* Zwei [Elektrolyt-Kondensatoren](https://de.wikipedia.org/wiki/Elektrolytkondensator) (470 µF, 16 V)
* Zwei [Transistoren](https://de.wikipedia.org/wiki/Transistor) (BC337)
* Zwei [Leuchtdioden](https://de.wikipedia.org/wiki/Leuchtdiode)

Werkzeug brauchst du nicht unbedingt. Hilfreich sind aber eine kleine *Schnabelzange* und ein kleiner *Seitenschneider*.

Wenn du die Schaltung nicht nur stecken, sondern löten willst, brauchst du zusätzlich folgendes:

* Ein [Stripboard](https://en.wikipedia.org/wiki/Stripboard)
* Lötkolben (am besten ein Set mit Zubehör)
* Lötdraht

Im CoderDojo haben wir alles was du brauchst schon vorbereitet. Ansonsten bekommst du die oben genannten Teile im Elektronikfachhandel oder online bei diversen Elektronik-Händlern.

### Schaltung stecken

Hier siehst du, wie du die Schaltung am Steckboard zusammenstellen kannst. Wir haben sie aus mehreren Richtungen fotografiert, damit du gut siehst, wie die Bauteile verbunden sind.

<img src="wechselblinker/steckboard-oben.jpg" width="75%" />

<img src="wechselblinker/steckboard-rechts-vorne.jpg" width="75%" />

<img src="wechselblinker/steckboard-rechts-hinten.jpg" width="75%" />

<img src="wechselblinker/steckboard-links-vorne.jpg" width="75%" />

<img src="wechselblinker/steckboard-links-hinten.jpg" width="75%" />

### Achtung! Besondere Bauteile

Bei manchen Bauteilen (z.B. bei den Widerständen) ist es egal, in welcher Richtung du sie einbaust. Bei drei Bauteilen ist das aber *nicht* der Fall. Sie müssen genau richtig herum verbunden werden.

#### Leuchtdiode

Die Leuchtdioden haben *ein langes und ein kurzes Bein*. Das lange Bein heißt *Anode*, das kurze *Kathode*. **Verbinde das lange Bein mit dem Plus-Pol**.

<img src="wechselblinker/leuchtdiode.jpg" width="75%" />

#### Elektrolyt-Kondensator

Elektrolyt-Kondensator haben auch eine Polung. Die *Kathode* (Minus-Pol) ist markiert. **Achte darauf, dass der Kondensator wie im Schaltplan angegeben eingebaut wird** (Plus-Pol mit *Anode* verbunden).

<img src="wechselblinker/kondensator.jpg" width="75%" />

#### Transistor

Der Transistor hat *drei* Anschlüsse. Sie werden als

* *Emitter* (kurz *E*),
* *Collector* (kurz *C*) und
* *Base* (kurz *B*)

bezeichnet. Bei dem Transistor, den wir hier verwenden, sind die Anschlüsse so:

![Transistor](wechselblinker/transistor-BC337.png)

Wir verwenden einen sogenannten *NPN Transistor*. Das Schaltsymbol ist dabei so zu lesen:

![NPN Transistor](wechselblinker/npn-transistor.png)

### Ausprobieren

Schließe jetzt die Batterie an. Blinken die LEDs?

**Bevor du die Schaltung anschließt, lasse sie auf jeden Fall von einem CoderDojo-Mentor, einer CoderDojo-Mentorin oder einem anderen Erwachsenen durchsehen. Falls sie nicht nicht wie erwartet funktioniert, stecke die Batterie sofort wieder ab!**

### Löten

**Im CoderDojo kannst du jetzt versuchen, diese Schaltung zu löten.**
