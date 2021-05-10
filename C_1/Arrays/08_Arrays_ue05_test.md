---
title: Arrays
subtitle: Übung Testnoten
tags: [assignment,array,1CHELS]
---

Folgende Übungen bilden eine aufeinander aufbauende Aufgabenstellung.

---

#### Übung (Testnoten)

Schreibe ein Programm das ein Testergebnis analysieren kann.

Die Noten sind in einem int Array gespeichert, dieses ist 36 (maximale Schüleranzahl) groß. Da nicht jede Klasse/Gruppe 36 Schüler hat gibt eine weitere Variable (`schueler`) an wie viele Schüler am Test teilgenommen haben. Über die Anzahl der Schüler hinausgehende Elemente im Array haben keine Bedeutung und müssen ignoriert werden.

```c
int noten[36]={5,3,4,2,1,5,2,1,1,1,2,5,1,2,4,1,1};
int schueler=17;
int anzahl[5];
double prozent[5];
```

Erstelle ein Programmgrundgerüst mit obigen Programmzeilen.



---

#### Übung (Anzahl ermitteln)

Schreibe eine Funktion die die Anzahl einer bestimmten Note ermittelt.

Anwendungsbeispiel:
```c
// ermittle Anzahl der 3er
anzahl[2] = get_anzahl(noten, schueler, 3); 
```
Rufe diese Funktion in einer Schleife auf um alle Werte des Arrays `anzahl` zu ermitteln.
In `anzahl[0]` soll die Anzahl der 1er, in `anzahl[1]` die Anzahl der 2er, usw. stehen.



---

#### Übung (Prozent ermitteln)

Schreibe eine Funktion die aufgrund der Anzahl der Noten und der Gesamtzahl der Schüler alle Prozentzahlen ermittelt und in das Array `prozent` schreibt.
Die Funktion soll so aufgerufen werden:

```c
rechne_prozent(anzahl, schueler, prozent); 
```
Dabei soll in `prozent[0]` der Prozentanteil der Schüler mit 1er, in `prozent[1]` der Prozentanteil der Schüler mit 2er, usw. stehen.



---
#### Übung (Ausgabe)

Schreibe eine Funktion die das Ergebnis ausgibt. Der Aufruf soll so aussehen:

```c
print(noten, schueler, anzahl, prozent);
```
Die Ausgabe soll folgendes Aussehen haben:

| *Note* | *Anzahl* | *Prozent* |
| ------ | -------- | --------- |
| sehr gut 		| 7 | 41.2% |
| gut 			| 4 | 23.5% |
| befriedigend 	| 1 | 5.9% |
| genügend 		| 2 | 11.8% |
| nicht genügend 	| 3 | 17.7% |



---
#### Übung (Eingabemöglichkeit)

Erweiterung: Die Noten können eingegeben werden. Abschluss durch Eingabe von 0. Es können maximal 36 Noten eingegeben werden. Eine Eingabe von ungültigen Noten ist zu verhindern.



---
#### Übung (Balkendiagramm)

Stelle die Notenanteile in einem horizontalen Balkendiagramm dar:

```
1er *******
2er **
3er ******
4er ****
5er *
```

