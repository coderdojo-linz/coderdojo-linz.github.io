---
layout: sushi
title: Verschlüsseln mit JavaScript
description: In dieser Übung programmierst du deine eigene Verschlüsselung 
---

# Verschlüsseln mit JavaScript

## Ziel der Übung

In dieser Übung lernst du ein einfaches Verschlüsselungsverfahren kennen.

Technisch lernst du einige Dinge über JavaScript und Node.js:

* Wie programmiert man ein Kommandozeilenprogramm mit JavaScript?
* Was sind [ASCII](https://de.wikipedia.org/wiki/ASCII){:target="_blank"} Codes?
* Wie arbeitet man in JavaScript mit Zeichenketten?

**Bitte beachte, dass dieses Beispiel keine Übung für Anfänger ist!** Falls JavaScript, Node.js und [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} für dich neu sind, mache dich erst mit diesen Technologien und Werkzeugen vertraut. Dazu sind folgende Übungsbeispiele zu empfehlen:

* JavaScript Grundlagen: [Zahlen raten](http://coderdojo-linz.github.io/trainingsanleitungen/web/javascript-zahlen-raten.html)
* Node.js Grundlagen: [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html)

## Systemvoraussetzungen

Du brauchst für diese Übung die gleichen Tools, die schon in der oben genannten Übung [Ein Webserver mit Node.js](http://coderdojo-linz.github.io/trainingsanleitungen/web/nodejs-webserver.html) erwähnt sind. Falls du die Übung schon gemacht hast, hast du schon alle notwendigen Tools. Falls nicht, schau dort bitte nach.

Du kannst das Beispiel unter Windows, Linux oder MacOS bauen. Alle verwendeten Tools sind plattformunabhängig.

## Die Verschlüsselung

Bevor wir zu programmieren beginnen können, müssen wir uns überlegen, wie wir verschlüsseln möchten. Dafür nehmen wir uns ein Beispiel an einer berühmten Person, dem römischen Feldherrn [Gaius Julius Caesar](https://de.wikipedia.org/wiki/Julius_Caesar){:target="_blank"}. Er hat die nach ihm benannte [Caesar Verschlüsselung](https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung){:target="_blank"} erfunden.

Bei dieser Verschlüsselung wird jeder Buchstabe der zu verschlüsselnden Nachricht (*Klartext* genannt) um eine bestimmte Anzahl an Buchstaben im Alphabet "nach rechts" verschoben. Hier ein Beispiel: Nehmen wir an, ihr möchtet den Text *GEHEIM* verschlüsseln. Ihr einigt euch mit dem Empfänger der verschlüsselten Nachricht auf den Schlüssel *2*. Daher müssen wir jeden Buchstaben um zwei Stellen im Alphabet verschieben, um zu verschlüsseln: 

* Aus *G* wird *I*
* Aus *E* wird *G*
* Aus *H* wird *J*
* Aus *E* wird *G*
* Aus *I* wird *K*
* Aus *M* wird *O*

Zum Entschlüsseln verschiebt der Empfänger einfach um zwei Stellen nach links. Jemand, der lauschen möchte, erfährt nur *IGJGKO* und kann damit nichts anfangen.

Aufpassen muss man, wenn man durch die Verschiebung über das Ende des Alphabets hinaus kommt. Will man zum Beispiel *X* um drei Stellen verschieben, gehen einem die Buchstaben aus. Die Lösung ist, dass man einfach wieder bei *A* beginnt. Aus *X* wird also *A*. Hier siehst du das Prinzip grafisch dargestellt (Quelle: [Wikipedia](https://de.wikipedia.org/wiki/Caesar-Verschl%C3%BCsselung){:target="_blank"}):

![Caesar Verschlüsselung](caesar-verschluesseln/caesar-wikipedia.png)

## Übung auf Papier

Bevor wir programmieren, probieren wir die Verschlüsselung manuell aus.

1. Suche dir jemanden, der die Übung mit dir macht. Im CoderDojo findest du sicher andere Coder, die mit dir diese Übung machen werden. Falls nicht hilft eine Mentorin oder ein Mentor gerne weiter. 

1. Nimm dir Stift und Papier.

2. Denk dir ein Wort aus, das du verschlüsseln möchtest. Es könnte z.B. *AKTEX* sein. Du kannst aber auch ein eigenes Wort nehmen. Schreibe dieses Ausgangswort auf ein Blatt Papier.

3. Unser Schlüssel ist 5. Gehe daher dein Ausgangswort (hier *AKTEX*) durch und verschlüssle Zeichen für Zeichen, indem du jedes Zeichen um *fünf Stellen nach rechts* verschiebst. Schreibe das Ergebnis auf ein zweites Blatt.

4. Gib das Blatt mit dem verschlüsselten Wort deinem Übungspartner.

5. Als Übungspartner musst du die Verschlüsselung rückgängig machen. Dazu gehst du das verschlüsselte Wort Zeichen für Zeichen durch und verschiebst jeweils *nach links*.

6. Überprüft, ob am Ende wieder das Ausgangswort herausgekommen ist.

## Grundgerüst für das Programm

Genug Theorie, lasst uns verschlüsseln.

1. Starte [Visual Studio Code](https://code.visualstudio.com/ "Homepage von Visual Studio Code"){:target="_blank"} oder deinen Lieblingseditor für JavaScript.

2. Lege dir eine neue Programmdatei namens `caesar.js` an.

3. Füge das folgende Grundgerüst in die neue Programmdatei ein. Achte auf die im Code enthaltenen Kommentarzeilen. Mache dich mit dem Code vertraut. Bei Unklarheiten wende dich an eine CoderDojo Mentorin oder einen Mentor.

        // Den folgenden Text wollen wir verschluesseln.
        // Der Ausgangstext wird "Klartext" oder auf englisch "plain text" genannt.
        var plainText = "Wir treffen uns nach der Schule im Park";
        
        // Um diese Anzahl wollen wir die Zeichen im Alphabet verschieben.
        var verschiebung = 1;
        
        // In dieser Variable speichern wir den verschluesselten Text.
        // Der verschluesselte Text wird auf englisch "cipher text" genannt.
        var cipherText;
        
        // HIER FOLGT UNSER VERSCHLUESSELUNGSMECHANISMUS
        
        // Zur Kontrolle geben wir den verschluesselten Text aus.
        console.log("Aus '" + plainText + "' wird '" + cipherText + "'.");
        
        // HIER FOLGT UNSER ENTSCHLUESSELUNGSMECHANISMUS
        
        // Zur Kontrolle geben wir den entschluesselten Text aus.
        console.log("Aus '" + cipherText + "' wird '" + plainText + "'.");

4. Probiere das Programm aus. Dazu startest du ein Kommandozeilenfenster und wechselst mit dem Kommando `cd` (*Change Directory*) in das Verzeichnis, in dem du deine Programmdatei gespeichert hast. Falls du noch nicht weißt, wie das geht, sprich eine CoderDojo Mentorin oder einen Mentor an.

5. Starte dein Programm mit `node caesar.js`. Die Ausgabe sollte so aussehen. Lass dich von dem Wort *undefined* nicht abschrecken. Das verschwindet sobald wir die eigentliche Verschlüsselung eingefügt haben. 

        Aus 'Wir treffen uns nach der Schule im Park' wird 'undefined'.
        Aus 'undefined' wird 'Wir treffen uns nach der Schule im Park'.

## Verschlüsseln

Damit du das Programm zum Verschlüsseln programmieren kannst, musst du verstehen, was der [ASCII Standard](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange){:target="_blank"} ist. Er ordnet jedem Zeichen (z.B. Buchstaben, Ziffern, Sonderzeichen etc.) eine Zahl zwischen 0 und 255 zu. In [Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange#ASCII-Tabelle){:target="_blank"} findest du eine Tabelle mit allen Zeichen und den zugehörigen Zahlen.

## Verschlüsseln

Jetzt können wir verschlüsseln. 

1. Suche im zuvor erstellten Programmgrundgerüst die Zeile `// HIER FOLGT UNSER VERSCHLUESSELUNGSMECHANISMUS`.

2. Füge die folgenden Zeilen an dieser Stelle ein. Nicht erschrecken, der Großteil der Zeilen sind Kommentare, die dir beim Verständnis des Codes helfen sollen. Mache dich mit dem Code vertraut. Bei Unklarheiten wende dich an eine CoderDojo Mentorin oder einen Mentor.

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
        	
        	// Wenn wir ueber Z hinaus kommen, fangen wir am Anfang wieder an.
        	// Das machen wir, indem wir die Anzahl der Buchstaben des deutschen
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
        	
                // Wir haengen das transformierte Zeichen an das Ergebnis 
        		ergebnis += String.fromCharCode(charCode);
        	}
        	
        	return ergebnis;
        }
        
        // Verschlüsseln
        cipherText = textTransformieren(plainText);

1. Suche im zuvor erstellten Programmgrundgerüst die Zeile `// HIER FOLGT UNSER ENTSCHLUESSELUNGSMECHANISMUS`.

2. Füge die folgenden Zeilen an dieser Stelle ein. Mache dich mit dem Code vertraut. Bei Unklarheiten wende dich an eine CoderDojo Mentorin oder einen Mentor.

        // Entschlüsseln
        verschiebung *= -1;
        plainText = textTransformieren(cipherText);

4. Geschafft! Probiere das Programm aus. Wie schon zuvor startest du dazu dein Programm mit `node caesar.js`. Der Text am Anfang und am Ende müssen übereinstimmen. 

        Aus 'Wir treffen uns nach der Schule im Park' wird 'Xjs usfggfo vot obdi efs Tdivmf jn Qbsl'.
        Aus 'Xjs usfggfo vot obdi efs Tdivmf jn Qbsl' wird 'Wir treffen uns nach der Schule im Park'.

## Kompletter Code

Den kompletten Code dieser Übung kannst du dir [hier](caesar-verschluesseln/caesarSimple.js){:target="_blank"} ansehen.

## Weitere Übungen

1. Finde heraus, welche Schwächen diese Verschlüsselung hat. Könntest du verschlüsselten Text knacken, ohne den Schlüssel zu kennen? Wie würdest du vorgehen? Diskutiere deine Ideen mit einer CoderDojo Mentorin oder einem Mentor.

2. Du bist schon so richtig erfahren mit JavaScript und Node.js? Dann könntest du das Beispiel um folgende Anforderungen erweitern:
  * Lies den Ausgangstext aus einer Datei und schreibe den verschlüsselten Text in eine Datei. Tipp: Verwende zum Zugriff auf Dateien das NPM Modul `fs`.
  * Lass die Dateinamen als Parameter über die Kommandozeile übergeben. Tipp: Verwende zum Verarbeiten der Kommandozeilenparameter das NPM Modul `minimist`. 
  * Gib bei falschen Kommandozeilenparameter einen Hilfetext aus. Tipp: Verwende zum Ausgeben von färbigem Text das NPM Modul `chalk`.
  * Eine Musterlösung für diese erweiterte Variante des Beispiels findest du [hier](caesar-verschluesseln/caesar.js){:target="_blank"}.