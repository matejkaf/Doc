---
title: Mehrdimensionale Arrays
subtitle: Übung Lichtreflexion
tags: [assignment,c,C_2]
---

#### Übung (Licht Reflexion)

Schreibe ein Programm das die Reflexion eines schrägen Lichtstrahls verfolgt.
Der Lichtstrahl beginnt an einem eingebbaren Spalten-Index in der obersten Zeile und geht schräg nach rechts unten. An jeder Grenze wird der Strahl im Winkel von 45 Grad reflektiert. Landet der Lichtstrahl genau in einer Ecke, nimmt dieser den gleichen Weg wieder zurück.


```c
char field[15][20+1] = //+1 wegen \0
{
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
	"....................",
}
```

Schreibe ein Programm das den Weg des Lichtstrahls mit Hilfe von Buchstaben (beginnend bei `'a'`) darstellt:

```
c.........a.........
.c.........a........
..c.........a.......
...c.........a......
....c.........a.....
.....c.........a....
......c.........a...
.......c.........a..
........c.........a.
.........c.........a
..........c.......b.
...........c.....b..
............c...b...
.............c.b....
..............b.....
```

Bei jeder Reflexion geht es im Alphabet um eins weiter.

Die Verfolgung des Lichtstrahls wird in der obersten Zeile wieder gestoppt.



---

#### Übung (Licht Reflexion II)

Erweitere so, dass die Anzahl der Reflexionen einstellbar ist.



---

#### Übung (Licht Reflexion III)

Experimentiere mit größeren Arrays (einstellbar über globale Konstanten).