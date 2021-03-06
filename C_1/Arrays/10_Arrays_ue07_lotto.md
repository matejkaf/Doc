---
title: Doc
tags: [assignment,array]
---

# Arrays – Lotto (Übung)



**Übung (Lotto Tip):** Schreibe ein Programm das hilft Lotto ("6 aus 45") zu spielen.

Die Lottozahlen sollen in einem Array gespeichert werden.

- Schreibe eine Funktion `tip` die 6 zufällige Lotto-Zahlen ins Array schreibt.
- Implementiere eine Funktion `print` die das Array ausgibt (alle Zahlen in einer Zeile).
- In einem Lottotip kommt keine Zahl mehr als einmal vor, das kann aber in der Funktion `tip` passieren.
  Schreibe eine Funktion `doppelt` die feststellt ob im Array eine Zahl mehrfach vorkommt. Nimm `bool` als Rückgabwert. 
- Verwende die Funktion `doppelt` um die Funktion `tip` so oft aufzurufen bis keine doppelte Zahl mehr vorkommt.




---

**Übung (Lotto Tip – Erweiterungen):** Erweitere das Programm aus Übung .

- Die Anzahl der zu erzeugenden Tips kann eingegeben werden.
- Gib 6 Gewinnzahlen fix im Programm vor. Z.B: `int gewinn[]={42,4,33,28,19,16};`

- Ermittle durch eine weitere Funktion `treffer` die Anzahl der richtigen Zahlen und gib diese Anzahl aus.
Die Funktion muss die von `tip` zufällig ermittelten Zahlen mit jenen Zahlen aus dem Array `gewinn` vergleichen. Beachte, dass die Zahlen in beiden Arrays in beliebiger Reihenfolge vorliegen können.\\
Beispiel: Für `tip[]={27,16,37,33,42,2};` ergeben sich 3 Richtige.
- Führe eine Statistik (Anzahl 6 Richtige, Anzahl 5 Richtige, ...).
- Ermittle durch Probieren wie viele Tips notwendig sind um 6 Richtige zu erhalten.


---




