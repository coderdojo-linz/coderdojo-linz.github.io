---
layout: sushi
title: Scratch Dragons Realm
description: Verteidige als Drache dein Territorium gegen die Eindringlinge.
scratch-images:
- scratch-dragons-realm-v3/endgame.png
- scratch-dragons-realm-v3/code-drache-1.png
scratch-level: 3
scratch-sprites: 6
scratch-scripts: 19
scratch-data: 11
---

# Dragons Realm <span class="badge badge-scratch3">Scratch 3.0</span> <a href="scratch-dragons-realm.html" class="change-scratch-version">Scratch 2.0</a>

![Dragons](scratch-dragons-realm-v3/dragons.png)

Bei Dragons Realm steuerst du einen Drachen, der sein Territorium gegen eindringende Raubritter verteidigt.
Mit den Pfeiltasten lenkst du den Drachen um den Pfeilen der Ritter ausweichen zu können (du kannst auch zwei Tasten gleichzeitig drücken; mit ↑ und → fliegt man zum Beispiel nach rechts oben). Mit der Leertaste spuckt der Drache Feuer, und kann Ritter zu Stein erstarren lassen.
Damit das Spiel auch auf Tablets und Handys funktioniert, wurde nachträglich eine Maus/Touch-Steuerung eingebaut. Generell ist das Spielerlebnis mit der Tastatur aber besser. Hier kannst du das fertige Projekt schon einmal ausprobieren: [https://scratch.mit.edu/projects/81928816](https://scratch.mit.edu/projects/81928816)

Dragons Realm beinhaltet viele Grafiken. Du kannst die vorgefertigten Figuren mit allen Kostümen (bar ohne Skripte) hier herunterladen. Auch die Hintergrundmusik findest du hier als wav-Datei.

## Downloads

[Background.sprite3](scratch-dragons-realm-v3/Background.sprite3)

[Dragon.sprite3](scratch-dragons-realm-v3/Dragon.sprite3)

[Fireball.sprite3](scratch-dragons-realm-v3/Fireball.sprite3)

[Tiles.sprite3](scratch-dragons-realm-v3/Tiles.sprite3)

[Knight.sprite3](scratch-dragons-realm-v3/Knight.sprite3)

[Spear.sprite3](scratch-dragons-realm-v3/Spear.sprite3)

[Medieval.wav](scratch-dragons-realm-v3/Medieval.wav)

## Die Figuren

Nun da du die Figuren heruntergeladen hast, können wie sie in dein neuen Projekt importieren. Lege dazu ein neues Scratch Projekt an. Bewege dann die Maus im Figuren-Panel über das "Figur wählen" Symbol. Ein blaues Menü erscheint. Klicke dort "Figur hochladen", und wähle "Dragon.sprite3" aus dem lokalen Dateisystemen aus. Wiederhole diesen Schritt für alle Figuren.

![SpriteUpload](scratch-dragons-realm-v3/sprite-upload.png)

## Die Bühne

Die Bühne benötigen wir für den Startbildschirm und die Game Over Anzeige, um die gesammelten Punkte und die verbleibenden Drachenleben anzuzeigen, und um die Hintergrundmusik abzuspielen. Klicke im Panel "Bühne" auf "Wähle ein Bühnenbild" / "Malen" oder "Nühnenbild hochladen", und erstelle zwei Bühnenbilder - eines namens "StartScreen", und eines namens "GameOver". Lade außerdem unter "Klänge" die Hintergrundmusik "Medieval.wav" hoch. Klicke dazu auf *Klänge* / *Klang wählen* / *Klang hochladen*.

## Die Codeblöcke

Beginnen wir mit den Variablen, die wir global bzw. je Figur anlegen müssen. 
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
|IsClone|Fireball|
|IsClone|Tiles|
|DeltaRandX|Tiles|
|DeltaRandY|Tiles|
|Frozen|Knight|
|KnightX|Knight|
|KnightY|Knight|
|IsClone|Spear|
|ShootSpearStepCount|Spear|
|DirectionX|Für alle Figuren|
|DirectionY|Für alle Figuren|
|GameOver|Für alle Figuren|
|Lives|Für alle Figuren|
|LivesLbl|Für alle Figuren|
|PrevDirectionX|Für alle Figuren|
|PrevDirectionY|Für alle Figuren|
|Score|Für alle Figuren|
|ScoreLbl|Für alle Figuren|
|ScrollDirectionX|Für alle Figuren|
|ScrollDirectionY|Für alle Figuren|
|ShootActive|Für alle Figuren|
|ShootSpearActive|Für alle Figuren|
|ShootSpearDirX|Für alle Figuren|
|ShootSpearDirY|Für alle Figuren|
|ShootSpearX|Für alle Figuren|
|ShootSpearY|Für alle Figuren|

Die Bühne sollte danach folgende Variable beinhalten (das sind jene die als "Für alle Figuren" definiert wurden). Du kannst sie auch direkt in der Bühne anlegen:

![DragonVars](scratch-dragons-realm-v3/stage-vars.png)

## Code der Bühne

![StageCode](scratch-dragons-realm-v3/dragon-code1.png)

## Code der Figur Dragon

Wir wollen den Drachen lenken und Feuerbälle abfeuern.
Gleichzeitig müssen wir dafür sorgen, dass der Drache immer die Flügel bewegt.
Das nennt man eine Animation.
In dem *StartAnimation* Codeblock werden laufend Kostüme ausgetauscht, um für die Flügelbewegung zu sorgen.
Im Skript *StartControl* ist die Tastatur- und Maus-Steuerung des Drachen implementiert.

![DragonCode1](scratch-dragons-realm-v3/dragon-code1.png)

![DragonCode2](scratch-dragons-realm-v3/dragon-code2.png)

![DragonCode3](scratch-dragons-realm-v3/dragon-code3.png)

Der Drache sollte sich jetzt eigentlich schon steuern lassen und mit den Flügeln flattern. Probiere es einmal aus!
  
## Code der Figur Background

Die Figur *Background* enthält das Gras, über das der Drache fliegt.
Dennoch ist das kein Bühnenbild, denn wir wollen, dass sich die Landschaft bewegt. Wir zeichnen daher die Figur "Grass" mehrmals um ein paar Pixel versetzt, um einen Scrolling-Effekt zu erzielen und den gesamten Bildschirm damit auszufüllen

## Code der Figur Fireball

Der Feuerball wird abgeschossen, wenn er die Nachricht *Shoot* erhält.
Da wir immer wieder Feuerbälle brauchen, wird er als Klon angelegt.
Im Hauptskript wird das passende Kostüm gewählt, danach bewegt sich der Feuerball rasch in der Richtung, in die der Drache zu dem Zeitpunkt blickt.

![FireballCode](scratch-dragons-realm-v3/fireball-code.png)

## Code der Figur Tiles

Bäume und Felsen werden zu Spielstart an zufälliger Position angelegt.
Dabei ist die Reihenfolge der Klone wichtig, damit weiter vorne liegende Objekt vor dahinterliegenden Objekten erscheinen und diese verdecken. Daher starten wir bei einer Y-Position von 180 und arbeiten uns bis -180 durch.

Ähnlich wie das Gras müssen auch Bäume und Felsen unter dem Drachen durchscrollen.

![TilesCode](scratch-dragons-realm-v3/tiles-code.png)

## Code der Figur Spear

![TilesCode](scratch-dragons-realm-v3/spear-code.png)

## Code der Figur Knight

Unser letztes Figuren-Skript ist für den Ritter.
Ritter erscheinen zufällig, und müssen zuerst an einer freien Position platziert werden.
Das fragen wir mittels einer *wird Tiles berührt* Kondition ab. Danach wandert der Ritter weiter, bis er auf ein Hindernis trifft, woraufhin er seine Richtung wieder ändert.

Berührt der Ritter den Feuerball, so erstarrt er (die Variable *Frozen* wird auf 1 gesetzt, und er wird zu Stein und bewegt sich nicht mehr).

![KnightCode](scratch-dragons-realm-v3/knight-code-1.png)

![KnightCode](scratch-dragons-realm-v3/knight-code-2.png)

![KnightCode](scratch-dragons-realm-v3/knight-code-3.png)

## Ausprobieren

Funktioniert dein Projekt? Wenn etwas noch nicht ganz klappt, kannst du deinen Code auch mit der Musterlösung unter [https://scratch.mit.edu/projects/81928816](https://scratch.mit.edu/projects/81928816) vergleichen.
