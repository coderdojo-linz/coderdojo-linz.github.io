---
layout: sushi
title: Einfaches Teleporter Plugin
description: In dieser Anleitung machst du ein einfaches Teleport-Plugin mit IntelliJ IDEA. 
---

# Minecraft Teleporter

Dieses plugin wurde mit der Entwicklungsumgebung [IntelliJ](https://www.jetbrains.com/idea/download)
der Firma JetBrains geschrieben. [IntelliJ](https://www.jetbrains.com/idea/download) unterstützt die
Entwicklung von Minecraft Plugins sehr gut.

## Vorbereitungen

Zuerst ist es notwending die Entwicklungsumgebung [herunterzuladen](https://www.jetbrains.com/idea/download) und zu installieren. Verwendet
hierfür die "Community Edition". Wenn das geschehen ist, bitte das Modul für Minecraft hinzufügen.

Dafür bitte unter "File" -> "Settings" die Einstellungen öffnen und danach "Plugins" klicken.

![](09_teleporter/intellij_install_plugin1.PNG)

Danach könnt ihr mit "Browse repositories" und dem Suchfeld nach "Minecraft" suchen.

![](09_teleporter/intellij_install_plugin2.PNG)

Ein Klick auf "Install" startet den Installationsvorgang (die Schaltfläche ist unter dem Titel und auf dem Bild leider nicht zu sehen).


## Neues Projekt anlegen

Im Menü "File" -> "New" könnt ihr nun ein neues Minecraft Projekt starten. 

![](09_teleporter/newproject2.png)

Bitte hier den passenden Minecraft Server (Bukkit) anhaken und auf "Next" klicken.

![](09_teleporter/newproject3.png)

Wir verwenden zum bauen des Plugins das "Gradle" - System. Die Werte für GroupId und ArtifactId sind momentan beliebig.
Mit "Next" gehts weiter.

Anschließend geben wir dem Plugin noch einen Namen und eine Beschreibung. Main Class Name ist der Name der Java-Klasse in die wir die Funktionen unseres
Plugins coden werden.  
![](09_teleporter/newproject4.png)

Danach erhält das Projekt noch einen Namen und wir legen fest, wo der Code gespeichert werden soll.
![](09_teleporter/newproject5.png)

Mit einem kurzen Klick auf "Finish" wird unser Projekt angelegt. Bitte kurz Geduld. Der Vorgang kann schon mal 1-2 Minuten dauern.

## Erstes Command

Wenn alle Schritte oben erfogreich waren, sollte euer Bildschirm nachher in etwa so aussehen:
![](09_teleporter/coding1.png)

Die wichtisten Dateien am Anfang sind 

1. **plugin.yml** - sie enthält die Beschreibung der Befehle die das Plugin können soll und
2. **Teleporter.java** - Wird im IntellJ nur als "Teleporter" angezeigt. Sie enthält den Code für die Aktionen.

Zuerst werden wir ein neues Kommando implementieren:
![](09_teleporter/coding2.png)

Damit wird festegelegt dass dieses Kommando von unserem Plugin behandelt wird. Nun müssen wir noch dafür sorgen, dass es auch behandelt wird:
Dazu öffnen wir die Klasse Teleporter und fügen "onCommand" ein. (ein druck auf \<strng\> und die Leertaste machen das viel einfacher).

![](09_teleporter/coding3.png)

Danach sorgen wir dafür, dass auch etwas passiert, wenn jemand "/sayhello" in den Chat tippt.

![](09_teleporter/coding4.png)

das sieht dann in etwa so aus:

![](09_teleporter/game1.png)

__Kleine hilfe am Rande:__  Damit ihr nicht jedes mal nach dem Bauen das Plugin in den Server hineinkopieren müsst, kann man mit folgendem kleinen
Zusatz im _build.gradle_ das auch automatisch erledigen lassen.

![](09_teleporter/gradle_deploy.PNG)

### Teleportieren

Um erfolgreich teleportiert werden zu können muss man vorher natürlich wissen wohin. Am Ende erscheint ihr noch in einer Wand oder in 10km Höhe.

Deswegen werden wir vorher einen Kommando definieren, bei dem man einen Ort markiert, an den Steve sich teleportieren soll.

__plugin.yml__
```
name: Teleporter
version: @version@
main: at.coderdojo.teleporter.Teleporter
load: STARTUP
authors: [Minecraft, Mastercoders]
description: Beispielplugin zum Teleportieren
website: https://coderdojo-linz.github.io/
commands:
  sayhello:
    description: Says hello
    usage: /sayhello
  teleportziel:
    description: Ziel, an das wir uns teleportieren wollen.
    usage: /teleportziel
  teleportzu:
    description: Teleportiere zum vorher markierten Ziel.
    usage: /teleportzu
```

_teleportziel_ soll das Ziel markieren, an das sich Steve teleportieren soll. z.B. kann er sich so jedesmal augenblicklich nach
Hause vor sein Bett teleportieren. Praktisch, wenn ihr euch schnell vor ein paar Zombies in Sicherheit bringen wollt tippt ihr danach
einfach _teleportzu_.

Nun fehlt uns nur noch der Code dazu im _Teleporter.java_.

Zuerst müssen wir die `onCommand` Funktion anpassen:

```java
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        //sender.sendMessage("Hallo " + sender.getName());
        switch (command.getName()) {
            case "sayhello":
                sender.sendMessage("Hallo " + sender.getName());
                break;
            case "teleportziel":
                teleportZielMerken(sender);
                break;
            case "teleportzu":
                teleportZuZiel(sender);
                break;
            default:
                sender.sendMessage("Leider kann ich das Kommando " + command.getName() + " noch nicht.");
        }

        return true;
    }
```

Damit kann `onCommand` zwischen den einzelnen Kommandos unterscheiden. Als nächstes brauche wir noch eine Möglichkeit die
gemerkten Position für jeden einzelnen Spieler zu merken.

```java
public final class Teleporter extends JavaPlugin {
    Dictionary<String, Location> teleportZiele = new Hashtable<>();

....
```

Die Funktion, sich den Punkt zu merken sieht dann in etwa so aus:
```java
    private void teleportZielMerken(CommandSender sender) {
        Player player = (Player) sender;
        teleportZiele.put(player.getName(), player.getLocation());
        player.sendMessage("Ok, " + player.getName() + ", ich habe mir das gemerkt");
    }
```

und die Funktion die Steve zu dem Ort zurückbringen soll in etwa so:
```java
    private void teleportZuZiel(CommandSender sender) {
        Player player = (Player) sender;
        if (teleportZiele.get(player.getName()) == null) {
            player.sendMessage("Hey, " + player.getName() + ". Du musst dir zuerst einen Punkt merken");
            return;
        }

        player.teleport(teleportZiele.get(player.getName()));
        player.sendMessage("Ok, " + player.getName() + ", hab dich dorthin geschickt");
    }
```

__Info:__ das `if (teleportZiele.get(player.getName()) == null)` dient dazu, zuerst festzustellen ob wir uns schon eine
Position für diesen Spieler gemerkt haben. Ansonst würde das `player.teleport` einen Fehler verursachen.

Das gesamte `Teleporter.java` sieht nach den Änderungen so aus:

```java
package at.coderdojo.teleporter;

import org.bukkit.Location;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.Dictionary;
import java.util.Hashtable;

public final class Teleporter extends JavaPlugin {
    Dictionary<String, Location> teleportZiele = new Hashtable<>();

    @Override
    public void onEnable() {
        // Plugin startup logic

    }

    @Override
    public void onDisable() {
        // Plugin shutdown logic
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        //sender.sendMessage("Hallo " + sender.getName());
        switch (command.getName()) {
            case "sayhello":
                sender.sendMessage("Hallo " + sender.getName());
                break;
            case "teleportziel":
                teleportZielMerken(sender);
                break;
            case "teleportzu":
                teleportZuZiel(sender);
                break;
            default:
                sender.sendMessage("Leider kann ich das Kommando " + command.getName() + " noch nicht.");
        }

        return true;
    }

    private void teleportZielMerken(CommandSender sender) {
        Player player = (Player) sender;
        teleportZiele.put(player.getName(), player.getLocation());
        player.sendMessage("Ok, " + player.getName() + ", ich habe mir das gemerkt");
    }

    private void teleportZuZiel(CommandSender sender) {
        Player player = (Player) sender;
        if (teleportZiele.get(player.getName()) == null) {
            player.sendMessage("Hey, " + player.getName() + ". Du musst dir zuerst einen Punkt merken");
            return;
        }

        player.teleport(teleportZiele.get(player.getName()));
        player.sendMessage("Ok, " + player.getName() + ", hab dich dorthin geschickt");
    }
}
```
