---

title: Erste Schritte mit SVG
description: In dieser Übung lernst du Scalable Vector Graphics (SVG) kennen.
---

# Erste Schritte mit SVG

## Ziel der Übung

In dieser Übung lernst du [*Scalable Vector Graphics*](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics) (kurz *SVG*) kennen. Unser Ziel sind:

* Wir wollen verstehen, was SVG ist und wofür es eingesetzt wird.
* Wir wollen Grafiken mit SVG in eine HTML-Seite einbauen.
* Wir wollen SVG mit JavaScript programmgesteuert erzeugen.
* Wir möchten SVG verwenden, um ein mathematisches Prinzip, die [Cardanischen Kreise](https://de.wikipedia.org/wiki/Cardanische_Kreise) veranschaulichen.

Wenn du nach dieser Übung mehr über SVG lernen willst oder während der Übung Detailfragen hast, kannst du einen Blick auf [die SVG Einführung auf w3schools.com](http://www.w3schools.com/svg/) werfen.

Falls du noch überhaupt keine Erfahrung mit HTML und JavaScript hast, wende dich an eine CoderDojo Mentorin oder einen Mentor. Sie werden dir die HTML-Basics erklären oder dir eine Übung für HTML-Grundlagen zeigen.


## Was sind *Vektorgrafiken*?

Das *V* in *SVG* steht für *Vector*. Sinn von SVG ist es also, [Vektorgrafiken](https://de.wikipedia.org/wiki/Vektorgrafik) zu definieren. Diese lassen sich dann problemlos in HTML-Webseiten eingetten (dazu später mehr).

Im Gegensatz zu [Rastergrafiken](https://de.wikipedia.org/wiki/Rastergrafik) werden Vektorgrafiken nicht als einzelne Pixel sondern als *Bildbeschreibung* gespeichert. Dadurch lassen sie sich wunderbar vergrößern und verkleinern. Hier ein Beispiel: Das folgende Bild ist eine Rastergrafik, die auf eine Auflösung von 300x300 Pixel vergrößert wurde:

![Rastergrafik](https://upload.wikimedia.org/wikipedia/commons/1/13/Zeichen_224_20px.png){:width="300px"}

Hier nun das gleiche, vergrößerte Bild als SVG-Vektorgrafik. Siehst du, wie gestochen scharf es bleibt?

![Vektorgrafik](https://upload.wikimedia.org/wikipedia/commons/e/e5/Zeichen_224.svg){:width="300px"}

Jetzt wollen wir die oben gezeigte Vektorgrafik in SVG schreiben und in eine Webseite einbauen.


## Entwicklungsumgebung öffnen

In dieser Übung lernst du eine neue Webseite kennen, mit der du rasch HTML-, JavaScript- und CSS-Code ausprobieren kannst. Sie heißt [Plunker](https://plnkr.co).

1. Öffne einen Webbrowser deiner Wahl und navigiere zu [https://plnkr.co](https://plnkr.co).

1. Rechts oben siehst du den Buttton *Sign in with Github*. [Github](https://github.com/) ist eine sehr wichtige Seite für Coder. Man kann dort den Quellcode seiner Programme online speichern. Auf Github gibt es unzählige Projekte von Hobby-Codern und Profis. Falls du noch kein Github-Konto hast, klicke auf den Link und lege dir einen Benutzer an.

1. Du müsstest am Ende wieder bei Plunker landen und rechts oben deinen Github-Benutzer sehen.<br/>
![In Plunker angemeldet](erste-schritte-mit-svg/plunker-login.png)

1. Starte als nächstes den Plunker Editor.<br/>
![Plunker Editor starten](erste-schritte-mit-svg/start-plunker-editor.png)

1. Der Bildschirmaufbau des Plunker Editor ist recht einfach. Die folgende Grafik zeigt die wichtigsten Teile. Experimentiere ein wenig, indem du den HTML- und JavaScript-Code des generierten Beispiels veränderst und laufen lässt.<br/>
![Plunker Editor](erste-schritte-mit-svg/plunker-ui.png)

Jetzt legen wir los. Vergiss bitte nicht, während der Arbeit hin und wieder eine Dateien zu speichern.


## Unser erstes SVG

Ändere den von Plunker generierten HTML Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/bW70b0/)).

**Tipp:** Drücke gleich am Anfang auf *Run*, dann siehst du laufend das Ergebnis des von dir bereits eingegebenen Codes. 

```
<!DOCTYPE html>
<html>

  <body>
    <h1>Hallo SVG!</h1>
    
    <svg id="svg" width="200" height="200" viewBox="0 0 74 74">
      <circle fill="#F0CA00" cx="37" cy="37" r="37"/> 
      <circle fill="#008754" cx="37" cy="37" r="35"/> 
      <circle fill="#F0CA00" cx="37" cy="37" r="25"/> 
      <path fill="#008754" d="m 44.5,34 -15,0 0,-16 -6,0 0,38 6,0 0,-17 15,0 0,17 6,0 0,-38 -6,0 z"/>
    </svg>
    
    <p>
      Hier kann weiterer Text folgen
    </p>
  </body>

</html>
```

1. Achte auf das `<svg...>` Tag. Es umschließt die SVG Grafikbeschreibung.
   * Mit den Attributen `width` und `height` legst du die Anzeigegröße fest. Experimentiere mit anderen Werten.
   * Mit dem Attribut `viewBox` kannst du einen Ausschnitt der Grafik anzeigen. Probiere einmal `0 0 50 50` aus. Siehst du, wie ein Teil der Grafik weggeschnitten ist?
   * Möchtest du ganz, ganz genau wissen, was alles beim `svg` Tag möglich ist. Die Profi-Doku findest du [bei Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute).

1. Mit dem `circle` Tag kann man Kreise malen.
   * `cx` legt den Mittelpunkt des Kreises auf der X-Achse fest.
   * `cy` legt den Mittelpunkt des Kreises auf der Y-Achse fest. **Achtung:** Bei Computergrafik sind Punkte weiter **unten** je **größer** die Koordinaten werden. Der Koordinatenursprung ist also **links oben**.
   * `r` legt den Radius fest.
   * `fill` legt die Füllfarbe fest. Wenn du ein Farbe auswählen möchtest, kannst du einen *Color Picker* wie z.B. den von [w3schools](http://www.w3schools.com/colors/colors_picker.asp) verwenden.

1. Das `path` Tag ist besonders interessant. Man kann damit Figuren zeichnen, die sich aus einer Folge von Linien und Kreisbogensegmenten zusammensetzen.
   * In `d` legt man das Aussehen der Figur fest.
   * `m` steht für `move` und setzt den Zeichencursor an eine Position.
   * Nach dem `m` folgen durch Leerzeichen getrennte x/y Koordinatenpaare wie z.B. `44.5,34`. Durch das Zeichen `z` wird die Figur geschlossen. Schwierig? Frage eine CoderDojo Mentorin um Hilfe. Sie wird dir Schritt für Schritt erklären, wie `path` funktioniert.
   * Möchtest du ganz, ganz genau wissen, was alles bei `d` möglich ist. Die Profi-Doku findest du [bei Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).        

1. Wenn du möchtest, kannst du weitere Formen ausprobieren. Auf [w3schools](http://www.w3schools.com/svg/svg_examples.asp) findest du jede Menge Beispiele mit Linien, Rechtecken, Ellipsen, Polygonen etc.


## SVG mit JavaScript zeichnen

Man kann SVG nicht nur direkt im HTML Code einbetten sondern es auch in JavaScript generieren. Das wollen wir jetzt probieren. Unser Ziel ist es, das gleiche Beispiel wie zuvor mit JavaScript zu zeichnen.

Erstelle ein neues *Plunk*. Ändere den von Plunker generierten HTML Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/YVS3vdrWjHlQuXA08o6l/)). **Nicht vergessen:** Drücke gleich am Anfang auf *Run*, dann siehst du laufend das Ergebnis des von dir bereits eingegebenen Codes. 

```
<!DOCTYPE html>
<html>

  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg.js"></script>
  </head>

  <body>
    <h1>Hallo SVG!</h1>
    <svg id="svg" width="200" height="200" viewBox="0 0 74 74"></svg>
    <p>
      Hier kann weiterer Text folgen
    </p>

    <script src="script.js"></script>
  </body>

</html>
```

Den von Plunker generierten JavaScript Code in `script.js` musst du wie folgt ändern:

```
var s = Snap("#svg");

s.circle(37, 37, 37).attr("fill", "#F0CA00");
s.circle(37, 37, 35).attr("fill", "#008754");
s.circle(37, 37, 25).attr("fill", "#F0CA00");
s.path("m 44.5,34 -15,0 0,-16 -6,0 0,38 6,0 0,-17 15,0 0,17 6,0 0,-38 -6,0 z")
  .attr("fill", "#008754");
```

1. Achte darauf, wie im `head` Tag vom HTML die Bibliothek [*Snap.svg*](http://snapsvg.io/) referenziert wird. *Snap.svg* erleichtert die Arbeit mit SVG in JavaScript ganz gewaltig.

1. Achte darauf, dass im HTML das `svg` Tag leer ist.

1. Vergleiche den JavaScript Code mit dem SVG HTML Code aus der letzten Übung. Siehst du die Ähnlichkeiten.

Warum sollte man SVG mit JavaScript statt mit HTML erzeugen wollen? Es gibt dafür unter anderen zwei wichtige Gründe:

* Manchmal ist es leichter, eine Grafik mit Code zu generieren statt sie in HTML vollständig zu beschreiben. Stell dir ein Schachbrettmuster vor. In JavaScript kein Problem. Einfach zwei Schleifen und schon ist es erledigt. In HTML wäre das viel SVG Code, den man mühsam schreiben muss.

* SVG muss nicht statisch sein. Mit JavaScript kann man das Bild laufend ändern und so Animationen erzeugen, man kann auf Benutzeraktionen wie Mausklicks reagieren etc. Im nächsten Beispiel probieren wir das aus.

**Tipp:** Im [*Snap.svg Tutorial*](http://svg.dabbles.info/) findest du jede Menge Beispiele zum Arbeiten mit SVG über JavaScript. Du kannst die Beispiele dort direkt ändern, starten und dadurch experimentieren.<br/>


## SVG mit Animation bei Mausklick

Wir möchten unsere Beispielgrafik um Interaktionsmöglichkeiten erweitern. Ändere dafür den JavaScript-Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/B1hPGdwHarcwi7BIMbmq/)):

```
var s = Snap("#svg");

var c1 = s.circle(37, 37, 37).attr("fill", "#F0CA00");
var c2 = s.circle(37, 37, 35).attr("fill", "#008754");
var c3 = s.circle(37, 37, 25).attr("fill", "#F0CA00");
var g = s.group(c1, c2, c3);

var p = s.path("m 44.5,34 -15,0 0,-16 -6,0 0,38 6,0 0,-17 15,0 0,17 6,0 0,-38 -6,0 z")
  .attr("fill", "#008754");

var direction = 360;
g.click(function() {
  g.animate({ opacity: (direction > 0) ? 0 : 1 }, 1000);
  p.animate({ transform: 'R' + direction + ', 37, 37' }, 1000);
  direction = (direction > 0) ? 0 : 360;
});
```

1. Achte auf den Aufruf der Funktion `group`. Dadurch kann man mehrere Elemente der Grafik in eine Gruppe zusammenfassen. Auf die Gruppe kann man dann Operationen wie Klonen, Bewegen etc. anwenden.

1. Mit der `click` Funktion können wir auf einen Mausklick reagieren.

1. Durch `animate` kann man Eigenschaften des Grafikelements animieren.
  * Unsere erste Animation ändert die `opacity` (=Lichtundurchlässigkeit) der Gruppe, sodass beim ersten Klick die Gruppe langsam verschwindet (dieser Effekt wird *fade out* genannt). Beim zweiten Klick erscheint sie langsam wieder (*fade in*).
  * Die zweite Animation rotiert (`R`) den Pfad, der unser *H* darstellt beim ersten Klick um 360°. Beim zweiten Klick rotiert das *H* wieder auf 0° zurück.

Probiere den Effekt aus und klick mehrfach auf die Grafik. Experimentiere mit unterschiedlichen Animationen. **Tipp:** Im [*Snap.svg Tutorial*](http://svg.dabbles.info/snaptut-animategroup) findest du eine Menge zusätzlicher Beispiele mit Animationen.


## SVG in der Praxis

Stell dir vor, du erstellst für ein Referat in Mathematik oder Physik eine Webseite. Du möchtest mit einer Grafik etwas visualisieren. Genau dafür ist SVG ausgezeichnet geeignet.

In diesem Beispiel veranschaulichen wir die [Cardanischen Kreise](https://de.wikipedia.org/wiki/Cardanische_Kreise). Man hat zwei Kreise, einen größeren und einen kleineren. Der kleinere hat genau den halben Durchmesser des größeren. Der kleinere rollt im Inneren des großen an dessen Außenseite. Das faszinierende ist, dass sich eine gerade Linie ergibt, wenn man einen Punkt am Rand des kleineren Kreises betrachtet. Alles klar? Eine solche Beschreibung als Text ist schwierig zu verstehen. Wäre es nicht besser, wenn man das ganze als animierte Grafik sehen könnte? Das wollen wir mit SVG erreichen.

Die folgende Grafik aus Wikipedia ist ein Beispiel. So ähnlich soll unser SVG aussehen:<br/>
![Cardanische Kreise](https://upload.wikimedia.org/wikipedia/commons/f/fe/TusiCouple.gif)

**Tipp:** In Englisch findet man die Caradnischen Kreise unter dem Titel *Tusi Couple* bzw. *Tusi Motion*. Wenn du im Internet nach Beispielen suchst, probiere die Englische Bezeichnung aus. Du findest dann mehr Ergebnisse.

Um die Formeln im folgenden Code zu verstehen, musst du mit dem [Satz des Phytagoras](https://de.wikipedia.org/wiki/Satz_des_Pythagoras) und [Winkelfunktionen](https://de.wikipedia.org/wiki/Trigonometrische_Funktion) vertraut sein. Im CoderDojo werden wir die Formeln erarbeiten. Wenn du die Übung selbst machst und verstehen möchtest, wie die Formeln zustande kommen, sprich mit deiner Mathematik- oder Informatiklehrerin.

Erstelle ein neues *Plunk*. Ändere den von Plunker generierten HTML Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/GbWM3hoy0wY656NaQudo/)). **Nicht vergessen:** Drücke gleich am Anfang auf *Run*, dann siehst du laufend das Ergebnis des von dir bereits eingegebenen Codes. 

```
<!DOCTYPE html>
<html>

  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg.js"></script>
  </head>

  <body>
    <svg id="svg" width="600px" height="600px"></svg>
    <script src="script.js"></script>
  </body>
  
</html>
```

Den von Plunker generierten JavaScript Code in `script.js` musst du wie folgt ändern:

```
var s = Snap("#svg");

var padding = 10;   // left/top padding
var r = 280;        // radius of big circle
var rotation = 0;   // current rotation (radiants)
var step = 100;
var animSpeed = 20;

// big circle
var bigCircle = s.circle(padding + r, padding + r, r);
bigCircle.attr({ 
  fill: 'white', 
  stroke: 'black', 
  strokeWidth: 3 
});

// small, rotating circle with radius = r/2
var smallCircle = s.circle(padding + r, padding + r/2, r/2);
smallCircle.attr({ 
  fill: 'white', 
  stroke: 'gray', 
  strokeWidth: 1, 
});

// dot rotating with small circle
var dot = s.circle(padding + r, padding, 5);
dot.attr({ 
  fill: 'red' 
});

// line on which the dot moves
var line = s.line(padding + r, padding, padding + r, padding + 2 * r);
line.attr({ 
  stroke: 'lightgray', 
  strokeWidth: 1,
  'stroke-dasharray': '5,5'
});

// timer function 
var timerFunc = function() {
  // increment rotation
  rotation += Math.PI / step;
  if (rotation >= 2 * Math.PI) {
    rotation -= 2 * Math.PI;
  }
  
  // calculate translation of small circle
  var x = Math.cos(Math.PI / 2 - rotation) * r/2;
  var y = r/2 - Math.sin(Math.PI / 2 - rotation) * r/2;

  // calculate translation of dot
  var ry = r - (Math.cos(rotation) * r/2) * 2;

  // transform circle and dot
  smallCircle.transform('T' + Math.round(x) +',' + Math.round(y));
  dot.transform('T0,' + ry);

  // schedule next animation step
  setTimeout(timerFunc, animSpeed);
};

// schedule first animation step
setTimeout(timerFunc, animSpeed);
```

1. Gehe den JavaScript-Code mit einem CoderDojo Mentor durch.

1. Achte besonders auf die `timerFunc`. Sie wird regelmäßig (alle `animSpeed` Millisekunden) aufgerufen.
  * Als erstes berechnet sie die Schrittweise Rotation des kleineren Kreises. `rotation` enthält den Rotationswinkel in [Radiant](https://de.wikipedia.org/wiki/Radiant_(Einheit)).
  * Als nächstes berechnet sie ausgehend von der aktuellen Rotation die Position des kleinen Kreises und des roten Punktes. Wie gesagt, wenn du Winkelfunktionen schon beherrschst, gehe die Mathematik dahinter mit einem CoderDojo Mentor oder deiner Lehrerin durch.
  * Mit `transform` werden kleiner Kreis und roter Punkt auf die neue Position gesetzt.
  * Abschließend wird festgelegt, dass die `timerFunc` erneut aufgerufen werden soll. 

1. Experimentieren mit anderen Linienstärken, Farben, Animationsgeschwindigkeiten etc.


## Verbesserte Programmversion

Das oben gezeigte Programm funktioniert, ist aber nicht optimal. Die Animation wird durch viele, schnell hintereinander angezeigte [Einzelbilder](https://de.wikipedia.org/wiki/Einzelbild_(Film)) erreicht. Dadurch ruckelt die Animation ein wenig (abhängig vom Wert von `animSpeed`). Darüber hinaus ist es unschön, dass wir manuell die Position des roten Punktes berechnen müssen.

Was können wir verbessern?

* Wir können die Animationsfunktion, die in SVG eingebaut ist, verwenden. Die Animation sollte dadurch "butterweich" werden.
* Wir können die Rotationsfunktion von SVG nutzen anstatt selbst die Position des roten Punktes zu errechnen.

Ändere den JavaScript-Code aus dem vorherigen Beispiel wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/3NR9j60QE1rRJQhLGNDB/)). **Nicht vergessen:** Drücke gleich am Anfang auf *Run*, dann siehst du laufend das Ergebnis des von dir bereits eingegebenen Codes. 

```
var s = Snap("#svg");

var padding = 10;   // left/top padding
var r = 280;        // radius of big circle
var rotation = 0;   // current rotation (radiants)
var step = 100;
var animSpeed = 20;

// big circle
var bigCircle = s.circle(padding + r, padding + r, r);
bigCircle.attr({ 
  fill: 'white', 
  stroke: 'black', 
  strokeWidth: 3 
});

// bounding circle for smooth animation
var smallCircleBounding = s.circle(padding + r, padding + r/2, r/2 + 8);
smallCircleBounding.attr({ fill: 'none', stroke: 'none' });

// small, rotating circle with radius = r/2
var smallCircle = s.circle(padding + r, padding + r/2, r/2);
smallCircle.attr({ 
  fill: 'white', 
  stroke: 'gray', 
  strokeWidth: 1, 
});

// dot rotating with small circle
var dot = s.circle(padding + r, padding, 4);
dot.attr({ 
  fill: 'red' 
});

// group rotating circles
var group = s.group(smallCircleBounding, smallCircle, dot);

// line on which the dot moves
var line = s.line(padding + r, padding, padding + r, padding + 2 * r);
line.attr({ 
  stroke: 'lightgray', 
  strokeWidth: 1,
  'stroke-dasharray': '5,5'
});

// timer function 
var timerFunc = function() {
  // increment rotation
  rotation += Math.PI / step;
  if (rotation >= 2 * Math.PI) {
    rotation -= 2 * Math.PI;
  }
  
  // calculate translation of small circle
  var x = Math.cos(Math.PI / 2 - rotation) * r/2;
  var y = r/2 - Math.sin(Math.PI / 2 - rotation) * r/2;

  // transform circle and dot
  group.animate(
    { transform: 'T' + Math.round(x) +',' + Math.round(y) + 'R' + (-1) * rotation / Math.PI / 2 * 360 }, 
    animSpeed,
    timerFunc);
};

// schedule first animation step
timerFunc();
```

1. Beachte, dass der rote Punkt nicht mehr bewegt wird. Stattdessen wird mit der Funktion `group` der kleine Kreis mit dem roten Punkt in eine Gruppe zusammengefasst. Im `animate` wird mit `R` die Gruppe rotiert. Dadurch rotiert der rote Punkt automatisch.

1. Achte außerdem darauf, dass hier kein `setTimeout` mehr verwendet wird. Stattdessen verwendet das Beispiel die Funktion `animate` und lässt SVG den Kreis bewegen.

1. Setze den Wert für `step` einmal auf `5` und den von `animSpeed` auf `1000`. Siehst du, wie der kleine Kreis jetzt "hüpft"? Überlege, warum es zu diesem Effekt kommt?


## Weitere Übungen

1. Probiere, mit JavaScript ein Schachbrettmuster mit *Snap.svg* zu erzeugen.

1. Es gibt eine kostenlose Open-Source Software, mit der du SVG-Dateien erstellen und bearbeiten kannst: [Inkscape](https://inkscape.org/de/). Es wird auch von Profis verwendet. Installiere Inkscape, erstelle eine SVG-Datei und sieh dir anschließend den von Inkscape generierten SVG-Code an. 

1. Wenn man mehrere Cardanische Kreise kombiniert, entsteht eine faszinierende, optische Illusion. Schau dir z.B. die [*Tusi Motion* von Michael Bach](http://www.michaelbach.de/ot/mot-Tusi/index.html) an.

1. Möchtest du deine Webseite im Internet veröffentlichen? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/dreamspark-azure.html).