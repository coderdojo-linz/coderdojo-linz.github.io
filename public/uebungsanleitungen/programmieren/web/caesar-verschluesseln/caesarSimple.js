// Den folgenden Text wollen wir verschluesseln.
// Der Ausgangstext wird "Klartext" oder auf englisch "plain text" genannt.
var plainText = "Wir treffen uns nach der Schule im Park";

// Um diese Anzahl wollen wir die Zeichen im Alphabet verschieben.
// Ein positiver Wert verschiebt nach rechts, ein negativer nach links.
var verschiebung = 1;

// In dieser Variable speichern wir den verschluesselten Text.
// Der verschluesselte Text wird auf englisch "cipher text" genannt.
var cipherText;

// Hier Hilfsvariablen mit den ASCII Codes von a, z, A und Z.
// Die werden wir spaeter gleich brauchen
var charCodeKleinA = "a".charCodeAt(0);
var charCodeKleinZ = "z".charCodeAt(0);
var charCodeGrossA = "A".charCodeAt(0);
var charCodeGrossZ = "Z".charCodeAt(0);

// Hier machen wir die eigentliche Transformation eines Zeichens.
function zeichenTransformieren(charCode, startAsciiCode) {
	// charCode: Enthält den ASCII Code des Ausgangszeichens, das
	//           wir transformieren wollen
	// startAsciiCode: ASCII Code des ersten Zeichens des 
	//                 Alphabets (97 fuer "a" oder 65 fuer "A")
	
	// Als erstes berechnen wir, an welcher Stelle im Alphabet das
	// Ausgangszeichen steht. Achte darauf, dass dieser Wert mit
	// 0 (Null) zu zählen beginnt, nicht mit 1. 0 steht also für 
	// a bzw. A, 1 für b bzw. B, ...
	var indexImAlphabet = charCode - startAsciiCode;
	
	// Jetzt verschieben wir.
	var transformiertCode = indexImAlphabet + verschiebung;
	
	// Wenn wir ueber Z hinaus gehen, fangen wir am Anfang wieder an.
	// Das machen wir, indem wir die Anzahl an Buchstaben des deutschen
	// Alphabets (26) abziehen. 
	if (transformiertCode > 25) { transformiertCode -= 26; }
	
	// Beim Verschieben nach Links können wir vor dem A landen. In diesem
	// Fall muessen wir zur Korrektur die Anzahl an Buchstaben im deutschen
	// Alphabets (26) addieren.
	else if (transformiertCode < 0) { transformiertCode += 26; }
	
	// Jetzt können wir den Index im Alphabet wieder in ASCII umwandeln,
	// indem wir 97 fuer "a" oder 65 fuer "A" addieren.
	return startAsciiCode + transformiertCode;
}

// Hier machen wir die eigentliche Transformation des Textes
function textTransformieren(ausgangstext) {
	// In dieser Variable bauen wir unser Ergebnis. Wir starten
	// mit einem leeren Text.
	var ergebnis = "";

	// Wir starten mit einer Schleife ueber alle Zeichen des Textes. 
	for (var i = 0; i < ausgangstext.length; i++) {
		// Wir holen uns den ASCII Code des aktuellen Zeichens
		var charCode = ausgangstext.charCodeAt(i);
	
		// Ist es ein Buchstabe zwischen A und Z?
		if (charCode >= charCodeGrossA && charCode <= charCodeGrossZ) {
			// Verschluesseln ausgehend von "A"
			charCode = zeichenTransformieren(charCode, charCodeGrossA);
		}
		// Ist es ein Buchstabe zwischen a und z?
		else if (charCode >= charCodeKleinA && charCode <= charCodeKleinZ) {
			// Verschluesseln ausgehend von "a"
			charCode = zeichenTransformieren(charCode, charCodeKleinA);
		}

		// Wenn es kein Buchstabe sondern z.B. ein Sonderzeichen ist, 
		// lassen wir das Zeichen unverändert.
	
		ergebnis += String.fromCharCode(charCode);
	}
	
	return ergebnis;
}

// Verschlüsseln
cipherText = textTransformieren(plainText);

// Zur Kontrolle geben wir den verschluesselten Text aus.
console.log("Aus '" + plainText + "' wird '" + cipherText + "'.");

// Entschlüsseln
verschiebung *= -1;
plainText = textTransformieren(cipherText);

// Zur Kontrolle geben wir den entschluesselten Text aus.
console.log("Aus '" + cipherText + "' wird '" + plainText + "'.");
