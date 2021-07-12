---
title: Strukturen
subtitle: Übungen
tags: [assignment, c, structure, C_2 ]
---


#### Übung (Zeit)

Erstelle eine Struktur `Zeit`, mit Stunde (0–23) und Minute (0–59).

Implementiere:

- Einen Konstruktor, mit 2 Parametern zum Setzen von Stunde und Minute.
- Eine Eingabemethode.
- Eine Ausgabemethode.
- Eine Methode die als Rückgabewert die Minuten seit Mitternacht liefert.
- Eine Methode die die Zeit im englischen Format (mit am/pm) ausgibt (z.B. `8:00pm` für 20:00 Uhr)
- Eine Methode der Minuten übergeben werden und die diese zur aktuell gespeicherten Uhrzeit hinzuzählt. Berücksichtige "überlaufende" Stunden.
- Eine Methode die die Uhrzeit mit einer anderen Uhrzeit vergleicht. Die zu vergleichende Uhrzeit wird dabei als Zeiger übergeben.


---

#### Übung (String, Zeiger und Array)

Ein String kann in C auch so angelegt werden:

```c
char* text="Hallo";
text[1]='u';
printf("%s\n",text);
```
Erinnerung: Ein Array-Name ist ein Zeiger auf das erste Element. Umgekehrt kann man einen Zeiger wie ein Array verwenden.  Damit kann man ein Array aus Strings anlegen:

```c
char* namen[]={"Mayer","Huber","Gruber","Hafner","Sepperl"};
int i=0;
while (i<5) {
    printf("%s\n",namen[i]);
    i++;
}
```

Schreibe ein Program das in einem Array aus Strings den längsten String findet und diesen ausgibt.

---

#### Übung (Umkopieren von Array in Struktur)

Ergänze im folgenden Programm die Funktionen für das Umkopieren und die Ausgabe. Ergänze im Hauptprogramm die Ausgabe. Hinweis: Verwende für die Strings die Funktion `strcpy()`. Das Array `persliste` ist länger als benötigt, als Endekennung wird ein leerer String in `name` verwendet.

```c
#include <stdio.h>
#include <conio.h>
#include <string.h>

#define STRLEN 35
typedef struct 
{
    char name[STRLEN];
    double gehalt;
} Personal;

void kopiere(Personal pers[], char nam[][STRLEN], double geh[]);
void print(Personal* pPers);

void main()
{
    char namen[][STRLEN]={"Mayer","Huber","Gruber","Hafner","Sepperl",""};
    double gehalt[]={2200.0, 3200.0, 2800.0, 2900.0, 900.0, 0.0};
    Personal persliste[50];
    kopiere(persliste,namen,gehalt);
    //Hier die Ausgabe ergänzen (Schleife!)
    //-->
    getch();
}

// Aus 2 "normalen" Arrays in ein Array von Strukturen umkopieren
void kopiere(Personal pers[], char nam[][STRLEN], double geh[])
{
    ...
}

// Eine einzelne Struktur ausgeben
void print(Personal* pPers)
{
    ...
}
```
---