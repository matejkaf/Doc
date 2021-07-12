---
title: Dynamische Schülerliste
subtitle: Übung
tags: [assignment, c, structure, C_2 ]
---


#### Übung (Schülerliste)

Schreibe ein Programm zur Verwaltung einer Schülerliste.
Pro Schüler sollen der Nachname, das Geschlecht und das Geburtsdatum gespeichert werden.
Maximal sind 10 Schüler in der Liste (diese Anzahl soll aber einfach über ein globale Konstante `MAXANZ` verändert werden können).

Anforderungen:

- Es soll eine variable Anzahl (0--`MAXANZ`) von Schülern verwaltet werden.
- Es sollen Schüler beliebig aus der Liste entfernt und hinzugefügt werden können.


Verwende ein Array aus Strukturen.

Verwende eine Strukturkomponente `belegt` (`bool`) – über diese kann für jedes Array-Element abgefragt werden ob an dieser Stelle der Speicherplatz frei oder belegt ist.

Anfangs sind alle Elemente frei.

- 
Erstelle das Grundgerüst mit Strukturdefinition und Array.

- Schreibe eine Funktion `firstFree` die den ersten freien Speicherplatz sucht und zurückgibt. Beachte den Fall, dass nichts frei ist.

- Schreibe eine Funktion für das Einfügen eines neuen Schülers. Diese Funktion soll nach einem freien Speicherplatz suchen und dann die Eingabe für **einen einzelnen Schüler** ermöglichen.

- Schreibe eine Funktion die den Inhalt aller belegten Speicherplätze ausgibt (die freien aber überspringt).

- Füge dem Programm ein Menü hinzu:
  - Einen Schüler hinzufügen
  - Alle Schüler ausgeben
  - Programm beenden

- Erweitere das Programm um eine Funktion und einen Menüpunkt zum Entfernen eines Schülers. Dabei wird zur Eingabe des Namens aufgefordert.

- Gib im Menü die Anzahl der gespeicherten Schüler aus.

- Füge eine Suche nach dem Alter hinzu.
  Ein Alter (in Jahren) wird eingegeben, das Programm gibt alle Schüler aus die älter sind.
  Hinweis: Das heutige Datum fix im Programm vorgeben.

- Erweiterung: Ob jünger oder älter kann angewählt werden.

- Ergänze:
  Menüpunkt zum Durchblättern durch die Schülerliste. 
  Es wird immer nur ein Schüler angezeigt – mit einer Nummer um den wievielten es sich handelt.
  Mit der Taste `'v'` ("`vor"') kommt man zum nächsten Schüler, mit `'z'` ("`zurück"') zum vorhergehenden, die Taste `'e'` kehrt zum Menü zurück.
  Natürlich werden nur die belegten Speicherplätze angezeigt.



---



#### Übung (Schülerliste  – Sonderaufgaben)

Möglichkeiten zur Erweiterung:

- 
Suchen nach Namen.

- 
Alphabetisch nach dem Namen sortieren.

- 
Für jeden Schüler wird automatisch eine Katalognummer ermittelt, die bei allen möglichen Änderungen (Einfügen, Löschen, Sortieren) immer auf dem aktuellsten Stand gehalten wird.

- 
Suchen mit Wildcards (\verb+?+ und \verb+*+), mit Blättern innerhalb des Suchergebnisses.


---



