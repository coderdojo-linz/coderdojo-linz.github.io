---
layout: sushi
title: Fraktal Baum mit snap.svg
description: In dieser Übung malst du einen Baum mit SVG.
---

# Zeichne einen Fraktal Baum mit snap.svg

## Ziel der Übung

Zeichne einen Baum in SVG. Starte dazu mit einer vertikalen Linie als Stamm. 

Am oberen Ende der Linie zeichne zwei weitere Linien - eine etwas nach links und eine etwas nach rechts geneigt. 
Die neuen beiden Linien sind etwas kürzer als die erste Linie für den Stamm. In dieser zweiten Ebene erhältst du so zwei Zweige.

Am jeweils oberen Ende der beiden neuen Linie zweichne wieder jeweils zwei neue nach links und rechts geneigte Linien die etwas kürzer als die vorige Linie sind. 
In dieser dritten Ebene erhältst du so jetzt vier Zweige.

Fahre nach diesem Muster fort, bis der Baum viele kleine Zweige hat.

![Fraktal Baum](svg-fraktalbaum/images/fraktal-baum.png)

## Grundgerüst der HTML Seite

Erstelle als erstes eine neue HTML Seite mit dem Namen fraktal-baum.html. 

	<!DOCTYPE html>
	<html>
	<head>
		<title>Fraktalbaum</title>
		<meta charset="utf-8" />

		<style>
			line, circle, ellipse, rect, text, path {
				stroke: black;
				fill: none;
			}
		</style>
	</head>
	<body>
		<h1>Fraktalbaum</h1>
		<div>
			<svg id="baum" width="600" height="500"></svg>
		</div>

		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>

		<script type="text/javascript">
			var svg = Snap("#baum");

			// Hier kannst du zeichnen
		</script>
	</body>
	</html>

