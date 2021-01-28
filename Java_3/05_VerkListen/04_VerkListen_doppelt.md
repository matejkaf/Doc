---
title: Doc
---

# Doppelt verkettete Liste

Eine einfach verkettete Liste kann verbessert werden:

- Die `start` Referenz befindet sich in keinem Knoten. Dies führt zu Spezialbehandlungen (z.B. Löschen eines Elements – wenn dieses das Erste ist).
Lösung: Fixer Knoten ganz am Anfang der keine Daten enthält (`head`, Dummy Knoten).
- Zugriff auf das Ende der Liste schwierig.
Lösung: Dummy Knoten am Ende (`tail`).
- Bewegen nur in eine Richtung möglich.
Lösung: `prev` Referenz die auf den Vorgängerknoten verweist.


Dadurch entsteht eine **doppelt verkette Liste** deren Knoten zwei Referenzvariablen enthält, eine zum Vorgänger (`prev`) und eine zum Nachfolger (`next`).


Ein Knoten ganz am Anfang  `head` und einer ganz am Ende  `tail` enthalten keine Daten (=Dummy Knoten). Sie vereinfachen die Programmierung bei Spezialfällen (z.B. leere Liste).

Wobei `head` sich selbst als Vorgänger und `tail` sich selbst als Nachfolger hat. Die leere Liste enthält nur diese beiden Dummy Knoten.


Im Vergleich zur einfach verketteten Liste ist leichter zu implementieren:

- Einfügen am Ende
- Einfügen vor einem bestimmten Knoten
- Löschen eines Knotens



---

**Übung (Doppelt verkettete Liste):**
Implementiere eine Klasse `DoubleNode` und `DoubleList`.

Schreibe die Methoden:

- 
`insertBefore(Node node,Node newNode)`
- 
`insertAfter(Node node,Node newNode)`
- 
`prepend(Node newNode)`
- 
`append(Node newNode)`
- 
`remove(Node node)`

---



