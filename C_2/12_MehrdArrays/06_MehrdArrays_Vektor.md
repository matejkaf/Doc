---
title: Mehrdimensionale Arrays (Übungen)
cmds: ['md_html.bash --small']
tags: [assignment,c]
---



**Vektorrechnung:**

Die Vektorrechnung spielt vor allem für die Computergrafik eine bedeutende Rolle.

Ein Vektor beschreibt entweder:

- eine Position im Raum (Koordinaten), oder
- eine Richtung bzw. Distanz zwischen 2 Punkten

Bei einem Spiel würde ein Positionsvektor beschreiben wo sich die Spielfigur befindet. 
Hingegen ein Richtungsvektor würde vorgeben in welche Richtung und mit welcher Geschwindigkeit sich diese bewegt.

Um Drehungen, Verkleinerung und Vergrößerung umzusetzen werden Matrizen verwendet.


- Ein Vektor ist ein eindimensinales Array,
- eine Matrix ein zweidimensionales Array.



---

**Übung (Matrizenrechnung):**
Lege eine $3\times 3$  Matrix aus `int` Elementen an und schreibe folgende Funktionen:

- `eingabe()` und  `ausgabe()`.
- `spur()` – Ermittelt die Spur der Matrix. Die Spur ist die Summe der Elemente in der Hauptdiagonale (links oben nach rechts unten).
- `hauptd()` – Ausgabe der Elemente in der Hauptdiagonalen.
- `nebend()` – Ausgabe der Elemente in der Nebendiagonalen.
- `mulMatVect()` – Multiplikation der Matrix mit einem Vektor. Stelle den Vektor als eindimensionales Array dar. Übergabeparameter sind die beiden Multiplikanden sowie ein Zielvektor, in welchem das Ergebnis abgelegt wird. Beispiel:

  ```
   / 1 2 3 \    3     10
   | 4 5 6 |  * 2  =  28
   \ 7 8 9 /    1     46
  ```


- `mulMatMat()` –  Multiplikation zweier quadratischer Matrizen gleicher Grösse. Übergabeparameter sind die beiden zu multiplizierenden Matrizen sowie eine Zielmatrix, in welcher das Ergebnis abgelegt wird. Beispiel:

  ```
   / 1  3 -4 \   / 8  3 0 \   / 17  25 -18 \
   | 1  3 -2 | * | 3 10 2 | = | 17  29  -6 |
   \-1 -2  5 /   \ 0  2 6 /   \-14 -13  26 /
  ```

- Multipliziere die Matrix 

  ```
  1 2 3
  4 5 6
  7 8 9
  ```

  mit den Matrizen:

  ```
  1 0 0    0 0 1    0 0 1
  0 1 0    0 1 0    1 0 0
  0 0 1    1 0 0    0 1 0
  ```

  Analysiere die 3 Ergebnisse.

- `transpose()` –  Ermittelt die transponierte Matrix. Die Transponierte ist an der Hauptdiagonale gespiegelt. Übergabeparameter ist die zu transponierende Matrix und eine Zielmatrix.

---





