---
title: Schleifen
subtitle: Übung Tanne
tags: [assignment,C_1]
---

#### Übung (Tanne)

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

#### Übung (Tannenbaum schmücken)

Wir wollen den Baum mit Christbaumkugeln schmücken.  Dazu soll mit einer Wahrscheinlichkeit von 20% statt einem Sternchen ein kleines `o` ausgegeben werden. Die Wahrscheinlichkeit kann durch eine Zufallszahl zwischen 0 und 99 erzeugt werden. Ist die Zufallszahl kleiner als 20 so wird ein kleines o andernfalls ein Sternchen ausgegeben. Experimentiere mit unterschiedlichen Wahrscheinlichkeiten.

---

#### Übung (Farben)

Verwende unterschiedliche Farben für die "Kugeln". 

Um Farben ausgeben zu können schickt man dem Terminal eine sogenannte Escape Sequenz, das ist eine Folge von speziellen Zeichen das dieses als Befehl interpretiert.

Folgendes schaltet die Ausgabefarbe für alle weiteren Ausgaben auf Rot:

```c++
printf("\x1b[38;5;1m");
```

oder auf Violett:

```c++
printf ("\x1b[38;5;5m");
```

Die letzte Zahl bestimmt die Farbe. Es gibt 256 mögliche Farben siehe [→hier](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit).

`\x1b` ist das Escape Zeichen (als hexadezimale Zeichencode angegeben).

---
