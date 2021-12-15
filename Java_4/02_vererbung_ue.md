---
title: Vererbung
subtitle: Übung
tags: [assignment,4BHELS]
---

#### Übung (Klasse Schueler)

Implementiere die Klasse `Schueler` mit Hilfe von Vererbung von der Klasse `Person`. Die Person speichert den Namen und ein Schüler hat zusätzlich eine Katalognummer.

Weitere Ergänzungen in der jeweils passenden Klasse:

- Füge die Sozialversicherungsnummer hinzu.
- Ergänze den Jahresnotendurchschnitt.


Die Klasse `Schueler` und die Klasse `Person` sollen eine `toString` Methode haben. In der Klasse `Schueler` soll die Implementierung von `toString` aus der Klasse `Person` aufgerufen werden – das geht mit `super.toString()`.

Lege Objekte von beiden Klassen an und verwende alle Instanzvariablen und Methoden.

---

#### Übung (Vererbungshierarchien)

Geerbt werden kann immer nur von einer einzigen Klasse, aber wie oft Vererbung hintereinander ausgeführt wird ist nicht begrenzt. Außerdem kann eine Klasse die Basisklasse für mehrere abgeleitete Klassen sein. Erstelle von der Klasse `Schueler` 2 weiter abgeleitete Klassen:

- `OeffArb` – Anzahl der freien Nachmittage
- `Jahrling` – Name der Herkunftsschule

Mit jeweils einer eigenen Instanzvariable und passe die `toString` Methode entsprechend an.

---

