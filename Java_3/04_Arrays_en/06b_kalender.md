---
title: ArrayList
subtitle: Übung Kalender
tags: [3BHELS]
---



Schreibe ein Programm das **Kalendereinträge** mit **Datum** (Monat + Tag) einem beliebigen Text (z.B. Mathematik) und einer Kategorie in verwalten kann.

Kategorien:

- Schularbeit
- Test
- Hausübung
- Privat



Schreibe dafür die Klassen:

- `Datum`, enthält
  - Tag
  - Monat
  - Konstruktor und `toString` Methode
  - Methode `boolean istVor(Datum d)` in  der Klasse `Kalender` die überprüft ob das lokale Datumsobjekt vor dem übergebenen Datumsobjekt ist.
- `KalenderEintrag`, enthält
  - Objekt der Klasse `Datum`
  - Kategorie
  - Text
  - Konstruktor und `toString` Methode
- `Kalender`, enthält
  - ArrayList aus `KalenderEintrag`
  
  - Methode `add` mit Parametern Tag, Monat, Kategorie und Text. Fügt einen neuen Kalendereinträg hinzu.
  - Methode `print` die alle Einträge ausgibt
  - Methode `print` mit Parametern Tag, Monat. Diese gibt alle Einträge aus die nach dem übergebenen Datum sind. Verwende dazu die vorher implementierte Methode `istVor`.
  - Method `count` die als Parameter eine Kategorie und ein `Datum` übergeben bekommt. Die Methode soll zählen wie viele Einträge dieser Kategorie nach dem übergebenen Datum vorhanden sind. Der Rückgabewert der Methode gibt diese Anzahl an.
  - Methode `delete(kategorie)`: entfernt alle Einträge der angegebenen Kategorie aus der Liste.
  - Methode `print`mit Parametern Tag, Monat, Kategorie und Text. Die Parameter definieren Filter. Für Tag, Monat und Kategorie ist eine exakte Übereinstimmung notwendig. Bei Text genügt es, dass dieser enthalten ist. Wildcards können mit –1 bzw mit * definiert werden.