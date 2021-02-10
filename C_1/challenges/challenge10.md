---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Funktionen


**Übung (Absolut 2):**

Implementiere die Funktion `absolut` ohne eine `if` Abfrage zu verwenden.
Tipp: Verwende die Funktion `vorzeichen` und eine Multiplikation!

---


**Übung (Datumsprüfung):**

Schreibe eine Funktion, die ein Datum auf Gültigkeit prüft. Tag, Monat und Jahr werden als `int`-Werte übergeben. Die Funktion liefert 1 zurück, falls es sich um ein gültiges Datum handelt, 0 sonst. Achte auch auf Schaltjahre!

---


**Übung (Primzahl):**

Schreibe eine Funktion `isprim()`, der ein ganzzahliger Wert $>1$ übergeben wird und welche 1 zurückliefert, falls die übergebene Zahl eine Primzahl ist und 0 sonst.

---


**Übung (Zinsberechnung – Endkapital):**

Schreibe eine Funktion die Startkapital, Zinsen und Laufzeit übergeben bekommt und das Endkapital als Rückgabewert zurückgibt. Wähle die richtigen Datentypen für Parameter und Rückgabe.

---


**Übung (Zinsberechnung – Laufzeit):**

Schreibe eine Funktion die Startkapital, Endkapital und Zinsen übergeben bekommt und zurückgibt nach wie vielen Jahren das Endkapital mindestens erreicht wird. Wähle die richtigen Datentypen für Parameter und Rückgabe.

---


**Übung (ggT):**

Schreibe eine Funktion die den größten gemeinsamen Teiler zweier ganzer, positiver Zahlen ermittelt und als Rückgabewert zurückgibt.

---


**Übung (Zufallszahlen):**

Schreibe eine Funktion `int zufall(int start, int ende)` die eine Zufallszahl z, start<z<ende 
ermittelt und zurückgibt.

---

**Übung (Zufallsereignis):**
Schreibe eine Funktion `bool ereignis(int w)` diese soll mit der Wahrscheinlichkeit w den Wert `true` liefern, ansonsten `false`. 0≤w≤100.

---

**Übung (Zufallsereignis 2):**
Schreibe eine Funktion `bool ereignis2(int e, int m)`. 
Diese soll im Durchschnitt e mal `true` liefern, wenn sie m mal aufgerufen wurde.

---

**Übung (Rechteck mit gotoxy):**

Schreibe ein Programm, das ein Rechteck aus `'*'` an beliebiger Stelle des Bildschirms zeichnen kann. Die (x,y) Koordinate der linken oberen Ecke sowie die Höhe und Breite können eingegeben werden. Programmiere die Eingabe im Hauptprogramm (`main()`). Die
Schreibe zur Ausgabe des Rechtecks eine Funktion `void rechteck(int x, int y, int breite, int hoehe);`

---

**Übung (Zahlenausgabe mit Schrittweite):**

Schreibe eine Funktion `void zahlenausgabe( int endwert, int startwert, int schrittweite )`, die die Zahlen von einem Endwert **absteigend** bis zu einem
Startwert mit Schrittweite auf dem Bildschirm ausgibt. Die Eingabe erfolgt im Hauptprogramm. Beispiel:

- Eingabe: Endwert= 10, Startwert= 4, Schrittweite= 3
- Ausgabe: 10, 7, 4

---

**Übung (Zahlensumme mit Schrittweite):**
Schreibe eine Funktion `int zahlensumme( int startwert, int endwert, int schrittweite )`, die die Zahlen von einem Startwert **aufsteigend** bis zu einem Endwert mit Schrittweite summiert und das Ergebnis zurückgibt.  In der Funktion soll keine Ein- oder Ausgabe erfolgen (dies ist Aufgabe des Hauptprogramms). Der Endwert soll noch Teil der Summe sein.

Beispiel:

- Startwert=2, Endwert=17, Schrittweite=5
- Ergebnis: 2+7+12+17=38

---

**Übung (Zahlensumme mit Schrittweite und abwechselndem Vorzeichen):**

Schreibe eine Funktion `int zahlensumme( int startwert, int endwert, int schrittweite )`, die die Zahlen von einem Startwert **aufsteigend** bis zu einem Endwert mit Schrittweite abwechselnd summiert und substrahiert und das Ergebnis zurückgibt. In der Funktion soll keine Ein- oder Ausgabe erfolgen (dies ist Aufgabe des Hauptprogramms). Der Endwert soll noch Teil der Summe sein.

Beispiel:

- Startwert=2, Endwert=19, Schrittweite=5
- Ergebnis: 2-7+12-17=-10

Wie im Beispiel gezeigt muss der vorgegebene Endwert nicht unbedingt Teil der Summe sein.

---


**Übung (Fakultät):**

