---
title: Doc
tags: [assignment, arrays]
---



**Übung (Zahlenfolgen):**
Schreibe ein Programm das mit Hilfe je einer Schleife alle Elemente eines Arrays (`int a[30]`) mit folgenden Werten füllt:

- 1, 2, 3, 4, ..., 29, 30
- 30, 29, 28, ..., 2, 1
- 1, 3, 5, 7, ...
- 0, 1, 3, 6, 10, 15, 21, ...

Die Werte sollen genau in dieser Reihenfolge im Array stehen.
Die Ausgabe des Arrays dient zur Kontrolle.


Hinweis: Um Fehler zu vermeiden ist es wichtig, dass die **Ausgabe in einer eigenen Schleife** geschieht.
```c
int a[30];
for(int i=0; ...)
{
	// Beispiel (a)
	// Schleife für Array Initialisierung
}
for(int i=0; ...)
{
	// Ausgabe für Beispiel (a)
	printf("%d, ", a[i]);
}
// Hier weiter mit Beispiel (b), usw.
// ...
```



---

**Übung (Verschiedene Ausgaben):**

Gegeben ist das Array: `int a[]={5,2,9,4,1,7,0,8,3,6}`.
 Implementiere folgende Ausgaben:

- Immer nur jedes zweite Array-Element ausgeben. D.h. alle Zahlen an ungeraden Indizes.
- Nur die geraden Zahlen im Array ausgeben.
- Für jedes Element die Differenz zum ersten Array-Element ausgeben.
- Für jedes Element die Differenz zum letzten Array-Element ausgeben.
- Immer die Differenz zum Vorgänger ausgeben.
- Immer die Differenz zum Nachfolger ausgeben.



---

**Übung (Rotieren):**

Lege in einem Programm ein Array aus 7 Zahlen an und setze auf beliebige Werte.
Programmiere mit Hilfe je einer Schleife:

- Links Rotieren – schiebt alle Elemente im Array um eine Position nach links. 
Das erste Element fällt raus und soll an die letzte Stelle gesetzt werden.\\
Beispiel: `1,2,3,4,5,6,7` ⟶ `2,3,4,5,6,7,1` 

- Rechts Rotieren – schiebt alle Elemente im Array um eine Position nach rechts. 
Das letzte Element fällt raus und soll an die erste Stelle gesetzt werden.\\
Beispiel: `1,2,3,4,5,6,7` ⟶ `7,1,2,3,4,5,6`

---
**Übung (Nur einmal):**
Gib ein Array aus Zahlen so aus, dass jede Zahl in der Ausgabe nur einmal vorkommt.

Beispiel: `int a[]={3,2,3,5,1,2,3,5,7}`

Ausgabe: `3,2,5,1,7`

---



