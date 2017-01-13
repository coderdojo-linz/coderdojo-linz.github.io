---
layout: sushi
title: Hangman
description: In dieser Übung programmierst du das Spiel Hangman.
---

# Hangman

## Ziel der Übung

Der erste Spieler gibt ein Wort ein, das vom zweiten Spieler erraten werden muss.

Zuerst sieht der zweite Spieler nur ein Sternchen für jeden Buchstaben. Jeder erratene Buchstabe wird aufgedeckt. Für jeden falsch geratenen Buchstaben 
wird der Galgen um eine Linie erweitert. Ziel ist es, das Wort zu erraten bevor der Galgen fertig ist.

![Hangman](hangman/images/hangman.png)

## Grundgerüst der HTML Seite

Erstelle als erstes eine neue HTML Seite mit dem Namen hangman.html. 

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

## Styles

Die Styles sind hier nicht direkt im HTML enthalten, sondern es wird auf die externe Datei styles.css verwiesen. Die Datei muss sich im selben Ordner wie hangman.htm befinden. Du kannst die Datei entweder unter <a href="hangman/styles.css">styles.css</a> herunterladen, 
oder du erstellst eine neue Datei styles.css mit folgendem Inhalt:

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

## Skripte

Damit im Spiel jetzt auch was passiert, müssen wir im <javascript> Bereich unsere Skripte einfügen. Als erstes bauen wir das Grundgerüst für unser Programm. 
Wir brauchen Variablen für die Anzahl der Fehlversuche, einen Indikator, ob das Spiel bereits zu Ende ist, die bereits geratenen Buchstaben. 
Weiters brauchen wir den SVG Zeichen-Bereich mit dem Namen "hangman".

Als nächstes fordern wir mit `prompt` den ersten Spieler auf, ein Wort einzugeben.

Wenn im Dokument eine Taste gedrückt wird (`onkeyup`), müssen wir nachsehen, ob der gedrückte Buchstabe im Wort vorkommt.

Dann brauchen wir noch die Funktionen wortAzeigen, buchstabePruefen und hangmanMalen.

	var anzahlFehlversuche = 0;
	var gameFinished = false;
	var gerateneBuchstaben = [];
	var svg = Snap("#hangman");

	// wähle ein Wort aus und zeige es mit * an
	var wort = window.prompt("Welches Wort soll erraten werden?").toLowerCase();
	wortAnzeigen();

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

Wenn du die Seite hangman.html jetzt öffnest, wirst du nach einem Wort gefragt, dann passiert allerdings nichts mehr. Dazu implementieren wir als erstes die Funktion wortAzeigen.

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

Wenn du die 

![Hangman Wort anzeigen](hangman/images/wort-anzeigen.png)

## Galgen malen

Zum Zeichnen verwenden wir die Bibliothek [snap.svg](http://snapsvg.io/docs/){:target="_blank"}. Du kannst damit ganz einfach Linien, Kreise, Ellipsen, Rechtecke und ähnliches malen.

	// Beispiele
	svg.circle(300, 250, 200);
	svg.ellipse(300, 250, 200, 100);
	svg.rect(100, 50, 400, 400);
	svg.line(100, 250, 500, 250);
	svg.text(230, 240, "Ich male mit snap.svg!");
	svg.path("M200,250L300,300L400,250");