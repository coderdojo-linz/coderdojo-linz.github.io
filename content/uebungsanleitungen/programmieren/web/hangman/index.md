---
title: "Hangman"
description: "In dieser Übung programmierst du das Spiel Hangman."
level: 2
aliases:
- /trainingsanleitungen/web/hangman.html
categories:
- HTML
- SVG
- JavaScript
---

# Hangman

## Ziel der Übung

Der erste Spieler gibt ein Wort ein, das vom zweiten Spieler erraten werden muss.

Zuerst sieht der zweite Spieler nur ein Sternchen für jeden Buchstaben. Jeder erratene Buchstabe wird aufgedeckt. Für jeden falsch geratenen Buchstaben 
wird der Galgen um eine Linie erweitert. Ziel ist es, das Wort zu erraten bevor der Galgen fertig ist.

{{< imgblock "img/hangman.png" "Hangman" >}}{{< /imgblock >}}

## Grundgerüst der HTML Seite

Erstelle als erstes eine neue HTML Seite mit dem Namen hangman.html. 

```html
<!DOCTYPE html>
<html>

<head>
	<title>Hangman</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
	<h1>Hangman</h1>

	<div class="spielBereich">
		<div class="rateBereich">
			<div>Tippe einen Buchstaben ein.</div>
			<div id="wort"></div>
			<div id="info"></div>
		</div>

		<div class="hangmanBereich">
			<svg id="hangman" width="400" height="500"></svg>
		</div>
	</div>

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>

	<script type="text/javascript">
		
	</script>
</body>

</html>
```

## Styles

Die Styles sind hier nicht direkt im HTML enthalten, sondern es wird auf die externe Datei styles.css verwiesen. Die Datei muss sich im selben Ordner wie hangman.htm befinden. Du kannst die Datei entweder unter <a href="hangman/styles.css">styles.css</a> herunterladen, 
oder du erstellst eine neue Datei styles.css mit folgendem Inhalt:

```css
body {
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 20px;
	margin: 20px;
}

h1 {
	text-transform: uppercase;
}

div {
	box-sizing: border-box;
}

.spielBereich {
	height: 500px;
	display: flex;
	align-items: stretch;
}

.rateBereich {
	width: 50%;
	padding-right: 20px;
}   

#wort {
	text-transform: uppercase;
	font-family: Courier New, Courier, monospace;
	margin-top: 40px;
	font-size: 30px;
	text-align: center;
	letter-spacing: 0.3em;
}

#info {
	margin-top: 40px;
	color: #ff6600;
	font-weight: bold;
}

.hangmanBereich {
	width: 50%;
	background-color: #ddff99;
}

line, circle, ellipse, rect, text, path {
	stroke: black;
	fill: none;
}
```

## Skripte

Damit im Spiel jetzt auch was passiert, müssen wir im `<javascript>` Bereich unsere Skripte einfügen. Als erstes bauen wir das Grundgerüst für unser Programm. 
Wir brauchen Variablen für die Anzahl der Fehlversuche, einen Indikator, ob das Spiel bereits zu Ende ist, die bereits geratenen Buchstaben. 
Weiters brauchen wir den SVG Zeichen-Bereich mit dem Namen "hangman".

Als nächstes fordern wir mit `prompt` den ersten Spieler auf, ein Wort einzugeben.

Wenn im Dokument eine Taste gedrückt wird (`onkeyup`), müssen wir nachsehen, ob der gedrückte Buchstabe im Wort vorkommt.

Dann brauchen wir noch die Funktionen wortAzeigen, buchstabePruefen und hangmanMalen.

```js
var anzahlFehlversuche = 0;
var gameFinished = false;
var gerateneBuchstaben = [];
var svg = Snap("#hangman");

// wähle ein Wort aus und zeige es mit * an
var wort = window.prompt("Welches Wort soll erraten werden?").toLowerCase();
wortAnzeigen();
// window.focus() ist in manchen Browsern notwendig, damit später document.onkeyup reagiert
			window.focus();

// reagiere, wenn ein Buchstabe gedrückt wird
document.onkeyup = function(event) {
	// TODO
};

// zeige das Wort mit * für noch nicht erratene Buchstaben an
function wortAnzeigen() {
	// TODO
}

// prüfe, ob ein Buchstabe bereits geraten wurde oder gar nicht im Wort vorkommt
function buchstabePruefen(key) {
	// TODO
}

// male das Galgenmännchen
function hangmanMalen() {
	// TODO
}
```

Wenn du die Seite hangman.html jetzt öffnest, wirst du nach einem Wort gefragt. Dann passiert allerdings nichts mehr, da die Funktionen noch alle leer sind. 
Als erstes implementieren wir die Funktion wortAzeigen.

```js
// zeige das Wort mit * für noch nicht erratene Buchstaben an
function wortAnzeigen() {
	var verdecktesWort = wort;

	// prüfe für jeden Buchstaben im Wort, ob er sich bereits in den geratenen Buchstaben befindet
	for (var i = 0; i < verdecktesWort.length; i++) {
		if (gerateneBuchstaben.indexOf(verdecktesWort[i]) < 0) {
			verdecktesWort = verdecktesWort.replace(verdecktesWort[i], "*");
		}
	}

	// zeige das verdeckte Wort an
	document.getElementById("wort").innerText = verdecktesWort;

	// wenn kein * im verdeckten Wort mehr vorkommt, dann wurde das ganze Wort erraten
	if (verdecktesWort.indexOf("*") < 0) {
		document.getElementById("info").innerText = "Gratuliere, du hast das Wort erraten!";
		gameFinished = true;
	}
}
```

