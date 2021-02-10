---
title: Doc
tags: [assignment,challenge]
---

# Challenges – Strings

**Übung (Passwortabfrage):**

Schreibe ein Programm, das eine Passwortabfrage durchführt.
Das Passwort heißt: `PASSWORT`+`.
Es wird jede Eingabe akzeptiert, die die Buchstaben dieses Passwortes (z.B.: `AOPRSSTW`) in einer beliebigen Reihenfolge enthält.

- Richtige Eingaben: `ASSPWORT`, `WORTPASS`, `PAWOSSRT`, ...
- Falsche Eingaben: `AAAPWORT`, `WORT`, `WWORTPAS`, ...

Beachte: 
Die Reihenfolge der Buchstaben ist zwar egal aber es muss die richtige Anzahl an Buchstaben eingegeben werden. 
Zum Beispiel genau zwei `S`.

---

**Übung (Alphabet komplett):**
Schreibe ein Programm das prüft ob ein (langer) String alle Kleinbuchstaben des lateinischen Alphabets enthält.
Die ASCII Codes der Kleinbuchstaben: 97--122.

Hinweis: *Direct address table* – ist ein Array für das als Index Daten aus der Eingabe verwendet werden.

Beispiel:
Im nachfolgenden Programm wird der ASCII Code des eingegeben Zeichens als Index verwendet.

```c
int t[256];
for(int i=0; i<256; i++)
	t[i]=0;
// alle Elemente von t auf 0
char c;
scanf("%c",&c);
t[c]=1;
```
Damit ist einfach festzustellen ob dieses Zeichen bereits einmal eingegeben wurde.

---

**Übung (Ziffern zählen):**

Schreibe eine Funktion die in einem String für jede Ziffer (von 0 -- 9) bestimmt wie oft diese darin vorkommt.
Die Funktion soll einen String und ein `int` Array aus 10 Elementen übergeben bekommen.
Das Array soll nach dem Funktionsaufruf für jede Ziffer die gefundene Anzahl enthalten und zwar in Index 0 die Anzahl der `'0'` Ziffern, in Index 1 die Anzahl der `'1'` Ziffern, usw.

Hinweis zur Optimierung: Bedenke dass im ASCII Code die Ziffern von `'0'` -- `'9'` hintereinander liegen,
`'0'` hat den ASCII Code 48.

---


