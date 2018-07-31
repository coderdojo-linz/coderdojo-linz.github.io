---
layout: sushi
title: Scratch Dragons Realm
description: Springe hoch, um die herumfliegenden Sterne zu fangen.
---

# Dragons Realm

![Endgame](scratch-dragons-realm-v3/endgame.png)

Bei Dragons Realm steuerst du einen Drachen, der sein Territorium gegen eindringende Raubritter verteidigt.
Mit den Pfeiltasten lenkst du den Drachen (du kannst auch zwei Tasten gleichzeitig drücken mit ↑ und → fliegt man zum Beispiel nach rechts oben). Mit der Leertaste spuckt der Drache Feuer, und kann Ritter zu Stein erstarren lassen.
Damit das Spiel auch auf Tablets und Handys funktioniert, wurde nachträglich eine Maus/Touch-Steuerung eingebaut. Generell ist das Spielerlebnis mit der Tastatur aber besser.

Dragons Realm beinhaltet viele Grafiken. Du bekommst die Grafiken auf Anfrage von deinen Mentoren, oder kannst sie gesammelt hier herunterladen: [scratch-dragons-realm/dragons.zip](scratch-dragons-realm/dragons.zip)

Das Spiel besteht aus 6 Figuren und 19 Codeblöcken.

## Downloads

[Background](scratch-dragons-realm/Background.sprite2)

[Border](scratch-dragons-realm/Border.sprite2)

[Dragon](scratch-dragons-realm/Dragon.sprite2)

[Fireball](scratch-dragons-realm/Fireball.sprite2)

[Tiles](scratch-dragons-realm/Tiles.sprite2)

[Knight](scratch-dragons-realm/Knight.sprite2)

## Die Figuren

Wir brauchen insgesamt sechs Figuren: Background, Border, Dragon, Fireball, Tiles und Knight:

![Figur löschen](scratch-dragons-realm-v3/figuren.png)

Die Kostüme findest du unter den Grafikdateien, die du von deinen Mentoren erhalten oder heruntergeladen hast, und zwar in den jeweiligen Unterverzeichnissen mit identem Namen. Also Verzeichnis *dragon* für den Drachen, usw.

Das Anlegen der Figuren geschieht immer gleich: Klick auf *Figur wählen* / *Malen*. Im *Kostüme* Karteireiter wählst du dann *Kostüme hochladen*. Als nächstes selektierst du gleich alle Grafiken des entsprechenden Unterverzeichnisses aus, damit geht das Laden schneller. Das geht im Windows Dateidialog so:

![Selektieren](scratch-dragons-realm-v3/alles-selektiert.png)

## Die Figur Dragon

Etwas speziell ist es beim Drachen, der aus insgesamt 64 Kostümen besteht, die noch dazu in der richtigen Reihenfolge im Scratch Editor vorliegen müssen, das heißt zu Beginn Dragon01, dann Dragon02, Dragon03 und so weiter.

Man kann zwar alle Kostüme auf einmal laden, aber Scratch verändert dabei deren Reihenfolge. 64 Kostüme händisch wieder in die richtige Reihenfolge zu bringen, ist viel Arbeit.
Unser Tipp daher: Lade immer acht aufeinanderfolgende Kostüme auf einmal, also erstmal Dragon01 bis Dragon08:

![Figur löschen](scratch-dragons-realm-v3/alles-nicht-selektiert.png)

Daraufhin kannst du diese 8 Drachen mittels Ziehen der Maus sortieren, sodass die Kostüm-Liste so aussieht:

![Figur löschen](scratch-dragons-realm-v3/drache.png)

Also nächstes machst du das gleiche mit Dragon09 bis Dragon 16, und so weiter.

Bei den Drachenkostümen ist auch zu beachten, dass deren Drehpunkt immer an der gleichen Stelle ist, und zwar beim Kopf. Dadurch wird sichergestellt, dass die Flugbewegung gleichmäßig abläuft, und dass die Feuerbälle aus seinem Maul kommen.

## Die Codeblöcke

Beginnen wir mit der Liste von Variablen, die angelegt werden müssen.
Bitte achte genau darauf, dass du die richtige Auswahl zwischen *Für alle Figuren* und *Nur für diese Figur* triffst:

|Variable|Figur|
|---|---|
|ClickAngle|Dragon|
|ClickControlled|Dragon|
|DeltaX|Dragon|
|DeltaY|Dragon|
|FirstSprite|Dragon|
|FireBallDirX|Fireball|
|FireBallDirY|Fireball|
|Frozen|Knight|
|KnightX|Knight|
|KnightY|Knight|
|DirectionX|Für alle Figuren|
|DirectionY|Für alle Figuren|
|PrevDirectionX|Für alle Figuren|
|PrevDirectionY|Für alle Figuren|
|Score|Für alle Figuren|
|ShootActive|Für alle Figuren|

Für die Figur des Drachen sollten die Variablen danach so aussehen:

![Figur löschen](scratch-dragons-realm-v3/daten.png)

## Code der Figur Dragon

