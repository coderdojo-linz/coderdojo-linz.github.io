---
title: "Memory"
description: "In diesem Spiel musst du zusammenpassende Paare finden. Du darfst immer nur zwei Karten gleichzeitig umdrehen. Wie viele Versuche brauchst du, bis du alle Paare gefunden hast?"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 2
version: 3
sprites: 2
scripts: 10
data: 14
aliases:
  - /trainingsanleitungen/scratch/scratch-memory.html
---

## Figuren anlegen

Das Spiel besteht aus nur zwei Figuren: der Karte mit einer Vorder- und einer Rückseite und der Bilder, die auf den Karten angezeigt werden sollen. 
Alle Bilder werden als Kostüme in einer Figur zusammengefasst.

1. {{< imgblock "img/figur-loeschen.png" "Figur löschen" >}}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du auf das blaue X klickst oder mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.
{{< /imgblock >}}

2. {{< imgblock "img/figur-karte.png" "Karte hinzufügen" >}}
Die Karte besteht aus zwei Kostümen: der Vorder- und der Rückseite. Die Rückseite ist grau und zeigt das Scratch Logo. Die Vorderseite ist weiß. Auf dieser werden später die Bilder angezeigt. 
Achte darauf, dass die Karte eine Breite von ca 60 und eine Höhe von ca 80 hat.<br/><br/>
Vergiss nicht beide Kostüme mit dem Fadenkreuz zu zentrieren.
{{< /imgblock >}}

3. {{< imgblock "img/figur-bilder.png" "Karte hinzufügen" >}}
Die Figur Bilder besteht aus acht Kostümen, nämlich den acht verschiedenen Bilder, die auf den Karten angezeigt werden sollen. Wähle acht Bilder aus oder zeichne selber welche. 
Die Bilder müssen kleiner als die Karte sein, sonst würden sie nachher über den Rand der Karte hinausschauen.<br/><br/>
Vergiss nicht alle Kostüme mit dem Fadenkreuz zu zentrieren.
{{< /imgblock >}}

## Daten anlegen

In diesem Spiel werden eine ganze Menge an Daten benötigt. Sie werden später in den Skripten verwendet. Lege als erstes folgende Daten an:

### Daten für alle Figuren

* Dauer
* Fehlversuche
* Klicks
* KostümErsteKarte
* Position
* SpalteAngeklickt
* ZeileAngeklickt


### Listen für alle Figuren

* Karten

### Daten für die Karte

* Sichtbar
* Spalte
* Zeile

### Daten für die Bilder

* Sichtbar
* Spalte
* Zeile

## Skripte für die Karte
1. {{< imgblock "img/karten-anordnen.png" "Karten anordnen" 8 >}}
Als erstes müssen die Karten auf der Bühne angeordnet werden. Wir wollen vier Spalten und vier Zeilen mit Karten - das sind insgesamt 16 Karten.<br/><br/>
Erzeuge dazu 16 Klone von der Karte und platziere sie an der richtigen Position.
{{< /imgblock >}}

1. {{< imgblock "img/karten-umdrehen.png" "Karte umdrehen" 8 >}}
Wenn eine Karte angeklickt wird, muss sie angezeigt werden. Es dürfe immer nur zwei Karten gleichzeitig angezeigt werden.
{{< /imgblock >}}

1. {{< imgblock "img/karten-zurueckdrehen-oder-loeschen.png" "Karten zurückdrehen oder löschen" 8 >}}
Wenn die Meldung "PaarGefunden" kommt, kann die Karte gelöscht werden.<br/><br/>
Wenn die Meldung "KeinPaarGefunden" kommt, muss die Karte wieder zurückgedreht werden.
{{< /imgblock >}}

## Skripte für die Bilder

1. {{< imgblock "img/bilder-anordnen.png" "Bilder anordnen" 8 >}}
Nun muss bei jeder Karte auch ein Bild platziert werden. Die Bilder dürfen aber nicht einfacher nacheinander positioniert werden, sondern sie müssen per Zufallszahl verteilt werden.

Es werden 16 Klone erstellt - zwei für jedes Kostüm. Die Klone werden zufällig an den 16 Position angeordnet. Die Liste "Karten" hilft uns dabei zu erkennen, 
an welcher Position bereits ein Bild liegt.
{{< /imgblock >}}

1. {{< imgblock "img/bild-anzeigen.png" "Bild anzeigen" 8 >}}
Wird eine Karte angeklickt, schickt sie die Nachricht "KarteAngeklickt". Es muss dann überprüft werden, welcher Klon des Bilder davon betroffen ist.<br/><br/>
Handelt es sich um die erste angeklickte Karte, wird ihre Kostümnummer gespeichert.

Ist dies die zweite angeklickte Karte, dann muss geprüft werden, ob die Kostümnummer gleich ist, wie bei der ersten Karte. Wenn ja, dann wurde ein Paar gefunden und die Karten können gelöscht werden. 

Wenn nein, dann müssen die Karten wieder umgedreht werden.
{{< /imgblock >}}

1. {{< imgblock "img/bild-verstecken-oder-loeschen.png" "Bild verstecken oder löschen" 8 >}}
Wenn die Meldung "KeinPaarGefunden" kommt, muss das Bild wieder versteckt werden.

Wenn die Meldung "PaarGefunden" kommt, kann das Bild gelöscht werden.
{{< /imgblock >}}

## Weitere Ideen
* Zähle mit wie viele Paare gefunden wurden und zeige dem Benutzer an, wenn er alle entdeckt hat.

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/75528668/](https://scratch.mit.edu/projects/75528668/) ausprobieren.

## Gesamte Skripte je Figur

### Karte

{{< imgblock "img/skripte-karte.png" "Skripte für die Karte" >}}{{< /imgblock >}}

### Bilder

{{< imgblock "img/skripte-bilder.png" "Skripte für die Bilder" >}}{{< /imgblock >}}
