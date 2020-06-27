---
title: "Pakete Fangen"
description: "Leider ist das Förderband in der Werkstatt des Weihnachtsmanns kaputt. Kannst du die Pakete auffangen, bevor sie auf den Boden fallen
und kaputt gehen."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center top"
level: 1
version: 2
sprites: 4
scripts: 4
data: 3
aliases:
- /trainingsanleitungen/scratch/scratch-pakete-fangen.html
---

## Vorbereitung

Lade dir zuerst die [Zip Datei](figuren.zip) herunter.

Du brauchst als erstes 4 Figuren:

- die Geschenkspakete (aus der Scratch Bibliothek)
- das Förderband (du findest es in der ZIP-Datei)
- den Weihnachtssack (du findest ihn in der ZIP-Datei)
- die Mitteilung, dass du zu viele Pakete fallen gelassen hast (bitte selbst erstellen)

{{< imgblock "img/kostueme_1.png" "Kostüme" 2 >}}
In der Figur "Paket" müssen wir zuerst noch 2 Kostüme hinzufügen, die anzeigen, ob das Paket am Boden zerbrochen ist, oder erfolgreich gefangen wurde.

Ich habe ein rotes X und einen Stern dafür genommen. Du findest sie auch in der Scratch Bibliothek und kannst sie einfach in der Kostümauswahl hinzufügen.

Danach können wir auch schon mit den Skripten beginnen.
{{< /imgblock >}}

## Steuerung der Pakete

{{< imgblock "img/daten_1.png" "" 4 >}}
Wir benötigen ein paar Variablen, um

- zu zählen, wie viele Pakete wir schon gefangen haben
- uns zu merken, wie viele Pakete bereits zerbrochen sind
- eine Möglichkeit zu haben, die Geschwindigkeit und damit die Schwierigkeit einzustellen.
{{< /imgblock >}}

{{< imgblock "img/script_1_1.png" "" >}}
Als erstes stellen wir die Basiseinstellungen ein. Dann wird alle 0,5 - 3 Sekunden ein neues Paket erzeugt. Dieses Paket wird auf dem Förderband entlang gleiten.
{{< /imgblock >}}

{{< imgblock "img/script_1_2.png" "" 8 >}}
Wir benötigen auch noch ein paar Funktionsblöcke ("Weitere Blöcke"). Damit werden wir das Haupt-Skript ein wenig aufteilen.
{{< /imgblock >}}


Dann geht es auch schon los. Wir werden das neue Paket zuerst bis zu einer von 4 zufälligen Positionen fahren lassen. Dort soll das Paket dann runterfallen.
{{< imgblock "img/script_1_3.png" "" >}}
Das kann auf eine von 2 Arten ausgehen:

- Der Rand wird berührt (Geschenk ist kaputt).
- Der Sack wird getroffen (Geschenk wurde eingesammelt).

Als nächstes möchten wir natürlich auch den Geschenk-Sack steuern.
{{< /imgblock >}}


## Steuerung des Geschenk-Sacks

{{< imgblock "img/script_3_1.png" "" 4 >}}
Auch der Geschenk-Sack möchte am Anfang an die richtige Position gestellt werden.
{{< /imgblock >}}

{{< imgblock "img/script_3_2.png" "" 4 >}}
Hier definieren wir einen Funktionsblock ("Weitere Blöcke"), damit wir die Positionsformel nicht jedes mal eingeben müssen.
{{< /imgblock >}}

{{< imgblock "img/script_3_3.png" "" 8 >}}
Weiters soll sich der Sack mit den Pfeiltasten nach rechts und links bewegen lassen. Dafür verwenden wir natürlich den Funktionsblock, den wir vorhin definiert haben.
{{< /imgblock >}}

## Das Förderband

{{< imgblock "img/script_2_1.png" "" 4 >}}
Die Förderband-Figur befindet sich in der ZIP-Datei und kann einfach hinzugefügt werden. Die Skripte dafür sind sehr einfach und sollen nur die Position festlegen.
{{< /imgblock >}}

## Die Abschiedsmeldung

{{< imgblock "img/figur_3.png" "" 4 >}}
Diese Figur solltest du selbst entwerfen. Lass dir etwas Lustiges oder Tröstendes einfallen.
{{< /imgblock >}}

{{< imgblock "img/script_4_1.png" "" 4 >}}
Auch dafür sind die Skripte sehr einfach und legen nur die Position fest. Ausserdem soll die Abschiedsnachricht angezeigt werden, wenn das Spiel beendet wurde.
{{< /imgblock >}}

**Viel Spass beim Pakete sammeln!**
