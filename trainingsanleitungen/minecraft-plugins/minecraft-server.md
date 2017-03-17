---
layout: sushi
title: Installation eines Minecraft Servers
description: In dieser Übung lernst du, einen Minecraft Server auf Linux zu installieren
---

# Installation eines Minecraft Servers

## Voraussetzungen

In dieser Übung installieren wir einen Minecraft Server. Als Grundlage brauchst du dafür einen Computer, auf dem [Linux](https://de.wikipedia.org/wiki/Linux) installiert ist. Linux ist eine freie Software, die kostenlos im Internet zu haben ist.

Falls du nicht sicher bist, welches Linux du verwenden sollst, empfehlen wir für diese Übung [Ubuntu](https://www.ubuntu.com/). Du bekommst den Ubuntu Server zur Installation [kostenlos im Internet](https://www.ubuntu.com/download/server). Eine deutsche Anleitung zur Installation von Ubuntu findest du z.B. im [ubuntuusers Wiki](https://wiki.ubuntuusers.de/Server_Installation/).

Falls du keinen eigenen Server hast, sprich mit dem Mentorenteam vom CoderDojo Linz. Wir können eine limitierte Anzahl von Ubuntu-Servern, die in der [Cloud](https://de.wikipedia.org/wiki/Cloud_Computing) laufen, zur Verfügung stellen.

## Zugriff auf deinen Ubuntu-Server

Falls du direkten Zugriff auf den Ubuntu-Server hast, kannst du die folgenden Schritte in einem [lokalen Terminal](https://wiki.ubuntuusers.de/Terminal/) durchführen.

Wenn dein Server in der Cloud läuft und du keinen direkten Zugang dazu hast, musst du aus der Ferne zugreifen. Dafür brauchst du [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). Lade die Software herunter und installiere sie. Wenn du sie startest, musst du die [IP-Adresse](https://de.wikipedia.org/wiki/IP-Adresse) deines Servers eingeben. Wenn du nicht sicher bist, wo du die IP-Adresse her bekommst, bitte jemanden vom CoderDojo Mentorenteam um Hilfe.

![PuTTY](minecraft-server/putty-ip-adresse.jpg)

**Wichtig:** Damit der Zugriff auf den Server funktioniert, musst du möglicherweise die [Firewall](https://de.wikipedia.org/wiki/Firewall) konfigurieren. Bitte einen CoderDojo Mentor um Hilfe, wenn du nicht weißt, wie das geht.

## Systemvoraussetzungen installieren

Wir verwenden [Minecraft Server Control](https://github.com/MinecraftServerControl/mscs):

```
sudo apt-get update
sudo apt-get install default-jre perl libjson-perl python make wget rdiff-backup rsync socat iptables git
git clone https://github.com/MinecraftServerControl/mscs.git
sudo make install
```

```
sudo vim /etc/apt/sources.list
# Add: deb http://overviewer.org/debian ./
sudo wget -O - http://overviewer.org/debian/overviewer.gpg.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install minecraft-overviewer
```

```
# download latest forge from http://files.minecraftforge.net/maven/net/minecraftforge/forge/
cd /opt/mscs/server
sudo wget http://files.minecraftforge.net/...
sudo java -jar forge-...-installer.jar --installServer

```
