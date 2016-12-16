---
layout: sushi
title: Fraktal Baum mit snap.svg
description: In dieser Übung programmierst du einen Space Shooter mit TypeScript und Phaser.io
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

test

	<!DOCTYPE html>
	<html>
	<head>
		<title>Fraktalbaum</title>
		<meta charset="utf-8" />

		<style>
			line {
				stroke: black;
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


