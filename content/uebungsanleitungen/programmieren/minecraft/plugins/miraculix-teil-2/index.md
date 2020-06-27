---
title: "Miraculix der Druide - Teil 2"
description: "In dieser Episode wirst du andere heilen lernen."
level: 2
weight: 7
img: "miraculix-teil-2.jpg"
imgposition: "top left"
categories:
- Java
aliases:
  - /trainingsanleitungen/minecraft-plugins/04_getafix-Arguments.html
---

# Miraculix der Druide – Teil 2

## Einleitung
In der letzten Episode haben wir begonnen, ein Plugin für die Befehle `gethealth` und `heal` zu implementieren. Ich habe dir ja versprochen, dass wir am Ende nicht nur uns selbst, sondern auch andere Spieler auf dem Server heilen werden können. Also sollen die folgenden Befehle nun wirklich funktionieren: 

```shell
/gethealth me
/gethealth OidaZocktYT
/heal me
/heal OidaZocktYT
```

{{< imgblock "img/Command.png" "How the command looks like" >}}{{< /imgblock >}}

## Ausführliche Anleitung

### Am Anfang ein wenig Zusammenräumen
Ich habe dir ja in der letzten Episode die Lösung für das `/heal` Kommando versprochen. Also am Ende sollte deine Methode `onCommand` so aussehen:

```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (label.equalsIgnoreCase("gethealth")) {    // get health
        if (sender instanceof Player) {
            Player player = (Player) sender;
            sender.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
            return true;
        } else {
            sender.sendMessage("This command can only be used by players");
            return false;
        }
    } else // heal
    if (sender instanceof Player) {
        Player player = (Player) sender;
        player.setHealth(20.);
        player.sendMessage("Successfully healed player " + player.getName() + ".");
        Bukkit.getLogger().info("The player " + player.getName() + " was successfully healed.");
        return true;
    } else {
        sender.sendMessage("This command can only be used by players");
        return false;
    }
}
```

Ich weiß ja nicht, wie es dir geht, aber das fängt an, wie ein richtiges Programm auszusehen. Leider muss man auch anmerken, dass es auch schon anfängt, ein wenig unübersichtlich zu werden.

Bevor das mit dem Einbau neuer Features wirklich in Chaos ausartet, wollen wir gleich ein bisschen zusammenräumen.

Du siehst ja sicherlich, dass sich die ganze Methode in zwei große Blöcke unterteilt

1. Die Behandlung von `/gethealth`
2. Die Behandlung von `/heal`

Damit du es gut erkennst habe ich die beiden Blöcke fett eingezeichnet. Nun ist es aber so, dass die beiden Blöcke selbst wieder sehr ähnlich sind. Sie überprüfen beide, ob `sender` eh ein `Player` ist und machen dann das Gewünschte oder geben eine Fehlermeldung aus. Da könnten wir doch die Überprüfung, ob `sender` ein `Player` ist gleich am Anfang der Methode genau einmal machen und dann erst das Kommando ausführen.

```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }
    
    Player player = (Player) sender;
    
    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        return true;
    } else {
        player.setHealth(20.);
        return true;
    }
}
```

Ok, da hat sich jetzt einiges getan, das wir uns näher ansehen müssen: Zu Beginn haben wir das `if` mit der eh schon bekannten Bedingung, doch halt! Siehst du das `!` vor der Bedingung? Das bedeutet *Nicht*. Das heißt jetzt, wenn `sender` *nicht* ein `Player` (also wenn `sender` *kein*  `Player`) ist, dann geben wir eine Fehlermeldung aus. Und dann kommt da das `return false`. Das wollen wir uns auch gleich mal ansehen:

Zum einen will ich dir erklären, was das Wort `return` zu bedeuten hat. Wie du ja sicherlich schon bemerkt hast, werden Programme Anweisung für Anweisung, von oben nach unten, ausgeführt. Wenn ein `if` kommt entscheidet es sich, wo es weitergeht (je nachdem, wie die Bedingung in der Klammer nach dem `if` ausgeht), aber sonst gehts recht einfallslos dahin. Wenn aber ein `return` auftaucht, dann kommt wieder Leben in die Sache, weil da wird die laufende Methode *sofort* verlassen.

Gut wirst du sagen, das ist ja alles recht gut und schön, aber warum steht da noch dieses `false` dabei? Dazu wollen wir uns nochmals die allererste Zeile von `onCommand` ansehen:

