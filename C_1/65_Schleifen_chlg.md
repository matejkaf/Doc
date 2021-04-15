---
title: Schleifen
subtitle: Challenges
tags: [assignment,challenge,1AHITS,1CHELS]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

####  Übung (Quadratzahl)

Jede Quadratzahl *n*² ist immer eine Summe der ersten *n* ungeraden Zahlen (Bsp.: $$4^2=4\times 4=1+3+5+7$$). 

- Berechne das Quadrat einer eingegebenen `int` Zahl nach diesem Verfahren, d.h. ohne eine Multiplikation zu verwenden!
- Prüfe ob eine eingegebene Zahl selbst eine Quadratzahl ist. Das ist dann der Fall wenn sich diese Zahl als Summe von ungeraden Zahlen berechnen lässt.



---

#### Übung (Turmrechnen)

Mit Turmrechnen kann man seine Kopfrechen-Fertigkeit trainieren.

Dabei beginnt man mit einer **Ausgangszahl** und **multipliziert** diese mal 2, dann mal 3, mal 4, und so weiter. Ist die gewünschte Höhe erreicht beginnt man zu **dividieren**, durch 2, durch 3, durch 4, und so weiter. Bis am Ende wieder die Ausgangszahl herauskommt.

Schreibe ein Programm das den Turm berechnet und ausgibt. Eingaben: Ausgangszahl und gewünschte Höhe (=die letzte Zahl mit der multipliziert wird).


Beispiel für 9 als Ausgangszahl und Höhe 5:

```
Start: 9
Hoehe: 5
9 * 2
18 * 3
54 * 4
216 * 5
1080 / 2
540 / 3
180 / 4
45 / 5
9
```




---

#### Übung (Hochzahl)

Eine Hochzahl ist eine Kurzschreibweise für mehrere Multiplikationen. Beispiel:

$$2^4=2\cdot 2\cdot 2\cdot 2$$

Schreibe ein Programm das die Eingabe einer Basis (`double`) und eines Exponenten (`int` und größer gleich 0) ermöglicht und das Ergebnis berechnet.

Berücksichtige auch dass $$a^0=1$$.




---

#### Übung (Reihe mit Exponent)

Berechne mittels verschachtelter `for`-Schleifen:

$$2^i=2^0+2^1+2^2+\cdots + 2^7 = 255$$

$$1^0+2^1+3^2+4^3+5^4+6^5+7^6=126126$$

---

