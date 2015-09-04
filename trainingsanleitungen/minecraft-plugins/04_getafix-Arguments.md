---
layout: sushi
title: Getafix Arguments
description: In dieser Episode wirst du andere heilen lernen
---

# Getafix der Wunderheiler – Teil 2
In der letzten Episode haben wir begonnen, ein Plugin für die Befehle `gethealth` und `heal` zu implementieren. Ich habe dir ja versprochen, dass wir am Ende nicht nur uns selbst, sondern auch andere Spieler auf dem Server heilen werden können. Also sollen die folgenden Befehle nun wirklich funktionieren: 

    /gethealth me
    /gethealth OidaZocktYT
    /heal me
    /heal OidaZocktYT

![How the command looks like](03_getafix-Player/Command.png)

## Am Anfang ein wenig Zusammenräumen
Ich habe dir ja in der letzten Episode die Lösung für das `/heal` Kommando versprochen. Also am Ende sollte deine Methode `onCommand` so aussehen:
<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (label.equalsIgnoreCase("gethealth")) {    // get health
            <b>if (sender instanceof Player) {
                Player player = (Player) sender;
                sender.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
                return true;
            } else {
                sender.sendMessage("This command can only be used by players");
                return false;
            }</b>
        } else {    // heal
            <b>if (sender instanceof Player) {
                Player player = (Player) sender;
                player.setHealth(20.);
                return true;
            }
            else {
                sender.sendMessage("This command can only be used by players");
                return false;
            }</b>
        }
    }
</pre>
Ich weiß ja nicht, wie es dir geht, aber das fängt an, wie ein richtiges Programm auszusehen. Leider muss man auch anmerken, dass es auch schon anfängt, ein wenig unübersichtlich zu werden.

Bevor das mit dem Einbau neuer Features wirklich in Chaos ausartet, wollen wir gleich ein bisschen zusammenräumen.

Du siehst ja sicherlich, dass sich die ganze Methode in zwei große Blöcke unterteilt

1. Die Behandlung von `/gethealth`
2. Die Behandlung von `/heal`

Damit du es gut erkennst habe ich die beiden Blöcke fett eingezeichnet. Nun ist es aber so, dass die beiden Blöcke selbst wieder sehr ähnlich sind. Sie überprüfen beide, ob `sender` eh ein `Player` ist und machen dann das Gewünschte oder geben eine Fehlermeldung aus. Da könnte wir doch die Überprüfung, ob `sender` ein `Player` ist gleich am Anfang der Methode genau einmal machen und dann erst das Kommando ausführen.

<pre>
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
</pre>

Ok, da hat sich jetzt einiges getan, das wir uns näher ansehen müssen: Zu Beginn haben wir das `if` mit der eh schon bekannten Bedingung, doch halt! Siehst du das `!` vor der Bedingung? Das bedeutet *Nicht*. Das heißt jetzt, wenn `sender` *nicht* ein `Player` (also wenn `sender` *kein*  `Player`) ist, dann geben wir eine Fehlermeldung aus. Und dann kommt da das `return false`. Das wollen wir uns auch gleich mal ansehen:

Zum einen will ich dir erklären, was das Wort `return` zu bedeuten hat. Wie du ja sicherlich schon bemerkt hast, werden Programme Anweisung für Anweisung, von oben nach unten, ausgeführt. Wenn ein `if` kommt entscheidet es sich, wo es weitergeht (je nachdem, wie die Bedingung in der Klammer nach dem `if` ausgeht), aber sonst gehts recht einfallslos dahin. Wenn aber ein `return` auftaucht, dann kommt wieder Leben in die Sache, weil da wird die laufende Methode *sofort* verlassen.

Gut wirst du sagen, das ist ja alles recht gut und schön, aber warum steht da noch dieses `false` dabei? Dazu wollen wir uns nochmals die allererste Zeile von `onCommand` ansehen:

    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
    
