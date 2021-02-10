---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Arrays – Balkendiagramme

**Übung (Balkendiagramm):**

Schreibe ein Programm mit dem horizontale Balkendiagramme ausgegeben werden können.
Die Länge der Balken sind in einem Array vorgegeben:


```c
#define ANZ 4
void zeigeBalken(int balken[], int n);
void main()
{
	int balken[]={7,2,6,4};
	zeigeBalken(balken, ANZ);
...
```

Ausgabe:

```
7: *******
2: **
6: ******
4: ****
```

Implementiere `zeigeBalken()`.

---

**Übung (Vertikales Balkendiagramm):**
Schreibe ein Programm, das wie in der letzten Übung ein Balkendiagramm zeichnet, nur sollen jetzt die Balken vertikal sein.

```
*
*       *
*       *
*       *   *
*       *   *
*   *   *   *
*   *   *   *
7   2   6   4
```

---





