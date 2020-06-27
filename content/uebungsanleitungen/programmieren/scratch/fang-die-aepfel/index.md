---
title: "Fang die Äpfel"
description: "In diesem Spiel fallen Äpfel vom Himmel, die du mit deiner Schüssel fangen solltest."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/titelbild.jpg"
imgposition: "center top"
level: 1
version: 3
aliases:
  - /trainingsanleitungen/scratch/scratch-fang-die-aepfel-v3.html
sprites: 3
scripts: 18
data: 2
---

In diesem Spiel fallen Äpfel vom Himmel, die du mit deiner Schüssel fangen solltest. Jeder gefangene Apfel bringt dir einen Punkt, jeder zu Boden gefallener Apfel kostet dir ein Leben. Versuch möglichst viele Äpfel mit den 10 Leben zu fangen.

## Schritt 1: Die drei Bühnenbilder anlegen

{{< imgblock "img/buehne_vor_spiel_scaled.jpg" "Bühnenbild vor dem Start anlegen" 8 >}}
Dieses Spiel verwendet drei verschiedene Hintergundbilder (Bühnenbilder). Eines vor Spielstart, eines während des Spiels und ein drittes sobald das Spiel zu Ende ist.

Zuerst leg ein neues Bühnenbild an, das vor dem Spielstart verwendet wird und etwa wie das folgende aussieht. Unter dem Text "Start" platzieren wir später den Startknopf.
{{< /imgblock >}}

{{< imgblock "img/buehne_waehrend_spiel_scaled.jpg" "Bühnenbild während des Spiels anlegen" 8 >}}
Als nächstes benötigst du ein Bühnenbild, das während des Spiels verwendet wird. Welches Bild/Foto du verwendest ist egal, wichtig ist nur der einfärbige Balkenam unteren Rand des Bühnenbilds. Diesen Balken benötigen wir um zu erkennen ob ein Apfel auf den Boden gefallen ist.
{{< /imgblock >}}

{{< imgblock "img/buehne_nach_spiel_scaled.jpg" "Bühnenbild nach dem Spiels anlegen" 8 >}}
Als drittes und letztes Hintergrundbild brauchst du noch ein Bühnenbild, das angezeigt wird sobald das Spiel zu Ende ist. Unter dem Text "Neustart" bauen wir später den Knopf zum Neustarten des Spiels ein.
{{< /imgblock >}}

## Schritt 2: Die beiden Variablen anlegen

{{< imgblock "img/variablen_scaled.jpg" "Variablen anlegen" 4 >}}
Damit sich dein Spiel den aktuellen Punktestand und die noch vorhanden Leben merken kann, benötigst du die beiden Variablen "Leben" und "Punkte". Beide Variablen müssen für alle Figuren verfügbar sein. Setze das Häckchen neben den beiden Variablen damit sie im Spiel angezeigt werden.
{{< /imgblock >}}

## Schritt 3: Die drei Spielfiguren erzeugen

{{< imgblock "img/figuren.jpg" "Figuren anlegen" >}}
Das Spiel benötigt drei Figuren: Eine Schüssel, einen Apfel und den Startknopf. Lege die drei Figuren an. Du musst dich nicht an die vorgeschlagenen Figuren halten - sei kreativ!
{{< /imgblock >}}

## Schritt 4: Den Startknopf programmieren

{{< imgblock "img/knopf_scaled.jpg" "Scripte des Startknopfs" 8 >}}
Damit sich der Knopf wie ein Startknopf verhält, benötigt er folgende Scripte.
{{< /imgblock >}}

## Schritt 5: Den Apfel programmieren

{{< imgblock "img/apfel_scaled.jpg" "Scripte des Apfels" 8 >}}
Bei den Scripten des Apfels findest du einige (rosa) Blöcke aus der Kathegorie "Meine Blöcke". Diese Blöcke verwendet man immer dann, wenn man die selbe Folge an Blöcken an mehreren Stellen benötigt. Das hat den Vorteil, dass man bei Änderungen nur an einer Stelle die Änderung machen muss. Da hält deine Scripte übersichtlich und wartbar.

Deine eigene Blöcke erstellst du, indem du die Kathegorie "Meins Blöcke" auswählst und dann auf den Knopf "Neuer Block" klickst. Jetzt musst Du deinem Block nur noch einen Namen geben und die Blöcke dranhängen die ausgeführt werden sollen, sobald dein Block aufgerufen wird.

Im folgenden Bild siehst du die Scripte des Apfels.
{{< /imgblock >}}

## Schritt 6: Die Schüssel programmieren

{{< imgblock "img/schuessel_scaled.jpg" "Scripte der Schüssel" 8 >}}
Damit du die Schüssel zum Fangen der Äpfel verwenden kannst, benötigt sie die folgenden Scripte.
{{< /imgblock >}}

Jetzt ist dein Spiel bereit gespielt zu werden!

## Zusatzaufgaben

Dieses Spiel bietet viel Raum für eigene Ideen. Du könnest zum Beispiel ...

- den Apfel immer schneller werden lassen
- der Apfel nicht mehr gerade sondern in einem Bogen herunterfallen lassen
- auch andere Früchte vom Himmel fallen lassen
- den Spielstand am Ende mit einer Animation anzeigen