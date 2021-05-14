---
title: Strings
subtitle: Challenges
tags: [c,strings,assignment,challenge]
---

#### Übung (atoi – ASCII to integer)

Implementiere die Funktion `atoi` die einen String aus Ziffern in eine `int` Zahl wandelt. 
Anwendung:

```c
char a[]="1234";
int i = atoi(a);
printf("%d",i);
```

Hinweise:

- Eine einzelne Ziffer kann durch abziehen des ASCII Codes von `'0'` (Null) in den entsprechenden Zahlwert umgerechnet werden.
- Für eine mehrstellige Zahl beginnt man bei der höherwertigsten Ziffer. Der bisherige Wert wird mit 10 multipliziert und dann der Wert der aktuellen Ziffer dazu addiert.
- Mache zuerst eine Lösung für einstellige Zahlen, dann für zweistellige und dann für dreistellige. 
- Versuche dann einen Algorithmus mit Schleife zu finden der mit einer beliebigen Anzahl von Stellen arbeiten kann. Hinweis: Von links nach rechts durchgehen und das Zwischenergebnis von vorher immer mit 10 multiplizieren ehe die aktuelle Stelle hinzuaddiert wird. Beispiel: `321=((0+3) * 10 + 2) * 10 + 1`



---

#### Übung (ASCII Code Verschlüsselung)

Eine ganz einfache Methode zur Verschlüsselung ist statt Buchstaben den ASCII Code zu schreiben.

- Schreibe eine Funktion `printASCII` die von allen Zeichen eines Strings den ASCII Code ausgibt.

```c
printASCII("AM MO");
```

Ausgabe:

```
65 77 32 77 79
```

- Schreibe eine Funktion `printKlartext` die einen String aus ASCII Codes(≥10 und <100) übergeben bekommt und diesen wieder lesbar ausgibt.

```c
printKlartext("6577327779");
```

Ausgabe:

```
AM MO
```

Hinweis:
Verwende nur Großbuchstaben (bei Kleinbuchstaben könnte sich ein 3-stelliger ASCII Code ergeben).

