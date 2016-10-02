        SECTION .data       ; Hier speichern wir Daten
msg:    db "Hello World",10 ; Diesen Text wollen wir ausgeben
                            ; Die 10 am Ende bedeutet "naechste Zeile"
len:    equ $-msg           ; Wir berechnen die Laenge des Text, indem
                            ; wir die Speicheradresse von msg von der
                            ; aktuelle Speicheradresse ("$") subtrahieren

        SECTION .text       ; Hier kommt der Code
        global main         ; Das Programm startet bei "main"
main:
        mov edx,len         ; In edx tragen wir die Laenge ein
        mov ecx,msg         ; In ecx die Adresse des Textes
        mov ebx,1           ; 1 steht fuer "stdout" = Bildschirm
        mov eax,4           ; 4 steht fuer "Ausgabe"
        int 0x80            ; Mit Interrupt 80 hex rufen wir den 
                            ; Linux Kernel auf

        mov ebx,0           ; 0 steht fuer "normal beendet"
        mov eax,1           ; 1 steht fuer "programm beenden"
        int 0x80