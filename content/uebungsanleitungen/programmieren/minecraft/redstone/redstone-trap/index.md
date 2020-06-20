---
title: "Eine einfache Falle mit Redstone"
description: "In diesem Beispiel werden wir eine hinterhältige Falle bauen die Minecraft-Monster einfach zerquetscht. Dazu müssen wir die Creeper und/oder Zombies einfach in einen Gang locken."
level: 2
img: "trap.png"
---

# Eine einfache Falle mit Redstone
In diesem Beispiel werden wir eine hinterhältige Falle bauen die Minecraft-Monster einfach zerquetscht.
Dazu müssen wir die Creeper und/oder Zombies einfach in einen Gang locken. Eignet sich auch zum [looten](https://www.zos-gaming.de/looten/)

<!--more-->
## Vorbereitung
Was wir dafür benötigen ist in erster linie Cobblestone (Bruchstein), 2-3 Pistons (Kolben), einen Schalter, eine Pressure Plate (Druckplatte) und etwas Redstone.

{{< imgblock "img/01_inventory-begin.png" "Mindestbestand Inventar" >}}{{< /imgblock >}}

## Unterbau
Damit wir die Pistons ordentlich platzieren können, heben wir eine 2 Block tiefe Grube und platzieren die Pistons. Anschließend noch Repeater an die Pistons anschließen (bitte auf die Richtung achten - müssen zum Piston hin zeigen). Dann noch alles mit Redstone verbinden und irgendwo weiter weg an die Oberfläche leiten. Am Eingang platzieren wir eine Pressure-Plate damit die Falle ausglöst werden kann.

{{< imgblock "img/02_build-1.png" "Rohbau der Falle" >}}{{< /imgblock >}}

Danach können wir alles schön mit Cobblestone zumachen damit man nicht gleich sieht dass es eine Falle ist.

{{< imgblock "img/03_build-2.png" "Unterbau zumachen" >}}{{< /imgblock >}}

Wenn der Gang mit der versteckten _"Überraschung"_ dann fertig ist, sieht es ungefähr so aus:

{{< imgblock "img/04_trap_ready.png" "Fertiger Gang" >}}{{< /imgblock >}}

Gut - die Falle selbst wäre jetzt fertig - unglücklicherweise kann man sie noch nicht auslösen. Das muss sich noch ändern.

## Steuerung der Falle

Als ersten Versuch verbinden wir die Pressure-Plate einfach mittels Redstone-Leitung mit den Pistons. Damit wird die Falle sofort ausgelöst sobald irgendetwas die Platte betritt.

{{< imgblock "img/05_redstone_leitung_1.png" "Direkte Verbindung der Falle" >}}{{< /imgblock >}}

Wie man auf dem Bild sieht bringt das leider noch nicht so viel, da die Falle zu schnell auslöst. Der Creeper hat sich lediglich etwas erschreckt ....

Besser wäre es die Falle ein wenig zu verzögern. Das geht mit Redstone-Repeatern:

{{< imgblock "img/06_redstone_leitung_2.png" "Direkte Verbindung der Falle" >}}{{< /imgblock >}}

{{< alertblock >}}
Achtung: die Repeater müssen in die richtige Richtung zeigen, sonst funktioniert es nicht.
{{< /alertblock >}}

Durch Rechtsklick auf die Repeater kann man eine Verzögerung in 3 Stufen einstellen. Damit hat der Creeper dann genug Zeit um in die Falle hineinzugehen, bevor sie zuschnappt. Probiert es einfach aus.
