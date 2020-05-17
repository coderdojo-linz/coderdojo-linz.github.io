---
layout: sushi
title: Erste Schritte mit Hugo
description: In dieser Übung lernst du, wie du mit Hugo eine statische Webseite erstellen kannst
---

# Erste Schritte mit Hugo

## Was ist Hugo

[Hugo](https://gohugo.io/) ist ein statischer Webseitengenerator. Man definiert Layoutmuster und Inhalte für die einzelnen Seiten und Hugo baut daraus  HTML Seiten.

## Installation

* Lade als erstes unter [https://github.com/spf13/hugo/releases](https://github.com/spf13/hugo/releases) die aktuellste Version von Hugo 
für dein Betriebssystem runter. 
* Kopiere dann den Inhalt der .zip Datei in einen neuen Ordner (z.B: `C:\Hugo\`).
* Benenne die Datei `hugo_0.19_windows_amd64.exe` in `hugo.exe` um.
* Öffne den Dialog zum Editieren deiner Umgebungsvariablen und füge zur Variable PATH, den Pfad zu deinem Ordner für Hugo hinzu (z.B. `C:\Hugo`).

Wenn du jetzt in einem Command Propmt den Befehl `hugo help` eingibst, erhältst du Informationen zu allen Kommandos in Hugo.

![Hugo Hilfe](erste-schritte-mit-hugo/hugo-help.png){: .max-full}

## Webseite anlegen

* Lege im Dateiexplorer einen Ordner für deine Webseiten an (z.B. `C:\Users\k.huber\Documents\Meine Webseiten\`)
* Öffne diesen Ordner im Command Prompt mit dem Befehl `cd C:\Users\k.huber\Documents\Meine Webseiten`
* Lege eine neue Webseite mit dem Befehl `hugo new site meine-erste-webseite`.

Du solltest jetzt im Command Prompt folgendes sehen:

![Meine erste Webseite mit Hugo](erste-schritte-mit-hugo/meine-erste-webseite.png){: .max-full}

Im Dateiexplorer siehst du im Ordner `Meine Webseiten` einen neuen Ordner `meine-erste-webseite` der auch bereits einige Unterordner und Dateien enthält.

![Meine erste Webseite mit Hugo](erste-schritte-mit-hugo/meine-erste-webseite-dateiexplorer.png){: .max-full}

## Erste Seite anlegen

* Wechsel im Command Prompt mit dem Befehl `cd meine-erste-webseite` in den neuen Ordner.
* Lege mit dem Befehl `hugo new seite1.md` deine erste Seite an.

![Meine erste Webseite mit Hugo](erste-schritte-mit-hugo/generiere-seite1.png){: .max-full}

## Projekt in Visual Studio Code öffnen

* Öffne den neuen Ordner `meine-erste-webseite` mit Visual Studio Code.

Im Explorer auf der linken Seite siehst du ebenfalls die Ordnersturktur, die von Hugo angelegt wurde. Im Ordner `content` wurde die neue seite1 angelegt.

![seite1.md in Hugo](erste-schritte-mit-hugo/seite1.png){: .max-full}

Der obere Bereich enhält den sogenannten [Front Matter](http://gohugo.io/content/front-matter/) Bereich mit Metadaten für die Seite.

* Ändere den Wert für `draft` im oberen Bereich der Seite auf `false`.

Unterhalb wird der Inhalt der Seite erfasst. Du kannst an dieser Stelle einfach HTML einfügen. Oder du kannst auch [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) verwenden.

## Layout definieren

Nun fehlt uns noch ein letzter Baustein, um die erste Seite anzeigen zu können - das Layout.

* Füge im Ordner `layouts` einen neuen Ordner `_default` hinzu.
* Füge im neuen Ordner eine Datei `single.html` mit folgendem Inhalt hinzu:

![Layout](erste-schritte-mit-hugo/single-layout.png){: .max-full}

Wichtig ist hier der Bereich `{{ .Content }}`. An dieser Stelle wird später der Content aus der aufgerufenen Seite (z.B. seite1.md) eingefügt.

## Hugo Webserver starten

* Führe im Command Prompt den Befehl `hugo server` aus.

![Hugo Server](erste-schritte-mit-hugo/hugo-server.png){: .max-full}

Nun kannst du im Browser wie im Command Prompt angegeben die URL http://localhost:1313/seite1 öffnen. Die Teile aus dem Layout single.html und aus dem Content seite1.md werden nun zusammengefügt.

![Hugo im Browser](erste-schritte-mit-hugo/hugo-im-browser.png){: .max-full}

## HTML Dateien erstellen

* Mit dem Befehl `hugo` im Command Prompt erstellst du die HTML Dateien, die du dann z.B. auf einem Webserver zur Verfügung stellen kannst.

Du erhälst dadurch den neuen Ordner `public`, der das generierte HTML enthält:

![Generiertes HTML](erste-schritte-mit-hugo/public-ordner.png){: .max-full}








