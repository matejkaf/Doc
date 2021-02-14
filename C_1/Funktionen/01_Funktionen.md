---
title: Doc
description: Einführung in Funktionen in C
tags: [lecture, c, funktionen ]
---

# Funktionen

Probleme bei längeren Programmen:

- Übersichtlichkeit geht verloren.
- Gleiche Programmteile kommen mehrfach vor.

Verbesserung durch Funktionen.


## Allgemein

Beispiel: Es soll folgendes ausgegeben werden

```
------------------------
Hallo Welt
------------------------
```

25 Bindestriche in einer Zeile. Einmal vor und einmal nach dem Text.

```c
for(int i=0; i<25; i++)
	printf("-");
printf("\n");
printf("Hallo Welt\n");
for(int i=0; i<25; i++)
	printf("-");
printf("\n");
```

Hier kommen einige Programmzeilen – mit der gleichen Aufgabe – doppelt vor.

Wiederholungen von gleichartigem Quelltext sollten beim Programmieren unbedingt vermieden werden (Prinzip: **Don't repeat yourself**)

## Funktionen


Eine Funktion macht einen **Teil eines Programms** unter einem **Namen** aufrufbar.

Beispiel: Funktion mit Namen `linie`:

```c
void linie()
{
	for(int i=0; i<25; i++)
		printf("-");
	printf("\n");
}

void main()
{
    linie();
    printf("Hallo Welt\n");
    linie();
    getch();
}
```

Vorteile:

- Bessere Übersicht
- Bessere Lesbarkeit (wenn Funktionsnamen sinnvoll)
- Mehrfach verwendbar
- Änderungen einfacher (z.B. andere Linienlänge)

`i` ist eine lokale Variable von `func`.

Für jede Funktion: Eigener Speicherbereich für Variablen (=Lokal)

- Aufruf der Funktion $\rightarrow$ anlegen
- Verlassen der Funktion $\rightarrow$ freigeben








