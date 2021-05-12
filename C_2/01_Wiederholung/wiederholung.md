---
title: SEW – Wiederholung
tags: [lecture]
---



## Übersicht

```c
#include <conio.h>
#include <stdio.h>

void main()
{
  printf("Hallo Welt\n");
  getch();
}
```

- scanf/printf
- Variablen / Berechnungen
- if Bedingungen
- Schleifen (while/for)
- Funktionen (Parameter, Rückgabewerte)
- Arrays



## Aufgaben



#### Übung Schleife (Zahlenfolge)

Schreibe ein Programm, welches mittels einer Schleife folgende Zahlenfolge ausgibt: 

```
1, 1, 2, 4, 7, 11, 16, 22, 29, 37
```

Die Zahlen sollen hintereinander, durch Beistriche getrennt, in einer Zeile ausgegeben werden. Nach der letzten Zahl folgt kein Beistrich!

Implementiere 2 Lösungen einmal mit `while` und einmal mit `for`.

---



#### Übung Funktion (Summe ungerader Zahlen)

Schreibe eine Funktion `usum()` die eine untere und eine obere Grenze als Parameter übergeben bekommt (beide `int`). Die Funktion soll alle ungeraden Zahlen die sich zwischen den Grenzen befinden addieren und das Ergebnis zurückgeben. Sind die Grenzen ungerade Zahlen sind diese ebenfalls zu zählen.

---



#### Übung Array

Lege im Hauptprogramm ein Array aus 20 `int` Elementen mit zufälligen Werten an, für Zufallszahlen siehe folgendes Grundgerüst

```c
#include <stdlib.h>
#include <time.h>

void main()
{
  srand(time(NULL)); // einmal notwendig
  //...
  int zufall = rand()%30 - 15; // -15..14
}
```

An alle zu implementierenden Funktionen wird das Array als Parameter übergeben.

- Schreibe eine Funktion `output` die den Inhalt des Arrays ausgibt.
- Schreibe eine Funktion `sum_odd` die die Summe aller ungeraden Zahlen im Array als Rückgabewert hat.
- Schreibe eine Funktion `min` die den kleinsten Wert im Array sucht und zurückgibt.
- Schreibe eine Funktion `min_index` die die Indexposition des kleinsten Werts im Array sucht und zurückgibt.
- Schreibe eine Funktion `count_in_limits` die eine obere und untere Grenze als Parameter übergeben bekommt und ermittelt wie viele Arrayelemente es gibt deren Werte sich innerhalb dieser Grenze befinden.
