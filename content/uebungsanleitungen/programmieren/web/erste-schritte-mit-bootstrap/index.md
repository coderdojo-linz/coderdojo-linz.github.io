---
title: "Erste Schritte mit Bootstrap"
description: "In dieser Übung lernst du, wie du mit Bootstrap Webseiten stylen kannst."
level: 3
aliases:
  - /trainingsanleitungen/web/erste-schritte-mit-bootstrap.html
---

# Erste Schritte mit Bootstrap

Für diese Übung starten wir mit einer existierenden Webseite, die nur HTML enthält, aber noch gar keine Styles.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scratch - Fang mich</title>
</head>

<body>
    <div class="content">
        <h1>Scratch Fang-Mich <span class="version">Scratch 3.0</span></h1>

        <div class="intro">
            <img src="images/endgame.png" alt="Endgame">
            <p>In diesem Spiel bist du ein Fisch, der dem großen Haifisch entkommen muss. Schaffst du es?</p>
        </div>
        ...
```

Ihr könnt das initiale Projekt mit allen Bildern aber ohne Styles hier herunterladen: [Startprojekt](initial-project.zip)

Wenn ihr die Webseite index.html darin öffnet, sieht das dann so aus:

{{< imgblock "img/website-without-styles.png" "Website without styles" >}}{{< /imgblock >}}

## Bootstrap hinzufügen

In der Übung [CSS Advanced Styles](css-advanced-styles.html) haben wir gelernt, wie wir selbst CSS Styles schreiben, um das HTML hübscher zu gestalten.

In dieser Übung schreiben wir die Styles nicht selbst, sondern verwenden dazu das [Bootstrap](https://getbootstrap.com/) Framework in der Version 4.4. Unter **Get started** findet ihr alle Anweisungen, wie ihr Bootstrap in eure Webseite einbauen könnt.

* Kopiert dazu die Zeile aus dem CSS Block in den `<head>` Bereich eures HTMLs:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scratch - Fang mich</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

...
```

* Die Zeilen aus dem JS (JavaScript) Block kommen ans Ende des HTMLs direkt vor das schließende `</body>`Tag:

```html
    ...

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
```

Wenn du das Ergebnis mit vorher vergleichst siehst du, dass sich die Schriftart, die Schriftgrößen und Abstände geändert haben. Sonst sieht alles noch wie vorher aus.

## Content

