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
- `x=15`
- `x=21`
- `x=17`
- `x=3/9`
- `x=3`

---


#### Übung (Zeit)

Schreibe ein Programm, das Minuten einliest und in Stunden und Minuten wieder ausgibt.

---

#### Übung (Gereade/Ungerade)

Schreibe ein Programm das von einer eingegeben `int` Zahl ausgibt ob es sich um eine gerade oder um eine ungerade Zahl handelt.

---



