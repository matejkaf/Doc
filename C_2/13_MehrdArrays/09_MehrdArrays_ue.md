---
title: Mehrdimensionale Arrays
subtitle: Diverse Übungen
tags: [assignment,c]
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

#### **Übung (Schachaufgabe Läufer):**

Auf einem Schachbrett befindet sich ein Läufer und ein König. Schreibe ein Programm das ermittelt ob der König vom Läufer bedroht wird. Stelle das Schachbrett durch eine 2-dim.  `int` Array dar. Verwendet 0 für ein leeres Spielfeld, 1 für den König und 2 für den Läufer.

- Erweiterung: Die Position der beiden Figuren ist jeweils als 2 Zeichen langer Text gegeben 
(z.B.: `"d7"` und `"g4"`), schreibe an die entsprechende Position im Array.
- Überlege wie Du diese Aufgabe ohne ein Array lösen könntest.



---

#### **Übung (Damenproblem):**

Beim sogenannten Damenproblem sollen auf einem Schachbrett acht Damen aufgestellt werden so dass diese sich nicht gegenseitig schlagen können. Schreibe ein Programm dass prüft ob eine Lösung für dieses Problem korrekt ist. Das Schachbrett wird durch ein zweidimensionalen Array dargestellt. Eine 1 zeigt an, dass dort eine Dame steht, 0 bedeutet eine leeres Feld.

Aufgaben:
- Schreibe eine Funktion die in einem gegebenen zweidimensionalen Array prüft ob in jeder Zeile nur ein einziger 1er steht (und sonst lauter 0er).
- Erweitere für alle Spalten.
- Berücksichtige auch alle Diagonalen.

 ```c
int feld[][8] = {
    {0,0,0,0,0,0,0,1},
    {0,0,0,1,0,0,0,0},
    {1,0,0,0,0,0,0,0},
    {0,0,1,0,0,0,0,0},
    {0,0,0,0,0,1,0,0},
    {0,1,0,0,0,0,0,0},
    {0,0,0,0,0,0,1,0},
    {0,0,0,0,1,0,0,0}
};
 ```

---

#### **Übung (Spiegeln an Nebendiagonale):**

Schreibe eine Funktion die eine quadratische Matrix (zweidimesionales Array mit gleich vielen Zeilen wie Spalten) an der Nebendiagonale spiegelt.

---

#### **Übung (Tic Tac Toe):**

Schreibe ein Programm mit dem 2 Personen Tic Tac Toe spielen können.
Erweiterung:  Man kann gegen den Computer spielen. Dabei kann der Computer zufällige Züge wählen oder intelligent sein.

---

#### **Übung (Sudoku):**

Schreibe ein Programm das ermittelt ob in einem $9\times 9$ Array die [Sudoku](http://de.wikipedia.org/wiki/Sudoku) Eigenschaften erfüllt sind.

---

#### **Übung (Tetris):**

Programmiere das Spiel Tetris.

---

#### **Übung (Transponiertes Kopieren):**

Gegeben ist ein mehrdimensionales Array:

```c
int arr[][4] = {
    {0,4,7,3},
    {7,3,9,7},
    {3,6,3,5}
    };
```

Dieses $$3\times 4$$ Array soll auf ein $$4\times 3$$ Array umkopiert werden, so dass die erste Zeile des ersten Arrays gleich ist der ersten Spalte des zweiten Arrays, usw. 

Optional: Der Umkopiervorgang soll in einer Funktion stattfinden und ausschließlich mittels Zeiger implementiert werden.

$$
\begin{bmatrix}
 0 & 4 & 7 & 3 \\
 7 & 3 & 9 & 7\\
 3 & 6 & 3 & 5
\end{bmatrix}
\longrightarrow
\begin{bmatrix}
 0 & 7 & 3 \\
 4 & 3 & 6 \\
 7 & 9 & 3 \\
 3 & 7 & 5
\end{bmatrix}
$$