Wenn du die Seite nun aufrufst, wird du zuerst nach einem Wort gefragt, dann wird für jeden Buchstaben im Wort ein Sternchen angezeigt.

{{< imgblock "img/wort-anzeigen.png" "Hangman Wort anzeigen" >}}{{< /imgblock >}}

Als nächstes müssen wir dem zweiten Spieler erlauben, Buchstaben einzugeben. Dazu reagieren wir auf das Event `document.onkeyup`. Solange das Spiel noch nicht vorbei ist, 
prüfen wir den eingegebenen Buchstaben. In der Funktion `buchstabePruefen` unterscheiden wir dazu drei verschiedene Fälle:

- der Buchstabe wurde bereits geraten
- der Buchstabe wurde noch nicht geraten, kommt aber nicht im Wort vor 
- der Buchstabe wurde noch nicht geraten und kommt im Wort vor

Wenn die Anzahl der Fehlerversuche 10 ist, dann ist das Spiel zu Ende.

```js
// reagiere, wenn ein Buchstabe gedrückt wird
document.onkeyup = function(event) {
	if (!gameFinished) {
		buchstabePruefen(event.key);
	}
};

// prüfe, ob ein Buchstabe bereits geraten wurde oder gar nicht im Wort vorkommt
function buchstabePruefen(key) {
	if (gerateneBuchstaben.indexOf(key) >= 0) {
		// der Buchstabe wurde bereits gedrückt
		document.getElementById("info").innerText = "Du hast den Buchstaben " + key + " bereits geraten.";
		anzahlFehlversuche++;
		hangmanMalen();
	} else if (wort.indexOf(key) < 0) {
		// der Buchstabe kommt nicht im Wort vor
		document.getElementById("info").innerText = "Der Buchstabe " + key + " kommt im Wort nicht vor.";
		gerateneBuchstaben.push(key);
		anzahlFehlversuche++;
		hangmanMalen();
	} else {
		// es wurde ein Buchstabe erraten
		document.getElementById("info").innerText = "Super, du hast einen Buchstaben erraten";
		gerateneBuchstaben.push(key);
		wortAnzeigen();
	}

	// nach 10 Fehlversuchen ist das Spiel zu Ende
	if (anzahlFehlversuche >= 10) {
		document.getElementById("info").innerText = "Game over!";
		gameFinished = true;
	}
}
```

Du kannst das Spiel jetzt schon spielen. Die richtig erratenen Buchstaben werden angezeigt. Nach 10 Fehlversuchen ist das Spiel zu Ende.

{{< imgblock "img/buchstaben-raten.png" "Hangman Wort anzeigen" >}}{{< /imgblock >}}

## Galgen malen

Jetzt fehlt nur noch der Galgen, damit man auch weiß, wieviele Fehlversuche man schon hatte.

Zum Zeichnen verwenden wir die Bibliothek [snap.svg](http://snapsvg.io/docs/). Du kannst damit ganz einfach Linien, Kreise, Ellipsen, Rechtecke und ähnliches malen.

```js
// Beispiele
svg.circle(x, y, r);
svg.ellipse(x, y, rx, ry);
svg.rect(x, y, width, height);
svg.line(x1, y1, x2, y2);
svg.text(x, y, "Ich male mit snap.svg!");
svg.path("M200,250L300,300L400,250");
```

Für das Galgenmännchen in der Funktion `hangmanMalen` brauchen wir die Befehle `line` und `circle`.

{{< imgblock "img/hangman-svg.png" "Hangman SVG" >}}{{< /imgblock >}}

Bei jedem Fehlversuch malen wir eine weitere Line oder einen Kreis dazu. Die erste Linie ist der Sockel des Galgen. Die Linie beginnt an der Position x=50, y=450 und endet 
an der Position x=150, y=450. Ersetze die Platzhalter `// TODO` durch die Linien bzw. den Kreis für die weiteren Fehlversuche.

```js
// male das Galgenmännchen
function hangmanMalen() {
	switch (anzahlFehlversuche) {
		case 1:
			svg.line(50, 450, 150, 450);
			break;
		case 2:
			// TODO
			break;
		case 3:
			// TODO
			break;
		case 4:
			// TODO
			break;
		case 5:
			// TODO
			break;
		case 6:
			// TODO
			break;
		case 7:
			// TODO
			break;
		case 8:
			// TODO
			break;
		case 9:
			// TODO
			break;
		case 10:
			// TODO
			break;
	}
}
```

Wenn du Hilfe beim Malen des Galgenmännchen brauchst, findest du den gesamten Code unter <a href="hangman.html" target="_blank">hangman.html</a>. Du kannst das Spiel dort direkt ausprobieren, oder du siehst der den Source Code mit Hilfe der Developer Tools (F12) an.