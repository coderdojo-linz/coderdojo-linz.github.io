---
title: "Mandala"
description: "In dieser Übung zeichnen wir ein Mandala mit Code"
level: 2
aliases:
- /trainingsanleitungen/web/mandala.html
categories:
- HTML
- TypeScript
---

# Mandala mit Code malen

## Was ist ein Mandala?

Stell dir vor, du zeichnest einen Kreis und füllst ihn mit vielen schönen Mustern, Formen und Farben. Es ist wie ein kompliziertes Malbuch, aber alles ist in einem Kreis angeordnet. Dieses Muster kann dir helfen, dich zu entspannen oder über das Leben und die Welt nachzudenken. In manchen Kulturen glauben die Menschen sogar, dass Mandalas ihnen helfen können, sich besser auf ihre Gedanken zu konzentrieren oder sich mit dem Universum zu verbinden.

Viele Menschen finden es auch einfach entspannend, Mandalas zu malen oder auszumalen. Es gibt sogar spezielle Malbücher nur mit Mandalas für Menschen, die sie gerne ausmalen möchten!

Führe am besten eine Bildersuche nach "Mandala" durch, um dir ein paar Beispiele anzusehen.

## Ziel der Übung

Wir möchten ein einfaches, schwar-weißes Mandala mit Code zeichnen. Dabei verwenden wir die Programmiersprache TypeScript und die Plattform p5js.y. So soll unser Mandala am Ende aussehen. Natürlich erfährst du auch, wie du es farbig ausmalen kannst. Aber dazu später mehr.

{{< imgblock "img/mandala-bw.png" "Mandala" >}}{{< /imgblock >}}

## Start

