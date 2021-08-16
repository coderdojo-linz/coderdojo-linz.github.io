---
title: "Lego EV3"
description: "Hier erfährst du wie du einen Lego-Mindstorms Roboter über Scratch steuern kannst"
type: "uebungsanleitungen/programmieren/scratch"
version: 1
img: "ev3.png"
imgposition: "center"
level: 1
sprites: 0
scripts: 1
data: 0
---

Hier lernen wir wie du mit Scratch deinen Lego Mindstorms Roboter mit Scratch steuern kannst! Was du dazu brauchst sind:

1. Einen [Lego Mindstorms EV3 Controller](https://www.lego.com/en-us/product/ev3-intelligent-brick-45500)
2. Ein [Lego-Motor](https://www.lego.com/en-us/product/technic-large-motor-88013) der an diesen EV3 Controller angeschlossen ist
3. Einen Laptop oder Computer der Bluetooth unterstützt

## Scratch Link installieren
1. Damit Scratch mit dem EV3 Brick reden kann brauchen wir ein kleines Tool das Scratch Link heißt. Du kannst das entweder direkt von der Scratch Homepage herunterladen: [click](https://downloads.scratch.mit.edu/link/windows.zip)

2. {{< imgblock "img/01-scratch-link-icon.png" "Scratch Link installieren" 2 >}}
Wenn du die Datei heruntergeladen hast entpacke den Inhalt und führe die Datei ScratchLinkSetup.msi aus um Scratch Link zu installieren. Danach kannst du das Program Scratch Link starten und wenn alles gut geht solltest du das Icon rechts unten in deiner Taskleiste sehen.
{{< /imgblock >}}

## Den EV3 vorbereiten
3. {{< imgblock "img/02-bluethooth-einstellungen.jpg" "Scratch Link installieren" 5 >}}
Beginne damit den EV3 einzuschalten indem du auf den mittleren Knopf drückst.
Sobald der EV3 gestartet ist müssen wir sicherstellen dass Bluetooth eingeschalten ist. Dafür gehst du im Menü zu den Bluetootheinstellungen.
{{< /imgblock >}}

4. {{< imgblock "img/03-bluetooth-aktiviert.jpg" "Scratch Link installieren" 5 >}}
Und stellst sicher dass sowohl der Punkt "Visibility" als auch "Bluetooth" aktiv sind.
{{< /imgblock >}}

## Die EV3 Extension
5. {{< imgblock "img/04-erweiterung-laden.png" "Scratch Link installieren" >}}
Jetzt können wir ein neues Scratch Projekt erstellen und müssen zuerst einmal die EV3 Erweiterung laden.
Das kannst du tun indem du zuerst auf das Icon links unten klickst.
{{< /imgblock >}}

6. {{< imgblock "img/05-lego-ev3-erweiterung.png" "Scratch Link installieren" >}}
Und dann die LEGO MINDSTORMS EV3 extension auswählst.
{{< /imgblock >}}

7. {{< imgblock "img/06-brick-auswahl.png" "Scratch Link installieren" >}}
Dann wirst du ein Fenster sehen in dem du hoffentlich deinen EV3 Controller sehen kannst. Wenn nicht probiere unten den "Erneuere" Button aus.

HINWEIS: Wenn du dich zum ersten mal mit dem EV3 verbindest musst du am EV3 die Verbindung bestätigen! Stelle dabei auch sicher dass als Passwort am EV3 "1234" eingegeben ist.
{{< /imgblock >}}

8. {{< imgblock "img/07-erfolgreich-verbunden.png" "Scratch Link installieren" >}}
Sobald du deinen EV3 Controller in der Liste siehst kannst du auf Verbinden klicken. Wenn alles gut geht sollte sich Scratch erfolgreich zu dem EV3 Contoller verbunden haben. Du kannst das Fenster mit einem Klick auf "Gehe zum Editor" schließen.
{{< /imgblock >}}

## Motoren bewegen
9. {{< imgblock "img/08-programm.png" "Scratch Link installieren" >}}
Da wir jetzt erfolgreich verbunden sind können wir jetzt endlich Motoren ansteuern!
Dafür verwenden wir zum Beispiel einen "drehe Motor A für 1 Sekunden rechtsherum" Block und starten dann unser Scratch-Projekt mit der grünen Flagge! Und schon bewegt sich der Motor :)

Wenn sich bei dir noch nichts bewegt hat dann stelle sicher dass du den richtigen Motor ausgewählt hast! Du kannst oben auf deinem EV3 Controller nachsehen auf welchem sogenannten Port dein Motor angehängt ist. Das sind die Buchstaben A, B, C oder D. Und du musst in deinem Scratch Projekt natürlich den selben Buchstaben in deinem "drehe Motor A für 1 Sekunden rechtsherum" Block auswählen!
{{< /imgblock >}}