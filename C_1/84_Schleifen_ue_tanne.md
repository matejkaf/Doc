---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
---

# Schleifen (Übungen)




**Übung (Tanne):**

Entwickle ein Programm, das einen Tannenbaum aus Sternchen `*` ausgibt:

```
    *
   ***
  *****
 *******
*********
    *
```

Die Höhe wird zu Beginn des Programms eingegeben. 
Für das obige Beispiel wäre die Höhe 5. Nimm folgendes Programm als Basis:

```c
#include <stdio.h>
#include <conio.h>
void main()
{
	int hoehe;	// Höhe des Tannenbaums (Eingabe)
	int leerz;	// Anzahl der Leerzeichen in aktueller Zeile
	int sterne;	// Anzahl der Sterne in aktueller Zeile
	int i;
	int j;
	// ... Ergaenze ab hier ...
	getch();
}
```


**Überlege:**

- Wie viele Leerzeichen stehen vor dem einzelnen Stern in der ersten Zeile?
- Wie ändert sich die Anzahl der Leerzeichen in der nächsten Zeile?
- Wie ändert sich die Anzahl der Sterne?



**Anleitung:**
Verwende ineinander verschachtelte Schleifen.


- Mache die äußere Schleife (Laufvariable `i`), die so oft durchlaufen wird wie der Baum hoch ist.

- 
Gib in den inneren Schleifen (Laufvariable `j`) Leerzeichen und Sterne aus.

- 
Dann müssen die Variablen `leerz` und `sterne` verändert und ein einzelnes `\n` ausgegeben werden.

---

**Übung (Tannenbaum schmücken):**
Wir wollen den Baum mit Christbaumkugeln schmücken.  Dazu soll mit einer Wahrscheinlichkeit von 20% statt einem Sternchen ein kleines `o` ausgegeben werden. Die Wahrscheinlichkeit kann durch eine Zufallszahl zwischen 0 und 99 erzeugt werden. Ist die Zufallszahl kleiner als 20 so wird ein kleines o andernfalls ein Sternchen ausgegeben. Experimentiere mit unterschiedlichen Wahrscheinlichkeiten.

---


