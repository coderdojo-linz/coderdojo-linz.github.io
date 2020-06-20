---

title: "Lokaler Minecraft-Server mit Scriptcraft"
description: "In dieser Übung lernst du, einen Minecraft-Server mit Scriptcraft auf deinem Computer zu installieren."
level: 1
weight: 1
img: "scriptcraft.png"
categories:
- JavaScript
---

# Installation eines Minecraft Servers mit Scriptcraft

## Voraussetzungen

In dieser Übung installieren wir einen Minecraft Server mit Scriptcraft auf deinem Windows-Computer.

## Systemvoraussetzungen

Bevor du den Minecraft-Server installieren kannst, musst du folgende Software installieren:

1. *Java SE Development Kit* (kurz *JDK*)<br/>
   Lade die Windows-Version von der [Download-Seite](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) herunter und installiere sie.

1. *Git*<br/>
   Lade die Windows-Version von der [Download-Seite](https://git-scm.com/download/win) herunter und installiere sie. Installiere alle verfügbaren Teile von Git, die im Installationsprogramm auswählbar sind.

1. Lege mit dem *Windows Explorer* ein leeres Verzeichnis an, in dem wir den Minecraft-Server installieren können. Unser Vorschlag ist `c:\spigot`.

## Spigot

Jetzt können wir mit der Installation loslegen. Wir werden den Minecraft-Server namens [Spigot](https://www.spigotmc.org/) installieren.

1. Lade die [Installationdatei von Spigot](https://hub.spigotmc.org/jenkins/job/BuildTools/lastStableBuild/artifact/target/BuildTools.jar) herunter und speichere sie im Installationsverzeichnis `c:\spigot`.

1. Starte das Programm *git bash*<br/>
   {{< imgblock "img/git-bash-starten.png" "Git Bash starten" >}}{{< /imgblock >}}

1. Wechsle mit dem Kommando `cd /c/spigot` in das Installationsverzeichnis.

1. Baue den Spigot-Server mit dem Kommando `java -jar BuildTools.jar`. Hab etwas Geduld, dieser Schritt kann einige Minuten dauern.

1. Die *BuildTools* brauchen wir jetzt nicht mehr. Du kannst sie mit dem Kommando `rm -f BuildTools.*` löschen.

Der Minecraft-Server ist jetzt fertig. Es fehlt nur noch Scriptcraft.

## Scriptcraft

Damit wir Minecraft mit JavaScript programmieren können, müssen wir das Plugin *Scriptcraft* installieren:

1. Erstelle ein Unterverzeichnis für *plugins* mit dem Kommando `mkdir plugins`.

1. Wechsle in das Unterverzeichnis mit dem Kommando `cd plugins`.

1. Lade die [Scriptcraft](https://scriptcraftjs.org/download/latest/scriptcraft-3.2.1/scriptcraft.jar) herunter und speichere es im Verzeichnis `c:\spigot\plugins`.

## Minecraft Server zum ersten Mal starten

Jetzt sind wir soweit, dass wir den Minecraft-Server starten können:

1. Wechsle in das Installationsverzeichnis mit dem Kommando `cd /c/spigot`.

1. Starte den Minecraft-Server mit dem Kommando `java -jar spigot-1.11.2.jar`.

1. An dieser Stelle können wir noch nicht zu spielen beginnen. Wir müssen erst die [Minecraft Lizenzbedingungen](https://account.mojang.com/documents/minecraft_eula) (in Englisch "End User License Agreement" = *EULA*) akzeptieren. Dazu öffnet man die Datei `eula.txt` und ersetzt `eula=false` durch `eula=true`.<br/>
  {{< imgblock "img/eula-akzeptieren.png" "EULA akzeptieren" >}}{{< /imgblock >}}

1. Starte den Minecraft-Server nochmal mit dem Kommando `java -jar spigot-1.11.2.jar`. Jetzt müsste es klappen :-)

## Mit Server verbinden

Los geht es. Starte Minecraft und verbinde dich zu deinem Server. Der Servername ist `localhost`.

{{< imgblock "img/minecraft-direkt-verbinden.png" "Minecraft verbinden" >}}{{< /imgblock >}}