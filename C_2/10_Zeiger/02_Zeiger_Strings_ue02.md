---
title: Zeiger und Strings
subtitle: Allgemeine Übungen
description: Und das ist dann noch die allgemeine Beschreibung
tags: [assignment,2AHELS,c,pointer,strings,intro]
---

**Übung (Umgekehrt ausgeben):**

Schreibe eine Funktion die einen String in umgekehrter Reihenfolge ausgibt. `"lager" --> "regal"`

---

**Übung (Ziffern):**

Gegeben: Ein String aus Ziffern, zum Bsp. `00033040500000340000`

- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 vorkommt.
- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 hintereinander am Anfang vorkommt.
- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 hintereinander am Ende vorkommt.
- Schreibe eine Funktion die die Anzahl der Nullen in der längsten Folge von unmittelbar hintereinander liegenden Nullen ermittelt. 


---

**Übung (Twist):**
Schreibe eine Funktion `twist` die die Reihenfolge der Buchstaben eines Strings umdreht.
`"lager" --> "regal"`
Der als Parameter übergebene String soll durch die Funktion verändert werden. Es soll kein lokaler String als Zwischenspeicher angelegt werden.

---

**Übung (Suche erstes Zeichen aus mehreren):**
Schreibe eine Funktion `strcspn` (get span until character in string) mit 2 Strings `s1` und `s2` als Parameter.
Die Funktion sucht in `s1` das erste Vorkommen von irgendeinem der Zeichen in `s2`.
Der Return Wert ist ein Zeiger auf das gefundene Zeichen in `s1`.
Wird kein Zeichen gefunden soll `NULL` (entspricht dem Wert 0 für einen Zeiger) zurückgegeben werden.

Beispiel:

```
strcspn("Hallo Welt", "cde") --> 'e' (in Welt)
strcspn("3+4-9*2/4", "+-*/") --> '+'
```


---

**Übung (Weitere Aufgaben):**

- `strinsert` – ein Zeichen an einer Indexposition einfügen.
- `strdel` – ein Zeichen von einer Indexposition löschen.
- `strrotateright` – String um ein Zeichen nach rechts bewegen, letztes Zeichen kommt ganz nach vorne.
- `strstrinsert` – einen String in einen anderen String an einer Indexposition einfügen.




