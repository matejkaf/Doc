---
 title: Stundenplan
subtitle: Übung
tags: [C_2, assignment]
---

#### Übung (Stundenplan)

Das Ziel ist ein Programm zu schreiben, das den **Stundenplan eines einzelnen Tages** verwalten kann.

Aufgaben:
- Erstelle eine Struktur `Time` (Stunde und Minute) für die Uhrzeit. Schreibe dafür eine Ein- und eine Ausgabefunktion (Format: `"08:40"`).
- Erstelle eine Struktur `Lesson` die speichert:
  - ob es eine Freistunden ist (`bool` Wert) – `true`: Freistunde – `false`: Unterrichtsstunde
  - die Fachbezeichnung (String), und
  - die Startzeit (Struktur `Time`).
- Schreibe für die Struktur `Lesson` eine Ein- und Ausgabefunktion unter der Verwendung (Aufruf) der bereits vorhandenen Funktionen für die Struktur `Time`.
- Erstelle ein Array aus 10 `Lesson` Strukturen. Ermögliche die Eingabe für alle 10 Stunden.
  - Falls der Unterricht  früher als in der 10. EH endet so sind dies Freistunden
  - Die Eingabe von `"f"`  soll bedeuten, dass es sich um eine Freistunde handelt.
- Gib den Stundenplan des ganzen Tages aus.
- Schreibe eine Funktion die durch ihren Rückgabewert anzeigt wie viele Unterrichtsstunden an diesem Tag sind.



---

#### Übung (Stundenplan Erweiterungen)

- Schreibe eine Funktion die feststellt wann die letzte Stunde endet (Stunde dauert 50 Minuten). Der return Wert dieser Funktion soll eine Struktur vom Typ `Time` sein.
- Erweitere so dass der Stundenplan einer ganzen Woche verwaltet werden kann.

---