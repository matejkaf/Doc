---
title: Zufallszahlen 
subtitle: Übungen
tags: [assignment,C_1,1CHELS,1AHITS]
---

Zuerst ein wenig "Theorie":

Zufallszahlen sind für Simulationen oder Spiele praktisch. Dafür sind 2 Befehle im Programm notwendig `srand` und `rand`.

Möchte man Zufallszahlen verwenden muss einmal am Beginn des Programms  `srand` in folgender weise aufgerufen werden:


```c
srand(time(NULL));
```

Läßt man diese Zeile weg so bekommt man immer wieder die gleichen Zufallszahlen!

Mit dem Befehl `rand` kann dann eine zufällige Zahl gebildet werden. Diese ist ein `int` Wert. Wir brauchen daher eine `int` Variable.


```c
int z;
```

So bekommt die Variable `z` eine zufällige Zahl zugewiesen:


```c
z = rand();
```

Denn Befehl `rand` kann man im Programm mehrfach aufrufen (z.B. auch in einer Schleife). Es ergibt sich immer eine neue Zufallszahl.

`rand()` liefert eine große positive Zufallszahl – meist möchte man den Wertebereich aber selber bestimmten. Das geht sehr einfach mit dem Modulo Operator (Rest der Division).

Für eine Zufallszahl aus 0–9 schreibt man zum Beispiel:


```c
z = rand()%10;
```

Durch den Modulooperator (`%10`) ergeben sich die möglichen Werte für die Zufallszahl von 0 bis 9. Das sind die möglichen Reste die sich bei einer Division durch 10 ergeben können.

Ist der gewünschte Wertebereich von 5–10 so kann folgend vorgegangen werden:

```c
z = rand()%6 + 5;
```

Erklärung: `rand()%6` ergibt die 6 möglichen Werte `0 1 2 3 4 5`. Nach `+5` entstehen daraus die Werte `5 6 7 8 9 10`.

Noch einmal alles als komplettes Programm:

```c++
int z;
srand(time(NULL)); // Befehl nur einmal notwendig

// 3 zufällige Zahlen ausgeben indem rand 3 mal verwendet wird
z = rand()%6+5;
printf("\n%d\n",z);
z = rand()%6+5;
printf("\n%d\n",z);
z = rand()%6+5;
printf("\n%d\n",z);
```

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





