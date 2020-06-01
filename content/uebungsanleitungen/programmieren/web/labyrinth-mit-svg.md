---

title: Labyrinth-Spiel mit Scratch und JavaScript
description: In dieser Übung programmierst du ein Spiel mit Scratch und übersetzt es dann in JavaScript
---

# Labyrinth-Spiel mit Scratch und JavaScript

## Ziel der Übung

In dieser Übung programmierst du ein Labyrinth-Spiel [erst mit Scratch](../scratch/scratch-labyrinth.html) und danach mit JavaScript. So lernst du, das, was du in Scratch über Programmieren gelernt hast, in einer textbasierten Programmiersprache anzuwenden.

**Es ist wichtig, dass du vor dieser Übung die [Scratch-Variante dieses Spiels](../scratch/scratch-labyrinth.html) genau angesehen oder noch besser selbst programmiert hast.**

## Spielbeschreibung

<div class="row sushi-intro">
	<div class="col-sm-6"><img alt="Labyrinth Game" src="labyrinth/labyrinth-game.png" /></div>
	<div class="col-sm-6">
		<p>Steuere mit den Cursortasten den Spieler (blaue Kugel). Dein Ziel ist es, das mit "X" markierte Ziel zu erreichen.</p>
		<p>Die schwarzen und roten Felder sind Hindernisse. Schwarze Felder kannst du zerstören, indem du Anlauf nimmst. Rote kannst du nicht zerstören.</p>
		<p>Ziel ist es, mit möglichst wenigen Bewegungen das Ziel zu erreichen. Damit du deine Versuche vergleichen kannst, soll bei Erreichen des Ziel ausgegeben werden, wie viele Bewegungen du gebraucht hast.</p>
	</div>
</div>

## JavaScript

### Entwicklungsumgebung

