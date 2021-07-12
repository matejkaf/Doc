---
title: Dynamische Speicherverwaltung
subtitle: Übungen
tags: [assignment,C_2]
---

#### Übung (Array variabler Länge)

Schreibe ein Programm, das ein `int` Array variabler Länge verwaltet.

- Die Länge des Arrays kann eingegeben werden. Alle Elemente werden auf den Wert der Länge gesetzt und Array anschließend ausgegeben:
  
  ```
  Laenge: 5
  5 5 5 5 5
  ```
  
- Es soll nun möglich sein das Array um eine Anzahl Element zu erweitern. Die Anzahl ist gleichzeitig der Wert auf den die neuen Array Elemente gesetzt werden sollen.
  Anleitung: 

  - neues Array allokieren (genau in der benötigten Länge)
  - Daten aus dem alten Array umkopieren
  - Neue Daten eintragen
  - Zeiger umsetzen
  
- Nach jeder Erweiterung ist der Inhalt des gesamten Arrays auszugeben. Ein negativer Wert beendet das Programm. Beispielhafter Programmablauf:
  
  ```
  Laenge: 2
  2 2
  Erweiterung: 4
  2 2 4 4 4 4
  Erweiterung: 3
  2 2 4 4 4 4 3 3 3
  Erweiterung: 1
  2 2 4 4 4 4 3 3 3 1
  Wert: -1
  good bye
  ```