---
title: Mehrdimensionale Arrays
subtitle: Magisches Quadrat
cmds: ['md_html.bash --small']
tags: [assignment,c]
---



#### **Übung (Magisches Quadrat):**

Unter einem Magischen Quadrat der Kantenlänge $n$ befinden sich Zahlen $1,2,3,\ldots,n^2$ (jede nur einmal). Die Summen der Zeilen, Spalten, Haupt- und Nebendiagonalen sind gleich. 

Beispiel:

```
4 9 2
3 5 7
8 1 6
```

Aufgabenstellung:

- Definiere ein Magisches Quadrat als 2-dim.\ Array und weise fix Werte zu.
- Schreibe eine Funktion die prüft ob es sich tatsächlich um ein magisches Quadrat handelt.
- Kannst Du für die entstehende Summe eine Formel finden (in Abhängigkeit von $n$)?



---

#### **Übung (Ein Magisches Quadrat erzeugen):**

- Lege ein Array mit $0$ Werten an (Kantenlänge ist Konstante `N`).
Die Kantenlänge muss ungerade sein!
- 
Schreibe eine Funktion die ein magisches Quadrat erzeugt – siehe unten.
- 
Gib das Ergebnis aus und prüfe ob es tatsächlich ein magisches Quadrat ist.


Algorithmus zum Erzeugen eines magischen Quadrats:

1. Schreibe $x=1$ in das Feld direkt unter der Mitte des Quadrats! 
   Setze $i$ auf den Zeilen- und $j$ auf den Spalten-Index.
2. Wenn die Zahl $x$ in der Zeile $i$ und in der Spalte $j$ geschrieben wurde, dann versuche die Zahl $x=x+1$ in der Zeile $i=i+1$ und in der Spalte $j=j+1$ abzulegen! 
   - Wiederhole diese Regel so oft wie möglich.
   - Verwende Regel 4 wenn $i,j$ außerhalb des Arrays liegt.
   - Ist das Zielfeld bereits besetzt, so verwende Regel 3! 
   - Nach Abarbeitung von Regel 3 oder 4 kehre zu Regel 2 zurück.
3. Ist das Feld in der Zeile $i$ und in der Spalte $j$ bereits besetzt, so versuche statt dessen Zeile $i=i+1$ und Spalte $j=j-1$. 
   - Verwende Regel 4 wenn $i,j$ außerhalb des Arrays liegt.
   - Ist das Zielfeld bereits besetzt, so wende Regel 3 erneut an!
4. Die Zeilen- und Spaltennummern laufen von $0$ bis $n-1$. 
   - $i<0 \longrightarrow i=n-1 \quad j<0 \longrightarrow j=n-1$
   - $i>=n \longrightarrow i=0 \quad j>=n \longrightarrow j=0$



Magisches Quadrat für $n=5$:

```
11 24  7 20  3
 4 12 25  8 16
17  5 13 21  9
10 18  1 14 22
23  6 19  2 15
```






