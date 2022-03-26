---
title: "Strasse Überqueren"
description: "Versuche die Strasse und den Fluss heil zu überqueren"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center bottom"
level: 1
version: 1
sprites: 4
scripts: 16
data: 7
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

### Steuerung des Spielers

{{< imgblock "img/player_controlling.png" "" 3>}}
Um die kleine Katze über die Strasse zu bringen werden müssen wir sie irgendwie steuern können. Damit das ganze gut aussieht animieren wir die Kate bei jedem Schritt. Ausserdem erlauben wir nur einen Schritt pro Tastendruck, damit das ganze etwas interessanter wird.
{{< imgblock "img/player_block_init.png" "" 3>}}
Am Anfang rufen wir einen kleinen Block auf der unsere Katze an die Anfangsposition bringt, und ihr Aussehen sowie die Größe einstellt. 
{{< /imgblock >}}

{{< imgblock "img/player_block_animate.png" "" 3>}}
Danache bauen wir für die für jede der Pfeiltagen einen Programmteil der dafür sorgt, dass
- die Katze nicht über den Rand hinauslaufen kann,
- die Katze animiert und bewegt wird
- die Taste losgelassen werden muss, bevor die nächste Taste gedrückt werden kann

Das Animieren erledigen wir auch in einem Block, damit wir es nicht jedesmal aufs neue programmieren müssen.
{{< /imgblock >}}

So ... das war ein ordentliches Stück Arbeit, aber wir können die Katze nun über den Bildschirm hüpfen lassen.

Probier es einfach mal aus ... 
{{< /imgblock >}}

{{< imgblock "img/player_lifecycle.png" "" 4 >}}
Um drei Sachen müssen wir uns allerdings noch kümmern:

- Wir sollten es auch bemerken wenn wir die Hindernisse erfolgreich überquert haben,
- die Katze darf keine Autos berühren und 
- den Fluss kann Sie nur auf einem Treibgut-Stück überqueren.

{{< imgblock "img/player_block_die.png" "" 3>}}
Sollten wir eine der beiden letzen Punkte erfüllen, so sind wir "gestorben" und müssen nochmal von vorne anfangen.

Auch dafür haben wir einen Block.
{{< /imgblock >}}
{{< /imgblock >}}

{{< imgblock "img/player_event_drift.png" "" 3 >}}
{{< imgblock "img/player_variable_drift.png" "" 2 >}}
Lege dir eine Variable "für alle Figuren" namens "treiben" an.
{{< /imgblock >}}
Damit wir mitgekommen, dass wir auf einem Treibgut stehen, das sich bewegt, lassen wir uns eine Nachricht schicken. 
{{< /imgblock >}}


### Die Autos
