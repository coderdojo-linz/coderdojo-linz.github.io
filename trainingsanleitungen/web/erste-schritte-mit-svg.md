---
layout: sushi
title: Erste Schritte mit SVG
description: In dieser Übung lernst du Scalable Vector Graphics (SVG) kennen.
---

# Erste Schritte mit SVG

## Ziel der Übung

In dieser Übung lernst du [*Scalable Vector Graphics*](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics){:target="_blank"} (kurz *SVG*) kennen. Unser Ziel sind:

* Wir wollen verstehen, was SVG ist und wofür es eingesetzt wird.
* Wir wollen Grafiken mit SVG in eine HTML-Seite einbauen.
* Wir wollen SVG mit JavaScript programmgesteuert erzeugen.
* Wir möchten SVG verwenden, um ein mathematisches Prinzip, die [Cardanischen Kreise](https://de.wikipedia.org/wiki/Cardanische_Kreise){:target="_blank"} veranschaulichen.

Wenn du nach dieser Übung mehr über SVG lernen willst oder während der Übung Detailfragen hast, kannst du einen Blick auf [die SVG Einführung auf w3schools.com](http://www.w3schools.com/svg/){:target="_blank"} werfen.

Falls du noch überhaupt keine Erfahrung mit HTML und JavaScript hast, wende dich an eine CoderDojo Mentorin oder einen Mentor. Sie werden dir die HTML-Basics erklären oder dir eine Übung für HTML-Grundlagen zeigen.


## Was sind *Vektorgrafiken*?

Das *V* in *SVG* steht für *Vector*. Sinn von SVG ist es also, [Vektorgrafiken](https://de.wikipedia.org/wiki/Vektorgrafik){:target="_blank"} zu definieren. Diese lassen sich dann problemlos in HTML-Webseiten eingetten (dazu später mehr).

Im Gegensatz zu [Rastergrafiken](https://de.wikipedia.org/wiki/Rastergrafik){:target="_blank"} werden Vektorgrafiken nicht als einzelne Pixel sondern als *Bildbeschreibung* gespeichert. Dadurch lassen sie sich wunderbar vergrößern und verkleinern. Hier ein Beispiel: Das folgende Bild ist eine Rastergrafik, die auf eine Auflösung von 300x300 Pixel vergrößert wurde:

![Rastergrafik](https://upload.wikimedia.org/wikipedia/commons/1/13/Zeichen_224_20px.png){:width="300px"}

Hier nun das gleiche, vergrößerte Bild als SVG-Vektorgrafik. Siehst du, wie gestochen scharf es bleibt?

![Vektorgrafik](https://upload.wikimedia.org/wikipedia/commons/e/e5/Zeichen_224.svg){:width="300px"}

Jetzt wollen wir die oben gezeigte Vektorgrafik in SVG schreiben und in eine Webseite einbauen.


## Entwicklungsumgebung öffnen

In dieser Übung lernst du eine neue Webseite kennen, mit der du rasch HTML-, JavaScript- und CSS-Code ausprobieren kannst. Sie heißt [Plunker](https://plnkr.co){:target="_blank"}.

1. Öffne einen Webbrowser deiner Wahl und navigiere zu [https://plnkr.co](https://plnkr.co){:target="_blank"}.

1. Rechts oben siehst du den Buttton *Sign in with Github*. [Github](https://github.com/) ist eine sehr wichtige Seite für Coder. Man kann dort den Quellcode seiner Programme online speichern. Auf Github gibt es unzählige Projekte von Hobby-Codern und Profis. Falls du noch kein Github-Konto hast, klicke auf den Link und lege dir einen Benutzer an.

1. Du müsstest am Ende wieder bei Plunker landen und rechts oben deinen Github-Benutzer sehen.<br/>
![In Plunker angemeldet](erste-schritte-mit-svg/plunker-login.png)

1. Starte als nächstes den Plunker Editor.<br/>
![Plunker Editor starten](erste-schritte-mit-svg/start-plunker-editor.png)

1. Der Bildschirmaufbau des Plunker Editor ist recht einfach. Die folgende Grafik zeigt die wichtigsten Teile. Experimentiere ein wenig, indem du den HTML- und JavaScript-Code des generierten Beispiels veränderst und laufen lässt.<br/>
![Plunker Editor](erste-schritte-mit-svg/plunker-ui.png)

Jetzt legen wir los. Vergiss bitte nicht, während der Arbeit hin und wieder eine Dateien zu speichern.


## Unser erstes SVG

Ändere den von Plunker generierten HTML Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/bW70b0/){:target="_blank"}).

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
   * Möchtest du ganz, ganz genau wissen, was alles beim `svg` Tag möglich ist. Die Profi-Doku findest du [bei Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute){:target="_blank"}.

1. Mit dem `circle` Tag kann man Kreise malen.
   * `cx` legt den Mittelpunkt des Kreises auf der X-Achse fest.
   * `cy` legt den Mittelpunkt des Kreises auf der Y-Achse fest. **Achtung:** Bei Computergrafik sind Punkte weiter **unten** je **größer** die Koordinaten werden. Der Koordinatenursprung ist also **links oben**.
   * `r` legt den Radius fest.
   * `fill` legt die Füllfarbe fest. Wenn du ein Farbe auswählen möchtest, kannst du einen *Color Picker* wie z.B. den von [w3schools](http://www.w3schools.com/colors/colors_picker.asp){:target="_blank"} verwenden.

1. Das `path` Tag ist besonders interessant. Man kann damit Figuren zeichnen, die sich aus einer Folge von Linien und Kreisbogensegmenten zusammensetzen.
   * In `d` legt man das Aussehen der Figur fest.
   * `m` steht für `move` und setzt den Zeichencursor an eine Position.
   * Nach dem `m` folgen durch Leerzeichen getrennte x/y Koordinatenpaare wie z.B. `44.5,34`. Durch das Zeichen `z` wird die Figur geschlossen. Schwierig? Frage eine CoderDojo Mentorin um Hilfe. Sie wird dir Schritt für Schritt erklären, wie `path` funktioniert.
   * Möchtest du ganz, ganz genau wissen, was alles bei `d` möglich ist. Die Profi-Doku findest du [bei Mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d){:target="_blank"}.        

1. Wenn du möchtest, kannst du weitere Formen ausprobieren. Auf [w3schools](http://www.w3schools.com/svg/svg_examples.asp){:target="_blank"} findest du jede Menge Beispiele mit Linien, Rechtecken, Ellipsen, Polygonen etc.


## SVG mit JavaScript zeichnen

Man kann SVG nicht nur direkt im HTML Code einbetten sondern es auch in JavaScript generieren. Das wollen wir jetzt probieren. Unser Ziel ist es, das gleiche Beispiel wie zuvor mit JavaScript zu zeichnen.

Erstelle ein neues *Plunk*. Ändere den von Plunker generierten HTML Code wie folgt ([auf Plunker ausprobieren](https://embed.plnkr.co/YVS3vdrWjHlQuXA08o6l/){:target="_blank"}). **Nicht vergessen:** Drücke gleich am Anfang auf *Run*, dann siehst du laufend das Ergebnis des von dir bereits eingegebenen Codes. 

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

1. Achte darauf, wie im `head` Tag vom HTML die Bibliothek [*Snap.svg*](http://snapsvg.io/){:target="_blank"} referenziert wird. *Snap.svg* erleichtert die Arbeit mit SVG in JavaScript ganz gewaltig.

1. Achte darauf, dass im HTML das `svg` Tag leer ist.

1. Vergleiche den JavaScript Code mit dem SVG HTML Code aus der letzten Übung. Siehst du die Ähnlichkeiten.

Warum sollte man SVG mit JavaScript statt mit HTML erzeugen wollen? Es gibt dafür unter anderen zwei wichtige Gründe:

* Manchmal ist es leichter, eine Grafik mit Code zu generieren statt sie in HTML vollständig zu beschreiben. Stell dir ein Schachbrettmuster vor. In JavaScript kein Problem. Einfach zwei Schleifen und schon ist es erledigt. In HTML wäre das viel SVG Code, den man mühsam schreiben muss.

* SVG muss nicht statisch sein. Mit JavaScript kann man das Bild laufend ändern und so Animationen erzeugen, man kann auf Benutzeraktionen wie Mausklicks reagieren etc.





## Weitere Übungen

1. Probiere, mit JavaScript ein Schachbrettmuster mit *Snap.svg* zu erzeugen.

1. Es gibt eine kostenlose Open-Source Software, mit der du SVG-Dateien erstellen und bearbeiten kannst: [Inkscape](https://inkscape.org/de/){:target="_blank"}. Es wird auch von Profis verwendet. Installiere Inkscape, erstelle eine SVG-Datei und sieh dir anschließend den von Inkscape generierten SVG-Code an. 

1. Möchtest du deine Webseite im Internet veröffentlichen? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/dreamspark-azure.html).