Im ersten Schritt kümmern wir uns darum, dass der Inhalt nicht mehr am Rand klebt. Bootstrap stellt dafür die [Container](https://getbootstrap.com/docs/4.4/layout/overview/#containers) zur Verfügung. Probiere verschiedene Container in deinem HTML aus. Füge folgenden Code dazu direkt unter das öffnende `<body>` Tag ein:

```html
<div class="container" style="background-color: red; height: 20px;"></div>
<div class="container-sm" style="background-color: green; height: 20px;"></div>
<div class="container-md" style="background-color: blue; height: 20px;"></div>
<div class="container-lg" style="background-color: yellow; height: 20px;"></div>
<div class="container-xl" style="background-color: orange; height: 20px;"></div>
<div class="container-fluid" style="background-color: violet; height: 20px;"></div>
```

Wenn du dir das Ergebnis im Browser ansiehst und das Browserfenster vergrößerst und verkleinerst, wirst du sehen, dass manche Container je nach Größe des Fensters über die gesamte Breite gehen oder zentriert dargestellt werden:

{{< imgblock "img/containers.png" "Containers" >}}{{< /imgblock >}}

Wir wollen in unserem Projekt den `container-md` verwenden. Lösche dazu die Test-Zeilen von vorher wieder und füge stattdessen unter `<div class="content">` den Container ein:

```html
<body>
    <div class="content">
        <div class="container-md">
        ...
        </div>
    </div>
    ...
</body>
```

Jetzt wird der Inhalt in der Mitte dargestellt, nur wenn das Fenster kleiner ist, wird die gesamte Breite genutzt:

{{< imgblock "img/website-with-container.png" "Containers" >}}{{< /imgblock >}}

## Jumbotron

Als nächstes wollen wir den Einleitungsbereich hervorheben. In Bootstrap gibt's dafür den [Jumbotron](https://getbootstrap.com/docs/4.4/components/jumbotron/). Wir nehmen dazu die Elemente `<h1>` und `<div class="intro">` aus dem vorher angelegten Container raus und fügen stattdessen darüber einen Jumbotron mit den beiden Elementen ein:

```html
<body>
    <div class="content">
        <div class="jumbotron">
            <h1>Scratch Fang-Mich <span class="version">Scratch 3.0</span></h1>

            <div class="intro">
                <img src="images/endgame.png" alt="Endgame">
                <p>In diesem Spiel bist du ein Fisch, der dem großen Haifisch entkommen muss. Schaffst du es?</p>
            </div>
        </div>

        <div class="container-md">
            ...
```

Das funktionert schon gut, dieser Bereich wird jetzt grau hinterlegt. Allerdings wird der Inhalt nicht wie im Container zentriert. Dazu können wir auch in den Jumbotron wieder einen Container einfügen:

```html
<body>
    <div class="content">
        <div class="jumbotron">
            <div class="container-md">
                <h1>Scratch Fang-Mich <span class="version">Scratch 3.0</span></h1>

                <div class="intro">
                    <img src="images/endgame.png" alt="Endgame">
                    <p>In diesem Spiel bist du ein Fisch, der dem großen Haifisch entkommen muss. Schaffst du es?</p>
                </div>
            </div>
        </div>

        <div class="container-md">
```

Um das Ergebnis noch weiter zu verbessern, fügen wir noch weitere Bootstrap Klassen hinzu:

- Wir zentrieren den Text im Jumbotron. Bootstrap bietet uns dafür die Klasse `text-center`. Diese fügen wir zum Container hinzu (Zeile 4).
- Die Version in der Überschrift soll kleiner und heller dargestellt werden. Wir ändern dazu das `<span class="version">` auf `<small class="version text-muted">`. Das Element `<small>` Tag steht in HTML generell zur Verfügung um Texte kleiner zu machen. Die Klasse `text-muted` kommt wieder von Bootstrap.
- Im `<p>` Tag fügen wir noch die Klasse `lead` von Bootstrap hinzu, um den Text hervorzuheben.

```html
<body>
    <div class="content">
        <div class="jumbotron">
            <div class="container-md text-center">
                <h1>Scratch Fang-Mich <small class="version text-muted">Scratch 3.0</small></h1>

                <div class="intro">
                    <img src="images/endgame.png" alt="Endgame">
                    <p class="lead">In diesem Spiel bist du ein Fisch, der dem großen Haifisch entkommen muss. Schaffst du es?</p>
                </div>
            </div>
        </div>
```

Hier unser Ergebnis mit Jumbotron:

{{< imgblock "img/website-with-jumbotron.png" "Containers" >}}{{< /imgblock >}}

## Eigene Styles hinzufügen

Auch wenn wir Bootstrap verwenden, können wir eigene Styles zu unserem Projekt hinzufügen. Damit wir die Styles für die Webseite in einem eigenen File verwalten können, legen wir zuerst einen Ordner *styles* in unserem Projekt an, und in diesem Ordner brauchen wir ein neues File *style.css*.

Im `head` unsere Webseite müssen wir einen Verweis auf das File einfügen. Wichtig ist, dass unsere eigenen Styles nach den Bootstrap Styles eingefügt werden. Nur so können wir die Bootstrap Styles gegebenenfalls überschreiben.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scratch - Fang mich</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css">
</head>
```

Legen wir gleich noch ein paar eigene Styles im File style.css an:

```css
h1,
h2 {
    text-transform: uppercase;
    margin-block-start: 2rem;
    margin-block-end: 1rem;
    color: #0081e4;
}

img {
    max-width: 100%;
}
```

Die Überschriften `<h1>` und `<h2>` werden dadurch in blauen Großbuchstaben mit etwas mehr Abstand als in Bootstrap dargestellt. Die `max-width` bei Bildern verhindert, dass diese bei kleineren Fenstern über den rechten Rand hinausgehen. Man könnte das in Bootstrap zwar auch mit der Klasse `img-fluid` lösen, diese müsste man aber zu jedem einzelnen Bild hinzufügen.

## Grid Layout

Als nächstes sehen wir uns das [Grid Layout](https://getbootstrap.com/docs/4.4/layout/grid/) von Bootstrap an. Um das Grid zu verwenden brauchen wir ein `<div class="row">`. Innerhalt der Row können mit `<div class="col">` Spalten angelegt werden. Der Inhalt wird gleichmäßig auf alle Spalten in einer Zeile aufgeteilt.

Bei sehr kleinen Browserfenstern macht die Darstellung von Spalten aber oft keinen Sinn. Man kann daher angeben, wann in Spalten aufgeteilt werden soll. Mit `<div class="col-md">` gibt man an, dass man nur bei Fenstern >= medium (768px) Spalten haben möchte. Sonst werden die Inhalte untereinander dargestellt.

Wenn die Inhalte nicht gleichmäßig aufgeteilt werden sollen, kann auch angegeben werden, wie breit ein `<div class="col">` sein soll. Bootstrap geht von 12 Spalten je Zeile aus. Mit `<div class="col-1">` wird 1/12 der Breite verwendet, `<div class="col-6">` braucht die Hälfte der Breite und `<div class="col-8">` braucht 2/3 der Breite. Wenn in Summe 12 überschritten wird, dann wird eine neue Zeile begonnen.

Man kann die Angabe der Breite auch mit der Angabe des Displays kombinieren: `<div class="col-md-8">` = 2/3 der Breite aber nur nur bei Fenstern >= medium (768px). Und es ist auch möglich mehrere dieser Angaben zu kombinieren: `<div class="col-sm-8 col-md-6">` = 2/3 der Breite bei Fenstern >= small (576px) aber nur 1/2 der Breite bei Fenstern >= medium (768px).

Füge zum Testen folgenden Container am Beginn deines HTMLs ein:

```html
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                eine von drei Spalten
            </div>
            <div class="col">
                eine von drei Spalten
            </div>
            <div class="col">
                eine von drei Spalten
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md">
                eine von drei Spalten wenn >= medium
            </div>
            <div class="col-md">
                eine von drei Spalten wenn >= medium
            </div>
            <div class="col-md">
                eine von drei Spalten wenn >= medium
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-8">
                große Spalte
            </div>
            <div class="col">
                kleine Spalte
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-8">
                große Spalte wenn >= medium
            </div>
            <div class="col">
                kleine Spalte wenn >= medium
            </div>
        </div>
        <hr/>
    </div>

    ...
```

Je nach Größe des Fensters werden die Inhalte der zweiten und vierten Zeile entweder nebeneinander oder untereinander dargestellt:

{{< imgblock "img/grid-system.png" "Grid System" >}}{{< /imgblock >}}

Versuche selbst, das Spaltenlayout zu verändern.

Wenn du fertig bist, lösche den Testcontainer wieder aus deinem HTML.

### Grid Layout anwenden

In unserem Beispiel wenden wir das Grid Layout jetzt für die Überschriften **Fisch bewegen**, **Haifisch bewegen** und **Fisch fangen** an. Wir beginnen damit, nach der Überschrift eine Zeile einzufügen. In diese Zeile kommen zwei Spalten: eine für den gesamten Text und eine für das Bild. Bei Fenstergrößen von small und kleiner soll der Inhalt wie bisher untereinander dargestellt werden. Bei medium wollen wir 6 von 12 Spalten für den Text und bei large und größer nehmen wir 8 Spalten. Die restlichen der 12 Spalten werden für das Bild verwendet.

```html
<h2 id="fisch-bewegen">Fisch bewegen</h2>

<div class="row">
    <div class="col-md-6 col-lg-8">
        <p>Damit du den Fisch bewegen kannst, musst er nach links und rechts sowie oben und unten bewegt
            werden
            können.</p>

        <ol>
            <li>Wähle zuerst den Fisch aus, damit er blau umrandet ist.</li>
            <li>Im Tab <em>Code</em> kannst du deinen Fisch nun bewegen. Verwende das Ereignis <em>Wenn
                    Taste …
                    gedrückt</em> unter <em>Ereignisse</em>.</li>
            <li>Verknüpfe es jeweils mit einer Drehung <em>setze Richtung auf …</em> unter
                <em>Bewegung</em>, damit
                der
                Fisch in die richtige Richtung schaut.</li>
            <li>Außerdem brauchen wir <em>gehe …er Schritt</em>, um den Fisch zu bewegen.
                <ul>
                    <li>Für <em>Pfeil nach oben</em> gedrückt: Richtung 0 Grad, gehe 10er-Schritte.</li>
                    <li>Für <em>Pfeil nach unten</em> gedrückt: Richtung 180 Grad, gehe 10er-Schritte.</li>
                    <li>Für <em>Pfeil nach rechts</em> gedrückt: Richtung 90 Grad, gehe 10er-Schritte.</li>
                    <li>Für <em>Pfeil nach links</em> gedrückt: Richtung -90 Grad, gehe 10er-Schritte.</li>
                </ul>
            </li>
        </ol>

        <p>Je größer die Schrittanzahl, desto schneller ist dein Fisch.</p>
    </div>
    <div class="col">
        <img src="images/08-move-fish.png" alt="Fisch bewegen">
    </div>
</div>
```

Das ist das Ergebnis:

{{< imgblock "img/website-with-grid.png" "Grid System" >}}{{< /imgblock >}}

Füge auch im Bereich **Haifisch bewegen** eine Row mit zwei Spalten ein. 

```html
<h2 id="haifisch-bewegen">Haifisch bewegen</h2>

<div class="row">
    <div class="col-md-6 col-lg-8">
        <p>Jetzt soll der Haifisch im Aquarium herumschwimmen.</p>

        <ol>
            <li>Wähle dazu den Haifisch aus, damit er blau umrandet ist.</li>
            <li>Im Tab <em>Code</em> kannst du den Haifisch nun bewegen.</li>
            <li>Unter <em>Ereignisse</em> wähle <em>Wenn … angeklickt</em>.</li>
            <li>Anschließend wähle <em>wiederhole fortlaufend</em> bei <em>Steuerung</em> aus.</li>
            <li>Bewege den Haifisch mit <em>gehe 10er-Schritt</em>, <em>warte 0.1 Sek.” *Hinweis: Scratch
                    akzeptiert
                    nur
                    einen Punkt als Kommazeichen</em>, <em>pralle vom Rand ab</em> und <em>drehe dich um …
                    Grad</em>
            </li>
            <li>Um etwas mehr Zufall reinzubringen, nimm im Menü <em>Operatoren</em> den Block
                <em>Zufallszahl
                    von 1
                    bis
                    10</em> und ziehe ihn an die Stelle der 15 Grad.</li>
        </ol>
    </div>
    <div class="col">
        <img src="images/09-move-shark.png" alt="Haifisch bewegen">
    </div>
</div>
```

Bei **Fisch fangen** brauchst du sogar zwei Rows, da es hier zwei beschreibende Texte mit jeweils einem Bild gibt. Um etwas Abstand zwischen den beiden Bereichen zu bekommen, kannst du noch `<div class="my-4"></div>` einfügen. `my-4` steht für margin in y Richung, 4 ist die Größe (0 - 5 ist möglich).

```html
<h2 id="fisch-fangen">Fisch fangen</h2>

<div class="row">
    <div class="col-md-8">
        <p>
            Wenn der Haifisch den Fisch berührt, soll der Fisch ausgeblendet und wieder ins linke obere Eck
            gesetzt
            werden.
        </p>

        <ol>
            <li>Wähle dazu den Fisch aus, damit er blau umrandet ist.</li>
            <li>Im Tab <em>Code</em> kannst du den Fisch verschwinden lassen, sobald er den Haifisch
                berührt.
            </li>
            <li>Unter <em>Ereignisse</em> wähle <em>Wenn … angeklickt</em>.</li>
            <li>Setze den Fisch an Position -230 und 170 mittels <em>gehe zu x: -230, y: 170</em>, um den
                Fisch
                ins
                linke obere Eck zu setzen, und <em>zeige dich</em>.</li>
            <li>Falls jetzt der Hai berührt wird (<em>Steuerung</em> <em>falls … dann</em>), dann <em>sende
                    “berührt” an
                    alle</em>, <em>verstecke dich</em>, <em>warte 5 Sekunden</em>, <em>zeige dich</em>, und
                gehe wieder ins linke obere Eck mit <em>gehe zu x: -230, y: 170</em>. Anschließend sage
                <em>Willkommen
                    zurück</em> für 2 Sekunden.</li>
        </ol>
    </div>
    <div class="col">
        <img src="images/10-touch-fish.png" alt="Fisch wird berührt">
    </div>
</div>

<div class="my-4"></div>

<div class="row">
    <div class="col-md-6">
        <p>Wenn der Haifisch den Fisch berüht, soll er zwei mal schnappen und das Spiel “Game Over” sein.
        </p>

        <ol>
            <li>Wähle dazu den Haifisch aus, damit er blau umrandet ist.</li>
            <li>Im Tab <em>Code</em> kannst du den Haifisch “Game Over” sagen lassen.</li>
            <li>Unter <em>Ereignisse</em> wähle <em>Wenn ich … empfange</em>, der Hai reagiert somit auf die
                vom
                Fisch ausgelöste Nachricht.</li>
            <li>Anschließend wähle <em>wiederhole 2 mal</em> bei <em>Steuerung</em> aus.</li>
            <li>Um den Haifisch schnappen zu lassen, gibt es unter <em>Aussehen</em> verschiedene Varianten
                des
                Hais. Füge folgende Blöcke in den Wiederhol-Block: <em>wechsle zu Kostüm b</em>, <em>warte
                    0,3
                    Sek.</em>, <em>wechsel zu Kostüm a</em>, <em>warte 0,3 Sek.</em></li>
            <li>Und um den Haifisch “Game over” sagen zu lassen, füge einen neuen <em>Wenn ich …
                    empfange</em>
                Block
                hinzu und <em>sage “Game Over!” für 4.5 Sekunden</em>.</li>
        </ol>
    </div>
    <div class="col">
        <img src="images/11-touch-shark.png" alt="Hai wird berührt">
    </div>
</div>
```

Probiere selbst aus, in welcher Größe die Bilder bei welcher Fenstergöße am besten aussehen.

### Grid Layout in Aufzählungen

Du kannst rows und cols genauso innerhalb von Aufzählungen anwenden. Beginne dazu die row innerhalb von `li`.

```html
<h2 id="buehne-und-figuren-anlegen">Bühne und Figuren anlegen</h2>

<ol>
    <li>
        <div class="row">
            <div class="col-md-6 col-xl-8">
                Als erstes legst du fest, wie dein Spielfeld aussehen soll. Wir brauchen zuerst das
                Aquarium, in dem die Fische schwimmen. Wähle als erstes rechts unten unter
                <em>Bühnenbild wählen</em> ein
                Bühnenbild aus, zum Beispiel ein Aquarium.
            </div>
            <div class="col">
                <img src="images/01-background.png" alt="Bühnenbild auswählen">
            </div>
        </div>
        <div class="my-4"></div>
    </li>
    <li>
        <div class="row">
            <div class="col-md-6 col-xl-8">
                Als nächstes lösche die Figur Scratchy mit dem Namen <em>Sprite 1</em> indem du
                mit der rechten
                Maustaste darauf klickst. Im angezeigten Menü kannst du Scratchy löschen.
            </div>
            <div class="col"><img src="images/02-delete-scratchy.png" alt="Figur löschen">
            </div>
        </div>
        <div class="my-4"></div>
    </li>
    <li>
        <div class="row">
            <div class="col-md-6 col-xl-8">
                Jetzt brauchen wir einen Haifisch sowie einen Fisch, mit dem wir dem Haifisch
                entkommen wollen. Klicke dazu auf <em>Figur wählen</em> und füge einen Fisch
                sowie einen Haifisch dazu.
                Natürlich können es auch andere Figuren sein, zum Beispiel ein Käfer, der dem
                Vogel davonfliegt oder eine Person, die dem
                Löwen davonläuft.
            </div>
            <div class="col">
                <img src="images/03-fish.png" alt="Figuren hinzufügen">
            </div>
        </div>
        <div class="my-4"></div>
    </li>
    <li>
        <div class="row">
            <div class="col-md-6 col-xl-8">
                Damit du später die Figuren leichter verwenden kannst, gib ihnen Namen wie
                <em>Hai</em> und <em>Fisch</em>. Du kannst den Namen von Figuren ändern, indem
                du unter der weißen Leinwand rechts neben dem Wort Figur auf das Namensfeld
                klickst und den neuen Namen eingibst.
            </div>
            <div class="col">
                <img src="images/07-rename.png" alt="Figuren benennen">
            </div>
        </div>
    </li>
</ol>
```

## Carousel

Das [Carousel](https://getbootstrap.com/docs/4.4/components/carousel/) in Bootstrap kann Bilder in einer Slideshow darstellen. Wir ersetzten jetzt das Bild im Jumbotron durch drei Bilder, die automatisch abwechselnd angezeigt werden. In der einfachsten Form ersetzt du die Zeile `<img src="images/endgame.png" alt="Endgame">` durch die folgenden:

```html
<div id="introCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="images/carousel-1.png" class="d-block w-100" alt="Start">
        </div>
        <div class="carousel-item">
            <img src="images/carousel-2.png" class="d-block w-100" alt="Game over">
        </div>
        <div class="carousel-item">
            <img src="images/carousel-3.png" class="d-block w-100" alt="Restart">
        </div>
    </div>
</div>
```

Bei der `id` in der ersten Zeile verwenden wir `introCarousel`. Das brauchen wir später noch.

Das Carousel funktioniert damit schon, aber die Bilder werden über den gesamten Bereich ausgedehnt. Um auch hier wieder die Größe je nach Fenstergröße angeben zu können, packen wir den gesamten `<div class="intro">` Bereich noch in eine row und col:

```html
<div class="row justify-content-lg-center">
    <div class="col-lg-6">
        <div id="introCarousel" class="carousel slide" data-ride="carousel">
            ...
        </div>
    </div>
</div>
```

Bei Fenstergröße large und größer wird jetzt nur die Hälfte des Platzes verwendet. Durch `justify-content-lg-center` wird angegeben, dass nicht die ersten 6 Spalten verwendet werden, sonder dass der Inhalt in der Mitte platziert wird.

### Buttons zum Vor- und Zurückblättern

Füge im Carousel am Ende die folgenden beiden Buttons ein:

```html
<div id="introCarousel" class="carousel slide" data-ride="carousel">
    ...

    <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

Unter `href` muss hier der Name, den wir vorher unter `id` vergeben haben, angegeben werden.

Wir können auch unten im Carousel für jedes Bild eine Schaltfläche zum Umschalten einblenden. Füge dazu am Anfang des Carousels folgendes ein:

```html
<div id="introCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#introCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#introCarousel" data-slide-to="1"></li>
        <li data-target="#introCarousel" data-slide-to="2"></li>
    </ol>
    
    ...
</div>
```

Auch hier muss bei `data-target` wieder die richtige `id` angegeben werden.

Nun können wir auch noch eine Beschriftung zu den Bildern geben:

```html
<div id="introCarousel" class="carousel slide" data-ride="carousel">
    ...

    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="images/carousel-1.png" class="d-block w-100" alt="Start">
            <div class="carousel-caption d-none d-md-block">
                <h5>Mein erstes Scratch Spiel</h5>
            </div>
        </div>
        <div class="carousel-item">
            <img src="images/carousel-2.png" class="d-block w-100" alt="Game over">
            <div class="carousel-caption d-none d-md-block">
                <h5>Game Over</h5>
            </div>
        </div>
        <div class="carousel-item">
            <img src="images/carousel-3.png" class="d-block w-100" alt="Restart">
            <div class="carousel-caption d-none d-md-block">
                <h5>Spiel beginnt neu</h5>
            </div>
        </div>
    </div>

    ...
</div>
```

{{< imgblock "img/website-with-carousel.png" "Grid System" >}}{{< /imgblock >}}

## Scrollspy

Als letzes fügen wir noch ein Menü zu Navigation ein. Wir verwenden dafür den [Scrollspy](https://getbootstrap.com/docs/4.4/components/scrollspy/). Wenn wir durch den Inhalten scrollen, werden automatisch die gerade aktiven Menüelemente hervorgehoben.

Wir brauchen auf unserer Seite dafür zwei Bereich:

- links wird das Menü dargestellt
- rechts wird der bisherige Inhalt dargestellt

```html
<body>
    <div class="row no-gutters">
        <div class="d-none d-md-block col-md-4 col-lg-3">
            <div class="navigation">
                <!-- Navigation -->
            </div>
        </div>

        <div class="col">
            <div class="content">
                ...
            </div>
        </div>
    </div>

    <!-- scripts -->
    ...
</body>
```

Für die beiden neuen Bereiche `navigation` brauchen wir folgendes Styles:

```css
.navigation {
    height: 100vh;
    background-color: #343a40;
    padding: 20px;
    overflow: auto;
}

.content {
    height: 100vh;
    overflow: auto;
}
```

Wir legen dadurch die Höhe jeweils auf die Fensterhöhe fest. Durch `overflow: auto` erscheinen Scrollbalken, wenn der Inhalt zu lang wird. Im Unterscheid zu vorher kann jetzt aber in den beiden Bereichen getrennt gescrollt werden.

Nun müssen wir noch die den Navigationsbereich befüllen:

```html
 <div class="navigation">
    <nav id="fische-navbar" class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#top">Fische fangen</a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="#buehne-und-figuren-anlegen">Bühne und Figuren</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#fisch-bewegen">Fisch bewegen</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#haifisch-bewegen">Haifisch bewegen</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#fisch-fangen">Fisch fangen</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#weitere-ideen">Weitere Ideen</a>
            </li>
        </ul>
    </nav>
</div>
```

Damit das Menü verschwindet, wenn das Fenster zu klein wird, müssen wir zum `<div class="navigation">` noch folgende Klassen hinzufügen: `d-none d-md-block`. `d` steht für display. `d-none` heißt, ein Element wird nicht dargestellt. `d-md-block` heißt, wenn das Fenster >= medium ist, soll das Element dargestellt werden.

Der erste Link verweist auf `href="#top"`, es gibt aber noch kein Element mit `id="top"`. Wir fügen daher direkt über dem Jumbotron folgendes ein: 

```html
<a id="top"></a>
```

Damit beim Scrollen die Menüelemente hervorgehoben werden, müssen wir jetzt noch unserem `<div class="content">` beibringen, dass es mit der `fische-navbar` verbunden ist:

```html
<div class="content" data-spy="scroll" data-target="#fische-navbar" data-offset="0">
```

{{< imgblock "img/website-with-scrollspy.png" "Grid System" >}}{{< /imgblock >}}

## Fertiges Beispiel

Das fertige Beispiel findet ihr auf GitHub unter [https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/master/trainingsanleitungen/web/project](https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/master/trainingsanleitungen/web/erste-schritte-mit-bootstrap/project).