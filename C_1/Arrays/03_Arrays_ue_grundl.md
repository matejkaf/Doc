---
title: Arrays
subtitle: Übungen Grundlagen
tags: [assignment,arrays,1CHELS,1AHITS]
---

#### Übung (Zahlenfolgen)

Schreibe ein Programm das mit Hilfe je einer Schleife alle Elemente eines Arrays (`int a[30]`) mit folgenden Werten füllt:

- 1, 2, 3, 4, ..., 29, 30
- 30, 29, 28, ..., 2, 1
- 1, 3, 5, 7, ..., 57, 59
- 0, 1, 3, 6, 10, 15, 21, ..., 406, 435

Die Werte sollen genau in dieser Reihenfolge im Array stehen. Die Ausgabe des Arrays dient zur Kontrolle.

Hinweis: Um Fehler zu vermeiden ist es wichtig, dass die **Ausgabe in einer eigenen Schleife** geschieht.

Verwende folgenden Code als Basis:

```c
int a[30];
int b[30];
int c[30];
int d[30];


////////////////////////////////////////////
// Beispiel (a)
////////////////////////////////////////////
for(...)
{
  // 1, 2, 3, 4, ..., 29, 30 ins Array a schreiben
}
for(int i=0; i<30; i++)
{
  // Ausgabe für Beispiel (a)
  printf("%d, ", a[i]);
}
printf("\n\n");


////////////////////////////////////////////
// Beispiel (b)
////////////////////////////////////////////

// 30, 29, 28, ..., 2, 1 ins Array b schreiben

for(int i=0; i<30; i++)
{
  // Ausgabe für Beispiel (b)
  printf("%d, ", b[i]);
}
printf("\n\n");


////////////////////////////////////////////
// Beispiel (c)
////////////////////////////////////////////

// 1, 3, 5, 7, ...  ins Array c schreiben

for(int i=0; i<30; i++)
{
  // Ausgabe für Beispiel (c)
  printf("%d, ", c[i]);
}
printf("\n\n");


////////////////////////////////////////////
// Beispiel (d)
////////////////////////////////////////////

// 0, 1, 3, 6, 10, 15, 21, ... ins Array d schreiben

for(int i=0; i<30; i++)
{
  // Ausgabe für Beispiel (d)
  printf("%d, ", d[i]);
}
printf("\n\n");
```
