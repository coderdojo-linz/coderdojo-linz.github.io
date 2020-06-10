---
title: "JavaScript Zahlen raten"
description: "In dieser Übung programmierst du ein einfaches 'Zahlen raten' Spiel und siehst, wie man mit JavaScript Ein- und Ausgaben machen kann."
level: 1
weight: 4
---

# Zahlen raten

## Ziel der Übung

In dieser Übung programmierst du ein einfaches "Zahlen raten" Spiel und siehst, wie man mit JavaScript Ein- und Ausgaben machen kann.

Das Spiel soll folgendermaßen funktionieren: Der Computer denkt sich eine Zahl zwischen 0 und 100 aus und der Spieler muss versuchen, diese Zahl mit möglichst wenigen Versuchen zu erraten. Dazu kann er einen Tipp eingeben. Der Computer sagt dann *Niedriger* oder *Höher*, und der Spieler kann einen neuen Tipp eingeben, bis er die richtige Zahl erraten hat.

Falls du noch überhaupt keine Erfahrung mit HTML hast, wende dich an eine CoderDojo Mentorin oder einen Mentor. Sie werden dir die HTML-Basics erklären oder dir eine Übung für HTML-Grundlagen zeigen.

## Entwicklungsumgebung

JavaScript kann man wie HTML mit jedem beliebigen Texteditor programmieren. Empfehlenswert ist ein Editor, der speziell für Softwareentwicklung gedacht ist. In der [Übungsanleitung zu den Grundlagen von HTML](/trainingsanleitungen/web/html-meine-erste-webseite.html) findest du am Beginn eine Liste von solchen Editoren, die du unter Windows, Linux oder MacOS verwenden kannst. Falls du noch keinen hast, schau dir die Liste an und such dir einen aus.

## HTML Seite herunterladen

Damit du bei der Übung nicht von Null beginnen must, bekommst du hier ein Grundgerüst zum Starten.

1. Öffne den Texteditor, für den du dich entschieden hast.

2. Erstelle eine neue Textdatei. In *Visual Studio Code* geht das so: <br/>![Neue Datei in Visual Studio Code erstellen](html-meine-erste-webseite/code-neue-datei.png)

3. Gib folgenden Code in die neue Datei ein:

        <!DOCTYPE html>
        <html>
        	<head>
        		<meta charset="utf-8">
        		<title>Zahlen raten</title>
        	</head>
        	<body>
        		<h2>Zahlen raten</h2>
        		
        		<p>Versuche, die Zahl zwischen 0 und 100 zu erraten!</p>
        		
        		<div style="height: 120px">
        			<label>Dein Tipp:</label>
        			<input type="number" id="inputGuess" style="width:100px"/>
        			<button>Überprüfen</button>
        			
        			<p id="outputResult"></p>
        			<p id="outputCount"></p>
        		</div>
        	</body>
        	
        	<script type="text/javascript">
        		var inputGuess = document.getElementById("inputGuess");
        		var outputResult = document.getElementById("outputResult");
        		var outputCount = document.getElementById("outputCount");
        		
        		var number, count;
        		number = Math.floor(Math.random() * 100);
        	</script>
        </html>

4. Speichere die Datei unter dem Namen `zahlen-raten.html` ab. Öffne sie anschließend mit Doppelklick in einem Webbrowser. Du solltest folgende Seite sehen:<br/>
![HTML-Seite im Browser](javascript-zahlen-raten/html-seite.png)

5. Falls du die folgende Warnung siehst, klicke auf *Geblockte Inhalte zulassen*. Wenn man Scripts oder Programme aus dem Internet herunterlädt, muss man immer vorsichtig sein, wenn man nicht genau weiß, was sie machen. In diesem Fall wissen wir aber, dass die Datei nicht gefährlich ist.<br/>
![Warnung](javascript-zahlen-raten/script-warnung.png)

## Das Spiel

Wenn du jetzt eine Zahl eingibst und auf "Überprüfen" klickst, passiert noch nichts. Das werden wir jetzt ändern.

1. Wechsle zurück zur HTML-Datei im Texteditor. Achte darauf, dass sie aus zwei Bereichen besteht: Einen für den HTML-Code (rot) und einen für den JavaScript-Code (blau).<br/>
![HTML (rot) und Javascript (blau)](javascript-zahlen-raten/html-javascript.png)

2. Wir wollen darauf reagieren, wenn der Spieler auf *Überprüfen* klickt. Erweitere dazu den `button`-Tag im HTML-Bereich um folgenden Code. Er sorgt dafür, dass bei Klick auf den Button die Funktion `checkNumber` aufgerufen wird. Die Funktion gibt es noch nicht, wir werden sie in Kürze schreiben.

        <button onclick="checkNumber()">Überprüfen</button>

3. Ergänze außerdem den JavaScript-Bereich nach der Zeile `number = ...` um folgenden Code. Hier wird eine *Variable* namens `count` deklariert. Außerdem wird die oben erwähnte Funktion `checkNumber` angelegt. Sie erhöht den Wert des Zählers `count` und gibt den aktuellen Stand aus.

        count = 0;
    
        function checkNumber() {
    		count = count + 1;
    		outputCount.innerHTML = "Du hast bisher " + count + " Versuche gebraucht.";
        }

