---
title: Memory
description: Drehe zwei Karten um und finde zusammenpassende Paare.
images:
- memory-game.png
- bild-anzeigen.png
level: 2
scratch-sprites: 2
scratch-scripts: 10
scratch-data: 11
---

# Scratch Memory <span class="badge badge-scratch3">Scratch 3.0</span> <a href="scratch-memory.html" class="change-scratch-version">Scratch 2.0</a>

In diesem Spiel musst du zusammenpassende Paare finden. Du darfst immer nur zwei Karten gleichzeitig umdrehen. Wie viele Versuche brauchst du, bis du alle Paare gefunden hast?

<p class="center"><img alt="Snake Game" src="memory-game.png" /></p>

Das Spiel besteht aus 2 Figuren und 10 Skripten.

## Figuren anlegen

Das Spiel besteht aus nur zwei Figuren: der Karte mit einer Vorder- und einer Rückseite und der Bilder, die auf den Karten angezeigt werden sollen. 
Alle Bilder werden als Kostüme in einer Figur zusammengefasst.

1. ![Figur löschen](figur-loeschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du auf das blaue X klickst oder mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

2. ![Karte hinzufügen](figur-karte.png){: .right}
Die Karte besteht aus zwei Kostümen: der Vorder- und der Rückseite. Die Rückseite ist grau und zeigt das Scratch Logo. Die Vorderseite ist weiß. Auf dieser werden später die Bilder angezeigt. 
Achte darauf, dass die Karte eine Breite von ca 60 und eine Höhe von ca 80 hat.<br/><br/>
Vergiss nicht beide Kostüme mit dem Fadenkreuz zu zentrieren.

3. ![Karte hinzufügen](figur-bilder.png){: .right}
Die Figur Bilder besteht aus acht Kostümen, nämlich den acht verschiedenen Bilder, die auf den Karten angezeigt werden sollen. Wähle acht Bilder aus oder zeichne selber welche. 
Die Bilder müssen kleiner als die Karte sein, sonst würden sie nachher über den Rand der Karte hinausschauen.<br/><br/>
Vergiss nicht alle Kostüme mit dem Fadenkreuz zu zentrieren.

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
1. ![Karten anordnen](karten-anordnen.png){: .right}
Als erstes müssen die Karten auf der Bühne angeordnet werden. Wir wollen vier Spalten und vier Zeilen mit Karten - das sind insgesamt 16 Karten.<br/><br/>
Erzeuge dazu 16 Klone von der Karte und platziere sie an der richtigen Position.

1. ![Karte umdrehen](karten-umdrehen.png){: .right}
Wenn eine Karte angeklickt wird, muss sie angezeigt werden. Es dürfe immer nur zwei Karten gleichzeitig angezeigt werden.

1. ![Karten zurückdrehen oder löschen](karten-zurueckdrehen-oder-loeschen.png){: .right}
Wenn die Meldung "PaarGefunden" kommt, kann die Karte gelöscht werden.<br/><br/>
Wenn die Meldung "KeinPaarGefunden" kommt, muss die Karte wieder zurückgedreht werden.

## Skripte für die Bilder

1. ![Bilder anordnen](bilder-anordnen.png){: .right}
Nun muss bei jeder Karte auch ein Bild platziert werden. Die Bilder dürfen aber nicht einfacher nacheinander positioniert werden, sondern sie müssen per Zufallszahl verteilt werden.<br /><br />
Es werden 16 Klone erstellt - zwei für jedes Kostüm. Die Klone werden zufällig an den 16 Position angeordnet. Die Liste "Karten" hilft uns dabei zu erkennen, 
an welcher Position bereits ein Bild liegt.

1. ![Bild anzeigen](bild-anzeigen.png){: .right}
Wird eine Karte angeklickt, schickt sie die Nachricht "KarteAngeklickt". Es muss dann überprüft werden, welcher Klon des Bilder davon betroffen ist.<br/><br/>
Handelt es sich um die erste angeklickte Karte, wird ihre Kostümnummer gespeichert.<br/><br/>
Ist dies die zweite angeklickte Karte, dann muss geprüft werden, ob die Kostümnummer gleich ist, wie bei der ersten Karte. Wenn ja, dann wurde ein Paar gefunden und die Karten können gelöscht werden. 
Wenn nein, dann müssen die Karten wieder umgedreht werden.

1. ![Bild verstecken oder löschen](bild-verstecken-oder-loeschen.png){: .right}
Wenn die Meldung "KeinPaarGefunden" kommt, muss das Bild wieder versteckt werden.<br/><br/>
Wenn die Meldung "PaarGefunden" kommt, kann das Bild gelöscht werden.

## Weitere Ideen
* Zähle mit wie viele Paare gefunden wurden und zeige dem Benutzer an, wenn er alle entdeckt hat.

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/75528668/](https://scratch.mit.edu/projects/75528668/) ausprobieren.

<h2 class="page-break-before">Gesamte Skripte je Figur</h2>

### Karte

![Skripte für die Karte](skripte-karte.png){: .fullWidth}

<h3 class="page-break-before">Bilder</h3>

![Skripte für die Bilder](skripte-bilder.png){: .fullWidth}
