---
layout: sushi
title: Zahlen raten mit Python
description: Wollen wir ein Programm für das Spiel "Zahlen raten" schreiben?
author: Stöcher Wolfgang, Steyr
---

# Zahlen raten mit Python

Wollen wir ein Programm für das Spiel "Zahlen raten" schreiben?
Der Computer denkt sich eine Zahl im Bereich von 1 - 100 und der Spieler soll diese erraten. 
Nach jedem Versuch gibt das Programm aus, ob die eingegebene Zahl zu klein, zu groß
oder richtig war.

# Allgemeines zur Programmiersprache Python
Wir verwenden für die Programmierung die Programmiersprache Python (siehe die Python Homepage [www.python.org](https://www.python.org/)),
genauer gesagt Python 3, also eine Version von Python, deren Bezeichnung mit 3 beginnt, z.B. Python 3.7.1.
Zu Beginn ist es am einfachsten, wenn du Python-Programme online im Browser (z.B. auf [www.onlinegdb.com/online_python_interpreter](https://www.onlinegdb.com/online_python_interpreter))
entwickelst und ausführst. 
Wenn du Python-Programme lokal auf einem Rechner entwickeln und laufen lassen möchtest, muss Python installiert sein. 
Hilfe dazu findest du auf der [Python Homepage](https://www.python.org/about/gettingstarted/) und im Python Wiki (siehe [wiki.python.org](https://wiki.python.org/moin/BeginnersGuide/Download)).

Achtung: Nicht alle Computersysteme und Programme können automatisch mit deutschen Sonderzeichen 
umgehen, oder verarbeiten sie unterschiedlich.
Da wir hier z.B. den Buchstaben 'ß' verwenden wollen, kann es zu Fehlermeldungen
kommen, die z.B. so aussehen:

```none
SyntaxError: Non-UTF-8 code ...
```

In diesem Fall kann man versuchen, sicher zu stellen, dass die Programmdatei mit
UTF-8 Codierung abgespeichert wird. Oder man vermeidet die Sonderzeichen durch Umschreibung (z.B. 'ss' statt 'ß').


# Eine Zahl ausdenken
Wie kann sich ein Computerprogramm eine Zahl ausdenken? 
Wir könnten einfach einer Variable, sagen wir `n`, 
eine Zahl zuweisen, die erraten werden soll:

```python
  n = 42
```

Wenn das Programm für unser Spiel läuft, ist diese Zahl nicht sichtbar
und der Spieler muss sie wirklich erraten. 
Allerdings wird der Spieler schnell herausfinden, dass immer die Zahl
42 zu erraten ist, und das Interesse an unserem Spielprogramm verlieren.

Wie kann man für jedes Spiel eine neue Zahl erzeugen? 
Am einfachsten ist die Verwendung eines (Pseudo-)Zufallsgenerators:

```python
  from random import randint
  n = randint(1,100)
```
