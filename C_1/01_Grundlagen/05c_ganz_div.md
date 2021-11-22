---
title: Ganzzahlige Division
subtitle: C Grundlagen
tags: [lecture,C_1,1AHITS,1CHELS]
use_math: true
---


Was ist die Ausgabe dieses Programms?

```java
int a = 13;
int b = 5;
int c;
c = a/b;
printf("%d",c);
```

Ausgabe: 2 – Warum? –  `int` Variablen haben keine Kommastellen!

Was ist die (ganzzahlige) Division genau?

```c
13 / 5
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

#### Übung (Dezimal nach Binär wandeln)

Schreibe ein Programm das die Eingabe einer ganzen Zahl von 0..255 ermöglicht. Das Programm soll diese Zahl im Binärformat ausgeben.

---

#### Übung (Zeit)

Schreibe ein Programm, das Minuten einliest und in Stunden und Minuten wieder ausgibt. z.B.: 120 Minutens sind 2 Stunden und 0 Minuten. 350 Minuten sind 5 Stunden und 50 Minuten.

---

#### Übung (Modulo ohne %)

Schreibe ein Programm das den Rest einer Division ermittelt ohne den `%` Operator zu verwenden.

---

#### Übung (Datum formatieren)

Schreibe ein Programm, welches die 3 Werte eines Datums (Tag, Monat, Jahr) einliest und im Format TT.MM.JJ wieder ausgibt (Bsp.: 03.07.98). 
Das Jahr soll als komplette Jahreszahl (4-stellig) eingegeben aber 2-stellig wieder ausgegeben werden (Bsp.: 2009 → 09).

---

