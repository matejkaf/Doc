---
title: Zufallszahlen 
subtitle: Übungen
tags: [assignment,C_1,1CHELS,1AHITS]
---

#### Übung (Zufallszahl)

Ermittle eine zufällige Zahl im Bereich 15–17. Starte das Programm häufig genug um festzustellen, dass tatsächlich alle diese Zahlen vorkommen und es auch keine Ausreißer gibt.

---

#### Übung (Würfel)

Schreibe ein Programm das 10 zufällige Würfe eines Würfels mit 6 Seiten simuliert. Das Programm soll dazu 10 zufällige Zahlen von 1–6 ausgibt. Verwende eine Schleife die 10 Mal durchläuft.

---

#### Übung (Lottozahlen)

Beim Lotto "6 aus 45" werden 6 zufällige Zahlen von 1–45 gezogen. Schreibe eine Schleife die diese 6 Zahlen ermittelt und ausgibt.

---

#### Übung (2er Pasch)

Finde heraus wie oft es bei insgesamt 1000 Würfen vorkommt, dass bei einem sechsseitigen Würfel **zweimal hinterander die gleiche Zahl** vorkommt. 

Im folgenden wäre es 4 mal der Fall gewesen.

```
3 5 3 2 2 4 5 3 3 3 2 1 1
```

Berechne daraus die Wahrscheinlichkeit in %.

---

#### Übung (4er Pasch)

Das Spiel Kniffel wird mit 5 Würfeln gespielt. Als sogenannten Viererpasch wird ein Wurf bezeichnet bei dem 4 Würfel von 5 die gleiche Zahl haben. Finde heraus wie groß die Wahrscheinlichkeit ist einen Viererpasch mit der Augenzahl 3 zu würfeln. Hinweis: Mache 100000 Versuche und zähle die Viererpasch, diese Anzahl mal hundert dividiert durch 100000 ergibt die Wahrscheinlichkeit in Prozent.

---



# Zufallszahlen erzeugen

Benötigt 2 zusätzliche includes:


```c
#include <stdlib.h>
#include <time.h>
```

Variable für die zufällige Zahl:


```c
int z;
```

**Einmal** am Beginn des Programms:


```c
srand(time(NULL));
```

Da wo eine zufällige Zahl gewünscht ist:


```c
z = rand();
```

Das liefert eine zufällige Zahl vom kleinesten Wert 0 bis zum größtmöglichen Wert $2^{15}-1$.

Für eine Zufallszahl aus 0–9 schreibt man:


```c
z = rand()%10;
```

Für 5–10:

```c
z = rand()%6+5;
```

Erklärung: `rand()%6` ergibt die 6 möglichen Werte `0 1 2 3 4 5`. Weiter mit `+5` entstehen daraus die Werte `5 6 7 8 9 10`.

