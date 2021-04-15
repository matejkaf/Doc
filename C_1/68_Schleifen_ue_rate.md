---
title: Zahlenratespiel
tags: [assignment,1AHITS]
---



#### Übung (Erweitertes Zahlenratespiel)

Schreibe das Zahlenratespiel mit Hilfe von Schleifen.

Zur Erinnerung: das Programm erzeugt eine Zufallszahl aus einem bestimmten Zahlenbereich (z.B.\ zwischen 7 und 24), die der Anwender innerhalb einer begrenzten Anzahl von Versuchen (z.B.\ 4) erraten muss. 

Nach Eingabe einer Zahl kommt die Meldung

- `Meine Zahl ist groeszer`, oder 
- `Meine Zahl ist kleiner`, oder 
- `Bravo Zahl erraten`, oder
- `Leider nicht erraten`, falls alle Versuche aufgebraucht sind.


Verwende das folgende Programm-Grundgerüst:
```c
int start=7; // Anfang des Zahlenbereichs
int ende=24; // Ende des Zahlenbereichs
int versuche=4; // Anzahl der Versuche
int zahl; // Die zu erratene Zufallszahl
int rate; // Zahl die der Benutzer gerade raet
int durchgang; // Die Nummer des aktuellen Versuchs

srand(time(NULL));

zahl = rand()%(ende-start+1) + start;
// ...
```




---

#### Übung (Menü für Zahlenratespiel)

Die Erweiterung besteht darin, dass der Benutzer den Zahlenbereich (Start u. Ende) und die maximale Anzahl der Versuche selbst mit Hilfe eines **Menüs** einstellen kann. 
Das Menü soll so aussehen:

```
Zahlenbereich: 7...24
Versuche: 4 
Auswahl:
1 ... Spiel starten 
2 ... Zahlenbereich eingeben 
3 ... Anzahl der Versuche eingeben
e ... Ende
```


Durch Drücken der entsprechenden Taste wird der jeweilige Menüpunkt ausgeführt. Der Benutzer soll immer wieder zu diesem Menü zurückkehren.  Ändert sich der Zahlenbereich oder die Anzahl der Versuche, so soll dies auch im Menütext sichtbar werden.


Verwende zusätzlich zur letzten Aufgabe folgende Programmteile:
```c
char taste;

while (1) 
{
	// hier: Ausgabe des Menue-Texts
	taste=getch();
	if(taste=='e') {
		break;
	}
	if (taste=='1')
	{
		// ...
	}
	// ...
}
```
