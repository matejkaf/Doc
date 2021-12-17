---
title: Arrays
subtitle: Übungen
tags: [assignment,3AHITS]
---

#### Übung (Array als Rückgabewert)

Schreibe eine Klassen-Methode die ein Array mit den Werten `{1,2,2,4,8,32,256,8192,...` erzeugt und dieses Array als Rückgabewert verwendet. Die Länge des Arrays ist ein Parameter der Methode. Gib das Array im Hauptprogramm aus.

---

#### Übung (Primfaktorenzerlegung)

Schreibe eine Methode die eine ganze, positive Zahl in ihre Primfaktoren zerlegt und diese in einem Array zurückgibt.

Hinweis: Prüfe ob Zahl durch 2 dividierbar, falls ja ist 2 ein Primfaktor, dividiere dann die Zahl durch 2 und versuche 2 erneut als Primfaktor so lange bis die Zahl nicht mehr durch 2 dividierbar ist, setze dann mit 3, 5, 7, etc. in gleicher Weise fort bis der Überrest der Zahl 1 wird. Die geraden Zahlen kann man zur Optimierung weglassen, da diese keine Primfaktoren sein können (außer 2). Dass die gefundenen Faktoren Primzahlen sind ergibt sich bei dieser Vorgangsweise ganz automatisch.

Hinweis: eine `int` Variable hat 32 Bit und kann daher maximal 32 Primfaktoren haben. D.h. ein Array der Länge 32 ist auch für den schlechtesten Fall ausreichend. In einem solchen Array können die gefundenen Primfaktoren zuerst gesammelt und dann später (wenn die Anzahl der Primfaktoren bekannt ist) in ein Array der korrekten Länge umkopiert werden – dieses ist dann der Rückgabewert der Methode.

---

#### Übung (Gerechte Arbeitsteilung)

Ein Haufen von s gleich schweren Steinen soll weggetragen werden. Ein Arbeiter kann maximal n Steine tragen. Finde heraus wie viele Arbeiter notwendig sind und finde weiters eine Aufteilung, so dass kein Arbeiter um mehr als einen Stein mehr tragen muss als ein anderer. Liefere das Ergebnis in einem Array das die Anzahl der Steine für jeden einzelnen Arbeiter enthält. Das Array soll Rückgabewert einer Klassen-Methode `split()` sein.


```java
int[] workers = split(84, 11);
for(int i=0;i<workers.length;i++) {
    System.out.print(workers[i]+"  ");
}
```

Ergibt:

```
11  11  11  11  10  10  10  10 
```

---
