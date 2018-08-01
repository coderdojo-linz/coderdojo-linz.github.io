---
layout: sushi
title: Scratch Minesweeper
description: Finde die Bomben
scratch-images:
- scratch-minesweeper/minesweeper-game.png
- scratch-minesweeper/klick-auf-zelle.png
scratch-level: 3
scratch-sprites: 2
scratch-scripts: 15
scratch-data: 6
---

# Scratch Minesweeper

In diesem Spiel musst du die Bomben im Spielfeld finden. Klicke auf eine Zelle um sie umzudrehen. Wenn du gleichzeitig die Leertaste drückst, markierst du eine Zelle als Bombe.

<p class="center"><img alt="Snake Game" src="scratch-minesweeper/minesweeper-game.png" /></p>

Das Spiel besteht aus 2 Figuren und 15 Skripten.

## Figuren anlegen

Das Spiel besteht aus nur zwei Figuren: einer Zelle für das Spielfeld und verschiedenen Nachrichten, die dem Spieler angezeigt werden können.

1. ![Figur löschen](scratch-minesweeper/figur-loeschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

2. ![Karte hinzufügen](scratch-minesweeper/figur-zelle.png){: .right}
Die Figur "Zelle" besteht aus mehreren Kostümen - einer nicht aufgedeckten Zelle, einer Bombe, einer leeren Zelle, einer Fahne und den Ziffern 1 bis 8. 
Damit du nicht alle Figuren selbst zeichnen musst, kannst du die Figur unter <a href="scratch-minesweeper/Zelle.sprite2">Zelle.sprite2</a> downloaden.

3. ![Karte hinzufügen](scratch-minesweeper/figur-nachrichten.png){: .right}
Die zweite Figur "Nachrichten" besteht aus drei Kostümen - den Nachrichten "Spielfeld laden", "Gewonnen" und "Verloren". Diese kannst du nach deinen Vorstellungen gestalten.

## Daten anlegen

In diesem Spiel werden eine ganze Menge an Daten benötigt. Sie werden später in den Skripten verwendet. Lege als erstes folgende Daten an:

### Daten für alle Figuren

* anzahlBomben
* anzahlGefundeneBomben
* anzahlUmliegendeBomben
* i
* spielBeendet

### Listen für alle Figuren

* zellen
* zellenStatus

### Daten für die Zelle

* cloneIndex

Wenn du alle Variablen und Listen richtig angelegt hast, solltest du bei den Figuren "Zelle" und "Nachrichten" folgende Daten sehen:

![Karten anordnen](scratch-minesweeper/daten.png)

## Skripte für die Nachrichten

1. ![Skripte für Nachrichten](scratch-minesweeper/nachrichten.png){: .right}
Für die Figur "Nachrichten" brauchen wir nur wenige Skripte. Sie reagiert auf Nachrichten, 
die von der Figur "Zelle" geschickt werden und zeigt dem Benutzer die entsprechende Nachricht an. 
Es gibt vier mögliche Nachrichten, auf die die Figur reagieren kann: spielfeldLaden, spielfeldGeladen, gewonnen und verloren.

## Skripte für die Zelle

1. ![Spiel initialisieren](scratch-minesweeper/initialisieren.png){: .right}
Als erstes müssen wir das Spielfeld initialisieren. Dazu schicken wir zuerst einmal eine Nachricht an die Figur "Nachrichten", 
dass die Meldung "Spielfeld laden" angezeigt werden soll. Dann werden die Daten auf einen passenden Wert gesetzt. 
<br/><br/>Als nächstes erstellen wir das Spielfeld, platzieren die Bomben und ermitteln für jedes Feld die Anzahl der umliegenden Bomben. 
Dazu verwenden wir eigene, neue Blöcke. Der Inhalt dazu kommt später. Am Schluss schicken wir nochmal eine Nachricht, dass das Spielfeld jetzt fertig geladen ist.

1. ![Spielfeld erstellen](scratch-minesweeper/spielfeld-erstellen.png){: .right}
Zum Erstellen des Spielfelds füllen wir die Listen "zellen" und "zellenStatus" mit Initialwerten.
<br/><br/>Die Liste "zellen" enthält für jede der 100 Positionen (10 x 10) auf dem Spielfeld eine der folgenden Informationen: - = nicht definiert, b = Bombe, 1 = 1 Bombe in den umliegenden Zellen, 
2 = 2 Bomben in den umliegenden Zellen, usw. Zum Initialisieren setzen wir den Wert "-" für nicht definiert.
<br/><br/>Die Liste "zellenStatus" enthält für jede Zelle nur die Information, ob sie aufgedeckt sein soll (0 = nicht aufgedeckt, 1 = aufgedeckt). Das brauchen wir erst später, um bei Klick auf eine Zelle ohne umliegende Bomben automatisch auch die umliegenden Zellen aufzudecken.
<br/><br/>Außerdem erzeugen wir für jedes Feld einen Klon der Zelle. Diese wird dann im nächsten Skript an der richtigen Position im Spielfeld platziert.

1. ![Zelle platzieren](scratch-minesweeper/zelle-platzieren.png){: .right}
Sobald ein Klon einer Zelle ensteht, wechseln wir das Kostüm auf "unknown" und zeigen den Kon an. 
Die Position werden auf folgende Werte gesetzt: 
<br/><br/>x = -150 + (((cloneIndex - 1) mod 10) * 32)
<br/><br/>y = 150 - ((abrunden von ((cloneIndex - 1) / 10)) * 32)
<br/><br/>Wenn du das Spiel jetzt laufen lässt, müsste schon das Spielfeld aufgebaut werden.

1. ![Bomben platzieren](scratch-minesweeper/bomben-platzieren.png){: .right}
Jetzt werden auf dem Spielfeld die Bomben platziert. Mittels Zufallszahl wird die Position 
der Bomben ermittelt und in der Liste "zellen" mit einem "b" gekennzeichnet.

1. ![Anzahl Bomben ermitteln](scratch-minesweeper/anzahl-bomben-ermitteln.png){: .right}
Jetzt kommt der wirklich schwierige Teil - wir müssen für jede Zelle am Spielfeld ermitteln, wieviele Bomben an sie angrenzen. 
Das sind im besten Fall 0 und im schlechtesten Fall 8, wenn alle umliegenden Zellen Bomben enthalten.
<br/><br/>Je nachdem, ob die Zelle im Eck, am Rand, oder in der Mitte liegt, hat sie mehr oder weniger umliegende Zellen. 
Das prüfen wir in diesem Script und für jede der Zellen sehen wir nach, ob sie eine Bombe enthält.
<br/><br/>Am Ende tragen wir die ermittelte Zahl der Bomben in die Liste "zellen" ein.

1. ![Klick auf Zelle](scratch-minesweeper/klick-auf-zelle.png){: .right}
Nun können wir mit dem Spiel starten, der Spieler kann die erste Zelle anklicken.
<br/><br/>Mit der linken Maustaste wird eine Zelle aufgedeckt. Wird gleichzeitig die Leertaste gedrückt, 
wird eine Fahne gesetzt oder wieder entfernt.
<br/><br/>Falls eine Fahne zum Markieren einer Bombe gesetzt wird, müssen wir nachher überprüfen, 
ob schon alle Bomben gefunden wurden.
<br/><br/>Wird eine Zelle zum Aufdecken angeklickt, müssen wir dann das Kostüm ändern.

1. ![Zelle aufdecken](scratch-minesweeper/zelle-aufdecken.png){: .right}
Die Liste "zellen" enthält für jede Zelle die Anzahl der umliegenden Bomben. Wir müssen nach dem Anklicken nur noch das richtige Kostüm für die Zelle anzeigen.
<br/><br/>Du kannst das Skript "UmliegendeZellenAufdecken" noch leer lassen. Das Spiel wird jetzt schon funktionieren. Du kannst jetzt gleich ausprobieren, ob du alle Bomben findest.

1. ![Umliegende Zellen aufdecken](scratch-minesweeper/umliegende-zellen-aufdecken.png){: .right}
Wenn du das Skript "UmliegendeZellenAufdecken" implementierst, wird das Spiel noch besser. Wenn du eine 
Zelle ohne angrenzende Bomben anklickst, werden automatisch alle umliegenden Zellen aufgedeckt, solange bis Zellen mit angrenzenden Bomben gefunden werden. 
So musst du nicht alle Zellen mit dem Wert 0 selbst anklicken und kannst viel schneller spielen.
<br/><br/>In diesem Script werden alle Zellen, die aufgedeckt werden sollen, in der Liste "zellenStatus" mit 1 markiert. Dann wird die Nachricht "zellenAktualiseren" gesendet.

1. ![Zellen aktualisieren](scratch-minesweeper/zellen-aktualisieren.png){: .right}
Wenn die Nachricht "zellenAktualiseren" dann von jedem einzelnen Klon empfangen wird, prüft dieser, ob seine Position 
in der Liste "zellenStatus" schon mit 1 markiert ist. Wenn ja, wird die Zelle aufgedeckt.

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/111781317/](https://scratch.mit.edu/projects/111781317/){:target="_blank"} ausprobieren.