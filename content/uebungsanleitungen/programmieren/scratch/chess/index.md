---
title: "Chess"
description: "In diesem Beispiel wollen wir ein Schachspiel bauen, und dabei vor allem die beiden wichtigsten Funktionen - das Ausführen von verschiedenen Zugkombinationen, und die Bewertung des daraus resultierenden Brettbilds."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/chess-game.png"
imgposition: "center top"
level: 3
version: 3
sprites: 9
scripts: 35
data: 42
aliases:
- /trainingsanleitungen/scratch/scratch-chess-v3.html
- /trainingsanleitungen/scratch/scratch-chess.html
---

Du kannst das fertige Project unter <a href="https://scratch.mit.edu/projects/148769358/" target="_blank">https://scratch.mit.edu/projects/148769358/</a> ausprobieren.

Schachprogramme versuchen den jeweils besten Zug zu finden, und müssen dabei möglichst viele Züge im Voraus berechnen. Die Anzahl der zu untersuchenden Brettbilder wächst dadurch enorm an (exponentielles Wachstum), sodass sogar moderne Computer an ihre Rechengrenzen stoßen. Unser Schachprogramm muss daher schnell und schlau sein. Schlau heißt, dass nicht jede Zugkombination nachverfolgt wird, sondern schlechte Züge gleich wieder verworfen werden. Wenn das Programm einige Züge hintereinander berechnet hat, bewertet es das entstandene Brettbild.

## Vorbereitung

