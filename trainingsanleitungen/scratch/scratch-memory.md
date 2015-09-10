---
layout: sushi
title: Scratch Memory
description: Drehe zwei Karten um und finde zusammenpassende Paare.
---

# Scratch Memory

In diesem Spiel musst du zusammenpassende Paare finden. Du darfst immer nur zwei Karten gleichzeitig umdrehen. Wie viele Versuche brauchst du, bis du alle Paare gefunden hast?

<p class="center"><img alt="Snake Game" src="scratch-memory/memory-game.png" /></p>

Das Spiel besteht aus 2 Figuren und 10 Skripten.

## Figuren anlegen

Das Spiel besteht aus nur zwei Figuren: der Karte mit einer Vorder- und einer Rückseite und der Bilder, die auf den Karten angezeigt werden sollen. 
Alle Bilder werden als Kostüme in einer Figur zusammengefasst.

1. ![Figur löschen](scratch-memory/figur-loeschen.png){: .right}
Lösche als erstes die Figur Scratchy mit dem Namen *Sprite1* indem du mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

2. ![Karte hinzufügen](scratch-memory/figur-karte.png){: .right}
Die Karte besteht aus zwei Kostümen: der Vorder- und der Rückseite. Die Rückseite ist grau und zeigt das Scratch Logo. Die Vorderseite ist weiß. Auf dieser werden später die Bilder angezeigt. 
Achte darauf, dass die Karte eine Breite von 60 und eine Höhe von 80 hat.<br/><br/>
Vergiss nicht beide Kostüme mit dem Fadenkreuz zu zentrieren.

2. ![Karte hinzufügen](scratch-memory/figur-bilder.png){: .right}
Die Figur Bilder besteht aus acht Kostümen, nämlich den acht verschiedenen Bilder, die auf den Karten angezeigt werden sollen. Wähle acht Bilder aus oder zeichne selber welche. 
Die Bilder müssen kleiner als die Karte sein, sonst würden sie nachher über den Rand der Karte hinausschauen.<br/><br/>
Vergiss nicht alle Kostüme mit dem Fadenkreuz zu zentrieren.

## Daten anlegen

## Skripte für die Karte
4. ![Zahlen vergleichen](scratch-memory/07-falls.PNG){: .right}
Jetzt wirds etwas komplizierter: wir möchten den Spieler um seinen Tipp fragen, dafür wählen wir aus dem Punkt "Fühlen" die Frage aus. An dieser Stelle wartet der Computer dann auf eine Eingabe - und speichert diese in einer... - Variable! Sie heißt "Antwort".<br/>
Daher können wir nach der Frage überprüfen, ob die Antwort korrekt war: falls die Antwort gleich unserer Zufallszahl ist, dann hat der Spieler die Zahl erraten!

5. ![Schleife](scratch-memory/08-falls.PNG){: .right}
Im Moment hätten wir dann genau einen Versuch - wahrscheinlich ist das zu wenig. Wir brauchen eine Schleife, und müssen so oft fragen, bis der Spieler die richtige Antwort erraten hat (oder zu viele Versuche benötigt hat).<br/><br/>Dafür legen wir uns eine neue Variable an, wir nennen sie "erraten". Solange die Variable den Wert 0 hat, bitten wir den Spieler um einen weiteren Tipp. Sobald der Tipp richtig war, setzen wir die Variable auf 1 - und hören auf zu fragen.<br/><br/>Achte genau auf die Unterschiede zum vorherigen Skript!

6. ![Tipps geben](scratch-memory/09-kleiner.PNG){: .right}
Damit man schneller zum Ziel kommt, geben wir noch Tipps, ob die gesuchte Zahl kleiner oder größer als die Eingabe ist.

## Skripte für die Figuren

7. ![Liste hinzufügen](scratch-memory/10-liste.PNG){: .right}
Damit man sehen kann, welche Tipps bereits abgegeben wurden, fügen wir eine neue Liste zu unserem Programm hinzu. Listen findest du im Menüpunkt "Daten", sie funktionieren so ähnlich wie Variablen.<br/><br/>
Durch Anklicken der kleinen Box erscheint die Liste auch auf der Bühne.

8. ![Einträge einfügen](scratch-memory/11-liste.PNG){: .right}
Lösche am Beginn alle Einträge aus der Liste und füge neue Einträge ein, sobald ein Tipp abgegeben wurde. Achte wieder auf die Änderungen im Skript.

## Weitere Ideen
* ...

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/75528668/](https://scratch.mit.edu/projects/75528668/){:target="_blank"} ausprobieren.

## Gesamte Skripte je Figur

### Karte

![Skripte für die Karte](scratch-memory/skripte-karte.png)

### Bilder

![Skripte für die Bilder](scratch-memory/skripte-bilder.png)
