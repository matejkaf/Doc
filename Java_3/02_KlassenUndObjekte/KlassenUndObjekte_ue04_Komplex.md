---
title: Übung Komplexe Zahl
description: Klasse zum Rechnen mit komplexen Zahlen. Beispiel mit Mandelbrotmenge und Apfelmännchen.
tags: [assignment,java]
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
- Schreibe ein Programm das von einer komplexen Zahl prüft ob diese in der Mandelbrotmenge ist. Konkret: während 100 Berechnungen der Formel ist die Distanz von $z$ zum Ursprung immer kleiner als 2.
- Teste die Klasse `Complex` mit folgendem Programm das mit Hilfe der Klasse `Komplex` ein **Apfelmännchen** in der Konsole "zeichnet" – das Apfelmännchen ist eine Darstellung der Mandelbrotmenge.

```java
package mandelbrotconsole;

public class MandelbrotConsole {

  public static void main(String[] args) {

    int steps_x=80;
    int steps_y=24;

    double start_x = -2;
    double start_y = 1.1;
    double end_x = 1.1;
    double end_y = -1.1;
    double step_x=(end_x-start_x)/steps_x;
    double step_y=(end_y-start_y)/steps_y;

    for (double y = start_y; y > end_y; y+=step_y) {
      for( double x = start_x; x < end_x; x+=step_x) {
        Complex c = new Complex(x,y);
        Complex z = new Complex(0,0);
        double r=0; // distance
        int cnt=100;
        while(cnt-- > 0 && r<2) {
          z = z.times(z);
          z = z.plus(c);
          r = z.abs();
        }
        if(cnt==-1)
          System.out.print("*");
        else if(cnt<75)
          System.out.print("o");
        else if(cnt<90)
          System.out.print(".");
        else
          System.out.print(" ");
      }
      System.out.println("");
    }
  }
}

```



---

