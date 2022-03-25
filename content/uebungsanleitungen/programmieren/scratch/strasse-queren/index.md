---
title: "Strasse Überqueren"
description: "Versuche die Strasse und den Fluss heil zu überqueren"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center bottom"
level: 1
version: 1
sprites: 4
scripts: 30
data: 24
aliases:
- /trainingsanleitungen/scratch/strasse-queren.html
categories:
- Scratch
---

In diesem Spiel werden wir uns ansehen wie wir eine größere Menge an Figuren in der Welt mit wenig Aufwand erzeugen. Ganz nebenbei helfen wir Scratchy (hoffentlich) über die Strasse.

### Figuren
Bitte lade dir folgende Figuren Herunter:

* [Unsere Spielfigur](assets/Spieler.sprite3)
* [Die Autos](assets/Autos.sprite)
* [Das Treibgut für den Fluss](assets/Treibgut.sprite3)

Importiere alle diese Figuren in Scratch (Figur -> Figur Hochladen).

### Der Hintergrund
{{< imgblock "img/sprites_overview.png" "" 4>}}
Wie dir vielleicht schon aufgefallen ist, haben wir für dieses Spiel gar keinen Hintergrund importiert. Das brauchen wir in dem Fall auch gar nicht, da wir uns den Hintergrund von einem "Malstift Roboter" erzeugen lassen.

Als erstes legst du bitte eine leere Figur mit `Figur`->`Malen` an, und lass sie einfach leer. Diese Figur wird unser Roboter sein. Als nächstes importierst du die Erweiterung "Malstift".
{{< /imgblock >}}

{{< imgblock "img/pen_block_draw.png" "" 3>}}
Für den Malstift legen wir uns einen Hilfsblock an, der jeweils einen horizontalen Balken mit einer bestimmten Dicke erzeugt. Danach können wir dazu übergehen, die einzelnen Balken für die Landschaft erzeugen.
{{< /imgblock >}}

{{< imgblock "img/pen_draw_blocks.png" "" 3>}}
Als erstes machen wir den Hintergrund indem wir einen sehr dicken Balken (z.B. grau) in der Mitte über das Bild malen.

Danach malen wir 

* einen schwarzen Balken (Strasse)
* einen blauen Balken (Fluss)
* und einen grünen Streifen (Grünstreifen zwischen Strasse und Fluss)

{{< /imgblock >}}
