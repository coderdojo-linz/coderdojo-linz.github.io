---
title: Schriftlich Multiplizieren mit Python
description: Formattierte Textausgabe mit Python
author: Stöcher Wolfgang, Steyr
aliases:
  - /trainingsanleitungen/python/python-schriftlich-multiplizieren.html
---

# Schriftlich Multiplizieren mit Python

Es wäre doch nett, wenn ein Programm das schriftliche Multiplizieren
mit allen Zwischenschritten vorführen könnte? 
Für die Faktoen `345` und `789` soll das Programm z.B. folgendes ausgeben:

```shell
 345 x 789
 ---------
2415
 2760
  3105
------
272205
```

# Allgemeines zur Programmiersprache Python

Wir verwenden für die Programmierung die Programmiersprache Python (siehe die Python Homepage [www.python.org](https://www.python.org/)),
genauer gesagt Python 3, also eine Version von Python, deren Bezeichnung mit 3 beginnt, z.B. Python 3.7.1.
Zu Beginn ist es am einfachsten, wenn du Python-Programme online im Browser (z.B. auf [www.onlinegdb.com/online_python_interpreter](https://www.onlinegdb.com/online_python_interpreter))
entwickelst und ausführst. 

Wenn du Python-Programme lokal auf einem Rechner entwickeln und laufen lassen möchtest, muss Python installiert sein. 
Hilfe dazu findest du auf der [Python Homepage](https://www.python.org/about/gettingstarted/) und im Python Wiki (siehe [wiki.python.org](https://wiki.python.org/moin/BeginnersGuide/Download)).


# Einfaches Hantieren mit Zeichenketten

Um Zahlen und Text formattiert ausgeben zu können, müssen wir uns zuerst mit Zeichenketten (englisch: "strings") beschäftigen.
Starte eine interaktive Python-Umgebung (z.B. IDLE oder online unter [http://brython.info/tests/console.html](http://brython.info/tests/console.html)), um die folgenden Beispiele gleich ausprobieren zu können.

Der Datentyp für Zeichenketten wird in Python mit `str` bezeichnet. Eine konkrete Zeichenkette wird unter Hochkommas geschrieben:
```python
"Das ist ein Text."
```
Man kann doppelte, aber auch einfache Hochkommas verwenden:
```python
'Schon wieder ein Text.'
```

Will man eine Zahl in eine Zeichenkette umwandeln, gibt es mehrere Möglichkeiten. 
Standardmäßig verwendet man in Python zum Umwandeln in den Typ `str` eine Funktion mit eben diesem Namen:
```python
str(3)
```

Mit Zeichenketten kann man in Python auch "rechnen". Versuche einmal folgende Ausdrücke:
```python
"Hallo!" + "Hallo!"
 3 * "Hallo!"
```

Damit haben wir alles zusammen, was wir für das Zusammenbauen der Ausgabe des schriftlichen Rechnens brauchen.


# Ausgabe der Aufgabe

Jetzt wollen wir mit der Erstellung des Programms beginnen.
Die erste Zeile einer schriftlichen Multiplikation zeigt die beiden Faktoren mit `x` getrennt.
Das können wir in Python so zusammenbauen:
```python
faktor1 = 345
faktor2 = 789
aufgabe = str(faktor1) + ' x ' + str(faktor2)
```
Zur besseren Lesbarkeit haben wir das Multiplikationszeichen `x` noch mit Leerzeichen umgeben.

Zum Unterstreichen bzw. Trennen von den nachfolgenden Zwischenprodukten wollen in der nächsten Zeile soviele Minuszeichen (`-`) aneinanderhängen,
wie es Zeichen in der ersten Zeile gibt. Für die gerade angegebenen Faktoren sind das neun Zeichen, also brauchen wir den String
```python
'---------'
```
Da sich die Länge mit verschiedenen Faktoren ändern kann, wollen wir das nicht fix in das Programm schreiben, 
sondern passend zur Länge des Strings in der Variable `aufgabe` bestimmen.
Die Länge einer Zeichenkette kann man in Python mit der Funktion `len` auslesen. 
Und mit dem Multiplikationsoperator `*` kann man Strings vervielfältigen:
```python
zeileTrennen1 = len(aufgabe) * '-'
```
Der String in der Variable `zeileTrennen1` enthält nun genau so viele Zeichen wie der String in `aufgabe`.


# Einfaches Hantieren mit Listen

Zum Verwalten der Zwischenprodukte brauchen wir noch einen neuen Datentyp: die Liste.
In Python können Listen ganz einfach angelegt werden:
```python
zahlenListe = [2, 3, 5, 7, 11]
wortListe = ['Wasser', 'Fisch', 'Sonne']
gemischteListe = [1, 'zwei', 3, 'vier']
```
Die leere Liste wird mit `[]` angegeben.

Die Elemente einer Liste können über ihren Index angesprochen werden, wobei hier bei **Null** (`0`) zu zählen begonnen wird.
Das erste Element einer Liste erhält man daher z.B. so: `zahlenListe[0]`.

Mit Listen kann man ganz ähnlich "rechnen" wie mit Zeichenketten. Experimentiere mit diesen Ausdrücken:
```python
[1, 2, 3] + [4, 5, 6]
3 * ['eins', 'zwo']
```

Um ein Element an eine Liste anzuhängen, kann man die Listenmethode `append` verwenden:
```python
zahlenListe.append(13)
wortListe.append('Strand')
```

# Die Zwischenprodukte

Beim schriftlichen Multiplizieren wird der erste Faktor mit jeder Ziffer des zweiten Faktors multipliziert.
Dazu müssen wir den zweiten Faktor in seine Ziffern zerlegen. Das geht am einfachsten, indem wir ihn
in einen String umwandeln und dann die einzelnen Zeichen auslesen und wieder in eine Zahl zurückwandeln.
Um die Zeichen in einer Schleife nacheinander abhandeln zu können, lernen wir noch die `for`-Schleife von Python kennen:
```python
ziffern2 = []
for zifferZeichen in str(faktor2):
  ziffer = int(zifferZeichen)
  ziffern2.append(ziffer)
```
Wenn `faktor2` den Wert `789` hat, dann durchläuft die Variable `zifferZeichen` nacheinander die
Zeichen `'7'`, `'8'` und `'9'`. Zurück in eine Zahl verwandelt und nacheinander an die vorerst leere
Liste in `ziffern2` angehängt, erhält man zuletzt in der Variable `ziffern2` die Liste `[7, 8, 9]`.

Python erlaubt außerdem eine sehr kompakte Schreibweise, um aus den (verarbeiteten) Elementen einer Liste eine neue Liste
zu generieren. Obige 4 Zeilen lassen sich damit in einer Zeile ausdrücken:
```python
ziffern2 = [int(zifferZeichen) for zifferZeichen in str(faktor2)]
```

Die Zwischenprodukte kann man jetzt ähnlich kompakt erzeugen. Da wir mit den Zwischenprodukten nicht weiterrechnen werden,
sondern sie nur noch für die Ausgabe brauchen, wollen wir sie gleich auch in Zeichenketten umwandeln:
```python
zwischenProdukte_str = [str(faktor1*ziffer) for ziffer in ziffern2]
```
Für die oben angegebenen Faktoren `345` und `789` würde die Variable `zwischenProdukte_str` jetzt diese Liste enthalten:
`[str(345*7), str(345*8), str(345*9)]`, ausgewertet also `['2415', '2760', '3105']`.


# Das Ausrichten der Zeilen

Bevor wir die ganzen Zeilen ausgeben und vorher noch ausrichten, müssen wir sie noch um das Ergebnis und eine Trennlinie
davor ergänzen. Die Ausgabezeile für das endgültige Produkt lässt sich sehr einfach bestimmen:
```python
produkt_str = str(faktor1*faktor2)
```
Die Trennzeile davor soll genauso lang sein, also wieder aus entsprechend vielen Minuszeichen bestehen:
```python
zeileTrennen2 = len(produkt_str) * '-'
```

Jetzt haben wir alle notwendigen Zeichenketten beisammen. Würden wir sie aber in der jetzigen Form nacheinander ausgeben,
würden wir folgendes erhalten:
```shell
345 x 789
---------
2415
2760
3105
------
272205
```

Wir müssen die Zeilen also durch Einfügen von Leerzeichen jeweils am Anfang noch ausrichten. Dazu wollen wir von unten beginnen.
Das endgültige Produkt und die Trennzeile davor passen schon. Das letzte Zwischenprodukt muss rechts am Ergebnis ausgerichtet werden,
die zughörige Spalte berechnet sich daher ganz einfach über die Anzahl der Zeichen:
```python
produktAnschlagRechts = len(produkt_str)
```
Siehe dazu auch diese Grafik zur Veranschaulichung der Anschläge an der rechten Seite und der Einrückungen:

{{< imgblock "img/SchriftlichMultiplizieren_AnschlägeRechts_80p.png" "Schriftlich multiplizieren" >}}{{< /imgblock >}}

Jedes Zwischenprodukt davor muss rechts um ein Zeichen weiter links ausgerichtet werden. Für das erste Zwischenprodukt
erhalten wir daher diese Anschlagsspalte:
```python
zwischen1AnschlagRechts = produktAnschlagRechts - len(ziffern2) + 1
```
Der erste Faktor muss rechts an derselben Spalte angeschlagen werden. Seine Einrückung ergibt sich
nun aus den von seiner Länge noch fehlenden Zeichen, was auch gleichzeitig die Einrückung der ersten Zeile und ihrer Unterstreichung ergibt:
```python
einrueckenFaktor1 = zwischen1AnschlagRechts - len(str(faktor1))
zeileAufgabe  = einrueckenFaktor1*' ' + aufgabe
zeileTrennen1 = einrueckenFaktor1*' ' + len(aufgabe)*'-'
```
Die Zwischenzeilen müssen nun aus den Zwischenprodukten in ähnlicher Weise durch Einrücken erstellt werden:
```python
zwischenZeilen = []
zwischenAnschlagRechts = zwischen1AnschlagRechts
for prod_str in zwischenProdukte_str:
    einruecken = zwischenAnschlagRechts - len(prod_str)
    prodZeile = einruecken*' ' + prod_str
    zwischenZeilen.append(prodZeile)
    zwischenAnschlagRechts += 1
```

# Das gesamte Programm

Das Erzeugen der Ausgabezeilen wollen wir noch in eine Funktion auslagern. 
Wenn wir die obigen Programmteile in eine passende Reihenfolge bringen und eine Schleife zum Anzeigen der Ausgabezeilen hinzufügen, dann sieht unser Code so aus:
```python
def schriftlichMultiplizieren(faktor1, faktor2):
    ziffern2 = [int(z) for z in str(faktor2)]
    zwischenProdukte_str = [str(faktor1*ziffer) for ziffer in ziffern2]
    produkt_str = str(faktor1*faktor2)
    
    produktAnschlagRechts = len(produkt_str)
    zwischen1AnschlagRechts = produktAnschlagRechts - len(ziffern2) + 1
    
    aufgabe = str(faktor1) + ' x ' + str(faktor2)
    einrueckenFaktor1 = zwischen1AnschlagRechts - len(str(faktor1))
    zeileAufgabe  = einrueckenFaktor1*' ' + aufgabe
    zeileTrennen1 = einrueckenFaktor1*' ' + len(aufgabe)*'-'
    zwischenZeilen = []
    zwischenAnschlagRechts = zwischen1AnschlagRechts
    for prod_str in zwischenProdukte_str:
        einruecken = zwischenAnschlagRechts - len(prod_str)
        prodZeile = einruecken*' ' + prod_str
        zwischenZeilen.append(prodZeile)
        zwischenAnschlagRechts += 1
    zeileTrennen2 = len(produkt_str)*'-'
    zeileProdukt = produkt_str

    zeilenOben  = [zeileAufgabe, zeileTrennen1]
  zeilenUnten = [zeileTrennen2, zeileProdukt]
    return zeilenOben + zwischenZeilen + zeilenUnten

faktor1 = 345
faktor2 = 789
zeilen = schriftlichMultiplizieren(faktor1, faktor2)
for zeile in zeilen:
    print(zeile)
```

Verschiedene Multiplikationen (lose zusammengestellt) würden dann so aussehen:

{{< imgblock "img/SchriftlichMultiplizieren.png" "Schriftlich multiplizieren" >}}{{< /imgblock >}}

# Erweiterungsmöglichkeiten

Willst du das Programm noch ausbauen? Folgende Ideen dazu:

* Wenn der zweite Faktor nur eine Stelle hat, gibt es nur ein Zwischenprodukt, das auch gleich als Ergebnis verwendet werden kann.
  Die zweite Trennzeile und das endgültige Ergebnis kann man also weglassen.
* Wenn der zweite Faktor eine Ziffer `0` enthält, dann ist auch das entsprechende Zwischenprodukt gleich `0`.
  Dafür braucht man aber keine eigene Zeile. Man kann diese `0` an das vorige Zwischenergebnis anhängen.

**Aufgabe für Fortgeschrittene :** Schreibe ein Programm für die schriftliche Division!

