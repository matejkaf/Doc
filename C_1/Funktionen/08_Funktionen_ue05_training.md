---
title: Funktionen
subtitle: Weitere Übungen
tags: [assignment, c, funktionen ]
---



#### **Übung (Differenz):**

Schreibe eine Funktion `diff()`, die die Differenz zweier übergebenen `int`-Werte zurückgibt.
Beachte: Die Differenz ist immer größer (oder gleich) Null.

Beispiel:
`diff(3,5) = diff(5,3) = 2`

---

#### **Übung (Maximum):**

Schreibe eine Funktion `max()`, welcher 2 int-Werte übergeben werden und welche den größeren der beiden Werte zurückliefert.

---

#### **Übung (Celsius nach Fahrenheit):**

Schreibe eine Funktionen zur Umrechnung von Celsius nach Fahrenheit.

---

#### **Übung (Reihe):**

Schreibe eine Funktion `nsum()` zur Ermittlung der Summe der ersten n natürlichen Zahlen (1...n), n ist der Übergabeparameter.

---

#### **Übung (Summe ungerader Zahlen):**

Schreibe eine Funktion `usum()` die eine untere und eine obere Grenze als Parameter übergeben bekommt (beide `int`). Die Funktion soll alle ungeraden Zahlen die sich zwischen den Grenzen befinden addieren und das Ergebnis zurückgeben. Sind die Grenzen ungerade Zahlen sind diese ebenfalls zu zählen.

---

#### **Übung (Anzahl der Bits):**

Von einer ganzen Zahl ist festzustellen wie viele Bits diese braucht.

Bsp. 3 braucht 2 Bits, 4 benötigt 3 Bits und für 17 wären 5 Bits notwendig.

Diese Aufgabenstellung kann dadurch gelöst werden, dass man die Zahl so lange durch 2 dividiert bis 0 herauskommt, dabei zählt man mit wie oft diese Division durch 2 notwendig war – dies ist die Anzahl der Bits.

Bsp.: Zahl=4: `4/2=2/2=1/2=0` ... es werden 3 Bits benötigt (es waren drei Divisionen notwendig).

Schreibe eine Funktion die von einem als Parameter übergebenen `int` Wert die Anzahl der Bits ermittelt und zurückgibt.

---

#### **Übung (Quersumme):**

Bei der Quersumme handelt es sich um die Summe der einzelnen Ziffern einer mehrstelligen Zahl. Beispiel: Die Quersumme von 251 ist 8, da `2 + 5 + 1 = 8`.

---

#### **Übung (Primzahlen):**

Eine Primzahl ist eine ganze positive Zahl größer 0 die nur durch 1 oder sich selbst ohne Rest geteilt werden kann. Ein gegebene Zahl kann auf Prim-Eigenschaft getestet werden indem geprüft wird ob es irgendeine Zahl zwischen 1 und der Zahl selbst gibt die die Zahl teilt.  Gibt es keine Teiler-Zahl so handelt es sich um eine Primzahl. Gibt es allerdings auch nur eine solche Teiler-Zahl so ist die Ausgangszahl keine Primzahl. 

Beispiel: Um festzustellen, dass 7 eine Primzahl ist probiert man alle Zahlen von 2 bis 6 durch ob eine dieser Zahlen ein Teiler von 7 ist. Da kein Teiler gefunden werden kann ist 7 eine Primzahl. Wird die Zahl 9 auf Prim-Eigenschaft getestet so werden die Zahlen 2 bis 8 geprüft, allerdings stellt man bei 3 schon fest dass dies ein Teiler von 9 ist und kann aufhören (9 ist daher keine Primzahl).

Hinweis: Eine Zahl `a` ist dann durch eine Zahl `b` teilbar wenn der Rest der Division 0 ergibt d.h. `a%b==0`

Aufgabenstellungen:

- Schreibe eine Funktion die von einer übergebenen `int` Zahl prüft ob diese eine Primzahl ist. Rückgabe ist `int`, 1 ... Primzahl, 0 ... keine Primzahl. 719, 2383, 9059, 9973 sind Beispiele für Primzahlen.
- Schreibe eine Funktion die eine Obergrenze als Parameter übergeben bekommt.
Die Funktion soll alle Primzahlen von 2 bis zur Obergrenze (inklusive) zählen und die Anzahl als return Wert zurückgeben. Hinweis: Die Anzahl der Primzahlen bis 10000 ist 1229.

---

#### **Übung (Zweier-Logarithmus):**

Schreibe eine Funktion `log()` die einen `int`-Wert übergeben bekommt und die ermittelt wie oft 2 mit 2 multipliziert werden muss damit das Endergebnis größer gleich dem Übergabewert wird.  Rückgabewert ist die Anzahl der zu multiplizierenden Zweier.

Beispiele: `log(17) = 5`, `log(16) = 4`

---

#### **Übung (Quadratzahl):**

Jede Quadratzahl  n²  ist immer eine Summe von ungeraden Zahlen (Bsp.: 4²=16=1+3+5+7).

Schreibe eine Funktion die von einer als Parameter übergebenen `int` Zahl prüft, ob es sich um eine Quadratzahl handelt. Ist es eine Quadratzahl soll der Rückgabewert 1 sein, ansonsten 0.

Hinweis: Summiere in einer Schleife in aufsteigender Reihenfolge die ungeraden Zahlen. Ergibt diese Summe genau die zu prüfende Zahl, handelt es sich um eine Quadratzahl. Wenn die Summe jedoch größer als die Zahl wird so ist diese keine Quadratzahl. 

---

#### **Übung (Prozentrechnen):**

Schreibe eine Funktion. Übergabeparameter sind 2 `double` Zahlen.  Beide Zahlen müssen positiv und die erste Zahl muss größer sein als die zweite. Die Funktion soll ermitteln wie oft von der ersten Zahl 10 Prozent abgezogen werden kann bis die zweite Zahl unterschritten wird. Diese Anzahl soll als Rückgabewert der Funktion verwendet werden. Erfüllen die beiden Zahlen nicht die Voraussetzungen so soll der Rückgabewert –1 sein.


