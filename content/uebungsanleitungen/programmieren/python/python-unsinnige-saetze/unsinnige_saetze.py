# CoderDojo Linz - Unsinnige Sätze

from random import randint

subject = ['Lena', 'Tom', 'Die Katze', 'Das Auto', 'Das Känguru' ]
verb = ['träumt', 'schwimmt', 'springt', 'fährt', 'tanzt' ]
object = ['Meer', 'Feld', 'Weltraum', 'Bett', 'Garten', 'Zirkus' ]


def pick(words):
    num_words = len(words)
    num_picked = randint(0, num_words - 1)
    word_picked = words[num_picked]
    return word_picked


def printSentence():
    print(pick(subject), pick(verb), 'im', pick(object), end='.')
    print()

print()
print('Unsinnige Sätze')
print('===============')
print()
print('Drücke einfach ENTER, um einen neuen Satz zu erzeugen.')
print('Oder "n" und dann ENTER, um das Programm zu beenden.')
print()

printSentence()
again = input()
while again != 'n':
    printSentence()
    again = input()

print('Servus!')
