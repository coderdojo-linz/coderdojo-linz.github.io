---
title: "SVG Schreibtrainer"
description: "In dieser Übung baust du ein Spiel das dir hilft, deine Tipp-Geschwindigkeit zu verbessern."
level: 2
---

# SVG Schreibtrainer

## Ziel der Übung

Du baust ein Spiel das dir hilft, deine Tipp-Geschwindigkeit zu verbessern.

Am oberen Spielfeldrand erscheinen Kreise mit Buchstaben, die nach unten fallen. Tippe den Buchstaben, bevor er den unteren 
Rand des Spielfelds berührt.

Auf Wikipedia findest du eine Grafik zum 
<a href="https://de.wikipedia.org/wiki/Zehnfingersystem#/media/File:QWERTZ-10Finger-Layout.svg" target="_blank">Zehnfingersystem</a>, die erklärt, welche Taste 
mit welchem Finger gedrückt werden soll.

![Schreibtrainer](images/schreibtrainer.png)

## Grundgerüst der HTML Seite

Erstelle als erstes eine neue HTML Seite mit dem Namen `schreibtrainer.html`.

{{< highlight html >}}
<!DOCTYPE html>
<html>

<head>
	<title>Schreibtrainer</title>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="schreibtrainer.css">
</head>

<body>
	<h1>Schreibtrainer</h1>

	<!-- SVG Spielbereich -->
	<div>
		<svg id="svg" width="800" height="500"></svg>
	</div>

	<!-- Ausgaben des Spiels -->
	<p>Anzahl Treffer: <span id="anzahlTreffer" /></p>
	<p>Anzahl Fehler: <span id="anzahlFehler" /></p>

	<!-- Buttons zum Spiel stoppen und starten -->
	<button onclick="starteSpiel()">Starte Spiel</button>
	<button onclick="spielAktiv = false">Stoppe Spiel</button>

	<!-- Scripte für snap.svg und eigene Scripte -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>
	<script type="text/javascript" src="schreibtrainer.js"></script>
</body>

</html>
{{< / highlight >}}

## Styles

Die Styles sind hier nicht direkt im HTML enthalten, sondern es wird auf die externe Datei `schreibtrainer.css` verwiesen. Die Datei muss sich im selben Ordner wie schreibtrainer.htm befinden. 
Du kannst die Datei entweder unter <a href="schreibtrainer.css">schreibtrainer.css</a> herunterladen, oder du erstellst eine neue Datei `schreibtrainer.css` mit folgendem Inhalt:

{{< highlight css >}}
body {
	font-family: Verdana;
	padding: 20px;
}

#svg {
	background-color: lightblue;
}

circle {
	stroke: black;
}

text {
	stroke: black;
	font-size: 30px;
	line-height: 30px;
}
{{< / highlight >}}

## Skripte

Für die Skripte verwenden wir in diesem Spiel eine eigene Datei. Lege dazu eine neue Datei `schreibtrainer.js` an. Im HTML wird auf diese Datei verwiesen. Wir starten 
mit folgenden Grundgerüst:

{{< highlight js >}}
var svg = Snap("#svg");
var buchstaben = "fjdkslaöghärueiwoqptzüvnbmcxy";
var level;
var treffer;
var fehler;
var spielAktiv;

starteSpiel();

// setzt alle Variablen auf den Ausgangswert und starte dann das Spiel
function starteSpiel() {
	// variablen initialisieren
	level = 1;
	treffer = 0;
	fehler = 0;
	spielAktiv = true;

	datenAusgeben();
	neuerBuchstabe();
}

// gibt die Anzahl der Treffer und die Anzahl der Fehler aus
function datenAusgeben() {
	// TODO
}

// zeigt einen neuen Buchstaben der getippt werden soll im Spiel an
function neuerBuchstabe() {
	// TODO
}
{{< / highlight >}}

Wenn du die Seite schreibtrainer.html jetzt aufrufst, siehst du nur das leere Spielfeld. Sonst passiert noch nichts. Als erstes fügen wir den Code 
für die Funktion datenAusgeben ein. Hier geben wir in den HTML Element `anzahlFehler` und `anzahlTreffer` die aktuellen Werte der Variablen `fehler` und `treffer` aus.

**Code für die Function datenAusgeben()**

{{< highlight js >}}
document.getElementById("anzahlFehler").innerText = fehler.toString();
document.getElementById("anzahlTreffer").innerText = treffer.toString();
{{< / highlight >}}

Damit die Buchstaben im Spielfeld angezeigt werden, müssen wir jetzt noch die Function `neuerBuchstabe` implementieren.

**Code für die Function neuerBuchstabe()**

