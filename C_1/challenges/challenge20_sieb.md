---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Arrays – Sieb des Eratosthenes

#### Übung (Sieb des Eratosthenes)

Eine Primzahl ist eine natürliche Zahl größer als eins, die nur durch sich selbst und durch 1 ganzzahlig teilbar ist. Die kleinsten Primzahlen sind:

```
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, ...
```

Ein Verfahren zum Ermitteln von Primzahlen ist nach dem griechischen Mathematiker Eratosthenes von Kyrene (3. Jahrhundert v. Chr.) benannt, es war allerdings schon vor seiner Zeit bekannt.

Funktionsweise:
- Man nimmt eine gewisse Anzahl von Zahlen, z.B. 0–100. Alle diese Zahlen sind zu Beginn potentielle Primzahlen.
-  Beginne bei 2, diese ist eine Primzahl, alle Vielfachen davon können daher keine Primzahlen sein (denn dann sind sie durch 2 dividierbar). Daher werden alle Zahlen, die Vielfache von 2 sind, als "nicht Primzahlen" markiert.
- Nun geht man zur nächsten Zahl, also 3, und prüft ob diese noch als Primzahl markiert ist, falls ja (was für 3 der Fall ist), werden wiederum alle Vielfachen dieser Zahl (9, 12, 15, ...) gestrichen.
- In gleicher Weise verfährt man mit 4, 5 ,6,... usw. bis man alle Zahlen durch hat.  Jene Zahlen, die bis zum Schluss als Primzahlen markiert bleiben, sind tatsächlich Primzahlen.


Aufgaben:

- Schreibe ein Programm das alle Primzahlen bis 100 nach diesem Verfahren ermittelt und ausgibt. Nimm dafür ein Array aus `int`, der Index entspricht der Zahl. Im Array wird gespeichert ob es sich um eine Primzahl (1) handelt oder nicht (0).
- Überlege wie Du dieses Programm optimal machen kannst, d.h. es möglichst wenig Schleifendurchläufe benötigt.
- Zeige mit Hilfe des Programms dass es 1229 Primzahlen bis 10000 gibt.

---

