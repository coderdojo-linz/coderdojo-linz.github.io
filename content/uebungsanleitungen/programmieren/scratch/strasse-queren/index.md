---
title: "Straße Überqueren"
description: "Versuche die Straße und den Fluss heil zu überqueren"
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center bottom"
level: 2
version: 1
sprites: 4
scripts: 16
data: 7
aliases:
- /trainingsanleitungen/scratch/strasse-queren.html
categories:
- Scratch
---

In diesem Spiel werden wir uns ansehen, wie wir eine größere Menge an Figuren in der Welt mit wenig Aufwand erzeugen. Ganz nebenbei helfen wir Scratchy (hoffentlich) über die Straße.

### Figuren
Bitte lade dir folgende Figuren herunter:

* [Unsere Spielfigur](assets/Spieler.sprite3)
* [Die Autos](assets/Autos.sprite)
* [Das Treibgut für den Fluss](assets/Treibgut.sprite3)

Importiere alle diese Figuren in Scratch (Figur -> Figur hochladen).

### Der Hintergrund
{{< imgblock "img/sprites_overview.png" "" 4>}}
Wie dir vielleicht schon aufgefallen ist, haben wir für dieses Spiel gar keinen Hintergrund importiert. Das brauchen wir in dem Fall auch gar nicht, da wir uns den Hintergrund von einem "Malstift Roboter" erzeugen lassen.

Als Erstes legst du bitte eine leere Figur mit `Figur`->`Malen` an, und lass sie einfach leer. Diese Figur wird unser Roboter sein. Dann importierst du die Erweiterung "Malstift".
{{< /imgblock >}}

{{< imgblock "img/pen_block_draw.png" "" 3>}}
Für den Malstift legen wir uns einen Hilfsblock an, der jeweils einen horizontalen Balken mit einer bestimmten Dicke erzeugt. Danach können wir dazu übergehen, die einzelnen Balken für die Landschaft erzeugen.
{{< /imgblock >}}

{{< imgblock "img/pen_draw_blocks.png" "" 3>}}
Als Erstes machen wir den Hintergrund, indem wir einen sehr dicken Balken (z.B. grau) in der Mitte über das Bild malen.

Danach malen wir 

* einen schwarzen Balken (Straße)
* einen blauen Balken (Fluss)
* und einen grünen Streifen (Grünstreifen zwischen Straße und Fluss)

{{< /imgblock >}}

### Steuerung des Spielers

{{< imgblock "img/player_controlling.png" "" 3>}}
Um die kleine Katze über die Straße zu bringen werden müssen wir sie irgendwie steuern können. Damit das ganze gut aussieht, animieren wir die Kate bei jedem Schritt. Außerdem erlauben wir nur einen Schritt pro Tastendruck, damit das ganze etwas interessanter wird.
{{< imgblock "img/player_block_init.png" "" 3>}}
Am Anfang rufen wir einen kleinen Block auf, der unsere Katze an die Anfangsposition bringt, und ihr Aussehen sowie die Größe einstellt. 
{{< /imgblock >}}

{{< imgblock "img/player_block_animate.png" "" 3>}}
Danach bauen wir für die für jede der Pfeiltasten einen Programmteil, der dafür sorgt, dass
- die Katze nicht über den Rand hinauslaufen kann,
- die Katze animiert und bewegt wird
- die Taste losgelassen werden muss, bevor die nächste Taste gedrückt werden kann

Das Animieren erledigen wir auch in einem Block, damit wir es nicht jedes Mal aufs neue programmieren müssen.
{{< /imgblock >}}

So ... das war ein ordentliches Stück Arbeit, aber wir können die Katze nun über den Bildschirm hüpfen lassen.

Probier es einfach mal aus ... 
{{< /imgblock >}}

{{< imgblock "img/player_lifecycle.png" "" 4 >}}
Um drei Sachen müssen wir uns allerdings noch kümmern:

- Wir sollten es auch bemerken, wenn wir die Hindernisse erfolgreich überquert haben,
- die Katze darf keine Autos berühren und 
- den Fluss kann sie nur auf einem Treibgut-Stück überqueren.

{{< imgblock "img/player_block_die.png" "" 3>}}
Sollten wir eine der beiden letzten Punkte erfüllen, so sind wir "gestorben" und müssen nochmal von vorne anfangen.

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

{{< imgblock "img/car_start.png" "" 3 >}}
Damit wir mit nur einer Figur für die Autos auskommen, verwenden wir einen kleinen Trick. Am Anfang des Spiels werden wir Klone erzeugen, die als "Schablone" für die einzelnen Autos auf den Fahrspuren dienen. Während des Spiels brauchen wir dann nur mehr die "Schablonen" klonen.

Damit wir die Schablonen auch als solche erkennen, merken wir uns in einer Variablen, ob es sich gerade um eine Schablone handelt, oder ein fahrendes Auto. Außerdem brauchen wir noch eine Variable, in dem wir uns die Fahrspur merken.

{{< imgblock "img/car_variables.png" "" 2 >}}
Bitte lege also foldende Variablen **nur für diese Figur** an:

- schablone
- spur
{{< /imgblock >}}
{{< /imgblock >}}

{{< imgblock "img/car_clone_layout.png" "" 3 >}}
Kümmern wir uns nun um die Behandlung der Schablonen. Als Erstes müssen wir überprüfen, ob es sich bei dem aktuellen Klon um eine Schablone handelt. Wenn nicht, wird hier gar nichts gemacht.

Auch die Schablonen bleiben unsichtbar, werden aber bereits auf die richtige Fahrspur gestellt. 

{{< imgblock "img/car_track_formula.png" "" 2 >}}
Die Position der Fahrspur berechnen wir einfach mit der Formel: (`spur` * 35) - 135. 
{{< /imgblock >}}

{{< imgblock "img/car_costume_formula.png" "" 2 >}}
Zusätzlich berechnen wir auch die Kostüm-Nummer aus der spur: (`spur` mod 2) + 1.
{{< /imgblock >}}
**Anmerkung:** *mod* ist der Divisionsrest. Das +1 am Schluss benötigen wir, da die Kostüme mit Nummer "1" anfangen. 

Danach sorgen wir dafür, dass jede 2. Fahrspur von der rechten Bildschirmseite beginnt. Auch dafür können wir "mod 2". Damit erhalten wir "1" für ungerade Fahrspuren und "0" für gerade.

Ganz am Schluss werden wir in einer Schleife noch Klone der Schablone in zufälligen Abständen erzeugen. Das "Warte" vor der Schleife ist nur da, damit Scratch etwas Zeit hat zuerst alle Schablonen zu erzeugen, bevor das Spiel wirklich startet.
{{< /imgblock >}}

{{< imgblock "img/car_clone_regular.png" "" 3 >}}
Das Erzeugen der Autos ist dann recht einfach. Nicht vergessen, dass wir natürlich nur "nicht-Schablonen" als Autos ansehen dürfen.

{{< imgblock "img/car_block_drive.png" "" 3 >}}
Wir machen das Auto sichtbar und fahren so lange, bis wir an der anderen Bildschirmseite angekommen sind. Auch da hilft uns wieder die Überprüfung, ob die Fahrspur gerade ist, oder nicht.

Das Bewegen des Autos ist hier in einem Code-Block ausgeführt, damit die einzelnen Programmteile nicht zu gross werden.
{{< /imgblock >}}
{{< /imgblock >}}

Wenn du das Spiel nun ausprobierst, solltest du bereits den Verkehr auf der Straße sehen. Aber nimm dich in Acht - Die Autos könnten unsere kleine Katze bereits überfahren .....

### Das Treibgut

Die Blöcke des Treibguts sind nahezu die gleichen wie die für die Autos. Du kannst dir hier das Leben einfach machen, und die Blöcke aus "Autos" kopieren. Du musst nur aufpassen, dass du die Position richtig einstellst und die Programmblöcke umbenennst.

{{< imgblock "img/drifters_start.png" "" 3 >}}
Wir erzeugen die Schablonen - achte darauf, dass du die Variablen `spur` und `schablone` anlegst. Außerdem müssen wir uns die aktuelle X-Richtung merken, damit wir dem Spieler später sagen können, wohin der treibt. 

Leg also bitte die Variablen **nur für diese Figur** an:

{{< imgblock "img/drifters_variables.png" "" 2 >}}
- akutelle richtung 
- schablone
- spur
{{< /imgblock >}}
{{< /imgblock >}}

{{< imgblock "img/drifters_layout.png" "" 2 >}}
Die Behandlung der Schablonen läuft genau wie bei den Autos. Einzig die Positionen sind anzupassen, und die Variable "aktuelle richtung" muss gesetzt werden.
{{< /imgblock >}}

{{< imgblock "img/drifters_clone_regular.png" "" 3 >}}
Auch das "schwimmen" des Treibguts funktioniert wie das Fahren der Autos.
Ein zusätzlicher Teil kommt allerdings dazu: Wenn der Spieler auf dem Treibgut sitzt, müssen wir ihn wissen lassen, dass er mitkommen muss. Also senden wir die Nachricht **treiben**.

{{< imgblock "img/drifters_block_swim.png" "" 3 >}}
Auch hier haben wir das eigentliche Treiben in einen eigenen Block ausgelagert. 

{{< /imgblock >}}
{{< /imgblock >}}

### Fertig

Viel Spass beim Spielen. Vielleicht kannst du das Spiel noch ein bisschen erweitern. Ein paar Ideen:

- du könntest Punkte sammeln, wenn du die Straße überquert hast.
- Eventuell gibt es nur eine begrenzte Anzahl von Leben
- du könntest auch Level einbauen, indem sich z.B. die Autos schneller bewegen, wenn du bereits mehrere Punkte hast

Du kannst das [Spiel auch hier ausprobieren](https://scratch.mit.edu/projects/666569081). Das Spiel funktioniert am besten, wenn du den "Turbo-Modus" aktivierst.

Viel Spass.
