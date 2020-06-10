---
title: "Animierte Ansichtskarte"
description: "Die gute alte Ansichtskarte mit Briefmarke war Gestern - heute bauen wir uns unsere eigene animierte Karte und verschicken sie an unsere Freunde."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/endgame.png"
imgposition: "center bottom"
level: 2
version: 3
sprites: 2
scripts: 5
data: 0
aliases:
  - /trainingsanleitungen/scratch/scratch-animated-postcard.html
---

Eine solche Karte kannst du zum Beispiel verwenden:

* als Ansichtskarte vom Urlaub
* als Grußkarte zum Geburtstag

## Schritt 1: Scratcher werden

Damit du deinen Freunden die Ansichtskarte schicken kannst, musst du dich bei Scratch registrieren. Die Registrierung ist kostenlos und du benötigst dafür nur einen Benutzernamen und eine E-Mail-Adresse. Wenn du dich in Zukunft vor dem Arbeiten mit Scratch anmeldest, dann werden deine Projekte automatisch gespeichert und du kannst von überall auf sie zugreifen, egal von welchem Computer!

1. Starte deinen Browser (z.B. Firefox) und öffne die Adresse [https://scratch.mit.edu](https://scratch.mit.edu).
2. {{< imgblock "img/scratcher_werden_1.jpg" "Scratcher werden" >}}Klicke auf den Knopf **Scratcher werden**.  
{{< /imgblock >}}
3. {{< imgblock "img/scratcher_werden_2.jpg" "Scratcher werden" >}}
Folge den Menüs von Scratch und fülle die Felder aus. Verwende einen Benutzernamen, bei dem andere nicht folgern können, dass du das bist.  
{{< /imgblock >}}
4. {{< imgblock "img/anmelden.jpg" "Anmelden" >}}
Sobald du die Registrierung abgeschlossen hast, kannst du dich mit deinem Benutzernamen und Passwort bei Scratch anmelden. Dazu klicke einfach auf den **Anmelden** Knopf und gib deinen Benutzernamen und Passwort ein.  
{{< /imgblock >}}
5. {{< imgblock "img/angemeldet.jpg" "Anmelden" >}}
Bei einer erfolgreichen Anmeldung siehst du deinen Benutzernamen rechts oben im Fenster (hier z.B. "et_nd").  
{{< /imgblock >}}
6. {{< imgblock "img/entwickeln.jpg" "Entwickeln" 4 >}}
Klicke auf **Entwickeln** um mit dem Erstellen deiner Ansichtskarte fortzufahren.  
{{< /imgblock >}}

## Schritt 2: Deinem Projekt einen Namen geben

{{< imgblock "img/projektname_vergeben.jpg" "Projektname vergeben" 8 >}}
Damit du dein Projekt später leicht wiederfinden kannst, solltest du ihm einen entsprechenden Namen geben.
{{< /imgblock >}}

## Schritt 3: Einen Hintergrund (Bühnenbild) verwenden

Um deiner Ansichtskarte eine persönliche Note zu verleihen, verpasse ihr einfach dein eigenes Hintergrundbild das in Scratch Bühnenbild genannt wird.

1. {{< imgblock "img/buehnenbild_hochladen.jpg" "Buehnenbild hochladen" 4 >}}
Klicke auf **Bühnenbild hochladen**.  
{{< /imgblock >}}

2. {{< imgblock "img/buehnenbild_auswaehlen.jpg" "Buehnenbild auswählen" 8 >}}
Wähle im erschienen Auswahlfenster ein Foto für deinen Hintergrund aus.  
{{< /imgblock >}}

## Schritt 4: Eigene Figuren einbauen und animieren

In diesem bringst du etwas Leben in deine Ansichtskarte.

1. {{< imgblock "img/scratchy_entfernen.jpg" "Scratchy entfernen" 4 >}}
Entferne Scratchy (die Katzenfigur) indem du ihn mit der linken Maustaste anklickst und dann auf das weiße **x** im blauen Kreis klickst.  
{{< /imgblock >}}
2. {{< imgblock "img/figur_hochladen.jpg" "Figur hochladen" 4 >}}
Klicke auf **Figur hochladen** und suche das Bild aus, das du für deine Figur verwenden möchtest.  
{{< /imgblock >}}
3. {{< imgblock "img/radierer_auswaehlen.jpg" "Hintergrund von Figur entfernen" >}}  Damit der Hintergrund deiner Figur nicht sichtbar ist, musst du ihn wegradieren. Klicke mit der linken Maustaste auf die Figur und öffne danach die Registerkarte (Englisch: tab) *Kostüme*. Im Zeicheneditor kannst du den Radierer auswählen und damit all jene Bereiche im Bild entfernen, die durchsichtig sein sollen.  
{{< /imgblock >}}
{{< imgblock "img/segelboot_ohne_hintergrund.jpg" "Figur ohne Hintergrund" 4 >}}  
Nach dem Radieren sollte der durchsichtige Bereich das Schachbrettmuster enthalten.  
{{< /imgblock >}}
4. {{< imgblock "img/groesse_einstellen.jpg" "Größe der Figur einstellen" >}}
Damit die Figur gut in die Szene passt, kannst du die Größe der Figur anpassen indem du im Feld **Größe** den Wert änderst. Je größer der Wert desto größer ist die Figur.  
{{< /imgblock >}}
5. {{< imgblock "img/variablen.jpg" "Variablen anlegen" >}}
Im nächsten Schritt leg die folgenden Variablen an.  
{{< /imgblock >}}
6. {{< imgblock "img/block_aendereBootsRichtung.jpg" "Block aendereBootsRichtung" >}}Da sich die Figur bewegen soll, musst du ihr das noch beibringen. Erstell für deine Figur folgende Scripts:   
{{< /imgblock >}}

{{< imgblock "img/block_begrenzeBootsRichtung.jpg" "Block begrenzeBootsRichtung" >}}  
{{< /imgblock >}}

{{< imgblock "img/boot_main.jpg" "Boot main" >}}  
{{< /imgblock >}}

7. {{< imgblock "img/bewegung_des_boots_testen.jpg" "Boot testen" >}}
Wenn du jetzt auf die **grüne Flagge** klickst, sollte sich das Boot im Wasser zufällig bewegen.  
{{< /imgblock >}}

## Schritt 4: Ein paar Möwen zur Szene hinzufügen

Damit noch mehr Leben in die Karte kommt, kannst du eine Möwe hinzufügen. Da sich das Vorgehen nur im verwendeten Bild und in den Scripts vom Segelboot unterscheidet, folgt hier nur das Script - der Rest ist genauso wie beim Boot durchzuführen. Die Möwe hat eine Besonderheit, sie erzeugt von sich selbst immer wieder Kopien(Klone) die nach einer zufälligen Zeit von selbst verschwinden. Sieh dir das Script an wie das funktioniert ...

{{< imgblock "img/moewe_main.jpg" "Größe der Figur einstellen" >}}
Scripts für die Möwen:
{{< /imgblock >}}

{{< imgblock "img/moewe_wenn_klon_entstehe.jpg" "Größe der Figur einstellen" 8 >}}  
{{< /imgblock >}}

{{< imgblock "img/karte_mit_segelboot_und_moewe.jpg" "Karte mit Boote und Möwe" >}}
Deine Szene sollte jetzt in etwa so aussehen ...
{{< /imgblock >}}

Jetzt wäre wieder ein guter Zeitpunkt deine Karte zu testen. Klick auf die **grüne Fahne** um die Animation zu starten. Es sollte sich das Boot bewegen und Möwen hin und wieder auftauchen und durchs Bild fliegen.

## Schritt 5: Einen Urlaubsgruß hinzufügen

Jetzt fehlt bei deiner Ansichtskarte nur noch ein kurzer Gruß. 

1. {{< imgblock "img/gruss_malen.jpg" "Gruß Figur malen" >}}
Lege eine neue Figur an indem du auf **Malen** klickst.   
{{< /imgblock >}} 
2. {{< imgblock "img/gruss_erstellen.jpg" "Gruß erstellen" 9 >}}
Schreibe deine Gruß und ziehe ihn an die Position, an der du in haben möchtest.  
{{< /imgblock >}}

## Schritt 6: Deine Ansichtskarte für Andere freischalten/veröffentlichen

Damit die Empfänger deiner Ansichtskarte diese ansehen können ohne dass du ihnen dafür einen Scratch Benutzernamen und Passwort verraten muss, gibt es die Möglichkeit Projekte in Scratch zu veröffentlichen. Solche Projekte kann sich dann jeder ansehen und ausprobieren aber nicht ändern.

{{< alertblock >}}
Achtung: Wenn du ein Projekt veröffentlichst, dann bedenke, dass jeder dein Projekt sehen kann. Du solltest daher in deinem Projekt nur Bilder verwenden die du selbst gemacht hast. Wenn Personen auf den Bildern sind, dann sollten diese auch damit einverstanden sein, dass du das Foto verwendest!

Falls Du die Ansichtskarte als Einladung zu deiner Feier verschickst, dann bedenke, dass auch Fremde die Karte ansehen können und dann vielleicht auch deiner Einladung folgen!
{{< /alertblock >}}

Deine Ansichtskarte veröffentlichst du wie folgt:

1. {{< imgblock "img/projekt_veroeffentlichen.jpg" "Projekt veröffentlichen" >}}
Klick auf den Knopf **Veröffentlichen**.  
{{< /imgblock >}}
2. {{< imgblock "img/projekt_veroeffentlichen_beschreibung.jpg" "Anleitung hinzufügen" >}}
Damit sich die Empfänger Deiner Karte auskennen, was zu tun ist, kannst du ihnen im Textfeld **Anleitung** eine kurze Anleitung hinterlassen.  
{{< /imgblock >}}

## Schritt 7: Deine Ansichtskarte verschicken

{{< imgblock "img/projekt_link.jpg" "Projekt Link kopieren" >}}  
Jetzt hast du es fast geschafft. Klick auf den Knopf **Link kopieren** (siehe voriges Bild rechts unten). Es erscheint ein Fenster in dem du unter **Link** die Adresse (URL) deiner Ansichtskarte findest. Diese Adresse kannst du jetzt zum Beispiel per E-Mail verschicken.  

Zum Herunterladen gibt es das Projekt [hier](animated_postcard.sb3).
{{< /imgblock >}}