1. Öffne einen beliebigen Texteditor. Empfehlenswert ist ein Editor, der speziell für Softwareentwicklung gedacht ist. Wir empfehlen [Visual Studio Code](https://code.visualstudio.com/). Dieser Editor ist kostenlos und funktioniert unter Windows, MacOS und Linux).

1. Erstelle eine neue Textdatei. In *Visual Studio Code* geht das so: <br/>![Neue Datei in Visual Studio Code erstellen](html-meine-erste-webseite/code-neue-datei.png)

1. Speichere die Datei in einem Ordner unter dem Namen `index.html` ab. Merke dir den Ordner, in dem du sie speicherst. Du wirst ihn gleich brauchen.

1. Gib folgenden Code in die neue Datei ein und vergiss nicht, danach die Änderungen zu speichern.

        <!DOCTYPE html>
        <html>

        <head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg.js"></script>
            <script src="index.js"></script>
        </head>

        <body>
            <svg id="svg" width="480" height="360">
            </svg>
        </body>

        </html>

1. Erstelle eine zweite Textdatei und speichere sie in dem gleichen Ordner wie `index.html` unter dem Namen `index.js` ab.

1. Gib folgenden Code in die neue Datei ein und vergiss nicht, danach die Änderungen zu speichern.

        window.onload = function () {
            // Die folgende Zeile ist nur zum Testen da. Wir werden sie 
            // in Kürze wieder löschen.
            windows.alert("Hallo!");
        };

1. Suche die gespeicherte Datei im Dateiexplorer (Windows) bzw. Finder (MacOS). Öffne sie durch Doppelklick. Ein Webbrowser sollte sich öffnen und es sollte die Meldung *Hallo!* erscheinen.

### Globale Variablen

1. Genau wie in Scratch beginnen wir mit dem Anlegen von Variablen. Die *Variablen* in JavaScript entsprechen den *Daten* in Scratch.

1. Öffne die Datei `index.js` und ändere den Code wie folgt. **Tipp:** Alle Zeilen, die mit `//` beginnen, sind nur Kommentare. Sie sollen dir beim Verstehen des Codes helfen. Du musst sie aber nicht abtippen. Das Programm funktioniert auch ohne sie.

        window.onload = function () {
            // Die folgende Zeile versetzt JavaScript in den "Strict Mode". Dadurch zwingt es dich,
            // sauberen Code zu schreiben. Ohne diese Zeile versucht JavaScript bei Fehlern zu erraten,
            // was du gemeint hast. Das führt aber oft zu Fehlern. Daher solltest du immer den "Strict Mode"
            // einschalten, um Fehler schnell zu entdecken. Mehr zum "Strict Mode" kannst du unter
            // http://www.w3schools.com/js/js_strict.asp nachlesen.
            "use strict";

            // Globale Variablen anlegen. Das entspricht in etwa den Variablen,
            // die du aus Scratch kennst.
            var spielfeld = [],
                elemente = [],
                svg = new Snap("#svg"),
                spielerSpalteIndex,
                spielerZeileIndex,
                zielSpalteIndex,
                zielZeileIndex,
                spieler,
                ziel,
                sekundenProSchritt = 0.2,
                sekundenAnlauf = 0.3,
                sekundenStoss = 0.1,
                anzahlBewegungen = 0;
            
            // <<<--- HIER PROGRAMMIERST DU IM NÄCHSTEN SCHRITT WEITER
        };

1. Achte besonders auf die Zeile `svg = Snap("#svg"),`. Hier verwenden wir die Bibliothek [*Snap.svg*](http://snapsvg.io/). *Snap.svg* erleichtert die Arbeit mit SVG in JavaScript ganz gewaltig. Möchtes du mehr über SVG und Snap.svg lernen? Wir haben [eigene Übungen dazu im Bereich *Web*](http://coderdojo-linz.github.io/infos/uebungsbeispiele.html).

1. Achte auf den Hinweis `// <<<--- HIER PROGRAMMIERST DU IM NÄCHSTEN SCHRITT WEITER`. Die Funktionen, die in Folge beschrieben sind, musst du eine nach der anderen an dieser Stelle einfügen.

### Spielfeld aufbauen

Jetzt können wir die Variablen für das Spielfeld setzen. Die folgende Grafik stellt den Scratch- und den JavaScript-Code gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Variablen für Spielfeld setzen](labyrinth/variablen-fuer-spielfeld-setzen.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        function variablenFuerSpielfeldSetzen() {
            // Lösche alle vorhandenen Zeilen im Spielfeld
            // Mehr zur Funktion "splice" findest du unter 
            // http://www.w3schools.com/jsref/jsref_splice.asp
            spielfeld.splice(0, spielfeld.length);

            // Füge Zeilen des Labyrinth hinzu. "M" steht für "Mauer", 
            // ein zerstörbares Element. "B" steht für "Beton", 
            // ein unzerstörbares Element. "O" ist ein Platzhalter 
            // für ein leeres Feld.
            spielfeld.push("MMMMMMMMMMMMMMMO");
            spielfeld.push("OOMMOBMBOOMMMMMM");
            spielfeld.push("MOMOOOOOOMBMOOBM");
            spielfeld.push("MMMMMMMOMMOOOBMM");
            spielfeld.push("MOOOOOOOOBMMMBBM");
            spielfeld.push("MBMMBMMBBMMBBOOM");
            spielfeld.push("MMOOOOOBOMOOMMOB");
            spielfeld.push("MOOBMMMOOMMOOOBM");
            spielfeld.push("BMMMMBBOMBOOMMMM");
            spielfeld.push("MBBBBOMMMMBMMOOM");
            spielfeld.push("MOMMOOBMOOOMOOOM");
            spielfeld.push("MMMMMMMMMMMMBBBB");

            // Positionen für Spieler und Ziel festlegen
            spielerSpalteIndex = 1;
            spielerZeileIndex = 2;
            zielSpalteIndex = 1;
            zielZeileIndex = 10;
        }

Jetzt haben wir die Variablen für das Spielfeld. Wir können sie verwenden, um die Labyrinthelemente aufzubauen. Beim Positionieren der Elemente müssen wir beachten, dass das Koordinatensystem von SVG anders ist als das von Scratch. Wärend bei Scratch der Mittelpunkt mit x=0 und y=0 genau in der Mitte des Spielfelds ist, ist der Mittelpunkt bei SVG links oben.

![SVG Spielfeld](labyrinth/svg-spielfeld.png)

Außerdem musst du bedenken, dass bei Scratch der Nullpunkt einer Figur mit x=0 und y=0 in der Mitte liegt (kann im Figureneditor geändert werden):

![Scratch Nullpunkt einer Figur](labyrinth/scratch-figur-nullpunkt.png)

Bei SVG liegt der Nullpunkt aber links oben:

![SVG Nullpunkt einer Figur](labyrinth/svg-figur-nullpunkt.png)

Die folgende Grafik stellt den Scratch- und den JavaScript-Code für das Aufbauen des Spielfelds gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Baue Spielfeld](labyrinth/baue-spielfeld.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        function erzeugeClone(aktuellesFeld, spalteIndex, zeileIndex) {
            var aussehen,
                element;
            if (aktuellesFeld === "M") {
                // Mauer -> dunkles Grau
                aussehen = { fill: '#373737' };
            } else {
                // Beton -> Rot
                aussehen = { fill: '#ff3838' };
            }

            // Labyrinthelement hinzufügen
            element = svg.rect(spalteIndex * 30, zeileIndex * 30, 30, 30)
                .attr(aussehen)
                .data({ spalteIndex: spalteIndex, zeileIndex: zeileIndex });

            // In Scratch musst du dich nicht um das Verwalten der Klone kümmern. Scratch
            // macht das für dich. In JavaScript müssen wir alle erstellten Klone selbst
            // speichern, damit wir später wieder auf sie zugreifen können.
            elemente.push(element);
        }

        // Labyrinth auf Basis des Inhalts der Variable "spielfeld" aufbauen
        function baueSpielfeld() {
            var zeileIndex,
                spalteIndex,
                aktuellesFeld;
            for (zeileIndex = 0; zeileIndex < 12; zeileIndex++) {
                for (spalteIndex = 0; spalteIndex < 16; spalteIndex++) {
                    aktuellesFeld = spielfeld[zeileIndex][spalteIndex];
                    if (aktuellesFeld === "M" || aktuellesFeld === "B") {
                        erzeugeClone(aktuellesFeld, spalteIndex, zeileIndex);
                    }
                }
            }
        }

### Schwarze Hindernisse zerstören

Die nächste Funktion, die wir brauchen, kümmert sich um das Zerstören von schwarzen Hindernissen. Die folgende Grafik stellt den Scratch- und den JavaScript-Code gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Schwarze Hindernisse zerstören](labyrinth/zerstoere.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        function zerstoere(zerstoereZeileIndex, zerstoereSpalteIndex) {
            var index,
                neueLabyrinthZeile,
                aktuelleZeile,
                aktuelleSpalteIndex;

            // In Scratch kann man mit "Sende ... an alle" ganz einfach eine Nachricht an alle
            // Klone aller Figuren schicken. So etwas gibt es in JavaScript nicht. Wir müssen
            // selbst in einer Schleife alle Klone der Labyrinthelemente durchgehen. Genau das
            // macht die folgende Schleife.
            for (index = 0; index < elemente.length; index++) {
                if (elemente[index].data("spalteIndex") === zerstoereSpalteIndex && elemente[index].data("zeileIndex") === zerstoereZeileIndex) {
                    // Die Variable wird hier bewusst auf einen leeren Inhalt gesetzt
                    neueLabyrinthZeile = "";
                    aktuelleZeile = spielfeld[zerstoereZeileIndex];
                    
                    // Wir kopieren die Labyrinthzeile, in der das zu zerstörende Element enthalten ist. 
                    // Alle Elemente werden unverändert kopiert, nur das zu zerstörende Element nicht.
                    for (aktuelleSpalteIndex = 0; aktuelleSpalteIndex < 16; aktuelleSpalteIndex++) {
                        if (aktuelleSpalteIndex === zerstoereSpalteIndex) {
                            neueLabyrinthZeile += "O";
                        } else {
                            neueLabyrinthZeile += aktuelleZeile[aktuelleSpalteIndex];
                        }
                    }

                    // JavaScript hat eine Funktion, die Scratch nicht hat: "substring". Sie gibt dir einen
                    // Teil einer Texts zurück. Damit könnte man die gesamte, oben gezeigte Schleife, durch
                    // eine einzige Zeile ersetzen. Mehr über substring findest du unter
                    // http://www.w3schools.com/jsref/jsref_substring.asp
                    ////neueLabyrinthZeile = aktuelleZeile.substring(0, zerstoereSpalteIndex) + "O" +
                    ////    aktuelleZeile.substring(zerstoereSpalteIndex + 1);

                    spielfeld.splice(zerstoereZeileIndex, 1, neueLabyrinthZeile);
                    
                    elemente[index].remove();
                }
            }
        }

### Den Spieler programmieren

Wie in Scratch brauchen wir für den Spieler einige Hilfsfunktionen. Die folgende Grafik stellt den Scratch- und den JavaScript-Code gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Spieler Positionieren](labyrinth/position-rechnen.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        // Ermittle das Element im Spielfeld an der angegebenen Position
        function ermittleSpielfeldelement(zeile, spalte) {
            return spielfeld[zeile][spalte];
        }

        // Bewege den Spieler zur angegebenen Position in der angegebenen Zeit.
        function aktualisiereSpielerposition(zeile, spalte, sekunden, next) {
            var transformation = "t" + (spalte * 30 + 15).toString() + "," + (zeile * 30 + 15).toString();
            spieler.animate({ transform: transformation }, sekunden * 1000, next);
        }

Der Block für das Bewegen war in Scratch ziemlich groß und kompiliziert. Die gute Nachricht ist, dass die Logik in JavaScript fast genau wie in Scratch funktioniert. Die folgende Grafik stellt den Scratch- und den JavaScript-Code für das vertikale Bewegen gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Spieler bewegen](labyrinth/bewege-vertikal.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        // Führe eine vertikale Bewegung (oben/unten) durch
        function bewegeVertikal(bewegung) {
            var aktuellesFeld;

            // Stelle sicher, dass sich der Spieler nicht aus den Grenzen des Labyrinths bewegt (wir haben 12 Zeilen)
            if (spielerZeileIndex + bewegung >= 0 && spielerZeileIndex + bewegung < 12) {
                aktuellesFeld = ermittleSpielfeldelement(spielerZeileIndex + bewegung, spielerSpalteIndex);
                if (aktuellesFeld === "O") {
                    // Das Zielfeld ist leer, der Spieler kann sich hin bewegen
                    anzahlBewegungen++;
                    spielerZeileIndex += bewegung;
                    aktualisiereSpielerposition(spielerZeileIndex, spielerSpalteIndex, sekundenProSchritt);
                } else {
                    if (aktuellesFeld === "M") {
                        // Das Zielfeld enthält ein Element, das zerstörbar ist
                        aktuellesFeld = ermittleSpielfeldelement(spielerZeileIndex + bewegung * (-1), spielerSpalteIndex);
                        if (aktuellesFeld === "O") {
                            // Es ist Platz, dass der Spieler Anlauf nehmen kann
                            anzahlBewegungen++;
                            aktualisiereSpielerposition(spielerZeileIndex + bewegung * (-1), spielerSpalteIndex, sekundenAnlauf, function () {
                                aktualisiereSpielerposition(spielerZeileIndex, spielerSpalteIndex, sekundenStoss, function () {
                                    zerstoere(spielerZeileIndex + bewegung, spielerSpalteIndex);
                                });
                            });
                        }
                    }
                }
            }
        }

        // Führe eine horizonale Bewegung (links/rechts) durch
        function bewegeHorizontal(bewegung) {
            var aktuellesFeld;

            // Stelle sicher, dass sich der Spieler nicht aus den Grenzen des Labyrinths bewegt (wir haben 16 Spalten)
            if (spielerSpalteIndex + bewegung >= 0 && spielerSpalteIndex + bewegung < 16) {
                aktuellesFeld = ermittleSpielfeldelement(spielerZeileIndex, spielerSpalteIndex + bewegung);
                if (aktuellesFeld === "O") {
                    // Das Zielfeld ist leer, der Spieler kann sich hin bewegen
                    anzahlBewegungen++;
                    spielerSpalteIndex += bewegung;
                    aktualisiereSpielerposition(spielerZeileIndex, spielerSpalteIndex, sekundenProSchritt);
                } else {
                    if (aktuellesFeld === "M") {
                        // Das Zielfeld enthält ein Element, das zerstörbar ist
                        aktuellesFeld = ermittleSpielfeldelement(spielerZeileIndex, spielerSpalteIndex + bewegung * (-1));
                        if (aktuellesFeld === "O") {
                            // Es ist Platz, dass der Spieler Anlauf nehmen kann
                            anzahlBewegungen++;
                            aktualisiereSpielerposition(spielerZeileIndex, spielerSpalteIndex + bewegung * (-1), sekundenAnlauf, function () {
                                aktualisiereSpielerposition(spielerZeileIndex, spielerSpalteIndex, sekundenStoss, function () {
                                    zerstoere(spielerZeileIndex, spielerSpalteIndex + bewegung);
                                });
                            });
                        }
                    }
                }
            }
        }

Nachdem du jetzt alle *Hilfsfunktionen* programmiert hast, können wir sie mit der Tastensteuerung verknüpfen. Die folgende Grafik stellt den Scratch- und den JavaScript-Code gegenüber. Vergleiche sie und achte auf Unterschiede und Gemeinsamkeiten:

![Tastensteuerung](labyrinth/spielstart.png){: .full}

Hier der Code als Text, den du in dein Programm einfügen musst:

        function spielstart() {
            var transformation;

            // Positioniere Spieler
            spieler = svg.ellipse(0, 0, 15, 15).attr({ fill: '#5d9eff' });
            transformation = "t" + (30 + spielerSpalteIndex * 30 - 15).toString() + "," + (30 + spielerZeileIndex * 30 - 15).toString();
            spieler.transform(transformation);

            // Positioniere Ziel
            ziel = svg.g();
            ziel.add(svg.line(1, 1, 29, 29).attr({ stroke: "#373737", strokeWidth: 2, strokeLinecap: "round" }));
            ziel.add(svg.line(29, 1, 1, 29).attr({ stroke: "#373737", strokeWidth: 2, strokeLinecap: "round" }));
            transformation = "t" + (zielSpalteIndex * 30).toString() + "," + (zielZeileIndex * 30).toString();
            ziel.transform(transformation);

            document.onkeydown = function (evt) {
                // Reagiere auf Tastendruck
                evt = evt || window.event;
                if (evt.keyCode === 39) {
                    // Nach rechts
                    bewegeHorizontal(1);
                } else if (evt.keyCode === 37) {
                    // Nach links
                    bewegeHorizontal(-1);
                } else if (evt.keyCode === 40) {
                    // Nach unten
                    bewegeVertikal(1);
                } else if (evt.keyCode === 38) {
                    // Nach oben
                    bewegeVertikal(-1);
                }

                // Ermittle, ob Spieler das Ziel erreicht hat
                if (spielerSpalteIndex === zielSpalteIndex && spielerZeileIndex === zielZeileIndex) {
                    svg.rect(0, 0, 480, 360).attr({ fill: 'white', opacity: 0.75 });
                    svg.text(240, 180, "Geschafft! Du hast " + anzahlBewegungen.toString() + " Bewegungen gebraucht")
                        .attr({ fontFamily: 'sans-serif', fontSize: '20px', "text-anchor": "middle" });
                }
            };
        }

### Los gehts!

Zum Abschluss müssen wir in JavaScript noch den Programmstart programmieren. Das sind nur noch wenige Zeilen Code:

        // Hauptprogramm
        variablenFuerSpielfeldSetzen();
        baueSpielfeld();
        spielstart();

Fertig! Versuche mit dem Spieler das Ziel zu erreichen. Wie viele Bewegungen brauchst du? Fordere deine Freundinnen und Freunde heraus. Schaffen sie es genauso schnell wie du?

## Ausprobieren

Du kannst das fertige Projekt unter [https://plnkr.co/edit/eyPtep9Erl3eFVCfqzcY](https://plnkr.co/edit/eyPtep9Erl3eFVCfqzcY) ausprobieren. Dort findest du auch den kompletten Quellcode des Beispiels.
