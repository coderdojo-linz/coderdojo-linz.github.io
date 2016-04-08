---
layout: sushi
title: Geisterspiel mit Python
description: In dieser Übung erstellen wir ein erstes, einfaches Computerspiel mit Python.
---


# Geisterspiel

In dieser Übung erstellen wir ein erstes, einfaches Computerspiel mit Python.
Es wird nur ein text-basiertes UI (= **U**ser **I**nterface; deutsch: Benutzerschnittstelle) haben, d.h. wir werden Text auf dem Bildschirm lesen und Zeichen mit der Tastatur eingeben, um das Spiel zu steuern.


## Die Aufgabe

Der Geist versteckt sich zufällig hinter einer von 3 Türen.
Du entscheidest, welche Türe du öffnen möchtest.
Tippe dazu 1, 2 oder 3 und drücke die ENTER-Taste.

Unser Programm soll nun prüfen, ob der Geist sich hinter der Tür befindet und eine entsprechende Meldung ausgeben; also entweder 'Geist gefunden' und damit das Spiel verloren oder 'Kein Geist' und der Spieler darf zur nächsten Station mit wieder 3 Türen und einem zufällig versteckten Geist weitergehen.
Das Programm soll also auch mitzählen, wie oft der Spieler durch eine Tür geht, ohne dabei auf den Geist zu stoßen.

Ein möglicher Spielablauf könnte dann im Shell-Fenster so aussehen:

	Geisterspiel
	============
 
	Vor dir sind drei Türen.
	Hinter einer ist ein Geist.
	Welche Tür öffnest du?
	1, 2 oder 3? 2
	Kein Geist!
	Du bis ein Zimmer weiter.
 
	Vor dir sind drei Türen.
	Hinter einer ist ein Geist.
	Welche Tür öffnest du?
	1, 2 oder 3? 2
	GEIST!
	Lauf schnell weg!

	Game over! Deine Punkte:  1


## Bestandteile des Programms

Zunächst öffnen wir ein neues Code-Fenster, wie wir es am Ende der Ersten-Schritte-Übung für das Zeichnprogramm gemacht haben.
Dort werden wir nun unser Geisterspiel-Programm schreiben und es unter dem Namen "geisterspiel.py" speichern.

Von der ersten Übung her kennen wir auch schon ein paar Dinge, die wir hier wieder benötigen:

* Textausgabe auf dem Bildschirm mit der Funktion `print(...)`

* Variablen und Zuweisungen von Werten, z.B. `a = 1`

* Rechenoperation (auch mit Variablen), z.B. `a = a * 2`

Zusätzlich können wir noch folgende Dinge brauchen:


### Zufallszahlen

Um eine Zufallszahl zwischen 1 und 3 erzeugen zu können, muss man die Funktion `randint` aus der Bibliothek `random` importieren:

	from random import randint

und damit dann eine Tür für den Geist auswählen:

	tuer = randint(1, 3)

### Wertetypen für Variablen

Wir können in Variablen aber nicht nur Zahlen, sondern auch Text oder Wahrheitswerte speichern.

* Text:
	
		begruessung = 'Hallo'
		name = input('Wie heißt du? ')
		begruessung = begruessung + ' ' + name + '!'
		print(begruessung)

	Wie du siehst, kann man mit Text auch "rechnen" (Zeile 3) und Werte von Variablen ausgeben (Zeile 4).
	Außerdem zeigt die Zeile 2, wie man dem Benutzer Fragen stellt und die Antwort gleich in einer Variablen speichert.

* Wahrheitswerte:

		geist_gefunden = False
		du_bist_mutig = True

* Wertetyp ändern:

	Es ist auch möglich, den Typ einer Variablen zu andern. Zum Beispiel wollen wir für unser Spiel, die Eingabe der Türnummer für das Programm als Zahl und nicht als Text haben.
	Dazu können wir mit `int('3')` den Text "3" in die Zahl 3 umwandeln (*int* steht für das englische *integer*, was auf Deutsch "ganze Zahl" bedeutet).


### Steuerung des Programmablaufs


#### **Bedingungen**

Um eine Bedingung zu prüfen, gibt es den Befehl `if`, gefolgt von der Bedingung, die geprüft werden soll, und einem Doppelpunkt am Ende.
	
* Was passieren soll, wenn die Bedingung erfüllt ist, müssen wir in die nächste Zeile schreiben und - in Python ganz streng - auch noch eine Einrückung machen. Am besten mit der Tabulator-Taste (TAB).
		
	*Hinweis*: Die IDLE hilft uns aber dabei und kümmert sich automatisch um die Einrückung, nachdem wir nach dem Doppelpunkt ENTER gedrückt haben.
* Um auch festzulegen, was passieren soll, wenn die Bedingung nicht erfüllt ist, können wir anschließend, wieder in eine neue Zeile und jetzt wieder ohne die Einrückung `else:` schreiben.
	In die nächste Zeile und wieder eingerückt kommen dann die Anweisungen dazu.

* **Logische Operatoren**: Um eine Bedingung formulieren zu können, brauchen wir sogenannte logische Operatoren, die 2 Werte vergleichen und als Ergebnis den Wahrheitswert *WAHR* oder *FALSCH* liefern.
	In Python gibt es die folgenden logischen Operatoren: 
		
	* `a == b` ... a ist gleich b
	* `a != b` ... a is ungleich b
	* `a < b` ... a ist kleiner als b
	* `a > b` ... a ist größer als b
	* `a <= b` ... a ist kleiner als oder gleich b
	* `a >= b` ... a ist größer als oder gleich b

* Ein Beispiel für eine if-Anweisung:
		
		tuer = 0
		if tuer == 3:
			print('Gefunden.')
		else:
			print('Leider nicht.')


#### **Schleifen**
	
* Um Dinge zu beschreiben, die sich immer auf die gleich Art wiederholen sollen, solange eine Bedingung erfüllt ist, gibt es sogenannte Schleifen, z.B. die **while**-Schleife.
	Sie beginnt mit dem Befehl `while` gefolgt - wie bei der if-Anweisung - mit der Bedingung und abgeschlossen wird die Zeile auch wieder mit einem Doppelpunkt.
	Dann geht es in der nächsten Zeile, eingerückt mit den Anweisungen weiter, die nun wiederholt werden sollen.

* Ein Beispiel für eine while-Schleife:

		punkte = 0
		while punkte < 5:
			print('Gehe weiter.')
			punkte = punkte + 1



## Eine Lösung

Eine mögliche Lösung für das Geisterspiel könnte dann so aussehen:

<div class="alert alert-info">Versuche aber zuerst selbst eine Lösung zu erstellen, bevor du weiterliest!</div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

	# CoderDojo Linz - Geisterspiel

	from random import randint

	print('Geisterspiel')
	print('============')

	du_bist_mutig = True
	score = 0

	while du_bist_mutig:
		geistertuer = randint(1, 3)
		print(' ')
		print('Vor dir sind drei Türen.')
		print('Hinter einer ist ein Geist.')
		print('Welche Tür öffnest du?')
		tuer = input('1, 2 oder 3? ')
		tuer_nummer = int(tuer)
		if tuer_nummer == geistertuer:
	        print('GEIST!')
			print('Lauf schnell weg!')
			du_bist_mutig = False
		else:
	        print('Kein Geist!')
			print('Du bis ein Zimmer weiter.')
			score = score + 1

	print(' ')
	print('Game over! Deine Punkte: ', score)

