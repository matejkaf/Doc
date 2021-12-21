---
title: Vererbung
subtitle: Übung Methoden
tags: [assignment,4BHELS]
---



#### Übung (Schubkarre)

[Link zum Skriptum](https://matejkaf.github.io/Doc/Java_4/05_methoden.html)

Die smarte Schubkarre ist die neueste Inovation für die Baustelle, vorbei sind die Zeiten wo die Schubkarre zusammenbricht weil man diese wieder einmal überladen hat. Deine Aufgabe ist die Software für die Smarte Schubkarre zu schreiben – mit Hilfe von Vererbung – in 2 Klassen `Schubkarre` und  `SmarteSchubkarre`.

Als ersten Schritt ist die Basisklasse `Schubkarre` zu implementieren. Diese hat die aktuell Beladung (kg) als Instanzvariable, diese soll `private` definiert werden.

Schreibe:

- den Konstruktor,
- Methode `beladen`, Parameter: Masse die geladen werden soll, Rückgabe: `boolean` (immer `true`, bekommt erst in der Smarten Schubkarre eine Bedeutung),
- Methode `entladen`, Parameter: Masse die entladen werden soll, Rückgabe: `boolean` (immer `true`, bekommt erst in der Smarten Schubkarre eine Bedeutung),
- Methode `getFuellstand`, Rückgabe: `double`, der aktuelle Füllstand.

Es sollen  keine Überprüfungen beim beladen bzw. entladen durchgeführt werden, der Rückgabewert ist daher  immer `true`.

Leite weiters per Vererbung von der Klasse `Schubkarre` die Klasse `SmarteSchubkarre` ab. Diese kann eine gewisse maximale Last aufnehmen (dies ist eine zusätzliche Instanzvariable in der Smarten Schubkarre).

Die geerbten Methoden `beladen` und `entladen` sollen **überschrieben** und so implementiert werden, dass 

- ein Beladen über die maximale Beladung und 
- ein Entladen von mehr als der geladenen Menge nicht möglich ist 

In diesen Fällen wird nichts an der Beladung geändert und es soll der Rückgabewert `false` verwendet werden. D.h. der Rückgawert zeigt an ob die En- bzw. Beldung ausgeführt werden konnte.

Verwende in `SmarteSchubkarre` so viel wie möglich von der Klasse `Schubkarre` geerbtes.

---

#### Übung (Klasse InterDateTime)

Schreibe eine Klasse `DateTime` mit den Eigenschaften Jahr, Monat, Tag, Stunde, Minute (alle `private`). 

Definiere 2 Ausgabeformate: 24h und 12h.

- 24h Modus:  `15.12.2021 09:13 Uhr`, `16.12.2021 21:13 Uhr`.
- 12h Modus: `2021-12-15 09:13 am`, `2021-12-17 09:13 pm`.

Definiere zwei Methoden mit der das Ausgabeformat gewählt werden kann `mode24` und `mode12`. Das Ergebnis von  `toString()` passt sich an den gewählten Modus an.

Implementiere in `DateTime` eine Methode `compareTo()` die es ermöglicht zwei Zeiten zu vergleichen. Die Methode soll herausfinden ob eine Zeit vor (Rückgabewert: –1) oder nach (Rückgabewert: 1) einer anderen liegt, bzw. ob die Zeiten gleich (Rückgabewert: 0) sind.

Erweitere per Vererbung:

Leite von der Klasse `DateTime` eine Klasse `InterDateTime` ab die es ermöglichen soll auch die Zeitzone zu berücksichtigen. Verwende die weltweit gültige koordinierte Weltzeit (UTC, [Universal Time Coordinated](http://de.wikipedia.org/wiki/Koordinierte_Weltzeit)) UTC-12h bis UTC+14h.


- UTC+0h ... Westeuropäische Zeit – auch Greenwich Mean Time / GMT (England, Portugal, ...).
- UTC+1h ... Mitteleuropäische Zeit (Österreich, ...).

Die Zeitzone soll bei `toString()` hinten angefügt werden. Beispiel für den gleichen Zeitpunkt in unterschiedlichen Zeitzonen

- `24.12.201 19:00 UTC+8:00` (z.B. in Peking)
- `24.12.201 14:00 UTC+3:00` (z.B. in Moskau)
- `24.12.201 12:00 UTC+1:00` (z.B. in Österreich/Winterzeit)

Überschreibe in `InterTime` die Methode  `compareTo()` und mach die notwendigen Anpassungen damit zwei Zeiten aus unterschiedlichen Zeitzonen korrekt verglichen werden können.

---

