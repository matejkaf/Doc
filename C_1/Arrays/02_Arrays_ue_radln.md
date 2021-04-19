---
title: Arrays
subtitle: Übung Radrennen
tags: [assignment,arrays,1CHELS,1AHITS]
---

#### Übung (Radrennen)

Bei einem Zeitfahren erreicht jeder Teilnehmer eines Radrennens eine bestimmte Zeit in Minuten (die Sekunden werden als Kommawert gespeichert). 1,5​ = 1 Minute und 30 Sekunden.

**Aufgabenstellung:**

- Lege ein `double` Array mit 7 Zeiten an, die eingegeben werden können.
- Gib alle Zeiten mit Teilnehmernummer aus.

**Beispiel:**

```
Teiln.   Zeit
    1    5.61
    2    5.98
    3    5.23
     ...
    7    6.2
```


- Gib alles in umgekehrter Reihenfolge aus.

- Ermittle die Durchschnittszeit,
	
	- einmal ohne Schleife, und
	- einmal mit Schleife (für die Summenbildung).	
	
- Ermittle die Zeit des Siegers.

- Ermittle die Nummer des Siegers.




---

#### Übung (Radrennen Erweiterung)

Die Zeit soll auf 2 Arten ausgegeben werden: 

- Als Kommazahl (wie bereits vorhanden)
- zusätzlich in Minuten und Sekunden

**Beispiel:**

```
Teiln.  Zeit  Zeit
1       5.61  5m37s
2       5.98  5m59s
3       5.23  5m14s
...
7       6.2  6m12s
```



Hinweis: Folgendes Programm zeigt wie von einer Kommazahl die **Nachkommastellen** abgeschnitten werden können.

```c
double x=3.14;
double ganz=(int)x;
printf("%lf\n",ganz);
```

Erklärung: Es wird ein sogenannter **Typ-Cast** verwendet (d.h. die Umwandlung eines Datentyps in einen anderen). `(int)x` wandelt den `double` Wert der Variable `x` in einen `int` Wert – dabei gehen die Nachkommastellen verloren. Der sich ergebende `int` Wert wird weiters auf die `double` Variable `ganz` zugewiesen. Hier findet ein automatischer Typ-Cast (von `int` auf `double`) statt.