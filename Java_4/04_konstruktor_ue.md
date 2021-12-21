---
title: Vererbung
subtitle: Übung Konstruktoren
tags: [assignment,4BHELS]
---

#### Übung (A/B Erweiterung)

[Link zum Skriptum](https://matejkaf.github.io/Doc/Java_4/03_konstruktor.html)

Erweitere die Klasse `A` um eine private `int` Instanzvariable. Ergänze Konstruktoren (in beiden Klassen) mit einem Parameter um diese Instanzvariable auf einen Startwert setzen zu können.

---

#### Übung (Konstruktor in Person und Schüler)

[Link zum Skriptum](https://matejkaf.github.io/Doc/Java_4/03_konstruktor.html)

Implementiere Konstruktoren in den Klassen `Person` und `Schueler`. Dabei soll der Konstruktor von `Person` vom Konstruktor in `Schueler` aus aufgerufen werden.

---

#### Übung (Datum)

[Link zum Skriptum](https://matejkaf.github.io/Doc/Java_4/03_konstruktor.html)

Schreibe die Klasse `Datum`, mit Tag, Monat und Jahr. Die Instanzvariablen sind als `private` zu definieren.

Definiere per Vererbung die Klassen `DatumUsa` und `DatumEu` zur Unterstützung unterschiedlicher Datumsausgabeformate:

- EU: `Tag.Monat.Jahr`
- USA: `Monat/Tag/Jahr`


Aufgaben:

- Implementiere `toString` Methoden, so dass jedes Datum im entsprechenden Format ausgegeben werden kann.
- Implementiere Konstruktoren zum setzen der Instanzvariablen. Der Konstruktor der `Datum` Klasse soll dabei immer aufgerufen werden (ist ohnehin notwendig denn man kann nicht auf die `private` Variablen der Basisklasse zugreifen).

---

