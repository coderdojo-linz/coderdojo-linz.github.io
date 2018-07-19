---
layout: sushi
title: micro:bit Moonhack 2018
description: In diesem Spiel landest du auf dem Mond
---

# micro:bit Moonhack 2018

## Einleitung

Am 20. Juli 1969 erreichten die ersten Menschen mit der [Mondlandefähre (Englisch *Lunar Module*)](https://de.wikipedia.org/wiki/Mondlandef%C3%A4hre) den Mond, aber das Raumschiff am richtigen Ort zu landen war nicht einfach. Der Pilot, [Neil Armstrong](https://de.wikipedia.org/wiki/Neil_Armstrong), musste das Raumschiff präzise zu dem Landepunkt steuern um dort landen zu können und in diesem Spiel werden wir versuchen die Landeansteuerung nachzubauen.

Wenn du keinen physischen micro:bit hast kannst du das Spiel in dem [Online-Editor](https://makecode.microbit.org/) coden.

## Schritt 1: Vorbereitung

Öffne den [Online-Editor](https://makecode.microbit.org/) und stelle die Sprache auf Deutsch um, außer du bist mutig genug es mit Englisch zu versuchen. ;) Die Sprache kannst du ändern in dem du rechts oben auf das Zahnrad drückst und dann auf Sprache. (oder im Englischen "Language")

![Sprache ändern](microbit_Moonhack_2018/language.jpg)

Dann räume zuerst den Code auf den makecode uns bereitgestellt hat, wir brauchen ihn nicht. Das rechte Feld sollte jetzt ganz leer sein.

![Sauber](microbit_Moonhack_2018/empty.jpg)

## Schritt 2: Positionierung der Figuren

Als erstes müssen wir zwei Variablen erzeugen, die unser Raumschiff und unseren Landepunkt darstellen. Du kannst sie "raumschiff" und "landepunkt" nennen.

![Variablen erstellen](microbit_Moonhack_2018/variables.jpg)

Jetzt müssen wir diesen Variablen Sprites, also Figuren, zuweißen. Dazu müssen wir immer beim Starten des Spieles Code ausführen, das können wir mit dem "beim Start" Block machen. In diesem brauchen wir zwei "ändere *variable* auf " Blöcke, und zwei "erzeuge Sprite an Position *x* *y*" Blöcke. Unser Raumschiff soll an der obersten Reihe beginnen, weshalb wir den y-Wert für dieses Sprite auf 0 setzen müssen. Der Landepunkt ist natürlich am Boden, darum müssen wir den y-Wert für diesen auf 4 setzen. **Tipp:** Der "erzeuge Sprite an Position *x* *y*" Block ist in der Kategorie "Spiel", wenn du diese nicht siehst musst du zuerst auf "Fortgeschritten" klicken um mehr Kategorien anzuzeigen!

![Sprites erstellen](microbit_Moonhack_2018/set_sprites.jpg)

Wenn du das Spiel jetzt öfter neu startest indem du auf den "Simulator neu starten"-Knopf drückst siehst du dass unser Raumschiff immer direkt über dem Landepunkt ist, aber das wäre für das Spiel doch viel zu leicht! Darum wollen wir, dass beide immer in einer zufälligen Spalte beginnen. Das können wir mit 2 "wähle eine zufällige Zahl zwischen 0 und 4" Blöcken erreichen.

![Zufällig positionieren](microbit_Moonhack_2018/set_sprites_random.jpg)

## Schritt 3: Lass dein Raumschiff fallen

Wenn wir das Spiel jetzt starten werden unsere zwei Figuren immer zufällig positioniert, aber unser Raumschiff landet noch nicht, es bleibt immer in der obersten Reihe. Um das zu erreichen brauchen wir eine Schleife, die unser Raumschiff jede halbe Sekunde um eine Reihe nach unten "fallen" lässt. Das passiert in dem wir den y-Wert 4-mal um eines erhöhen und dazwischen eine kleine Pause machen um dem Spieler Zeit zu geben zu steuern.

![Raumschiff landen](microbit_Moonhack_2018/falling_down.jpg)

## Schritt 4: Steuere dein Raumschiff

Das Raumschiff fällt schon, aber bis jetzt können wir noch nicht steuern wohin es fällt, darum fügen wir jetzt einen "wenn Knopf A gedrückt" Block ein. In diesem Block bewegen wir das Raumschiff eine Spalte nach Links, das bedeutet wir müssen den x-Wert des Raumschiffes um eines verringern.

![Nach links](microbit_Moonhack_2018/left.jpg)

Jetzt können wir schon Links fliegen, um auch nach Rechts fliegen zu können müssen wir die Blöcke vom letzten Schritt noch einmal wiederholen, aber jetzt mit Knopf B und nach Rechts, also den x-Wert um eines erhöhen.

![Und nach rechts](microbit_Moonhack_2018/and_right.jpg)

## Schritt 5: Verlieren oder Gewinnen

Nachdem wir jetzt schon unser Raumschiff landen können wollen wir auch wissen ob wir richtig gelandet oder ob wir am Ziel vorbei sind. Das schaffen wir in dem wir unter unserer Schleife, die das Raumschiff landen lässt, einen "wenn - dann - ansonsten" Block einfügen. Wir wollen eine Bedingung die Wahr ist, falls wir Gewonnen haben und Falsch, wenn wir Verloren haben. Darum zeigen wir im dann-Block an, dass wir Gewonnen haben und in dem ansonsten-Block zeigen wir an dass wir Verloren haben. Die Bedingung um zu Gewinnen ist es, dass das Raumschiff genau auf dem Landepunkt ist wenn es am Boden ankommt. Das bedeutet, dass wir die beiden x-Werte unserer zwei Sprites vergleichen müssen, und wenn sie gleich sind haben wir gewonnen.

![Gewinnen oder Verlieren](microbit_Moonhack_2018/win_or_loose.jpg)

Super, unser Spiel ist jetzt fertig und bereit zum Landen! Das ganze Spiel sollte jetzt so aussehen.

![Fertig!](microbit_Moonhack_2018/done.jpg)

## Gratuliere!

Du hast das Moonhack micro:bit Spiel 2018 geschafft! Wenn dir das noch nicht genug war kannst du entweder andere Spiele/Projekte in Scratch oder Python probieren, oder du erweiterst dein micro:bit Spiel noch ein wenig!