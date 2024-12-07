---
title: "Installation eines lokalen Minecraft-Servers auf dem eigenen Rechner"
description: "In dieser Übung installieren wir einen Minecraft-Server. Dieser Server wird auf dem eigenen Rechner installiert."
level: 1
img: "local-server-cover.jpg"
---
<!-- Cover image by [allinonemovie](https://pixabay.com/users/allinonemovie-201131/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1106252) from [Pixabay](https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1106252) (CC0) -->

# Installation eines Minecraft-Servers

## Einführung

In dieser Übung installieren wir einen Minecraft Server. Dieser Server wird auf dem eigenen Rechner installiert. Zuerst installieren wir die Standardversion des Servers. Anschließend installieren wir einen Forge- und Paper-Server. Forge ist eine Modifikation für Minecraft, die es ermöglicht, Mods zu installieren. Paper ist eine spezielle Server-Software, die es erlaubt, Plugins zu installieren.

## Voraussetzungen

- Minecraft Java Edition gekauft und installiert ([minecraft.net/java-edition](https://www.minecraft.net/de-de/store/minecraft-java-edition))
- Erfahrung mit der Erstellung von Dateien und Ordnern auf deinem Rechner.
- Minecraft-Kenntnise (z. B. wie man Minecraft startet und sich mit einem Server verbindet).
- Wenn du einen Forge- oder Fabric-Server installieren möchtest, benötigst du zusätzlich Erfahrung mit der Installation von Mods.
- Einen Texteditor (z. B. Visual Studio Code oder Sublime Text) zum Bearbeiten von Dateien. Ich persönlich empfehle Sublime Text zum Bearbeiten einfacher Dateien.

## Vorbereitung

### Java Development Kit (JDK) installieren

Falls noch nicht geschehen, installiere Minecraft Java Edition auf deinem Rechner. Zusätzlich benötigst du das JDK (Java Development Kit, Java Entwickler-). Falls du Java noch nicht installiert hast, kannst du es von der [Adoptium Java-Website](https://adoptium.net/) herunterladen.

{{< imgblock "img/browser-adoptium.png" "Screenshot der Adoptium-Website" >}}{{< /imgblock >}}

Java wurde 1991 von Sun Microsystems entwickelt und von Oracle in 2010 gekauft. Weil Oracle das JDK nicht mehr zum direkten Download anbietet, empfehlen wir dir, Adoptium Java zu verwenden. Adoptium Java ist eine Open-Source-Version von Java, die von der Eclipse Foundation entwickelt wird.

### Minecraft Server Software herunterladen

Besuche die Minecraft Server Download-Seite ([minecraft.net/download/server](https://www.minecraft.net/de-de/download/server)) und lade die Server-Software herunter. Die Server-Software ist eine JAR-Datei (Java Archive), die du auf deinem Rechner ausführen kannst. Falls du eine ältere Version des Servers benötigst, kannst du sie auf der [Minecraft Versions-Website](https://mcversions.net/) herunterladen (Achte darauf, die Server.jar herunterzuladen).

{{< imgblock "img/browser-minecraftserverdownload.png" "Screenshot der Minecraft-Website" >}}{{< /imgblock >}}

Nachdem du die Server-Software heruntergeladen hast, erstelle einen neuen Ordner auf deinem Rechner und verschiebe die Server-Software in diesen Ordner. Zur besseren Übersicht kannst du den Ordner `Minecraft Server` und die Datei `minecraft_-_server-X.X.X.jar` nennen (wobei `X.X.X` die Versionsnummer des Servers ist).

### Dateiendungen anzeigen

Standardmäßig sind Dateiendungen in Windows ausgeblendet. Um Dateiendungen anzuzeigen, öffne den Datei-Explorer und klicke auf `Ansicht` bzw. `View` in der oberen Menüleiste. Öffne das Menü `Zeigen` bzw. `Show` und aktiviere die Option `Dateinamenerweiterungen` bzw. `File Name Extensions`.

{{< imgblock "img/explorer-hiddenfiles.png" "Screenshot der Minecraft-Website" >}}{{< /imgblock >}}

Unter MacOS kannst du Dateiendungen anzeigen, indem du in den Finder-Einstellungen die Option `Alle Dateinamenerweiterungen einblenden` aktivierst.
In Linux werden Dateiendungen standardmäßig angezeigt.

## Vanilla Minecraft Server installieren

Vannila Minecraft ist die Standardversion des Spiels. Das kommt von Vanille-Eis, das als Basis für viele andere Eissorten dient. Der Vanilla Minecraft Server ist die Basisversion des Servers, auf der alle anderen Server-Versionen aufbauen.

### Server starten

Öffne den Ordner, in dem du die Server-Software gespeichert hast. Erstelle eine neue Textdatei und benenne sie in `start.bat` (Windows) oder `start.sh` (MacOS/Linux) um.

Du kannst einen Startdatei-Generator (z. B. [flags.sh](https://flags.sh/)) verwenden, um die Startdatei zu erstellen. Füge den generierten Code in die Datei ein. Die fertige Datei sollte ungefähr wie folgt aussehen:

Windows:

```batch
@echo off
java -Xms4096M -Xmx4096M ... -jar minecraft_server-X.X.X.jar nogui
pause
```

MacOS/Linux:

```bash
#!/bin/bash
java ...
```

Wenn die zweite Zeile so aussieht, ist das kein Problem. Diese zusätzlichen Optionen sind für die Server-Performance und -Stabilität gedacht. Du kannst sie verwenden, um deinen Server zu optimieren:

```bash
java -Xms4096M -Xmx4096M --add-modules=jdk.incubator.vector -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -jar minecraft_server-X.X.X.jar --nogui
```

`@echo off` schaltet die Ausgabe von Befehlen aus.

`#!/bin/bash` sagt MacOS/Linux, dass du die Datei mit "bash" ausführen möchtest. Die zweite Zeile startet den Server.

`pause` hält das Fenster offen, damit du die Serverausgabe lesen kannst.

Deine Optionen für den zugewiesenen Arbeitssüpeicher an (`-Xmx` und `-Xms`) können variieren. `-Xmx` gibt die maximale Speichergröße an, die der Server verwenden kann. `-Xms` gibt die minimale Speichergröße an, die der Server beim Starten verwendet. In diesem Beispiel verwenden wir 1 GB für beide Optionen. Du kannst die Speichergröße an deine Bedürfnisse anpassen.

`-jar minecraft_server-X.X.X.jar` sagt Java, wie die Serverdatei heißt. Ersetze `X.X.X` durch die Versionsnummer des Servers.

`nogui` startet den Server ohne grafische Benutzeroberfläche, da dies die Performance verbessert. Wenn du den Server mit einer grafischen Benutzeroberfläche starten möchtest, entferne `nogui`.

Speichere die Datei und führe sie aus. Ein schwarzes Fenster geht auf und der Server startet... Und stoppt sofort wieder. Das ist normal. Der Server erstellt die Konfigurationsdateien und stoppt dann wieder. Du musst nämlich zuerst die Minecraft EULA (Endbenutzer-Lizenzvereinbarung) akzeptieren. Öffne dazu die Datei `eula.txt` und ändere `eula=false` in `eula=true`. Speichere die Datei und starte den Server erneut.

{{< imgblock "img/console-eula.png" "Konsolenfenster mit dem EULA Error" >}}{{< /imgblock >}}

{{< imgblock "img/editor-eula.png" "Konsolenfenster mit dem EULA Error" >}}{{< /imgblock >}}

Der Server sollte jetzt starten und die Welt generieren. Du kannst den Server über die Adresse `localhost` erreichen. Öffne Minecraft und verbinde dich mit dem Server. Wenn du mit deinen Freunden im selben Netzwerk spielen möchtest, gib ihnen deine private IP-Adresse (die Kannst du unter deinen Interneteinstellungen finden) Wenn du den Server für andere Spieler im Internet zugänglich machen möchtest, musst du die Portweiterleitung in deinem Router einrichten (siehe unten).

{{< imgblock "img/minecraft-localhost.png" "Minecraft Server-Verbindung" >}}{{< /imgblock >}}

## Forge bzw. Fabric Server installieren

Forge ist eine Modifikation für Minecraft, die es ermöglicht, Mods zu installieren. Mods sind Erweiterungen für Minecraft, die das Spiel verändern oder verbessern. Forge ist eine der beliebtesten Modifikationen für Minecraft und wird von vielen Mod-Entwicklern unterstützt. Fabric ist eine alternative Modifikation für Minecraft, die von einigen Mod-Entwicklern bevorzugt wird.

### Forge bzw. Fabric Server Software herunterladen

Gehe zur [Forge-Website](https://files.minecraftforge.net/) oder zur [Fabric-Website](https://fabricmc.net/use/server/) und lade die Server-Software herunter. Die Server-Software ist eine JAR-Datei, die du auf deinem Rechner ausführen kannst. Erstelle einen neuen Ordner auf deinem Rechner und verschiebe die Server-Software in diesen Ordner.

Für Forge musst du zuerst Forge installieren. Gehe dazu zur [Forge-Website](https://files.minecraftforge.net/) und lade Forge herunter. Forge ist eine JAR-Datei, die du auf deinem Rechner ausführen kannst. Erstelle einen neuen Ordner auf deinem Rechner und verschiebe die Forge-Modifikation in diesen Ordner. Führe Forge aus, um die Modifikation zu installieren.

{{< imgblock "img/forge-installer.png" "Screenshot der Forge-Website" >}}{{< /imgblock >}}

Fabric benötigt keine separate Installation. Lade die Fabric-Server-Software herunter und verschiebe sie in den Ordner, den du zuvor erstellt hast.

### Mods installieren

Forge und Fabric ermöglichen es, Mods zu installieren. Mods sind Erweiterungen für Minecraft, die das Spiel verändern oder verbessern. Du kannst Mods von Websites wie [CurseForge](https://www.curseforge.com/minecraft/mc-mods) oder [Modrinth](https://modrinth.com/mods) herunterladen. Lade die Mods herunter und verschiebe sie in den `mods`-Ordner im Server-Ordner. Du musst die Mods auch auf dem Client installieren, um sie verwenden zu können.

### Forge- bzw. Fabric-Server starten

Gehe wie beim Vanilla Minecraft Server vor und erstelle eine Startdatei für den Forge- oder Fabric-Server. Ferwende die neue Server-Software (`forge-X.X.X-X.X.X-X.jar` oder `fabric-server-mc.X.X.X-loader.X.X.X-launcher.X.X.X.jar`) anstelle der Vanilla-Server-Datei.

## Weitere Server-Software

Es gibt viele weitere Server-Software für Minecraft, die es ermöglichen, Plugins zu installieren. Einige der beliebtesten Server-Software sind Spigot, Paper und Bukkit. Diese Server-Software ermöglichen es, Plugins zu installieren, die das Spiel verändern oder verbessern. Auf diese werde ich hier nicht eingehen, da sie komplexer sind und mehr Erfahrung erfordern.

## Weitere Schritte

### Portweiterleitung

Wenn du deinen Server für andere Spieler im Internet zugänglich machen möchtest, musst du die Portweiterleitung in deinem Router einrichten. Öffne dazu die Router-Konfiguration und leite den Port 25565 an die IP-Adresse deines Rechners weiter. Die genaue Vorgehensweise hängt von deinem Router-Modell ab. Du findest die Anleitung in der Bedienungsanleitung des Routers oder auf der Website des Herstellers. Achte darauf, dass du die IP-Adresse deines Rechners statisch einstellst, damit sie sich nicht ändert. Eine allgemeine Anleitung dazu findest du auf dem [NordVPN-Blog](https://nordvpn.com/de/blog/portweiterleitung/)

### Server-Management

Sobald dein Server läuft, musst du ihn verwalten. Das bedeutet, dass du regelmäßig Backups erstellst, den Server aktualisierst und die Spieler verwaltest. Du kannst ein Server-Management-Tool wie [Pterodactyl](https://pterodactyl.io/) verwenden, um den Server zu verwalten.

### Einen Server mieten

Wenn du deinen Server nicht auf deinem eigenen Rechner hosten möchtest, kannst du einen Server mieten. Es gibt viele Anbieter, die Minecraft-Server-Hosting anbieten. Am Besten ist es, keinen Minecraft-Server, sondern einen KVM oder VPS zu mieten. Ich persönlich bin mit [Datalix](https://datalix.de/) seit Jahren sehr zufrieden.

## Fazit

In dieser Übung haben wir einen lokalen Minecraft-Server installiert. Wir haben die Standardversion des Servers installiert und einen Forge- und Fabric-Server installiert. Wir haben gelernt, dass man Mods und Plugins installieren kann, um das Spiel zu verändern oder zu verbessern. Wir haben auch gelernt, dass man Portweiterleitung benötigt, um den Server für andere Spieler zugänglich zu machen.
