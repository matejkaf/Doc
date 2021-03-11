---
title: Mehrdimensionale Arrays
subtitle: Übungen Vektorrechnung
tags: [assignment,c]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

Die **Vektorrechnung** spielt vor allem für die Computergrafik eine bedeutende Rolle.

Ein Vektor beschreibt entweder:

- eine Position im Raum (Koordinaten), oder
- eine Richtung bzw. Distanz zwischen 2 Punkten

Bei einem Spiel würde ein Positionsvektor beschreiben wo sich die Spielfigur befindet. 
Hingegen ein Richtungsvektor würde vorgeben in welche Richtung und mit welcher Geschwindigkeit sich diese bewegt.

Um Drehungen, Verkleinerung und Vergrößerung umzusetzen werden Matrizen verwendet.


- Ein Vektor ist ein eindimensinales Array,
- eine Matrix ein zweidimensionales Array.



---

#### Übung (Matrizenrechnung):

Lege eine $3\times 3$  Matrix aus `int` Elementen an und schreibe folgende Funktionen:

- `eingabe()` und  `ausgabe()`.

- `spur()` – Ermittelt die Spur der Matrix. Die Spur ist die Summe der Elemente in der Hauptdiagonale (links oben nach rechts unten).

- `hauptd()` – Ausgabe der Elemente in der Hauptdiagonalen.

- `nebend()` – Ausgabe der Elemente in der Nebendiagonalen.

- `mulMatVect()` – Multiplikation der Matrix mit einem Vektor. Stelle den Vektor als eindimensionales Array dar. Übergabeparameter sind die beiden Multiplikanden sowie ein Zielvektor, in welchem das Ergebnis abgelegt wird. Beispiel:

$$
\begin{bmatrix}
 1 & 2 & 3 \\
 4 & 5 & 6 \\
 7 & 8 & 9
\end{bmatrix}
\times
\begin{bmatrix}
 3 \\ 2 \\ 1 
\end{bmatrix}
=
\begin{bmatrix}
 10 \\ 28 \\ 46 
\end{bmatrix}
$$


- `mulMatMat()` –  Multiplikation zweier quadratischer Matrizen gleicher Grösse. Übergabeparameter sind die beiden zu multiplizierenden Matrizen sowie eine Zielmatrix, in welcher das Ergebnis abgelegt wird. Beispiel:

$$
\begin{bmatrix}
 1 & 3 & -4 \\
 1 & 3 & -2 \\
 -1 & -2 & 5
\end{bmatrix}
\times
\begin{bmatrix}
 8 & 3 & 0 \\
 3 & 10 & 2 \\
 0 & 2 & 6
\end{bmatrix}
=
\begin{bmatrix}
 17 & 25 & -18 \\
 17 & 29 & -6 \\
 -14 & -13 & 26
\end{bmatrix}
$$

- Multipliziere die Matrix 

$$
\begin{bmatrix}
 1 & 2 & 3 \\
 4 & 5 & 6 \\
 7 & 8 & 9
\end{bmatrix}
$$

  mit jeweils einer der drei Matrizen:
$$
\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\end{bmatrix}
\begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0\end{bmatrix}
\begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0\end{bmatrix}
$$
  Analysiere die 3 Ergebnisse.

- `transpose()` –  Ermittelt die transponierte Matrix. Die Transponierte ist an der Hauptdiagonale gespiegelt. Übergabeparameter ist die zu transponierende Matrix und eine Zielmatrix.





