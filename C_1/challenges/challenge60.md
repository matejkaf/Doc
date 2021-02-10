---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Zeiger


**Übung (Prüfe auf sortiert):**

Lege ein Array aus `int` an, z.B.\ \lstinline$int a[]={3,4,6,9,1}$ und schreibe ein Programm das prüft ob dieses Array aufsteigend sortiert ist. Verwende ausschließlich Zeiger.

---


**Übung (Zwei Arrays verschmelzen):**

Schreibe eine Funktion `merge()` die als Parameter 3 Arrays (`a1`, `a2`, `a3`) übergeben bekommt. 
Alle Elemente von `a1` und `a2` sollen so nach `a3` kopiert werden, dass `a3` ebenfalls aufsteigend sortiert ist.

```c
int a1[]={1,3,5,7,9};
int a2[]={2,4,6,8};
int a3[9];
```

---


**Übung (Increment und Decrement):**

Der `++` Operator hat 2 Auswirkungen. Zum einen wird der Wert einer Variable verändert.
```c
int x=1;
x++;
// x ist nun um eins mehr
```
Zum anderen kann das Ergebnis direkt in einem Ausdruck weiterverwendet werden:
```c
int x=1;
int y;
y = 4 + x++;
// was steht jetzt in y? Ausprobieren!
```
Dabei gibt es 2 Möglichkeiten für die Berechnung: (1) den alten x Wert verwenden (`x++`) oder (2) den neuen Wert (`++x`).

Experimentiere mit beiden Varianten (`x++` / `++x`) des Increment Operators.

Selbes gilt auch für den `--` Operator.

---






**Übung (Zeigerkonstrukte):**

Finde heraus was folgende Konstrukte machen.
*Hinweis:*
`++` hat in der Operatorenreihenfolge ein höhere Priorität als `*`.



-[] `*p++`
-[] `(*p)++`
-[] `*++p`
-[] `*(++p)`
-[] `++*p`
-[] `++(*p)`

---



**Übung (Substring Suche):**

Implementiere folgende String Funktion unter ausschließlicher Verwendung von Zeigern.

\lstinline +char* pStrstr(char* s1, char* s2)+ – Sucht den String `s2` in `s1` (z.B.: Suchen eines Worts in einem Satz). Rückgabewert $-1$ wenn nicht gefunden, ansonsten Zeiger auf das erste übereinstimmende Zeichen in `s1`.

---