Zum Zeichnen verwenden wir die Bibliothek [snap.svg](http://snapsvg.io/docs/){:target="_blank"}. Du kannst damit ganz einfach Linien, Kreise, Ellipsen, Rechtecke und ähnliches malen.

Versuche es, indem du unter den Kommentar `// Hier kannst du zeichnen` folgenden Code einfügst:

	// Hier kannst du zeichnen
	svg.circle(300, 250, 200);
	svg.ellipse(300, 250, 200, 100);
	svg.rect(100, 50, 400, 400);
	svg.line(100, 250, 500, 250);
	svg.text(230, 240, "Ich male mit snap.svg!");
	svg.path("M200,250L300,300L400,250");

Du zeichnest damit folgende Figur:

![Figur mit snap.svg](svg-fraktalbaum/images/snap-svg-figur.png)

## Baum malen

Lösche die Figur unter den Kommentar `// Hier kannst du zeichnen` und ersetzte sie durch folgenden Code:

	// Hier kannst du zeichnen
	var ebene = 0;
	var winkel = -90;
	var astLaenge = 100;
	astZeichnen(300, 500, winkel, astLaenge, ebene);

	function astZeichnen(x1, y1, winkel, astLaenge, ebene) {
		if (ebene < 11) {
			// Endkoordinaten berechnen
			var x2 = x1 + (Math.cos(winkel * Math.PI / 180) * astLaenge);
			var y2 = y1 + (Math.sin(winkel * Math.PI / 180) * astLaenge);

			// Linie zeichnen
			svg.line(x1, y1, x2, y2);

			// zwei weitere Äste mit verändertem Winkel malen
			astZeichnen(x2, y2, winkel - 20, astLaenge * 0.8, ebene + 1);
			astZeichnen(x2, y2, winkel + 20, astLaenge * 0.8, ebene + 1);
		}
	}

Hier arbeiten wir mit einer Funktion `astZeichnen`, die rekursiv durch sich selbst wieder aufgerufen wird. Beim ersten Aufruf von `astZeichnen` 
werden die Startkoordinaten x=300 und y=500 übergeben. Der Winkel des Stammes beträgt -90°, d.h. die Linie für den Stamm geht nach oben. 
Die Länge des ersten Astes (=Stamm) wird mit 100 festgelegt und als Ebene 0 bezeichnet.

In der Funktion `astZeichnen` berechnen wir ausgehenden von den Startkoordinaten und dem Winkel die Endkoordinaten der ersten Linie. Dann zeichnen wir diese Linie.

Danach zeichnen wir zwei weitere Äste, für die wir den Winkel einmal um 20° reduzieren und einmal um 20° erhöhen. Die Startkoordinaten der beiden neuen Äste sind die Endkoordinaten des 
ersten Astes. Die Ebene erhöhen wir um 1, damit wir wissen, wie viele Ebenen wir schon gezeichnet haben. Nach 10 Ebenen zeichnen wir keine weiteren Äste mehr.

Der Aufruf der Funktion `astZeichnen` innerhalb der Funktion `astZeichnen` selbst wird als rekursiver Aufruf der Funktion bezeichnet. Es ist wichtig, hier immer eine Abbruchsbedingung 
zu haben, da der Code sonst ewig weiterläuft. In unserem Beispiel ist das die Bedingung `if (ebene < 11)` zu Beginn der Funktion.

Wenn du die Seite jetzt aufrufst, erhältst du folgenden Baum:

![Fraktal Baum 1](svg-fraktalbaum/images/fraktal-baum-1.png)

## Winkel und Astlänge variieren

Damit du das Aussehen des Baums einfach ändern kannst, fügen wir im HTML jetzt zwei Eingabefelder hinzu, mit denen du den Winkel und die Länge der Äste bestimmen kannst. Füge dazu zwischen 
der Überschrift `<h1>` und dem `<div>` mit dem `<svg>` folgenden Code ein:

	<h1>Fraktalbaum</h1>
	<p>
		Winkel: <input type="number" id="aenderungsWinkel" value="20" />
	</p>
	<p>
		Änderung Astlänge [%]: <input type="number" id="aenderungAstlaenge" value="80" />
	</p>
	<p>
		<button onclick="baumZeichnen()">Baum zeichnen</button>
	</p>
	<div>
		<svg id="baum" width="600" height="500"></svg>
	</div>

Den Code zum Malen des Baums musst du folgendermaßen ändern:

	// Hier kannst du zeichnen
	// globale Variablen
	var aenderungswinkel;
	var aenderungAstlaenge;
	baumZeichnen();

	function baumZeichnen() {
		var ebene = 0;
		var winkel = -90;
		var astLaenge = 100;

		// Benutzereingaben auslesen
		aenderungswinkel = parseInt(document.getElementById("aenderungsWinkel").value);
		aenderungAstlaenge = parseInt(document.getElementById("aenderungAstlaenge").value) / 100;

		svg.clear();
		astZeichnen(300, 500, winkel, astLaenge, ebene);
	}

	function astZeichnen(x1, y1, winkel, astLaenge, ebene) {
		if (ebene < 11) {
			// Endkoordinaten berrechnen
			var x2 = x1 + (Math.cos(winkel * Math.PI / 180) * astLaenge);
			var y2 = y1 + (Math.sin(winkel * Math.PI / 180) * astLaenge);

			// Linie zeichnen
			svg.line(x1, y1, x2, y2);

			// zwei weitere Äste mit verändertem Winkel malen
			astZeichnen(x2, y2, winkel - aenderungswinkel, astLaenge * aenderungAstlaenge, ebene + 1);
			astZeichnen(x2, y2, winkel + aenderungswinkel, astLaenge * aenderungAstlaenge, ebene + 1);
		}
	}

Wir legen dazu gleich zu Beginn des Scripts zwei globale Variablen `aenderungswinkel` und `aenderungAstlaenge` an. Dann fügen wir eine neue Funktion `baumZeichnen` ein, 
die das Auslesen der Benutzereingaben übernimmt. Diese Funktion `baumZeichnen` kann durch Klick auf den Button immer wieder aufgerufen werden.

Du kannst jetzt direkt in der HTML Seite einen Winkel und die Änderung der Astlänge für jede Ebene eingeben. Probier verschiedene Zahlen aus und sieh dir an, wie sich der Baum verändert.

![Fraktal Baum 2](svg-fraktalbaum/images/fraktal-baum-2.png)

## Variation durch Zufallszahlen

Damit der Baum etwas natürlicher aussieht, müssen wir die Änderung der Astlänge und den Winkel etwas varieren. Das erreichen wir, indem wir die von uns vorgegebenen Zahlen durch 
Multiplikation mit einer Zufallszahl leicht verändern.

Ergänze dazu die globalen Variablen durch die beiden neuen Variablen `zufallAenderungswinkel` und `zufallAstlaenge`. Diesen weisen wir gleich Werte zu.

	// globale Variablen
	var aenderungswinkel;
	var aenderungAstlaenge;
	var zufallAenderungswinkel = 15;
	var zufallAstlaenge = 10;
	baumZeichnen()

Zusätzlich müssen wir noch die Aufrufe `astZeichnen` innerhalb der Funktion `astZeichnen` verändern, so dass beim Winkel und bei der Astlänge eine Zufallszahl eingebaut wird. 
Die Funktion `Math.random()` liefert eine Gleitkommazahl zwischen 0 (inklusive) und 1 (exklusive). Wir subtrahieren 0.5 von dieser generierten Zufallszahl damit wir positive und negative 
Änderungen erhalten und multiplizieren diese dann mit unserer Variable `zufallAenderungswinkel` bzw. `zufallAstlaenge`.
 
	// zwei weitere Äste mit verändertem Winkel malen
	astZeichnen(
		x2,
		y2,
		winkel - aenderungswinkel + (Math.random() - 0.5) * zufallAenderungswinkel,
		astLaenge * aenderungAstlaenge + (Math.random() - 0.5) * zufallAstlaenge, ebene + 1);
	astZeichnen(
		x2,
		y2,
		winkel + aenderungswinkel + (Math.random() - 0.5) * zufallAenderungswinkel,
		astLaenge * aenderungAstlaenge + (Math.random() - 0.5) * zufallAstlaenge, ebene + 1);

Der Baum sieht jetzt etwas natürlicher aus. Probiere auch andere Werte für die beiden Variablen `zufallAenderungswinkel` und `zufallAstlaenge` aus.

![Fraktal Baum 3](svg-fraktalbaum/images/fraktal-baum-3.png)

## Farbe und Liniendicke ändern

Um den Baum in Farbe zeichnen zu können, brauchen wir als erstes eine Bibliothek, die uns ermöglicht, Farbänderungen berechnen zu können. Wir verwenden dazu [TinyColor](https://bgrins.github.io/TinyColor/){:target=_blank}. 
Füge einen Verweis darauf unter den Verweis auf snap.svg ein:

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.1/tinycolor.min.js"></script>

Als nächstes fügen wir eine weitere globale Variable `maxEbene` hinzu:

	// globale Variablen
	var aenderungswinkel;
	var aenderungAstlaenge;
	var zufallAenderungswinkel = 15;
	var zufallAstlaenge = 10;
	var maxEbene = 11;
	baumZeichnen()

Ändere in der Funktion `astZeichnen` die Bedingung in der ersten Zeile auf `if (ebene < maxEbene)`.

	function astZeichnen(x1, y1, winkel, astLaenge, ebene) {
		if (ebene < maxEbene) {

Nun müssen wir noch das Zeichnen der Linie anpassen. Wir weisen dazu das Ergebnis des Funktionsaufrufes `svg.line` der Variable ast zu. Mit `ast.attr` können wir dann die 
Attribute der Linie wie z.B. die Linienfarbe oder Liniendicke ändern. Als Ausgangsfarbe wählen wir ein sehr dunkles Grün für den Stamm (#001100), das für jede Ebene heller gemacht wird.

	// Linie zeichnen
	var ast = svg.line(x1, y1, x2, y2);
	var color = tinycolor("#001100");
	ast.attr({
		stroke: color.lighten(ebene * 3).toString(),
		strokeWidth: maxEbene - ebene
	});

![Fraktal Baum 4](svg-fraktalbaum/images/fraktal-baum-4.png)

Damit der Baum noch besser aussieht, kannst du mehr Ebenen malen lassen. Erhöhe dazu die Variable `maxEbene`. Sei aber vorsichtig beim Auswählen des Wertes, denn in jeder Ebene 
verdoppelt sich die Anzahl der Linien. Das Zeichnen kann damit sehr schnell ziemlich lange dauern. Bei 15 Ebenen kann das Zeichnen des Baums schon 10 - 15 Sekunden dauern.

![Fraktal Baum 4.1](svg-fraktalbaum/images/fraktal-baum-4-1.png)