Den hinteren Teil ab `onCommand` haben wir uns ja schon letztes Mal angesehen (du weißt schon: `onCommand` ist der Name, dann kommen die Parameter). Heute wollen wir uns die ersten beiden Wörter ansehen:

1. `public` heißt, dass die Methode von außen aufgerufen wird. Stell dir das so vor, dass der Spieler die Methode `onCommand` durch das Eintippen des Kommandos `/gethealth` oder `/heal` aufruft. Das passiert aber außerhalb dieser Klasse. Wenn du die neue Methode ansiehst, dann ist die `private` weil sie nur von `onCommand` aber nicht von irgendwo außerhalb dieser Klasse aufgerufen wird.
2. `boolean` heißt, dass beim Verlassen der Methode ein Wert des Datentyps `boolean` (das ist entweder `true` oder `false`, ja genau so wie bei der Bedingung in einer `if`-Bedingung) zurückgegeben wird.

Also heißt das, dass `onCommand` nicht einfach so verlassen werden kann, sondern, dass ein boolescher Wert angegeben werden muss. Deswegen steht hier auch noch das `false`. Wir könnten auch `true` zurückgeben, aber es gibt die Konvention, dass `onCommand` den Wert `true` genau dann zurückgibt, wenn es das Kommando *erfolgreich* ausführen konnte. Das ist aber hier nicht der Fall, deswegen `false`.

Damit haben wir nach diesem `if`-Block freie Bahn, den `sender` auf `Player` zu casten und, je nach eingegebenen Kommando das Richtige zu tun. Eines fällt uns noch auf: Sowohl im `if (label.equalsIgnoreCase(...))` als auch im `else` steht ein `return true`. Das können wir auch rausnehmen und einmal am Ende der Methode hinschreiben. Damit wird die Sache nochmals ein bisschen einfacher.

<pre>
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
</pre>


## Argumente eines Kommandos
Bisher haben wir ja das zweite Wort unseres Kommandos völlig ignoriert. Streng genommen werden Kommandos in das eigentliche *Kommando* (in unserem Fall `/gethealth` oder `/heal`) und in weitere *Argumente* (`me` oder `OidaZocktYT` oder einen anderen Spielernamen) aufgeteilt.

Da stellt sich als erstes natürlich die Frage, wie wir zu diesem Argument dazukommen. Wenn du dir die Parameter der Methode `onCommand` ansiehst, siehst du zum Schluss einen namens `args`. Der Datentyp von `args` ist `String[]`. Hmh, `String` kennen wir ja schon aber was ist `String[]`? Überlegen wir mal: wir könnten ja auch einmal ein Kommando `/heal me 3` schreiben wollen, damit wir die Gesundheit um 3 Punkte erhöhen können. Dieses Kommando hätte dann 2 Argumente, nämlich `me` und dann `3`. Das heißt, dass wir 0, 1, 2, ... Argumente haben könnten. Damit ist ein `String` nicht ausreichend, wir brauchen eine Reihe von Stirngs, je nachdem, wieviele Argumente der Benutzer eingetippt hat. Hier kommt dann `String[]` ins Spiel. Das ist eine Reihe von Strings (Informatiker nennen das ein *Array von Strings*), einer für jedes Argument.

Jetzt wollen wir sehen, wie wir auf diese einzelnen Teile dieses Arrays zugreifen können und wie wir sehen, wie viele solcher Teile in diesem Array drinnen sind. Dazu erweitern wir unser `onCommand` folgendermaßen:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        <b>sender.sendMessage("There were " + args.length + " arguments given.");
       sender.sendMessage("The first is " + args[0]);</b>
       
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
</pre>

Du siehst, dass wir `args.length` verwenden, um die Anzahl der Elemente in `args` rauszufinden. In der zweiten Zeile siehst du, dass wir auf das erste Element mit `args[0]` zugreifen. Das zweite Element wäre dann `args[1]` usw.

