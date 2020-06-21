---
title: "Miraculix der Druide - Teil 3"
description: "In dieser Episode wirst du noch mehr über Events lernen und außerdem lernen, wie du eine Reihe von Dingen abspeicherst."
level: 2
weight: 9
img: "miraculix-teil-3.jpg"
imgposition: "bottom left"
categories:
- Java
---

# Miraculix der Druide - Teil 3

## Einleitung

In der letzten Episode haben wir gelernt, wie man auf Events horchen und reagieren kann. Heute werden wir das anwenden indem wir unser Getafix-Plugin erweitern, sodass man Spielern einen Zaubertrank verabreichen kann.

```shell
/magicpotion WorkUser
```

Mit diesem Kommando (das natürlich wieder nur von ops verwendet werden darf) ist der Spieler *WorkUser* unbesiegbar, das heißt, er verliert keine Gesundheit mehr. Natürlich soll der Sender des Kommandos eine Rückmeldung bekommen, dass er den Spieler erfolgreich Zaubertrank verabreicht hat und auch der Spieler, der den Trank bekommen hat soll eine Information bekommen.

Außerdem werden wir noch ein Kommando `/listpotiondrinkers` implementieren, in welchem ops alle Spieler auflisten können, welche bereits einen Zaubertrank bekommen haben:

{{< imgblock "img/ListPotionDrinkers.png" "How the command looks like" >}}{{< /imgblock >}}

## Ausführliche Anleitung

Wir werden uns, wie bisher auch, schön langsam an das Thema herantasten. Der Fahrplan für diese Unit ist daher so:

1. Wir bauen einen Event-Listener, mit einem Event-Handler, der auf das `EntityDamageEvent` horcht.
2. Wir experimentieren ein bisschen rum um herauszufinden, was dieses Event alles auslöst und sehen uns dabei das API dieses Events genauer an.
3. Wenn wir wissen, wie wir mit dem Event umgehen, werden wir das Command `/magicpotion` implementieren und dabei lernen, wie wir bequem eine Menge an Spielern abspeichern können
4. Zum Abschluss implementieren wir noch das Kommando `/listpotiondrinkers`.
 

### Der Event-Listener
Wir beginnen mit dem Bauen des Event-Listeners, das dir schon aus der letzten Episode bekannt ist. Ich sage dir nur den Namen des Events, damit du weißt, welchen Parameter du verwenden sollst: `EntityDamageEvent`. Damit kannst du mit der *Zusammenfassung für Profis* aus der letzten Episode den Event-Handler aufbauen. Bau ihn einfach so, dass beim Auftreten des Events auf der Konsole eine Info "Outch, something got damaged" oder so ähnlich ausgegeben wird (Sieh nach in der Episode 2: `Bukkit.getLogger().info`, falls du unsicher bist, wie du etwas in der Konsole ausgeben kannst). Falls dir bei den Namen die Ideen ausgehen, hier meine Vorschläge:

* Listener-Klasse: `DamageListener`
* Event-Handler: `onPlayerDamage`

Dann kannst du das Projekt gleich mal bauen und testen. Versuche heraus, wann der Handler  aufgerufen wird. Der heißt nicht umsonst sehr allgemein `EntityDamageEvent`.

### Das `EntityDamageEvent`
Durch unsere Experimente haben wir gesehen, dass der Handler immer aufgerufen wird, sobald irgendetwas kaputt geht. Wir sind aber nur dann an einem Damage interessiert, wenn er einen Spieler betrifft. Beachte, dass es uns jetzt noch egal ist, ob der Spieler einen Zaubertrank getrunken hat oder nicht. Wir bauen sozusagen gerade lauter Obelixe ;-).

Also, wie finden wir heraus, ob der aktuelle Damage-Event sich gerade auf einen Spieler bezieht oder nicht. Als Profi wirst du schon ahnen, dass das irgendwo in unserer Rohrpost, also dem event-Objekt gespeichert ist. Die Methode `getEntityType` liefert dir den Wert zurück, der dir sagt, was gerade beschädigt wurde. Wenn du in der Methode `onPlayerDamage` einmal

```java
EntityType.
```

eintippst (notfalls wieder mit `Ctrl` + `Space` nachhelfen), dann siehst du, wieviele verschiedene Dinge (Entities) beschädigt werden können. Und wenn du dann bis zum Buchstaben P hinunterscrollst, siehst du auch den `PLAYER`.

Wir handeln jetzt im Beamten-Modus: Wenns uns nix angeht, lass ma gleich die Finger davon. Also: Wenn das betroffene Entity kein `PLAYER` ist, dann verlassen wir die Methode sofort. Auf Gut-Java:

