---
title: Übung Komplexe Zahl
type: assignment
description: Klasse zum Rechnen mit komplexen Zahlen. Beispiel mit Mandelbrotmenge und Apfelmännchen.
cmds: ['md_html.bash','md_html.bash --small']
tags: [java]
---



**Übung (Komplexe Zahl)**

Schreibe eine Klasse `Complex` für eine komplexe Zahl. Unterstütze die Rechenoperationen `plus`, `times` und `abs` (Absolutwert). Der Rückgabewert von `plus` und `times` ist ein neues Objekt der Klasse `Complex`.


Folgendes Programm veranschaulicht wie diese Klasse verwendet werden soll.
```java
Complex z1 = new Complex(0.2,-0.3);
Complex z2 = new Complex(-0.1,0.25);
Complex c = z1.plus(z2); // c =  0.1 - 0.05i
Complex d = z2.times(z1); // 0.055 + 0.08i
double r = c.abs(); // 0.1118
```

---

**Übung (Mandelbrotmenge)**

Die Mandelbrotmenge ist eine Teilmenge der komplexen Zahlen. Eine komplexe Zahl $c$ ist Teil der Mandelbrotmenge wenn:

- diese nahe am Nullpunkt ist – d.h. Distanz von $c$ zum Ursprung ist kleiner als 2.
- Und man beliebig oft die Formel $z=z^2+c$ anwenden kann ohne, dass $z$ sich um weiter als 2 vom Ursprung entfernt. Dabei startet man mit $z=0$ und setzt das sich ergebende neue $z$ wieder in die Formel ein.

 Aufgaben:
- Schreibe ein Programm das von einer komplexen Zahl prüft ob diese in der Mandelbrotmenge ist. Konkret: während 100 Berechnungen der Formel ist die Distanz von $z$ zum Ursprung ($z=0$) immer kleiner als 2.
- 
Teste die Klasse `Complex` mit dem Programm `MandelbrotConsole.java` das ein Apfelmännchen in der Konsole "zeichnet" – das Apfelmännchen ist eine Darstellung der Mandelbrotmenge.
