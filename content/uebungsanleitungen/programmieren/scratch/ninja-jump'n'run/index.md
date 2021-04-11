---
title: "Ninja Jump'n'run"
description: "Sammle die Diamanten während du durch das Level läufst."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center top"
level: 3
version: 1
sprites: 4
scripts: 30
data: 24
aliases:
- /trainingsanleitungen/scratch/ninja-jump-n-run.html
categories:
- Scratch
---

Dieses Spiel ist bereits etwas herausfordernder und soll euch Zeigen wie man in einem Spiel mit einem Spielfeld umgeht, das
viel größer als der Bildschirm ist.

### Figuren
Bitte lade dir folgende Figuren Herunter:

* [Ninja als Spieler](assets/Spieler.sprite3)
* [Blöcke für das Spielfeld](assets/game_block.sprite3)
* [Diamanten zum Sammeln](assets/Diamant.sprite3)
* [Schlangen als Gegner](assets/Schlange.sprite3)

Ausserdem werdet ihr noch

* [Level-Datei für das Spielfeld](assets/level.txt)

brauchen.

# Vorbereitung
{{< imgblock "img/new_list_level.png" "" 4>}}
Das Spielfeld selbst ist diesmal nicht wirklich ein Bild sondern eine Beschreibung wo welcher Block Sitzen soll. Wir definieren dafür eine Liste namens `level` im der Sektion `Variablen` durch klicken auf `Neue Liste`.
{{< /imgblock >}}

{{< imgblock "img/import_level.png" "" 4>}}
Für das Level habe ich hier ein [minimales Spielfeld mit 64 blöcken Länge](assets/level.txt) vorbereitet. Bitte runterladen und dann importieren. Dazu einfach auf die liste rechts klicken und `importieren` auswählen.

Danach könnt ihr das Häckchen neben der `level` - Liste wieder unsichtbar machen.
{{< /imgblock >}}

Danach werden wir die Vorbereitung des Spiels noch auf der Bühne als Skript abschließen. Dazu einfach die Bühne auswählen und auf die Registrierkarte *Skripte* klicken.

{{< imgblock "img/vars_field.png" "" 4>}}
Bitte lege dir 2 Variablen an die die Größe des Spielfelds festlegen.

1. Level Größe X
1. Level Größe Y
{{< /imgblock >}}


{{< imgblock "img/initialisiere_spiel.png" "" 4>}}
Als erstes werden wir dort die Größe des Spielfelds einstellen (64 x 12 Blöcke) und danach 2 Nachrichten abschicken die

1. Das Spiel starten (wir müssen in dem Fall warten bis alle Elemente des Spiels fertig sind.)
1. Das Spiel laufen lassen
{{< /imgblock >}}

# Das Spielfeld

Das Spielfeld ist der komplizierteste Teil des Spiels da er folgende Aufgaben erfüllen muss:

* die Ränder (vorne und Hinten) festlegen
* die Blöcke für Boden und Plattformen darstellen
* Abhängig von der Kameraposition die richtigen Blöcke an die richtige Position zeichnen
* Bei Änderung der Kameraposition die Blöcke verschieben.

Da Scratch ein Limit von ~301 Klone hat dürfen wir auch nicht alle Blöcke des Spiels einfach als unsichtbare Blöcke behalten sondern müssen
abhängig von der Kameraposition nur jene Blöcke anzeigen die auch sichtbar sind.

Falls du das noch nicht erledigt hast, bitte importiere die [`game-blocks`](assets/game_block.sprite3) jetzt. Der große violette Block sollte dich nicht wundern. Du wirst ihn später im Spiel nicht mehr sehen. Er dient nur dazu dass wir die Blöcke weit genug aus dem Rand schieben können sodass diese unsichtbar werden.

{{< imgblock "img/var_camera_pos_x.png" "Kamera Pos X" 2>}}
Bitte lege auch gleich eine Variable `Kamera Pos X` **für alle Figuren sichtbar** an. Diese Variable benötigen wir, damit wir rausfinden, welcher Teil des Spielfelds gerade sichbar ist.
{{< /imgblock >}}

### Erzeugen eines Blocks an einer bestimmten Stelle
{{< imgblock "img/new_function_generateblock.png" "" 4>}}
Als erstes werden wir uns um einen Benutzerdefinierten Block kümmern, der eines der Herzstücke des Hintergrundaufbaus darstellt. Er wird den korrekten Blocktyp an jeder Position ermitteln und einen Klon an der Stelle erschaffen.

