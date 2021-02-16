---
title: Doc
tags: [assignment, c, structure ]
---

# Dynamische Einkaufsliste (Übung)



**Übung (Einkaufsliste):**

 Verwende folgende Strukturdefinition:

```c
struct Einkauf
{
    char bez[40]; // Artikelbezeichnung
    int menge; // Stück, Gramm, Kilo, etc.
    double preis; // Preis für ein Stück
};
```

Aufgabenstellungen:

- Schreibe eine Funktion `eingabe` die einen Zeiger auf `Einkauf` als Parameter übergeben bekommt und dem Anwender die Eingabe aller 3 Komponenten ermöglicht.

- Schreibe eine Funktion `ausgabe` die einen Zeiger auf `Einkauf` als Parameter übergeben bekommt und alle 3 Komponenten in einer Zeile ausgibt – zusätlich soll noch der Gesamtpreis ausgegeben werden (in der gleichen Zeile).

- Lege im Hauptprogramm eine einzelne Strukturvariable an und teste damit die 2 Funktionen.


---



**Übung (Einkaufsliste):**

Entferne den Inhalt des Hauptprogramms. Lege ein Array aus `Einkauf` Elementen an.
Die Größe des Arrays soll eine globale Konstante sein. 
Weiters ergänze in der Struktur Einkauf die Definition einer Komponente `belegt` mit dem Datentyp `bool`.
Die Bedeutung der `belegt` Komponente wird später erklärt.

Das Programm sieht dann folgendermaßen aus:

```c
#define MAXANZ 10  // maximale Größe

struct Einkauf
{
    bool belegt; // <<<!!!
    char bez[40];
    int menge;
    double preis;
};

// Implementierung der Funktion eingabe
// ...

// Implementierung der Funktion ausgabe
// ...

void main()
{
	Einkauf liste[MAXANZ];
}
```


Aufgabenstellung:
[(a)]

-
Schreibe eine Funktion `allefrei` (Übergabeparameter ist das Array) die im Array `liste` alle `belegt` Komponenten auf `false` setzt.
Rufe diese Funktion am Anfang des Programms auf.

-
Schreibe eine Funktion `anzahlfrei` (Übergabeparameter ist das Array).
Diese Funktion soll zurückgeben in wie vielen Array-Elementen die `belegt` Komponente `false` ist.\\
Zum Test: 
Wenn die Funktion `anzahlfrei` nach der Funktion `allefrei` aufgerufen wird sollte der Rückgabewert 10 (bzw. `MAXANZ`) sein.

-
Ergänze in der Funktion `eingabe` das setzen der `belegt` Komponente auf `true`.\\
Bedeutung: Durch die Eingabe von Werten wird dieses Element im Array belegt.

Teste die Funktion `eingabe` mit den Array Elementen an Index 0, 2 und 4 – die anderen Speicherplätze sollen noch frei bleiben.

-
Ergänze einen weiteren Aufruf der Funktion `anzahlfrei` am Ende des Programms, der Rückgabewert sollte nun 7 (bzw. `MAXANZ-3`) sein.



---




**Bedeutung der Variable `belegt` in der Struktur Einkauf:**




Die Aufgabenstellung an die Einkaufsliste wird erweitert:


-
Die Einkaufsliste hat ein variable Länge von 0 bis `MAXANZ`.
-
Anwender kann neue Einträge hinzufügen.
-
Anwender kann Einträge entfernen.


Um diese Anforderungen im Programm umsetzen zu können wird die `belegt` Variable benötigt.

Anfangs ist `belegt` für alle Array-Elemente auf `false`, das bedeutet alle Elemente (=Speicherplätze) sind frei und die Einkaufsliste ist noch leer.

Soll nun ein neuer Einkauf hinzugefügt werden wird im Array das erste Element gesucht in dem die `belegt` Variable `false` ist und dieses Element dann für die Eingabe verwendet. Sobald die Struktur an dieser gefundenen Array Position Werte enthält wird auch die `belegt` Variable auf `true` gesetzt.

Zum Löschen eines Eintrags in der Einkaufsliste wird die entsprechende `belegt` Variable auf `false` gesetzt.

Wird die Einkaufsliste in einer Schleife bearbeitet (z.B. für die Ausgabe) so dürfen nur jene Index-Positionen berücksichtigt werden deren `belegt` Komponente `true` ist.









**Übung (Einkaufsliste II):**

Hinweis:
Teste diese Aufgabenstellung mit dem durch die vorherige Übung hergestellten Zustand (Elemente an Index  0, 2 und 4 sind belegt, alle anderen frei).

[(a)]

-
Schreibe eine Funktion `neu` (Übergabeparameter ist das Array aus `Einkauf` Elementen) die den Index des ersten freien Speicherplatz sucht.
Rückgabewert ist der Index dieses Speicherplatzes.
Teste im Hauptprogramm und rufe die Funktion `eingabe` für den zurückgegebenen Index auf.
Berücksichtige auch den Fall, dass alles belegt ist (Hinweis: Rückgabewert $-1$ verwenden und im Hauptprogramm darauf abfragen).


-
Schreibe eine Funktion `gesamtausgabe` die die gesamte Einkaufsliste ausgibt.
Achtung:
Nur die belegten Speicherplätze berücksichtigen.
Gib am Ende auch die Anzahl der Einträge und die gesamten Kosten des Einkaufs aus.
Ist die Einkaufsliste noch ganz leer gib aus: `Einkaufsliste ist noch leer.`



---




**Übung (Einkaufsliste Menü):**

Steuere das Programm über ein Auswahl-Menü:

- Eintrag hinzufügen
- Eintrag Löschen (nach Index)
- Alle Einträge ausgeben
- Programm beenden


Anfangs sind alle Speicherplätze frei.
Bei *Eintrag hinzufügen* wird der erste freie Speicherplatz gesucht und dieser dann für die Eingabe verwendet.
Bei *Eintrag Löschen (nach Index)* fragt das Programm nach dem Index des Speicherplatzes und setzt diesen dann auf frei (damit wird dieser in der Ausgabe nicht mehr angezeigt und kann für eine zukünftige Eingabe eines neuen Einkaufslisten-Eintrags verwendet werden).
*Alle Einträge ausgeben* gibt alle belegte Speicherplätze aus.

---




**Übung (Einkaufsliste Löschen nach Artikelbezeichnung):**

Erweitere das Programm um eine Funktion und einen Menüpunkt zum Löschen eines Eintrags.
Dabei wird zur Eingabe der Artikelbezeichnung aufgefordert, diese wird in der Einkaufsliste gesucht und falls gefunden als frei gekennzeichnet.
Achtung: Nur die belegten Speicherplätze prüfen.

---



**Übung (Einkaufsliste Durchblättern):**

Ergänze Menüpunkt und Funktion für:
Durchblättern durch die Einkaufsliste. 
Es wird immer nur ein Eintrag angezeigt – mit einer Nummer um den wievielten es sich handelt.
Mit der Taste `'v'` ("`vor"') kommt man zum nächsten Eintrag, mit `'z'` ("`zurück"') zum vorhergehenden, die Taste `'e'` kehrt zum Menü zurück.
Natürlich werden nur die belegten Speicherplätze angezeigt.
Zusätzlich kann mit der Taste `'l'` ("`löschen"') der gerade angezeigte Eintrag gelöscht werden.


---


