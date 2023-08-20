---
title: "Zahlenraten 2 - Scratch3"
description: "In diesem Spiel musst du eine Zahl erraten, die sich der Computer ausgedacht hat. Schaffst du es in weniger als 9 Versuchen?"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/preview.png"
imgposition: "center top"
version: 3
aliasis:
  - /trainingsanleitungen/scratch/scratch-zahlenraten-2.html
level: 1
weight: 3
sprites: 1
scripts: 1
data: 2
---

## Variable anlegen
{{< imgblock "img/img1.png" "Variable anlegen" >}}
Wenn sich der Computer etwas merken soll, dann braucht er dafür Variablen. Eine Variable ist eine „Veränderliche Größe“. Das passt prima, schließlich soll die zu erratende Zahl in jedem Spieldurchlauf eine andere sein.

Lege eine neue Variable an. Du findest die Option im orangenen Bereich Variablen.  

Gib deiner Variablen den simplen Namen „zahl“.  

Für dieses Projekt ist egal, ob die Variable für alle Figuren oder
nur für diese Figur angelegt wird. Diese Unterscheidung dient der Übersicht in größeren Projekten.  

Bestätige mit OK.
{{< /imgblock >}}


## Eine Zufallszahl ausdenken
{{< imgblock "img/img3.png" "Eine Zuffallszahl ausdenken"  >}}
Sobald du eine eigene Variable angelegt hast, kannst du sie im Block „setze meine Variable auf“ anstatt der vordefinierten meine Variable auswählen. Hier bieten sich auch Optionen zum Umbenennen und Löschen von Variablen. Das geht übrigens auch, wenn man mit der rechten Maustaste auf eine Variable klickt.

Setze zahl auf eine Zufallszahl von 1 bis 100. Wenn du auf den Codeblock klickst, sollte die im Spielfeld angezeigte Variable jedes Mal einen neuen Wert annehmen.
{{< /imgblock >}}

## Die Zahl erraten
{{< imgblock "img/img4.png" "Zahl erraten" >}}
Damit der Spieler eine Zahl raten kann, muss eine Frage gestellt werden. Die Antwort auf diese Frage wird als Antwort gespeichert.

Nutze eine Schleife, den Block wiederhole bis, um darin immer wieder die gleiche Frage zu stellen. Zwei ‚falls – dann-sonst‘-Blöcke prüfen, ob die Antwort richtig ist oder zu groß. Ist beides nicht der Fall, können wir davon ausgehen, dass die Antwort zu klein war.

Wunderst du dich über das leere Feld im Block wiederhole bis? Es sorgt dafür, dass dieser Block genau wie wiederhole fortlaufend funktioniert und wird nur verwendet, weil wir später noch Bedingungen ergänzen möchten. Beispielsweise, dass das Spiel vorbei ist, sobald man die Zahl erraten hat.
{{< /imgblock >}}

{{< imgblock "img/img6.png" "Variable unsichtbar machen" 2>}}
Das Spiel ist bereits jetzt einigermaßen funktionstüchtig. Für einen Test ist auch prima, dass die Zufallszahl angezeigt wird, aber Spaß macht es so nicht. Um die Anzeige der Variable zu verbergen einfach das Häkchen daneben rausnehmen.
{{< /imgblock >}}

## Spielende: Gewonnen 
Bevor wir uns an Listen wagen, möchten wir den Code gerne noch so ändern, dass Scratchy nicht länger fragt, nachdem die richtige Zahl genannt wurde. Lege dazu eine neue Variable an und nenne sie erraten. Setze erraten ganz oben im Skript auf den Wert nein. Ganz recht: Variablen können nicht nur Zahlen, sondern auch Begriffe speichern.

In der Schleife wiederhole bis kann nun abgefragt werden, ob erraten den Wert „ja“ hat. Setze erraten außerdem auf ja in der ersten Bedingung, wenn die Antwort gleich der Zahl ist, und verschiebe die dort befindliche Aussage „Richtig!“ ans Ende. Oder besser noch: Ändere „Richtig!“ auf einen sage-Block ohne Zeitdauer.

