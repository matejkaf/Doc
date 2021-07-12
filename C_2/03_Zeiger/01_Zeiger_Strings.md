---
title: Zeiger und Strings
tags: [lecture,c,pointer,strings,intro,C_2]
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

Anmerkung: Der **Name** eines Arrays ist automtisch ein **Zeiger** auf das erste Element im Array. C verwaltet intern alle Arrays als Zeiger.

Ein Zeiger lässt sich bewegen:

- `p++` bewegt den Zeiger um ein Element im Array nach rechts,
- `p--` nach links

Um auf den Buchstaben zuzugreifen auf den der Zeiger gerade zeigt schreibt man `*p`

- `char c = *p` – lesen eines Zeichens
- `*p = 'A'` – überschreiben eines Zeichens

Beispiel:
```c++
char t[]="Wald";
char* p = t;
p++;
*p = 'i';
p++;
*p = 'n';
```

Durch `*p` wird der Zeiger dereferenziert, d.h. es wird das Array-Element angesprochen auf das der Zeiger zeigt.
