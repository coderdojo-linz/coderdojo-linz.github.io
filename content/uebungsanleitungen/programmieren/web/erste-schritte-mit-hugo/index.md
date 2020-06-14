---
title: "Erste Schritte mit Hugo"
description: "In dieser Übung lernst du, wie du mit Hugo eine statische Webseite erstellen kannst"
level: 3
aliases:
- /trainingsanleitungen/web/erste-schritte-mit-hugo.html
categories:
- HTML
- Hugo
---

# Erste Schritte mit Hugo

## Was ist Hugo

[Hugo](https://gohugo.io/) ist ein statischer Webseitengenerator, der auf der Sprache [Go](https://de.wikipedia.org/wiki/Go_(Programmiersprache)) basiert.

## Was ist ein statischer Website Generator

Dynamische Webseiten werden erst beim Abruf vom Server generiert (z.B. PHP, ASP.NET). Statische Webseiten bestehen nur aus HTML, JavaScript, CSS und weiteren Resourcen wie Bildern oder Fonts.

Static Site Generators generieren statische Webseiten und ermöglichen damit die Trennung von Layout und Content. Mehr Infos dazu findest du unter [https://www.projectival.de/blog/static-site-generator-statische-webseiten-dynamische-webseiten/](https://www.projectival.de/blog/static-site-generator-statische-webseiten-dynamische-webseiten/).

## Installation

* Lade als erstes unter [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases) die aktuellste Version von Hugo 
für dein Betriebssystem runter. Verwende wenn möglich eine Version, die mit "hugo_extended_" beginnt. Diese Version enthält zusätzliche Funktionen für SASS, Minify, Fingerprinting, Image Processing und ähnliches.
* Kopiere dann den Inhalt der .zip Datei in einen neuen Ordner (z.B: `C:\Hugo\`).
* Öffne den Dialog zum Editieren deiner Umgebungsvariablen und füge zur Variable PATH, den Pfad zu deinem Ordner für Hugo hinzu (z.B. `C:\Hugo`). Unter [https://techmixx.de/windows-10-umgebungsvariablen-bearbeiten/](https://techmixx.de/windows-10-umgebungsvariablen-bearbeiten/) findest du eine Beschreibung, wie man Umgebungsvariablen bearbeiten kann.

Wenn du jetzt in einem Command Propmt den Befehl `hugo help` eingibst, erhältst du Informationen zu allen Kommandos in Hugo.

{{< imgblock "img/hugo-help.png" "Hugo Hilfe" >}}{{< /imgblock >}}

## Webseite anlegen

* Gehe im Dateiexplorer zu einem Ordner, in dem deine neue Webseite angelegt werden soll (z.B. `C:\Users\k.huber\Documents\Meine Webseiten\`)
* Öffne diesen Ordner im Command Prompt mit dem Befehl `cd C:\Users\k.huber\Documents\Meine Webseiten`
* Lege eine neue Webseite mit dem Befehl `hugo new site coderdojo-hugo-webseite`.

Du solltest jetzt im Command Prompt folgendes sehen:

{{< imgblock "img/coderdojo-hugo-webseite.png" "Meine erste Webseite mit Hugo" >}}{{< /imgblock >}}

Im Dateiexplorer siehst du im Ordner `Meine Webseiten` einen neuen Ordner `coderdojo-hugo-webseite` der auch bereits einige Unterordner und Dateien enthält.

{{< imgblock "img/coderdojo-hugo-webseite-dateiexplorer.png" "Meine erste Webseite mit Hugo" >}}{{< /imgblock >}}

## Projekt in Visual Studio Code öffnen

* Öffne den neuen Ordner `coderdojo-hugo-webseite` mit Visual Studio Code.

Im Explorer auf der linken Seite siehst du ebenfalls die Ordnersturktur, die von Hugo angelegt wurde. 

## Erste Seite anlegen

* Öffne das Terminal im Visual Studio Code (STRG + ö).
* Lege mit dem Befehl `hugo new _index.md` deine erste Seite an.

Im Ordner `content` wurde die neue Seite `_index.md` angelegt.

{{< imgblock "img/seite1.png" "seite1.md in Hugo" >}}{{< /imgblock >}}

Der obere Bereich enhält den sogenannten [Front Matter](http://gohugo.io/content/front-matter/) Bereich mit Metadaten für die Seite.

* Ändere den Wert für `title` im oberen Bereich der Seite auf `CoderDojo Webseite`
* Ändere den Wert für `draft` im oberen Bereich der Seite auf `false`.

Unterhalb wird der Inhalt der Seite erfasst. Dazu verwenden wir [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Aus dem Markdown wird später von Hugo HTML generiert.

Du kannst zum Beispiel folgenden Inhalt in deine erste Seite einfügen:

```md
---
title: "CoderDojo Webseite"
date: 2020-05-15T10:32:00+02:00
draft: false
---

# Lerne programmieren im CoderDojo Linz

Möchtest du Computerspiele nicht nur spielen sondern selbst programmieren? Dann bist du richtig beim CoderDojo!

## Was ist ein CoderDojo?

Das CoderDojo ist ein Club für Kinder und Jugendliche, die programmieren lernen und Spaß haben wollen. In regelmäßigen Treffen wird gelernt wie man Code schreibt, Webseiten entwickelt oder Apps und Spiele programmiert.

## Für wen?

Teilnehmen können Kinder und Jugendliche im Alter von 8 bis 17 Jahren. Es sind keine Vorkenntnisse notwendig und die Teilnahme ist kostenfrei. Kinder unter 13 Jahren müssen von einem Erwachsenen begleitet werden.

## Wann?

Wir treffen uns jeden zweiten Freitag von 16:00 bis 18:00. Für den ersten Besuch ist eine Anmeldung notwendig.
```

## Layout definieren

Nun fehlt uns noch ein letzter Baustein, um die erste Seite anzeigen zu können - das Layout.

* Füge im Ordner `layouts` eine Datei `index.html` hinzu.
* Type `!` und dann `Enter`, um ein minimales HTML Template zu erhalten.
* Ändere den Title auf CoderDojo.
* Füge im Body folgendes hinzu: `{% raw %}{{ .Content }}{% endraw %}`

Das Layout Template sollte nun so aussehen:

{{< imgblock "img/single-layout.png" "Layout" >}}{{< /imgblock >}}

Wichtig ist hier der Bereich `{% raw %}{{ .Content }}{% endraw %}`. An dieser Stelle wird später der Content aus der aufgerufenen Seite (z.B. _index.md) eingefügt.

## Hugo Webserver starten

* Führe im Visual Studio Terminal den Befehl `hugo server` aus.

{{< imgblock "img/hugo-server.png" "Hugo Server" >}}{{< /imgblock >}}

Nun kannst du im Browser wie im Command Prompt angegeben die URL http://localhost:1313/ öffnen. Die Teile aus dem Layout index.html und aus dem Content _index.md werden nun zusammengefügt.

Falls dein Browser die URL nicht öffnen kann, weil er versucht die https Version der Seite zu laden (z.B. in Chrome), kannst du den Server stattdessen mit folgendem Command starten:

```shell
hugo server --baseURL http://127.0.0.1
```

Du kannst im Browser jetzt folgende URL öffnen: http://127.0.0.1:1313/

Solange der Hugo Server läuft, werden Änderungen die du in den Dateien machst, sofort im Browser angezeigt.

{{< imgblock "img/hugo-im-browser.png" "Hugo im Browser" >}}{{< /imgblock >}}

## Weitere Seiten erstellen

* Du kannst den Terminalbereich splitten (Icon rechts oben im Terminal) oder ein weiteres Terminal Fenster öffnen, um trotz laufendem Webserver weitere Kommandos ausführen zu können.
* Führe im neuen Terminalbereich das Kommando `hugo new about.md` aus.
* Führe im neuen Terminalbereich das Kommando `hugo new termine.md` aus.
* Ändere in den beiden generierten Datein im `content` Ordner den Wert für `draft` auf `false`.
* Erfassen im Markdownbereich für beide Datein zumindest eine Überschrift.

{{< imgblock "img/neue-seiten-hinzufuegen.png" "Hugo Server" >}}{{< /imgblock >}}

{{< imgblock "img/termine-erstellen.png" "Hugo Server" >}}{{< /imgblock >}}

## Layout für alle weiteren Seiten

Das Layout für die Startseite ist in Hugo etwas besonderes. Für die weiteren Seiten müssen wir ebenfalls ein Layout definieren, das kann aber jetzt von allen weiteren Seiten verwendet werden. Natürlich kannst du aber auch mehrere Layouts für verschiedene Seiten definieren.

* Lege dazu im Ordern `layouts` einen weiteren Ordner `_default` an.
* In diesen Ordner lege eine neue Datei `single.html` an.
* Kopiere den Inhalt von `index.html` in `single.html`.

Wenn du alle Schritte befolgt hast, kannst du jetzt im Browser auch die URLs `http://127.0.0.1:1313/termine/` und `http://127.0.0.1:1313/about/` aufrufen.

{{< imgblock "img/termine.png" "Hugo Server" >}}{{< /imgblock >}}

## Layout wiederverwenden

Wir haben jetzt in `layouts\index.html` und in `layouts\_default\single.html` das selbe HTML eingeben müssen. Änderungen müssten wir jetzt in zwei Dateien warten. Um dieses Problem zu umgehen, können wir im Ordner `layouts\_default` eine weitere Datei `baseof.html` anlegen.

Kopiere erneut den Content von `single.html` in `baseof.html`. Ersetze darin aber `{% raw %}{{ .Content }}{% endraw %}` durch `{% raw %}{{ block "main" . }} {{ end }}{% endraw %}`. `main` ist jetzt ein Platzhalter für Content. `baseof.html` sollte jetzt so aussehen:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoderDojo</title>
</head>
<body>
    {% raw %}{{ block "main" . }} {{ end }}{% endraw %}
</body>
</html>
```

`single.html` und `index.html` kannst du jetzt vereinfachen. Du brauchst nur noch im Bereich `main` den Content einfügen. Du kannst den Inhalt beider Dateien durch folgende drei Zeilen ersetzen.

```html
{% raw %}{{ define "main" }}{% endraw %}
{% raw %}{{ .Content }}{% endraw %}
{% raw %}{{ end }}{% endraw %}
```

Das File `baseof.html` dient als Basis für alle anderen Layouts und du musst jetzt nur noch den `main` Bereich definieren. Du kannst natürlich auch noch weitere Platzhalter einfügen.

## Bootstrap einfügen

Wenn wir jetzt z.B. das [Bootstrap Framework](https://getbootstrap.com/) für alle Seiten einfügen möchten, dann brauchen wir das nur noch in der Datei `baseof.html` zu machen. Kopiere dazu wie im Quickstart Tutorial von Bootstrap beschrieben die Referenzen für CSS und JavaScript in den `head` bzw. `body` Bereich von `baseof.html`:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoderDojo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>

<body>
    {% raw %}{{ block "main" . }} {{ end }}{% endraw %}

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>

</html>
```

Die Datei `single.html` ändern wir folgendemaßen, um den Content wie in Bootstrap üblich im mittleren Bereich des Browsers darzustellen:

```html
{% raw %}{{ define "main" }}{% endraw %}
<div class="mt-5"></div>

<div class="container">
    <div class="row">
        <div class="col">
            {% raw %}{{ .Content }}{% endraw %}
        </div>
    </div>
</div>
{% raw %}{{ end }}{% endraw %}
```

Für die Hauptseite mit dem Layout `index.html` fügen wir zusätzlich noch einen [Bootstrap Jumbotron](https://getbootstrap.com/docs/4.5/components/jumbotron/) hinzu:

```html
{% raw %}{{ define "main" }}{% endraw %}
<div class="jumbotron">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1 class="display-4">CoderDojo Linz</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col">
            {% raw %}{{ .Content }}{% endraw %}
        </div>
    </div>
</div>
{% raw %}{{ end }}{% endraw %}
```

Die Startseite sollte jetzt so aussehen:

{{< imgblock "img/jumbotron.png" "Jumbotron" >}}{{< /imgblock >}}

## Menü zur Navigation

Als nächstes fügen wir die [Bootstrap Navbar](https://getbootstrap.com/docs/4.5/components/navbar/) zur Navigation zwischen den einzelnen Seiten ein. Wir müssen diese jetzt nur im der Datei `baseof.html` einfügen, da alle anderen Seiten diese als Basis verwenden. Um die Seite noch modularer aufzubauen, können wir die Navbar auch in eine eigene Datei geben, die wir dann in `baseof.html` referenzieren. Es gibt in Hugo dafür den Ordner `layout\partials`.

* Lege im Ordner `layouts` einen neuen Ordner `partials` an.
* Lege im neuen Ordner `partials` die Datei `nav.html` an.
* Füge folgendes HTML in `nav.html` ein:

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    {% raw %}<div class="container">
        <a class="navbar-brand" href="/">CoderDojo Linz</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item {{ cond (eq .Page.File.Path "\\_index.md") "active" "" }}">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ cond (eq .Page.File.Path "\\about.md") "active" "" }}" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link {{ cond (eq .Page.File.Path "\\termine.md") "active" "" }}" href="/termine">Termine</a>
                </li>
            </ul>
        </div>
    </div>{% endraw %}
</nav>
```

Damit die aktive Seite hervorgehoben werden kann, kann man die `class` `avtive` setzen. Mit Hugo können wir abfragen, welchen Pfad die aktuelle Seite hat: `{% raw %}{{ cond (eq .Page.File.Path "\\about.md") "active" "" }}{% endraw %}`.

Damit die Navbar auch verwendet wird, müssen wir in `baseof.html` noch einen Verweis auf `nav.html` einfügen. Füge dazu im `<body>` als erste Zeile `{% raw %}{{ partial "nav.html" . }}{% endraw %}` ein.

Das Ergebnis sollte dann so aussehen:

{{< imgblock "img/navbar.png" "Navbar" >}}{{< /imgblock >}}

## Listen

In Hugo können nicht nur einzelne Seiten sondern auch Listen aus den Inhalten vom `content` Ordner erzeugt werden. Legen wir dazu ein paar neue Seiten mit Übungsbeispielen für das CoderDojo an. Damit das einfacher wird, legen wir zuerst aber ein Muster für ein Übungsbeispiel an. Lege dazu im Ordner `archetypes` eine neue Datei `uebungsbeispiele.md` an. Diese bekommt folgenden Inhalt:

```html
{% raw %}---
title: "{{ replace .Name "-" " " | title }}"
description: "..."
date: {{ .Date }}
level: 1
draft: false
---

# {{ replace .Name "-" " " | title }}

...{% endraw %}
```

Damit können wir die Parameter vorbelegen. Wir führen hier auch die zwei neuen Parameter `description` und `level` ein, die wir später in unseren Layouttemplates verwenden können.

Jetzt legen wir die neuen Dateien an:

```shell
hugo new uebungsbeispiele/python/erste-schritte.md
hugo new uebungsbeispiele/python/geisterspiel.md
hugo new uebungsbeispiele/python/_index.md
hugo new uebungsbeispiele/scratch/fische-fangen.md
hugo new uebungsbeispiele/scratch/paddle-game.md
hugo new uebungsbeispiele/scratch/space-shooter.md
hugo new uebungsbeispiele/scratch/sterne-fangen.md
hugo new uebungsbeispiele/scratch/_index.md
hugo new uebungsbeispiele/web/erste-schritte-mit-html.md
hugo new uebungsbeispiele/web/hugo.md
hugo new uebungsbeispiele/web/_index.md
hugo new uebungsbeispiele/_index.md
```

Du kannst in alle Dateien für Übungsanleitungen noch zumindest eine Überschrift im Markdown Bereich einfügen, damit du sie beim Testen leichter auseinanderhalten kannst. Die Dateien `_index.html` brauchen keinen Content.

Du kannst die Dateien im Browser jetzt schon mit z.B. der URL `http://127.0.0.1:1313/uebungsbeispiele/web/erste-schritte-mit-html/` aufrufen.

Damit wir auch eine Liste aller Anleitungen anzeigen können, brauchen wir ein weiteres Layout. Füge dazu im Ordner `layouts` einen neuen Ordner `uebungsbeispiele` ein. Darin brauchen wir eine neue Datei `list.html`.

Die Datei soll folgenden Inhalt haben:

```html
{% raw %}{{ define "main" }}
<div class="mt-5"></div>

<div class="container">
    <div class="row">
        <div class="col">
            <h1>{{ .Title }}
                {{ if isset .Params "img" }}
                <img src="/img/uebungsbeispiele/{{.Params.img}}" alt="{{.Title}}" style="object-fit: contain; max-height: 40px; vertical-align: baseline; margin-left: 10px;">
                {{ end }}
            </h1>
            <div class="mt-5"></div>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
        {{ range (.Pages.ByParam "Title").ByParam "Level" }}
        <div class="col mb-4">
            <div class="card h-100">
                <div class="card-header"><span class="badge badge-pill {{ cond (eq .Params.Level 1) "badge-primary" (cond (eq .Params.Level 2) "badge-success" "badge-danger") }}">Level {{.Params.Level}}</span></div>
                <div class="card-body">
                    <h5 class="card-title">{{.Title}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{.Date.Format "02.01.2006"}}</h6>
                    <p class="card-text">{{.Description}}</p>
                </div>
                <div class="card-footer"><a href="{{.Permalink}}" class="card-link">Zur Anleitung</a></div>
            </div>
        </div>
        {{ end }}
    </div>
</div>
{{ end }}{% endraw %}
```

Im Template werden die einzelnen Pages aus diesem Ordner als [Bootstrap Cards](https://getbootstrap.com/docs/4.5/components/card/) dargestellt. Wenn du jetzt die URL `http://127.0.0.1:1313/uebungsbeispiele/scratch/` eintippst, werden alle Seiten in diesem Ordner als Cards dargestellt:

{{< imgblock "img/cards.png" "Cards" >}}{{< /imgblock >}}

Du kannst die neuen Seiten auch in die Navbar in der Datei `nav.html` einfügen. Füge dazu folgendes Element in das Menü ein:

```html
{% raw %}<li class="nav-item dropdown {{ cond (hasPrefix .Page.File.Path "uebungsbeispiele") "active" "" }}">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Übungsbeispiele
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="/uebungsbeispiele">Übersicht</a>
        <div class="dropdown-divider"></div>
        {{ with .Site.GetPage "/uebungsbeispiele" }}
        {{ range sort .Pages "Params.Level" "asc" }}
        <a class="dropdown-item" href="{{.Permalink}}">{{.Title}}</a>
        {{ end }}
        {{ end }}
    </div>
</li>{% endraw %}
```

{{< imgblock "img/navbar-2.png" "Navbar" >}}{{< /imgblock >}}

## Alternative List Layouts

Wenn du für manche Listen (z.B. für die erste Ebene der Übungsanleitungen) an anderes List Layout verwenden möchtest, kannst du einen Parameter mit dem Layout angeben. Lege dazu zuerst ein neues Layout `topics-list.html` im Ordner `layouts/uebungsanleitungen` an. Der Inhalt des neuen Layouts sollte so aussehen:

```html
{% raw %}{{ define "main" }}
<div class="mt-5"></div>

<div class="container">
    <div class="row row-cols-1 row-cols-md-3">
        {{ range sort .Pages "Params.Level" "asc" }}
        <div class="col mb-4">
            <div class="card h-100">
                {{ if isset .Params "img" }}
                <img src="/img/uebungsbeispiele/{{.Params.img}}" class="card-img-top mx-auto" alt="{{.Title}}" style="object-fit: contain; max-height: 100px; text-align: center;margin-top: 20px;">
                {{ end }}

                <div class="card-body">
                    <h5 class="card-title">{{.Title}}</h5>
                    <p class="card-text">{{.Description}}</p>
                </div>
                
                <div class="card-footer"><a href="{{.Permalink}}" class="card-link">Zu den Anleitungen</a></div>
            </div>
        </div>
        {{ end }}
    </div>
</div>
{{ end }}{% endraw %}
```

Hier wird kein Level angezeigt, dafür wird ein Image in den Carsds angezeigt. Images werden in Hugo in Ordner `static` gespeichert. Lege in diesem Ordner einen neuen Ordner `img` und darin `uebungsbeispiele` an. Kopiere die folgenden drei Dateien in diesen Ordner:

* [scratch.png](scratch.png)
* [python.png](python.png)
* [html5.png](html5.png)

Jetzt müssen wir noch festlegen, welche Seiten das neue Layout verwenden sollen. Füge dazu in der Datei `content\uebungsbeispiele\_index.html` den Parameter `layout: topics-list` hinzu. Jetzt müssen wir bei den drei `_index.html` Dateien für Scratch, Python und Web je einen Parameter für das zu verwendende Bild hinzufügen: `img: "scratch.png"`.

{{< imgblock "img/topics.png" "Topics" >}}{{< /imgblock >}}

# Listen mit externen Daten

Für die CoderDojo Termine in Linz gibt es ein Service unter der URL [https://participants-management-service.azurewebsites.net/api/events/?past=false](https://participants-management-service.azurewebsites.net/api/events/?past=false)

Wir legen für die Termine ein neues Layout im Ordner `layouts/_default` mit dem Namen `termine.html` an. Es soll folgenden Inhalt haben:

```html
{% raw %}{{ define "main" }}
<div class="mt-5"></div>

<div class="container">
    <div class="row">
        <div class="col">
            {{ .Content }}
        </div>
    </div>

    {{ $termine := getJSON "https://participants-management-service.azurewebsites.net/api/events/?past=false" }}

    <table class="table">
        <tr>
            <th>Datum</th>
            <th>Beschreibung</th>
        </tr>
        {{ range $termine }}
        <tr>
            <td>
                {{ dateFormat "02. Jan 2006" .date }}
            </td>
            <td>
                {{ .location }}
            </td>
        </tr>
        {{ end }}
    </table>
</div>
{{ end }}{% endraw %}
```

Der obere Bereich sieht aus, wie in den anderen Layouts - hier wird der Content aus dem Markdown dargestellt. Dann werden die Termine aus dem Service geladen uns in einer Tabelle dargestellt.

Jetzt müssen wir noch die Datei `termine.md` anpassen:

```md
---
title: "Termine"
date: 2020-05-15T11:03:58+02:00
layout: termine
draft: false
---

# Termine

Hier findest du die nächsten CoderDojo Termine.
```

{{< imgblock "img/termine-2.png" "Termine" >}}{{< /imgblock >}}