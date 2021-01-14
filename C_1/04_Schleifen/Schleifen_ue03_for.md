---
title: Schleifen (Übungen)
type: assignment
cmds: ['md_html.bash --small']
---




Verwende zur Lösung der folgenden Aufgaben die `for` Schleife.



---

**Übung (for Schleifen):**
Schreibe ein Programm das 

- Deinen Namen mehrfach ausgibt. Wie oft kann eingegeben werden.
- Alle Zahlen von einem Startwert bis zu einem Endwert in 2er Schritten ausgibt. (Start- und Endwert können eingegeben werden).
- Alle Zahlen von Start- bis Endwert die durch 3 und 5 teilbar sind.
  (Start- und Endwert von vorher).



---

**Übung (Schritte):**
Schreibe ein Programm das von einem eingegebenen Startwert immer jeden Wert bis zu einem eingegebenen Endwert ausgibt. Danach soll das Programm vom Endwert zum Startwert abwärts zählen.



---


**Übung (Zahlenfolge):**
Erzeuge die Zahlenfolge

$1, 2, 4, 8, 16, 32, \ldots, 1024, \ldots $

Es kann eingegeben werden wie viele Zahlen dieser Folge ausgegeben werden.



---

**Übung (Summe I):**

-  Schreibe ein Programm, das die Eingabe einer Zahl $n$ erfordert und dann jede Zahl beginnend von 1 bis inklusive $n$ addiert. 
Das Ergebnis soll ausgegeben werden.
Beispiel.: Es wird 4 eingegeben, das Programm rechnet $1+2+3+4=10$ und gibt am Bildschirm 10 aus.
- Erweitere: Es soll die gesamte Rechnung zusätzlich zum Endergebnis ausgegeben werden.

$1+2+3+4+5+6+7+8+9+10=55$




---

**Übung (Quadratzahl):**
Jede Quadratzahl $n^2$ ist immer eine Summe der ersten $n$ ungeraden Zahlen (Bsp.: $4^2=1+3+5+7$). 

- Berechne das Quadrat einer eingegebenen `int` Zahl nach diesem Verfahren (ohne eine Multiplikation zu verwenden!).
- Prüfe ob eine eingegebene Zahl eine Quadratzahl ist.
Das ist dann der Fall wenn sich diese Zahl als Summe von ungeraden Zahlen berechnen lässt.



---

**Übung (Turmrechnen):**
Mit Turmrechnen kann man seine Kopfrechen-Fertigkeit trainieren.

Dabei beginnt man mit einer Ausgangszahl und multipliziert diese mal 2, dann mal 3, mal 4, und so weiter. Ist die gewünschte Höhe erreicht beginnt man zu dividieren, durch 2, durch 3, durch 4, und so weiter. Bis am Ende wieder die Ausgangszahl herauskommt.

Schreibe ein Programm das den Turm berechnet und ausgibt. Eingaben: Ausgangszahl und gewünschte Höhe (letzte Zahl mit der multipliziert wird).


Beispiel für 9 als Ausgangszahl und Höhe 5.

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

**Übung (Hochzahl):**
Eine Hochzahl ist eine Kurzschreibweise für mehrere Multiplikationen. Beispiel:

$2^4=2\cdot 2\cdot 2\cdot 2$

Schreibe ein Programm das die Eingabe einer Basis (`double`) und eines Exponenten (`int` und größer gleich 0) ermöglicht und das Ergebnis berechnet.

Berücksichtige auch dass $a^0=1$.




---

**Übung (Reihe mit Exponent):**
Berechne mittels verschachtelter `for`-Schleifen:

$2^i=2^0+2^1+2^2+\cdots + 2^7 = 255$

$1^0+2^1+3^2+4^3+5^4+6^5+7^6=126126$



---

