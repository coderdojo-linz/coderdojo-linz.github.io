---
title: "Moorhuhn Jagd"
description: "In diesem Spiel musst du Moorhühner treffen. Wie viele erwischst du?"
type: "uebungsanleitungen/programmieren/scratch"
version: 3
img: "endgame.png"
imgposition: "center bottom"
aliases:
- /trainingsanleitungen/scratch/moorhuhn.html
level: 2
weight: 4
sprites: 5
scripts: 9
data: 5
---

## Hinweis

Dieses Spiel sollte nicht dein erstes Scratch-Spiel sein. Hier wird davon ausgegangen, dass du schon einfachere Scratch-Spiele (Level 1) gebaut hast und daher schon weißt, wie man Hintergründe und Figuren erstellt, wie man den Figureneditor bedient usw.

Sollten diese Dinge für dich neu sein, dann baue erst ein paar Level 1-Spiele und stürze dich dann über die Moorhuhn-Jagd, die schon Level 2 ist.

## Hintergrund

1. {{< imgblock "img/01-background.png" "Hellblauer Hintergrund" 5 >}}
Erstelle einen hellblauen Hintergrund. Er symbolisiert den Himmel. Achte darauf, dass du einen einfärbigen Hintergrund verwendest.
{{< /imgblock >}}

## Figuren

1. Für dieses Spiel haben wir fünf Figuren vorbereitet:
  
    * Hühner [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/chickens.sprite3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/chickens.sprite3)
    * Fadenkreuz [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Crosshairs.sprite3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Crosshairs.sprite3)
    * Landschaft [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Hills.sprite3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Hills.sprite3)
    * _Game Over_-Schrift [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Game%20Over.sprite3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Game%20Over.sprite3)
    * Ballons [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Balloons.sprite3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/Balloons.sprite3)

2. {{< imgblock "img/02-upload-sprites.png" "Figuren laden" 5 >}}
Lade die oben angeführten Figuren auf deinen Computer herunter. Füge sie anschließend in Scratch ein.
{{< /imgblock >}}

3. {{< imgblock "img/03-sprites.png" "Figuren" 5 >}}
Jetzt sollten die Figuren in deinem Scratch-Spiel enthalten sein.
{{< /imgblock >}}

## Hühner

1. {{< imgblock "img/04-chicken-variables.png" "Figuren" 3 >}}
Als erstes programmieren wir die Hühner. Wir brauchen dafür einige Variablen. Du siehst sie in der Abbildung auf der Seite. **Achtung:** Alle Variablen gelten _für alle Figuren_, nur **hit** gilt _nur für diese Figur_.
{{< /imgblock >}}

2. {{< imgblock "img/05-chicken-scripts-1.png" "Figuren" 7 >}}
Dieser Codeblock sorgt dafür, dass die Hühner regelmäßig auftauchen. Sie fliegen von unten nach oben bis sie ganz hinter den Hügeln erschienen sind. Dann drehen sie um und fliegen wieder nach unten.

Wenn man fünf Hühner verpasst hat, soll das Spiel zu Ende sein.
{{< /imgblock >}}

3. {{< imgblock "img/06-chicken-scripts-2.png" "Figuren" 3 >}}
Wir wollen, dass die Hühner im Lauf der Zeit schneller werden. Daher ändern wir alle 5 Sekunden die Geschwindigkeit.
{{< /imgblock >}}

4. {{< imgblock "img/07-chicken-scripts-3.png" "Figuren" 7 >}}
Als letztes brauchen wir noch den Code, der im Fall eines Mausklicks prüft, ob man ein Huhn erwischt hat. Falls ja bekommt man Punkte und das Huhn verschwindet.
{{< /imgblock >}}

## Fadenkreuz

1. {{< imgblock "img/08-crosshairs-script.png" "Figuren" 3 >}}
Das Fadenkreuz ist ganz einfach. Es soll einfach die ganze Zeit dem Mauszeiger folgen.
{{< /imgblock >}}

## Ballons

1. {{< imgblock "img/09-balloons-scripts-1.png" "Figuren" 7 >}}
Jetzt wieder zu etwas komplizierterem, dem Script für die Ballons. Ähnlich wie die Hühner fliegen sie herum. Allerdings bewegen sie sich nicht von unten nach oben, sondern von links nach rechts. Sie sollen die Richtung zufällig wählen, also manchmal von links nach rechts und manchmal von rechts nach links fliegen.

Vergiss nicht, für die Ballons eine eigene Variable **hit** zu erstellen. Wie
bei den Hühnern muss auch diese Variable _nur für diese Figur_ gelten.
{{< /imgblock >}}

2. {{< imgblock "img/10-balloons-scripts-2.png" "Figuren" 7 >}}
Wie bei den Hühnern brauchen wir auch beim Ballon ein Script, mit dem wir erkennen, wenn der Benutzer die Ballons erwischt hat. Du kannst es neu erstellen oder - wenn du weißt wie das geht - von den Hühnern kopieren.
{{< /imgblock >}}

## Game Over

1. {{< imgblock "img/11-game-over-script.png" "Figuren" 4 >}}
Den Abschluss machen die Scripts für _Game Over_. Sie sind sehr einfach, denn sie müssen nur die Schrift anzeigen, wenn das Spiel zu Ende ist.
{{< /imgblock >}}

## Geschafft!

Spitze, dein Spiel ist fertig 🥳! Probiere es gleich aus und baue ruhig noch Erweiterungen dazu.

Du kannst eine fertige Version des Spiels unter [https://cddataexchange.blob.core.windows.net/images/crazy-chicken/crazy-chickens.sb3](https://cddataexchange.blob.core.windows.net/images/crazy-chicken/crazy-chickens.sb3) herunterladen.

Hast du noch nicht genug? Hier ein paar Erweiterungsideen:

* Füge weitere, sich bewegende Figuren dazu (z.B. Flugzeuge), die man entweder auch treffen muss oder die man auf keinen Fall abschießen darf.
* Sorge dafür, dass mehrere Hühner gleichzeitig auftauchen können (Achtung: Ist nicht einfach!)
