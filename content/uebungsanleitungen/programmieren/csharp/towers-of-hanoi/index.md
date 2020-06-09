---
title: Türme von Hanoi
description: Knoble eine Lösung für das Problem der Türme von Hanoi aus
aliases:
  - /trainingsanleitungen/csharp/towers-of-hanoi.html
---

# Türme von Hanoi

## Einleitung

Die *Türme von Hanoi* sind ein klassisches Übungsbeispiel für Programmierer. Für Kinder gibt es das Rätsel auch als Holzspielzeug zu kaufen. Die Regeln sind einfach:

* Man hat ein Spielbrett mit drei Stangen. Nennen wir sie *L* for Links, *M* für Mitte und *R* für Rechts.
* Auf der Stange A ist ein Turm von Spielsteinen aufgetürmt. Jeder Spielstein ist etwas kleiner als der darunter.
* Die Aufgabe ist es, den **Turm von Stange L auf Stange M** zu übersiedeln. Allerdings mit folgenden Einschränkungen:
  * Es darf immer nur ein Spielstein gleichzeitig verschoben werden.
  * Es darf nie ein größerer Spielstein auf einen kleineren gelegt werden.

Das folgende Bild, das von [Wikipedia](https://de.wikipedia.org/wiki/T%C3%BCrme_von_Hanoi#/media/File:Tower_of_Hanoi_4.gif) übernommen wurde, veranschaulicht das Prinzip: 

![Türme von Hanoi](https://upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)<br/>

## Ziel der Übung

Deine Aufgabe ist es, ein Programm zu schreiben, das für jede beliebige Anzahl an Spielsteinen die notwendigen Züge ausgibt. Der Einfachheit halber numerieren wir die Spielsteine durch. Der kleinste hat die Nummer 1, der zweitkleinste die Nummer 2 und so weiter.

Bei *einem Spielstein* ist die Lösung trivial: 

```shell
Schiebe 1 von L nach M
```

Bei *zwei Spielsteinen* brauchen wir drei Schritte:

```shell
Schiebe 1 von L nach R
Schiebe 2 von L nach M
Schiebe 1 von R nach M
```

Für *drei Spielsteine* brauchst du schon sieben Schritte:

```shell
Schiebe 1 von L nach M
Schiebe 2 von L nach R
Schiebe 1 von M nach R
Schiebe 3 von L nach M
Schiebe 1 von R nach L
Schiebe 2 von R nach M
Schiebe 1 von L nach M
```

Hier eine Grafik, die die Lösung mit drei Spielsteinen veranschaulicht ([Bildquelle](http://www.scalingbits.com/java/javakurs1/methoden/rekursion))

![Türme von Hanoi](http://www.scalingbits.com/sites/default/files/4hanoi.png)

Und so weiter.

## Programmieren

In dieser Übung sollst du selbst versuchen, das Programm zu schreiben, ohne vorab eine Lösung zu haben. Du kannst jede beliebige Programmiersprache dafür verwenden, die du schon kennst. Falls du unsicher bist, verwende C#. Hier die wichtigsten Schritte zum Starten:

1. Installiere auf deinem Computer C# falls du es noch nicht installiert hast: [Installationsanleitung](https://www.microsoft.com/net/core#windows)

1. Installiere auf deinem Computer einen Editor wie z.B. [Visual Studio Code](http://code.visualstudio.com)

1. Erstelle dir einen leeren Ordner auf deinem Computer. Nehmen wir an, der Ordner heißt `c:\hanoi`

1. Öffne eine Kommandozeile (*Command Prompt*) und wechsle mit dem `cd` Kommando in den Ordner (z.B. `cd c:\hanoi`).

1. Erstelle eine leere C# Konsolenanwendung, indem du in dem Kommandozeilenfenster `dotnet new` eingibst. Starte sie, indem du `dotnet run` eingibst. Es müsste `Hello World` ausgegeben werden.

1. Öffne den Ordner in deinem Editor. Falls du [Visual Studio Code](http://code.visualstudio.com) verwendest, gib einfach im Kommandozeilenfenster `code .` ein (`.` steht für das aktuelle Verzeichnis).

Jetzt kannst du loslegen. Viel Spaß beim Tüfteln ;-)

## Lösung

Möchtest du deine Lösung mit einer Musterlösung vergleichen oder brauchst du Inspiration? [Hier findest du eine Musterlösung in C#](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/csharp/towers-of-hanoi/Program.cs).


## Wie gehts weiter?

C# gefällt dir? Du möchtest mehr wissen?

1. Wenn du Lust hast kannst du einen kostenlosen [Online-Videokurs über C#](https://mva.microsoft.com/de-de/training-courses/programmieren-f-r-beginner-mit-c--10140?l=JqnuG5A6_9704984382) machen. Dabei lernst du die Programmiersprache von Grund auf Schritt für Schritt kennen.

2. Wenn du im CoderDojo bist, löchere deine Mentoren mit Fragen. In Linz haben wir bei paar echte C# Profis dabei, die in diesem Bereich weit über die Grenzen von Österreich hinaus bekannt sind.
