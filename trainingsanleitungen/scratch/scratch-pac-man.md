---
layout: sushi-scratch
title: Scratch Pac Man
description: Friss dich durch's Labyrinth.
---

# Scratch Pac Man

<div class="row sushi-intro">
	<div class="col-sm-6"><img alt="Pac Man" src="scratch-pac-man/pac-man.png" /></div>
	<div class="col-sm-6">
		<p>Pac-Man ist ein klassisches Computerspiel. Es erschien erstmals 1980 in Japan.</p>
		<p>Pac-Man muß alle bunten Pillen einsammeln, ohne den Geistern in die Arme zu laufen. Die blauen Pillen verleihen ihm für kurze Zeit Superkräfte, und er kann Geister einfrieren.</p>
		<p>Du kannst das fertige Spiel unter <a href="https://scratch.mit.edu/projects/97137611" target="_blank">https://scratch.mit.edu/projects/97137611</a> auch gleich ausprobieren.</p>
		<table class="table sushi-stats">
			<tbody>
				<tr>
					<td>Figuren</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Skripte</td>
					<td>19</td>
				</tr>
				<tr>
					<td>Daten</td>
					<td>9 / 24 / 19 / 13</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Vorbereitungen

Grafiken und Musik stellen dir deine Mentoren gerne via Memorystick zur Verfügung, bzw. 
kannst du sie auch unter [http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man/pac-man.zip](https://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man/pac-man.zip){:target="_blank"} herunterladen. 
Für das Spiel benötigen wir ein Bühnenbild, und insgesamt drei Figuren: PacMan, Ghost und Pill.

![Figuren](scratch-pac-man/figuren.png)

## Downloads

<table class="table sushi-overview">
	<tr class="subtitle">
		<td>Figur</td>
		<td></td>
	</tr>
	<tr>
		<td>Stage</td>
		<td><a href="scratch-pac-man/Stage.png">Figur downloaden</a></td>
	</tr>
	<tr>
		<td>PacMan</td>
		<td><a href="scratch-pac-man/PacMan.sprite2">Figur downloaden</a></td>
	</tr>
	<tr>
		<td>Ghost</td>
		<td><a href="scratch-pac-man/Ghost.sprite2">Figur downloaden</a></td>
	</tr>
	<tr>
		<td>Pill</td>
		<td><a href="scratch-pac-man/Pill.sprite2">Figur downloaden</a></td>
	</tr>
</table>

## Die Bühne „Stage“

In das Bühnenbild lädst du bitte die Grafik „Stage.png“ und den Klang „PacMan.mp3“. Auf der Bühne wollen wir auch die globalen Variablen definieren, und eine Liste namens „GridDef“:

![Daten](scratch-pac-man/daten.png)

Weiters beinhaltet die Bühne Skripte für den Spielstart und das Abspielen der Hintergrundmusik:

![Skripte Bühne](scratch-pac-man/skripte-buehne.png)

Die Grid-Daten stehen in der Liste „GridDef“. Jeder Listen-Eintrag beinhaltet eine Ziffernkette. Die Ziffern bestimmen wie das jeweilige Gridfeld aussieht, und zwar nach folgendem Schema:

0 = Wand<br/>
1 = Gelbe Pille<br/>
2 = Blaue Pille<br/>
3 = Leer<br/>
4 = Tunnel<br/>

Damit du das nicht alles einzeln abtippen mußt, hier nochmal die Daten in Textform - 
wenn du diese Seite im Internet unter [http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man.html](http://coderdojo-linz.github.io/trainingsanleitungen/scratch/scratch-pac-man.html){:target="_blank"} aufrufst, 
kannst du Zeile für Zeile in die Zwischenablage kopieren und in dein Skript einfügen.

Zeile 1:	0000000000000000000000000000000000000000000000000000<br/>
Zeile 2:	0111111111111001111111111001111111111001111111111110<br/>
Zeile 3:	0100001000001001000000001001000000001001000001000010<br/>
Zeile 4:	0100001000001001000000001001000000001001000001000010<br/>
Zeile 5:	0100001000001001000000001001000000001001000001000010<br/>
Zeile 6:	0211111111111111111111111111111111111111111111111120<br/>
Zeile 7:	0100001001000000001001000000001001000000001001000010<br/>
Zeile 8:	0100001001000000001001000000001001000000001001000010<br/>
Zeile 9:	0111111001111001111001111001111001111001111001111110<br/>
Zeile 10:	0000001001001001000000001001000000001001001001000000<br/>
Zeile 11:	0000001001001001000000001001000000001001001001000000<br/>
Zeile 12:	0000001001001111111001111111111001111111001001000000<br/>
Zeile 13:	0000001001001000001001000030001001000001001001000000<br/>
Zeile 14:	0000001001001000001001000030001001000001001001000000<br/>
Zeile 15:	0411111111111001111111000030001111111001111111111140<br/>
Zeile 16:	0000001001000001000001000000001000001000001001000000<br/>
Zeile 17:	0000001001000001000001000000001000001000001001000000<br/>
Zeile 18:	0000001001111111111001111111111001111111111001000000<br/>
Zeile 19:	0000001001000000001001000000001001000000001001000000<br/>
Zeile 20:	0000001001000000001001000000001001000000001001000000<br/>
Zeile 21:	0211111111111001111111111001111111111001111111111120<br/>
Zeile 22:	0100001000001001000000001001000000001001000001000010<br/>
Zeile 23:	0100001000001001000000001001000000001001000001000010<br/>
Zeile 24:	0111001111111111111111111111111111111111111111001110<br/>
Zeile 25:	0001001001000000001001000000001001000000001001001000<br/>
Zeile 26:	0001001001000000001001000000001001000000001001001000<br/>
Zeile 27:	0111111001111001111001111001111001111001111001111110<br/>
Zeile 28:	0100000000001001000000001001000000001001000000000010<br/>
Zeile 29:	0100000000001001000000001001000000001001000000000010<br/>
Zeile 30:	0111111111111111111111111111111111111111111111111110<br/>
Zeile 31:	0000000000000000000000000000000000000000000000000000<br/>

![Daten GridDef](scratch-pac-man/daten-griddef.png)

## Die Figur „PacMan“

PacMan besteht aus acht Kostümen, für jeweils jede Richtung und einmal mit geschlossenem, einmal mit offenem Mund. Lade dazu einfach die „PacMan*.png“ Grafiken in die Figur.

Die PacMan Skripte sind relativ umfangreich. Hier die benötigten Variablen, bitte denke daran daß du sie als „Nur für diese Figur“ definierst (außer PosX, PosY, Level, Life und Points, die wir ja schon global in der Bühne definiert haben):

![Kostüme Pac Man](scratch-pac-man/kostuem-pac-man.png){: .floatLeft}

![Daten Pac Man](scratch-pac-man/daten-pac-man.png){: .floatLeft}

Wir verwenden wieder lila Blöcke zur Wiederverwendung von Code. Bitte achte darauf daß du dabei immer die Option „Ohne Bildschirmaktualisierung laufen lassen“ selektierst, sonst könnte es sein, daß dein Programm zu langsam ist.

Hier läuft ein sogenannter Timer, damit PacMan nach zehn Sekunden seine Superkräfte auch wieder verliert. Der „Reset“-Block dient dem Zurücksetzen auf den Ursprungszustand von PacMan. Die Tastatursteuerung ist hier ebenfalls implementiert.

![Skripte Pac man](scratch-pac-man/skripte-pac-man-1.png)

![Skripte Pac man](scratch-pac-man/skripte-pac-man-2.png)

Das PacMan-Hauptprogramm läuft in einer Schleife bis alle Leben verbraucht sind. 
Wird ein Geist berührt, verliert man ein Leben und PacMan’s Aussehen ändert sich. 

Weiters wird die Bewegungsrichtung abgefragt, und PacMan bewegt sich im Grid entsprechend weiter. 
Jeder Schritt entspricht drei Bildschirmpixeln, und nach drei Schritten (also neun Pixeln) ist das nächste Grid-Feld erreicht. Wenn PacMan an einer Wand ansteht, stoppt die Bewegung. 
Und wenn wir den Tunnel erreicht haben, wird der Block „HandlePortal“ aufgerufen. 

Am Schluß ändern wir noch die Bewegungsrichtung, falls in der Zwischenzeit eine Taste gedrückt wurde, und wenn wir abbiegen können. 
Das erlaubt dem Spieler schon vorzeitig Tasten zu drücken (noch bevor eine Abzweigung erreicht ist), und dadurch kann man PacMan sehr schnell lenken.

![Skripte Pac man](scratch-pac-man/skripte-pac-man-3.png)

Im Block „HandlePortal“ durchsuchen wir die Grid-Definition nach dem Gegenportal, das ebenfalls den Wert „4“ hat, und setzen PacMan‘s Position neu.

![Skripte Pac man](scratch-pac-man/skripte-pac-man-4.png)

Schließlich benötigen wir noch folgenden Code für die Animation von PacMan – je nach Richtung wird eine andere Figur ausgewählt:

![Skripte Pac man](scratch-pac-man/skripte-pac-man-5.png)

## Die Figur „Ghost“

Ghost hat drei Kostüme, Ghost1, Ghost2 und Ghost3, die du wieder auf dem Memorystick oder im Download-Archiv findest.

![Kostüme Ghost](scratch-pac-man/kostuem-ghost.png)

Die drei Geister werden wir als Klone erzeugen, daher ist es besonders wichtig alle Variablen von Ghost als „Nur für diese Figur“ zu definieren -  denn sonst gäbe es sie nur einmal global, und nicht für jeden Klon.

![Daten Ghost](scratch-pac-man/daten-ghost.png)

Beim Start des Spieles klonen wir die drei Geister und setzen sie auf ihre Positionen.

![Skripte Ghost](scratch-pac-man/skripte-ghost-1.png)

In der Ghost-Hauptschleife bewegen wir den Geist ähnlich durch das Grid wie zuvor PacMan. Wird er von PacMan mit Superkräften berührt, so friert er für zehn Sekunden ein. Die Geister werden auch mit jedem Level schneller. Und wir rufen den Block „CalcNextDir“ auf, um zu berechnen, wohin der Geist laufen soll.

![Skripte Ghost](scratch-pac-man/skripte-ghost-2.png)

Im Block „CalcNextDir“ versucht der Geist möglichst rasch an PacMan heranzukommen. Dazu berechnen wir in welcher Richtung und wie weit entfernt PacMan steht. 
Ergibt sich eine Möglichkeit eine Abzweigung zu nehmen um die Distanz zu verkürzen, machen wir das durch Richtungswechsel; einem kleinen Zufallsfaktor folgend tun wir das aber nicht immer, dadurch vermeiden wir ein „Hängenbleiben“ hinter Ecken, und auch daß sich zwei Geister nebeneinander immer gleich bewegen. Wenn keine eindeutige Strategie möglich ist, wählen wir die nächste Richtung zufällig. Mit den „GridDef > 0“-Abfragen prüfen wir, ob der Geist das nächste Feld betreten kann.

![Skripte Ghost](scratch-pac-man/skripte-ghost-3.png)

## Die Figur „Pill“

Die beiden Kostüme der Pillen können wir einfach aus der Scratch-Bibliothek laden („Ball“). 

![Kostüme Pill](scratch-pac-man/kostuem-pill.png)

Wir benötigen folgende Variablen:

![Daten Pill](scratch-pac-man/daten-pill.png)

Bei Spielstart befüllen wir das Grid mit den Pillen:

![Skripte Pill](scratch-pac-man/skripte-pill-1.png)

Wenn PacMan seine Position verändert, fragen wir ab ob er eine Pille berührt, und löschen sie vom Bildschirm. Außerdem müssen wir auch den „GridDef“-Eintrag an der entsprechenden Stelle aktualisieren, denn das Feld ist jetzt leer. Und wir stellen hier fest, ob alle Pillen gegessen wurden - denn dann können wir den nächsten Level aktivieren.

![Skripte Pill](scratch-pac-man/skripte-pill-2.png)

![Skripte Pill](scratch-pac-man/skripte-pill-3.png)

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/97137611/](https://scratch.mit.edu/projects/97137611/){:target="_blank"} ausprobieren.
