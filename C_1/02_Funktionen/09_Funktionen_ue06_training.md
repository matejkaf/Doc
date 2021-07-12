---
title: Funktionen
subtitle: Trainingsaufgaben II
description: etwas schwieriger
tags: [assignment,c,funktionen,C_1]
---

#### Übung (Summe ungerader Zahlen)

Schreibe eine Funktion `usum()` die eine untere und eine obere Grenze als Parameter übergeben bekommt (beide `int`). Die Funktion soll alle ungeraden Zahlen die sich zwischen den Grenzen befinden addieren und das Ergebnis zurückgeben. Sind die Grenzen ungerade Zahlen sind diese ebenfalls zu zählen.



---

#### Übung (Anzahl der Bits)

Schreibe eine Funktion die von einem als Parameter übergebenen `int` Wert die Anzahl der notwendigen Bits ermittelt und zurückgibt.

Z.B.: 3 braucht 2 Bits, 4 benötigt 3 Bits und für 17 wären 5 Bits notwendig.

**Anleitung:** Diese Aufgabenstellung kann dadurch gelöst werden, dass man die Zahl so lange durch 2 dividiert bis 0 herauskommt, dabei zählt man mit wie oft diese Division durch 2 notwendig war – dies ist die Anzahl der Bits.

Bsp.: Zahl=4: `4/2=2/2=1/2=0` ... es werden 3 Bits benötigt da drei Divisionen durch 2 notwendig waren.



---

#### Übung (prozentueller Zerfall)

Schreibe eine Funktion. Übergabeparameter sind 2 `double` Zahlen.  Beide Zahlen müssen positiv und die erste Zahl muss größer sein als die zweite. Die Funktion soll ermitteln **wie oft** von der ersten Zahl 10 Prozent abgezogen werden kann bis die zweite Zahl unterschritten wird. Diese Anzahl soll als Rückgabewert der Funktion verwendet werden. Erfüllen die beiden Zahlen nicht die Voraussetzungen so soll der Rückgabewert –1 sein.



