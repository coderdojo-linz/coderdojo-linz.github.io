---

title: Dein erstes Plugin
description: In dieser Übung wirst du dein erstes Minecraft-Plugin erstellen, das dich auf Kommando begrüßt
---

# Dein erstes Plugin /sayhello

Inhalt:

* [Einleitung](#intro)
* [Neues NetBeans-Projekt](#project)
* [Ausführliche Anleitung](#long)
* [Kurzversion für Profis](#short)

## <a name="intro"></a>Einleitung
Nach den Vorbereitungsarbeiten können wir nun endlich unser erstes Plugin entwickeln. Wenn wir mit dieser Episode fertig sind, wirst du in Minecraft den Befehl ``/sayhello`` eingeben können und du wirst eine Antwort erhalten und er wird dich sogar mit deinem Minecraft-Namen ansprechen.

![Command screenshot](02_first-plugin/Command.png)

Dieses wird vielleicht noch nicht das absolute Killer-Plugin auf *Curse* sein aber eine Reise beginnt immer mit ihrem ersten Schritt. Also, los gehts:


## <a name="project"></a>Ein neues NetBeans-Projekt anlegen
Als erstes starten wir natürlich NetBeans. Die StartPage brauchen wir nicht und du kannst sie gleich wegklicken. Jetzt gehst du ins Menü **File** und findest als ersten Menüpunkt **New Project …** Wenn du den auswählst, siehst du folgendes Fenster:

![Choose Project](02_first-plugin/ChooseProject.png)

Du wählst die Kategorie **Java** und von den Projekten **Java Class Library**, anschließend klickst du auf **Next >**. Damit siehst du sofort ein weiteres Fenster, das folgendermaßen aussieht:

![Name and locate project](02_first-plugin/NameAndLocateProject.png)

Hier vergibst du einen sinnvollen Projektnamen. Da es unser erstes Plugin ist, tut es auch ein etwas einfallsloses **FirstPlugin**, besser verständlich ist natürlich ein Name wie **GreetMe**. Für die **Project Location** suchst du dir einen Platz auf deiner Festplatte, wo du das Plugin auch wiederfindest. **Project Folder** lässt sich nicht ändern. Dieses Feld zeigt dir nur, wo dein Projekt und alle seine Files gespeichert werden. Damit bist du fertig und kannst auf den Button **Finish** drücken. Damit verschwindet das Fenster und du hast einen ersten Blick auf dein gesamtes Projekt.

So nun wollen wir uns mal ein wenig orientieren.

![NetBeans Overview](02_first-plugin/NetBeansOverview.png)

Der Arbeitsbereich in NetBeans gliedert sich grundsätzlich in 5 Teile. Wir gehen diese nummernweise durch:

1. Im *Project Explorer* hast du einen Überblick über dein Projekt. Alle Dateien, die du dazu brauchst sind hier aufgelistet und können relative schnell gefunden werden. Die wichtigsten Files wirst du unter **Source Packages** finden.
2. Im *Navigator* wirst du, nachdem wir das erste File editieren, einen Überblick über das geöffnete File haben. Wenn das File ein wenig größer wird, wirst du sehen, dass es sehr bequem ist, wenn man schnell zu bestimmten Punkten im File springen kann.
3. Im *Information Panel* bekommst du Informationen, die beim Arbeiten wichtig sind. Beispielsweise kannst du hier sehen, ob du dein Projekt erfolgreich "baut", das heißt für den Einsatz in Minecraft übersetzt werden kann.
4. Das ist der *Editor*. Hier werden wir dann Java-Code reinschreiben
5. Das ist die *Toolbar*. Manche Befehle (z. B. um das Projekt zu bauen) können wir hier schnell erreichen.

Bevor wir jetzt endlich mit dem Programmieren beginnen, müssen wir noch die Datei ``craftbukkit.jar`` zu unserem Projekt hinzufügen. Ja du liest richtig, es ist genau dieselbe Datei, die wir bereits verwendet haben, um unseren Server zu starten. Am besten legst du dir eine Kopie an und legst sie im Ordner neben deinem FirstPlugin ab. Nun klickst du im **Project Explorer** mit der rechten Maustaste auf den Ordner **Libraries** und wählst den Punkt **Add JAR/Folder…** aus:

![Add JAR Step 1](02_first-plugin/AddJarStep1.png)

Nun siehst du folgendes Fenster in welchem du zum File ``craftbukkit.jar`` navigieren kannst. Wähle es aus und klicke auf **Choose**.

![Add JAR Step 2](02_first-plugin/AddJarStep2.png)

Jetzt siehst du im **Project Explorer** im Ordner **Libraries** die Datei ``craftbukkit.jar``. So jetzt können wir mit dem Programmieren beginnen.

### Großeltern-Imponier-Wissen
* Java-Programme müssen, bevor sie ausgeführt werden können, *gebaut* werden. Das heißt, dass man den Java-Code (also das, was du schreibst) in einen Maschinen-Code (also das, was ein Computer ausführen kann) umwandeln muss. Manchmal sagt man auch, dass das Programm *compiliert* werden muss.
* Wenn du ein Minecraft-Plugin schreibst, brauchst du Informationen vom Server (z. B. den Namen des Spielers) oder willst auch das Verhalten des Servers teilweise verändern (z. B. soll er auf das Kommando ``/sayhello`` reagieren, was er ja sonst mal so nicht täte). Damit das möglich ist, gibt es das sogenannte *API* (**A**pplication **P**rogrammer **I**nterface), das sind alle "Funktionen", die der Server für dich zum Programmieren zur Verfügung stellt. Damit wir das API zur Verfügung haben, fügen wir die Datei ``craftbukkit.jar`` zu unserem Projekt dazu.

## <a name="long"></a>Ausführliche Anleitung

### Ein Package und die Plugin-Klasse anlegen
Du speicherst Java-Dateien in *Packages* ab. Wenn du im **Project Explorer** den Ordner **Source Packages** öffnest, siehst du das Package **\<default package\>**. Damit Package-Namen aber sicherlich eindeutig sind, legst du besser ein neues Package an, mit ``io.coderdojo-linz.<dein-name>.firstplugin`` (dabei ersetzt du ``<dein-name>`` durch deinen Namen). Wenn du eine eigene Domain über die du im Netz erreichbar bist hast, dann kannst du auch die verwenden.

Also klickst du mit der rechten Maustaste auf **Source Packages** und wählst aus dem Kontextmenü **New** und dann **Java Package ...** aus. 

![New Package Step 1](02_first-plugin/NewPackageStep1.png)

Im nun folgenden Fenster gibst du den Namen deines Packages, wie wir oben beschrieben haben, ein und klickst auf den Button **Finish**.

![New Package Step 1](02_first-plugin/NewPackageStep2.png)

Jetzt ist das Package **\<default package\>** verschwunden. Das macht nichts, weil wir es derzeit echt nicht brauchen. Und nun musst du noch die Klasse anlegen, in der wir dieses Plugin programmieren. Dazu (Überraschung!!) klickst du mit der rechten Maustaste auf das neu erstellte Package und wählst dann **New** und **Java Class...** aus

![New Class Step 1](02_first-plugin/NewClassStep1.png)

Im darauffolgenden Fenster gibst du der neuen Klasse einen Namen und klickst auf **Finish**.

![New Class Step 2](02_first-plugin/NewClassStep2.png)

Jetzt solltest du in NetBeans ziemlich genau dieses Bild vor dir haben:

![New Class Step 2](02_first-plugin/NewClassStep3.png)

Die grauen Zeilen am Anfang des Files sehen wahrscheinlich ein wenig anders aus. Das macht aber nix, weil das ist ein Kommentar und Kommentare werden vom Compiler ignoriert. Man verwendet Kommentare, um etwas in sein Programm reinzuschreiben, das für Menschen wichtig ist, aber nicht für Computer. Du kannst das ausprobieren und in einer Zeile *außerhalb* eines Kommentars folgende Zeilen dazuschreiben:

    /*
    Ich kann so schreiben wie ich bin. Du darfst.
    */
    
Wenn du jetzt aber die Zeichen ``/*`` und ``*/`` wegnimmst, dann wirst du sehen, dass der Text, den du geschrieben hast, rot unterstrichen ist und das bedeutet, dass der Compiler in deinem Java-Programm einen Fehler entdeckt hat. Also schließen wir daraus, dass mit ``/*`` ein Kommentar beginnt und so lange ist, bis die Zeichen ``*/`` vorkommen.

### Die Klasse programmieren
Nun musst du dieser Klasse als erstes mal mitteilen, dass sie ein Plugin werden soll. Das machst du indem du in der Zeile mit ``public class FirstPlugin {`` folgendes dazuschreibst:

![Extend class to JavaPlugin](02_first-plugin/ExtendJavaPlugin.png)

Du siehst nun, dass das Wort `JavaPlugin` rot unterstrichen ist und am Beginn der Zeile einen Hinweis bekommen hast. Das bedeutet, dass der Compiler einen Fehler gefunden hat (rot unterstrichen) und aber einen oder mehrere Lösungsvorschläge für dich hat (gelbe Glühbirne am Beginn der Zeile). Wenn du auf die Glühbirne klickst, bekommst du die Option angeboten, **Add import org.bukkit.plugin.java.JavaPlugin** und genau das wählst du aus. Damit sollte die Fehlermeldung verschwunden sein und ein paar Zeilen über der Zeile, die du gerade geschrieben hast, die Codezeile ``import org.bukkit.plugin.java.JavaPlugin;`` stehen.

Somit hätten wir ein fast lauffähiges Plugin, das genau gar nix macht. Da das genau niemand braucht, werden wir dem Ding mal sagen, dass es bei Aufruf ``Hello stranger`` ausgeben soll. Dazu müssen wir eine *Methode* anlegen und das geht so: Als erstes klickst du in die Klasse ``FirstPlugin``, das heißt, du platzierst den Cursor in die Zeile zwischen der geschwungenen Klammer auf und wieder zu. 

    public class FirstPlugin extends JavaPlugin {
       // your cursor must be here
    }


Also du klickst genau in die leere Zeile. Dann gehst du auf das Menü **Source** und wählst **Insert Code...** aus.

![Add onCommand](02_first-plugin/AddOnCommandStep1.png)

Damit bekommst du ein kleines Fensterchen, in welchem du **Override Method...** auswählst.

![Add onCommand](02_first-plugin/AddOnCommandStep2.png)

Und weils grad so lustig ist, kommt gleich noch ein Fenster, in welchem wir die Zeile mit **onCommand(CommandSender sender, ...)** auswählen.

![Add onCommand](02_first-plugin/AddOnCommandStep3.png)

Wenn du dann auf **Generate** klickst, siehst du in deiner Klasse eine erste *Methode*. In einer Methode legst du fest, was das Plugin machen soll. Dazu löschst du als erstes die Zeile mit ``return super.onCommand(sender, command, label, args)`` und schreibst stattdessen folgendes rein:

        sender.sendMessage("Hello stranger");
        return true;

Am Ende sollte deine Klasse genau so aussehen:

![Add onCommand](02_first-plugin/AddOnCommandStep4.png)

Wenn du dich ein wenig umsiehst, wirst du merken, dass zum Import von ``org.bukkit.plugin.java.JavaPlugin`` noch ein paar weitere Imports dazugekommen sind und dann eben die *Methode* ``onCommand``. Wenn du das noch nicht verstehst, mach dir keine Sorgen. Wir kommen darauf zurück. 

Jetzt wollen wir aber so schnell wie möglich durch und unser Plugin zum Laufen bekommen. Was uns noch fehlt ist, dass wir für Minecraft erkenntlich machen, wie das Plugin heißt und auf welches Kommando es reagiert. Das machen wir im ``plugin.yml``.

### Das ``plugin.yml`` anlegen, das Projekt bauen und testen
Im ``plugin.yml`` schreiben wir alles das rein, das Minecraft braucht, um unser Plugin zu erkennen und im richtigen Moment auch aufrufen zu können. Dazu legen wir das File zuerst einmal an. Überraschenderweise klickst du wieder mit der rechten Maustaste auf das **Source Package** und wählst **New** und **YAML File...** aus. Falls du diesen Eintrag nicht findest, wählst du im Menü ganz unten **Other...** aus und wählst aus der Kategorie **Other** den Punkt **YAML File** aus.

![Add onCommand](02_first-plugin/AddYamlStep1.png)

Inzwischen kennst du den zweiten Schritt wahrscheinlich auch schon: Wir müssen das File benennen. Achte darauf, dass,

1. das File wirklich ``plugin`` heißt und
2. wie beim Java-File auch, du nicht die Dateierweiterung ``.yml`` dazuschreibst. Es reicht der Name ``plugin``, im Feld **Created File** siehst du, dass das ``yml`` automatisch angehängt wird:

![Add onCommand](02_first-plugin/AddYamlStep2.png)

Und wenn du jetzt in den Project Explorer schaust, dann entdeckst du, dass unser geliebtes ``<default package>`` wiederauferstanden ist. Das ist auch richtig so, da Minecraft das ``plugin.yml`` genau an dieser Stelle sucht.

![Add onCommand](02_first-plugin/AddYamlStep3.png)

Jetzt haben wir wieder ein leeres File und dürfen hier die notwendigen Informationen eintragen:

![Add onCommand](02_first-plugin/AddYamlStep4.png)

Bevor du beginnst, das abzuschreiben, lies dir die folgenden Punkte bitte durch: Als erstes achte bitte darauf, dass nach den Doppelpunkten immer unbedingt ein Leerzeichen kommen muss.

1. **name** ist eben der Name und kann beliebig gewählt werden. Sinnvollerweise nennen wir unser Plugin so, wie wir auch das Projekt genannt haben.
2. In **main** legen wir fest, in welcher Klasse das Plugin implementiert ist. Und zwar müssen wir das inklusive dem Package-Namen angeben. Vergleiche die Zeile mit ``main`` mit der Darstellung des Packages und der Klasse im Bild darüber. Du siehst, dass das übereinstimmt (bis auf ``.java``).
3. **version** ist eben die Verion. Das darfst du dir aussuchen.
4. **authors** ist eine Liste der Authoren, die untereinander stehen und mit einem Minus (-) anfangen. Hier musst du darauf achten, dass die Zeilen mit den Listeneinträgen ein paar Leerzeichen (**Achtung: keine Tabs**) eingerückt sind.
5. **description** beschreibt das Plugin. Hier kannst du deiner Fantasie wieder freien Lauf lassen.
6. **commands** listet alle Kommandos, auf die das Plugin reagiert auf und gibt eine kurze Beschreibung und einen Benutzungshinweis an. Wir wollen, dass unser Plugin auf das Kommando ``/sayhello`` reagiert. Daher haben wir genau dieses Kommando angegeben. Auch hier achte wieder auf die Einrückungen. Diesmal sind es sogar zwei bei description und usage.

Damit bist du jetzt wirklich fertig und kannst das gesamte Projekt bauen. Dazu klickst du auf den Hammer in der **Toolbar**:

![Toolbar](02_first-plugin/Toolbar.png)

Daraufhin sollte im **Information Panel** im Tab **Output** ca. folgende Information stehen:

![Output of the build run](02_first-plugin/BuildOutput.png)

Der wichtigste Punkt ist die letzte Zeile, in der auf jeden Fall ``BUILD SUCCESSFULL`` stehen muss. Damit ist nämlich klar, dass dein Projekt korrekt ist und vom Compiler übersetzt werden kann.

Um dein Plugin auszuprobieren musst du im File-Explorer (Windows) oder Finder (Mac) in dein NetBeans Projekt-Directory reinsehen. Dort sollte sich nun ein weiteres Directory ``dist`` befinden, in dem sich wiederum ein File ``FirstPlugin.jar`` befinden sollte. Dieses nimmst du nun und bewegst es in das Directory ``plugins`` des Server-Directories, das du noch aus unserer ersten Episode kennst.

Nun kannst du den Server starten. Als erstes überprüfen wir, ob das Plugin korrekt geladen wurde. Das sehen wir im Log des Servers, wenn er hochstartet:
<pre>
Loading libraries, please wait...
[20:49:34 INFO]: Starting minecraft server version 1.8.7
[20:49:34 INFO]: Loading properties
[20:49:34 INFO]: Default game type: SURVIVAL
[20:49:34 INFO]: This server is running CraftBukkit version git-Spigot-6d16e64-b105298 (MC: 1.8.7) (Implementing API version 1.8.7-R0.1-SNAPSHOT)
[20:49:34 INFO]: Debug logging is disabled
[20:49:34 INFO]: Server Ping Player Sample Count: 12
[20:49:34 INFO]: Using 4 threads for Netty based IO
[20:49:34 INFO]: Generating keypair
[20:49:34 INFO]: Starting Minecraft server on *:25565
[20:49:34 INFO]: Using default channel type
[20:49:34 INFO]: Set PluginClassLoader as parallel capable
[20:49:34 INFO]: [FirstPlugin] Loading FirstPlugin v0.1.0
...
</pre>
Innerhalb der ersten 15 bis 20 Zeilen solltest du die Zeile `[FirstPlugin] Loading FirstPlugin v0.1.0` sehen, dann wurde dein Plugin korrekt geladen. Lass dich nicht verwirren, da steht noch sehr viel mehr in der Console, also musst du ein Stück weit nach oben scrollen, damit du das siehst.

Abschließend kannst du testen, indem du das Kommando ``sayhello`` in der Konsole eingibst. Der Server sollte mit ``Hello stranger`` antworten. Auch kannst du noch ins Spiel gehen und dort den Befehl mit Slash ``/sayhello`` eingeben. Auch hier sollte der Server mit einem freundlichen ``Hello stranger`` antworten.

### Eine Erweiterung
Apropos freundlich. Jemanden mit "Stranger" zu begrüßen ist in Bezug auf Freundlichkeit sicherlich noch ausbaufähig. Da das Bukkit-API uns die Möglichkeit gibt, den Namen des Spielers (also den Minecraft-Namen natürlich) rauszufinden, werden wir das benutzen um den Spieler wirklich freundlich mit Namen zu begrüßen.

Dazu gehen wir wieder ins NetBeans und zur Methode ``onCommand`` unseres Plugins. Weil grad Zeit ist, sehen wir uns den Code der Methode ein wenig genauer an.

    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        sender.sendMessage("Hello stranger");
        return true;
    }

Also der Reihe nach:

* In der ersten Zeile fällt in der Mitte eben der Name ``onCommand`` auf. **Wir merken uns**: Jede Methode hat einen Namen.
* Nach dem Namen ist eine Klammer auf, die kurz vor Ende der Zeile auch wieder zu geht. **Wir merken uns**: Jede Methode hat gleich nach dem Namen eine Klammer auf und auch wieder eine Klammer zu.
* Das zwischen diesen Klammern nennt man *Parameter*. Mit diesen kann man einer Methode Informationen geben, die sie für ihre Arbeit braucht. Du siehst bei der Methode ``onCommand`` oben, dass sie einen Parameter ``sender`` hat. Damit ist der "Absender" des Kommandos, also die Spielerin, die ``/sayhello`` eingetippt hat, gemeint.
* Am Ende der Zeile ist eine geschwungene Klammer auf (``{``), die drei Zeilen später auch wieder geschlossen wird. Zwischen diesen Klammern steht drinnen, was die Methode jetzt wirklich macht. Das sind in unserem Fall zwei Dinge und da sehen wir uns grad mal die erste Zeile an: ``sender.sendMessage("Hello stranger");``: Wir wissen schon von oben: ``sender`` ist der Absender des Kommandos. Nach dem Punkt kannst du alle die Methoden hinschreiben, die ein Sender "versteht". ``sendMessage`` ist offensichtlich eine Methode, die einen Text ausgibt. Diese Methode hat ebenfalls einen Parameter, nämlich den Text, den wir gerne ausgegeben hätten.

Gut, mit diesem Wissen können wir uns sammeln und kurz überlegen, was wir brauchen, damit wir den Sender mit seinem Minecraft-Namen begrüßen können.

1. Wir brauchen eine Möglichkeit den Namen rauszufinden. Das geht mit der Methode ``sender.getName()``. Du siehst, diese Methode braucht keine Parameter. Daher kommt nach der Klammer auf, sofort wieder eine Klammer zu.
2. Damit wären wir bei ``sender.sendMessage(sender.getName())``. Aber was ist mit dem "Hello", damit unsere Begrüßung auch wirklich freundlich wird?
3. Daher brauchen wir eine Möglickeit zwei Texte (also "Hello" und den Minecraft-Namen der Spielerin) zusammenzukleben. Das geht in Java mit dem Zeichen +. Also ergibt zum Beispiel ``"Ich " + "programmiere " + "Java"`` den Text ``"Ich programmiere Java"``.
4. Also müssen wir die Zeile noch folgendermaßen erweitern: ``sender.sendMessage("Hello " + sender.getName());``.

Zum Schluss sollte deine Methode so aussehen:

    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        sender.sendMessage("Hello " + sender.getName());
        return true;
    }

Nun sind wir schon wieder fertig. Wie oben musst du das Projekt wieder bauen (weißt schon, der Hammer in der Toolbar) und dann legst du am besten in deinem Verzeichnis ``plugins`` im Verzeichnis``bukkitServer`` ein weiteres Verzeichnis mit Namen ``update`` an. Dorthinein kopierst du jetzt das jar-File. Abschließend gehst du in die Console, in der du den Server gestartet hast und tippst einfach ``reload``. Dann sollte das Plugin neu geladen sein und du kannst es ausprobieren.

Zum Abschluss möchte ich dir noch eine Kleinigkeit zeigen: Es wird immer wieder notwendig sein, dass wir auf die Konsole des Servers etwas rausschreiben und daher wollen wir das gleich mal üben. Bisher kam die Antwort des Servers ja nur auf die Konsole, wenn du das Kommando direkt in der Konsole eingetippt hast. Wir wollen aber, dass, sobald irgendwer das Kommando `/sayhello` eintippt, in der Konsole vermerkt wird, dass dieses Kommando aufgerufen wurde.

Du kannst über `Bukkit.getLogger()` immer auf die Konsole zugreifen und der `Logger` hat eine Methode `info` mit der du Informationen in die Konsole schreiben kannst. Zusammengefasst sieht das ganze dann so aus:

<pre>
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        sender.sendMessage("Hello " + sender.getName());
        <b>Bukkit.getLogger().info("A player was greeted");</b>
        return true;
    }
</pre>

Der Logger hat verschiedene *Levels*, die das Filtern des Logs erlauben. Die wichtigsten sind
 
 * **Info**: das sind einfache Informationen. Diese werden mit der Methode `info` ausgegeben.
 * **Warning**: das sind Meldungen, die von einem Server-Administrator beachtet werden sollten. Diese werden mit der Methode `warning`ausgegeben.
 * **Severe**: das sind kritische Meldungen, denen 100%ig auf den Grund gegangen werden muss. Diese werden mit der Methode `severe` ausgegeben.
 
Da die Information, dass ein Spieler begrüßt wurde, nicht wirklich kritisch ist, belassen wir es bei einer einfachen Info-Message im Log.
 
### Großeltern-Imponier-Wissen
* Texte nennt man in der Informatik Zeichenketten oder auf Englisch: Strings
* Ein *Log* ist so etwas wie ein Tagebuch. Vielleicht kennst du das aus Star Treck: "Logbuch der Enterprise, Sternzeit ..."

### Zusammenfassung
Wenn du das Gefühl hast, dass das alles ganz schön viel ist und ein wenig verwirrend, dann lass dich nicht einschüchtern. Am Besten probierst du es gleich nochmal von vorne und legst nochmals ein neues Plugin-Projekt an. Am Anfang wirst du vielleicht noch öfter nachsehen müssen, dann reicht vielleicht eine Liste der Dinge, die gemacht werden müssen. So eine siehst du hier am Ende dieser Episode. Und nach einer Weile wird dir das ganz geläufig sein. Wie fast immer: Übung macht die Meisterin (und auch den Meister).

## <a name="short"></a>Kurzversion für Profis

1. Neues Projekt anlegen: Menüpunkt **File** > **New Project**, in Choose Project: **Java** > **Java Class Library** mit Projektnamen `FirstPlugin`
1. ``craftbukkit.jar`` zu den Libraries dazufügen: Rechte Maus-Klick auf **Libraries** > **Add JAR/Folder**
1. Package anlegen: Rechte Maus-Klick auf **Source Packages**, Auswahl von **New** > **Java Package** mit Package Name z.B. ``io.coderdojo.<dein-name>.firstplugin``
1. Klasse anlegen: Rechte Maus-Klick auf das eben erstellte Package, Auswahl von **New** > **Java Class** mit Class Name z.B. ``FirstPlugin``
1. ``extends JavaPlugin`` nach dem Klassennamen dazuschreiben
1. Methode ``onCommand`` generieren: Rechte Maus-Klick im Editor zwischen den geschwungenen Klammern > **Inserter Code** > **Override Method** > Auswahl von ``onCommand`` > **Generate**
1. Die Methode ausprogrammieren, also reinschreiben, was geschehen soll, wenn das Command aufgerufen wird:
	<pre>
	public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
		sender.sendMessage("Hello " + sender.getName());
		Bukkit.getLogger().info("A player was greeted.");
		return true;
	}
	</pre>
1. ``plugin.yml`` zum Projekt hinzufügen: Rechte Maus-Klick auf **Source Packages** > **New** auswählen > **YAML File** mit File Name ``plugin``
1. Die Details im ``plugin.yml`` eingeben, wobei du die Details in den eckigen Klammern [] durch deine Werte ersetzt:
	<pre>
	## YAML Template.
	---
	name: [Project Name]
	main: [Package Name].[Class Name]
	version: 1.0.0
	author: [dein Name]
	description: [deine Beschreibung des Plugins]
	commands:
	  [Command Name]:
		description: [deine Beschreibung des Kommandos]
		usage: /[Command Name]
	</pre>
1. Baue das Paket: In Icon Leiste auf den Hammer **Build Project (F11)** klicken
1. Kopiere bzw. ersetze das fertige jar File aus ``dist`` (siehe Pfad im **Output**) in das Minecraft Server Plugin-Verzeichnis. 
1. Starte den Server  oder gib ``reload`` in die Server Konsole ein.
1. Teste das Plugin indem du in Minecraft dein Kommando mit dem Namen, den du im ``plugin.yml`` unter ``[Command Name]`` vergeben hast, aufrufst.