---
layout: sushi
title: Installation eines Minecraft Servers
description: In dieser Übung lernst du, einen Minecraft Server auf Linux zu installieren
---

# Installation eines Minecraft Servers

## Voraussetzungen

In dieser Übung installieren wir einen Minecraft Server. Als Grundlage brauchst du dafür einen Computer, auf dem [Linux](https://de.wikipedia.org/wiki/Linux) installiert ist. Linux ist eine freie Software, die kostenlos im Internet zu haben ist.

Falls du nicht sicher bist, welches Linux du verwenden sollst, empfehlen wir für diese Übung [Ubuntu](https://www.ubuntu.com/). Du bekommst den *Ubuntu Server* zur Installation [kostenlos im Internet](https://www.ubuntu.com/download/server). Eine deutsche Anleitung zur Installation von Ubuntu findest du z.B. im [ubuntuusers Wiki](https://wiki.ubuntuusers.de/Server_Installation/).

Falls du keinen eigenen Server hast, sprich mit dem Mentorenteam vom CoderDojo Linz. Wir können eine limitierte Anzahl von Ubuntu-Servern, die in der [Microsoft Azure](https://azure.microsoft.com) [Cloud](https://de.wikipedia.org/wiki/Cloud_Computing) laufen, zur Verfügung stellen.

## Zugriff auf deinen Ubuntu-Server

### Lokales Terminal

Falls du direkten Zugriff auf den Ubuntu-Server hast, kannst du die in dieser Übung enthaltenen Schritte in einem [lokalen Terminal](https://wiki.ubuntuusers.de/Terminal/) durchführen.

### Secure Shell (SSH)

Wenn dein Server in der Cloud läuft und du keinen direkten Zugang dazu hast, musst du aus der Ferne zugreifen. Dafür verwendet man eine [Secure Shell](https://de.wikipedia.org/wiki/Secure_Shell). Üblicherweise bezeichnet sie kurz als **ssh**. Mit ihr kannst du aus der Ferne deinen Server administrieren, Dateien rauf und runter kopieren ([Secure Copy](https://de.wikipedia.org/wiki/Secure_Copy) oder kurz *scp*) und vieles mehr.

Unter Windows verwendet man häufig die kostenlose Software [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html), um bequem mit *ssh* auf einen Linux-Server zuzugreifen. Lade die Software herunter und installiere sie. Wenn du sie startest, musst du die [IP-Adresse](https://de.wikipedia.org/wiki/IP-Adresse) deines Servers eingeben. Wenn du nicht sicher bist, wo du die IP-Adresse her bekommst, bitte jemanden vom CoderDojo Mentorenteam um Hilfe.

![PuTTY](minecraft-server/putty-ip-adresse.jpg)

Wenn du Linux verwendest, brauchst du *PuTTY* nicht unbedingt. *ssh* ist schon eingebaut. Im [UbuntuUsers Wiki](https://wiki.ubuntuusers.de/SSH/) kannst du nachlesen, wie du *ssh* unter Linux verwendest.

### FileZilla

Es kommt oft vor, dass man Dateien von seinem lokalen Computer auf seinen Server in der [Cloud](https://de.wikipedia.org/wiki/Cloud_Computing) kopieren will. Das geht sehr gut mit der kostenlosen Software [FileZilla](https://filezilla-project.org/). [Zur Installationsanleitung...](https://wiki.filezilla-project.org/Client_Installation)

### Firewall

**Wichtig:** Damit der Zugriff auf den Server funktioniert, musst du möglicherweise die [Firewall](https://de.wikipedia.org/wiki/Firewall) konfigurieren. Bitte einen CoderDojo Mentor um Hilfe, wenn du nicht weißt, wie das geht.

## Minecraft Server Control (*mscs*)

Zur Verwaltung unserer Minecraft-Welten verwenden wir [Minecraft Server Control](https://github.com/MinecraftServerControl/mscs), kurz *mscs*. Mit *mscs* kannst du unter anderem ganz einfach:

* neue Minecraft-Server und -Welten erstellen.
* Welten starten und stoppen.
* Sicherheitskopien deiner Welten erstellen.

**Wichtiger Tipp:** Wenn du wissen möchtest was *mscs* alles kann, lies unbedingt [die Dokumentation](https://github.com/MinecraftServerControl/mscs#overview). Das ist außerdem eine super Gelegenheit, um Englisch zu üben.

Lass uns als erstes also *mscs* installieren. Das folgende Script zeigt wie es gemacht wird. **Wichtiger Tipp:** Bevor du beginnst, lies die Hinweise nach dem Script, um zu verstehen was es macht.

```
# Aktualisieren der Installationsquellen für unseren Ubuntu-Server
sudo apt-get update
```

* Zeilen, die mit `#` beginnen, sind Kommentare. Sie dienen nur zur Erklärung von Scriptcode und haben keine Funktion.
* Das vorangestellte `sudo` sorgt dafür, dass das Kommando als `root`, also als Superuser mit Administratorrechten ausgeführt wird. [Mehr über *sudo*...](https://wiki.ubuntuusers.de/sudo/)
* Mit `apt-get` kann man Softwarepakete verwalten. In diesem Fall wird `update` angegeben. Dadurch bringst du das Verzeichnis verfügbarer Softwarepakete auf deinem Server auf den neuesten Stand. [Mehr über *apt-get*...](https://wiki.ubuntuusers.de/apt/apt-get/)

```
# Installieren der Systemvoraussetzungen von mscs
sudo apt-get -y install default-jre perl libjson-perl python make wget rdiff-backup rsync socat iptables git vim
```

Mit `apt-get install` installiert man Softwarepakete. Hier werden in einer Zeile viele Pakete installiert. Sie sind alle notwendig, damit *mscs* funktioniert. Du fragst dich, woher wir wissen, was *mscs* braucht? Das kann man in der [*mscs* Dokumentation](https://github.com/MinecraftServerControl/mscs) nachlesen.

```
# Mscs herunterladen und eigentlichen Installation starten
cd /tmp
git clone https://github.com/MinecraftServerControl/mscs.git
cd mscs
sudo make install
```

* `cd` steht für *Change Directory*. Du wechselst in diesem Fall in das temporäre Verzeichnis deines Linux-Servers. Dort kannst du Dateien "zwischenlagern".
* Mit `git clone https://github.com/...` lädt man Software aus [GitHub](https://github.com/). *mscs* ist dort zu finden.
* Weil das `git clone`-Kommendo mit `mscs.git` endet, wird die Software in das Verzeichnis `mscs` kopiert. Daher müssen wir in dieses Verzeichnis wechseln.
* Mit `make install` starten wir die eigentliche Installation. Dieser Schritt ist in der [*mscs* Dokumentation](https://github.com/MinecraftServerControl/mscs) beschrieben.

Wenn du das alles gemacht hast, kannst du stolz auf dich sein. Du hast *mscs* installiert und kannst jetzt Minecraft-Server damit verwalten!

## Welt erzeugen und spielen

Lass uns eine neue Welt erzeugen:

```
# Wir legen eine Welt namens myflatworld an
mscs create myflatworld 25565

# Die neue Welt taucht in der Liste an Welten auf
mscs list

# Wir können uns den Status der Welt ansehen
mscs status myflatworld

# Nachdem die neue Welt noch nicht gestartet wurde, starten wir sie
mscs start myflatworld
```

An dieser Stelle können wir noch nicht zu spielen beginnen. Wir müssen erst die [Minecraft Lizenzbedingungen](https://account.mojang.com/documents/minecraft_eula) (in Englisch "End User License Agreement" = *EULA*) akzeptieren. Das machen wir, indem wir eine Zeile in einer Datei unserer Welt ändern. Alle unsere Welten sind im Verzeichnis `/opt/mscs/worlds/` zu finden. In unserem Fall müssen wir also in das Verzeichnis `/opt/mscs/worlds/myflatworld`.

```
# Wechseln wir in das Verzeichnis unserer Welt
cd /opt/mscs/worlds/myflatworld

# Öffnen wir die Datei eula.txt in einem Editor
sudo vim eula.txt
```

In dem Script oben kommt der Editor *vim* vor. *vim* ist ein grundlegender Editor, der bei Bedarf auf jeden System installiert werden kann. Mache dich gemeinsam mit dem Mentorenteam vom CoderDojo mit *vim* vertraut.
   * Bei Bedarf findest du eine gute [Einführung in *vim*](https://wiki.ubuntuusers.de/VIM/) im Internet
   * Nützlich ist auch ein [Cheat Sheet](http://vim.rtorr.com/)

Ändere mit *vim* `eula=false` auf `eula=true` und speichere die Datei mit vim-Kommando `:x` ab.

```
# Starte die Welt erneut
mscs start myflatworld

# Prüfe nochmals den Status, jetzt muss die Welt gestartet sein
mscs status myflatworld
```

Jetzt kannst du Minecraft starten und dich zu deinem Server verbinden. Lade deine Freunde ein, damit ihr gemeinsam in einer Welt spielen könnt.

![Minecraft direkt verbinden](minecraft-server/minecraft-direkt-verbinden.png)


## Forge

Für viele Mods braucht man [Minecraft Forge](http://minecraft-de.gamepedia.com/Mod/Minecraft_Forge). *Mscs* unterstützt *Forge*. Lass uns *Forge* daher installieren.

**Wichtiger Tipp:** Auf der [Forge Webseite](http://files.minecraftforge.net/maven/net/minecraftforge/forge/) findest du eine Liste von Programmversionen. Such dir die *Recommended*-Version (=empfohlene Version) heraus und trage die genaue Versionsnummer (z.B. `1.11.2-13.20.0.2228`) in das Installationsscript unten ein.

![Forge Recommended Version](minecraft-server/forge-recommended.png)

```
# Speichere die Versionsnummer in einer Variable
VER="1.11.2-13.20.0.2228"

# Forge Installationsprogramm laden
cd /opt/mscs && sudo mkdir server && cd server
sudo wget http://files.minecraftforge.net/maven/net/minecraftforge/forge/$VER/forge-$VER-installer.jar

# Installationsprogramm starten
sudo java -jar forge-$VER-installer.jar --installServer

# Installationsprogramm löschen, es wird nicht mehr benötigt
sudo rm -f forge-$VER-installer.jar*
```

Jetzt können wir eine Minecraft Welt mit *Forge* erzeugen. **Wichtiger Tipp:** Du musst im folgenden Script die Versionsnummer von Minecraft und den gewünschten Welt-Namen ändern.

```
MINECRAFT_VER="1.11.2"
WORLD_NAME="forge"

# Minecraft-Welt anlegen
mscs create $WORLD_NAME 25565
cd /opt/mscs/worlds/$WORLD_NAME

# Einstellungen für die Verwendung von Forge ändern
echo "mscs-client-version=$MINECRAFT_VER" | sudo tee -a mscs.properties
echo "mscs-server-version=$MINECRAFT_VER" | sudo tee -a mscs.properties
echo "mscs-server-jar=forge-$VER-universal.jar" | sudo tee -a mscs.properties
echo "mscs-server-url=" | sudo tee -a mscs.properties

# Zu Testzwecken einen Forge Mod (Furniture) in der Welt installieren
sudo mkdir mods && cd mods
sudo wget https://mrcrayfish.com/files/mods/cfm/cfm-4.1.2-mc1.11.2.jar
cd ..

# Spieleinstellungen auf kreativ und flache Welt setzen
echo "gamemode=1" | sudo tee -a server.properties
echo "level-type=FLAT" | sudo tee -a server.properties

# Lizenzbedingungen akzeptieren
echo "#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula)." | sudo tee eula.txt
echo "#$(date)" | sudo tee -a eula.txt
echo "eula=true" | sudo tee -a eula.txt
```

Jetzt könnten wir die Welt eigentlich starten. Wir wollen uns selbst aber zum Op machen. Das machen wir mit Hilfe der Datei [ops.json](http://minecraft-de.gamepedia.com/Server.properties#ops.json). Du brauchst die UUID und den Namen deines Minecraft-Spielers. Wenn du die UUID nicht kennst, kannst du sie [im Internet herausfinden](https://mcuuid.net/).

```
UUID="5817f013-80f7-4b0c-a3ed-2116702c4a4a"
NAME="WitchCharlie"
LEVEL=4

printf "[\n" | sudo tee ops.json
printf "\t{\n" | sudo tee -a ops.json
printf "\t\t\"uuid\": \"$UUID\",\n" | sudo tee -a ops.json
printf "\t\t\"name\": \"$NAME\",\n" | sudo tee -a ops.json
printf "\t\t\"level\": $LEVEL\n" | sudo tee -a ops.json
printf "\t}\n" | sudo tee -a ops.json
printf "]\n" | sudo tee -a ops.json
```

So, los gehts!

```
# Welt starten
mscs start $WORLD_NAME

# Bei Bedarf Ausgabe von Forge ansehen
# mscs console $WORLD_NAME
```

Viel Spaß!

![Minecraft mit Furniture Mod](minecraft-server/minecraft-mit-furniture-mod.jpg)

