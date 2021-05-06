---
title: Verschachtelte Schleifen
subtitle: Übungen
tags: [assignment,1CHELS]
---

#### Übung (Verschachtelte Schleifen)

Überlege was folgende Programmausschnitte (exakt!) ausgeben:


```c
// (a)
for( i=5 ; i>=3 ; i--)
{
   for( j=7 ; j<9 ; j++)
   {
      printf("%d - %d\n", i, j );
   }
}
printf("%d + %d\n", i, j );
```


```c
// (b)
for( i=0 ; i<4 ; i++)
{
   for( j=i ; j<3 ; j++)
   {
      printf("%d - %d\n", i, j );
   }
}
```


```c
// (c)
int n=3;
for( i=0 ; i<n ; i++)
{
   for( j=0 ; j<(n-i) ; j++)
   {
      printf("%d - %d\n", i, j );
   }
   for( j=(n-i) ; j<n ; j++)
   {
      printf("%d - %d\n", i, j );
   }
}
```

---



**Übung (Lottotip Generator):**
Schreibe ein Programm das die 6 Zahlen eines Lottotips ("6 aus 45") zufällig ermittelt und hintereinander ausgibt. Danach wird der Benutzer gefragt ob ein weiterer Lottotip gewünscht ist.

---


**Übung (Lottoschein Generator):**
Der Lottotip-Generator soll nun mehrere Lottotips (Anzahl ist Benutzereingabe) für einen Lottoschein untereinander ausgeben. Der Benutzer wird am Ende gefragt ob der Vorgang wiederholt werden soll.

---

**Übung (Dreieck):**
Stelle ein Dreieck aus Sternchen dar.
Die Höhe des Dreiecks kann eingegeben werden.


```
Höhe: 5
*
**
***
****
*****
```

Erweiterung:  Ändere das Programm so, dass das Dreieck wie unten abgebildet aussieht.


```
Höhe: 7
      *
     **
    ***
   ****
  *****
 ******
*******
```






---

**Übung (Luxus Lotto Generator):**
Schreibe einen Lottozahlengenerator der vollständig konfigurierbar ist. Ganz am Anfang des Programms können Anzahl der Zahlen für einen Tip und der Wertebereich einer einzelnen Zahl eingestellt werden. Damit sind auch Lottosysteme wie "6 aus 49" (Deutsches Lotto) oder "5 aus 50" (Euro Lotto) möglich.

Es werden so viele Tips generiert wie vom Anwender gewünscht und dies bei drücken der `'j'` Taste wiederholt.



---

**Übung (Ein- mal Eins Tabelle):**
Schreibe ein Programm das das Einmaleins in Tabellenform ausgibt. Ausgabe:

```
Einmaleins bis: 5_
  | 1  2  3  4  5
--+–-----------
1 | 1  2  3  4  5
2 | 2  4  6  8 10
3 | 3  6  9 12 15
4 | 4  8 12 16 20
5 | 5 10 15 20 25
```

Eine Eingabe bestimmt wie weit das Einmaleins berechnet wird. Die Grenze wird am Beginn des Programms eingegeben.

---



