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
        mov edx,eax
        mov eax, 4
        mov ebx, 1
        int 0x80

quit:
        mov eax, 1
        int 0x80