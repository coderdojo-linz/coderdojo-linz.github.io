---
layout: sushi
title: Scratch Snake
description: Lass die Schlange die Äpfel aufsammeln aber berühre nicht den Rand und verwickle dich nicht, wenn die Schlange länger wird.
scratch-images:
- scratch-snake/snake-game.png
- scratch-snake/skript-schlange-1.png
scratch-level: 2
scratch-sprites: 3
scratch-scripts: 9
scratch-data: 7
---

# Scratch Snake

<div class="row sushi-intro">
	<div class="col-sm-6"><img alt="Snake Game" src="scratch-snake/snake-game.png" /></div>
	<div class="col-sm-6">
		<p>Steuere die Schlange, um die Äpfel aufzusammeln. Aber pass auch, dass du nicht den Rand berührst und auch keinen Knoten in die Schlange machst, wenn sie länger wird.</p>
		<p>Das Spiel besteht aus 3 Figuren und 14 Skripten. In der folgenden Anleitung findest du einige Fragezeichen in den Skripten. Hier bist du gefordert, die richtige Lösung zu finden!</p>
		<p>Wenn du noch keine Idee hast, welche Bausteine hier fehlen könnten, findest du am Ende der Anleitung die vollständigen Skripte.</p>
		<table class="table sushi-stats">
			<tbody>
				<tr>
					<td>Figuren</td>
					<td>3</td>
				</tr>
				<tr>
					<td>Skripte</td>
					<td>14</td>
				</tr>
				<tr>
					<td>Daten</td>
					<td>2</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

## Bühne & Figuren

Das Spiel besteht aus drei Figuren: der Schlange, dem Apfel und einer Nachricht, wenn das Spiel zu Ende ist.

<table class="table sushi-overview">
	<tr class="subtitle">
		<td colspan="4">Übersicht</td>
	</tr>
	<tr>
		<td>Bühne & Figuren</td>
		<td colspan="3"><img src="scratch-snake/overview.png" class="sushi-sprites-overview" /></td>
	</tr>
	<tr class="subtitle">
		<td colspan="4">Bühne</td>
	</tr>
	<tr>
		<td>Bühne</td>
		<td><img src="scratch-snake/buehne.png" /></td>
		<td>Für dieses Spiel brauchen wir kein Bühnenbild. Du kannst es einfach weiß lassen.</td>
		<td></td>
	</tr>
	<tr class="subtitle">
		<td colspan="4">Figuren</td>
	</tr>
	<tr>
		<td>Schlange</td>
		<td>
			<ul class="sushi-customes">
				<li><img src="scratch-snake/figur-schlange-kopf.png" /></li>
				<li><img src="scratch-snake/figur-schlange-koerper.png" /></li>
			</ul>
		</td>
		<td>
			<p>Die Schlange besteht aus zwei Kostümen - dem Kopf und dem Körper. Der Kopf und der Körper der Schlange dürfen nicht größer als 20 sein. Nur die Zunge beim Kopf darf das überschreiten.</p>
			<p>Am besten, du malst zuerst den Körper mit einer Größe von 20, kopierst diesen dann für den Kopf und fügst Augen und eine Zunge hinzu.</p>
			<p>Beachte auch, dass der Körper eine andere Farbe als der Kopf haben muss.</p>
		</td>
		<td><a href="scratch-snake/Schlange.sprite2">Figur downloaden</a></td>
	</tr>
	<tr>
		<td>Apfel</td>
		<td><img src="scratch-snake/figur-apfel.png" /></td>
		<td>
			<p>Der Apfel braucht nur ein Kostüm. Damit er von der Schlange nur erwischt wird, wenn diese sich genau über den Apfel befindet, darf auch der Apfel nicht größer als 20 sein.</p>
			<p>Du kannst den Apfel selber malen, oder du verwendet den Apfel aus der Scratch Figurenbibliothek.</p>
		</td>
		<td><a href="scratch-snake/Apfel.sprite2">Figur downloaden</a></td>
	</tr>
	<tr>
		<td>SpielZuEnde</td>
		<td><img src="scratch-snake/figur-game-over.png" /></td>
		<td>
			<p>Dann brauchst du noch eine Figur für die "Game Over" Meldung (Englisch für "das Spiel aus aus"), die angezeigt wird, wenn der Spieler verloren hat.</p>
		</td>
		<td><a href="scratch-snake/SpielZuEnde.sprite2">Figur downloaden</a></td>
	</tr>
</table>

<p class="tip">Vergiss nicht, dass du mit Hilfe des Fadenkreuzes rechts oben für alle Figuren den Mittelpunkt markieren musst. Bei der Schlange musst du das für beide Kostüme machen.</p>

## Daten

Damit sich die Schlange bewegen kann müssen wir zwei Informationen speichern: die Länge der Schlange und wie lange jeder Teil der Schlange auf einer Position bleibt.<br /><br />
Lege dafür zwei Variablen mit den Namen "DauerProPosition" und "Länge" an, die für alle Figuren zur Verfügung stehen.

<table class="table sushi-overview">
	<tr class="subtitle">
		<td>Daten</td>
		<td>Typ</td>
		<td>Figur</td>
	</tr>
	<tr>
		<td>DauerProPosition</td>
		<td>Variable</td>
		<td>für alle Figuren</td>
	</tr>
	<tr>
		<td>Länge</td>
		<td>Variable</td>
		<td>für alle Figuren</td>
	</tr>
