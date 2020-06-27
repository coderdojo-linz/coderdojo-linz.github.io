---
title: Back to Basics - Assembler Hello World
description: Lerne, wie ein Computer auf unterster Ebene funktioniert
aliases:
      - /trainingsanleitungen/fundamentals/assembler-hello-world.html
---

# Erste Schritte mit Assembler-Programmierung

## Ziel der Übung

Normalerweise programmieren wir im CoderDojo mit sogenannten [höheren Programmiersprachen](https://de.wikipedia.org/wiki/H%C3%B6here_Programmiersprache) wie C#, Java, Python oder JavaScript. Auf unterster Ebene versteht ein Computer diese Sprachen aber nicht. Er kann nur mit [Maschinensprache](https://de.wikipedia.org/wiki/Maschinensprache) umgehen. Diese Befehle kann der Prozessor deines Computers direkt ausführen.

In dieser Übung probieren wir, ein Programm direkt in Maschinensprache zu programmieren. Dazu verwenden wir eine [Assemblersprache](https://de.wikipedia.org/wiki/Assemblersprache). Auch wenn du später selten Assembler programmieren wirst, hilft dir diese Übung, besser zu verstehen, was im Hintergrund passiert.

In dieser grundlegenden Übung stehen die einfachsten Grundlagen von Assembler sowie die Tools, die du dafür brauchst, im Mittelpunkt. Später werden wir uns mit mehr Assembler-Kommandos beschäftigen.

## Systemvoraussetzungen

### Systemabhängigkeit

In Assembler schreibt man Programme für einen bestimmten Prozessor und ein bestimmtes Betriebssystem. Ein Assemblerprogramm, das man z.B. für einen Windows-Computer mit [Intel](https://de.wikipedia.org/wiki/Intel)-Prozessor schreibt, kann man nicht ohne weiteres unter Linux auf einem [ARM](https://de.wikipedia.org/wiki/ARM-Architektur)-Prozessor ausführen.

**Diese Übung setzt einen Intel-Prozessor und Linux (z.B. [Ubuntu](http://www.ubuntu.com/)) voraus.**

### Entwicklungsumgebung im CoderDojo

Im CoderDojo wird dir ein Mentor einen Zugang zu einer fertigen Linux-Maschine geben. Zum Zugriff brauchst du [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). Lade die Software herunter, installiere sie und frage deinen CoderDojo-Mentor um die Zugangsdaten.

### Eigene Entwicklungsumgebung

**Wenn du von einem Mentor die Zugangsdaten zu einer fertigen Entwicklungsumgebung bekommen hast, kannst du dieses Kapitel überspringen.**

Möchtest du die Entwicklungsumgebung auf deinem Computer haben? Das ist natürlich möglich. Die gesamte, verwendete Software ist Open Source und kostenlos.

Damit Linux bei dir läuft, hast du folgende Möglichkeiten (falls du nicht sicher bist, frag einen CoderDojo Mentor um Hilfe):

* Du hast einen Computer, der sowieso **[Ubuntu](http://www.ubuntu.com/)** verwendet? Dann kannst du sofort loslegen.
* Du hast einen **Windows-Computer**, auf dem **Hyper-V** installiert ist bzw. installiert werden kann?
  * Lade [Ubuntu Server](http://www.ubuntu.com/download/server) aus dem Internet herunter. Du bekommst eine *.iso*-Datei
  * Installiere eine neue, virtuelle Maschine in *Hyper-V* mit *Ubuntu Server*. Falls du dabei Hilfe brauchst, frag einen CoderDojo Mentor ([Schritt-für-Schritt-Anleitung](http://www.ubuntu.com/download/desktop/install-ubuntu-desktop))
* Du hast einen **Windows- oder Mac-Computer**, auf dem *Hyper-V* **nicht** funktioniert?
  * Installiere [VirtualBox](https://www.virtualbox.org/) auf deinem Computer.
  * Lade [Ubuntu Server](http://www.ubuntu.com/download/server) aus dem Internet herunter. Du bekommst eine *.iso*-Datei
  * Installiere eine neue, virtuelle Maschine in *Hyper-V* mit *Ubuntu Server*. Falls du dabei Hilfe brauchst, frag einen CoderDojo Mentor ([Schritt-für-Schritt-Anleitung](http://www.ubuntu.com/download/desktop/install-ubuntu-desktop))
* Du kannst oder möchtest *Ubuntu* Linux nicht auf deinem Computer installieren? Du kannst eine virtuelle Maschine in der **Azure Cloud** verwenden ([Schritt-for-Schritt-Anleitung](https://azure.microsoft.com/de-de/documentation/articles/virtual-machines-linux-quick-create-portal/)).
  * **Achtung!** Virtuelle Maschinen in der Cloud sind **kostenpflichtig**. Du brauchst die Hilfe deiner Eltern, um mit einer Kreditkarte den Zugang freizuschalten.

Wenn du deinen *Ubuntu* Linux Server installiert hast, musst du die für die Übung notwendige Software einrichten. Folgendes müssen wir installeren:

* [NASM - The Netwide Assembler](http://www.nasm.us/index.php)
  * [Installationsanleitung](http://www.nasm.us/xdoc/2.12.02/html/nasmdoc1.html#section-1.3)
  * [Download](http://www.nasm.us/pub/nasm/releasebuilds/?C=M;O=D)
  * [Dokumentation](http://www.nasm.us/xdoc/2.12.02/html/nasmdoc0.html)
* [GCC - The GNU Compiler Collection](https://gcc.gnu.org/)
  * GCC wird unter Ubuntu Linux im Paket [build-essentials](https://packages.debian.org/de/sid/build-essential) installiert. Starte daher `sudo apt-get install build-essential`
  * [Dokumentation](http://www.delorie.com/gnu/docs/gcc/gcc_toc.html)
* [GDB - The GNU Project Debugger](https://www.gnu.org/software/gdb/)
  * GDB wird unter Ubuntu Linux im Paket `gdb` installiert. Start daher `sudo apt-get install gdb`
  * [Dokumentation](http://www.delorie.com/gnu/docs/gdb/gdb_toc.html)
* Optional kann man [Syntax Highlighting](https://de.wikipedia.org/wiki/Syntaxhervorhebung) für
  Assemblercode in *vim*, dem Editor, den wir verwenden werden, installieren.
  * [vim-gas](https://github.com/Shirk/vim-gas)

Das gesamte Installationsscript findest du in [install-dev-tools.sh](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/create-ubuntu-scripts/install-dev-tools.sh).

*Hinweise für das Mentorenteam bzw. Coder mit umfangreichem Basiswissen:*

* Im Ordner [create-ubuntu-scripts](https://github.com/coderdojo-linz/coderdojo-linz.github.io/tree/master/trainingsanleitungen/fundamentals/create-ubuntu-scripts) findet ihr ein *ARM-Template* mit zugehörigem PowerShell-Script zum automatischen Anlegen von vorkonfigurierten VMs in Azure.
* Es gibt auch ein [Dockerfile](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/Dockerfile), mit dem ihr ein Docker image erstellen könnt, das die oben genannten Tools enthält (`docker build -t nasm .`). Dazu noch ein Hinweis: Wenn ihr die Übung von unten in einem Docker Container durchführen wollt, braucht ihr folgendes *run* Statement: `docker run -it --rm --security-opt seccomp=unconfined nasm /bin/bash`. Beachtet die Option `--security-opt seccomp=unconfined`. Sie ist nur für `gdb` notwendig.

## Zum Unbuntu Linux Server verbinden

1. Starte [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

1. Im Feld *Host Name (or IP address)* gibst du die IP-Adresse deines Ubuntu Linux Servers ein (im CoderDojo bekommst du die IP-Adresse vom Mentorenteam).<br/>
![PuTTY](img/putty-ip-address.png)

1. Melde dich mit Benutzer und Passwort an (im CoderDojo bekommst du Benutzer und Passwort vom Mentorenteam)

1. Probiere, ob du den Assembler starten kannst, indem du das Kommando `nasm -v` ausführst. Du müsstest die Version von NASM angezeigt bekommen.

Klappt alles? Dann können wir anfangen zu hacken.

## Erste Übung: *Hello World*

Als erstes möchten wir das typische Kennenlernprogramm schreiben, das man in jeder Programmiersprache programmiert: *Hello World*.

1. Starte den Editor *vim* mit dem Kommando `vim`. *vim* ist ein grundlegender Editor, der bei Bedarf auf jeden System installiert werden kann.

1. Mache dich gemeinsam mit dem Mentorenteam vom CoderDojo mit *vim* vertraut.
   * Bei Bedarf findest du eine gute [Einführung in *vim*](https://wiki.ubuntuusers.de/VIM/) im Internet
   * Nützlich ist auch ein [Cheat Sheet](http://vim.rtorr.com/)

1. Erstelle mit *vim* die Datei `hello.asm`, indem du das Kommando `vim hello.asm` eingibst.

1. Gib das [Beispiel-Assemblerprogramm](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/assembler-hello-world/hello-world/hello.asm) in die Datei `hello.asm` ein.

```shell
        SECTION .data       ; DATEN
msg:    db "Hello World",10 ; Diesen Text wollen wir ausgeben
                            ; Die 10 am Ende bedeutet "naechste Zeile".
                            ; Es handelt sich um einen ASCII-Code (Details
                            ; siehe http://www.asciitable.com/)
len:    equ $-msg           ; Wir berechnen die Laenge des Text, indem
                            ; wir die Speicheradresse von msg von der
                            ; aktuelle Speicheradresse ("$") subtrahieren

        SECTION .text       ; PROGRAMMCODE
        global main         ; Das Programm startet bei "main"
main:
        mov edx, len        ; In edx tragen wir die Laenge ein.
                            ; edx ist ein sogenanntes "Register" (Details siehe
                            ; https://de.wikipedia.org/wiki/Register_(Computer))
        mov ecx, msg        ; In ecx die Adresse des Textes
        mov ebx, 1          ; 1 steht fuer "stdout" = Bildschirm
        mov eax, 4          ; 4 steht fuer "Ausgabe"
        int 0x80            ; Mit Interrupt 80 hex rufen wir den 
                            ; Linux Kernel auf

        mov ebx, 0          ; 0 steht fuer "normal beendet"
        mov eax, 1          ; 1 steht fuer "programm beenden"
        int 0x80
```

1. [Kompiliere](https://de.wikipedia.org/wiki/Compiler) das Programm mit `nasm -f elf hello.asm`. Als Ergebnis bekommst du eine Datei `hello.o`.

1. [Linke](https://de.wikipedia.org/wiki/Linker_(Computerprogramm)) das Programm mit `gcc -m32 -o hello hello.o`. Als Ergebnis bekommst du die ausführbare Datei `hello`. Faszinierend, wie klein die Datei ist, oder?

1. Führe dein Programm mit `./hello` aus. Wenn *Hello World" ausgegeben wird, hast du dein erstes Assembler-Programm geschrieben :-)

Hier in paar wichtige Links, die dir helfen, das Programm besser zu verstehen:

* [ASCII-Tabelle](http://www.asciitable.com/)
* [Seite mit Links zu Lernmaterial](http://asm.sourceforge.net/)
* [Linux System Calls](http://www.lxhp.in-berlin.de/lhpsyscal.html)
* [Linux File Descriptors](https://en.wikipedia.org/wiki/File_descriptor)
* [Intel 64 and IA-32 Architectures Software Developer’s Manuals](http://www.intel.com/content/www/us/en/processors/architectures-software-developer-manuals.html)

Während des CoderDojos kannst du das Programm mit dem Mentorenteam diskutieren.


## Challenge: Was macht dieses Programm?

1. Im [diesem Programm](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/assembler-hello-world/hello-challenge/challenge.asm) sind bewusst keine Kommentare enthalten. Versuche herauszufinden was es macht indem du den Code untersuchst.

```shell
        SECTION .bss
buffer: resb 64

        SECTION .text
        global main
main:
part1:
        mov edx, 64
        mov ecx, buffer
        mov eax, 3
        mov ebx, 0
        int 0x80

part2:
        mov edx, eax
        mov eax, 4
        mov ebx, 1
        int 0x80

quit:
        mov eax, 1
        int 0x80
```

1. Gib [diesen Code](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/assembler-hello-world/hello-challenge/challenge.asm) in die Datei `challenge.asm` ein, kompiliere und linke es wie im vorigen Beispiel gezeigt.

1. Führe dein Programm mit `./challenge` aus. Macht es was du vermutet hast?


## Debugging

Ein Debugger ist ein Tool, mit dem du Fehler in einem Programm suchen kannst. Er erlaubt dir, das Programm an jeder beliebigen Stelle anzuhalten und Variablen, Register, etc. anzusehen. Probieren wir den Debugger mit unserem Programm *challenge* aus. 

1. Kompiliere das Programm aus der vorigen Challenge mit `nasm -f elf -F dwarf -g challenge.asm`. Als Ergebnis bekommst du eine Datei `challenge.o`. Achte auf die neue Optionen `-F dwarf -g`. Dadurch fügst du der Zieldatei Daten zum leichteren Debuggen (=Fehlersuchen) hinzu. Näheres zum DWARF Format findest du auf [Wikipedia](https://en.wikipedia.org/wiki/DWARF). 

1. Linke das Programm mit `gcc -m32 -g -o challenge challenge.o`. Als Ergebnis bekommst du die ausführbare Datei `challenge`. Achte auf die neue Option `-g`. Sie sorgt dafür, dass die Debug-Informationen in der ausführbaren Datei erhalten bleiben.

1. Starte den *GNU Debugger* mit `gdb challenge`.

1. Gib das Kommando `list main` ein. Du siehst, dass der Debugger dir dein Programm anzeigen kann, obwohl er nur die ausführbare Datei kennt. `list` funktioniert auch wenn du den Quellcode in der `challenge.asm` Datei nicht hättest.

1. Gib das Kommando `set disassembly-flavor intel` und anschließend das Kommando `disassemble main` ein. Wieder siehst den den Quellcode deines Programms. `disassemble` kannst du immer verwenden, auch wenn das Programm ohne Debuginformationen kompiliert wurde.

1. Jetzt wollen wir zwei *Breakpoints* setzen. Breakpoints sind stellen, an denen der Debugger die Programmausführung unterbrechen soll, damit wir einen Blick auf z.B. Variablenwerte werfen können. Gib die Kommandos `break part1` und `break part2` ein. Der Debugger soll also bei `part1` und `part2` stehenbleiben.

1. Lass dein Programm jetzt mit `run` laufen. Der Debugger müsste sofort bei `part1` stehenbleiben.

1. Schauen wir uns die Variable `buffer` an. Mit `print &buffer` geben wir die Speicheradresse von `buffer` aus. Mit `x /64x &buffer` sehen wir uns 64 Bytes im Speicher als [Hexadezimalwerte](https://de.wikipedia.org/wiki/Hexadezimalsystem) an, die sich an der Adresse von `buffer` befinden. Mit `x /64s &buffer` wird jedes Byte in ein ASCII-Zeichen umgewandelt. Näheres zu *x* (für *examine*) findest du [hier](http://www.delorie.com/gnu/docs/gdb/gdb_56.html). In unserem Fall ist der Speicher, auf den `buffer` verweist, leer, also mit lauter Null-Werten gefüllt.

1. Lassen wir das Programm jetzt mit `c` für `continue` weiterlaufen. Das Programm erwartet eine Eingabe. Gib einen beliebigen Text ein (z.B. *CoderDojo*) und drücke die Enter-Taste.

1. Der Debugger bleibt beim zweiten Breakpoint (`part2`) stehen. Probiere nochmals die `x`-Kommandos von oben aus. Wie du siehst steht jetzt der eingegebene Text im Speicher an der Adresse, auf die `buffer` verweist. Noch ein Tipp dazu: Wenn du einen Text im Speicher ausgeben möchtest, kannst du auch das `printf`-Kommando probieren: `printf "%s", &buffer` ([mehr dazu](https://sourceware.org/gdb/onlinedocs/gdb/Output.html)).

1. Mit dem `info`-Kommando kannst du dir neben vielen anderen Sachen auch die Registerwerte ansehen. Probiere `info registers` und `info registers eax`. 

1. Würden wir das Programm mit `c` jetzt weiterlaufen lassen, würde der eingegebene Text (z.B. *CoderDojo*) am Bildschirm ausgegeben. Wir wollen aber manuell im Debugger den Text im Speicher ändern. Gib dazu das Kommando `p strcpy(&buffer, "Hacked!!!\n")` ein. `strcpy` steht für *string copy*, also für *Text kopieren*. Wir kopieren dementsprechend den Text *Hacked!!!* an den Speicher, auf den die Variable `buffer` zeigt.

1. Überprüfe mit dem uns schon bekannten Kommando `x /10s &buffer` ob das Überschreiben den Textes im Speicher geklappt hat.

1. Lass das Programm mit `c` (*continue*) weiterlaufen. Es müsste *Hacked!!!* ausgeben :-) Geklappt?

## Schleifen

Lass uns noch einen Schritt weiter gehen. In höheren Programmiersprachen wie C#, Java, Python etc. hast du schon Schleifen kennengelernt. Der Prozessor kennt auf unterster Ebene keine solchen Schleifen. Man muss durch Sprünge (*Jump*) Schleifen nachbilden. Das wollen wir an einem Beispiel ausprobieren.

Unsere Aufgabe ist es, ein Programm zu schreiben, bei dem ...

* ...der Benutzer einen Text eingeben kann,
* ...der eingegebene Text im Speicher umgedreht wird (aus *ab* wird *ba*, aus *asdf* wird *fdsa*, *a* bleibt *a*)
* ...das Ergebnis, also der umgedrehte Text, am Bildschirm ausgegeben wird.

1. Überlege dir, wie der Algorithmus aussehen könnte. Diskutiert das am besten mit eurem Mentorenteam beim CoderDojo bevor ihr die Musterlösung im nächsten Schritt anseht.

1. Wir haben dir eine [Musterlösung](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/assembler-hello-world/reverse-string/reverse.asm) zusammengestellt. Gib sie ein. Du musst nicht von vorne beginnen. Wenn du das Beispiel *challenge.asm* von oben noch hast ([download](https://github.com/coderdojo-linz/coderdojo-linz.github.io/blob/master/trainingsanleitungen/fundamentals/assembler-hello-world/hello-challenge/challenge.asm)), brauchst du dieses nur erweitern. Anfang (Texteingabe) und Ende (Textausgabe) sind bei beiden Beispielen gleich.

1. Kompiliere (`nasm -f elf -F dwarf -g reverse.asm`) und linke (`gcc -m32 -g -o reverse reverse.o`) das Programm. Falls Fehler erscheinen, frag deinen CoderDojo-Mentor oder deine Mentorin um Hilfe.

1. Führe das Programm aus und kontrolliere, ob der Text richtig umgedreht wird.

1. Schaue dir jetzt Zeile für Zeile den Code an und versuche, den Algorithmus zu verstehen. Bei Fragen wende dich an das CoderDojo Mentorenteam.

## Weitere Übungen

Wir haben nur an der Oberfläche dessen gekratzt, was Assember alles kann. Hier Vorschläge für nächste, selbständige Übungen: 

* Schreibe ein Programm, bei dem der Benutzer zwei Texte eingeben muss. Anschließend finde heraus, ob die Texte gleich sind und gib eine entsprechende Meldung aus.

* Ändere das letzte Beispiel von oben so, dass statt einem umgedrehten Text ein Text herauskommt, bei dem alle Kleinbuchstaben in Großbuchstaben umgewandelt werden.

Viel Spaß beim Hacken!
