---
title: Zeiger und Strings
tags: [lecture,c,pointer,strings,intro,C_2,2AHITS]
---

Strings sind Arrays aus `char` Elementen. Das Ende eines Strings wird durch den `char` Wert `\0` gekennzeichnet.

Statt dem Zugriff per Index kann ein sogenannter **Zeiger** verwendet werden.

Beispiel:

```c++
char t[]="Hallo";
char* p;
p=t;
```

- `p` ist ein Zeiger auf ein `char` Element im Array.
- Durch `p=t` wird der Zeiger `p` auf den ersten Buchstaben des Arrays `t` gesetzt. 
  Anmerkung: Der **Name** eines Arrays ist automtisch ein **Zeiger** auf das erste Element im Array. C verwaltet intern alle Arrays über Zeiger.

Um auf den Buchstaben zuzugreifen auf den der Zeiger gerade zeigt schreibt man `*p` (dereferenzieren des Zeigers):

```c++
*p='G';
// "Gallo"
printf("%s\n", t);
// auch p kann verwendet werden
printf("%s\n", p);
```

Ein Zeiger lässt sich bewegen:

- `p++` bewegt den Zeiger um ein Element im Array nach rechts,
- `p--` nach links

```c++
p++; // ein Buchstabe im String vor-bewegen
char c;
c=*p; // liest das Zeichen auf das p gerade zeigt
printf("%c\n", c);
p+=2; // zwei nach rechts
*p='c';
printf("%s\n", t); // Galco
```

