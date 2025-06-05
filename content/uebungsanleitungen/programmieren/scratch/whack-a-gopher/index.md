---
title: "Whack a Gopher"
description: "Ein Spiel basierend auf der Idee von 'Whack a mole'. In diesem Spiel musst du möglichst viele Gopher mit dem Besen verjagen. Wie viele Punkte schaffst du?"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 1
version: 3
sprites: 3
scripts: 7
data: 4
aliases:
- /trainingsanleitungen/scratch/scratch-whack-a-gopher.html
---

Die Katze brauchen wir in diesem Spiel nicht. Wir können sie löschen in dem wir die Katze wählen und auf das kleine blaue X drücken.

## Löcher erstellen

Wir beginnen mit der Figur, welche die Löcher im Boden darstellen sollte aus denen unsere Figuren erscheinen können. 
Wir erstellen die Figur mit dem Pinsel und malen einen schwarzes ovales Loch. Wichtig ist dabei, dass die Figur im Kostüm-Tab zentriert ist.
Du kannst der Figur und dem Kostüm einen sprechenderen Namen geben und ganz einfach die Größe ändern:

{{< imgblock "img/erdloch-figur.png" ""Erdloch-figur"" >}}{{< /imgblock >}}

{{< imgblock "img/erdloch-variablen-setzen.png" "Erdloch-variablen-setzen" 8 >}}
Wir möchten gerne 9 Löcher darstellen, hierfür verwenden wir die *Klonen* Funktionalität der Figur. 
Die Löcher werden wir in drei Zeilen mit je drei Spalten darstellen, hierfür brauchen wir zwei Variablen. 
Vorsicht! - die Variablen Zeile und Spalte gelten *nur für diese Figur*. 

Wir wollen drei Spalten und drei Zeilen haben - dafür brauchen wir zwei ineinander geschachtelte Wiederholungsblöcke. 
In der inneren wiederholung erhöhen wir die Spalte,
in der äußeren die Zeile. In der äußeren Wiederholungsschleife müssen wir außerdem die Spalte wieder auf 0 zurücksetzen.
{{< /imgblock >}}

{{< imgblock "img/erdloch-plazieren.png" "Erdloch-platzieren" 8 >}}
Jetzt müssen wir noch in der inneren Wiederholung einen Klon unserer Figur erstellen. Wenn die Figur als Klon entsteht wollen wir sie außerdem basierend auf den Werten 
von Spalte und Zeile platzieren. 
{{< /imgblock >}}

{{< imgblock "img/erdloch-platzierung-ergebnis.png" "Erdloch-platzierung" >}}
Wenn ihr nun zum Spiel starten auf die grüne Flagge klickt sollte das Spiel bei euch so ähnlich aussehen: 
Wenn du mit der Platzierung der Erdlöcher noch nicht zufrieden bist versuche die Zahlen beim Setzen der X und Y Position zu verändern. 
Die X-Position bestimmt die Platzierung links und rechts und die Y-Position die Platzierung unten und oben.
{{< /imgblock >}}

{{< imgblock "img/erdloch-figur-verstecken.png" "Erdloch-verstecken" >}}
Das initiale Erdloch stört allerdings ein bisschen, weswegen wir die Figur sich verstecken lassen und nur die Klone sich zeigen. Dann sollten wir wirklich nur 9 und nicht 10 Erdlöcher sehen.
{{< /imgblock >}}

## Gopher programmieren 

Jetzt möchten wir das jede Sekunde ein Gopher aus einem anderen Erdloch kuckt. Du kannst statt dem Gopher natürlich andere Kostüme verwenden. Wenn du die Gopher aus 
dem Beispiel verwenden möchtest kannst du sie [hier](img/gopher.sprite3) herunter laden. 
Wenn du die Gopher Figur geladen hast, sollte sie so aussehen: 

{{< imgblock "img/gopher-laden.png" "Gopher laden" >}}{{< /imgblock >}}

{{< imgblock "img/gopher-platzieren.png" "Gopher platzieren" >}}
Das Skript für den Gopher ist ganz einfach. Jede Sekunde muss sich der Gopher an eine neue Stelle (Zeile und Spalte) setzen. 
Hierfür brauchen wir wieder zwei Variablen *nur für diese Figur* Spalte und Zeile. Diese Variablen verwenden wir wie beim Erdloch um die Figur an die
richtige X und Y-Position zu setzen. 
{{< /imgblock >}}

{{< imgblock "img/gopher-kostuem-wechseln.png" "Kostüm wechseln" 8 >}}
Wenn du nun auf die grüne Flagge des Spiels klickst, sollte die Figur jede Sekunde aus einem anderen Erdloch erscheinen. 

Als nächstes lassen wir unsere Figur jede Sekunde das Kostüm wechseln und die Figur sich kurz verstecken bevor sie neu erscheint.
{{< /imgblock >}}

## Besen programmieren 

{{< imgblock "img/besen.png" "Besen" 4 >}}
Den Besen möchten wir mit dem Mauszeiger bewegen. Wir setzen die Richtung des Besens auf 135 Grad damit er leicht schräg 
steht und lassen ihn in einer Wiederholung immer an die Stelle des Mauszeigers gehen.
{{< /imgblock >}}

{{< imgblock "img/besen-schlagen.png" "Besen" >}}
Immer wenn mit der Maus geklickt wird, möchten wir mit dem Besen zuschlagen um die Gopher zu verjagen. Die Anzahl der Treffer merken wir uns in einer Variable namens "Treffer". 
{{< /imgblock >}}

Jetzt ist das Spiel fertig und du kannst Treffer sammeln, indem du die Gopher mit dem Besen erwischt. Möchtest du noch Erweiterungen einbauen? Hier einige Ideen: 
* Wenn der Gopher in einem bestimmten Kostüm erscheint kann es Minuspunkte bringen ihn zu klicken. 
* Den Gopher im Flash Kostüm kannst du schneller machen, sodass er schwerer zu erwischen ist. 
* Lass mehrere Gopher gleichzeitig erscheinen mit der "Klone erzeugen" Funktionalität

Du kannst das fertige Projekt unter [https://scratch.mit.edu/projects/308852736/](https://scratch.mit.edu/projects/308852736/) ausprobieren.