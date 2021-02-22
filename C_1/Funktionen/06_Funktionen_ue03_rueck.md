---
title: Doc
tags: [1AHITS,assignment, c, funktionen, rueckgabe ]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# Funktionen mit Rückgabewert (Übungen)

**Hinweis:** Die Funktionen dürfen keine Befehle zur Ein- und Ausgabe enthalten.
Die Ein- und Ausgabe muss ausschließlich im Hauptprogramm stattfinden.



---

**Übung (Trapez-Fläche):**
Schreibe eine Funktion `tflaeche` die die Fläche eines Trapez ($$\frac{a+b}{2} h$$) als Rückgabewert berechnet (`double` Parameter $$a$$, $$b$$ und $$h$$). Rufe die Funktion von `main()` aus auf und teste das Programm.

```c
double tflaeche(double a, double b, double h)
```




---

**Übung (Absolutwert):**
Schreibe eine Funktion `absolut` die einen `double` Wert als Parameter hat und einen `double` Wert als Rückgabewert liefert. Die Funktion soll den Absolutwert (den Wert ohne Vorzeichen) zurückgeben. Rufe die Funktion aus `main` auf und teste einige Werte. Das Programm soll die Ergebnisse ausgeben.

Beispiele:

- `absolut(-3.14)` → `3.14`
- `absolut(2.72)` → `2.72`
- `absolut(0.0)` → `0.0`




---

**Übung (Vorzeichen):**
Schreibe die Funktion `vorzeichen` die den Rückgabetyp `int` und einen `double` Wert als Parameter hat. Wenn der Wert größer als Null ist, soll 1, wenn er kleiner als Null ist, $$-1$$, und wenn er gleich Null ist, 0 zurückgegeben werden. Teste einige Werte.

Beispiele:

- `vorzeichen(-3.14)` → `-1`
- `vorzeichen(2.72)` → `1`
- `vorzeichen(0.0)` → `0`



---

**Übung (Potenzieren):**
Schreibe eine Funktion die einen `double` Wert $$x$$ hoch einem `int` Wert $$n$$ berechnet. Die Funktion soll so aussehen:

```c
double hoch(double x, int n)
```

Beachte: $$x^n  = \underbrace{x \ldots x}_{n\times} \quad \text{und}\quad x^0=1$$

Beispiel: $$2^5  = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$$




---

**Übung (Negative Hochzahlen):**
Berücksichtige auch negative Hochzahlen: 

$$x^{n}=\frac{1}{x^{-n}} \qquad \text{wenn}\; n<0$$

Beispiele:

- $$x^{-3}=\frac{1}{x^{3}}=\frac{1}{x\cdot x\cdot x} $$
- $$2^{-5}=\frac{1}{2^{5}}=\frac{1}{2\cdot 2\cdot 2\cdot 2\cdot 2}= \frac{1}{32}$$

---