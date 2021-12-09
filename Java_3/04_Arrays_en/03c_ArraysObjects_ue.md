---
title: Arrays aus Objekten
subtitle: Übungen
tags: [assignment,java,array,3AHITS]
---

#### Übung (Gemeinden)

Es sollen die Daten von Gemeinden verwaltet werden. Von jeder Gemeinde ist bekannt:

- der Name
- die Einwohnerzahl
- die Fläche (in km²)

Erstelle eine Klasse `Gemeinde` dafür.

Erstelle ein Array aus ca. 10 Gemeinden [siehe Liste der Gemeinden](http://www.gemeinden.at/gemeinden/bezirk/404/braunau-am-inn) und speichere dieses als Instanzvariable in einer Klasse `Bezirk`.

Implementiere in der Klasse `Bezirk`

- Methode `grFläche`: suche die flächenmäßig größte Gemeinde und gibt diese Fläche zurück.

- Erstelle eine Methode `finde` die den Gemeindenamen übergeben bekommt, diese Gemeinde im Array sucht und eine Referenz auf das Objekt zurückgibt. Kann der Name nicht gefunden werden soll `null` zurückgegeben werden.

- Erstelle eine Methode `alleBeginnendMit` die ein Array aus Gemeindenamen (Datentyp: `String`) zurückgibt. Übergabeparameter ist ein Buchstabe, alle Gemeinden die mit diesem Buchstaben beginnen sollen in dem Rückgabearray enthalten sein.

- Erstelle eine Methode `getEinwohner`, diese erhält ein Array aus Gemeindename übergeben und liefert als Rückgabe ein Array gleicher Länge mit den Einwohnern dieser Gemeinden.

- Erstelle eine Methode `sortByEinwohner` die das Array nach der Einwohnerzahl in absteigender Reihenfolge sortiert.
- Erstelle eine Methode `sortByName` die das Array nach dem Gemeindenamen in aufsteigender Reihenfolge sortiert.

---