{{< highlight java "hl_lines=2-4" >}}
public void onDamageEvent(EntityDamageEvent event) {
    if (event.getEntityType() != EntityType.PLAYER) {
            return;
    }
    Bukkit.getLogger().info("Outch, someone got damaged");
}
{{< /highlight >}}

Das probieren wir jetzt gleich wieder aus. Also bauen und testen. Du solltest jetzt sehen, dass die Meldung nur mehr ausgegeben wird, wenn ein Spieler zu Schaden kommt.

### Ein Event abbrechen
Jetzt wird es an der Zeit zu überlegen, was wir tun können, damit wir, falls der Spieler einen Schaden erleidet, diesen wieder gut machen. Eine erste Idee könnte sein, dass wir die bereits bekannte Methode `setHealth` verwenden und im Fall, dass ein Damage auftritt, einfach `setHealth(20)` aufrufen. Probier das einfach mal aus. Was siehst du?

Also bei mir hat es so mittelgut funktioniert. Wenn du leichte Schäden erleidest (zum Beispiel wenn du unter Wasser keine Luft mehr bekommst und so langsam deine Herzen verschwinden)geht es einigermaßen. Aber hast du mal probiert von großer Höhe runterzuspringen? Da ist dann ganz schnell Schluss mit Lustig. Aber warum ist das so?

Da müssen wir uns schnell an eine Sache aus der letzten Episode erinnern. Ziemlich zum Schluss habe ich dir vorgestellt, wie Ereignisse auf dem Bukkit-Server ablaufen. Hier nochmals zur Erinnerung:

1. Er baut ein Event-Objekt (die Rohrpost), das den Event beschreibt
2. Er schickt die Rohrpost an alle Plugins, diese können das Event-Objekt auslesen, verändern und was weiß ich noch alles machen
3. Sobald das letzte Plugin das Event-Objekt gehabt hat, führt der Server das Event endlich aus. Dazu nimmt er aber das von den Plugins veränderte Event-Objekt her.

Das heißt, dass dein Listener immer **vor** dem eigentlichen Event aufgerufen wird. Das heißt auch, dass du **bevor** der Damage wirklich passiert, deinem Spieler die maximale Gesundheit zukommen lässt. Wenn jetzt ein wirklich schlimmer Schaden passiert, wie z. B. der Fall aus ein er großen Höhe, dann nutzt das alles nix, weil der Spieler dann mehr als 20 Punkte Gesundheit verliert.

Also brauchen wir eine andere Strategie, und die ist, dass wir das Event einfach abbrechen. Ja das geht. Wir können dem Server also sagen, dass er das Event nicht ausführen soll und das geht mit der Methode `setCancelled` des Event-Objekts. Wenn wir `setCancelled` mit `true` aufrufen, dann bekommen zwar alle Plugins das Event noch zugesandt aber der Server selbst führt es nicht mehr aus. Das ganze sieht dann so aus:

{{< highlight java "hl_lines=5,st_lines=6" >}}
public void onDamageEvent(EntityDamageEvent event) {
    if (event.getEntityType() != EntityType.PLAYER) {
            return;
    }
    event.setCancelled(true)
    // remove line: Bukkit.getLogger().info("Outch, something got damaged");
}
{{< /highlight >}}

Der auskommentierte Text `// remove line: ...` soll heißen, dass du diese Zeile in deine Code einfach löschen kannst. Probiere dein Plugin jetzt aus. Jetzt sollten alle Spieler auf deinem Server unverwundbar sein.

Natürlich muss dein ``plugin.yml`` vorhanden sein und der ``DamageListener`` muss im Plugin in der Methode ``onEnable()`` registiert sein.

```java
@Override
public void onEnable() {
	getServer().getPluginManager().registerEvents(new DamageListener(), this);
}
```

### Spieler speichern

Jetzt können wir den Event des Damage abfangen. Das passiert aber immer und für alle Spieler. Natürlich willst du, dass nur die Spieler, welche den Zaubertrank bekommen haben, unverwundbar sind. Und das gehen wir jetzt an.

* Einführung von PotionPot
* Implementierung mit TreeSet

Die Spieler werden in einem ``TreeSet`` gespeichert. Dazu fügst du in der Hauptklasse, in der du auch die Kommandos abfragst, eine Variable ``potionDrinkers`` ein, in der die Spielernamen gespeichert werden. Außerdem muss der ``DamageListener`` Zugriff auf das Plugin bekommen, um überprüfen zu können, ob der Spieler unverwundbar ist.

Das sieht dann so aus:

