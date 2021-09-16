---
title: ArrayList
subtitle: Übung
tags: [4BHELS]
---




Schreibe ein Java Programm mit dem die Einzahlungen in die Klassenkasse verwaltet werden können.

Lege dafür 2 Klassen an:


- `Einz`: mit Name und Betrag als Instanzvariablen. 
- `Kasse`: diese enthält ein dynamisches Array (`ArrayList`) aus `Einz` Objekten


Implementiere die Klasse `Einz` mit Konstruktor und toString Methode.

Implementiere weiters die Klasse `Kasse` mit folgenden Methoden:

- `einzahlen` – diese erhält als Übergabeparameter Name und Betrag. In der Methode soll ein `Einz` Objekt erstellt und dieses an die ArrayList angefügt werden.
Anmerkung: für jede Einzahlung wird ein Objekt erstellt, d.h. wenn ein Schüler 3 mal etwas einzahlt so befinden sich 3 Objekte in der ArrayList.

- `eingezahlt` – Übergabeparameter ist der Name. In der Methode soll das gesamte Array nach diesem Namen durchsucht und die Summe aus den Beträgen gebildet werden. Die sich ergebende Summe ist der Rückgabewert der Funktion.

- `print` – Verwende eine Schleife um alle in der ArrayList gespeicherten `Einz` Elemente auszugeben und nutzt dazu die `toString` Methode von `Einz`

Zeige in einem **Hauptprogramm** die Anwendung der Klassen `Kasse` und `Einz`.
