---
title: Sieb des Eratosthenes
description: Sieb des Eratosthenes in Java implementieren. 
cmds: ['md_html.bash','md_html.bash --small']
tags: [java, array, challenge]
type: assignment
---

**Übung (Sieb des Eratosthenes):**

Sollen gleich mehrere Primzahlen gefunden werden gibt es ein schnelles Verfahren das nach dem griechischen Mathematiker Eratosthenes von Kyrene (3. Jhdt. v. Chr.) benannt ist.

Funktionsweise:

- 
Man nimmt eine gewisse Anzahl von Zahlen, z.B. 0–100. Alle diese Zahlen sind zu Beginn potentielle Primzahlen.
- 
Beginne bei 2, diese ist eine Primzahl, alle Vielfachen davon können daher keine Primzahlen sein (denn dann sind sie ja durch 2 dividierbar). Daher werden alle Zahlen, die Vielfache von 2 sind, als "nicht Primzahlen" markiert.
- 
Nun geht man zur nächsten Zahl, also 3, und prüft ob diese noch als Primzahl markiert ist, falls ja (was für 3 der Fall ist), werden wiederum alle Vielfachen dieser Zahl ($9, 12, 15, \ldots$) gestrichen.
- 
In gleicher Weise verfährt man mit $4, 5 ,6,\ldots$ usw.\ bis man alle Zahlen durch hat. 
Jene Zahlen, die bis zum Schluss als Primzahlen markiert bleiben, sind tatsächlich Primzahlen.


Aufgaben:

- Schreibe ein Programm das alle Primzahlen bis 100 nach diesem Verfahren ermittelt und ausgibt.
Nimm dafür ein Array aus `boolean`, der Index entspricht der Zahl.
Im Array wird gespeichert ob es sich um eine Primzahl (`true`) handelt oder nicht (`false`).
- Zeige mit Hilfe des Programms dass es 1229 Primzahlen in 2-10000 gibt.
- Das Verfahren lässt sich stark optimieren:
  - Ist z.B. gerade die Zahl $7$ dran, so wurden bereits alle Zahlen $<7$ als Multiplikationsfaktoren berücksichtigt ($2\cdot7, 3\cdot7, ..., 6\cdot7$). Der Markierprozess kann daher an der Stelle $7^2$ begonnen werden. 
  - Mit dem gleichen Argument muss die Überprüfung auch nicht bis zur letzten Zahl fortgesetzt werden, sondern es kann abgebrochen werden wenn das Quadrat der Zahl bereits außerhalb des Arrays liegt.
  - Welcher Geschwindigkeitsgewinn lässt sich erzielen (du musst möglicherweise den Bereich vergrößern in dem nach Primzahlen gesucht wird).


---