Wir wollen den Drachen lenken und Feuerbälle abfeuern.
Gleichzeitig müssen wir dafür sorgen, dass der Drache immer die Flügel bewegt.
Das nennt man eine Animation.
In dem *StartAnimation* Codeblock werden laufend Kostüme ausgetauscht, um für die Flügelbewegung zu sorgen.
Im Skript *StartControl* ist die Tastatur- und Maus-Steuerung des Drachen implementiert.

![Figur löschen](scratch-dragons-realm-v3/code-drache-1.png)

![Figur löschen](scratch-dragons-realm-v3/code-drache-2.png)

![Figur löschen](scratch-dragons-realm-v3/code-drache-3.png)

Der Drache sollte sich jetzt eigentlich schon steuern lassen und mit den Flügeln flattern. Probiere es einmal aus!
  
## Code der Figur Background

Die Figur *Background* enthält das Gras, über das der Drache fliegt.
Dennoch ist das kein Bühnenbild, denn wir wollen dass sich die Landschaft bewegt.
Wir verwenden hier erstmals einen selbst definierten Block namens *ScrollThrough*.
Blöcke dienen der Wiederverwendung von Code. Du erkennst sie an der rosernen Farbe.
Sie werden unter *Meine Blöcke* / *Neuer Block* angelegt.

![Figur löschen](scratch-dragons-realm-v3/code-background-1.png)

Wie du sieht, wird hier auch die Hintergrundmusik abgespielt (*spiele Klang Medieval ganz*).
Diesen Klang musst du zunächst laden. Klicke dazu auf *Klänge* / *Klang wählen* / *Klang hochladen*.
Selektiere die Datei Medieval.mp3. Sie liegt im *dragons* Verzeichnis, das du von den Mentoren erhalten hast.

So legt man den Block *ScrollThrough* an:

![Figur löschen](scratch-dragons-realm-v3/block.png)

Wenn man genau schaut, bemerkt man dass der *ScrollThrough*-Block eigentlich nur einmal aufgerufen wird.
So gesehen wäre er nicht unbedingt nötig um Code-Duplikate zu vermeiden.
In einer ersten Implementierung von Dragons Realm war das Kostüm *Grass* Teil der Figur *Tiles*, wo der Block noch einmal existiert, und von dort stammt der Block auch jetzt noch. Leider erlaubt Scratch die Wiederverwendung von Blöcken nur innerhalb einer Figur, nicht über mehrere Figuren hinweg.

## Code der Figur Border

Das Kostüm *Border* ist nur ein grauer Rand. Wir benötigen ihn, um das Scrollen der Landschaft umsetzen zu können.
Gras, Bäume und Felsen bewegen sich bis hinter dem Rand, und tauchen auf der anderen Seite des Spiels wieder auf.
Dadurch entsteht der Eindruck einer Bewegung.
Da Scratch Figuren nur eine beschränkte Anzahl von Pixeln hinter dem Spielrand verschwinden können, benötigen wir diesen zusätzlichen Randbereich. Andernfalls würde das Spiel zu sehr flackern.

![Figur löschen](scratch-dragons-realm-v3/code-border.png)

## Code der Figur Fireball

Der Feuerball wird abgeschossen wenn er die Nachricht *Shoot* erhält.
Da wir immer wieder Feuerbälle brauchen, wird er als Klon angelegt.
Im Hauptskript wird das passende Kostüm gewählt, danach bewegt sich der Feuerball rasch in der Richtung, in die der Drache zu dem Zeitpunkt blickt.

![Figur löschen](scratch-dragons-realm-v3/code-fireball-1.png)

![Figur löschen](scratch-dragons-realm-v3/code-fireball-2.png)

## Code der Figur Tiles

Bäume und Felsen werden zu Spielstart an zufälliger Position angelegt.
Dabei ist die Reihenfolge der Klone wichtig, damit weiter vorne liegende Objekt vor dahinterliegenden Objekten erscheinen und diese verdecken. Daher starten wir bei einer Y-Position von 180 und arbeiten uns bis -180 durch.

Ähnlich wie das Gras müssen auch Bäume und Felsen unter dem Drachen durchscrollen.
Wir haben daher die gleiche Implementierung, wenn die *StartScrolling* Nachricht empfangen wird.

![Figur löschen](scratch-dragons-realm-v3/code-tiles-1.png)

## Code der Figur Knight

Unser letztes Figuren-Skript ist für den Ritter.
Ritter erscheinen zufällig, und müssen zuerst an einer freien Position platziert werden.
Das fragen wir mittels einer *wird Tiles berührt* Kondition ab. Danach wandert der Ritter weiter, bis er auf ein Hindernis trifft, woraufhin er seine Richtung wieder ändert.

Berührt der Ritter den Feuerball, so erstarrt er (die Variable *Frozen* wird auf 1 gesetzt, und er wird zu Stein und bewegt sich nicht mehr).

![Figur löschen](scratch-dragons-realm-v3/code-knight-1.png)

## Herunterladen

Du kannst das fertige Projekt unter [dragonrealm.sb3](scratch-dragons-realm-v3/Dragonrealm.sb3) herunterladen.