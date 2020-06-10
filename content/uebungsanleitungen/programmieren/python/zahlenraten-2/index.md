---
title: Zahlen raten mit Python - Teil 2
description: Jetzt wollen wir die Rollen tauschen und den Computer eine vom Menschen gedachte Zahl erraten lassen.
author: Stöcher Wolfgang, Steyr
aliases:
  - /trainingsanleitungen/python/python-zahlenraten-2.html
---

# Zahlen raten mit Python Teil 2

Kennst du den [ersten Teil](python-zahlenraten.html), wo wir ein Programm entwickelt haben,
das sich eine Zahl ausdenkt und den Spieler erraten lässt?
Jetzt wollen wir die Rollen tauschen und den Computer eine vom Menschen gedachte Zahl erraten lassen.
Der Computer fragt zuerst, wie groß die gedachte Zahl höchstens sein kann, und beginnt dann
mit dem Raten. Der Spieler gibt nach jedem Versuch an, ob die vom Computer ausgespuckte Zahl zu klein, zu groß
oder richtig war.

<!--(insert PythonAllgemeines.md.html here)-->

# Den erlaubten Zahlenbereich abfragen

Wir wollen annehmen, dass der Bereich, in dem die gedachte Zahl liegt, immer bei `1` beginnt.
Jetzt muss das Programm noch die höchste erlaubte Zahl abfragen. 
Dazu verwenden wir die Funktion `input`, die eine Zeile Text einliest:

```python
zahlMax_text = input('Wie groß kann die gedachte Zahl höchstens sein? ')
```

Wenn man z.B. hier die Zahl `30` eingibt und sich gleich wieder ausgeben lässt,

```python
print(zahlMax_text)
```

erhält man 

```shell
'30'
```

Die Hochkommas rund um die eingegebene Zahl zeigen an, dass das Programm die Eingabe noch nicht als Zahl
sondern als Zeichenkette (englisch: "string") interpretiert.
Python verwendet dafür das Kürzel `str`. Wenn man sich den Typ der Variable `zahlMax_text`
mit `type(zahlMax_text)` bzw.

```python
print(type(zahlMax_text))
```

anzeigen lässt, erhält man folgende Ausgabe:

```shell
<class 'str'>
```

In Python 3 sind alle vordefinierten Typen als Klassen implementiert, das heißt sie unterscheiden sich in der Verwendung nicht
von selbst definierten Klassen.

Den Text müssen wir in eine Zahl umwandeln. 
Ganze Zahlen haben in Python den Typ `int` (ein Kürzel für die englische Bezeichnung "integer").
Wenn man sich den Typ einer ganzen Zahl z.B. mit

```python
print(type(1))
```

anzeigen lässt, erhält man folgende Ausgabe:

```shell
<class 'int'>
```

Die Funktion zum Umwandeln in eine ganze Zahl heißt auch `int`:

```python
zahlMax = int(zahlMax_text)
```

Wenn wir uns jetzt die Variable `zahlMax` nach einer Eingabe von z.B. `30` zusammen mit ihrem Typ anzeigen lassen (`print(zahlMax, type(zahlMax)`),
erhalten wir 

```shell
30 <class 'int'>
```


# Ausnahmebehandlung

Bevor wir mit dem Raten fortsetzen, wollen wir uns noch kurz mit unerwarteten Eingaben beschäftigen.
Was passiert mit unserem bisherigen Programm
```python
zahlMax_text = input('Wie groß kann die gedachte Zahl höchstens sein? ')
zahlMax = int(zahlMax_text)
```

wenn das Programm als Eingabe gar keine Zahl erhält, sondern z.B. einen Text wie `egal` oder gar eine leere Eingabe?
In so einem Fall würde unser bisheriges Programm (abgespeichert in einer Datei namens `Zahlenraten2.py`) mit einer Fahlermeldung abbrechen:

```
Traceback (most recent call last):
  File "Zahlenraten2.py", line 2, in <module>
    zahlMax = int(zahlMax_text)
ValueError: invalid literal for int() with base 10: 'egal'
```