Lege dafür auch gleich 2 Variablen **nur für diese Figur** an.

* `xBlockIndex` die die aktuelle x-position in der `level` Liste halten wird.
* `cellindex` die die absolute Position in der `level` Liste halten wird. 
{{< /imgblock >}}

{{< imgblock "img/function_generateblock.png" "Erzeuge Block" 6>}}
Kurze Info zu den Formeln:

* Jeder Block ist 32x32 Pixel groß -> daher muss x und y durch 32 dividiert und abgerundet werden.
* Der linke Rand bei Scratch is -230 und der untere Rand ist -170 -> das müssen wir auch ausgleichen
* die position in der liste für Y ist jeweils die Y-Position * der Breite des Spielfelds (in unserem Fall 64 Blöcke)
  * 1. Zeile fängt bei 0 an
  * 2. Zeile bei 64
  * 3. Zeile bei 128
  * u.s.w.
* Danach müssen wir noch die X-Position dazuzählen. So ergibt sich z.B. für Y=2 X=3 (2*64 + 3 => 131)
* Und weil Scratch nicht bei 0 sondern bei 1 in einer Liste zu zählen beginnt müssen wir noch 1 dazuzählen
{{< /imgblock >}}

Falls der Block innerhalb des spielfeldes ist X > 0 und X < 64 dann werden wir einen Block zeichnen, sonst machen wir einfach
einen Stein-Block als Rand.

Als letztes überprüfen wir noch den eintrag in der liste. Falls es ein gültiger Spielfeld eintrag ist dann wechseln wir zu dem Kostüm und
erzeugen einen Klon.

### Eine Spalte von Blöcken zeichnen

{{< imgblock "img/block_column_gen.png" "Erzeuge Spalte" 4>}}
Wir gehen hier einfach davon aus dass wir von unten nach oben an der aktuellen Position Blöcke zeichnen.
Dafür werden wir die 12 Blöcke, die das Spielfeld hoch ist, jeweils einen Block zeichnen und dann 32 Punkte nach oben springen.
Am ende der Schleife springen wir wider an die Ausgangsposition.

An der X-Position müssen wir jetzt auch die Kameraposition berücksichtigen, da wir u.U. nicht mehr am 0-Punkt sind.
{{< /imgblock >}}

### Vorbereiten der Blöcke für die Ränder
Damit wir an den Rändern neue Blöcke erzeugen können (wichtig beim Verschieben) legen wir noch 2 unsichtbare Blöcke am linken und am Rechten Rand an.

{{< imgblock "img/var_next_blocktype.png" "Block Typ" 4>}}
Damit die Blöcke auch wissen, was ihre Aufgabe ist geben wir ihnen einen Block-Typ als Variable **nur für diese Figur**:
{{< /imgblock >}}

* 0 - Undefiniert (kein Klon)
* 1 - Linker Rand
* 2 - Rechter Rand
* 10 - "Normaler" sichtbarer Block

{{< imgblock "img/var_blocktype.png" "Block Typ" 4>}}
Damit wir dem Block auch mitteilen können welcher Typ er sein soll müssen wir noch einen Variable "Nächster Blocktyp" **für alle Figuren sichtbar** anlegen.
{{< /imgblock >}}

### Erzeugen der Klone für das Spielfeld

{{< imgblock "img/draw_background.png" "Zeichne Hintergund" 4>}}
Beim Spielstart müssen als erstes einmal alle Blöcke angelegt werden die gerade sichtbar sind. Damit das schnell geht, legen wir uns einen Benutzerdefinierten Block "Zeichne Hintergrund" an der **ohne Bildschirmaktualisierung** läuft.

Damit wir die Blöcke auch aus dem sichtbaren Bereich verschieben können wählen wir zum positionieren immer das Kostüm "Huge Block". Ausserdem machen wir unsere Vorlage unsichtbar.

Danach stellen wir uns auf die linke untere Position für den ersten Block. Dort setzten wir auch gleich den Spezialblock für den Linken Rand (siehe oben).

Danach gehen wir in einer Schleife Spalte für Spalte durch und Benutzen die zuvor erstellte Funktion um die Klone für die Blöcke anzulegen. Als letztes legen wir noch den Spezialblock für den rechten Rand an. Da wir nach jeder Spalte um 32 pixel nach rechts gerutscht sind, müssen wir das vorher bei der rechts-aussen-Spalte rückgängig machen.