Baue das Projekt und probier es aus, ob es auch wirklich funktioniert. Wenn es passt, dann spiel ein wenig rum und gib auch das zweite und dritte Argument aus. Was passiert, wenn du weniger Argumente eingibst, als du dann in `onCommand` ausliest?

## Einige Überlegungen
Was brauchen wir jetzt? Wenn der Spieler das Argument `me` eingibt, dann ist das ja sehr einfach, weil wir genau unsere bisherige Methode aufrufen können, damit wir unseren eigenen Health-level ausgeben oder uns selbst heilen können.

Anders ist es, wenn der Spieler einen Spielernamen eingibt. Hier können wir den `Player` nicht einfach durch einen Cast vom `sender` erzeugen. Wir müssen uns aufgrund des Spielernamens den `Player` holen.

Wenn wir den Player dann haben, kann der Rest der Methode wie gehabt ablaufen.

## Endlich das neue Feature
Fangen wir gleich mit dem Code an, die Erklärung gibts nachher.

<pre>
public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return false;
        }
<b>
       String playerName = args[0];    // first argument is player name
       Player player;

       if (playerName.equalsIgnoreCase("me")) {
           player = (Player) sender;
       } else {
           player = Bukkit.getPlayer(playerName);
       }
</b>
        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        } else {
            player.setHealth(20.);
        }
        return true;
    }
</pre>

Du siehst, wir haben nur den mittleren Teil verändert (der fett gedruckte Teil).  Hier speichern wir uns zuerst den Spielernamen in eine eigen Variable, damit das ganze einfacher lesbar wird. 

Dann kommt der Teil mit dem Rausfinden des Spielers. Zuerst deklarieren wir nur eine Variable `player`, ohne ihr sofort einen Wert zuzuweisen und dann kommt das `if`: Wenn der `playerName` den Wert `me` hat, dann machen wir, wie oben überlegt, den üblichen cast. Wenn `playerName` aber einen anderen Wert hat, dann holen wir uns den `Player`. Dafür gibt es von `Bukkit` eine eigene Methode `getPlayer`. Cool, nicht?

Damit geht es wieder ans Bauen und Probieren. Sinnvollerweise änderst du die Versionsnummer im `plugin.yml` auf `0.3.0`. Zum Testen ist es wichtig, dass eine Freundin oder Freund mit dir auf dem gleichen Server spielt, sonst kannst du ja keinen Namen für `/heal` oder `gethealth` angeben. Was passiert eigentlich, wenn du einen Namen eingibst, der nicht auf dem Server spielt?

## Ein paar notwendige Erweiterungen
Und wie sind deine Tests verlaufen? Also mir sind folgende Dinge aufgefallen.

1. Wenn ich vergesse einen Namen oder auch `me` einzugeben, kommt wieder eine Exception
2. Wenn ich einen Namen eingebe, der grad nicht auf meinem Server Spielt, bekomme ich auch eine Exception.

Das müssen wir unbedingt beheben, weil so einen Mist werden wir sicherlich nicht ausliefern.

Um den Fehler Nummer 1 in den Griff zu bekommen brauchen wir eigentlich nur am Beginn der Methode, nachdem wir den `sender` überprüft haben, die Anzahl der Argumente überprüfen. Wenn die Anzahl nicht 1 ist, dann geben wir einfach `false` zurück. Wie du vielleicht schon bemerkt hast, gibt der Server dann automatisch die `usage`-Meldung aus dem `plugin.yml` aus und das ist genau die richtige Reaktion.

