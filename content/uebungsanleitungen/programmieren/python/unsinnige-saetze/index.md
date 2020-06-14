---
title: "Python baut unsinnige Sätze"
description: "In dieser Übunge erstellen wir ein kleines Python-Programm, das unsinnige Sätze zusammenbaut."
aliases:
- /trainingsanleitungen/python/python-unsinnige-saetze.html
---

# Unsinnige Sätze

In dieser Übunge erstellen wir ein kleines Python-Programm, das unsinnige Sätze zusammenbaut.


## Die Aufgabe

Unser Programm soll aus drei verschiedenen Wortgruppen (Subjekt, Verb, Objekt) willkürlich Sätze zusammenstellen.
Es wählt zufällig je ein Wort aus einer Gruppe aus und dabei können natürlich auch lustige und unsinnige Sätze herauskommen.

Ein möglicher Ablauf könnte dann im Shell-Fenster so aussehen:

```shell
Unsinnige Sätze
===============

Drücke einfach ENTER, um einen neuen Satz zu erzeugen.
Oder "n" und dann ENTER, um das Programm zu beenden.

Die Katze träumt im Feld.

Die Katze springt im Meer.

Das Känguru schwimmt im Zirkus.

Tom fährt im Bett.

Die Katze fährt im Zirkus.

Lena tanzt im Feld.

Die Katze fährt im Garten.

Servus!
```


## Bestandteile des Programms

Zunächst öffnen wir ein neues Code-Fenster, wie wir es am Ende der Ersten-Schritte-Übung und beim Geisterspiel schon gemacht haben.
Dort werden wir nun unser Unsinnige-Sätze-Programm schreiben und es unter dem Namen "unsinnige-saetze.py" speichern.

Von den ersten beiden Übungen her kennen wir auch schon ein paar Dinge, die wir hier wieder benötigen:

* Zufallszahlen: `randint(0, n)`

* Textausgabe in Shell-Fenster `print` und Eingabe von der Tastatur `input`

* while-Schleife

Zusätzlich können wir noch folgende Dinge brauchen:


### Listen

In Python können wir Listen von gleichartigen Werte so definieren und in Variablen speichern.<br />
Außerdem können wir, wie jede Variable auch Variablen, die Listen enthalten mit `print` ausgeben.<br />
Gib dazu folendes im Shell-Fenster ein:

```shell
>>> listeA = [1, 2, 3]
>>> print('listeA =', listeA)
listeA = [1, 2, 3]
```

Wir können dann auch direkt, über einen sogenannten Index, auf jedes Element der Liste zugreifen und es so auslesen oder auf einen neuen Wert setzen.<br />
Bei Listen hat das erste Element übrigens den Index 0.<br />
Beispiel im Shell-Fenster:

```shell
>>> listeA[1] = 1000
>>> print('listeA =', listeA, ' 3. Element =', listeA[2])
listeA = [1, 1000, 3]  3. Element = 3
```

Wir können auch die Länge einer Liste mit der Funktion `len` ermitteln:

```shell
>>> len(listeA)
3
```


### Funktionen

So wie die Funktionen `print` und `input`, die wir schon kennen, können wir natürlich auch selbst Funktionen definieren.<br />
Wieder ein Beispiel im Shell-Fenster:

```shell
>>> def add(a, b):
	return a + b
```

Hier haben wir die Funktion `add` definiert, die 2 sogenannte Parameter `a` und `b` erhält, mit denen sie dann, wie mit lokalen Variablen arbeiten kann.<br />
Nun rufen wir die Funktion ein paarmal auf:

```shell
>>> add(1, 2)
3
>>> add(3, -4)
-1
```


## Eine Lösung

{{< alertblock >}}
Versuche zuerst selbst eine Lösung zu erstellen, bevor du weiterliest!
{{< /alertblock >}}

Eine mögliche Lösung für das Unsinnige-Sätze-Programm könnte dann so aussehen:

```python
# CoderDojo Linz - Unsinnige Sätze

from random import randint

subject = ['Lena', 'Tom', 'Die Katze', 'Das Auto', 'Das Känguru' ]
verb = ['träumt', 'schwimmt', 'springt', 'fährt', 'tanzt' ]
object = ['Meer', 'Feld', 'Weltraum', 'Bett', 'Garten', 'Zirkus' ]


def pick(words):
	num_words = len(words)
	num_picked = randint(0, num_words - 1)
	word_picked = words[num_picked]
	return word_picked


def printSentence():
	print(pick(subject), pick(verb), 'im', pick(object), end='.')
	print()

print()
print('Unsinnige Sätze')
print('===============')
print()
print('Drücke einfach ENTER, um einen neuen Satz zu erzeugen.')
print('Oder "n" und dann ENTER, um das Programm zu beenden.')
print()

printSentence()
again = input()
while again != 'n':
	printSentence()
	again = input()

print('Servus!')
```