```java
public class GetafixPlugin extends JavaPlugin {

   private TreeSet&lt;String&gt; potionDrinkers = new TreeSet&lt;String&gt;(); 

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(new DamageListener(this), this); //Übergabe des Plugins an den DamageListener
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
		...
		if (label.equalsIgnoreCase("magicpotion")) {
            Bukkit.getLogger().info("/magicpotion for " + player.getName() + ": successfully added to list of potion drinkers");
            potionDrinkers.add(player.getName());
        } 
		...
        return true;
    }
	
	//Überprüfung, ob ein Spieler einen Zaubertrank getrunken hat.
	public boolean isPotionDrinkerAllowed(String playerName) {
        return potionDrinkers.contains(playerName);
    }
	
}
```

Der ``DamageListener`` sieht dann so aus:

```java
public class DamageListener implements Listener {
    
    private GetafixPlugin plugin;

    public DamageListener(GetafixPlugin plugin) {
        this.plugin = plugin;
    }

    @EventHandler
    public void onDamageEvent(EntityDamageEvent event) {
        if (event.getEntityType() != EntityType.PLAYER) {
            return;
        }
        Player player = (Player)event.getEntity();
        if (plugin.isPotionDrinkerAllowed(player.getName())) {
            event.setCancelled(true);
        }
    }

}
```

### Die Liste der Leute, die Zaubertrank getrunken haben

Alles was du jetzt machen musst, ist ein weiteres Kommando in der ``plugin.yml`` Datei hinzufügen, dieses Kommando in der ``onCommand()`` Methode abfragen, und die Liste der Potion Drinkers ausgeben.

``plugin.yml``
```shell
## YAML Template.
---
name: Getafix
main: io.coderdojo.lisi.minecraft.firstplugin.GetafixPlugin
version: 0.1.0
author: E. Rosemann
description: A miraculous healing plugin.
commands:
    gethealth:
        description: Displays health level of player.
        usage: /gethealth player-name
    heal:
        description: Brings your health to the top level.
        usage: /heal me | player-name
    magicpotion:
        description: Adds user to the list of potion holders.
        usage: /magicpotion me | player-name
    listpotiondrinkers:
        description: Lists all current potion holders.
        usage: /listpotiondrinkers 
```

``GetafixPlugin.java``
```java
public class GetafixPlugin extends JavaPlugin {

    private TreeSet&lt;String&gt; potionDrinkers = new TreeSet&lt;String&gt;();

    @Override
    public void onEnable() {
        getServer().getPluginManager().registerEvents(new DamageListener(this), this);
    }

    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        ...
		if (label.equalsIgnoreCase("listpotiondrinkers")) {
            Bukkit.getLogger().info("/listpotiondrinkers: " + potionDrinkers.size() + " potion drinkers");
            sender.sendMessage(printCurrentPotionDrinkers());
        } 
		...
        return true;
    }

    private String printCurrentPotionDrinkers() {
        StringBuilder sb = new StringBuilder("List of potion drinkers: ");
        if (potionDrinkers.size() > 0) {
            for (String playerName : potionDrinkers) {
                sb.append(playerName);
                sb.append(" ");
            }
        }
        return sb.toString();
    }
}
```


## Kurzversion für Profis
1. Entweder verwendest du dein altes Projekt ``GetafixPlugin``, oder du erstellst ein neues Projekt (siehe auch [hier](/uebungsanleitungen/programmieren/minecraft/plugins/netbeans_cheatsheet.html)) 
1. Füge eine neue Klasse namens ``DamageListener`` und  stelle sicher, dass nach dem Klassennamen ``implements Listener`` steht.
1. Füge eine Methode ``onDamageEvent`` mit der Annotation ``@EventHandler`` hinzu, mit dem ``event`` Parameter vom Typ ``EntityDamageEvent``.
```java
@EventHandler
public void onDamageEvent(EntityDamageEvent event) {
    if (event.getEntityType() != EntityType.PLAYER) {
            return;
    }
    Bukkit.getLogger().info("Outch, someone got damaged");
    event.setCancelled(true);
}
```
1. Speichere die Spieler - siehe oben. 
1. Liste alle Spieler, die Zaubertränke getrunken haben - siehe oben.
1. Baue das Paket: In Icon Leiste auf den Hammer **Build Project (F11)** klicken
1. Kopiere bzw. ersetze das fertige jar File aus ``dist`` (siehe Pfad im **Output**) in das Minecraft Server Plugin-Verzeichnis. 
1. Starte den Server  oder gib ``reload`` in die Server Konsole ein.
1. Teste das Plugin: wenn du den Server betrittst bzw. verlässt, sollen deine Nachrichten angezeigt werden. Wenn du eine Nachricht als Operator schickst, soll diese golden angezeigt werden.


## Ideen für weitere Entwicklungen
1. Der Zaubertrank soll natürlich nicht unendlich lange wirken. Wie kannst du die Dauer des Zaubertranks einschränken?