4. Schau dir den Code ganz genau an und versuche herauszufinden, wozu die Variable `outputCount` dient. Siehst du, wie mit Hilfe der JavaScript-Standardfunktion [`getElementById`](http://www.w3schools.com/jsref/met_doc_getelementbyid.asp) das zugehörige `p`-Tag gesucht wird? Falls du Fragen dazu hast, sprich darüber mit einem CoderDojo Mentor.<br/>
![Funktionsweise von getElementById](javascript-zahlen-raten/getElementById.png)

5. Speichere deine Änderungen, lade die Seite im Browser neu (z.B. durch Drücken der Taste F5) und klicke nochmal auf "Überprüfen". Nach jedem Klick wird jetzt die Anzahl der Versuche erhöht und anschließend angezeigt.
	
Natürlich fehlt jetzt noch der wichtigste Teil des Spiels: Die Überprüfung, ob die Zahl stimmt und der Hinweis, ob man zu hoch oder zu niedrig getippt hat. Dafür brauchen wir noch etwas mehr JavaScript Code.

## Höher oder niedriger?

Jetzt können wir die eingegebene Zahl mit der Zahl des Computers vergleichen.

1. Wechsle zurück zur HTML-Datei im Texteditor. 

2. Füge den folgenden Code am Beginn der Funktion `checkNumber` ein, also vor `count = count + 1;`. Achte darauf, das beim dritten Vergleich wirklich zwei Ist-Gleich-Zeichen hintereinander stehen!

        var guess = parseInt(inputGuess.value);			
        if (guess < number)
            outputResult.innerHTML  = "Dein Tipp war zu niedrig.";
        else if (guess > number)
            outputResult.innerHTML  = "Dein Tipp war zu hoch.";
        else if (guess == number)
            outputResult.innerHTML  = "Richtig!";		

5. Speichere deine Änderungen, lade die Seite im Browser neu (z.B. durch Drücken der Taste F5). Jetzt kannst du dein Spiel schon einmal bis zum Ende spielen! Wie viele Versuche brauchst du, bis du die Zahl erraten hast? Schaffst du es unter 10?

## Spiel neu starten

Wenn du das Spiel neu starten willst, musst du die Seite neu laden. Lass uns das im letzten Schritt noch einfacher machen.

1. Wechsle zurück zur HTML-Datei im Texteditor. 

2. Im HTML-Code legen wir einen eigenen Button für den Neustart des Spiels an. Ergänze dazu im HTML-Bereich folgende Code-Zeile:

        <button onclick="newGame()">Neu beginnen</button>

3. Damit hast du einen Button, aber es passiert noch nichts wenn du darauf klickst. Dafür müssen wir erst die beim Button angegebene Funktion `newGame` anlegen. Erweitere dazu den JavaScript-Bereich um folgende Codezeilen.

        function newGame() {
            number = Math.floor(Math.random() * 100);
            count = 0;
    	
            inputGuess.value = "";
            outputResult.innerHTML = "";
            outputCount.innerHTML = "";
        }
	
4. Schau dir die Codezeilen genau durch. Entdeckst du die Funktionen, die mit `Math.` beginnen? Das sind mathematische Funktionen von JavaScript. [Hier](http://www.w3schools.com/jsref/jsref_obj_math.asp) findest du eine Beschreibung aller dieser Funktionen. Such die Beschreibung von `Math.floor` und `Math.random` heraus und lies nach, was die beiden Funktionen machen.

5. Speichere deine Änderungen, lade die Seite im Browser neu (z.B. durch Drücken der Taste F5). Jetzt kannst du das Spiel jederzeit neu starten.

Die fertige Datei kannst du [hier](javascript-zahlen-raten/zahlen-raten-final.html) herunterladen.

## Wie geht's weiter?

Wenn du noch weiterprogrammieren willst, hier noch ein paar Ideen:

1. Nach dem ersten Versuch ist der angezeigte Text noch etwas unschön: "Du hast bisher 1 Versuche gebraucht." Besser wäre "Du hast bisher 1 Versuch gebraucht." (Einzahl)

2. Lass den Computer genauere Hinweise geben: "Dein Tipp war viel zu hoch." oder "Fast! Dein Tipp war ein bisschen zu niedrig."

3. Wähle (zufallsbasiert) zwischen verschiedenen gleichbedeutenden Antworten: "Dein Tipp war zu hoch.", "Nein, das ist zu hoch.", "Du musst niedriger tippen."

4. Wenn du schon etwas Erfahrung mit JavaScript gesammelt hast, kannst du das [JavaScript Quiz auf w3schools](http://www.w3schools.com/js/js_quiz.asp) probieren. Wie viele Fragen kannst du richtig beantworten? Lies nach, um dein HTML-Wissen noch zu erweitern.

4. Möchtest du deine Webseite etwas schöner gestalten? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/erste-schritte-mit-css.html).

4. Möchtest du deine Webseite im Internet veröffentlichen? Ein Übungsbeispiel dafür findest du [hier](/trainingsanleitungen/web/dreamspark-azure.html).