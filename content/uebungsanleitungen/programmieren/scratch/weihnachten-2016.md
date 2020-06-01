---

title: Weihnachtsspiel 2016
description: Es ist Weihnachten. Zeit, den Baum zu dekorieren.
images:
- christmas-game.png
- zerspringen.png
level: 1
scratch-sprites: 2
scratch-scripts: 7
scratch-data: 4
---

# Scratch Weihnachtsspiel 2016

In diesem Spiel musst du möglichst viele, bunte Kugeln an den Weihnachtsbaum hängen. Wie viele Punkte schaffst du?

!["Weihnachtsspiel"](christmas-game.png)

## Spielregeln

1. Die Kugeln fallen von oben nach unten und bleiben mit der schwarzen Befestigung an den grünen Zweigen des Baums hängen.

1. Die Geschwindigkeit der Kugeln steigert sich alle 10 Sekunden.

1. Für jede erfolgreich an den Baum gehängte Kugel gibt es einen Punkt.

1. Wenn eine Kugel eine andere berührt oder auf den Boden fällt, zerspringt die berührte Kugel. Ein Punkt wird abgezogen.

1. Das Spiel ist vorbei, wenn du 10 Kugeln kaputt gemacht hast. Wie viele Punkte schaffst du bis dahin? 

## Bühne und Figuren anlegen

1. Damit du nicht alles zeichnen muss, haben wir die Grafiken für das Spiel vorbereitet. Du kannst sie [herunterladen](weihnachten-2016-grafiken.zip){: target="_blank"}. Falls du nicht weißt wie das geht, hol dir Hilfe bei einer CoderDojo Mentorin oder einem Mentor.

1. ![Bühnenbild auswählen](buehnenbild-laden.png){: .right}
Als erstes legst du fest, wie dein Spielfeld aussehen soll. Wir brauchen zuerst den Weihnachtsbaum, auf den wir die Kugeln hängen. Wähle links unten unter *Bühnenbild aus einer Datei laden* die Grafik *christmas-tree.png*.

1. ![Figur löschen](scratchy-loeschen.png){: .right}
Als nächstes lösche die Figur Scratchy mit dem Namen *Sprite1* indem du mit der rechten Maustaste darauf klickst. 
Im angezeigten Menü kannst du Scratchy löschen.

1. ![Figuren hinzufügen](figuren-hinzufuegen.png){: .right}
Jetzt brauchen wir die Kugel, die wir auf den Baum hängen. Klicke dazu auf *Figur aus einer Datei laden* und füge die Grafik *glass-ball.png*.

1. ![Kostüme hinzufügen](kostueme-hinzufuegen.png){: .right}
Für die zerspringende Kugel brauchen wir weitere Kostüme. Klicke auf *Kostüm aus Datei laden* und füge die Dateien *glass-ball-break-1.png* bis *glass-ball-break-4.png* als zusätzliche Kostüme ein.

1. ![Klang hinzufügen](klang-hinzufuegen.png){: .right}
Wenn eine Kugel kaputt geht, möchten wir ein Klirren abspielen. Klicke im Tab *Klänge* auf *Klang aus einer Datei laden*. Füge den Klang *klirr.wav* hinzu.

1. ![Klang kürzen](klang-kuerzen.png){: .right}
Wie du siehst, ist bei dem Klang am Beginn eine Zeit Stille. Das siehst du an der flachen Linie. Markiere den stillen Bereich mit der Maus und lösche ihn, indem du auf *Bearbeiten/Löschen* klickst. 

1. ![Figuren hinzufügen](game-over-figur.png){: .right}
Als letztes brauchen wir noch eine Figur für die *Game Over* Anzeige am Ende des Spiels. Füge dafür die Figur *game-over.png* hinzu.

## *Game Over* Anzeige

1. ![Game Over Anzeige](game-over-blocks.png){: .right}
Die Programmierung der *Game Over* Anzeige ist am einfachsten. Diese Figur soll solange unsichtbar bleiben, bis das Spiel zu Ende ist.<br/><br/>
  • Wähle zuerst die *Game Over* Figur aus, damit sie blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du nun programmieren. Verwende die Blöcke wie in der Abbildung gezeigt.

## Kugel bewegen

1. ![Kugel initialisieren](kugel-start.png){: .right}
Jetzt starten wir mit der Programmierung der Kugel.<br/><br/> 
  • Wähle dazu die Figur der Kugel aus, damit sie blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du nun programmieren. Verwende die Blöcke wie in der Abbildung gezeigt.

1. ![Kugel zerspringen](zerspringen.png){: .right}
Die Kugel soll zerspringen wenn sie auf eine andere Kugel trifft *und* wenn sie auf den Boden fällt. Damit wir den Programmteil, der das Zerspringen steuert, nicht zwei Mal programmieren müssen, erstellen wir einen eigenen Block. Das machst du im Tab *Skripte* unter *Weitere Blöcke*. Verwende die Blöcke wie in der Abbildung gezeigt.

1. ![Variablen](variablen.png){: .right}
Für den nächsten Programmteil brauchen wir *Variablen*. Diese legt man unter *Daten* an. Achte darauf, dass für alle Variablen beim Anlegen *Für alle Figuren* angeklickt ist. Lege die Variablen wie in der Abbildung gezeigt an.<br/><br/> 
  • *Crashes* zählt, wie viele Kugeln schon kaputt gegangen sind.<br/>
  • *Game Over* soll auf Null stehen, solange das Spiel läuft. Wenn das Spiel verloren ist, setzen wir diese Variable auf Eins.<br/>
  • *Geschwindigkeit* steuert, wie schnell die Kugeln fallen.<br/>
  • In der Variablen *Punkte* zählen wir die Punkte.

1. ![Kugel steuern](kugel-steuern.png){: .right}
Jetzt programmieren wir den wichtigsten Teil des Spiels, die Steuerung der Kugel. Verwende die Blöcke wie in der Abbildung gezeigt.

1. Jetzt kannst du dein Spiel schon probieren. Die Punkte funktionieren noch nicht, die Kugeln sollten aber schon funktionieren.

## Punkte verwalten

1. ![Bühne initialisieren](buehne-start.png){: .right}
Im Skript des Bühnenbilds verwalten wir die Punkte.<br/><br/> 
  • Wähle das Bühnenbild mit dem Weihnachtsbaum aus, damit er blau umrandet ist.<br/>
  • Im Tab *Skripte* kannst du nun programmieren. Verwende die Blöcke wie in der Abbildung gezeigt.

1. ![Crashes verwalten](buehne-crash.png){: .right}
Als letztes fehlt jetzt noch der Programmteil, der zählt, wie oft eine Kugel kaputt gegangen ist. Außerdem stellt er fest, wenn das Programm zu Ende ist.

1. Probiere dein Projekt jetzt aus. Klappt alles? Wie viele Punkte erreichst du, bevor zu viele Kugeln kaputt gegangen sind?

## Ausprobieren

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/133877597/](https://scratch.mit.edu/projects/133877597/) ausprobieren.