// "chalk" ist ein Modul, mit dem man farbig markierten Text ausgeben kann.
// Fuer Details siehe https://www.npmjs.com/package/chalk.
var chalk = require("chalk");

// "fs" ist ein Modul zum Zugriff auf Dateien.
// Fuer Details siehe https://www.npmjs.com/package/fs.
var fs = require("fs");

// "minimist" ist ein Modul zum Verarbeiten von Kommandozeilenparametern.
// Fuer Details siehe https://www.npmjs.com/package/minimist.
var argv = require("minimist")(
	process.argv.slice(2),
	{
		string: ["i", "k", "o"],
		alias: { "i": "input", "k": "key", "o": "output", "d": "decrypt" },
		boolean: ["d"]
	});

// Hilfsfunktion zum Ausgeben einer Zeile der Hilfe
function printUsageLine(output) {
	console.log(chalk.cyan("help:\t") + (output || ""));
}

// Hilfsfunktion zum Ausgeben eines Hilfetextes
function printUsage() {
	printUsageLine("Encrypts a file using Caesar encryption");
	printUsageLine();
	printUsageLine("Usage: node caesar.js [options]");
	printUsageLine();
	printUsageLine("Options:");
	printUsageLine("\t-d, -decrypt\t\t\tDecryption mode");
	printUsageLine("\t-i, -input <inputFileName>\tName of the input file (utf8 text file)");
	printUsageLine("\t-o, -output <outputFileName>\tName of the output file (utf8 text file)");
	printUsageLine("\t-k, -key <index>\t\tNumberic index used for encryption");
	printUsageLine();
	printUsageLine("Examples:");
	printUsageLine("\tnode caesar.js -i myfile.txt -k 5 -o cipher.txt");
	printUsageLine("\t\tEncrypts data in myfile.txt and writes it to cipher.txt");
	printUsageLine("\tnode caesar.js -d -i cipher.txt -k 5 -o plain.txt");
	printUsageLine("\t\tDecrypts data in cipher.txt and writes it to plain.txt");
}

// Ueberpruefen, ob alle notwendigen Parameter angegeben wurden.
if (!argv.input || !argv.output || !argv.key || isNaN(argv.key)) {
	console.log(chalk.bgRed("\nInvalid Usage!\n"));
	printUsage();
	process.exit();
}

// Umwandeln des "key" Parmeters in eine Zahl inkl. Pruefung.
var keyNum = parseInt(argv.key);
if (keyNum < 0 || keyNum > 25) {
	console.log(chalk.bgRed("\nInvalid key!\n"));
	printUsage();
	process.exit();
}

// Wenn entschluesselt werden soll, nach links verschieben. Daher
// brauchen wir einen negativen Wert
if (argv.decrypt) {
	keyNum *= -1;
}

var helper = "azAZ";
var charCodeKleinA = helper.charCodeAt(0);
var charCodeKleinZ = helper.charCodeAt(1);
var charCodeGrossA = helper.charCodeAt(2);
var charCodeGrossZ = helper.charCodeAt(3);

// Transformieren eines Zeichens
function transformChar(charCode, startAsciiCode, shiftIndex) {
	var newCharCode = charCode - startAsciiCode + shiftIndex;
	if (newCharCode > 25) { newCharCode -= 26; }
	else if (newCharCode < 0) { newCharCode += 26; }
	return startAsciiCode + newCharCode;
}

// Quelldatei einlesen
fs.readFile(argv.input, "utf8", function (err, data) {
	if (err) {
		// Quelldatei konnte nicht gelesen werden
		console.log(chalk.bgRed("\nError reading input file!\n"));
		console.log(chalk.red("\t" + err));
	} else {
		// Inhalt der Datei transformieren
		var result = "";
		for (var i = 0; i < data.length; i++) {
			var charCode = data.charCodeAt(i);
			if (charCode >= charCodeGrossA && charCode <= charCodeGrossZ) {
				charCode = transformChar(charCode, charCodeGrossA, keyNum);
			}
			else if (charCode >= charCodeKleinA && charCode <= charCodeKleinZ) {
				charCode = transformChar(charCode, charCodeKleinA, keyNum);
			}

			result += String.fromCharCode(charCode);
		}

		// Transformierten Text in Zieldatei speichern
		fs.writeFile(argv.output, result, "utf8", function (err) {
			if (err) {
				// Zieldatei konnte nicht gespeichert werden
				console.log(chalk.bgRed("\nError reading input file!\n"));
				console.log(chalk.red("\t" + err));
			}
		});
	}
});