Um den Fehler Nummer 2 zu beheben, müssen wir wissen, dass `Bukkit.getPlayer` den Wert `null` zurückgibt, falls der Player auf dem Server nicht gefunden werden kann. Damit können wir nachdem wir den `Player` ermittelt haben, überprüfen ob dieser `null` ist. Wenn das so ist, geben wir wieder eine Fehlermeldung aus und verabschieden uns aus der Methode.
<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return false;
        }
        
        <b>if (args.length != 1) {
            return false;
       }</b>
       
        String playerName = args[0];    // first argument is player name
        Player player;

        if (playerName.equalsIgnoreCase("me")) {
            player = (Player) sender;
        } else {
            player = Bukkit.getPlayer(playerName);
        }
        
        <b>if (player == null) {
            sender.sendMessage("Player " + playerName + " is not online");
       }</b>

        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
            return true;
        } else {
            player.setHealth(20.);
        }
        return true;
    }
</pre>
So, jetzt kannst du das ganze nochmals bauen und ausführlich testen.

## Und wieder ein wenig zusammenräumen
Und, waren die Tests jetzt erfolgreich? Bei mir ist nix besonderes mehr aufgetaucht. Damit kannst du die Versionsnummer im `plugin.yml` auf 0.3.1 stellen. Du siehst aber, dass die Methode schon ganz schön länglich wird. Sie ist zwar nicht mehr so verschachtelt, wie sie am Anfang unserer Episode war aber mit dem neuen Feature hat sich die Länge einfach verdoppelt. Das wollen wir noch beheben, bevor wir noch eine letzte kleine Verbesserung einbauen.

Der Startpunkt für unser Zusammenräumen ist, dass sich die Methode in vier Teile teilt

1. Wir überprüfen, ob alles richtig ist, dass wir das Kommando ausführen können
2. Wir holen uns den Player aufgrund des angegebenen Namens
3. Wir überprüfen, ob der Player online ist
4. Wir führen das Kommando aus

Und genauso wollen wir unsere Methode jetzt strukturieren. Im folgenden Code siehst du die Überprüfung, ob das Kommando ausgeführt werden kann, fett dargestellt:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        <b>if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return false;
        }
        
        if (args.length != 1) {
            return false;
       }</b>
       
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
</pre>

Wenn du jetzt mit der Maus genau diesen fett eingezeichneten Block auswählst (mit gedrückter Maustaste vom `if` bis zur geschlossenen `}` fahren) und dann im Menü **Refactor** unter **Introduce** den Punkt **Method...** auswählst, dann heißt das, dass wir eine neue Methode einführen, welche genau diesen Code-Teil behandelt.

![Choose extract method in menu Refactor](04_getafix-Arguments/ExtractMethodStep1.png)

Nachdem du den Menüpunkt ausgewählt hast, bekommst du folgendes Bild

![Name extracted method](04_getafix-Arguments/ExtractMethodStep2.png)

Wir benennen die neue Methode `argumentCannotBeHandled`, da wir in dem Code ja die beiden Situationen rausfiltern, wo wir das Kommando nicht sinnvoll ausführen können. Weiters legen wir fest, dass ihr **Access private** sein soll. Wenn du jetzt **Ok** klickst, dann sollte dein Code folgendermaßen aussehen.
<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        <b>if (commandCannotBeHandled(sender, args)) return false;</b>

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
<b>
    private boolean commandCannotBeHandled(CommandSender sender, String[] args) {
        if (!(sender instanceof Player)) {
            sender.sendMessage("Command can only be used by player");
            return true;
        }
        if (args.length != 1) {
            return true;
        }
        return false;
    }</b>
</pre>
Du siehst, dass der ganze Block, den du ausgewählt hast, in eine neue Methode gewandert ist und dass der `if`-Teil von `onCommand` nur mehr eine Zeile lang ist.

Dann holen wir uns den zweiten großen Block:
<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        <b>Player player;

        if (playerName.equalsIgnoreCase("me")) {
            player = (Player) sender;
        } else {
            player = Bukkit.getPlayer(playerName);
        }</b>
        
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
</pre>

Wir wählen ihn wieder aus, **Introduce Method...**, benennen sie `getPlayer`, **Access Private** und los gehts. Ich zeige dir hier nur mehr die Methode `onCommand`:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        <b>Player player = getPlayer(playerName, sender);</b>

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
</pre>