Melde dich bei Scratch mit deinem Benutzer an. Wenn du noch keinen Scratch-Benutzer hast, hilft dir ein Mentor gerne dabei. Voraussetzung dafür ist eine Mailadresse. Den Benutzer brauchst du, damit du die Projektvorlage remixen, also eine Arbeitskopie erstellen kannst. Öffne das Projekt [https://scratch.mit.edu/projects/150304452/](https://scratch.mit.edu/projects/150304452/), und klicke auf „Remixen“. Nun hast du eine Kopie des Projekts, mit der du weiterarbeiten kannst.

{{< imgblock "img/chess-blocks.png" "Bühnenbild auswählen" >}}
Diese beiden zu Beginn noch leeren Funktionsblöcke möchten wir implementieren. Du findest sie links oben im Skript der Figur „Board“:

Unser Programm wird mit den schwarzen Figuren spielen, der Benutzer hat Weiß.
{{< /imgblock >}}

## Brettbewertung – EvaluateBoard

{{< imgblock "img/chess-eval-code.png" "Brettbewertung" 8 >}}
Die Brettbewertung programmieren wir in der Funktion „EvaluateBoard“. Wichtig ist, dass wir dafür ide Option „Ohne Bildschirmaktualisierung laufen lassen“ auswählen (Rechtsklick auf Funktionskopf, dann „Bearbeiten“ - das gilt für alle Blöcke). Das Programm wäre sonst zu langsam.

Die Bewertung setzt sich aus dem Figurenmaterial und der Position der Figuren am Brett zusammen. Jede Figur hat einen Wert, am meisten der König (20000), da ein geschlagener König Schachmatt bedeutet. Dann die Dame (900), die Türme (500), und so weiter. Die Figuren des Gegners sind mit negativem Vorzeichen versehen, damit die Werte addiert werden können. Ein Spieler, der einen Bauern und einen Turm mehr hat als sein Gegner, hat eine Bewertung von 900 + 500 = 1400. Somit können wir den Zug suchen, der in der Zukunft die beste Bewertung verspricht.

Der Wert jeder Figur ist bereits in Variablen namens „BlackKing“, „WhiteKing“ usw. gespeichert. Unser aktuelles Schachbrett selbst steht in der Liste „Board“. Board hat 64 Einträge, einen für jedes Feld. In einer Schleife mit 64 Iterationen zählen wir dann die Werte aller Figuren zusammen.

Der zweite Aspekt ist die Position der Figuren. Eine Dame in der Mitte des Felds ist besser als am Rand oder gar in einer Ecke, weil sie dann mehr Angriffsoptionen hat. Das gilt auch für viele andere Figuren. Für den König ist das jedoch nicht so, zumindest nicht zu Beginn des Spiels. Bauern können im Zentrum aktiv sein, oder am Rand den König beschützen, oder später für einen Damentausch auf die andere Seite bewegt werden. Das alles müssen wir beachten.

Um die Position der Figuren automatisch bewerten zu können, gibt es vorgefertigte Listen namens „KingPieceSquare“, „QueenPieceSquare“, usw. Die Listen haben ebenfalls 64 Elemente. Weil unser Programm die schwarzen Figuren hat, müssen die Werte der weißen Figuren mit einem Minus versehen werden. Für die schwarzen Figuren hingegen müssen wir die Position am Feld spiegeln, weil sie ja auf der anderen Seite stehen. Das geht einfach indem man Position „65 - Idx“ verwendet.
{{< /imgblock >}}

## Zugauswahl - AlphaBetaMinMaxImpl

Nachdem wir nun ein Brett bewerten können, müssen wir nun noch die möglichen zukünftigen Brettstellungen berechnen. Dazu simulieren wir alle möglichen Züge, die nacheinander ausgeführt werden können, beginnend mit dem nächsten schwarzen Zug - dann Weiß, dann wieder Schwarz, usw.

Bei der Berechnung der Zwischenzüge des Gegners können wir davon ausgehen, dass der Gegner einen für uns schlechten Zug wählt. Das heißt während wir bei unseren Zügen den besten aussuchen (Max), ist es beim Gegner der für uns schlechteste (Min).

{{< imgblock "img/chess-minimax.png" "Zugauswahl" 8 >}}
Die Geschwindigkeit von Scratch erlaubt es uns nur wenige Züge in die Zukunft zu sehen. Danach wird das resultierende Brett bewertet, und mit bisherigen Bewertungen verglichen. Daraus entsteht ein Entscheidungsbaum wie unten, wobei die Knoten die Bretter mit Bewertung darstellen, und die Pfeile die jeweiligen Züge dazwischen. Die beste garantiert erreichbare Bewertung in diesem Beispiel ist 5. Auch wenn ein Brett mit der Bewertung 10 möglich ist, kann der Gegner dies durch einen geschickten Gegenzug verhindern, was dann in einer schlechteren Bewertung (nämlich 2) resultiert. Wir wählen daher den Zug, der eine Bewertung von 5 sicherstellt, egal welchen Zug der Gegner wählt.
{{< /imgblock >}}

In diesem Entscheidungsbaum-Beispiel gibt es jeweils nur wenige Zugmöglichkeiten, bei Schach sind dies deutlich mehr. Bei vier aufeinanderfolgenden Zügen und 30 Zugmöglichkeiten ergeben sich 30 hoch 4 mögliche Bretter, also 810.000. Für jedes Brett ist dann eine Bewertung nötig, bei 64-fachem Schleifendurchlauf sind das 51.840.000 Feldprüfungen. Das ist in Java oder C++ Programmen noch möglich (wenngleich nicht gut, besser wäre es die Rechenleistung für größere Zugtiefen zu verwenden; dort wird nicht eine Schleife 64-mal durchlaufen, sondern das ganze Brett steht in je einer 64bit-Zahl pro Figur), in Scratch geht das dann aber gar nicht mehr.

Wir können auch hier etwas unternehmen, nämlich das Gleiche was der Mensch intuitiv beim Schachspielen macht: Aussichtslose Zugmöglichkeiten sofort ausblenden. Züge die schlechter sind als der bisher garantierte Bestwert braucht man gar nicht weiter zu betrachten. Und beim Gegner ist es auch so - wenn er eine bessere Zugmöglichkeit hat, muss man sich eine schlechtere nicht mehr weiter ansehen. Man nennt das auch Alpha/Beta-Suche - Alpha und Beta sind die garantierten oberen und unteren Bewertungs-Grenzen für die aktuelle Berechnung. Alle Varianten außerhalb dieser Grenzen kann man verwerfen.

{{< imgblock "img/chess-minimax-code.png" "Zugauswahl" 8 >}}
Wir programmieren das alles in einem Funktionsblock, der sich immer wieder selbst aufruft. Man nennt das eine rekursive Funktion. Wir führen einen Zug aus, und rufen die aktuelle Funktion nochmal auf, damit der darauffolgende Zug ausgeführt wird. Irgendwann müssen wir das natürlich beenden - und zwar dann, wenn wir eine Zugtiefe von MaxDepth erreicht haben (je nach Schwierigkeitsgrad sind das zwei, drei oder vier Züge). Dann wird das Brett bewertet. Unsere Zwischendaten (Min, Max, Alpha, Beta, Züge) werden alle in Listen gespeichert. Das ist in Scratch bei Rekursionen nötig, weil es keine lokalen Variablen gibt und Funktions-Parameter nicht verändert werden können. Figuren-Variablen reichen dafür nicht, da wir sonst die Variablenwerte in kaskadierten Aufrufen überschreiben würden. In diesen Listen gibt es für jede Zugtiefe einen Eintrag, also zum Beispiel für den gerade berechneten Zug. Eine Alternative wäre die Variablen von 1 bis N durchzunummerieren, und den ganzen Funktionsblock für jede Zugtiefe zu duplizieren. Aber das möchten wir eigentlich nicht.
Die einfachste MiniMax/Alpha-Beta Implementierung ergibt sich daraus wie folgt: 
{{< /imgblock >}}

Super, du bist fertig! Starte jetzt das Programm. Du bist am Zug, danach beginnt der Computer zu rechnen, und zwar genau mit den beiden Funktionsblöcken, die du gerade programmiert hast.

Dabei sind noch nicht alle Spezialfälle abgedeckt. Zum Beispiel beachtet unser Programm noch kein Schach in dem sich Schwarz befinden könnte, und auf das reagiert werden muss. Außerdem gilt es ein mögliches Unentschieden zu verhindern, wenn man sich im Vorteil glaubt. Ähnliches gilt für die Brettbewertung - die Mobilität, also wie frei sich Figuren resultierend aus der Zugwahl später bewegen können, sollten wir auch noch berücksichtigen.

Die vollständige Implementierung mit all diesen Details kannst du unter [https://scratch.mit.edu/projects/148769358/](https://scratch.mit.edu/projects/148769358/) einsehen.

Weiterführende Informationen zu unserem Schachprojekt gibt es im Scratch Diskussionsforum unter [https://scratch.mit.edu/discuss/post/2967632/](https://scratch.mit.edu/discuss/post/2967632/). Schachprogrammierung im Allgemeinen wird in dieser Präsentation näher behandelt: [https://www.slideshare.net/ArnoHuetter/chess-engine-programming](https://www.slideshare.net/ArnoHuetter/chess-engine-programming)

Viel Spaß beim Spielen – gewinnst du gegen den Computer? Wie könnte man ihn noch besser machen – vielleicht indem man bei einigen ausgewählten Zügen doch bis zu einer höheren Zugtiefe vorberechnet, auch wenn es dann etwas länger dauert? Das Original-Programm unter [https://scratch.mit.edu/projects/148769358/](https://scratch.mit.edu/projects/148769358/) schafft dank vieler  Optimierungen bis zu Zugtiefe 8 plus 7 Folge-Schlagmöglichkeiten bei Schwierigkeitsgrad "Difficult", und ist damit das spielstärkste Schachprogramm auf Scratch. Die besten Schachprogramme der Welt können einzelne Sub-Bäume sogar bis zu Zugtiefe 35 berechnen.
