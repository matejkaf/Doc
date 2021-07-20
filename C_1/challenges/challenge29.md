---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Arrays


#### Übung (Stock span problem)

Gegeben ist ein Array aus Aktienkursen (jedes Element entspricht dem Kurs an einem Tag). Es soll ein zweites Array der gleichen Länge erstellt werden, dabei ist für jeden Tag gefragt an wie vielen Tagen vorher (durchgehend) der Aktienkurs kleiner oder gleich war. Dabei wird der betrachtete Tag mitgezählt.

Bsp. 100, 60,70,65, 80, 85 ⟶ 1, 1, 2, 1, 4, 5.

Die Spanne der ersten Tages ist immer 1.

---

#### Übung (Prozentrechnung II)

Es sollen von einer Folge positiver ganzer Zahlen deren Verhältnis zur größten in der Folge enthaltenen Zahl dargestellt werden.  Dabei ist diese größte Zahl 100%. Die Prozente der weiteren Zahlen sind zu berechnen (Kommazahlen!).

Beispiel: 0, 10, 5, 6, 3 ⟶ 0%, 100%, 50%, 60%, 30%

Erweiterung: Verändere das Programm so, dass es auch mit negativen Werten funktioniert, dabei soll der Abstand zwischen der kleinsten und der größten Zahl 100% entsprechen.

Beispiel: -4, 6, 1, 2, -1$ ⟶ 0%, 100%, 50%, 60%, 30%

---

#### Übung (Gleiche Zahlen in Reihe)

Schreibe eine Funktion die ermittelt wie viele gleiche Zahlen direkt hintereinander in einem `int` Array vorkommen. Der Rückgabewert soll die maximale Anzahl von gleichen Zahlen in Reihe sein.
Beispiel: Für 5, 5, 2, 2, 3, 5, 5, 5, 2 ⟶ 3 (da die Zahl 5 dreimal hintereinander vorkommt)

---

#### Übung (Häufigste Zahl)

Schreibe eine Funktion die ermittelt welche Zahl am häufigsten in einem Array vorkommt.

Beispiel: 3,7,5,7,3,1,3,5 ⟶ 3.

---

#### Übung (Unterschiedliche Zahlen sortiert)

Gegeben ist ein sortiertes Array, ermittle die Anzahl der unterschiedlichen Zahlen.

Beispiel: 0,0,2,2,2,2,5,5,7,8,8 ⟶ 5.

---

#### Übung (Unterschiedliche Zahlen unsortiert)

Schreibe eine Funktion die die Anzahl unterschiedlicher Zahlen in einem Array ermittelt.

Beispiel: 3,7,5,7,3,1,3,5 ⟶ 4.

---

#### Übung (Größter Abstand)

Schreibe eine Funktion die jenes Paar gleicher Zahlen im Array sucht, dass den größten Abstand voneinander hat.
Die Funktion soll den Abstand zurückgeben.

Beispiel: 3,7,5,7,3,1,3,5 ⟶ 6 (der Abstand der beiden 3er).

---

#### Übung (Genaues Vorkommen)

Schreibe eine Funktion die von einem Array ermittelt wie viele Zahlen darin genau 2-mal vorkommen.

Beispiel: 3,7,5,7,3,1,5,3 ⟶ 2 (die Zahlen 7 und 5).

Erweiterung: Die Anzahl der Vorkommen kann auch angegeben werden (z.B. 3-mal, 4-mal, etc.)

---

#### Übung (Größte Zahl)

Schreibe eine Funktion die in einem Array die zweitgrößte Zahl findet. 
Erweiterung: ermittle die n-größte Zahl.

---


#### Übung (Index auf Index I)

Auf Papier:
Welche Werte enthält das Array `a` nach dem Durchlauf folgenden Programms:

```c
int a[99];
for(i=0;i<99;i++)
	a[i]=98-i;
for(i=0;i<99;i++)
	a[i]=a[a[i]];
```

---

#### Übung (Index auf Index II)

Auf Papier:
Welche Werte enthalten die Arrays `a`, `b` und `c` nach dem Durchlauf folgenden Programms:

```c
int a[5];
int b[5];
int c[5];
int a[99];
for(i=0;i<5;i++)
	a[i]=20-i;
for(i=0;i<5;i++)
{
	if(i<4)
		a[i]=i+1;
	else
		a[i]=i-4;
}
for(i=0;i<5;i++)
	c[i]=a[b[i]];
```

---

#### Übung (Das d`Hondtsche Verfahren)

Dient zur Verteilung von Sitzen im Parlament (Mandate). Ausgangspunkt ist die Liste mit der Anzahl von Stimmen pro Partei und die Anzahl der zu vergebenden Mandate. Es wird immer ein Mandat vergeben und zwar an die Partei mit den meisten Stimmen in der Liste. Danach wird die Anzahl der erzielten Stimmen für diese Partei durch zwei geteilt. Es entsteht eine neue Liste die wieder nach dem Maximum durchsucht wird. Das wird solange wiederholt bis alle Mandate vergeben sind. Fällt das Maximum mehrfach auf die gleiche Partei so wird die Anzahl der Ausgangsstimmen für diese Partei weiters durch 3, dann durch 4, usw. geteilt.

Siehe [wikipedia: D’Hondt-Verfahren](https://de.wikipedia.org/wiki/D’Hondt-Verfahren)

Programmiere das d`Hondtsche Verfahren. Stimmenverteilung, Anzahl der Parteien und Mandate können fest im Programm vorgegeben werden. Teste mit obigen Werten.

```
//====================================================================
// Weiteres Beispiel -  Deutscher Bundestag 1983
// SPD 14865807 (192)
// CDU 14857680 (191)
// CSU 4140865 (53)
// FDP 2706942 (34)
// Die Grünen 2167431 (28)
// 5 Parteien
// int mandate=498;
// int stimmen[PARTEIEN]={14865807,14857680,4140865,2706942,2167431};
//====================================================================
```

---

#### Übung (Rotieren)

Lege in einem Programm ein Array aus 7 Zahlen an und setze auf beliebige Werte.

Schreibe und teste folgende Funktionen:

- `leftRotate` – schiebt alle Elemente im Array um eine Position nach links. 
Das erste Element fällt raus und soll an die letzte Stelle gesetzt werden.

Beispiel: 1,2,3,4,5,6,7 ⟶ 2,3,4,5,6,7,1

- `rightRotate` – schiebt alle Elemente im Array um eine Position nach rechts. 
Das letzte Element fällt raus und soll an die erste Stelle gesetzt werden.

Beispiel: 1,2,3,4,5,6,7 ⟶ 7,1,2,3,4,5,6

---

