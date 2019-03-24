---
layout: sushi
title: Geisterspiel in C# 
description: Einfache Console-Anwendung in C# 
---

# Geisterspiel - C#

In dieser Übung erstellen wir ein erstes, einfaches Konsolenspiel mit C# (C-Sharp). Das Spiel wird
textuell gesteuert d.h Ein/-Ausgaben werden auf einer Konsole zu lesen/schreiben sein.

## Die Aufgabe
Der Geist versteckt sich zufällig hinter einer von 3 Türen. Du entscheidest, welche Türe du öffnen
möchtest. Tippe dazu 1, 2 oder 3 und drücke die ENTER-Taste.
Unser Programm soll nun prüfen, ob der Geist sich hinter der Tür befindet und eine
entsprechende Meldung ausgeben; also entweder ‘Geist gefunden’ und damit das Spiel verloren
oder ‘Kein Geist’ und der Spieler darf zur nächsten Station mit wieder 3 Türen und einem zufällig
versteckten Geist weitergehen. Das Programm soll also auch mitzählen, wie oft der Spieler durch
eine Tür geht, ohne dabei auf den Geist zu stoßen.  
Ein möglicher Spielablauf könnte dann im Konsolen-Fenster so aussehen:

```
Geisterspiel
Hinter einer Tür verbirgt sich ein Geist.
Welche Tür wählst du? 1, 2 oder 3?
1
Kein Geist gefunden!
Hinter einer Tür verbirgt sich ein Geist.
Welche Tür wählst du? 1, 2 oder 3?
1
Game over! Hier ist ein Geist!
Deine Punkte: 1
```

## Bestandteile des Programms
Zunächst öffnen wir Visual Studio IDE (Download auf https://visualstudio.microsoft.com) ODER
verwenden die Inoffizielle Online Version welche für Konsolenanwendungen wunderbar
funktioniert. (https://dotnetfiddle.net)

## Was wird benötigt?
**AUS/-EINGABE IN DER KONSOLE**  
Text ausgeben können wir in C# mit der Funktion `Console.WriteLine(...);`
Text einlesen (den Spieler auffordern etwas einzugeben) mit der Funktion `Console.ReadLine();`
Eingabe in einer String-Variable speichern `String eingabe = Console.ReadLine();`
String bedeutet das die Variable mit dem Namen “eingabe” eine beliebige Zeichenkette enthalten kann.  
Da es in C# klare Definitionen gibt welche Variable welchen Wert annehmen kann müssen wir einen Wert konvertieren um ihn zu ändern. Als Beispiel liefer `Console.Readline();` einen `String` zurück (die Eingabe vom Spieler) aber wir wollen die Zahl welche eingegeben wurde in einen `int` umwandeln das geht wie folgt:
`Convert.ToInt32(Console.ReadLine());`

**Weitere Variablen und Rechenoperationen**  
Weiters benötigen wir den Datentyp “Integer” in C# kurz mit `int` erkennbar. Solch eine Variable anlegen können wir einfach mit `int zahl = 2122;`  
Wollen wir rechnen können wir eine neue Variable erstellen oder eine bereits vorhandene überschreiben.

Neu: `int addition = zahl1 + zahl2;`  
“zahl1” überschreiben: `zahl1 = zahl1 + zahl2;`  
Das gleiche gilt für Multiplizieren, Subtrahieren und Dividieren mit * - oder /

**ZUFALLSZAHLEN**  
Um eine Zufallszahl zwischen 1 und 3 erzeugen zu können, muss man zunächst die Random-Klasse erstellen.  
`Random zufall = new Random();`  
Danach kann man mit  
`zufall.Next(1,4);`  
Eine Zufallszahl zwischen 1 und 3 generieren. (4 da die Zahl ausgeschlossen ist und wir bis 3 Werte erhalten möchten)

**WAHRHEITSWERTE (BOOLEAN)**  
In variablen könne wir aber auch true oder false speichern mit `bool variablenName = false;`
## Steuerung des Progammablaufs

**BEDINGUNGEN**

Um eine Bedingung zu prüfen gibt es den Befehl if, gefolgt von der Bedingung, die geprüft werden soll.
- Was passieren soll wenn die Bedingung erfüllt ist bestimmen wir in der nächsten Zeile nach
dem wir einen Code-Block geöffnet haben mit einer geschwungen Klammer { aber wir dürfen
nicht vergessen diese auch wieder zu schließen }. Dazwischen kommt unser Code was
passieren soll wenn die Bedingung erfüllt wurde.
- Wollen wir auch sagen was passieren soll wenn die Bedingung nicht erfüllt wurde benutzen wir
den Befehl else am ende des if Code-Blocks.
- Logische Operatoren: Um eine Bedingung formulieren zu können, brauchen wir sogenannte logische Operatoren, die 2 Werte vergleichen und als Ergebnis den Wahrheitswert TRUE oder FALSE liefern. In C# gibt es folgende Operatoren:
    - A == b ... a ist gleich b
    - A != b ... a ist ungleich b
    - A < b ... a ist kleiner als b
    - A > b ... a ist größer als b
    - A <= b ... a ist kleiner oder gleich b
    - A >= b ... a ist größer oder gleich b

Ein Beispiel für eine if Anweisung:
```csharp
int tuer = 0;
if(tuer == 1)
{
Console.WriteLine("gefunden");
}
else
{
Console.WriteLine("leider nicht gefunden");
}
```

**SCHLEIFEN**  
Um Dinge zu beschreiben die sich immer auf die gleiche Art wiederholen sollen, solange eine
Bedingung erfüllt ist, gibt es sogenannte Schleifen, z.B die while-Schleife. Sie beginnt mit dem
Befehl while gefolgt - wie bei der if-Anweisung - mit einer Bedingung und angefangen wird ebenfalls wieder mit einer geschwungenen Klammer.
Beispiel:
```csharp
int punkte = 0;
while(punkte < 5)
{
Console.WriteLine("gehe weiter");
punkte = punkte + 1;
}
```
