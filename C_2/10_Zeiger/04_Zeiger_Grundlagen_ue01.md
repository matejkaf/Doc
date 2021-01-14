---
title: Zeiger - allgemeine Grundlagen Übungen
type: assignment
cmds: ['md_html.bash --small']
tags: [c,pointer,intro]
---

**Übung (Adressen und Größen):**
Lege `char`, `short`, `long`, `int`, `float` und `double` Variablen an. Definiere zugehörige Zeigervariablen und weise diesen die Adressen der Variablen zu. 

- 
Gib die Werte der Zeigervariablen (=Adressen) hexadezimal aus: `printf("%p", p)`. 
- Ermittle mit dem `sizeof(<Variable>)` Operator die Größen aller Variablen **und** Zeigervariablen. D.h. wie viele Bytes diese Variable im Speicher belegt.

---

**Übung (Array im Speicher):**
Lege ein Array aus 5 `int` Elementen an. Gib die Startadresse des Arrays hexadezimal (`%p`) aus. Ermittle dann (am Papier) die hexadezimalen Adressen aller weiteren Array-Elemente. 

Überprüfe Dein Ergebnis schließlich mit Hilfe von Ausgaben im Programm – z.B. folgendermaßen: `printf("%p", &arr[2])`.

---


**Übung (Mock I – Pointer):**
```c
void main()
{
   int a[5] = { 1, 2, 3, 4, 5 };
   int *ptr = a + 4;
   printf("%d %d\n", *(a + 1), *(ptr - 1));
}
```
Was ist die Ausgabe?

---

**Übung (Mock II – Pointer):**

```c
void main()
{
	int a[]={1,1,1,1,1};
	int* p;
	p=a+2;
	p[1]=4;
}
```
Welche Veränderung wird vorgenommen?

---






