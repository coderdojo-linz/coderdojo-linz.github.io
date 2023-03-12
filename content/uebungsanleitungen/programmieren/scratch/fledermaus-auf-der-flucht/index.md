---
title: "Fledermaus auf der Flucht"
description: "In diesem Spiel fliegst du als Fledermaus zwischen Röhren hindurch, jedoch ohne diese zu berühren! Wie lange schaffst du es?"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/fertiges-spiel.png"
imgposition: "center top"
level: 1
version: 3
aliases:
  - /trainingsanleitungen/scratch/scratch-fledermaus-auf-der-flucht-v3.html
  - /trainingsanleitungen/scratch/scratch-fledermaus-auf-der-flucht.html
sprites: 3
scripts: 3
data: 0
---

In diesem Spiel fliegst du als Fledermaus zwischen Röhren hindurch, jedoch ohne diese zu berühren! Wie lange schaffst du es?

{{< imgblock "img/fertiges-spiel.webp" "Fertiges Spiel" >}}
{{< /imgblock >}}

## Bühne & Figuren

Zunächst bereiten wir die Bühne und die Figuren -- eine Fledermaus, sowie Röhren durch welche unsere Fledermaus hindurchfliegen soll -- für unser Spiel benötigen vor. 

{{< imgblock "img/buehne.png" "" >}}
Als erstes legst du fest, wie dein Hintergrund aussehen sollte. Wähle für dieses Quiz das Bühnenbild *Mountain* aus.
{{< /imgblock >}}

{{< imgblock "img/figure-fledermaus.png" "" >}}
Als erstes löscht du bereits vorhandene *Scratchy* Figur und suchst als Fledermaus die Figure *Bat* aus der Bibliothek aus. Pass' die Größe der Fledermaus noch auf 50% an.
{{< /imgblock >}}


{{< imgblock "img/figure-roehre1.png" "" >}}
Die weiteren Figuren werden wir selber zeichen. Beginnen wir nächstes mit den Röhren. Erstelle eine neue leere Figure die wir selber *malen* werden. Zeichne zuerst ein Rechteck mit maximaler Höhe.
{{< /imgblock >}}

{{< imgblock "img/figure-roehre2.png" "" >}}
Danach verwende den Radierer um das Rechteck in der Mitte in ein oberes und unteres Stück aufzuteilen. Benne dann das Kostum und die Figur noch in *Röhre* um.
{{< /imgblock >}}

{{< imgblock "img/figure-roehre3.png" "" >}}
Platziere die Röhre au der Bühne dann noch rechts neben der Fledermaus.
{{< /imgblock >}}

{{< imgblock "img/figure-ziellinie.png" "" >}}
Erstelle eine weitere leere Figur, welche die Ziellinie darstellt. Als Ziellinie male eine einfache vertikale schwarze Linie mittig in der Figur. Benne die Figur schließlich noch in *Ziellinie* um. Positioniere die Figur dann noch am äußersten linken Rand.
{{< /imgblock >}}

## Skripte

Da wir nun alles vorbereitet haben, können wir den Figuren nun auch Leben einhauchen. Dazu programmieren wir die Skripte.

Sobald wir einen Klick mit der linken Maustaste machen, soll die Fledermaus mit ihrem Flug beginnen und sie steigt hinauf. Wenn du nicht mehr klickst, fängt die Fledermaus jedoch an zu sinken.

Achte beim Programmieren der Skripte immer drauf, dass du die richtige Figur ausgewählt hast.

### Fledermaus

Wähle zuerst die Fledermaus aus.

{{< imgblock "img/skript-fledermaus.png" "" >}}
...
{{< /imgblock >}}

### Röhre

Wähle nun die Röhre aus.

{{< imgblock "img/skript-roehre1.png" "" >}}
Mit diesem Skript _initialisierst_ du die Röhre. Das heißt du legst fest wo sich die Röhre befinden soll, wenn das Spiel neu gestartet wird.
{{< /imgblock >}}

{{< imgblock "img/skript-roehre2.png" "" >}}
Mit diesem Skript wird die *Röhre* von rechten zum linken Rand der Bühne bewegt. Wenn die Röhre den linken Rand berührt springt sie wieder zurück zum rechten Rand.
{{< /imgblock >}}

## Weitere Ideen

Kannst du das Spiel noch mit weiteren Ideen noch ausbauen? Versuche zum Beispiel:

- einen Punktezähler einzubauen, damit du siehst wie oft du der Röhre entwischen konntest?

- Schwierigkeitslevels einzubauen, damit die Röhre immer schneller wird, je öfter du ihr entwischt bist?

## Herunterladen

Du kannst das fertige Projekt unter [Fledermaus-auf-der-Flucht.sb3](Fledermaus-auf-der-Flucht.sb3) herunterladen.
