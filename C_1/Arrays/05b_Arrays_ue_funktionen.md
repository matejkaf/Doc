---
title: Arrays
subtitle: Übungen Funktionen – Zahlenfolgen
tags: [assignment, arrays,1CHELS,1AHITS]
---

Verwende für folgende Übungen **globale benannte Konstanten** für die Array Länge (30) – wenn du diese schon kennst.



---

#### Übung (Zahlenfolgen a–d)

Schreibe ein Programm das mit Hilfe einer Schleife alle Elemente eines Arrays (`int a[30]`) mit vorgegebenen Werten füllt und dann das Array ausgibt. Implementiere für jede Zahlenfolge eine eigene Funktion (`folgea` – `folged`). **Einschränkung:** Es darf innerhalb der Funktionen nur **eine einzige** lokale Variable (als Schleifen-Laufvariable) definiert werden! 

- (a) `1, 2, 3, 4, ..., 29, 30`
- (b) `30, 29, 28, ..., 2, 1`
- (c) `1, -1, 1, -1, 1, ..., 1, -1`
- (d) `-29, 28, -27, ..., 2, -1, 0`

**GANZ WICHTIG:** Ausgaben sind **in den Funktionen `folgea`  bis `folged` nicht erlaubt**, definiere dafür eine eigene Funktion `output`:

```c
int a[30];

folgea(a); // (a)
output(a);

folgeb(a); // (b)
output(a);

...
```



---

#### Übung (Zahlenfolgen e–f)

Wie vorher – es ist aber **erlaubt das erste Element** vor der Schleife auf einen Wert zu setzen. Beispiel:

```c
void folgee(int a[])
{
  int i; // einzig erlaubte Variable !
  a[0] = ...; 
  // Hinweis: mit a[i-1] kann auf das Vorgängerelement zugegriffen werden
}
```

Folge e bis f:

- (e) `1, 2, 4, 8, 16, 32, ..., 536870912`
- (f) `1, 2, 4, 7, 11, 16, ...`



---

#### Übung (Zahlenfolge g)

Wie vorher – es ist aber **erlaubt die ersten zwei Elemente** vor der Schleife auf einen Wert zu setzen. Beispiel:

```c
void folgeg(int a[])
{
  int i; // einzig erlaubte Variable !
  a[0] = ...;
  a[1] = ...;
  ...
}
```

Folge g:

- (g) `0, 1, 1, 2, 3, 5, 8, 13, 21, ...`
  Jede Zahl ist die Summe der zwei vorherigen.

