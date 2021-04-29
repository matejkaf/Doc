---
title: Vererbung
subtitle: Übung
tags: [assignment]
---



#### Übung (Klasse Schueler)

Implementiere die Klasse `Schueler` mit Hilfe von Vererbung von der Klasse `Person`. Die Person speichert den Namen und ein Schüler hat zusätzlich eine Katalognummer.

Weiters:

- Füge die Sozialversicherungsnummer hinzu.
- Ergänze den Jahresnotendurchschnitt.


Die Klasse `Schueler` und die Klasse `Person` soll eine `toString` Methode haben. In der Klasse `Schueler` soll die Implementierung von `toString` aus der Klasse `Person` aufgerufen werden.


Lege Objekte von beiden Klassen an und verwende alle Instanzvariablen und Methoden.

---



#### Übung (Datum)

Schreibe die Klassen `Datum`, `DatumUsa` und `DatumEu` zur Unterstützung unterschiedlicher Datumsformate.

- EU: `Tag.Monat.Jahr`
- USA: `Monat/Tag/Jahr`


Aufgaben
- 
Schreibe `toString` Methoden, so dass jedes Datum im entsprechenden Format ausgegeben werden kann.
- Implementiere Konstruktoren zum setzen der Instanzvariablen. Der Konstruktor der `Datum` Klasse soll dabei immer aufgerufen werden.




---

#### Übung (Schubkarre)

Eine Schubkarre hat eine aktuelle Beladung (Instanzvariable – in kg).
Definiere alle Instanzvariablen als `private`.

Schreibe:

- den Konstruktor,
- Methode `beladen`, Rückgabe: `boolean`,
- Methode `entladen`, Rückgabe: `boolean`,
- Methode `fuellstand`, Rückgabe: `double`.

Es sollen  keine Überprüfungen beim be- bzw.\ entladen durchgeführt werden, der Rückgabewert ist immer `true`.

- 
Leite von der Klasse `Schubkarre` die Klasse `SichereSchubkarre` ab.
Diese kann eine gewisse maximale Last aufnehmen (weitere Instanzvariable).

Die Methoden `beladen` und `entladen` sollen überschrieben und so implementiert werden, dass 
- ein Beladen über die maximale Beladung und 
- ein Entladen von mehr als der geladenen Menge nicht möglich ist 

(in diesen Fällen wird nichts an der Ladung geändert und es soll der Rückgabewert `false` verwendet werden).

Verwende so viel wie möglich von der Klasse `Schubkarre`.



---

#### Übung (Klasse InterTime)

Schreibe eine Klasse `Time` mit den Eigenschaften Stunde, Minute. 
Definiere 2 Ausgabeformate: 24h und 12h.

- [24h Modus: ] 09:13 Uhr, 21:13 Uhr.
- [12h Modus: ] 09:13 am, 09:13 pm.


Definiere eine Methode mit der das Ausgabeformat gewählt werden kann und eine Methode `toString()` für die Ausgabe selbst.

Leite von der Klasse `Time` eine Klasse `InterTime` ab die es ermöglichen soll auch die Zeitzone zu berücksichtigen. Verwende die weltweit gültige koordinierte Weltzeit (UTC, [Universal Time Coordinated](http://de.wikipedia.org/wiki/Koordinierte_Weltzeit)) UTC-12h bis UTC+14h.


- UTC+0h ... Westeuropäische Zeit – auch Greenwich Mean Time / GMT (England, Portugal, ...).
- UTC+1h ... Mitteleuropäische Zeit (Österreich, ...).

Implementiere in `InterTime` eine Methode `compareTo()` die es ermöglicht zwei Zeiten zu vergleichen.
Die Methode soll herausfinden ob eine Zeit vor oder nach einer anderen liegt, bzw.\ ob die Zeiten gleich sind (Rückgabewerte: –1, 0, 1​).

---







