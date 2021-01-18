---
title: Doc
type: assignment
cmds: ['md_html.bash --small']
tags: [2AHELS,c]
---

# Mehrdimensionale Arrays (Übungen)

**Übung (Grundlagen):**
Lege ein zweidimensionales `int` Array mit 5 Zeilen und 7 Spalten an.

- Schreibe durch verschachtelte Schleifen die Zahlen $10,11,12, \ldots$ zeilenweise in das Array. Es sollen alle Elemente einen Wert erhalten.
- Gib das Array zeilenweise aus (das dient auch zum Überprüfen ob die vorangegangene Aufgabe korrekt gelöst wurde).
- Gib das Array spaltenweise aus. Dabei werden die Werte einer Spalte (von oben nach unten gesehen) am Bildschirm in einer Zeile ausgegeben. 
  Die erste Zeile der Ausgabe wäre: `10 17 24 31 38`.
- Gib das Array so aus als ob es um 90 Grad nach rechts gedreht worden wäre (D.h. die Spalten von unten nach oben ausgeben).
  Die erste Zeile der Ausgabe wäre: `38 31 24 17 10`.
- Nach der Eingabe eines Zeilen-Index soll die Summe der Elemente in dieser Zeile berechnet und ausgegeben werden.
- Nach der Eingabe eines Spalten-Index soll die Summe der Elemente in dieser Spalte berechnet und ausgegeben werden.




---

**Übung (Grundlagen Funktionen):**
Lege ein 2 dimensionales `int` Array an. Definiere Anzahl der Zeilen und Spalten als globale Konstante (`ZEILEN` und `SPALTEN`). Implementiere die folgenden Funktionen:

- `input()` – Werte zeilenweise ins Array eingeben.
- `output_z()` – Array ausgeben (zeilenweise).
- `output_s()` – Array ausgeben (spaltenweise).
- `sum()` – Die Summe über alle Elemente des Arrays bilden.



---


**Übung (Diverse Funktionen):**

Schreibe Funktionen für:
- Summe einer Zeile berechnen (Zeilenindex ist Parameter).
- Summe einer Spalte berechnen (Spaltenindex ist Parameter).
- Den Index der Zeile mit der größten Zeilensumme zurückgeben.
- Den Index der Spalte mit der größten Spaltensumme zurückgeben.
- Die Anzahl der Spalten ermitteln in denen alle Zahlen gleich sind.

---

