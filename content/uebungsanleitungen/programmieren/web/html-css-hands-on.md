---
title: "HTML & CSS Hands On"
description: "In dieser Übung werden wir ausführlich die Basics von HTML und CSS üben."
date: 2020-05-27T13:11:02+02:00
draft: false
---

# HTML & CSS Hands On

Die folgenden Übungen kannst du direkt online in [JSFiddle](https://jsfiddle.net/) machen. Du brauchst dafür kein installiertes Tool. Für jede Übung wird das gewünschte Ergebnis dargestellt und du findest jeweils einen Link zur Ausgangsbasis für das Beispiel.

## HTML

### Basic Tags

Im ersten Beispiel werden die am häufigsten verwendeten HTML Element verwendet.

[Startprojekt](https://jsfiddle.net/karin112358/qmgvrodt/#fork)

<script async src="//jsfiddle.net/karin112358/noLwuvk4/embed/result/dark/"></script>

### Formatierung mit Tags

In diesem Beispiel geht es um die verschiedenen Optionen, um Text direkt durch HTML Elemente zu formatieren.

[Startprojekt](https://jsfiddle.net/karin112358/5L7junw3/#fork)

<script async src="//jsfiddle.net/karin112358/ephz38gc/embed/result/dark/"></script>

### Zitate, Abkürzungen, Adressen

Hebe Zitate, Abkürzungen und Adressen hervor.

[Startprojekt](https://jsfiddle.net/karin112358/ue4jn8wx/#fork)

<script async src="//jsfiddle.net/karin112358/kh2m3djs/embed/result/dark/"></script>

### Links

### Tabellen

### Iframe

### Head

### Responsive

### Code

Füge die richtigen HTML Tags ein um Code, Variablen und den Ergebnisbereich zu kennzeichnen.

Du kannst auch noch CSS Styles für die entsprechenden Tags hinzufügen, um das Ergebnis wie unten darzustellen.  

[Startprojekt](https://jsfiddle.net/karin112358/aLj93b70/#fork)

<script async src="//jsfiddle.net/karin112358/pzk7oyx0/embed/result/dark/"></script>

### Semantics

### Character Entities, Symbols and Emojis

### Forms

### Media

### Inline Styles

### Weitere Übungen für HTML

- [https://www.w3schools.com/html/exercise.asp](https://www.w3schools.com/html/exercise.asp)

## CSS

### Selektoren

Mit den Selektoren bestimmt man, welche Elemente aus dem HTML gestylt werden sollen. Wir wollen in diesem Beispiel folgende Styles:

- section1: gelber Hintergrund
- alle Überschriften: rote Schrift
- alle Absätze: blaue Schrift
- alle Elemente mit der Klasse `important`: fett
- alle Absätze in `section2`: Schriftart Courier New
- jeder erste Absatz pro Section: alles in Großbuchstaben
- jedes `span` das direkt in einem Absatz vorkommen (nur 1. Ebene): unterstrichen

[Startprojekt](https://jsfiddle.net/karin112358/cr6aqeagr8f7x3eh/#fork)

<script async src="//jsfiddle.net/karin112358/pf9r36tm/embed/result/dark/"></script>

### Units

Füge im CSS die Styles für Breite und Höhe der `div` Elemente hinzu.

[Startprojekt](https://jsfiddle.net/karin112358/k1f3vj9h/#fork)

<script async src="//jsfiddle.net/karin112358/c70xeLav/27/embed/result/dark/"></script>

### Display

Das `display` Property steuert das Anzeigeverhalten von Elementen. Verwende jeweils das korrekte `display` Property und ergänze wo nötig noch Höhe und Breite der Elemente im CSS.

[Startprojekt](https://jsfiddle.net/karin112358/cr6ax3eh/#fork)

<script async src="//jsfiddle.net/karin112358/rto63s01/77/embed/result/dark/"></script>

### Box Model

Ändere den Rahmen, Innen- und Außenabstand und den Umriss der `div` Elemente.

[Startprojekt](https://jsfiddle.net/karin112358/vp4Lyswo/#fork)

<script async src="//jsfiddle.net/karin112358/wfvt0y96/embed/result/dark/"></script>

### Text

### Links

### Display / Visibility

### Position

Setzte die Styles für die `div` Elemente so, dass sie sich wie in der angegebenen Lösung verhalten.

[Startprojekt](https://jsfiddle.net/karin112358/vgux50ck/#fork)

<script async src="//jsfiddle.net/karin112358/nbmgLo64/embed/result/dark/"></script>

<!-- zindex -->

### Overflow

Ändere das `overflow` verhalten der drei `div` Elemente.

[Startprojekt](https://jsfiddle.net/karin112358/dwyzogmh/#fork)

<script async src="//jsfiddle.net/karin112358/m9aosgrd/29/embed/result/dark/"></script>

### Float

Lass den Text um die `div` Elemente fließen.

[Startprojekt](https://jsfiddle.net/karin112358/24b3wayu/#fork)

<script async src="//jsfiddle.net/karin112358/seqzc182/embed/result/dark/"></script>

### Alignment

Versuche das gewünschte Alignment auf verschiedene Arten zu erreichen.

[Startprojekt](https://jsfiddle.net/karin112358/s8Lwahnm/#fork)

<script async src="//jsfiddle.net/karin112358/us6bk1xj/embed/result/dark/"></script>

### Farben

### Backgrounds

### Columns

### Variables

Verwende im folgenden Beispiel Variablen mit den Namen bg-color-light, bg-color-dark, font-size-small und font-size-large, um den `div` Elementen die richtigen Farben und Größen zuzuweisen.

[Startprojekt](https://jsfiddle.net/karin112358/f04j835o/#fork)

<script async src="//jsfiddle.net/karin112358/jf4ecnsy/embed/result/dark/"></script>

### Calc

Im folgenden Projekt sollen Header und Footer je 50px hoch sein, das Menu soll 20% der gesamten Bildschirmhöhe einnehmen und der Content-Bereich bekommt den Rest.

[Startprojekt](https://jsfiddle.net/karin112358/zrob7ad1/#fork)

<script async src="//jsfiddle.net/karin112358/gu17pn24/24/embed/result/dark/"></script>

### Media Queries

Das folgende Bespiel besteht aus einem Header, einem Menu, dem Contentbereich und einem Footer. Folgende Styles sollen abhängig von Größe und Medientyp gesetzt werden:

**default**

- Die Überschriften sind blau.
- Header und Footer sind grau hinterlegt.
- Die Position von Header und Footer ist oben bzw. unten fixiert und somit immer sichtbar.
- Das Menu wird mit 25% und der Content mit 75% der verfügbaren Breite angezeigt.

**max-height 500px**

- Die Position von Header und Footer ist nicht mehr fixiert sondern statisch (default Verhalten).

**max-width 500px**

- Menu und Content werden je mit 100% Breite untereinander angezeigt.

**print**

- Die Überschriften werden schwarz dargestellt.
- Header, Footer und Menu werden nicht angezeigt.

[Startprojekt](https://jsfiddle.net/karin112358/cq57zo0s/#fork)

<script async src="//jsfiddle.net/karin112358/g3d4bjs2/96/embed/result/dark/"></script>

### Flexbox

### Grid

Verwende das CSS Grid um die Elemente anzuordnen, indem du für die einzelnen Items die Position angibst.

[Startprojekt](https://jsfiddle.net/karin112358/czdykj3r/#fork)

<script async src="//jsfiddle.net/karin112358/8p9ajow1/embed/result/dark/"></script>

Verwende nun benannte Areas im CSS Grid, um die Elemente anzuordnen.

[Startprojekt](https://jsfiddle.net/karin112358/se8torvd/#fork)

<script async src="//jsfiddle.net/karin112358/vu5y9L71/embed/result/dark/"></script>

### Weitere Übungen für CSS

- [https://www.w3schools.com/css/exercise.asp](https://www.w3schools.com/css/exercise.asp)