</table>

## Skripte für die Schlange

<div class="row sushi-scripts">
	<div class="col-sm-4">
		<div class="sushi-numbering">1</div>
		<p>Zeige als erstes den Kopf der Schlange in der Mitte der Bühne an und lass sie nach rechts schauen.</p>
		<p>Dann setze die Werte für die Daten Länge auf 5 und für DauerProPosition auf 0.2.</p>
		<p>Dann lass die Schlange fortlaufend 20iger Schritte gehen, warte für DauerProPosition Sekunden und erzeuge dann einen Klon. Der Klon wird später der Körper der Schlange.</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-1.png" title="Bewege die Schlange" />
	</div>
	<div class="col-sm-12"><hr /></div>

	<div class="col-sm-4">
		<div class="sushi-numbering">2</div>
		<p>Mache den Klon zum Körper der Schlange indem du das Kostüm auf Körper wechselst</p>
		<p>Zeige Klon für jede Position im Körper für die LängeProPosition an.</p>
		<p>Wenn die Schlange eine Länge von 3 hat, dann wird der Klon für 3 * 0.2 Sekunden = 0.6 Sekunden angezeigt. Wenn die Schlange schon eine Länge von 10 hat,
dann wird der Klon für 10 * 0.2 Sekunden = 2 Sekunden angezeigt.</p>
		<p>Lösche dann den Klon.</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-2.png" title="Mache den Klon zum Körper der Schlange" />
	</div>
	<div class="col-sm-12"><hr /></div>

	<div class="col-sm-4">
		<div class="sushi-numbering">3</div>
		<p>Ändere mit den Pfeiltasten die Richtung der Schlange.</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-3.png" title="Ändere die Richtung der Schlange" />
	</div>
	<div class="col-sm-12"><hr /></div>

	<div class="col-sm-4">
		<div class="sushi-numbering">4</div>
		<p>Mach die DauerProPosition alle 10 Sekunden um 0.02 kleiner. Wenn die Schlange weniger lang an einer Position verweilt wird sie schneller.</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-4.png" title="Erhöhe die Geschwindigkeit" />
	</div>
	<div class="col-sm-12"><hr /></div>

	<div class="col-sm-4">
		<div class="sushi-numbering">5</div>
		<p>Das Spiel ist vorbei wenn die Schlange entweder den Rand berührt oder wenn die Zunge der Schlange (rot) ihren Körper (grün) berührt. Sende dann die Nachricht "Verloren".</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-5.png" title="Erkenne wann das Spiel vorbei ist" />
	</div>
	<div class="col-sm-12"><hr /></div>

	<div class="col-sm-4">
		<div class="sushi-numbering">6</div>
		<p>Wenn die Nachricht "Verloren" versandt wurde, stoppe alle Skripte und setzte die Schlange wieder auf die Anfangsposition.</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-schlange-6.png" title="Stoppe alle Skripte" />
	</div>
</div>


## Skripte für den Apfel

<div class="row sushi-scripts">
	<div class="col-sm-4">
		<div class="sushi-numbering">1</div>
		<p>Der Apfel muss zwei Aufgaben erfüllen: er muss eine Position finden, an der sich die Schlange gerade nicht befindet und er muss erkennen, wenn er von der Schlange berührt wird.</p>
		<p>
			<ul>
				<li>Zeige den Apfel als erste an und setzte ihn auf die Position x: 20, y: 0.</li>
				<li>Dann wiederhole fortlaufend folgende Schritte:
					<ul>
						<li>Finde eine Position, an der sich die Schlange gerade nicht befindet.</li>
						<li>Generiere dazu Zufallszahlen, die ein Vielfaches von 20 sind. Wir bewegen die Schlange in 20iger Schritten, daher sollte auch der Apfel auf einem Vielfachen von 20 platziert sein.</li>
					</ul>
				</li>
				<li>Wiederhole das Generieren der Zufallszahlen solange, bis du eine Position findest, an der die Schlange gerade nicht berührt wird.</li>
				<li>Dann warte bis der Apfel von der Schlange berührt wird.</li>
				<li>Spiele einen Klang ab und mach die Schlange um einen Körperteil länger.</li>
				<li>Dann beginne wieder von vorne und suche eine neue Position für den Apfel.</li>
			</ul>
		</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-apfel-1.png" title="Skripte Apfel" />
	</div>
</div>

## Skripte für SpielZuEnde

<div class="row sushi-scripts">
	<div class="col-sm-4">
		<div class="sushi-numbering">1</div>
		<p>Die Figur SpielZuEnde wird erst angezeigt, wenn du mit der Schlange entweder den Rand oder die Schlange selbst berührst.</p>
		<p>
			<ul>
				<li>Beim Start des Spiels verstecke die Figur SpielZuEnde und setzte sie in die Mitte der Bühne.</li>
				<li>Wenn du die Nachricht "Verloren" empfängst, zeige die Figur an und spiele einen Klang. Nach drei Sekunden kannst du die Figur wieder verstecken und alle Skripte stoppten.</li>
			</ul>
		</p>
	</div>
	<div class="col-sm-8">
		<img src="scratch-snake/skript-game-over-1.png" title="Game Over" />
	</div>
</div>

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