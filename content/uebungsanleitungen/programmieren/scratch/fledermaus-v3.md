---
title: "Fledermaus-Spiel"
description: "In diesem Spiel musst du beweisen, was du alles über Fledermäuse weißt."
img: "fertiges-spiel.png"
imgposition: "center top"
level: 1
sprites: 2
scripts: 10
data: 0
---

# Scratch Fledermaus-Spiel <span class="badge badge-scratch3">Scratch 3.0</span>

(nach einer Idee von Verena Straßer)

![Endgame](fertiges-spiel.png)

Hier erstellst du ein Quiz zum Thema *Fledermaus*. Wenn du viele Fragen richtig beantworten kannst, erhältst du einen Pokal.

## Bühnenbild auswählen

Als erstes legst du fest, wie dein Hintergrund aussehen sollte. Wähle für dieses Quiz das Bühnenbild *Mountain* aus.

## Figuren anlegen

Das Spiel besteht aus zwei Figuren: der Fledermaus und dem Pokal.

1. Lösche die Figur Scratchy (Figur1)

1. Füge die Figur Bat hinzu und ändere den Namen auf *Fledermaus*
 
1. Lade von [https://de.clipartlogo.com/download/father-day-icon_235246](https://de.clipartlogo.com/download/father-day-icon_235246) das Bild für den Pokal herunter und speichere auf deinem Computer. Lade dann dieses Bild als neue Figur in Scratch hoch. Ändere den Namen auf *Pokal* und die Größe auf 200.

## Skripte für die Fledermaus

1. ![Fledermausspiel](fledermaus-01.png){: .right}
Zu Beginn des Spiels soll die Fledermaus verkehrt auf dem Ast hängen. Dazu setzen wir die Richtung auf -90 Grad und geben eine passende Position ein. Die Fledermaus soll sich zeigen, das Kostüm *bat-a* haben und die Größe 100.

1. ![Fledermausspiel](fledermaus-02.png){: .right}
Die Fledermaus zählt beim Quiz auch mit, wie viele Fragen richtig bzw. falsch beantwortet wurden. Lege zwei neue Variablen für *richtig* und *falsch* an. Setze beide Variablen zu Beginn auf 0.

1. ![Fledermausspiel](fledermaus-03.png){: .right}
Die Fledermaus beginnt nun die Fragen zu stellen. Die erst Frage könnte lauten: *Was macht die Fledermaus in der kalten Jahreszeit?*. Falls die Antwort richtig ist, nämlich Winterschlaf, dann wird die Variable *richtig* um 1 erhöht und die Fledermaus sagt, dass die Antwort richtig ist. Falls die Antwort falsch ist, wird die Variable *falsch* um 1 erhöht und die Fledermaus sagt *falsch*. Du kannst dazu auch passende Klänge abspielen. Wähle unter Klänge die beiden Klänge *Magic Spell* und *Oops* aus.

1. ![Fledermausspiel](fledermaus-04.png){: .right}
Da die Fledermaus mehrere Fragen stellt, ist es langweilig jedes Mal diesen Code in Scratch zu bauen. Wir definieren daher einen eigenen Block dafür. Gehe dazu links im Menü zu *Meine Blöcke* und clicke auf *Neuer Block*. Den Block nennen wir *Frage stellen*. Da wir aber nicht immer die gleiche Frage und Antwort haben wollen, geben wir zwei Eingabefelder für Text hinzu. Das erste Eingabefeld nennen wir *Frage* und das zweite *Antwort*.

1. ![Fledermausspiel](fledermaus-05.png){: .right}
Zu diesem Block geben wir die zuvor programmierte Fragestellung und setzen die Eingabefelder passend ein.

1. ![Fledermausspiel](fledermaus-06.png){: .right}
Jetzt kannst du beliebige Fragen zum Thema Fledermaus stellen, indem du diesen Block verwendest.

1. ![Fledermausspiel](fledermaus-07.png){: .right}
Wenn du alle Fragen gestallt hast, wird die Punkteanzahl ausgewertet. Wenn mehr als 4 (von 6 Fragen) richtig beantwortet wurden, dann wird der Klang *Cheer* gespielt.
Diesen Klang musst du wieder unter Klänge hinzufügen. Damit der Pokal jetzt erscheinen kann, senden wir eine Nachricht *gewonnen* an alle Figuren aus. Die Fledermaus gratuliert dem Sieger oder muntert den Spieler auf, wenn es nicht ganz geklappt hat.

1. ![Fledermausspiel](fledermaus-08.png){: .right}
Zum Schluss lassen wir die Fledermaus noch in die Höhle fliegen. Dazu dreht sich die Fledermaus zuerst um 180 Grad. Die Fledermaus hat 4 verschiedene Kostüme, wenn wir sie mit etwas Pause zwischen diesen Kostümen wechseln lassen und bewegen, dann sieht es auch, als ob sie fliegt. Wir lassen sie dabei auch immer ein Stück kleiner werden und verstecken sie, wenn sie bei der Höhle ist.

## Skripte für den Pokal

1. ![Fledermausspiel](pokal-01.png){: .right}
Zu Beginn ist der Pokal noch nicht sichtbar.

1. ![Fledermausspiel](pokal-02.png){: .right}
Wenn der Spieler das Spiel gewonnen hat, dann kann sich der Pokal zeigen. Wir müssen nur noch eine passende Stelle dafür angeben.

## Weitere Ideen

* Erweitere das Spiel um zusätzliche Fragen.

* Baue das gleiche Spiel zur Übung nochmal, aber diesmal mit einem anderen Quiz-Thema.

## Herunterladen

Du kannst das fertige Projekt unter [Fledermaus-Quiz.sb3](Fledermaus-Quiz.sb3) herunterladen.