Die Fakultät einer ganzen positiven Zahl n ist das Produkt: 1×2×3×...×n. Man schreibt n! (mit Rufzeichen), außerdem ist 0!=1. Schreibe eine Funktion `fakultaet()`, die die Fakultät einer als Parameter übergebenen ganzen Zahl berechnet und zurückgibt. Rufe die Funktion im Hauptprogramm auf. Schreibe auch die Ein- und Ausgabe im Hauptprogramm.

---


**Übung (Binomialkoeffizient):**

Schreibe ein Programm das den Binomialkoeffizienten berechnt. Dieser wird aus 2 nicht negativen, ganzen Zahlen berechnet: n und k

Für n=20 und k=5 ist der Binomialkoeffizient die Anzahl der Möglichkeiten um 5 Schüler aus einer Klasse von 20 Schülern auszuwählen.

---


**Übung (Maximum ignorieren):**

Schreibe ein Funktion die drei `int` Werte als Parameter hat und einen `int` Wert zurückgibt. 
Der Rückgabewert soll die Summe aus den beiden kleineren Zahlen sein.

---


**Übung (Median ignorieren):**

Ein Bekleidungsgeschäft bietet die Aktion bei der man beim Kauf von 3 Stücken dasjenige mit dem mittleren Preis gratis bekommt. Schreibe eine Funktion mit 3 `int` Parametern dessen `int` Rückgabewert genau dies berechnet.

---


**Übung (Minumum aus 5 Zahlen):**

Schreibe eine Funktion `int minimum(int a,int b,int c,int d,int e)` die die kleinste aus 5 Zahlen ermittelt und zurückgibt.

---

**Übung (Raute):**

Stelle den Umriss einer Raute dar. Die Breite der Raute wird eingegeben. Damit es sich auf ein einzelnes Sternchen an der Spitze ausgeht muss die Breite eine ungerade Zahl sein, prüfe das bei der Eingabe. Schreibe zur Ausgabe der Raute eine Funktion. Die Eingabe und Aufruf der Funktion ist im Hauptprogramm zu realisieren. 

```
Breite: 7
    *
   * *
  *   *
 *     *
  *   *
   * *
    *
```

---

**Übung (Notenermittlung):**

Für einen Test wird ein Punktesystem verwendet: bei weniger oder gleich 14 ist die Note nicht genügend (5), bei mehr als 14 Punkten ist es genügend (4), >18 befriedigend (3), >22 gut (2) und >26 sehr gut (1). Schreibe eine Funktion `int note(int punkte)` die als Rückgabewert die erreichte Note liefert. Rufe die Funktion im Hauptprogramm auf und gib je nach Rückgabewert die Note als Text aus.

---

**Übung (Formel von Heron):**

Schreibe eine Funktion die die Fläche eines Dreiecks mit Hilfe der Formel von [wikipedia: Heron](http://de.wikipedia.org/wiki/Heron_von_Alexandria) berechnet ([Satz des Heron](http://de.wikipedia.org/wiki/Satz_des_Heron)). 

Die Quadratwurzel kann mit Hilfe der Funktionen `sqrt()` aus `math.h` berechnet werden.

---


**Übung (Rechentrainer):**

Ein Programm soll testen, wie gut Du im Rechnen mit den Grundrechnungsarten bist. 

- Der Benutzer soll die gewünschte Rechenoperation und den Schwierigkeitsgrad einstellen können; d.h. es gibt die Wahlmöglichkeit zwischen den Zahlenbereichen 1...10, 10...100, 100...1000.
- Die 2 ganzen Zahlen, die entweder addiert, subtrahiert, multipliziert oder dividiert werden können, werden  per Zufall ermittelt. 
- Zum Schluss soll eine Statistik erscheinen, die anzeigt, wie viele korrekte Ergebnisse aus insgesamt 10 Versuchen erzielt wurden.
- Vorgaben: Verwende Funktionen (Unterprogramme), mit denen u.a. Haupt- u. Untermenüs erzeugt werden!

Implementiere das Programm in mehreren Erweiterungs-Stufen:

- Stufe 1:
```
Welche Rechenoperation ( + - * / ) willst du üben? + 
Wie viel ist 3 + 5? 8 bzw. 7 
richtig. bzw. falsch. Richtig wäre 8. 
```
- Stufe 2: Mehrere Rechnungen hintereinander üben (Benutzer bestimmt die Anzahl!) mit Angabe, wie viele richtig gerechnet wurden. 
- Stufe 3 (Mehrere Levels):
```
Level leicht: 1 -- 10. 
Level mittel: 10 -- 100.
Level schwer: 100 -- 1000.
```
- Stufe 4:

	- bei Subtraktion soll das Ergebnis immer positiv sein
	- bei Division soll kein Rest möglich sein. 

- Stufe 5: Ausgabe wie viele Prozent erreicht, Note und grafische Ausgabe. 
```
Du hast insgesamt 60 % der Rechnungen 

richtig gelöst. Note: 4
  *************** 
0%–------------------------------100%
```

---