```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
```
    
Den hinteren Teil ab `onCommand` haben wir uns ja schon letztes Mal angesehen (du weißt schon: `onCommand` ist der Name, dann kommen die Parameter). Heute wollen wir uns die ersten beiden Wörter ansehen:

1. `public` heißt, dass die Methode von außen aufgerufen wird. Stell dir das so vor, dass der Spieler die Methode `onCommand` durch das Eintippen des Kommandos `/gethealth` oder `/heal` aufruft. Das passiert aber außerhalb dieser Klasse. Wenn wir dann gegen Ende dieser Episode neue Methoden hinzufügen, dann werden die `private` sein weil sie nur von `onCommand` aber nicht von irgendwo außerhalb dieser Klasse aufgerufen werden.
2. `boolean` heißt, dass beim Verlassen der Methode ein Wert des Datentyps `boolean` (das ist entweder `true` oder `false`, ja genau so wie bei der Bedingung in einer `if`-Bedingung) zurückgegeben wird.

Also heißt das, dass `onCommand` nicht einfach so verlassen werden kann, sondern, dass ein boolescher Wert angegeben werden muss. Deswegen steht hier auch noch das `false`. Wir könnten auch `true` zurückgeben, aber es gibt die Konvention, dass `onCommand` den Wert `true` genau dann zurückgibt, wenn es das Kommando *erfolgreich* ausführen konnte. Das ist aber hier nicht der Fall, deswegen `false`.

Damit haben wir nach diesem `if`-Block freie Bahn, den `sender` auf `Player` zu casten und, je nach eingegebenen Kommando das Richtige zu tun. Eines fällt uns noch auf: Sowohl im `if (label.equalsIgnoreCase(...))` als auch im `else` steht ein `return true`. Das können wir auch rausnehmen und einmal am Ende der Methode hinschreiben. Damit wird die Sache nochmals ein bisschen einfacher.

```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }
    
    Player player = (Player) sender;
    
    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
```


### Argumente eines Kommandos
Bisher haben wir ja das zweite Wort unseres Kommandos völlig ignoriert. Streng genommen werden Kommandos in das eigentliche *Kommando* (in unserem Fall `/gethealth` oder `/heal`) und in weitere *Argumente* (`me` oder `OidaZocktYT` oder einen anderen Spielernamen) aufgeteilt.

Da stellt sich als erstes natürlich die Frage, wie wir zu diesem Argument dazukommen. Wenn du dir die Parameter der Methode `onCommand` ansiehst, siehst du zum Schluss einen namens `args`. Der Datentyp von `args` ist `String[]`. Hmh, `String` kennen wir ja schon aber was ist `String[]`? Überlegen wir mal: wir könnten ja auch einmal ein Kommando `/heal me 3` schreiben wollen, damit wir die Gesundheit um 3 Punkte erhöhen können. Dieses Kommando hätte dann 2 Argumente, nämlich `me` und dann `3`. Das heißt, dass wir 0, 1, 2, ... Argumente haben könnten. Damit ist ein `String` nicht ausreichend, wir brauchen eine Reihe von Stirngs, je nachdem, wieviele Argumente der Benutzer eingetippt hat. Hier kommt dann `String[]` ins Spiel. Das ist eine Reihe von Strings (Informatiker nennen das ein *Array von Strings*), einer für jedes Argument.

Jetzt wollen wir sehen, wie wir auf diese einzelnen Teile dieses Arrays zugreifen können und wie wir sehen, wie viele solcher Teile in diesem Array drinnen sind. Dazu erweitern wir unser `onCommand` folgendermaßen:

