---
title: Buchstaben im Computer
tags: [lecture,C_1]
---

Datentyp `char` – speichert einzelnes Zeichen.

```c
char c;
c = 'a';
printf("%c",c);
```

Für einzelne Buchstaben werden einfache Hochkomma (engl. "ticks") verwendet – z.B. `'a'`.

Computer kann nur Zahlen verarbeiten, in einer `char` Variable steht daher eigentlich eine Zahl. Jedem Zeichen wird eine Zahl zwischen 1 und 127 zugeordnet, dies ist der sogenannte **ASCII Code**. 




# Eingabe

Einlesen eines einzelnen Zeichens mit `scanf`.

```c
char c;
scanf("%c", &c);
```



# Benutzer Auswahl

Ein Programm schreiben das dem Anwender eine Auswahl (=Menü) bietet.

```c
char taste;
printf("r...Rot\n");
printf("g...Gruen\n");
printf("b...Blau\n");
printf("Deine Wahl: ");
	
scanf("%c", &taste);

if(taste == 'r')
{
	printf("Du hast Rot genommen\n");
}
if(taste == 'g')
{
	printf("Du hast Gruen genommen\n");
}
if(taste == 'b')
{
	printf("Du hast Blau genommen\n");
}
```



# Eingabe Wiederholungen

Beispiel – mit Hilfe einer Schleife einen Programmteil wiederholen:

```c
char taste = 'j';
while(taste=='j')
{
	...
	printf("nochmal? (j/n)");
	scanf("%c", &taste);
}
```

