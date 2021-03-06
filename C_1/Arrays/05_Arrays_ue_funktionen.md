---
title: Doc
tags: [assignment, arrays]
---

# Arrays – Funktionen (Übungen)

**Übung (Basics):**

Es ist ein Array aus 5 `int` Elementen anzulegen.
Schreibe und teste die Funktionen:

- `void input(int a[])` **Eingabe** des Arrays
- `void output(int a[])` **Ausgabe** des Arrays 

Schreibe zur Lösung jeder der folgenden Aufgaben eine Funktion. In diesen Funktionen **darf keine Ein- oder Ausgabe** stattfinden.

- `int sum(int a[])` Die **Summe** über alle Elemente des Arrays bilden
- `double average(int a[])` Den **Mittelwert** bilden (Kommazahl!) Hinweis: verwende die Funktion `sum`.
- `int minimum(int a[])` Den **kleinsten** Wert (Minimum) suchen. 
- `int maxidx(int a[])` Den **Index** des maximalen Werts ermitteln
- `int mul(int a[])` Alle Array Elemente miteinander **multiplizieren**
- `int findFirst(int a[],int x)` Einen **Wert suchen** und den Array-Index wo dieser Wert zum **ersten mal** vorkommt ermitteln (bzw.`-1` wenn nicht gefunden)
- `int findLast(int a[],int x)` Einen **Wert suchen** und den Array-Index wo dieser Wert zum **letzten mal** vorkommt ermitteln (bzw. `-1` wenn nicht gefunden)




---
**Übung (Einige Zahlenfolgen):**

Schreibe ein Programm das mit Hilfe einer Schleife alle Elemente eines Arrays (`int a[30]`) mit vorgegebenen Werten füllt und dann das Array ausgibt. Implementiere für jede Zahlenfolge eine eigene Funktion (`folgea` – `folged`). **Einschränkung:** Es darf innerhalb der Funktionen nur **eine einzige** lokale Variable (als Schleifen-Laufvariable) definiert werden! 

- `1, 2, 3, 4, ..., 29, 30`
- `30, 29, 28, ..., 2, 1`
- `1, -1, 1, -1, 1, ..., 1, -1`
- `-29, 28, -27, ..., 2, -1, 0`

**GANZ WICHTIG:** Ausgaben sind **in den Funktionen `folgea`  bis `folged` nicht erlaubt**, definiere dafür eine eigene Funktion `output`:

```c
int a[30];

folgea(a); // (a)
output(a);

folgeb(a); // (b)
output(a);

...
```



---

**Übung (Einige Zahlenfolgen):**

Schreibe ein Programm das mit Hilfe einer Schleife alle Elemente eines Arrays (`int a[30]`) mit vorgegebenen Werten füllt und dann das Array ausgibt. Implementiere für jede Zahlenfolge eine eigene Funktion (`folgec` bis `folgef`). **Einschränkung:** Es darf innerhalb der Funktionen nur **eine einzige** lokale Variable (als Schleifen-Laufvariable) definiert werden! 

Es ist aber erlaubt das erste Element vor der Schleife auf einen Wert zu setzen. Beispiel:

```c
void folgee(int a[])
{
	int i; // einzig erlaubte Variable !
	a[0] = ...; 
  // Hinweis: mit a[i-1] kann auf das Vorgängerelement zugegriffen werden
}
```

Folge e bis f:

- `1, 2, 4, 8, 16, 32, ..., 536870912`
- `1, 2, 4, 7, 11, 16, ...`



---

**Übung (Einige Zahlenfolgen):**

Schreibe ein Programm das mit Hilfe einer Schleife alle Elemente eines Arrays (`int a[30]`) mit vorgegebenen Werten füllt und dann das Array ausgibt. Implementiere für jede Zahlenfolge eine eigene Funktion (`folgec` bis `folgef`). **Einschränkung:** Es darf innerhalb der Funktionen nur **eine einzige** lokale Variable (als Schleifen-Laufvariable) definiert werden! 

Es ist aber erlaubt das erste Element oder die ersten zwei Elemente vor der Schleife auf einen Wert zu setzen. Beispiel:

```c
void folgeg(int a[])
{
	int i; // einzig erlaubte Variable !
	a[0] = ...;
	a[1] = ...;
	...
}
```

Folge g:

- `0, 1, 1, 2, 3, 5, 8, 13, 21, ...`


---


