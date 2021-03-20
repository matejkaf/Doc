---
title: Strings
subtitle: Übungen Einstieg
tags: [c,strings,assignment]
---

#### **Übung (Standard Stringfunktionen I):**

Implementiere folgende Stringfunktionen. 


- `int len(char t[])` – Liefert die Anzahl der Zeichen im String als Rückgabewert. `\0` wird nicht mitgezählt.
- `int search(char s[], char c)` – Sucht das erste Vorkommen des Zeichens `c` im String `s`. Rückgabewert ist der Index des gefundenen Zeichens oder `-1` falls nicht gefunden.
- `void leftStr(char dest[], char src[], int n)` – Anzahl `n` Zeichen aus `src` werden nach `dest` kopiert. Der Inhalt von `dest ` wird überschrieben. Hinweis 1: nicht auf `\0` vergessen.  Hinweis 2: auch den Sonderfall (*edge case*) berücksichtigen wenn `n` größer ist als in `src` Zeichen vorhanden sind.

---

#### **Übung (Standard Stringfunktionen II):**

Implementiere folgende Stringfunktionen. 

- `void copy(char dest[], char src[])` – Kopiert den Inhalt von `src` nach `dest` (`dest` wird überschrieben).
- `void cat(char dest[], char src[])` – Hängt den String `src` an `dest` an.
- `int searchLast(char s[], char c)` – Wie `search`, aber es wird der letzte Buchstabe gesucht, falls dieser mehrfach im String vorkommt.

---

#### **Übung (Doppeldrom):**

Ein Doppeldrom ist ein Wort das nur doppelte Buchstaben enthält, etwa `"LLaammaa"` oder `"ssaabb"`.
Schreibe eine Funktion `istDoppeldrom` die ermittelt ob ein Wort ein Doppeldrom ist.
Verwende `int` als Rückgabewert und mache keine Ausgaben in der Funktion (nur im Hauptprogramm).

---

#### **Übung (Passwort Eingabe):**

Implementiere eine Funktion `void getpass(char str[])` die die verdeckte Eingabe eines Strings (Passwort) ermöglicht.  Verwende `getch()` zum Einlesen der einzelnen Zeichen (`getch` gibt das eingegeben Zeichen nicht am Bildschirm aus). Für jedes eingegebene Zeichen soll ein `*` ausgegeben werden. Hinweis: Die Enter Taste liefert das Zeichen `'\r'`.

---

#### **Übung (atoi – ASCII to integer):**

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

#### **Übung (ASCII Code Verschlüsselung):**

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

