var svg = Snap("#svg");
var buchstaben = "fjdkslaöghärueiwoqptzüvnbmcxy";
var level;
var treffer;
var fehler;
var spielAktiv;

starteSpiel();

// setzt alle Variablen auf den Ausgangswert und starte dann das Spiel
function starteSpiel() {
    // variablen initialisieren
    level = 1;
    treffer = 0;
    fehler = 0;
    spielAktiv = true;
    
    datenAusgeben();
    neuerBuchstabe();
}

// gibt die Anzahl der Treffer und die Anzahl der Fehler aus
function datenAusgeben() {
    document.getElementById("anzahlFehler").innerText = fehler.toString();
    document.getElementById("anzahlTreffer").innerText = treffer.toString();
}

// zeigt einen neuen Buchstaben der getippt werden soll im Spiel an
function neuerBuchstabe() {
    if (spielAktiv) {
        // bestimme x und y position und den angezeigten Buchstaben
        var x = getRandomInt(40, 760);
        var y = 20;
        var buchstabe = buchstaben[getRandomInt(0, level)];

        // male mit SVG einen Kreis und den Buchstaben und gruppiere die beiden
        var kreis = svg.circle(x, y, 20).attr({ fill: "yellow" });
        var text = svg.text(x - 5, y + 8, buchstabe);
        var figur = svg.g(kreis, text);

        // weise der Figur den Buchstaben zu und einen boolean Wert getippt, der true wird
        // sobald der Buchstabe getippt wurde
        figur.data("buchstabe", buchstabe);
        figur.data("getippt", false);

        // bewege die Figur in vier Sekunden zum unteren Ende des SVG Bereichs
        figur.animate({ transform: "translate(0, 500)" }, 4000, null, function () {
            // nach Ablauf der Animation entferne die Figur vom Spiel wenn sie noch nicht
            // getippt wurde und erhöhe die Anzahl der Fehler um eins
            if (!figur.data("getippt")) {
                figur.remove();
                fehler++;
                datenAusgeben();
            }
        });

        // rufe die Funktion neuerBuchstabe in einer Sekunde erneut auf
        setTimeout(neuerBuchstabe, 1000);
    }
}

// gibt eine Zufallszahl zwischen min (inklusive) und max (inklusive) zurück 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reagiert wenn eine Taste gedrückt wird
document.onkeyup = function (event) {
    // finde alle Figuren im Spiel
    var figuren = svg.selectAll("g");
    if (figuren) {
        // suche in den Figuren jene, deren Buchstabe mit dem gedrückten Buchstaben 
        // übereinstimmt und die noch nicht getippt wurden
        var trefferFiguren = figuren.items.filter(function (figur) {
            return figur.data("buchstabe") == event.key && !figur.data("getippt");
        });

        // wenn eine Figur gefunden wurde, dann wurde ein richtiger Buchstabe gedrückt,
        // sonst erhöhe die Anzahl der Fehler
        if (trefferFiguren.length > 0) {
            buchstabeGetippt(trefferFiguren[0]);
        } else {
            fehler++;
        }

        datenAusgeben();
    }
};

// zeigt an, dass eine richtige Taste gedrückt wurde
function buchstabeGetippt(figur) {
    // ändere den Wert getippt der Figur auf true
    figur.data("getippt", true);

    // vergrößere den Kreis und ändere die Farbe auf hellgrün über eine halbe Sekunde
    figur.select("circle").animate({ r: 40, fill: "lightgreen" }, 500, function () {
        // nach der Animation entferne die Figur vom Spiel
        figur.remove();
    });

    // erhöhe die Anzahl der Treffer um eins
    treffer++;

    // erhöhe das Level alle 5 Treffer
    if (treffer % 5 == 0) {
        level++;
    }
}