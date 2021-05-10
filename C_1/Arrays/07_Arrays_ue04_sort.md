---
title: Array
subtitle: Sortieren
tags: [assignment,arrays]
---



**Aufgabe:** Bei einem Radrennen soll über die erfassten Zeiten der Teilnehmer die Platzierungen ermittelt werden.

**Lösung:** Die Ergebnisse werden in **aufsteigender Reihenfolge sortiert**.

**Sortier-Algorithmen:** 
Es gibt sehr viele Verfahren, wir betrachten Sortieren durch Aufsteigen (**Bubble-Sort**). Dies ist das am einfachsten zu implementierende Sortierverfahren.

**Beispiel:**

Eingegebene Daten

| *Teiln.* | *Zeit* |
| -------- |        |
| 1 | 5.61 |
| 2 | 5.98 |
| 3 | 5.23 |
| 4 | 6.2 |
| 5 | 4.9 |


Sortiert:

| *Teiln.* | *Zeit* |
| -------- |        |
| 5 | 4.9 |
| 3 | 5.23 |
| 1 | 5.61 |
| 2 | 5.98 |
| 4 | 6.2 |




---

#### Übung (Vorübung – Paare ausgeben)

Lege in einem Programm folgendes Array an.

```c
int a[]={5,9,3,1,7,0};
```
Gib das Array Paarweise (beginnend von links) aus und zusätzlich
für jedes Paar ob es sich in richtiger (aufsteigend oder gleich) bzw.\ falscher (absteigend) Reihenfolge befindet.

```
5 9 richtig
9 3 falsch
3 1 falsch
1 7 richtig
7 0 falsch
```



---

#### Übung (Vorübung – Paare vertauschen)

Bubble Phase: Vertausche alle Paare die sich nicht in der richtigen Reihenfolge befinden.

```
___
5 9 3 1 7 0
___
5 9 3 1 7 0
    ___
5 3 9 1 7 0
      ___
5 3 1 9 7 0
        ___
5 3 1 7 9 0

5 3 1 7 0 9
```



---

#### Übung (Bubble-Sort am Papier)

Beim **Bubble-Sort Algorithmus** wird das paarweise prüfen und vertauschen (von ganz vorne beginnend) immer wieder wiederholt.
Beendet wird das sortieren dann wenn bei einem kompletten Durchlauf kein Vertauschen mehr notwendig war.

Führe den Algorithmus auf Papier für das Beispiel Array aus.

```
5 9 3 1 7 0
```



---

#### Übung (Bubble-Sort)

Implementiere eine Funktion die ein übergebenes Array in sortierte Reihenfolge bringt.
Hilfestellung/Grundgerüst:

```c
// n = länge des Arrays
void bubble_sort(int a[], int n)
{
	int sortiert=0;
	while( sortiert==0 )
	{
		sortiert=1;
		// Hier:
		// Schleife für die Bubble Phase
		// sortiert=0 falls dabei Vertauschen notwendig
	}
}
```



---

#### Übung (Radrennen – sortierte Ergebnisliste)

Gib die Radrennen Teilnehmernummern in der nach Zeit sortierten Reihenfolge aus.

*Hinweis:* Speichere die Startnummern in einem weiteren Array, führe alle Vertauschungen die sich beim Sortieren ergeben auch in diesem Array durch.

```c
double zeiten[] = {5.61, 5.98, 5.23, 6.2, 4.9};
int startnr[] = {1,2,3,4,5};
```