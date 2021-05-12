---
title: Dynamische Speicherverwaltung
subtitle: Übungen
tags: [assignment]
---

#### Übung (Stackgröße ermitteln)

Schreibe ein Programm mit dem die ungefähre Größe des Stacks ermittelt werden kann.
Anleitung: Mache eine Funktion die als lokale Variable ein `char` Array mit 1024 Elementen (=1 kByte) anlegt. Diese Funktion hat einen Parameter – die Aufruftiefe – gib diese in der Funktion aus und rufe dann die Funktion in der Funktion wieder auf (= Rekursion) – übergib dabei die Aufruftiefe plus eins.



---

#### Übung (Speicherbedarf von Strukturen)

Ermittle mittels `sizeof()` die Größe der folgenden Strukturen:

```c
typedef struct {
	int a;
	char b;
	char c;
} Test1;
```



```c
typedef struct {
	char b;
	int a;
	char c;
} Test2;
```



```c
typedef struct {
	int a;
	char b;
	char c;
	char d;
	char e;
} Test3;
```

Welche Schlussfolgerungen ziehst Du aus dem Ergebnis?