Die Umwandlungsfunktion `int` bricht mit einem `ValueError` ab, da das Argument `'egal'` nicht in eine Zahl umgewandelt werden kann.
Diese Ausnahmesituation (englisch: "exception") möchten wir abfangen. Dafür gibt es in Python die `try`-`except`-Kombination:
```python
try:
  zahlMax_text = input('Wie groß kann die gedachte Zahl höchstens sein? ')
  zahlMax = int(zahlMax_text)
except:
  print("Ungültige Eingabe: '%s' ist keine Zahl" % zahlMax_text)
```

Die letzte Zeile mit der Fehlerausgabe wird nur ausgeführt, wenn die Umwandlung fehlschlägt.
Um dem Spieler im Fehlerfall eine erneute Eingabe zu ermöglichen, stülpen wir noch eine Schleife über die Eingabe.
Dass der Computer noch keine gültige obere Grenze kennt, wollen wir mit der Pythonkonstante `None` (was soviel bedeutet wie "kein Wert") anzeigen.
Unser Programmstart sieht dann so aus:

```python
zahlMax = None
while zahlMax == None:
  try:
    zahlMax_text = input('Wie groß kann die gedachte Zahl höchstens sein? ')
    zahlMax = int(zahlMax_text)
  except:
    print("Ungültige Eingabe: '%s' ist keine Zahl" % zahlMax_text)
```

Solange die Umwandlung der Eingabe in eine ganze Zahl fehlschlägt, kann die Zuweisung zur Variable `zahlMax` nicht ausgeführt werden und sie bleibt 
auf dem Initialwert `None`. Beachte, dass für die Abfrage auf Gleichheit der Operator `==` verwendet wird, im Gegensatz zum Operator `=` für die Zuweisung von Werten an Variablen.