{{< highlight java "hl_lines=2-3" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    sender.sendMessage("There were " + args.length + " arguments given.");
    sender.sendMessage("The first is " + args[0]);
    
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }
    
    Player player = (Player) sender;
    
    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Du siehst, dass wir `args.length` verwenden, um die Anzahl der Elemente in `args` rauszufinden. In der zweiten Zeile siehst du, dass wir auf das erste Element mit `args[0]` zugreifen. Das zweite Element wäre dann `args[1]` usw.

Baue das Projekt und probier es aus, ob es auch wirklich funktioniert. Wenn es passt, dann spiel ein wenig rum und gib auch das zweite und dritte Argument aus. Was passiert, wenn du weniger Argumente eingibst, als du dann in `onCommand` ausliest?

### Einige Überlegungen
Was brauchen wir jetzt? Wenn der Spieler das Argument `me` eingibt, dann ist das ja sehr einfach, weil wir genau unsere bisherige Methode aufrufen können, damit wir unseren eigenen Health-level ausgeben oder uns selbst heilen können.

Anders ist es, wenn der Spieler einen Spielernamen eingibt. Hier können wir den `Player` nicht einfach durch einen Cast vom `sender` erzeugen. Wir müssen uns aufgrund des Spielernamens den `Player` holen.

Wenn wir den Player dann haben, kann der Rest der Methode wie gehabt ablaufen.

### Endlich das neue Feature
Fangen wir gleich mit dem Code an, die Erklärung gibts nachher.

{{< highlight java "hl_lines=7-14" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }

    String playerName = args[0];    // first argument is player name
    Player player;

    if (playerName.equalsIgnoreCase("me")) {
        player = (Player) sender;
    } else {
        player = Bukkit.getPlayer(playerName);
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Du siehst, wir haben nur den mittleren Teil verändert (der fett gedruckte Teil).  Hier speichern wir uns zuerst den Spielernamen in eine eigene Variable, damit das ganze einfacher lesbar wird. 

Dann kommt der Teil mit dem Rausfinden des Spielers. Zuerst deklarieren wir nur eine Variable `player`, ohne ihr sofort einen Wert zuzuweisen und dann kommt das `if`: Wenn der `playerName` den Wert `me` hat, dann machen wir, wie oben überlegt, den üblichen cast. Wenn `playerName` aber einen anderen Wert hat, dann holen wir uns den `Player`. Dafür gibt es von `Bukkit` eine eigene Methode `getPlayer`. Cool, nicht?

Damit geht es wieder ans Bauen und Probieren. Sinnvollerweise änderst du die Versionsnummer im `plugin.yml` auf `0.3.0`. Zum Testen ist es wichtig, dass eine Freundin oder Freund mit dir auf dem gleichen Server spielt, sonst kannst du ja keinen Namen für `/heal` oder `gethealth` angeben. Was passiert eigentlich, wenn du einen Namen eingibst, der nicht auf dem Server spielt?

### Ein paar notwendige Erweiterungen
Und wie sind deine Tests verlaufen? Also mir sind folgende Dinge aufgefallen.

1. Wenn ich vergesse einen Namen oder auch `me` einzugeben, kommt wieder eine Exception. Das kommt daher, weil wir auf ein Element des Arrays `args` zugreifen wollen, das es gar nicht gibt.
2. Wenn ich einen Namen eingebe, der grad nicht auf meinem Server Spielt, bekomme ich auch eine Exception. Das kommt daher, dass `player` dann keinen gültigen Wert haben kann (woher auch, wenns den Spieler auf dem Server gar nicht gibt) und damit die Methoden `player.sendMessage` und `player.setHealth` nicht ausgeführt werden können.

Das müssen wir unbedingt beheben, weil so einen Mist werden wir sicherlich nicht ausliefern.

Um den Fehler Nummer 1 in den Griff zu bekommen brauchen wir eigentlich nur am Beginn der Methode, nachdem wir den `sender` überprüft haben, die Anzahl der Argumente überprüfen. Wenn die Anzahl nicht 1 ist, dann geben wir einfach `false` zurück. Wie du vielleicht schon bemerkt hast, gibt der Server dann automatisch die `usage`-Meldung aus dem `plugin.yml` aus und das ist genau die richtige Reaktion.

Um den Fehler Nummer 2 zu beheben, müssen wir wissen, dass `Bukkit.getPlayer` den Wert `null` zurückgibt, falls der Player auf dem Server nicht gefunden werden kann. Damit können wir nachdem wir den `Player` ermittelt haben, überprüfen ob dieser `null` ist. Wenn das so ist, geben wir wieder eine Fehlermeldung aus und verabschieden uns aus der Methode.

{{< highlight java "hl_lines=7-9 20-22" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }
    
    if (args.length != 1) {
        return false;
    }
    
    String playerName = args[0];    // first argument is player name
    Player player;

    if (playerName.equalsIgnoreCase("me")) {
        player = (Player) sender;
    } else {
        player = Bukkit.getPlayer(playerName);
    }
    
    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        return true;
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

So, jetzt kannst du das ganze nochmals bauen und ausführlich testen.

### Und wieder ein wenig zusammenräumen
Und, waren die Tests jetzt erfolgreich? Bei mir ist nix besonderes mehr aufgetaucht. Damit kannst du die Versionsnummer im `plugin.yml` auf 0.3.1 stellen. Du siehst aber, dass die Methode schon ganz schön länglich wird. Sie ist zwar nicht mehr so verschachtelt, wie sie am Anfang unserer Episode war aber mit dem neuen Feature hat sich die Länge einfach verdoppelt. Das wollen wir noch beheben, bevor wir noch eine letzte kleine Verbesserung einbauen.

Der Startpunkt für unser Zusammenräumen ist, dass sich die Methode in vier Teile teilt

1. Wir überprüfen, ob alles richtig ist, dass wir das Kommando ausführen können
2. Wir holen uns den Player aufgrund des angegebenen Namens
3. Wir überprüfen, ob der Player online ist
4. Wir führen das Kommando aus

Und genauso wollen wir unsere Methode jetzt strukturieren. Im folgenden Code siehst du die Überprüfung, ob das Kommando ausgeführt werden kann, fett dargestellt:

{{< highlight java "hl_lines=2-9" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return false;
    }
    
    if (args.length != 1) {
        return false;
    }
    
    String playerName = args[0];    // first argument is player name
    Player player;

    if (playerName.equalsIgnoreCase("me")) {
        player = (Player) sender;
    } else {
        player = Bukkit.getPlayer(playerName);
    }
    
    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        return true;
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Wenn du jetzt mit der Maus genau diesen fett eingezeichneten Block auswählst (mit gedrückter Maustaste vom `if` bis zur geschlossenen `}` fahren) und dann im Menü **Refactor** unter **Introduce** den Punkt **Method...** auswählst, dann heißt das, dass wir eine neue Methode einführen, welche genau diesen Code-Teil behandelt.

{{< imgblock "img/ExtractMethodStep1.png" "Choose extract method in menu Refactor" >}}{{< /imgblock >}}

Nachdem du den Menüpunkt ausgewählt hast, bekommst du folgendes Bild

{{< imgblock "img/ExtractMethodStep2.png" "Name extracted method" >}}{{< /imgblock >}}

Wir benennen die neue Methode `argumentCannotBeHandled`, da wir in dem Code ja die beiden Situationen rausfiltern, wo wir das Kommando nicht sinnvoll ausführen können. Weiters legen wir fest, dass ihr **Access private** sein soll, weil sie eben nur aus `onCommand` aufgerufen wird und nicht von irgendwo außerhalb der Klasse (beispielsweise vom Spieler). Wenn du jetzt **Ok** klickst, dann sollte dein Code folgendermaßen aussehen.

{{< highlight java "hl_lines=2 26-35" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player;

    if (playerName.equalsIgnoreCase("me")) {
        player = (Player) sender;
    } else {
        player = Bukkit.getPlayer(playerName);
    }
    
    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        return true;
    } else {
        player.setHealth(20.);
    }
    return true;
}

private boolean commandCannotBeHandled(CommandSender sender, String[] args) {
    if (!(sender instanceof Player)) {
        sender.sendMessage("Command can only be used by player");
        return true;
    }
    if (args.length != 1) {
        return true;
    }
    return false;
}
{{< /highlight >}}
Du siehst, dass der ganze Block, den du ausgewählt hast, in eine neue Methode gewandert ist und dass der `if`-Teil von `onCommand` nur mehr eine Zeile lang ist.

Dann holen wir uns den zweiten großen Block:

{{< highlight java "hl_lines=5-11" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player;

    if (playerName.equalsIgnoreCase("me")) {
        player = (Player) sender;
    } else {
        player = Bukkit.getPlayer(playerName);
    }
    
    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        return true;
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Wir wählen ihn wieder aus, **Introduce Method...**, benennen sie `getPlayer`, **Access Private** und los gehts. Ich zeige dir hier nur mehr die Methode `onCommand`:

{{< highlight java "hl_lines=5" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player = getPlayer(playerName, sender);

    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
        return false;
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Nun der dritte Block:

{{< highlight java "hl_lines=7-10" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player = getPlayer(playerName, sender);

    if (player == null) {
        sender.sendMessage("Player " + playerName + " is not online");
        return false;
    }

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Da wir bei `Bukkit.getPlayer` dann `null` zurückbekommen, wenn der Spieler nicht online ist, nennen wir die Methode `playerIsOffline` und landen bei folgendem Code:

{{< highlight java "hl_lines=7" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player = getPlayer(playerName, sender);
    
    if (playerIsOffline(player, sender, playerName)) return false;

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Und zum Schluss noch der vierte Streich:

{{< highlight java "hl_lines=9-13" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player = getPlayer(playerName, sender);
    
    if (playerIsOffline(player, sender, playerName)) return false;

    if (label.equalsIgnoreCase("gethealth")) {
        player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
    } else {
        player.setHealth(20.);
    }
    return true;
}
{{< /highlight >}}

Diesen Teil können wir `handleCommand` nennen und wir landen bei:

{{< highlight java "hl_lines=9" >}}
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    if (commandCannotBeHandled(sender, args)) return false;

    String playerName = args[0];    // first argument is player name
    Player player = getPlayer(playerName, sender);
    
    if (playerIsOffline(player, sender, playerName)) return false;

    handleCommand(label, player);
    return true;
}
{{< /highlight >}}

Du siehst, dass unser `onCommand` damit viel kürzer und leichter lesbar geworden ist. Trotzdem möchte ich, dass wir noch zwei Schönheitsfehler ausbessern.

1. Mir gefällt der Name `commandCannotBeHandled` nicht besonders, weil er eine Verneinung beinhaltet. Besser wäre es, wenn das Ding `commandCanBeHandled` hieße und wir ein `!`(also ein *not*) davorschreiben würden. Das geht recht einfach: Du wählst die Methode `commandCannotBeHandled` aus und gehst wieder auf **Refactor** und dann auf **Invert Boolean...**. Dann benennst du die Methode um in `commandCanBeHandled` und der Rest geht schon wieder automatisch. Praktisch nicht?
2. NetBeans hat die neuen Methoden immer direkt nach der Methode `onCommand` platziert. Jetzt stehen sie in umgekehrter Reihenfolge, als sie in `onCommand` aufgerufen wurden. Daher schlage ich vor, dass wir die Reihenfolge genau umdrehen. Wenn beim herumkopieren der Methoden manchmal Einrückungen nicht mehr passen, macht das nix. Wenn du fertig bist, wähle einfach **Source** und dann **Format** aus und alles sieht wieder schön aus. Zum Schluss sollte dein File `Getafix.java` folgendermaßen aussehen:

```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!commandCanBeHandled(sender, args)) {
            return false;
        }

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);

        if (playerIsOffline(player, sender, playerName)) {
            return false;
        }

        handleCommand(label, player);
        return true;
}

private boolean commandCanBeHandled(CommandSender sender, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return false;
        }
        if (args.length != 1) {
            return false;
        }
        return true;
}

private Player getPlayer(String playerName, CommandSender sender) {
        Player player;
        if (playerName.equalsIgnoreCase("me")) {
            player = (Player) sender;
        } else {
            player = Bukkit.getPlayer(playerName);
        }
        return player;
}

private boolean playerIsOffline(Player player, CommandSender sender, String playerName) {
        if (player == null) {
            sender.sendMessage("Player " + playerName + " is not online");
            return true;
        }
        return false;
}

private void handleCommand(String label, Player player) {
        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        } else {
            player.setHealth(20.);
        }
}
```

### Eine letzte Sache

Du musst zugeben, dass es schon ein wenig komisch ist, dass sich dann jeder gleich selbst oder andere heilen kann, wenn er mal wo runtergefallen ist oder von einem Creeper angegriffen worden ist. Damit ist die Sache mit der Gesundheit bei den Minecraft-Spielen ziemlich witzlos geworden. Wir wollen dem entgegenwirken und sagen, dass nur mehr *op*s unsere Kommandos aufrufen dürfen.

Dazu kann man den `sender` mit der methode `sender.isOp` fragen, ob er op ist. Das war ja einfach. Was wäre nun eine sinnvolle Methode, in der wir unsere Abfrage platzieren könnten? Man kann sagen, dass dies ja eine Bedingung ist, ob das Kommando ausgeführt werden darf. Daher gehen wir in unsere Methode `commandCanBeHandled` und geben zu unserer Bedingung `!(sender instanceof Player)` noch dazu, dass er nicht op sein darf und ändern die Fehlermeldung leicht. Die Methode sollte dann so aussehen:

{{< highlight java "hl_lines=2-3" >}}
private boolean commandCanBeHandled(CommandSender sender, String[] args) {
    if (!(sender instanceof Player) || !sender.isOp()) {
        sender.sendMessage("Command can only be used by player who is op");
        return false;
    }
    if (args.length != 1) {
        return false;
    }
    return true;
}
{{< /highlight >}}

Die Bedingung in diesem `if` Statement müssen wir folgendermaßen lesen: Wenn `sender` kein `Player` ist *oder* wenn `sender` kein op ist, dann darf das Kommando nicht ausgeführt werden. Die beiden geraden Striche (`||`) bedeuten also *oder* und damit kannst du Bedienungen in einem `if` verknüpfen. Falls du mal Bedingungen mit einem *und* verknüpfen willst, verwendest du `&&`.

Falls dir noch aufgefallen ist, dass in der Zeile `if (args.length != 1) {` am Rand eine Glühbirne angezeigt wird, kannst du ja mal draufklicken und `The if statement ist redundant` auswählen. Was passiert und warum funktioniert das?

### Zusammenfassung
Jetzt sind wir fertig für heute. Ich glaube wir haben ein ziemlich tolles Programm durchgemacht und du warst wirklich fleißig. Sieh dir das Programm morgen oder in ein paar Tagen nochmals genau an und versuche genau zu verstehen, warum das alles so funktioniert. Wenn dir etwas unklar ist, schreib es auf und frage nächstes Mal deinen Mentor.


## Kurzversion für Profis
1. In deinem Plugin vom letzten Mal in die CodeDatei ``GetafixPlugin.java`` gehen.
1. Methode ``onCommand`` erweitern, damit diese den folgenden Code beinhaltet:
```java
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return false;
        }
        
        if (args.length != 1) {
            return false;
        }
       
        String playerName = args[0];    // first argument is player name
        Player player;

        if (playerName.equalsIgnoreCase("me")) {
            player = (Player) sender;
        } else {
            player = Bukkit.getPlayer(playerName);
        }
        
        if (player == null) {
            sender.sendMessage("Player " + playerName + " is not online");
        }

        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
            return true;
        } else {
            player.setHealth(20.);
        }
        return true;
}
```
1. Vereinfache den Code, indem du die ersten zwei ``if`` Bedingungen in eine eigene Methode auslagerst: dazu markierst du den Block, der ausgelagert werden soll, klickst mit der rechten Maustaste darauf, wählst **Refactor** > **Introduce** > **Method** aus und gibt der Methode den Name ``argumentCannotBeHandled``.
1. Vereinfache den Code erneut, indem du die 5 Zeilen, in denen der ``Player`` initialisiert wird, auslagerst, und der neuen Methode den Namen ``getPlayer`` gibst.
1. Vereinfache den Code ein drittes Mal, indem du die Überprüfung, ob der ``Player`` online ist, auslagerst und der neuen Methode den Namen ``playerIsOffline`` gibst. 
1. Baue ein, dass nur Operatoren die Kommandos ``/gethealth`` und ``/heal`` ausführen dürfen, indem du eine zusätzliche Überprüfung hinzufügst mit ``!sender.isOp()`` und eine dementsprechende Nachricht an den ``sender`` schickst.
1. Baue das Paket: In Icon Leiste auf den Hammer **Build Project (F11)** klicken
1. Kopiere bzw. ersetze das fertige jar File aus ``dist`` (siehe Pfad im **Output**) in das Minecraft Server Plugin-Verzeichnis. 
1. Starte den Server  oder gib ``reload`` in die Server Konsole ein.
1. Teste das Plugin indem du in Minecraft deine Kommandos ``/gethealth`` und ``/heal`` aufrufst.


## Ideen für weitere Entwicklungen
Falls du Lust hast kannst du ja unser Programm verändern. Einige Ideen gefällig?

1. Man darf sich nicht mehr selber heilen. D. h. du musst `me` als mögliches Argument rausnehmen und aufpassen, dass der Name des Spielers, der geheilt werden soll nicht gleich dem Namen des Senders ist.
1. Heilen bedeutet nicht, dass man gleich auf 20 Gesundheitspunkte kommt, sondern man bekommt 3 Punkte dazu. Was passiert, wenn du jemanden, der 18 Punkte hat heilst? Hat der dann 21? Das darf natürlich nicht passieren
1. Das Kommando `gethealth` darf von jedem ausgeführt werden, aber `heal` nur von ops.