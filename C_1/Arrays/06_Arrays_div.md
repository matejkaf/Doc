---
title: Arrays
subtitle: Diverses
tags: [lecture,arrays,1CHELS]
---



## Index Wertebereich

Auf den Wertebereich des Index achten.

```c
	int var[5];
	var[-4] = 345;   // Fehler !!!
	var[5]  = 123;   // Fehler !!!
```
Sehr häufiger Programmierfehler!



## Arraylänge als Parameter


Funktionen für Arrays sind flexibler anwendbar wenn auch die Array-Länge mit übergeben wird.

**Beispiel** – eine Funktion `sum` soll beliebig lange `int` Arrays addieren können.

**Lösung:**

```c
void main()
{
	int arr1[] = {1,2,3,4,5};
	int arr2[] = {3,5,7};
	int s1;
	int s2;
	s1 = summe(arr1, 5); // Länge 5
	s2 = summe(arr2, 3); // Länge 3
}

int summe(int a[], int len)
{
	int s=0;
	int i;
	for(i=0;i<len;i++)
		s = s + a[i];
	return s;
}
```
**Vorteil:** Die Funktion `summe` kann für alle `int` Arrays beliebiger Länge verwendet werden nicht nur für ein einziges Array.

