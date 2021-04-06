---
title: ArrayList
subtitle: Übungen – Walters Liste
tags: [assignment]
---



---

#### **Übung (Walters Liste):**

Walter bittet dich um deine Hilfe. Es geht darum die bei diversen Verstößen vorgesehenen Beträge zu Verwalten. Pro Schüler ist der Name und der offene Betrag zu speichern. Schüler die noch Schulden bei Walter haben sind in einer `ArrayList` zu verwalten. Schüler stehen nur einmal in der Liste, zusätzliche Strafen werden zum bestehenden Betrag aufaddiert.


Schreibe eine Klasse `WaltersListe` die diese `ArrayList` enthält mit folgenden Methoden:

- `double addFine(String name, double amount)` – Fügt einen neuen Schüler zur Liste hinzu, bzw. falls dieser schon vorhanden ist wird der neue Betrag zum bereits bestehenden Betrag hinzu addiert.
- `void printList()` – gibt die ganze Liste aus.
- `void finePaid(String name)` – Schüler hat bezahlt, diesen aus der Liste entfernen.
- `void sortByAmount()` – Liste nach offenen Beträgen, absteigend sortieren.




---

#### **Übung (Walters Liste II):**

Walter will wissen ob manche Klassen besonders schlimm sind. 

- Ergänze dass auch die Klassenbezeichnung pro Schüler verwaltet wird.

Schreibe eine Methode `getAmountByClass()` in der Klasse `WaltersListe` die

- Stufe 1: Pro Klasse die Summe der offenen Beträge ausgibt.
- Stufe 2: Das Ergebnis als ArrayList liefert, so dass die Ausgabe nach dem Aufruf der Methode erfolgen kann.

