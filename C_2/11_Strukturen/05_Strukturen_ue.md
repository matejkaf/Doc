---
title: Doc
tags: [assignment]
---

# Stundenplan (Übung)

**Übung (Strukturen):**

Das Ziel ist ein Programm zu schreiben, das den Stundenplan eines einzelnen Tages verwalten kann.

Aufgaben:
- Erstelle eine Struktur `Time` (Stunde und Minute) für die Uhrzeit. Schreibe dafür eine Ein- und eine Ausgabefunktion (Format: `"08:40"`).
- Erstelle eine Struktur `Lesson` die speichert:
  - ob es eine Freistunden ist (`bool` Wert),
  - die Fachbezeichnung (String),
  - die Startzeit (Struktur `Time`), und
  - die Endzeit  (Struktur `Time`).
	
- Schreibe für die Struktur `Lesson` eine Ein- und Ausgabefunktion unter der Verwendung (Aufruf) der bereits vorhandenen Funktionen für die Struktur `Time`.
- Erstelle ein Array aus 10 `Lesson` Strukturen. Ermögliche die Eingabe für alle 10 Stunden und gib den Stundenplan des ganzen Tages anschließend aus.
- Schreibe eine Funktion die durch ihren Rückgabewert anzeigt wie viele Unterrichtsstunden an diesem Tag sind.
- Schreibe eine Funktion die das Stundenplan Array übergeben bekommt und feststellt, wann am diesen Tag die letzte Stunde endet.
- Erweitere so dass der Stundenplan einer ganzen Woche verwaltet werden kann.



---