Die **"Warte 0.001 s"** - Blöcke vor dem Wechsel der Block-Typen sind übrigens dafür da, damit der Aktuell zu erstellende Klon genug Zeit hat sich seinen Blocktyp zu merken. Sonst würden wir `Nächster Blocktyp` umstellen bevor der aktuelle Klon sich die Variable merken konnte.
{{< /imgblock >}}

{{< imgblock "img/initialize_background_blocks.png" "Intitialisiere Hintergrund" 4>}}
Zum erfolgreichen Spielstart fehlt jetzt nur noch die Reaktion auf das eingentliche Start-Ereignis.
{{< /imgblock >}}

{{< imgblock "img/run_background_blocks_empty.png" "Spiel läuft - Endlosschleife" 4>}}
Und eine Endlosschleife damit das Spiel nicht sofort zu Ende ist.

Da es sich hierbei um eine Endlosschleife handelt, möchten wir diese nur auf einem Klon laufen lassen (z.B. den mit `Block Typ` = 0)
{{< /imgblock >}}

### Das Spielfeld erscheinen lassen

Wenn du jetzt auf Start drückst läuft das Spiel zwar los aber man sieht noch: **nichts**.

{{< imgblock "img/new_background_clone.png" "Neuer Klon" 4>}}
Das liegt daran, dass wir zwar Klone erzeugen, diese aber nach wie vor unsichtbar sind.

Wir müssen noch folgende Dinge machen, wenn neue Klone entstehen:

* Blocktyp merken (kopie von `Nächster Blocktyp` auf `Block Typ`)
* Block Sichtbar machen, wenn es sich um einen `Block Typ` handelt, der sichtbar sein soll

Wenn du nun noch einmal auf Start drückst, wirst du sehen wie das Spielfeld wie von Zauberhand entsteht.
{{< /imgblock >}}

### Das Spielfeld bewegen

Nun da wir das Spielfeld sehen können möchten wir es natürlich auch bewegen können. Immerhin ist es ja das Ziel unsers Spiels, dass wir uns auf der Spielfläche bewegen wollen. Das Ereignis `Hintergrundbewegen` wird dies erledigen.

{{< imgblock "img/var_camera_move.png" "Variable Kameraänderung" 2>}}
Um festzulegen wie weit sich der Hintergrund bewegt legen wir eine neue Variable `Kameraänderung` **für alle Figuren sichtbar** an.
{{< /imgblock >}}

{{< imgblock "img/var_costume_backup.png" "Variable Kostüm Vorher" 2>}}
Zunächst schreiben wir die Behandlungsroutine für `Hintergrundbewegen`. Ausserdem benötigen wir noch einen Variable `Kostüm Vorher` **nur für diese Figur**.
{{< /imgblock >}}

_Hintergrundinfo:_ Diese Behandlungsroutine wird auf jedem Klon separat ausgeführt - das heißt jeder Spielblock ist für sich selbst verantwortlich.

{{< imgblock "img/script_evt_background_move.png" "Ereignis Hintergrundbewegen" 5>}}
Um die Scratch limitierung "kein block kann sich aus dem Spielfeld bewegen" zu überlisten muss der Block sehr groß werden.

Wir gehen wie folgt vor:

* speichern des aktuellen Kostüms in der Variable `Kostüm Vorher`
* wechseln auf `Huge Block`
* verschieben des Blocks um `Kameraänderung`
* wechseln auf das Kostüm, das in der Variable `Kostüm Vorher` gemerkt wurde.

Die Blöcke sind Verschoben. Damit wir nicht zu viele Klone erhalten, werden wir nun sichtbare Blöcke entfernen, die aus dem Bildschirm hinausgeschoben wurden.

Eine Sonderbehandlung erhalten die beiden Randblöcke. Damit du das Skript fertig machen kannst musst du noch den Benutzerdefinierten Block `Überprüfe Randblock` (siehe nächstes Skript) erstellen.
{{< /imgblock >}}

{{< imgblock "img/script_blk_background_borders.png" "Überprüfe Randblock - Benutzerdefinierter Block" 5>}}
Zum überprüfen des Randes bitte einen neuen _Bentzerdefinierten Block_ "`Überprüfe Randblock`" **ohne Bildschirmaktualsierung** erzeugen. Du kannst den Block dann gleich ins obere Skript `Hintegrundbewegen` einfügen.

