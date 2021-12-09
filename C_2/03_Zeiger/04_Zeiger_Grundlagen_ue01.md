---
title: Zeiger - allgemeine Grundlagen 
subtitle: Übungen
tags: [assignment,c,pointer,intro,C_2]
---

#### Übung (Adressen und Größen)

Lege `char`, `short`, `long`, `int`, `float` und `double` Variablen an. Definiere zugehörige Zeigervariablen und weise diesen die Adressen der Variablen zu. 

-  Gib die Werte der Zeigervariablen (=Adressen) hexadezimal aus: `printf("%p", p)`. 
- Ermittle mit dem `sizeof(<Variable>)` Operator die Größen aller Variablen **und** Zeigervariablen. D.h. wie viele Bytes diese Variable im Speicher belegt.

Halte deine Erkenntnisse mittels Kommentare im Programm fest.

---

#### Übung (Array im Speicher)

Mit dieser Aufgabe wollen wir überprüfen ob die Annahme stimmt, dass alle Array Elemente unmittelbar hintereinander im Speicher liegen.

Lege ein Array aus 5 `int` Elementen an. Gib die Adresse des ersten und letzten Elements hexadezimal (`%p`) aus. Berechne (am Papier) die hexadezimalen Adressen aller weiteren Array-Elemente. Der Abstand zwischen 2 Elementen muss der Größe (Anzahl Bytes) eines `int` Werts eintsprechen. Im Zuge dieser Berechnung muss nach 4 Additionen die Adresse des letzten Elements herauskommen.

Ergänzung: Mache das gleiche mit Arrays aus `short` und aus `char`.

Halte deine Erkenntnisse mittels Kommentare im Programm fest.

---

#### Übung (Zeiger Arithmetik)

Experimentiere: wie ändert sich der Wert eines Zeigers wenn man zu diesem Zeiger einen Wert addiert? Z.B. `p++` oder `p+=2`.

Probiere unterschiedliche Datentypen der Zeigervariablen:

```c++
char* p;
short* q;
int* r;
```

Halte deine Erkenntnisse mittels Kommentare im Programm fest.

---


#### Übung (Mock I – Pointer)

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

#### Übung (Mock II – Pointer)

```c
void main()
{
	int a[]={1,1,1,1,1};
	int* p;
	p=a+2;
	p[1]=4;
}
```
Welche Veränderung wird im Array vorgenommen?

---





