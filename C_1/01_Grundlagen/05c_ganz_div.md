---
title: Ganzzahlige Division
subtitle: C Grundlagen
tags: [lecture,C_1,1AHITS,1CHELS]
use_math: true
---


Was ist die Ausgabe dieses Programms?

```java
int a = 12;
int b = 5;
int c;
c = a/b;
printf("%d",c);
```

Ausgabe: 2 – Warum? –  `int` Variablen haben keine Kommastellen!

Was ist die (ganzzahlige) Division genau?

```c
12 / 5
```

gesucht sind ganze Zahlen $q$ (Quotient) und $r$ (Rest): 
$$
12=q \cdot 5 + r
$$




---

#### Übung (Ermittle q und r)

- 17 / 7
- 12 / 3
- 15 / 4
- 63 / 11

---



Im Programm:

- `/` ergibt q, ganzzahliges Ergebnis
- `%` ergibt r, Modulo, ganzzahliges Ergebnis

---

#### Übung (Modulo)

Was steht in der `int` Variable `x`.

- `x=15/6`
- `x=15%6`
- `x=21%7`
- `x=17%5`
- `x=3/9`
- `x=3%2`

---

#### Übung (Division)

Schreibe ein Programm das eine ganzzahlige Division mit Rest durchführt und das Ergebnis ausführlich ausgibt. Die Ausgabe soll genau so aussehen (zum Beispiel für die Werte 55 und 12):

```
Dividend: 55
Divisor:  12
55 : 12 = 4
     7R
Probe:
12*4 + 7 = 55
```

---

#### Übung (Zeit)

Schreibe ein Programm, das Minuten einliest und in Stunden und Minuten wieder ausgibt. z.B.: 120 Minutens sind 2 Stunden und 0 Minuten. 350 Minuten sind 5 Stunden und 50 Minuten.

---

#### Übung (Modulo ohne %)

Schreibe ein Programm das den Rest einer Division ermittelt ohne den `%` Operator zu verwenden.

---

