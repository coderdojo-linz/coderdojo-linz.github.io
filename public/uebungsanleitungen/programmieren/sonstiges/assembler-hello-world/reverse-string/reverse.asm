        SECTION .bss          ; DATEN
buffer: resb 64               ; Puffer für eingegebenen Text 

        SECTION .text         ; PROGRAMMCODE
        global main           ; Das Programm startet bei "main"
main:
part1:                        ; Kernel-Funktion zum Lesen eines Textes
        mov edx, 64           ; von stdin verwenden
        mov ecx, buffer       ; ecx zeigt auf den Text-Puffer im Speicher
        mov eax, 3
        mov ebx, 0
        int 0x80              ; danach enthaelt eax die Länge des 
                              ; eingegebenen Textes

        mov esi, 0            ; esi ist ein Index im Text, der von
                              ; LINKS nach RECHTS läuft
        mov edi, eax          ; esi ist ein Index im Text, der von
                              ; RECHTS nach LINKS läuft
        sub edi, 2            ; Wir ignorieren das \n (Zeilenvorschub) 
                              ; am Ende
loop:
        cmp esi, edi          ; Haben sich die Indizes esi und edi in 
                              ; der Mitte getroffen?
        jge endloop           ; ja -> Ende der Schleife
        mov dh, [ecx + esi]   ; Wir vertauschen die Zeichen über das 
        mov dl, [ecx + edi]   ; Register dx (dh und dl)
        mov [ecx + esi], dl
        mov [ecx + edi], dh
        add esi, 1            ; Indizes zu den nächsten Zeichen bewegen
        sub edi, 1
        jmp loop              ; Nächster Schleifendurchlauf
endloop:

part2:                        ; Kernel-Funktion zum Ausgeben eines Textes
                              ; auf stdout aufrufen
                              ; ecx zeigt immer noch auf buffer ->
                              ; muss nicht nochmals gesetzt werden
        mov edx, eax
        mov eax, 4
        mov ebx, 1
        int 0x80

quit:                         ; Programm normal beenden
        mov eax, 1
        int 0x80