---
title: Übungen
subtitle: Challenges
tags: [assignment,challenge]
---

#### Übung (Runden)

Schreibe ein Programm, dass eine Zahl n (Datentyp `int`) auf das nächstliegende Vielfache von 100 rundet. Beispiele:  149→100, 150→200.

Hinweis: Probiere was bei einer Division durch 100 passiert.

---


#### Übung (Zeitrechnung)

Schreibe ein Programm, das eine Anzahl von Sekunden einliest und in die Anzahl von Tagen, Stunden, Minuten und Sekunden umrechnet und ausgibt. Teste das Programm mit verschiedenen Eingabewerten.
Beispiele:

- 61 Sekunden: → `0 Tage, 00:01:01`
- 3607 Sekunden: → `0 Tage, 01:00:07`
- 176434 Sekunden: → `2 Tage, 01:00:34`

---

#### Übung (Geometrie -- Punkteabstand)

Schreibe ein Programm, das die *x* und *y* Koordinaten zweier Punkte einliest und deren Abstand ausgibt. Hinweis: verwende den Satz des Pythagoras. 

Die Quadratwurzel kann mit der Funktion `sqrt()` aus der Bibliothek `math.h` berechnet werden. 

---

#### Übung (Quadratwurzel)
Die Wurzel w einer Zahl x

w = √x

die Berechnung im Computer erfolgt in dem zuerst w auf einen Startwert gesetzt wird:

w = (x+1)/2

dann wird immer wieder ein neues w nach folgender Formel berechnet:

w = (w+x/w)/2

Mit jedem Mal Ausführen dieser Formel wird der Wert genauer. Dies ist unter dem Namen **Herons Verfahren** bekannt.

Probiere aus wie oft gerechnet werden muss bis √16 bis zur 3ten Kommastelle stimmt.

---

