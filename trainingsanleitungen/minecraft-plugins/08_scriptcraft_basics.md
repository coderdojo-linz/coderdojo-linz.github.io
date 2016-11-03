---
layout: sushi
title: Grundlagen von Minecraft Mods mit JavaScript
description: In dieser Anleitung lernst du erste Grundlagen, wie man Minecraft Mods mit JavaScript entwickelt. 
---

# Grundlagen von Minecraft Mods mit JavaScript


## Systemvoraussetzungen

Du brauchst für diese Übungen einen Minecraft Server mit Scriptcraft. **Wenn du keine Erfahrung bzgl. Konfiguration von Computern, Java etc. hast, komm ins CoderDojo und bitte eine Mentorin, dir einen solchen Server zur Verfügung zu stellen.** Ansonsten hast du folgende Möglichkeiten:

* Folge der [Anleitung auf unserer Homepage](07_spigot_scriptcraft_docker.html)
* Installiere Scriptcraft lokal auf deinem Computer ([Installationsanleitung in Englisch](https://github.com/walterhiggins/ScriptCraft/blob/master/README.md))

Zum Programmieren von JavaScript brauchst du einen Texteditor. Empfehlenswert ist ein Editor, der speziell für Softwareentwicklung gedacht ist. Hier einige Links zu kostenlosen Editoren, mit denen du JavaScript gut schreiben kannst. Falls du nicht sicher bist, welchen du nehmen sollst, nimm gleich den ersten. Im Lauf der Zeit kannst du mit verschiedenen experimentieren und dich für den entscheiden, der dir am besten gefällt.

* [Visual Studio Code](https://code.visualstudio.com/){:target="_blank"} (Windows, MacOS, Linux)
* [Notepad++](https://notepad-plus-plus.org/download/v6.8.2.html){:target="_blank"} (Windows)
* [Sublime Text](http://www.sublimetext.com/2){:target="_blank"} (Windows, MacOS, Linux)
* [Brackets](http://brackets.io/){:target="_blank"} (Windows, MacOS, Linux)
* [Atom](https://atom.io/){:target="_blank"} (Windows, MacOS, Linux)

Um diese Übung ausprobieren zu können, brauchst du das Spiel Minecraft auf deinem Computer.


## Erste Schritte

1. Starte Minecraft

1. ![Multiplayer Mode](08_scriptcraft_basics/minecraft-multiplayer.png){: .right}
Wechsle in den *Multiplayer-Mode*.

1. Verbinde dich mit deinem Minecraft Server

1. ![Interaktives JavaScript](08_scriptcraft_basics/execute-interactive-js.png){: .right}
Du kannst jetzt interaktiv erste JavaScript-Kommandos als [Minecraft Befehle](http://minecraft-de.gamepedia.com/Befehl) ausführen:
   * Starte z.B. die *Chat-Konsole* mit der Taste `t`.
   * Merke dir: Jedes JavaScript-Kommando startet mit `/js`.
   * Gib ein `/js 1+2+3` und drücke *Enter*. Das Ergbnis wird angezeigt, also `6.0`.

1. Probiere jetzt folgende Befehle aus:
   * `/js console.log('Hallo Server')` zum Ausgeben einer Meldung auf der Konsole des Minecraft Servers
   * `/js var gruesse='Hallo Scriptcraft'` legt eine Variable an
   * `/js echo(gruesse)` gibt die zuvor angelegte Variable in Minecraft aus
   * `/js echo(self.name)` gibt deinen Namen aus. Merke dir, dass du mit `self` auf alle Daten deines Spielers zugreifen kannst.

1. Probiere jetzt Befehle zum Bauen aus:
   * `/js box(blocks.oak)` erstellt einen Block aus Eiche ([Liste aller Materialien](https://github.com/walterhiggins/ScriptCraft/blob/master/src/main/js/modules/blocks.js))
   * `/js box(blocks.wool.red, 5, 6, 7)` erstellt einen großen Block aus roter Wolle mit einer Breite von 5, einer Höhe von 6 und einer Tiefe von 7 Blöcken
   * `/js box(blocks.glass).fwd(2).box(blocks.glass).turn().fwd(2).box(blocks.glass)` erstellt Blöcke mit der *Drohne* (*Drone*). Wie du siehst, kannst du sie vorwärts bewegen (*fwd*), drehen (*turn*) etc.
   * `/js castle()` erstellt eine komplette Burg.
   * Stöbere durch die [*Drone*-Dokumentation](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-plugin) und probiere verschiedene Kommandos zum Bauen aus.

Ein Tipp am Ende: Wenn du zu einer neuen, leeren Welt zurückkehren möchtest, starte den Minecraft-Server neu.


## Entwickeln von Scripts

Erstelle mit deinem Editor im *plugins*-Verzeichns eine Datei *hochhaus.js* mit folgendem Inhalt (falls du nicht weißt wo das *plugins*-Verzeichnis ist, frage eine CoderDojo-Mentorin um Hilfe):

```
var utils = require('utils');

exports.hochhaus = function (stockwerke) {
    // Erstelle eine Drohne an der Position deines Spielers
    var d = new Drone(utils.getPlayerPos(self));

    // Bewege dich eine Ebene nach oben und baue ein Rechteck aus Stein 
    d.fwd(5)
        .box0(blocks.cobblestone, 25, 1, 25);
    
    // Baue die Stockwerke mit Hilfe einer JavaScript-Schleife
    for (var i = 0; i < stockwerke; i++) {
        // Baue zwei Ebenen aus Glas und oben drauf einen 
        // "Deckel" aus Stein.
        d.up()
            .box0(blocks.glass, 25, 1, 25)
            .up()
            .box0(blocks.glass, 25, 1, 25)
            .up()
            .box(blocks.cobblestone, 25, 1, 25);
    };
};
```

1. Starte den Minecraft-Server neu.

1. Rufe in Minecraft mit `/js hochhaus(3)` deine Funktion auf und beobachte, wie dein Script ein Hochhaus baut.<br/>
![Hochhaus](08_scriptcraft_basics/hochhaus.png)

1. Ändere etwas an deinem Script (z.B. mehr oder weniger Ebenen aus Glas)

1. Lade in Minecraft deine Scripts neu mit `/js refresh()`

1. Rufe deine Funktion nochmals auf und beachte, dass deine Änderung ohne Neustart des Servers wirksam geworden ist.

1. Hast du entdeckt, dass in dem Script ein Modul namens `utils` verwendet wird? Es enthält eine Menge nützlicher Hilfsfunktionen. Du kannst in der [Scriptcraft Dokumentation](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#utilities-module) nachlesen, was `utils` alles kann.


## Grundlagen von Events

In Mods musst do häufig auf Ereignisse reagieren (z.B. neuer Spieler meldet sich an, Block wird zerstört etc.).

Erstelle mit deinem Editor im *plugins*-Verzeichns eine Datei *welcome.js* mit folgendem Inhalt (falls du nicht weißt wo das *plugins*-Verzeichnis ist, frage eine CoderDojo-Mentorin um Hilfe):

```
events.playerJoin(function (event) {
    echo(event.player, "CoderDojo sagt Willkommen!");
});
```

1. Lade in Minecraft deine Scripts neu mit `/js refresh()`

1. ![Disconnect](08_scriptcraft_basics/server-disconnect.png){: .right}
Melde dich vom Minecraft Server ab.

1. Melde dich erneut beim Minecraft Server an. Dein Script wird automatisch das Event `playerJoin` empfangen und die Meldung im Script in Minecraft anzeigen.<br/>
![Ausgabe des Events](08_scriptcraft_basics/welcome-message.png)

1. In Minecraft gibt es hunderte von Events. Du kannst in der [Scriptcraft Dokumentation](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md) bei Bedarf nachforschen, was es alles für Events gibt.


## Etwas mehr über Events

Jetzt möchten wir darauf reagieren, wenn ein Pfeil ein Objekt trifft.

Erstelle mit deinem Editor im *plugins*-Verzeichns eine Datei *arrowHit.js* mit folgendem Inhalt (falls du nicht weißt wo das *plugins*-Verzeichnis ist, frage eine CoderDojo-Mentorin um Hilfe):

```
var fireworks = require('fireworks');

events.projectileHit(function (event) {
    var fireworkCount = 5;
    function launch() {
        fireworks.firework(event.entity.location);
        if (--fireworkCount) {
            setTimeout(launch, 2000);
        }
    }
    launch();

    event.entity.world.createExplosion(event.entity.location, 1.5);
});
```

1. Lade in Minecraft deine Scripts neu mit `/js refresh()`

1. Nimm den Bogen und schieße einen Pfeil ab. Dort wo der Pfeil landet, siehst du eine Explosion und ein kurzes Feuerwerk wird abgeschossen.<br/>
![Feuerwerk](08_scriptcraft_basics/fireworks.png)

1. Hast du entdeckt, dass in dem Script ein Modul namens `fireworks` verwendet wird? Du kannst in der [Scriptcraft Dokumentation](https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#fireworks-module) nachlesen, was `fireworks` alles kann.

1. Hast du entdeckt, dass in dem Script eine Objekt namens `world` verwendet wird? Du kannst in der [Spigot Dokumentation](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.html) nachlesen, was `world` sonst noch alles kann.


## Jetzt bist du dran

Erstelle aus den gelernten JavaScript-Grundlagen deinen eigenen Mod. Vielleicht hast du ein Idee für ein Mini-Game oder eine Quest, die andere dann spielen können.

Viele Spaß!
