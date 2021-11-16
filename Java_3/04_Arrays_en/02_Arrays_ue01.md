---
title: Arrays
subtitle: Übungen
tags: [assignment]
---

#### Übung (Array als Rückgabewert)

Schreibe eine Klassen-Methode die ein Array mit den Werten `{1,2,2,4,8,32,256,8192,...` erzeugt und dieses Array als Rückgabewert verwendet. Die Länge des Arrays ist ein Parameter der Methode. Gib das Array im Hauptprogramm aus.



---

#### Übung (Primfaktorenzerlegung)

Schreibe eine Methode die eine ganze, positive Zahl in ihre Primfaktoren zerlegt und diese in einem Array zurückgibt.



---

#### Übung (Gerechte Arbeitsteilung)

Ein Haufen von $s$ gleich schweren Steinen soll weggetragen werden. Ein Arbeiter kann maximal $n$ Steine tragen. Finde heraus wie viele Arbeiter notwendig sind und finde weiters eine Aufteilung, so dass kein Arbeiter um mehr als einen Stein mehr tragen muss als ein anderer. Liefere das Ergebnis in einem Array das die Anzahl der Steine für jeden einzelnen Arbeiter enthält. Das Array soll Rückgabewert einer Klassen-Methode `split()` sein.


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
