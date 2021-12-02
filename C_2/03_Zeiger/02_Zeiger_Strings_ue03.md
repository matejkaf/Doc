---
title: Zeiger und Strings
subtitle: Allgemeine Übungen
tags: [assignment,C_2,c,pointer,strings,intro,2AHITS]

---

#### Übung (Umgekehrt ausgeben)

Schreibe eine Funktion die einen String in umgekehrter Reihenfolge ausgibt. `"lager" --> "regal"`

---

#### Übung (Ziffern)

Gegeben: Ein String aus Ziffern, zum Bsp. `00033040500000340000`

- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 vorkommt.
- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 hintereinander am Anfang vorkommt.
- Schreibe eine Funktion die ermittelt wie oft die Ziffer 0 hintereinander am Ende vorkommt.
- Schreibe eine Funktion die die Anzahl der Nullen in der längsten Folge von unmittelbar hintereinander liegenden Nullen ermittelt. 


---

#### Übung (Twist)

Schreibe eine Funktion `twist` die die Reihenfolge der Buchstaben eines Strings umdreht.
`"lager" --> "regal"`
Der als Parameter übergebene String soll durch die Funktion verändert werden. Es soll kein lokaler String als Zwischenspeicher angelegt werden.

---

#### Übung (Suche erstes Zeichen aus mehreren)

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

#### Übung (Zeichen entfernen)

Schreibe eine Funktion `strdel` – die ein Zeichen von einer Indexposition entfernt.

Beispiel:

```c++
char str[] = "einXe";
strdel(str,3); // entfernt das X
```


---

#### Übung (Zeichen einfügen)

Schreibe eine Funktion `strinsert` die an einer beliebigen Stelle im String (gegeben durch einen Index) einen Buchstaben einfügt. Dazu werden alle dahinterliegenden Buchstaben um eins verschoben.

Beispiel: Einfügen von `k` in `funtion` an der Indexposition 3 ergibt `funktion`.

```c++
char str[10] = "funtion";
strinsert(str,3,'k');
```

---

#### Übung (Rotieren)

Schreibe 2 Funktionen zum String rotieren. Dabei werden alle Zeichen in eine Richtung (links oder rechts) geschoben. Das rausfallende Zeichen kommt auf der anderen Seite des Strings wieder rein.

- `strrotateleft`: "rotieren" → "otierenr"

- `strrotateright`: "rotieren" → "nrotiere"

---

#### Übung (String einfügen)

Schreibe eine Funktion `strstrinsert` – die einen String in einen anderen String an einer Indexposition einfügt. 

---