{{< highlight js >}}
if (spielAktiv) {
	// bestimme x und y position und den angezeigten Buchstaben
	var x = getRandomInt(40, 760);
	var y = 20;
	var buchstabe = buchstaben[getRandomInt(0, level)];

	// male mit SVG einen Kreis und den Buchstaben und gruppiere die beiden zu einer Figur
	var kreis = svg.circle(x, y, 20).attr({ fill: "yellow" });
	var text = svg.text(x - 5, y + 8, buchstabe);
	var figur = svg.g(kreis, text);

	// weise der Figur den Buchstaben zu und einen boolean Wert getippt, der true wird
	// sobald der Buchstabe getippt wurde
	figur.data("buchstabe", buchstabe);
	figur.data("getippt", false);

	// bewege die Figur in vier Sekunden zum unteren Ende des SVG Bereichs
	figur.animate({ transform: "translate(0, 500)" }, 4000, null, function () {
		// nach Ablauf der Animation entferne die Figur vom Spiel wenn sie noch nicht
		// getippt wurde und erhöhe die Anzahl der Fehler um eins
		if (!figur.data("getippt")) {
			figur.remove();
			fehler++;
			datenAusgeben();
		}
	});

	// rufe die Funktion neuerBuchstabe in einer Sekunde erneut auf
	setTimeout(neuerBuchstabe, 1000);
}
{{< / highlight >}}

In der Function `neuerBuchstabe` wird eine weitere Function `getRandomInt` aufgerufen. Sie liefert uns eine Zufallszahl zwischen den beiden übergebenen Zahlen. 
Diese Funktion müssen wir noch zu unserer JavaScript Datei hinzufügen, damit der Code funktioniert. Füge den nachfolgenden Code am Ende der Datei ein.

**Neue Function getRandomInt**

{{< highlight js >}}
// gibt eine Zufallszahl zwischen min (inklusive) und max (inklusive) zurück 
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
{{< / highlight >}}

Wenn du die Seite schreibtrainer.html jetzt aufrufst erscheinen bereits die Buchstaben und fallen nach unten.

Jetzt müssen wir uns noch darum kümmern, dass wir Tastatureingaben erkennen. Es gibt in Javascript dazu das Event document.onkeyup. Füge dazu den 
folgenden Code am Ende der Datei ein.

**Neues Event document.onkeyup**

{{< highlight js >}}
// reagiert wenn eine Taste gedrückt wird
document.onkeyup = function (event) {
	// finde alle Figuren im Spiel
	var figuren = svg.selectAll("g");
	if (figuren) {
		// suche in den Figuren jene, deren Buchstabe mit dem gedrückten Buchstaben 
		// übereinstimmt und die noch nicht getippt wurden
		var trefferFiguren = figuren.items.filter(function (figur) {
			return figur.data("buchstabe") == event.key && !figur.data("getippt");
		});

		// wenn eine Figur gefunden wurde, dann wurde ein richtiger Buchstabe gedrückt,
		// sonst erhöhe die Anzahl der Fehler
		if (trefferFiguren.length > 0) {
			buchstabeGetippt(trefferFiguren[0]);
		} else {
			fehler++;
		}

		datenAusgeben();
	}
};
{{< / highlight >}}

In dieser Funktion wird eine weitere Funktion `buchstabeGetippt` aufgerufen, die wir ebenfalls noch zu unserer JavaScript Datei hinzufügen müssen.

**Neue Function buchstabeGetippt**

{{< highlight js >}}
// zeigt an, dass eine richtige Taste gedrückt wurde
function buchstabeGetippt(figur) {
	// ändere den Wert getippt der Figur auf true
	figur.data("getippt", true);

	// vergrößere den Kreis und ändere die Farbe auf hellgrün über eine halbe Sekunde
	figur.select("circle").animate({ r: 40, fill: "lightgreen" }, 500, function () {
		// nach der Animation entferne die Figur vom Spiel
		figur.remove();
	});

	// erhöhe die Anzahl der Treffer um eins
	treffer++;

	// erhöhe das Level alle 5 Treffer
	if (treffer % 5 == 0) {
		level++;
	}
}
{{< / highlight >}}

Das Spiel ist jetzt fertig. Wenn du einen Buchstaben tippst, der gerade im Spielfeld angezeigt wird, wird der Kreis gröer und grün, dann verschwindet 
der Buchstabe.

## Weitere Ideen

- Ändere das Tempo des Spiels indem die Kreise schneller oder langsamer fallen.
- Ändere das Tempo des Spiels indem die Kreise schneller oder langsamer entstehen.
- Ändere die Logik der gewählten Buchstaben so, dass vom Zufallsgenerator abhängig vom Level nur die letzten vier Buchstaben berücksichtig werden.
- Finde eine bessere Logik zur Auswahl der Buchstaben, so dass neue Buchstaben öfter vorkommen als bereits gelernte.

Du kannst das Spiel unter <a href="schreibtrainer.html" target="_blank">schreibtrainer.html</a> direkt ausprobieren, 
oder du kannst dir auch den Source Code mit Hilfe der Developer Tools (F12) ansehen.