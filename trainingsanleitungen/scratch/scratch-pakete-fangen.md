---
layout: sushi
title: Scratch Pakete Fangen
description: Fange die Weihnachts-Pakete bevor sie auf den Boden fallen
scratch-images:
- 
scratch-level: 1
scratch-sprites: 4
scratch-scripts: 4
scratch-data: 3
---

# Weihnachtspakete fangen

Leider ist das Förderband in der Werkstatt des Weihnachtsmanns kaputt. Kannst du die Pakete auffangen bevor sie auf den Boden fallen
und kaputt gehen.

![Packerl fangen Spiel](scratch-pakete-fangen/spiel.png){: .right}

## Vorbereitung

Lade dir zuerst die [Zip Datei](scratch-pakete-fangen/figuren.zip) herunter.

Du brauchst als erstes 4 Figuren:
* die Geschenkspakte (aus der Scratch bibliothek)
* das Förderband (du findest es in der ZIP-Datei)
* den Weihnachtssack (du findest ihn in der ZIP-Datei)
* die Mitteilung dass du zu viele Pakete fallen gelassen hast (bitte selbst erstellen)


In der Figur Paket müssen wir zuerst noch 2 kostüme hinzufügen, die anzeigen ob das Paket am Boden zerbrochen oder erfolgreich gefangen wurde.

![Kostüme](scratch-pakete-fangen/kostueme_1.png){:style="float:left;"}

ich habe ein rotes X und einen Stern dafür genommen. Du findest sie auch in der Scratch Bibiliothek und kanns sie einfach in der Kostümauswahl hinzufügen.

Danach können wir auch schon mit den Skripten beginnen.
## Steuerung der Pakete

![](scratch-pakete-fangen/script_1_1.png){:style="float:right;"}
Als erstes Stellen wir die Basiseinstellungen ein und werden alle 0,5 - 3 Sekunden ein neues Paket erzeugen. Dieses Paket wird dann dem Förderband entlang gleiten.

Wir benötigen auch noch ein paar Funktionsblöcke ("Weitere Blöcke") damit wir das Haupt-Skript ein wenig aufteilen können.
![](scratch-pakete-fangen/script_1_2.png){:style="float:right;"}


Dann geht es auch schon los. Wir werden das neue Paket zuerst bis zu einer von 4 zufälligen Positionen fahren lassen bis das Paket dann schlussendlich runterfällt
![](scratch-pakete-fangen/script_1_3.png){:style="float:right;"}
Das kann auf eine von 2 Arten ausgehen:
* der Rand wir berührt (Geschenk ist kaputt)
* Der Sack wird getroffen (Geschenk wurde eingesammelt)

Als nächsts möchten wir natürlich auch den Geschenk-Sack steuern

## Steuerung des Geschenk-Sacks

![](scratch-pakete-fangen/script_3_1.png){:style="float:right;"}
Auch der Geschenk-Sack möchte am Anfang an die richtige Position gestellt werden.

![](scratch-pakete-fangen/script_3_2.png){:style="float:right;"}
Auch hier definieren wir einen Funktionsblock ("Weitere Blöcke") damit wir die Postitionsformel nicht jedes mal eingeben müssen.

![](scratch-pakete-fangen/script_3_3.png){:style="float:right;"}
Weiters soll sich der Sack mit den Pfeiltasten nach rechts und links bewegen lassen. Dafür verwenden wir natürlich den Funktionsblock den wir vorhin definiert haben.

## Das Förderband

![](scratch-pakete-fangen/script_2_1.png){:style="float:right;"}
Die Förderband Figur befindet sich in der ZIP-Datei und kann einfach hinzugefügt werden. Die Skripte dafür sind sehr einfach und sollen nur die Position festlegen.

## Die Abschiedsmeldung

![](scratch-pakete-fangen/figur_3.png){:style="float:right;"}
Diese Figur solltest du selbst entwerfen. Lass dir etwas lustiges oder tröstendes einfallen.

![](scratch-pakete-fangen/script_4_1.png){:style="float:right;"}
Auch dafür sind die Skripte sehr einfach und legen nur die Position fest. Ausserdem soll die Abschiedsnachricht angezeigt werden, wenn das Spiel beendet wurde.

**Viel Spass beim Pakete sammeln!**