Nun der dritte Block:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);
        <b>
       if (player == null) {
           sender.sendMessage("Player " + playerName + " is not online");
           return false;
       }</b>

        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        } else {
            player.setHealth(20.);
        }
        return true;
    }
</pre>

Da wir bei `Bukkit.getPlayer` dann `null` zurückbekommen, wenn der Spieler nicht online ist, nennen wir die Methode `playerIsOffline` und landen bei folgendem Code:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);
        
        <b>if (playerIsOffline(player, sender, playerName)) return false;</b>

        if (label.equalsIgnoreCase("gethealth")) {
            player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
        } else {
            player.setHealth(20.);
        }
        return true;
    }
</pre>

Und zum Schluss noch der vierte Streich:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);
        
        if (playerIsOffline(player, sender, playerName)) return false;

        <b>if (label.equalsIgnoreCase("gethealth")) {
           player.sendMessage("Health of " + player.getName() + ": " + player.getHealth());
       } else {
           player.setHealth(20.);
       }</b>
        return true;
    }
</pre>

Diesen Teil können wir `handleCommand` nennen und wir landen bei:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (commandCannotBeHandled(sender, args)) return false;

        String playerName = args[0];    // first argument is player name
        Player player = getPlayer(playerName, sender);
        
        if (playerIsOffline(player, sender, playerName)) return false;

        <b>handleCommand(label, player);</b>
        return true;
    }
</pre>

Du siehst, dass unser `onCommand` damit viel kürzer und leichter lesbar geworden ist. Trotzdem möchte ich, dass wir noch zwei Schönheitsfehler ausbessern.

1. Mir gefällt der Name `commandCannotBeHandled` nicht besonders, weil er eine Verneinung beinhaltet. Besser wäre es, wenn das Ding `commandCanBeHandled` hieße und wir ein `!`(also ein *not*) davorschreiben würden. Das geht recht einfach: Du wählst die Methode `commandCannotBeHandled` aus und gehst wieder auf **Refactor** und dann auf **Invert Boolean...**. Dann benennst du die Methode um in `commandCanBeHandled` und der Rest geht schon wieder automatisch. Praktisch nicht?
2. NetBeans hat die neuen Methoden immer direkt nach der Methode `onCommand` platziert. Jetzt stehen sie in umgekehrter Reihenfolge, als sie in `onCommand` aufgerufen wurden. Daher schlage ich vor, dass wir die Reihenfolge genau umdrehen. Wenn beim herumkopieren der Methoden manchmal Einrückungen nicht mehr passen, macht das nix. Wenn du fertig bist, wähle einfach **Source** und dann **Format** aus und alles sieht wieder schön aus. Zum Schluss sollte dein File `Getafix.java` folgendermaßen aussehen:

<pre>
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
</pre>

## Eine letzte Sache
Du musst zugeben, dass es schon ein wenig komisch ist, dass sich dann jeder gleich selbst oder andere heilen kann, wenn er mal wo runtergefallen ist oder von einem Creeper angegriffen worden ist. Damit ist die Sache mit der Gesundheit bei den Minecraft-Spielen ziemlich witzlos geworden. Wir wollen dem entgegenwirken und sagen, dass nur mehr *op*s unsere Kommandos aufrufen dürfen.

## Ideen für weitere Entwicklungen
Jetzt sind wir fertig für heute. Ich glaube wir haben ein ziemlich tolles Programm durchgemacht und du warst wirklich fleißig. Sie dir das Programm morgen oder in ein paar Tagen nochmals genau an und versuche genau zu verstehen, warum die Sache jetzt so funktioniert. Wenn dir etwas unklar ist, schreib es auf und frage nächstes Mal deinen Mentor.

Falls du Lust hast kannst du ja unser Programm verändern: 