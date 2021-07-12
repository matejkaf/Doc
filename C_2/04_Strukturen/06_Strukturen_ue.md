---
title: Rezeptverwaltung
subtitle: Übung
tags: [C_2, assignment]
---

Ein kreativer Koch experimentiert gerne mit veränderten Zutaten, entfernt bisherige und fügt neue hinzu.

<img src="fig/Kaiserschmarren.jpg" alt="Kaiserschmarren" style="zoom:20%;" />

Ein Rezept besteht aus Zutaten und eine Zutat besteht aus dem Namen (Bsp.: Mehl), einer Menge (Bsp.: 100) und einer Mengenbezeichnung (Bsp.: g).

Das Programm soll im Endausbau das beliebige Ändern eines Rezepts ermöglichen.

---

#### Übung (Rezeptzutaten)

Schreibe ein Programm das die Zutaten für ein Rezept verwalten kann. Es gibt maximal 10 Speicherplätze für Zutaten (Array). Jeder Speicherplatz kann belegt oder frei sein. Für das Rezept zählen nur die belegten Speicherplätze, die freien können verwendet werden um neue Zutaten hinzuzufügen. 

```c
struct Zutat {
  char name[50];	// Name der Zutat
  char bez[5];		// Mengenbezeichnung
  double menge;
  bool belegt;      // false..frei, true..belegt
};
```

Schreibe zuerst Funktionen zur Ein- und Ausgabe einer Zutat und teste mit dem ersten Array Element.



---

#### Übung (Benutzeroberfläche)

Die Benutzeroberfläche des Programms wird durch Textkommandos gesteuert (wie eine Kommandozeile):

- `i3`
Input – Eingabe für einen der 10 Speicherplätze (diese sind von 0–9 nummeriert)
- `?7`
Frei? – Ausgabe ob Speicherplatz an Index 7 frei ist.
- `r4`
Remove – Entfernen einer Zutat an Index 4. Der Speicherplatz wird frei.
- `p3`
  Print – Ausgabe der Zutat an Index 3, bzw. *frei* wenn nicht belegt.
- `pa`
  Ausgabe aller 10 Zutaten. Speicherplätze die frei sind werden gekennzeichnet, es werden für diese keine Daten ausgegeben.
- `pb`
  Ausgabe aller belegten Zutaten.
- `??`
  First free – sucht den ersten freien Index und gibt diesen aus. Berücksichtige auch, dass alle Speicherplätze belegt sein können.
- `e`
  End. Programm beenden.

---

**Hinweise:**

Eine einzelne Ziffer (Datentyp `char`) kann durch eine Subtraktion des ASCII Codes von `'0'` (Null) in eine Zahl gewandelt werden:

```c
char command[16];
printf("Kommando: ");
gets_s(command);
if(command[0]=='i') 
{
    // Index 1 enthält den Index als Ziffer
    int idx = command[1] - '0';
}
```



---

#### Übung (Portionen)

Ergänze das Programm um die Möglichkeit die Anzahl der Portionen anzupassen. Bsp.: Wenn das Rezept für 4 Portionen ist, kann das Programm alle Mengenangaben für 6 Portionen umrechnen und ausgeben.

Befehl: `u46` – von 4 auf 6 Portionen umrechnen



---

#### Übung (Erweiterungen)

Implementiere die Befehle:

- `m3to4`
Move. Verschiebt die Zutat 3 zur Zutat 4. Die Zutat 3 wird frei, die Zutat 4 überschrieben

- `c7to1`
Copy. Kopiert die Zutat 3 über Zutat 4.

- `f3`
Free. Rückt alle Zutaten ab Index 3 um eins nach rechts. Der Index 3 wird frei, die Zutat 9 geht (falls belegt) verloren.

- `d2`
Delete. Rückt alle Zutaten ab Index 2 um eins nach links. Die Zutat 2 geht verloren. Zutat 3 wird zur Zutat 2, usw.

- `o`
Optimize. Alle Rezepte werden nach links aufgerückt, so dass keine Lücken in der Liste existieren.
Die Reihenfolge der Zutaten soll sich nicht ändern.


---


