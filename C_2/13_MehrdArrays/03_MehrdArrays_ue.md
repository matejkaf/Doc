---
title: Mehrdimensionale Arrays
subtitle: Übungen Summen
tags: [assignment,c]
---

#### Übung (Zeilensumme in Array):

Schreibe eine Funktion die alle Zeilensummen berechnet und diese in ein Array schreibt.
Es ist in der Funktion keine Ausgabe erlaubt, diese muss im Hauptprogramm stattfinden.

```c
#define ZEILEN 3
#define SPALTEN 4
//...
int a[ZEILEN][SPALTEN]=
{
	{1,2,3,4},
	{2,4,6,8},
	{1,3,5,7}
};
int sum_z[ZEILEN];	// Zeilensummen 
```


---

#### Übung (Spaltensumme in Array):

Wie Übung vorher aber Funktion für die Spaltensummen.