In dem Skript überprüfen wir die beiden unsichtbaren Randblöcke (Typ 1 und 2) ob sie bereits so weit verschoben wurden, dass sie wider um eine Spalte zurück springen müssen, um noch am Rand zu sein. Sollte die Bewegung _nach aussen_ sein (also z.B. der Rechte Block springt nach Rechts), erzeugen wir an der Zielposition eine neue Spalte mit Spielfeld-Blöcken. Dazu können wir wieder den Block `Zeichne Spalte` verwenden. 

Um `Nächster Blocktyp` brauchen wir uns keine Sorgen mehr zu machen, da dieser am Ende des Spielfeld-Erstellens bereit auf 10 (sichtbarer Block) gestellt wurde.
{{< /imgblock >}}

### Scrolling ausprobieren
{{< imgblock "img/run_background_blocks.png" "Spiel läuft - Endlosschleife mit Navigation" 4>}}
Als letztes tauschen wir noch die Endlosschleife `Spiel läuft` gegen eine Version aus, die `Hintergrund bewegen` nutzt. In diesem Beispiel habe ich die Tasten `m` und `n` dafür ausgewählt, dass ihr euch durch das Spielfeld scrollen könnt.

**Achtung:** Damit das Spiel einwandfrei funktioniert, muss nach jeder `Kameraänderung` auch die `Kamera Pos X` angepasst werden. 
{{< /imgblock >}}

# Wir wollen springen: Die Spielfigur

Da wir den Hintergrund bereits haben, setzten wir nun unseren Ninja auf die Spielfläche.

{{< imgblock "img/var_player_all.png" "Variablen für Ninja" 2>}}
Der Ninja benötigt 3 Variablen die wir später noch brauchen, also legen wir diese **nur für diese Figur** zuerst an:

1. `Ninja Fallgeschwindigkeit` brauchen wir um im Spiel für Sprünge und Schwerkraft
1. `Ninja ist tot` zeigt an, ob der Ninja gestorben ist
1. `Ninja springt` wird gesetzt um zu zeigen, dass der Ninja gerade springt
1. `Ninja läuft` wird gesetzt um zu zeigen, dass der Ninja gerade läuft
{{< /imgblock >}}

{{< imgblock "img/script_player_init.png" "Ninja Grundeinstellungen" 4>}}
Wie beim Spielfeld müssen wir auch den Ninja initialisieren.

Dazu gehört:

* Alle Variablen auf ihren Anfangswert zu stellen
* Die Position und
* Größe der Figur einzustellen
* Die Figur sichtbar zu machen
{{< /imgblock >}}

### Die Spielfigur bewegen

{{< imgblock "img/script_blk_player_movestep.png" "" 4>}}
Damit wir unsere Skript nicht zu groß werden lagern wir die Funktion "Gehe" in einen benutzerdefinierten Block aus, den wir **ohne Bildschirmaktualsierung laufen lassen**.

Immerhin ist nach rechts oder nach links gehen nahezu das gleiche.

Wir müssen überdies aufpassen, dass wir nicht durch Blöcke durchlaufen, und wir können hier die Variable "Ninja läuft" setzen.
{{< /imgblock >}}

{{< imgblock "img/script_player_move.png" "" 4>}}
Nun können wir den Block auch gleich benutzen:

* _Taste links gedrückt_: gehe in Richtung -90°
* _Taste rechts gedrückt_: gehe in Richtung 90°
* _Leertaste gedrückt_: gib dem Spieler eine negative Fallgschwindigkeit (eine Richtung nach oben) - allerdings nur wenn er nicht sowieso gerade springt
* _Simuliere Schwerkraft_: diesen Teil werden wir gleich behandeln. Lege einfach derweil einen Benutzerdefinierten Block mit namen `Schwerkraft` an.

Am Anfang wird die Variable `Ninja läuft` überdies auf 0 gestellt. So bleibt sie auch, falls nicht eine Bewegungstaste gedrückt wurde. Das ist wichtig um die richtigen Animationen anzeigen zu können.
{{< /imgblock >}}

{{< imgblock "img/script_blk_player_gravity.png" "" 4>}}
Damit der Ninja auch am Boden bleibt und springen kann simulieren wir noch ein wenig Schwerkraft. Wie wir wissen bewirkt die Schwerkraft eine Beschleunigung der Geschwindigkeit mit der man fällt :).

Natürlich nur, wenn wir nicht schon auf dem Boden stehen. Hier könne wir auch gleich überprüfen, ob wir eventuell auf Lava getreten sind. Das erledigt der Benutzerdefinierte Block `Überprüfe ob Ninja lebt` für uns.

