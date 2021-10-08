---
title: Strings
subtitle: Übungen Einstieg
tags: [c,strings,assignment,C_2,2AHITS]
---

#### Übung (Standard Stringfunktionen I)

Implementiere folgende Stringfunktionen. 


- `int len(char t[])` – Liefert die Anzahl der Zeichen im String als Rückgabewert. `\0` wird nicht mitgezählt.
- `int search(char s[], char c)` – die Funktion bekommt im Parameter `c` einen Buchstaben übergeben und sucht das erste Vorkommen dieses Zeichens im String `s`. Rückgabewert ist der Index des gefundenen Zeichens oder `-1` falls nicht gefunden.



---

#### Übung (Every second char)

- Schreibe eine Funktion `void printsecond(char s[])` die einen String übergeben bekommt und von diesem String nur jeden 2ten Buchstaben ausgibt. Beispiele:
  `"Hallo" → "Hlo"`
  `"abcdef" → "ace"`
- Schreibe eine Funktion `void linesecond(char s[])` die einen String übergeben bekommt und jeden 2ten Buchstaben durch einen Unterstrich `'_'` ersetzt. Der übergebene String soll verändert werden (call by reference). Ausgaben nur im Hauptprogramm.
  `"Hallo" → "H_l_o"`
  `"abcdef" → "a_c_e_"`



---

#### Übung (print reverse)

Schreibe eine Funktion `void printreverse(char s[])` die den übergebenen String in umgekehrter Reihenfolge ausgibt.



---

#### Übung (left string)

Schreibe eine Funktion `void leftStr(char dest[], char src[], int n)` – Anzahl `n` Zeichen aus `src` werden (von links beginnend) nach `dest` kopiert. Der Inhalt von `dest ` wird überschrieben. 

- Hinweis 1: nicht auf `\0` vergessen.  
- Hinweis 2: auch den Sonderfall (*edge case*) berücksichtigen wenn `n` größer ist als in `src` Zeichen vorhanden sind.



---

#### Übung (Standard Stringfunktionen II)

Implementiere folgende Stringfunktionen. 

- `void copy(char dest[], char src[])` – Kopiert den Inhalt von `src` nach `dest` (`dest` wird überschrieben).
- `void cat(char dest[], char src[])` – Hängt den String `src` an `dest` an.
- `int searchLast(char s[], char c)` – Wie `search`, aber es wird der letzte Buchstabe gesucht, falls dieser mehrfach im String vorkommt.



---

#### Übung (Doppeldrom)

Ein Doppeldrom ist ein Wort das nur doppelte Buchstaben enthält, etwa `"LLaammaa"` oder `"ssaabb"`.
Schreibe eine Funktion `istDoppeldrom` die ermittelt ob ein Wort ein Doppeldrom ist.
Verwende `int` als Rückgabewert und mache keine Ausgaben in der Funktion (nur im Hauptprogramm).



---

