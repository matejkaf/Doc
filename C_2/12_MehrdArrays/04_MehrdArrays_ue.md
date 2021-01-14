---
title: Mehrdimensionale Arrays (Übungen)
type: assignment
cmds: ['md_html.bash --small']
tags: [c]
---

**Diagonalen:**

In einem 2D Array gibt es 2 Richtungen von Diagonalen


- **Hauptrichtung**: von links/oben nach rechts/unten, und
- **Nebenrichtung**: von links/unten nach rechts/oben.

Die sogenannte **Hauptdiagonale** beginnt beim Element ganz links/oben (Zeile 0, Spalte 0) und besteht aus allen Elementen deren Zeilen- und Spaltenindex gleich sind (`a[0][0]`, `a[1][1]`, `a[2][2]`, ...).

Gibt es weniger Zeilen als Spalten so endet die Hauptdiagonale in der letzten – untersten – Zeile.

```
X o o o o o
o X o o o o
o o X o o o
o o o X o o <<<
```



Gibt es jedoch mehr Zeilen als Spalten so endet die Hauptdiagonale in der letzten – rechtesten – Spalte.


```
X o o o
o X o o
o o X o
o o o X
o o o o
      ^
```



Auch die Diagonalen parallel zur Hauptdiagonalen kann man betrachten – Beispiele:


```
o X o o o o       o o o X o o       o o o o o o
o o X o o o       o o o o X o       o o o o o o
o o o X o o       o o o o o X       X o o o o o
o o o o X o       o o o o o o       o X o o o o
```




Ebenso kann man alle Diagonalen in der Nebenrichtung betrachten – Beispiele:


```
o o o X o o       o o o o o o       o X o o o o
o o X o o o       o o o o o X       X o o o o o
o X o o o o       o o o o X o       o o o o o o
X o o o o o       o o o X o o       o o o o o o
```

Bei Diagonalen ist immer zu beachten, dass sie an unterschiedlichen **Rändern** beginnen bzw. enden können.
Eine Diagonale in Nebenrichtung beginnt entweder in der ganz linken Spalte oder in der untersten Zeile und sie endet entweder in der ganz rechten Spalte oder in der obersten Zeile. Das Ende ist abhängig vom Startpunkt und vom Seitenverhältnis des 2D Arrays.
Im Programm kann man das folgendermaßen berücksichtigen:

```c
const int ZEILEN=5;
const int SPALTEN=3;

void main()
{
	int arr[ZEILEN][SPALTEN];
	
	// Nebendiagonale ausgeben

	// Startpunk wählen
	int z=3;
	int s=0;
	while(z>=0 && s<SPALTEN) // bis Endpunkt erreicht
	{
		printf("%d ", arr[z][s] );
		z--;
		s++;
	}
}
```

Alternativ ist eine Diagonale auch durch einen beliebigen Punkt und ihrer Richtung definiert.
Beispiel: Diagonale in Hauptrichtung durch den Punkt `z=2; s=4;`:

```
o o X o o o
o o o X o o
o o o o * o
o o o o o X
```

 

---

**Übung (Diagonalen):**

Schreibe Funktionen für:
- Summe der Hauptdiagonale.
- Summe beginnend beim Element ganz links/unten plus alle Elemente in Nebenrichtung (schräg nach rechts/oben)
- Summe einer Diagonalen in Hauptrichtung. Die Diagonale wird durch ein Element bestimmt dessen Zeilen- und Spaltenindex als Parameter vorgegeben wird.
- Summe einer Diagonalen in Hauptrichtung. Die Diagonale wird durch ein Element bestimmt dessen Zeilen- und Spaltenindex als Parameter vorgegeben wird.



---