Versuche das ohne direkte Vorlage umzusetzen. Aber keine Sorge: Mit den Änderungen auf der nächsten Seite bekommst du wieder eine komplette Übersicht.

## Antworten in Listen speichern
{{< imgblock "img/img9.png" "Antworten in Listen speichern" >}}
Listen in Scratch sind Variablen nicht unähnlich, aber anstatt eines einzelnen Wertes kann man mit Listen gleich eine ganze
Reihe von beliebig vielen Werten speichern.

Die Schaltfläche Neue Liste findet sich unterhalb der orangen Blöcke zu Variablen. Sobald du eine neue Liste angelegt hast, erscheinen auch eine Reihe neuer, dunkeloranger Blöcke, welche mit Listen interagieren. Wir nennen die Liste antworten.
Zu Beginn deines Skripts lösche alles aus deiner Liste. Innerhalb der verschachtelten Bedingungen soll
der Liste ein neuer Wert hinzugefügt werden, nämlich die Verbindung aus der vom Spieler gegebenen Antwort und der Info, ob die gesuchte Zahl größer oder kleiner ist.

Links siehst du, wie dein Skript nun aussehen sollte. Wenn du dein Spiel nun testest, sollten alle Rateversuche in der Liste aufscheinen. Durch die Länge der Liste weißt du zum Schluss auch, wie viele Versuche du benötigt hast.
{{< /imgblock >}}

## Versuche beschränken und Eingabe bereinigen
Noch kann man dieses Spiel nicht verlieren, denn irgendwann kommt man immer auf die richtige Zahl. Lege eine neue Variable an und nenne sie VERSUCHE. Der Name dieser Variable wird groß geschrieben, weil sich ihr Wert während des Spiels nicht verändern soll – man nennt dies auch eine Konstante. Man macht das bei komplexen Programmen zur besseren Lesbarkeit – aber dem Computer wäre natürlich egal, wie Variablen genannt werden.

Setze VERSUCHE gegen Beginn des Skripts auf die Anzahl an Versuche, die du dem Spieler zugestehen möchtest. Sechs ist ein guter Wert, das ist meist schaffbar, aber man gewinnt nicht immerzu.

Die Bedingung in der Schleife wiederhole bis wird nun durch eine oder-Verbindung ergänzt. Auf einer Seite wird weiterhin geprüft, ob bereits richtig geraten wurde, auf der anderen Seite wird VERSUCHE mit der Länge von antworten verglichen.

Nach der Schleife musst du nun nochmal prüfen, warum sie abgebrochen wurde – also ob die Zahl erraten wurde oder nicht. Mit verbinde kannst du auch Sätze schreiben, welche Variablen enthalten, um etwa nochmals die richtige Zahl wiederzugeben.

Lege eine weitere Variable (bzw. Konstante) MAXIMUM an, die ebenfalls zu Beginn des Skripts auf einen Wert gesetzt wird, und wähle die Zufallszahl zwischen 1 und MAXIMUM. Dadurch kannst du ganz leicht ändern, wie groß die zu ratende Zahl sein darf.

Ersetze außerdem die Frage nach der Zahl durch eine wiederhole bis Schleife, deren Bedingung ist, dass eine neue Variable antwort größer 0 und kleiner dem MAXIMUM + 1 ist. Innerhalb dieser Schleife kannst du nun nach der Zahl fragen, und den Betrag der Antwort in antwort speichern. Der Betrag ist 0, wenn die Antwort keine Zahl ist. Somit werden alle Eingaben, die keine Zahl im gesuchten Bereich sind, ignoriert. Natürlich müssen auch im Rest des Skripts alle blauen Antwort auf die orange Variable antwort geändert werden.

## Das gesamte Skript
Hier nochmal das gesamte Skript mit allem, was zuvor besprochen wurde. Sieht kompliziert aus, aber wenn du dich Schritt für Schritt an die Anleitung hältst weißt du, wie es funktioniert. Allerdings gibt es noch einen kleinen Bug – findest du ihn?
{{< imgblock "img/img14.png" "Antworten in Listen speichern" 12>}}
{{< /imgblock >}}
