---
title: Dynamische Speicherverwaltung
subtitle: Übungen
tags: [assignment]
---

#### Übung (Dynamisches Array aus int)

Schreibe ein Programm das die Eingabe von **beliebig vielen**, positiven Zahlen ermöglicht.
Die Eingabe wird mit –1 abgeschlossen. Das Programm soll anschließend alle Zahlen in umgekehrter Reihenfolge ausgeben.

- **Ausbaustufe 1:** Lege für jede eingegeben Zahl ein neues, größeres Array an. Die vorhandenen Daten werden umkopiert. Das Array ist genau so groß wie die Anzahl der bereits eingegebenen Daten, es gibt keine "Reserve"-Elemente.
- **Ausbaustufe 2:** Implementiere ein dynamisches Array mit "Reserve"-Elementen, Startgröße ist 3, bei jedem Vergrößerungsschritt wird ein Array allokiert das um 3 Elemente größer ist und die alten Daten werden umkopiert. Dazu sind 2 Längenvariablen notwendig, eine enthält die allokierte Länge des Arrays die andere die Anzahl der verwendeten Elemente.
- **Ausbaustufe 3:** Zusätzlich: Löschen von Elementen.
  - Bei Eingabe von –2 soll das letzte Element aus dem Array entfernt werden.
  - Bei Eingabe von –3 soll das erste Element aus dem Array entfernt werden.
  - Sind nach dem Löschen mehr als 5 Elemente frei so soll das dynamische Array verkleinert werden, so dass nach der Verkleinerung nur mehr 3 Elemente frei sind.
