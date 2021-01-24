---
title: "Virus-Buster"
description: "Durch dein schnelles Handeln kannst du in diesem Spiel bösartige Viren unschädlich machen."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center top"
level: 1
version: 2
sprites: 3
scripts: 6
data: 2
aliases:
- /trainingsanleitungen/scratch/scratch-virus-buster.html
---

## Figuren anlegen
Als erstes musst du deine Spielelemente importieren, die du hier herunterladen kannst.  
Du benötigst:

{{< imgblock "img/sprites_virus_injection.png" "Figuren Virus und Spritze" >}}

- das [bösartige Virus](assets/CovidParticle.sprite3) (bitte Größe auf 20 einstellen)
- deine [Injektionsspritze als Waffe](assets/Injection.sprite3)
{{< /imgblock >}}

Solltest du das Spiel noch verfeinern wollen, kannst du auch gleich

{{< imgblock "img/sprites_vaccines.png" "Figur Impfdosen" >}}
- deine [Munition](assets/Vaccines.sprite3)
{{< /imgblock >}}

herunterladen.

Um dein Spiel auch optisch ansprechend zu gestalten ist ein passender Hintergrund sehr hilfreich. Such dir einfach ein Bühnenbild aus der Bibliothek aus.

## Variablen
In unserem Spiel möchten wir 2 Variable verwenden. Achte darauf, dass die Variablen mit einem Häckchen bei **"Für alle Figuren"** 
angelegt werden.

{{< imgblock "img/variables.png" "Variablen für alle Figuren" >}}
- geimpfte
- infizierte
{{< /imgblock >}}

## Steuern der Impfspritze
{{< imgblock "img/injection_script_1.png" "Spritze steuern" >}}
Um die Spritze zu steuern, werden wir die Pfeil-Tasten verwenden. Da es bei diesem Spiel um schnelles Reagieren geht, 
können wir leider die Ereignisblöcke (z.B. _Wenn **Pfeil nach unten** gedrückt wird_) **nicht** verwenden.

Wir werden stattdessen die Abfrage, ob eine Taste gerade nach unten gehalten wird, verwenden.
{{< /imgblock >}}

{{< imgblock "img/injection_script_2.png" "Impfung verabreichen" >}}
Für das Verabreichen der Spritze können wir das Ereignis _"Wenn Taste **Leertaste** gedrückt wird"_ nehmen.
Wir senden damit eine neue Nachricht (z.B. **"impfen"**) an alle.
{{< /imgblock >}}

{{< imgblock "img/injection_mod_1.png" "Zielpunkt erzeugen" >}}
Wir müssen noch einen kleinen Farbklecks an die Spitze der Spritze machen. Bitte verwende dazu eine Farbe, die sonst im Spiel nicht vorkommt (nicht im Hintergrund und nicht auf anderen Figuren, die das Virus berühren könnten). Dieser wird als unser "Trefferpunkt" dienen.
{{< /imgblock >}}

## Die Viren
Unsere Viren sollen nach dem Freisetzen von rechts nach links über den Bildschirm fliegen. Wir müssen sie unschädlich machen, bevor sie den rechten Rand erreichen und weitere Menschen infizieren.

{{< imgblock "img/variables_init.png" "Variablen initialisieren" >}}
Beim Spielstart sollten wir die Punktestände auf 0 stellen.
{{< /imgblock >}}


{{< imgblock "img/virus_sounds_1.png" "Klänge für das Virus" >}}
Als nächstes holen wir uns noch Töne für das Freisetzen des Virus und deren Bekämpfung. Du kannst diese Klänge ganz einfach aus der Scratch-Bibliothek importieren.

Du kannst natürlich auch eigene Klänge verwenden, wenn dir diese besser gefallen.
{{< /imgblock >}}

{{< imgblock "img/virus_script_1.png" "Virus start" >}}
Da wir mehrere Viren auf dem Bildschirm haben möchten, werden wir zuerst die Figur unsichtbar machen. Nach einer zufälligen Zeit erzeugen wir dann einen Klon.  
{{< /imgblock >}}

{{< imgblock "img/virus_script_2.png" "Virus steuern" >}}
Den Klon bringen wir anschließend an eine zufällige Position an der rechten Seite und machen ihn sichtbar. Von dort aus tritt das Virus seine Reise über den Bildschirm an.

Das verwendete Kostüm soll uns Auskunft darüber geben, ob das Virus noch gefährlich oder schon unschädlich ist. Daher stellen wir es am Anfang auf das erste Kostüm (*covid_red*).

Gelangt das Virus zum Rand können wir so feststellen, ob noch jemand infiziert wurde oder nicht.

Als Abschluss zerstören wir den Klon.
{{< /imgblock >}}

{{< imgblock "img/virus_script_3.png" "Virus unschädlich machen" >}}
Nun fehlt uns nur noch das eigentliche Impfen. Wir haben bei der Spritze die Nachricht *"impfen"* abgeschickt und wollen nun wissen, ob wir einen Virus erwischt haben oder nicht.

Dabei wird uns unser Trefferpunkt (siehe Spritze) helfen. Bitte achte darauf, dass du genau die Farbe des Trefferpunktes beim "**Wird Farbe .. berührt**" Block einstellst. Du kannst dazu das Pipetten-Werkzeug verwenden.
{{< /imgblock >}}

## Erweiterungen
Wie du sicher bereits bemerkt hast, haben wir Dinge importiert, die wir noch nicht verwenden.

Bei den Hustentönen muss nicht jedesmal der gleiche Ton verwendet werden. Du kannst zufällig entweder *Cough1* oder *Cough2* abspielen.

Ausserdem verwenden wir die Figur *"Vaccines"* noch nicht. Kannst du dein Skript so erweitern, dass nur 3 Spritzen verabreicht werden können bevor du z.B. 2 Sekunden warten musst?

## Ausprobieren
Wenn du das Spiel ausprobieren möchtest, kannst du es [hier herunterladen](assets/virus_buster_v1.sp3).
