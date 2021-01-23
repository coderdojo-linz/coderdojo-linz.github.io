---
title: "Virus-Buster"
description: "Durch dein schnelles Handeln kannst du in diesem Spiel bösartige Viren unschädlich machen."
type: "uebungsanleitungen/programmieren/scratch"
img: "img/game.png"
imgposition: "center top"
level: 2
version: 2
sprites: 3
scripts: 8
data: 2
aliases:
- /trainingsanleitungen/scratch/scratch-virus-buster.html
---

## Figuren anlegen
Als erstes musst du deine Spielelemente importieren, die du hier herunterladen kannst.  
Du benötigst:

- Das [bösartige Virus](assets/CovidParticle.sprite3)
- Deine [Injektionsspritze als Waffe](assets/Injection.sprite3)

Solltest du das Spiel noch verfeinern wollen, kannst du auch gleich

- Deine [Munition](assets/Vaccines.sprite3)

herunterladen.

Um deinem Spiel auch optisch ansprechend zu gestalten ist ein passender Hintergrund sehr hilfreich. Such dir einfach ein Bühnenbild aus der Bibliothek aus.

## Steuern der Impfspritze
{{< imgblock "img/injection_script_1.png" "Spritze steuern" 4 >}}
Um die Spritze zu Steuern werden wir die Pfeil-Tasten verwenden. Da es bei diesem Spiel um schnelles reagieren geht, 
können wir leider die Ereignisblöcke (z.B. _Wenn **Pfeil nach unten** gedrückt wird_) **nicht** verwenden.

Wir werden stattdessen die abfrage, ob eine Taste gerade nach unten gehalten wird, verwenden.
{{< /imgblock >}}
