---
title: while Schleifen
subtitle: Übungen
tags: [assignment,C_1,1CHELS,1AHITS]
---

#### Übung (Hallo Welt mehrfach)

- 
V1: Schreibe ein Programm das mit Hilfe einer `while` Schleife 7 mal `Hallo Welt` ausgibt.


- V2: Ändere auf 20 Wiederholungen und gib zusätzlich eine laufende Nummer aus – wie unten dargestellt.

  ```c
  1 Hallo Welt
  2 Hallo Welt
  3 Hallo Welt
  ...
  20 Hallo Welt
  ```

- V3: Erweitere so, dass die Anzahl der Wiederholungen eingegeben werden kann.

---

#### Übung (Zahlenfolge)

- Schreibe ein Programm, das alle Zahlen vom Startwert 5 bis zum Endwert 20 untereinander ausgibt.
- Ändere das Programm so, dass Start- und Endwert eingegeben werden können. 

---

#### Übung (Runterzählen)

Schreibe ein Programm das von einem größeren Startwert bis zu einem kleineren Endwert alle Zahlen untereinander ausgibt. Start- und Endwert können eingegeben werden. Der Startwert muss größer als der Endwert sein.

- Erweiterung V2: Falls der Startwert nicht größer ist als der Endwert soll das Programm eine Fehlermeldung ausgeben.

---

#### Übung (Rauf- und Runter)
Schreibe ein Programm das von einem eingegebenen Startwert bis zu einem Endwert hochzählt und dann anschließend vom Endwert wieder zurück zum Startwert abwärts zählt.

---

#### Übung (Summe)

Schreibe ein Programm, das die Eingabe einer Zahl n erfordert und dann jede Zahl beginnend von 1 bis inklusive n addiert. Das Ergebnis soll ausgegeben werden. 

Beispiel.: Es wird 4 eingegeben, das Programm rechnet 1+2+3+4=10 und gibt am Bildschirm 10 aus.

Lösungsidee: Lege eine zusätzliche Variable für die Summe an. Setze diese auf 0. Addiere zu dieser Variable  immer wieder den neuen Wert: `summe = summe + wert`.

---

#### Übung (Summe mit Start und Ende)

Schreibe ein Programm das alle Zahlen beginnend bei einem Startwert bis zu einem Endwert addiert. Start- und Endwert können eingegeben werden. Das Endergebnis soll ausgegeben werden.

Beispiel: Es wurde 6 (Start) und 10 (Ende) eingegeben:
Das Programm berechnet `6+7+8+9+10`

```
Startwert: 6
Endwert: 10
Ergebnis = 40
```

Startwert und Endwert wurden vom Benutzer eingegeben.

- Erweiterung V2: Es soll die gesamte Rechnung zusätzlich zum Endergebnis ausgegeben werden.

  ```
  Startwert: 6
  Endwert: 10
  6+7+8+9+10=40  
  ```

- Erweiterung V3: Nun soll auch die Schrittweite eingegeben und berücksichtigt werden. Es sollen alle Werte berücksichtigt werden die kleiner oder gleich dem Endwert sind.

  ```
  Startwert: 7
  Endwert: 20
  Schrittweite: 3
  7+10+13+16+19=65
  ```

---