Starte, indem du [https://stackblitz.com/edit/mandala-starter?file=index.ts](https://stackblitz.com/edit/mandala-starter?file=index.ts) öffnest. Empfohlen ist es die Übung mit Chrome oder Edge zu machen. Andere Browser sollten aber auch funktionieren.

{{< imgblock "img/start-stackblitz.png" "Mit Stackblitz starten" >}}{{< /imgblock >}}

Nach Öffnen des Links solltest du ein Fenster sehen, das in etwa so aussieht wie die oben dargestellte Abbildung. Drücke einmal auf *Fork* (oben durch roten Rahmen hervorgehoben), um eine eigene Kopie des Startercodes herzustellen.

## Die ersten Kreise

Starten wir mit dem Zeichnen der ersten Kreise. Dafür suchst du dir im Startercode die Zeile `p.background('white');` in der Methode `draw` heraus. Sie müsste relativ weit unten im Code zu finden sein.

Unmittelbar nach dieser Zeile (**vor** der geschweiften Klammer zu) fügen wir folgenden Code ein. Die Kommentare (alles nach `//` musst du **nicht** eintippen. Das sind nur Erklärungen, was der Code macht):

```ts
p.strokeWeight(1);      // Linienstärke
p.stroke('black');      // Linienfarbe
p.angleMode(p.DEGREES); // Wir arbeiten mit Grad, ändere an dieser Zeile besser nichts
p.noFill();             // Wir wollen im Moment keine Füllfarbe
p.translate(230, 230);  // Wir verschieben den Mittelpunkt (0/0) unserer Zeichnung in
                        // die Mitte unseres Mandalas auf die Koordinaten 230/230.
```

Falls du später mit verschiedenen Linienfarben experimentieren möchtest, findest du die englischen Farbnamen unter [https://htmlcolorcodes.com/color-names/](https://htmlcolorcodes.com/color-names/).

Noch hat sich an unserem weißen Bildschirm nichts verändert. Das ändern wir jetzt. Füge folgenden Code ein **unmittelbar nach dem Code ein, den du zuvor geschrieben hast**, um die drei großen Kreise zu zeichnen:

```ts
p.push(); // Ist einfach notwendig, vertrau uns ;-)
p.circle(0, 0, 450); // Ganz großer Kreis
p.circle(0, 0, 390); // Mittlerer Kreis
p.circle(0, 0, 225); // Innerer Kreis
p.pop(); // Ist einfach notwendig, vertrau uns ;-)
```

So sollte die Grafik jetzt aussehen. Damit du die Parameter beim Aufruf der `circle`-Methode besser verstehst, ist eingezeichnet, welcher Kreis welchen Durchmesser hat.

{{< imgblock "img/circles.png" "Kreise" >}}{{< /imgblock >}}

## Linien

Jetzt müssen wir die sechs Linien einzeichnen, die durch die Kreise gehen. Damit du besser verstehst, von welchen Linien wir sprechen, hier die Linien in Rot dargestellt:

{{< imgblock "img/lines.png" "Linien" >}}{{< /imgblock >}}

Sechs Linien einzeln zeichnen ist langweilig. Wir verwenden stattdessen eine Schleife. Schleifen kennst du vielleicht schon aus Scratch. Füge folgenden Code ein **unmittelbar nach dem Code ein, den du zuvor geschrieben hast**, um die Linien zu zeichnen:

```ts
p.push();
for (let i = 0; i < 6; i++) { // Schleife, die sechs mal wiederholt wird
    p.line(0, -225, 0, 225); // Zeichne eine Linie
    p.rotate(30); // Rotiere die nächste Linie um 30 Grad
}
p.pop();
```

Experimentiere mit den verschiedenen Zahlen. Kannst du herausfinden, was sie genau steuern?

## Kleine Kreise

Jetzt kommen die sechs kleineren, inneren Kreise. In der folgenden Grafik siehst du, wie ein Kreis nach dem anderen hinzugefügt wird. Ganz links ist nur ein Kreis in der Grafik. In der Mitte sind es zwei, rechts dann drei. So geht das insgesamt sechs Mal, bis das schöne Mandala-Muster entstanden ist.

{{< imgblock "img/small-circles.png" "Kleine Kreise" >}}{{< /imgblock >}}

Füge folgenden Code ein **unmittelbar nach dem Code ein, den du zuvor geschrieben hast**, um die inneren Kreise zu zeichnen:

```ts
for (let i = 0; i < 6; i++) { // Schleife, die sechs mal wiederholt wird
    p.circle(113, 0, 225); // Zeichne den Kreis
    p.rotate(60); // Rotiere den nächsten Kreis um 60 Grad
}
```

Experimentiere mit den verschiedenen Zahlen. Kannst du herausfinden, was sie genau steuern?

**Gratuliere!** Dein Mandala-Muster in Schwarzweiß ist fertig.

## Farben

Jetzt wollen wir das Mandala noch farbig ausmalen. Starten wir mit den großen Kreisen. Suche dir den Code heraus, mit dem wir die großen Kreise gezeichnet haben. Hier fügen wir jetzt Füllfarben ein:

```ts
p.push();
p.fill(255, 0, 0, 255); // <<< DIESE ZEILE EINFÜGEN
p.circle(0, 0, 450);
p.fill(0, 255, 0, 255); // <<< DIESE ZEILE EINFÜGEN
p.circle(0, 0, 390);
p.fill(0, 0, 255, 255); // <<< DIESE ZEILE EINFÜGEN
p.circle(0, 0, 225);
p.pop();
```

So sieht das dann aus:

{{< imgblock "img/colorful-1.png" "Farbige Kreise" >}}{{< /imgblock >}}

Du fragst dich sicher, was die Zahlen bei `fill` in Klammern bedeuten. Die **ersten drei Zahlen** sind der Rot-, der Grün- und der Blau-Anteil der Farbe. 255 ist der höchste Wert, 0 der niedrigste. Woher soll man aber wissen, was man hinschreiben kann? Schau mal auf die Webseite [https://htmlcolorcodes.com/color-picker/](https://htmlcolorcodes.com/color-picker/). Dort kannst du dir einfach eine Farbe mit der Maus aussuchen. Die drei Farbwerte kann du dann ablesen und in deinen Code übernehmen.

{{< imgblock "img/color-picker.png" "Farbauswahl" >}}{{< /imgblock >}}

Die vierte Zahl bei `fill` in Klammern ist die Deckkraft der Farbe. 255 ist die höchste Deckkraft, 0 die niedrigste. Die Deckkraft ist wichtig, wenn du die inneren Kreis ausmalen möchtest. Das sieht auch schön aus. Hier ein Beispiel:

```ts
for (let i = 0; i < 6; i++) {
    p.fill(255, 255, 0, 75); // <<< DIESE ZEILE EINFÜGEN
    p.circle(113, 0, 225);
    p.rotate(60);
}
```

Das sieht dann so aus:
    
{{< imgblock "img/final.png" "Farbige Kreise" >}}{{< /imgblock >}}

**Experimentiere mit den verschiedenen Zahlen und Farben. Kannst du herausfinden, was sie genau steuern? Welche Gestaltung gefällt dir am besten?**

## Weiterführende Übungen

* Experimentiere mit Farben und Linienstärken
* Füge noch weitere Formen hinzu (Linien, Kreise, Rechtecke)
* Gestalte dein eigenes Mandala
