---
title: Verschachtelte Schleifen
subtitle: Übungen
tags: [assignment,1CHELS]
---

#### Übung (Lottotip Generator)

Schreibe ein Programm das die 6 Zahlen eines Lottotips ("6 aus 45") zufällig ermittelt und hintereinander ausgibt. Danach wird der Benutzer gefragt ob ein weiterer Lottotip gewünscht ist.

Zur Erinnerung – Umgang mit Zufallszahlen:

```c++
#include <iostream>

int main() {
  int z;

  // seed-random – nur einmal am Anfang des Programms notwendig
  srand(time(NULL)); 

  // rand() liefert einen großen Bereich (0,..,RAND_MAX) an möglichen Werten
  z = rand();
  printf("(%d-%d): %d\n",0,RAND_MAX,z);

  // Durch den Restoperator (Modulo, %) kann dies eingeschränkt werden
  z = rand()%10; // Rest der Division durch 10 ergibt 0,..,9
  printf("(0-9): %d\n",z);

  // Und so sind bestimmte Bereiche möglich
  z = rand()%5+10;
  printf("(10-14): %d\n",z);
}
```



---

#### Übung (Lottoschein Generator)

Der Lottotip-Generator soll nun mehrere Lottotips (Anzahl ist Benutzereingabe) für einen Lottoschein untereinander ausgeben. Wie vorher besteht jeder Lottotip aus 6 zufälligen Zahlen aus dem Wertebereich 1–45. Der Benutzer wird am Ende gefragt ob der Vorgang wiederholt werden soll.



---

#### Übung (Dreieck)

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

Erweiterung:  Ändere das Programm so, dass das Dreieck wie unten abgebildet aussieht. Hinweis: Leerzeichen vor den `'*'` ausgeben.


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

#### Übung (Luxus Lotto Generator)

Schreibe einen Lottozahlengenerator der vollständig konfigurierbar ist. Ganz am Anfang des Programms können Anzahl der Zahlen für einen Tip und der Wertebereich einer einzelnen Zahl eingestellt werden. Damit sind auch Lottosysteme wie "6 aus 49" (Deutsches Lotto) oder "5 aus 50" (Euro Lotto) möglich.

Es werden so viele Tips generiert wie vom Anwender gewünscht und der ganze Vorgang bei drücken der `'j'` Taste wiederholt.



---

#### Übung (Ein- mal Eins Tabelle)

Schreibe ein Programm das das Einmaleins in Tabellenform ausgibt. Ausgabe:

```
Einmaleins bis: 5_
  | 1  2  3  4  5
--+–-------------
1 | 1  2  3  4  5
2 | 2  4  6  8 10
3 | 3  6  9 12 15
4 | 4  8 12 16 20
5 | 5 10 15 20 25
```

Eine Eingabe bestimmt wie weit das Einmaleins berechnet wird. Die Grenze wird am Beginn des Programms eingegeben.