Da dieser Block gleichzeitig auch für das Springen zuständig ist müssen wir überprüfen, ob wir von unten oder von oben an einen block gestoßen sind. Falls beim Springen mit dem Kopf angestoßen sind, setzen wir einfach die `Fallgeschwindigkeit` auf 0, sodass wir nicht mehr höher fliegen. 

Senn wir von Oben auf einen Block stoßen, setzen wir den Ninja genau über den Block.
{{< /imgblock >}}

{{< imgblock "img/script_blk_player_checkhealth.png" "" 6>}}
Um zu überprüfen ob der Ninja in ein Loch gefallen ist (Y-Position wird zu klein) oder er auf Lava getreten ist (Berührt die Oberflächenfarbe des Lavablocks) verwenden wir den Block `Überprüfe ob Ninja lebt` den wir als Block **ohne Bildschirmaktualsierung** anlegen. 

Sollte der Ninja in einer tödlichen Situation sein, senden wir die Nachricht `Ninja gestorben`.
{{< /imgblock >}}

{{< imgblock "img/script_player_animate.png" "" 4>}}
Damit der Ninja nicht aussieht als würde er über die Spielfläche schweben, werden wir ihn noch ein wenig animieren - allerdings nur wenn er noch lebt.

* Wenn er läuft wechseln wir durch alle Kostüme ausser dem "Springen" Kostüm.
* Wenn er springt, wechseln wir auf das "Springen" Kostüm.
* Ansonst wechseln wir zum Ninja-Standard-Kostüm

Damit es nicht zu zappelig aussieht warten wir nach jedem Durchlauf ganz kurz.
{{< /imgblock >}}

{{< imgblock "img/script_player_checkhealth.png" "" 4>}}
Zu guter letzt - wir prüfen ständig, ob der Ninja sich in einer tödlichen Situation befindet.
{{< /imgblock >}}

# Sammeln macht Spass - Diamanten
Bei den Diamanten legen wir alle Klone sofort an. So viele Klone werden wir hier nicht haben.

{{< imgblock "img/script_dia_init.png" "" 4>}}
Die initialisierung ist relative einfach. Wir setzten allerdings die "X-Position" auf -500 damit dieses Element
niemals Sichtbar wird. (1. Element)
{{< /imgblock >}}
{{< imgblock "img/script_blk_dia_creatediamonds.png" "" 5>}}
{{< /imgblock >}}
{{< imgblock "img/script_dia_new_clone.png" "" 6>}}
{{< /imgblock >}}
{{< imgblock "img/script_blk_check_visibility.png" "" 9>}}
{{< /imgblock >}}
{{< imgblock "img/script_evt_dia_background_move.png" "" 4>}}
Wir brauchen nichts anders tun als ständig die Sichtbarkeit und Position berechnen.
{{< /imgblock >}}
{{< imgblock "img/script_evt_dia_game_loop.png" "" 4>}}
{{< /imgblock >}}

# Gefährliche Hindernisse - Schlangen am Spielfeld
Schlange werden (fast) gleich wie Diamanten behandelt.

{{< imgblock "img/script_snake_init.png" "" 4>}}
Auch hier setzten die "X-Position" auf -500 damit dieses Element niemals Sichtbar wird. (1. Element)
{{< /imgblock >}}
{{< imgblock "img/script_blk_snake_create.png" "" 5>}}
{{< /imgblock >}}
{{< imgblock "img/script_snake_new_clone.png" "" 6>}}
{{< /imgblock >}}
{{< imgblock "img/script_blk_snake_visibilitycheck.png" "" 9>}}
{{< /imgblock >}}
{{< imgblock "img/script_evt_snake_background_move.png" "" 4>}}
Wir brauchen nichts anders tun als ständig die Sichtbarkeit und Position berechnen.
{{< /imgblock >}}
{{< imgblock "img/script_evt_snake_animate.png" "" 4>}}
Eine kleine Animation für die Schlange bauen wir auch gleich ein.
{{< /imgblock >}}
{{< imgblock "img/script_evt_snake_loop.png" "" 4>}}
Wenn der Spieler berührt wird, senden wir die "Ninja gestorben" - Nachricht und er Ninja muss re-spawnen.
{{< /imgblock >}}

# Ende
Wenn du das Spiel gerne mal ausprobieren möchtest, kannst du das [hier](https://scratch.mit.edu/projects/528516526) tun.