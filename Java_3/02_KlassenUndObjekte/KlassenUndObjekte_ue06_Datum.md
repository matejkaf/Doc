---
title: Übung Klasse Datum
tags: [assignment,java, challenge]
use_math: true
---

#### Übung (Datum)

Implementiere eine Klasse `MyDate`, diese soll Tag (`day`), Monat (`month`) und Jahr (`year`) speichern.

- 
Schreibe das Grundgerüst für die Klasse, inklusive der Instanzvariablen.
- Implementiere einen Konstruktor mit Parametern (Tag, Monat und Jahr) für das Datum.
- Implementiere einen Default Konstruktor, unter Verwendung des bereits vorhandenen Konstruktors. Setze das Datum dabei z.B. auf dein Geburtsdatum.
- Implementiere eine Methode `String toStringShort()` die einen String in der Form `tt.mm.jjjj` (z.B. `11.09.2012`) zurückgibt. Tag und Monat soll immer zweistellig sein.
- 
Implementiere eine Methode `String toStringMonth()` die den Namen des Monats zurückgibt.
- 
Implementiere eine Methode `String toStringLong()` die einen String in der Form `11. Oktober 2009` zurückgibt. Verwende die Methode `toStringMonth` dafür.

---

#### Übung (Datum Erweiterung 1)

Erweitere die Klasse `MyDate`.

- Implementiere die Methode `boolean equals(MyDate d)` die prüft ob dieses Datum gleich dem übergebenen Datum liegt.

- 
Implementiere die Methode `boolean isBefore(MyDate d)` die prüft ob dieses Datum vor dem übergebenen Datum ist.
- 
Implementiere die Methode `boolean isAfter(MyDate d)` die prüft ob dieses Datum nach dem übergebenen Datum liegt. Implementiere mit Hilfe der Methoden `equals` und `isBefore`.

---

#### Übung (Datum Erweiterung 2)

Erweitere die Klasse `MyDate`.

- 
Implementiere die Methode `boolean isLeapYear()` die ermittelt ob es sich um ein Schaltjahr ([Schaltjahr Regeln](http://www.kalenderland.com/lexikon/schaltjahr-schaltregeln.php)) handelt.
- 
Implementiere die Methode `int dayNumber()` die ermittelt der wievielte Tag im Jahr es ist (dabei sollen auch Schaltjahre berücksichtigt werden).
- 
Schreibe eine Methode `void incrementToNextDay()` die das Datum auf das Datum des nächsten Tages setzt.
- 
Schreibe eine Methode `MyDate getNextDay()` die ein `MyDate` Objekt des nächsten Tages zurückgibt.
- Implementiere eine Methode `int getDiff(MyDate d)` die die Differenz zu einem als Parameter übergebenen Datum in Tagen berechnet. 
- Schreibe eine Methode `int printToDate(MyDate d)` die ausgibt wie viel Zeit bis zum angegebenen Datum vergehen wird.
Ausgabeformat: `2 years, 2 month, 1 week, and 6 days`


---

#### Übung (Datum Erweiterung 3)

Schreibe eine Methode `String getWeekday()` die den Wochentag ermittelt und als String zurückgibt (Montag, Dienstag, ...). Verwende die [Gaußsche Wochentagsformel](http://de.wikipedia.org/wiki/Gau%C3%9Fsche_Wochentagsformel)
Dafür ist die Methode 
`floor` aus `java.lang.Math`  ([Link](http://docs.oracle.com/javase/8/docs/api/java/lang/Math.html)) für die Gaußklammer $\lfloor x\rfloor$ notwendig.
$$
\lfloor x\rfloor = \mathtt{Math.floor(x)}
$$

---