Da die Konstante `None` im Speicher nur einmal angelegt wird, kann man hier auch den Operator `is` verwenden (`... while zahlMax is None: ...`).
(Näheres zum Unterschied zwischen den Operatoren `==` und `is` findet man z.B. hier: [www.geeksforgeeks.org/difference-operator-python](https://www.geeksforgeeks.org/difference-operator-python/).)


# Einen Rateversuch erzeugen

Den Rateversuch wollen wir zufällig erzeugen. Dazu verwenden wir - wie schon im ersten Teil des Zahlenratens für die gedachte Zahl -
die Funktion `randint` aus dem Modul `random`.

Da unser Programm vom Spieler Hinweise bekommen soll, die den übrig gebliebenen Zahlenbereich auch von unten einschränken,
wollen wir gleich eine untere erlaubte Schranke `zahlMin` einführen, die zu Beginn auf `1` gesetzt wird:

```python
from random import randint
zahlMin = 1
versuch = randint(zahlMin, zahlMax)
```


# Den Hinweis abfragen und auswerten

Als nächstes müssen wir den Spieler fragen, wo unser Versuch im Vergleich zu seiner gedachten Zahl liegt.
Als mögliche Eingabe wollen wir eine der Zahlen 1-3 vorsehen:

```python
frage = "Hast du dir %d gedacht?" % versuch
anleitung = "Gib einen Hinweis (1 .. erraten, 2 .. zu klein, 3 .. zu groß): "
hinweis = input(frage + " " + anleitung)
```

Bevor wir den Hinweis verarbeiten, wollen wir sicherstellen, dass die Eingabe gültig ist,
also `1`, `2` oder `3` war. Dazu verwenden wir eine Liste an gültigen Hinweisen:

```python
erlaubteHinweise = ['1', '2', '3']
```

Ob ein Hinweis in dieser Liste vorkommt, kann man so abfragen:

```python
hinweisGueltig = hinweis in erlaubteHinweise
```

Der Operator `in` prüft, ob ein Wert in einer Liste vorkommt. 
Die Variable `hinweisGueltig` enthält dann einen Wahrheitswert, nämlich `True` oder `False`.
Wenn wir wieder eine Schleife über die Eingabe stülpen, um so lange nachzufragen, bis 
der Hinweis gültig ist, und außerdem eine Fehlermeldung ausgeben, wenn der Hinweis ungültig ist,
kann das so aussehen:

```python
hinweisGueltig = False
while not hinweisGueltig:
  frage = "Hast du dir %d gedacht?" % versuch
  hinweis = input(frage + " " + anleitung)
  hinweisGueltig = hinweis in erlaubteHinweise
if not hinweisGueltig:
    print("Ungültiger Hinweis '%s'; 1, 2 oder 3 erwartet!")
```

Das Befüllen der Variable `anleitung` kommt hier nicht mehr vor, da der Wert fix ist und die Zuweisung nur einmal - am Beginn des Programms - zu erfolgen braucht.

Um den Code lesbarer zu machen, wollen wir die Abfrage des Hinweises in eine Funktion packen.
Dazu kann man die Schleife wie folgt umschreiben:

```python
def frageNachHinweis(versuch):
  while True:
    frage = "Hast du dir %d gedacht?" % versuch
    hinweis = input(frage + " " + anleitung)
    if hinweis in erlaubteHinweise:
      return hinweis
    print("Ungültiger Hinweis '%s'; 1, 2 oder 3 erwartet!" % hinweis)
```

Diese Funktion kann dann so genutzt werden:
```python
hinweis = frageNachHinweis(versuch)
```

Nun müssen wir die 3 gülltigen Fälle behandeln:
* Wenn der Spieler `1` eingegeben hat, sind wir fertig.
* Wenn der Spieler `2` eingegeben hat, war unser Versuch zu klein und wir können `zahlMin` hinaufsetzen. (Auf welchen Wert)?
* Wenn der Spieler `3` eingegeben hat, war unser Versuch zu groß und wir können `zahlMax` heruntersetzen. (Auf welchen Wert)?

Denke über die Fälle nach, bevor du dir den folgenden Code-Teil ansiehst.

_Beachte, dass der abgefragte Hinweis ein Text, also vom Typ `str`, ist._

```python
if hinweis == '1':
print('Juhuu!')
if hinweis == '2':
  zahlMin = versuch + 1
if hinweis == '3':
  zahlMax = versuch - 1
```


# Die Spielschleife

Jetzt wollen wir wieder eine Schleife über die Abfrage stülpen, bis ein gültiger Hinweis eingegeben wurde.
Das sieht dann insgesamt so aus:

```python
while True:
  hinweis = frageNachHinweis(versuch)
  if hinweis == '1':
  print('Juhuu!')
  break
  if hinweis == '2':
    zahlMin = versuch + 1
  if hinweis == '3':
    zahlMax = versuch - 1
```

# Das gesamte Programm

Wenn wir das gesamte Programm zusammenstellen, wollen wir noch folgende übliche Abfolge von Codeteilen beachten:

* `import`-Befehle
* Konstantendefinitionen
* Funktionsdefinitionen
* Initialisierungen
* restliche Logik

```python
from random import randint

anleitung = "Gib einen Hinweis (1 .. erraten, 2 .. zu klein, 3 .. zu groß): "
erlaubteHinweise = ['1', '2', '3']

def frageNachHinweis(versuch):
  while True:
    frage = "Hast du dir %d gedacht?" % versuch
    hinweis = input(frage + " " + anleitung)
    if hinweis in erlaubteHinweise:
      return hinweis
    print("Ungültiger Hinweis '%s'; 1, 2 oder 3 erwartet!" % hinweis)

zahlMin = 1
zahlMax = None
while zahlMax == None:
  try:
    zahlMax_text = input('Wie groß kann die gedachte Zahl höchstens sein? ')
    zahlMax = int(zahlMax_text)
  except:
    print("Ungültige Eingabe: '%s' ist keine Zahl" % zahlMax_text)

while True:
  versuch = randint(zahlMin, zahlMax)
  hinweis = frageNachHinweis(versuch)
  if hinweis == '1':
    print('Juhuu!')
    break
  if hinweis == '2':
    zahlMin = versuch + 1
  if hinweis == '3':
    zahlMax = versuch - 1
```

Ein Spielverlauf könnte dann so aussehen:

{{< imgblock "img/Zahlenraten2.png" "Spielverlauf (gelb: Eingabe des Spielers)" >}}{{< /imgblock >}}

# Erweiterungsmöglichkeiten

Willst du das Programm noch ausbauen? Folgende Ideen dazu:

* Was passiert, wenn der Spieler einen widersprüchlichen Hinweis gibt? (Das kann z.B. passieren,
  wenn beim Rateversuch `4` der Hinweis `2` ("zu klein") gegeben wird, beim Rateversuch `5`
  aber der Hinweis `3` ("zu groß").) Wie kann man das im Programm abfangen, um eine eigene Fehlermeldung auszugeben?
* Wie kann man die (durchschnittliche) Anzahl an Rateversuchen möglichst gering halten?
