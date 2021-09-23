---
title: ArrayList – Fahrplan
subtitle: Übung
tags: [4BHELS]
---

Die Bus Abfahrten von der HTL Braunau für einen Tag sollen verwaltet werden.

Lege dafür eine Klasse `Abfahrt` an mit Instanzvariablen für

- Uhrzeit (Stunde+Minute)
- Zielort als Text

Implementiere die Klasse `Abfahrt` mit Konstruktor und toString Methode.

Implementiere weiters eine Klasse `Fahrplan` mit:

- Einer ArrayList aus `Abfahrt` Objekten als Instanzvariable
- Einer Methode `neueAbfahrt` die die Uhrzeit und den Zielort übergeben bekommt, daraus ein `Abfahrt` Objekt erzeugt und dieses in der ArrayList speichert.
- Einer Methode `zaehleZiel` die Uhrzeit und Zielort als Parameter übergeben bekommt und in der ArrayList Abfahrten sucht die nach dieser Uhrzeit liegen. Die Anzahl dieser Abfahrten ist zu ermitteln und als Rückgabewert zu verwenden.

Schreibe ein Hauptprogramm das die Anwendung der Klasse `Fahrplan` an einem Beispiel zeigt.