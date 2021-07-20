---
title: Übungen
subtitle: if Challenges
tags: [assignment,challenge]
---



#### Übung (Schaltjahr II)

Verwende nur eine einzige `if` Bedingung (mit `&&` und `||`) um festzustellen ob ein Jahr ein Schaltjahr ist.

- Ein Jahr ist (meistens) ein Schaltjahr, wenn die Jahreszahl durch 4 teilbar ist (z.B. 2012). 
- Ausnahme 1: Durch 100 teilbare Jahreszahlen sind **keine** Schaltjahre (z.B. 1900). 
- Ausnahme 2: Durch 400 teilbare Jahreszahlen sind **immer** Schaltjahre (z.B. 2000).

---

#### Übung (Sortieren)

Schreibe ein Programm das 3 Zahlen einliest und der Größe nach sortiert wieder ausgibt.

Hinweis: bringe die 3 Werte durch paarweises vertauschen der Werte in die richtige Reihenfolge.

Zum Vertauschen der Werte zweier Variablen braucht man eine Hilfsvariable (im Beispiel t) um einen Wert der beiden Werte zwischenspeichern zu können.

Dieses Verfahren kann auf eine beliebige Anzahl von Werten erweitert werden und trägt den Namen
\href{http://de.wikipedia.org/wiki/Bubble_Sort}{Bubble Sort},
da die größten Zahlen wie Blasen in einer Flüssigkeit nach oben schweben.

---

#### Übung (Teilbar II)
Schreibe ein Programm, das von einer eingegeben Zahl (`int`) prüft ob diese durch eine weitere eingebene Zahl dividierbar ist (ohne Rest). Verwende dabei nicht den Modulo Operator (`%`).

*Hinweis:* Um den Rest zu ermitteln braucht man nicht unbedingt den Modulo Operator.

---

#### Übung (Alter genau berechnen)

Nach Eingabe des Geburtsdatums soll das Alter exakt ausgerechnet werden.
Das folgende Programm zeigt die Ermittlung des aktuellen Datums.

```c
#include <stdio.h>
#include <time.h>

int main()
{
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);
    int tag = tm.tm_mday;
    int monat = tm.tm_mon + 1;
    int jahr = tm.tm_year + 1900;
    
    printf("%02d.%02d.%d\n", tag, monat, jahr);
}

```

---

#### Übung (Schneidende Geraden)

Lese die x und y Koordinaten der Endpunkte zweier horizontaler oder vertikaler Strecken ein und prüfe ob sich diese schneiden. Prüfe auch ob es sich wirklich um horizontale oder vertikale Strecken handelt.

*Hinweis:* Die Verallgemeinerung auf Strecken in beliebiger Lage ist ein relativ schwieriges Problem aus der analytischen Geometrie!

---



