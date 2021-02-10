---
title: Doc
tags: [assignment]
---



---

**Übung (Array variable Länge):**

Schreibe ein Programm, das ein `int` Array variabler Länge verwaltet.

- Die Länge des Arrays und ein Wert können eingegeben werden. 
  Alle Elemente des Arrays sind auf diesen Wert zu setzen.

  ```
  Laenge: 5
  Wert: 7
  7 7 7 7 7
  ```

  Der Inhalt des Arrays wird anschließend ausgegeben

- Das Programm soll nun immer wieder nach einem weiteren Eingabe-Wert fragen. Bei Eingabe von –1 wird das Programm beendet. Für jede andere Eingabe soll das Array in der Länge verdoppelt werden.
  Die bisherigen Werte werden in das neue Array übernommen und die neu entstandenen Array Elemente auf den eingegebenen Wert gesetzt. Nach jeder Erweiterung ist der Inhalt des gesamten Arrays auszugeben. Das Array soll in jedem Schritt nur die gerade benötigte Anzahl von Elementen enthalten. Beispielhafter Programmablauf:

  ```
  Laenge: 2
  Wert: 2
  2 2
  Wert: 4
  2 2 4 4
  Wert: 8
  2 2 4 4 8 8 8 8
  Wert: 16
  2 2 4 4 8 8 8 8 16 16 16 16 16 16 16 16
  Wert: -1
  good bye
  ```

  


---

**Übung (Dynamisches Array aus int):**
Schreibe ein Programm das die Eingabe von **beliebig vielen**, positiven Zahlen ermöglicht.
Die Eingabe wird mit –1 abgeschlossen. Das Programm soll anschließend alle Zahlen in umgekehrter Reihenfolge ausgeben.

Ausbaustufen:

- Lege für jede eingegeben Zahl ein neues, größeres Array an. Die vorhandenen Daten werden umkopiert. Das Array ist genau so groß wie die Anzahl der bereits eingegebenen Daten, es gibt keine "Reserve"-Elemente.
- Implementiere ein dynamisches Array mit "Reserve"-Elementen, Startgröße ist 3, bei jedem Vergrößerungsschritt wird ein Array allokiert das um 3 Elemente größer ist und die alten Daten werden umkopiert.



---

**Übung (Werte löschen):**
Zusätzlich: Löschen von Elementen.

- Bei Eingabe von –2 soll das letzte Element aus dem Array entfernt werden.
- Bei Eingabe von –3 soll das erste Element aus dem Array entfernt werden.
- Sind nach dem Löschen mehr als 5 Elemente frei so soll das dynamische Array verkleinert werden, so dass nach der Verkleinerung 3 Elemente frei sind.

---

