---
title: Programmieren Anfang
subtitle: C Grundlagen
tags: [lecture,C_1,1AHITS,1CHELS]
use_math: true
---

Programmieren von Computern (Programmiersprache C)

Programmierkenntnisse sind eine wichtige Voraussetzung für einen Job in der IT Branche.
IT = Informations Technologie




# Programm


Liste von Anweisungen, z.B. für:


- Eingabe – von der Tastatur
- Ausgabe – am Bildschirm
- Berechnungen (+, -, ...)
- Wenn/Dann Befehle
- Wiederholungen



**"Programmieren"**

- Quelltext in einem Editor erstellen.
- Quelltext mittels Compiler in ein Programm übersetzen (compilieren).
- Programm starten und testen.


Alles zusammen in **MS Visual Studio** enthalten.



## Das erste Programm


"Hello World" am Bildschirm ausgeben.
```c++
#include <stdio.h>
#include <conio.h>

void main()
{
	printf("Hello World\n");
	getch();
}
```




# Variable

Benannter Speicherplatz für einen Wert. "Gedächtnis" des Programms.

Eine Variable anlegen (definieren).

```c
int wert;
```

Name: Nur Buchstaben und Zahlen – Zahl darf nicht ganz vorne sein, keine Umlaute oder Leerzeichen. 

`int` – Datentyp --- für ganze Zahlen.


Eine Variable hat unbestimmten Anfangswert.



**Zuweisungen**

Um Werte in Variablen zu speichern.

```java
int wert;
wert = 5;
```



**Berechnungen**

`+` `-` `*` `/` und Klammern `(` `)`

Ergebnisse können in Variablen gespeichert werden.

```c
int a;
int b=2;
a = b * 3;
```

In `a` wird der Wert gespeichert (**nicht** die Formel).
Links vom Gleichheitszeichen: nur Variable.



#### Übung (Schreibe als Ausdruck)

$$
\frac{(x+y)\cdot 2-5}{3-x}
$$


$$
\frac{1}{x-y}-\frac{x+5}{2\cdot (x-5)}
$$

---


#### Übung (Schreibe als Formel)

- `z=((x+y)*2-5)/3;`
- `4-(a/(c-3));`

---



# Ausgaben


Mit `printf`.

```c
printf("Text");
```

Wert einer Variablen ausgeben:

```c
int wert;
wert = 2;
printf("%d",wert);
```

Kann mit Text gemischt werden.

```c
printf("Noch %d Minuten bis zur Pause\n",min);
```

Weiters:

```c++
int x=3;
int d=2*x;
printf("das Doppelte von %d ist %d\n", x, d );
```




# Eingabe


Mit `scanf`.

```c
int a;
scanf("%d",&a);
```

Zur Benutzerführung:

```c
int laenge;
printf("Laenge eingeben: ");
scanf("%d",&laenge);
```

---

#### Übung (Addieren)

Schreibe ein Programm (mit Benutzerführung) bei dem zwei Zahlen eingegeben und addiert werden.
Ablauf:

```
Zahl 1: 5
Zahl 2: 3
5 + 3 = 8
```

---




# Kommazahlen


Kommazahlen werden mit dem Datentyp `double` definiert.

```c
double pi=3.14; // Punkt = Komma
```

Für `printf` und `scanf`:  `%lf`

---

#### Übung (Währungsrechner)

Schreibe ein Programm, das **amerikanische Dollar in Euro** umrechnen kann. Mit Ein- und Ausgabe.

1 € = 1,17 $

Bsp.: 765 $ sind 653,85 €

---



# Übungsblatt 1

[Übungsblatt 1](04_Anfang_ue01)

