---
title: ArrayList – Testkalender
subtitle: Übung
tags: [4BHELS]
---

Es soll ein Kalender für Tests und Schularbeiten verwaltet werden.

Lege dafür eine Klasse `Test` an mit Instanzvariablen für

- Datum (Tag+Monat)
- Fachbezeichnung

Implementiere die Klasse `Test` mit Konstruktor und toString Methode.

Implementiere weiters eine Klasse `Kalender` mit:

- Einer ArrayList aus `Test` Objekten als Instanzvariable
- Einer Methode `neuerTest` die das Datum und die Fachbezeichnung übergeben bekommt, daraus ein `Test` Objekt erzeugt und dieses in der ArrayList speichert.
- Einer Methode `nächsterTest` die ein Datum als Parameter übergeben bekommt und jenen Test sucht der der nächste nach diesem Datum ist. Dieser Test soll als Rückgabewert verwendet werden. Zur Vereinfachung kann angenommen werden, dass alle Tests im Bereich von 01.10. bis 24.12. stattfinden.
  Unter Punkteabzug kann der Tag des Tests vernachlässigt werden.

Schreibe ein Hauptprogramm das die Anwendung der Klasse `Kalender` an einem Beispiel zeigt.

