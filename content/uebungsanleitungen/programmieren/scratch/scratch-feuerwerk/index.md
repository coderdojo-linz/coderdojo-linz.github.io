---
title: "Scratch Feuerwerk"
description: "Kleines Silvester-Feuerwerk mit Scratch."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/title.png"
imgposition: "center top"
level: 1
version: 2
sprites: 1
scripts: 5
aliases:
- /trainingsanleitungen/scratch/scratch-feuerwerk.html
---

## Figuren anlegen
{{< imgblock "img/scratchy_entfernen.png" "" 2 >}}
Katzen fürchten sich normalerweise sehr vor Feuerwerk. Deswegen werden wir Scratchy vorsichtshalber entfernen.
{{< /imgblock >}}

{{< imgblock "img/neue_figur.png" "" 2 >}}
Für unser kleines Feuerwerk benötigen wir nur eine ganz einfache Figur, die du auch selbst malen kannst. Lege dir eine neue Figur an und nenne sie "Feuerwerk-Partikel". Hier werden wir die Funken für unser Feuerwerk unterbringen.
{{< /imgblock >}}

{{< imgblock "img/figur_malen.png" "" 4 >}}
Nun gehen wir in den Kostüm-Editor und werden die Partikel in verschiedenen Farben malen. Bitte achte darauf, dass Feuerwerkspartikel sehr klein sind. Deswegen solltest du auch nur sehr kleine Objekte malen. Ausserdem bitte darauf achten dass du genau in der Mitte malst. Du erkennst den Mittelpunkt an einem grauen Kreuz in der Mitte des Malfelds.

Damit das Feuerwerk nachher gut aussieht mach einfach 5 Kostüme. Wenn du ein Kostüm gemalt hast kannst du einfach mit einem Klick auf die rechte Maustaste die Kostüme kopieren und anders einfärben.

Ich habe einfach ein paar verschieden farbige Kugeln gemalt.

Ich habe in meinem Beispiel einfach ein paar kleine Kugeln gemalt.  
{{< /imgblock >}}

## Ein Feuerwerk muss auch Lärm machen
{{< imgblock "img/klang_hinzufuegen.png" "" 4 >}}
Ein Feuerwerk muss natürlich auch Geräusche machen. Gut dass wir Scratchy schon versteckt haben.

Leider gibt es in Scratch nicht direkt Klänge für Explosionen, daher habe ich hier eines hinterlegt. Bitte lade dir die MP3 Datei mit einem Rechtsklick ("Link speichern unter") herunter:

- [Explosion](assets/Explosion.mp3)

Danach fügst du den Klang bei "Klänge" hinzu.
{{< /imgblock >}}

## Skripte
{{< imgblock "img/neue_variable.png" "" 3 >}}
Als erstes werden wir uns 3 neue Variablen anlegen damit die einzelnen Partikel auch wissen was sie machen müssen. Als Variablen brauchen wir:

- Geschwindigkeit
- ist Klon
- Distanz

Bitte achte darauf dass beide Variablen "nur für diese Figur" angelegt werden.
{{< /imgblock >}}

#### So ... und nun geht es los:

{{< imgblock "img/script_rakete_spawn.png" "" 5 >}}
Als erstes müssen wir dafür sorgen, dass immer neue Raketen gestartet werden und die Partikel am Anfang noch unsichtbar sind. Die Partikel sind auch sehr klein - daher wird die Größe auf 10 eingestellt. Sollte das für dich zu klein oder zu groß sein, ändere einfach den Wert für die Größe.

Die Position, an der die Rakete explodieren soll suchen wir zufällig in der oberen Bildschirmhälfte aus. Ein Signal an die Rakete bringt sie dann dazu die Explosion vorzubereiten.
{{< /imgblock >}}

{{< imgblock "img/neue_nachricht.png" "" 3 >}}
Das neue Signal legst du ganz einfach an wenn du den "Sende ... an alle" - Block einfügst und danach mit einem Klick auf das kleine Dreieck den Punkt "Neue Nachricht" auswählst.
{{< /imgblock >}}

{{< imgblock "img/script_neue_rakete.png" "" 4 >}}
Um die Rakete vorzubereiten werden wir zuerst sicherstellen, dass wir nicht irgendwelche Klon-Partikel als neue Raketen ansehen. Dazu ist die Überprüfung auf "ist Klon" notwendig.

Für eine Explosion werden einige Partikel benötigt. Da Scratch leider nicht so viele Objekte zulässt werden wir uns mit 50 Partikel je Rakete begnügen, die in Zufällige Richtungen davonfliegen.

Nachdem alle Partikel erzeugt wurden erzeugen wir noch den Knall und dann lassen wir die Partikel auseinanderfliegen. Dazu legst du wieder ein neues Signal "Feuer" an.
{{< /imgblock >}}

**Doch Halt - wir haben noch eine Kleinigkeit vergessen!**

{{< imgblock "img/script_neuer_klon.png" "" 4 >}}
Wenn ein neuer Klon entsteht, sollte er auch noch initialisert werden. Zuerst sagen wir ihm, dass er ein Klon ist.

Danach wird noch zufällig eines der Kostüme ausgesucht, die wir am Anfang gemalt haben. (Wenn du mehr als 5 gemalt hast, kannst du hier die Zufallszahlen auch anpassen).

Ausserdem erhält jeder Partikel-Klon noch seine eigene Geschwindigkeit und ihm wird gesagt, wie weit er noch fliegen muss.
{{< /imgblock >}}

**Nun lassen wir aber die Partikel auseinanderfliegen.**

{{< imgblock "img/script_feuer.png" "" 4 >}}
Sobald wir das Signal zur Explosion empfangen haben werden die Partikel sichtbar und fliegen auseinander.

Damit das ganze halbwegs ruckelfrei geht, liegt der eigentliche Zeichenteil in einem Block der "ohne Bildschirmaktualisierung" läuft.
{{< /imgblock >}}

{{< imgblock "img/neuer_block.png" "" 4 >}}
Einen neuen Block legst du einfach im Bereich "Meine Blöcke" mit einem Klick auf "Neuer Block" an. Nenne den Block "Zeichne Partikel". Du kannst den Block dann editieren und in das Skript oben einfügen.
{{< /imgblock >}}

{{< imgblock "img/block_zeichne_partikel.png" "" 4 >}}
Der neue Block den wir gerade vorhin angelegt haben ist recht einfach. Wir bewegen den Partikel entsprechend seiner Geschwindigkeit. Du kannst die Ovale aus den Variablen einfach auf das Nummernfeld ziehen.

Anschließend machen wir den Partikel noch durchsichtiger.
{{< /imgblock >}}

Damit ist unser Feuerwerk fertig und du kannst mit einem Klick auf die grüne Fahne das ganze bewundern.

Wenn du möchtest kannst du auch [meine Version online ansehen](https://scratch.mit.edu/projects/604911457 "Feuerwerk auf scratch.mit.edu").

**Frohes neues Jahr!**





