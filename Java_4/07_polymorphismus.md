---
title: Polymorphismus
subtitle: Vererbung
tags: [lecture]
---

Das Überschreiben von Methoden bewirkt ein sehr interessantes und nützliches Verhalten das man als **Polymorphismus** bezeichnet.

Als Beispiel wollen wir Klassen betrachten die die Flächen geometrischer Objekte wie Quadrat und Kreis berechnen.

Flächenberechung für das Quadrat:

```java
class Square {
    private double a;
    public Square(double a) {
        this.a = a;
    }
    double area() {
        return a*a;
    }
}
```

Flächenberechung für den Kreis:

```java
class Circle {
    private double r;
    public Square(double r) {
        this.r = r;
    }
    double area() {
        return r*r*Math.PI;
    }
}
```


Diese beiden Klassen **haben etwas gemeinsam**, nämlich die Methode `area()`. Selber Name, selbe Bedeutung. Solche Gemeinsamkeiten sind ein typischer Anwendungsfall für Vererbung. Man hebt sozusagen (wie bei mathematischer Multiplikation) den gemeinsamen Teil heraus und gibt diesen in eine gemeinsame Oberklasse.

Das Beispiel ändert sich dann wie folgt:

```java
public class Shape {
    // class for simple geometric shapes
    double area() {
        return 0.0;
    }
}
```

```java
class Square extends Shape {
    private double a;
    public Square(double a) {
        this.a = a;
    }
    double area() {
        return a*a;
    }
}
```

```java
class Circle extends Shape {
    private double r;
    public Circle(double r) {
        this.r = r;
    }
    double area() {
        return r*r*Math.PI;
    }
}
```

Das macht jetzt auf den ersten Blick nichts besser, aber interessant wird folgendes:

```java
Shape s1 = new Circle(2.4);
Shape s2 = new Square(1.3);
double a1 = s1.area();
double a2 = s2.area();
```

<div class='uebung' caption='Shape'>
Finde heraus: welche Methoden werden aufgerufen!
</div>

Noch spannender wird es mit einem Array:

```java
Shape[] shapes = {
    new Circle(2.4),
    new Circle(5.1),
    new Square(1.3)
};
```

---

#### Übung (Shape)

Schreibe eine `static` Funktion mit dem Namen `sumArea` die die Summe aller Flächen berechnet und zurück gibt.

---

Was ist der Vorteil, dass `Shape` als Basisklasse zur Verfügung steht? Hinweis: Überlege was in der Methode `sumArea` geändert werden müsste wenn es eine zusätzliche Klasse `Rectangular` gäbe?

Dieses Verhalten nennt man **Polymorphie** und tritt immer dann auf wenn man eine Referenzvariable auf eine allgemeingültige Basisklasse (`Shape`) hat und diese auf ein Objekt einer davon abgeleiteten Klasse zeigt (`Circle`). Wird eine vererbte, überschriebene Methode (`area`) aufgerufen so wird die Methode aufgerufen die zum konkreten Objekt passt – also die in `Circle` definierte:

```java
Shape shape = new Circle(2.4);
double a = shape.area();
```

---

#### Übung (Erweiterungen in Shape)

Ergänze in `Shape` einen `private String` für den Namen des Grafik-Objekts. Definiere zusätzlich in `Shape` eine Methode `toString` für den Namen und die Fläche.
Wie verhält sich das im Zusammenhang mit Polymorphie?

---



# Abstrakte Klassen

Erstelle ein Objekt der Klasse `Shape` und rufe die `toString` Methode auf – es ergibt sich eine Fläche von `0.0`. Es macht eigentlich keinen sinn Objekte der Klasse `Shape` anzulegen. 

Wie die Klasse `Shape` bestehen manche Basisklassen nur aus Variablen und Methoden die andere, davon abgeleitet Klassen gemeinsam haben ("gemeinsamer Faktor"). Häufig ist es aber so, dass konkrete Objekte von diesen Basisklassen keinen Sinn machen. 

Beispiel: Ein Objekt der Klasse `Shape` hat keinen Namen (es weiß ja nicht ob es ein Kreis, Rechteck oder sonstwas ist) und kann keine Fläche berechnen.

Genau für diesen Fall können Klassen als **abstrakt** definiert werden. 

Das Schlüsselwor `abstract` kann bei Klassen und Methoden angewendet werden:

```java
public abstract class Abstract {
    public abstract void someMethod();
}
```

Abstrakte Klassen sind wie normale Klassen, aber:

- von abstrakten Klassen können **keine Objekt** angelegt werden,
- abstrakte Klassen können **abstrakte Methoden** enthalten. Diese haben keine Implementierung.

Ändere `Shape` in eine abstrakte Klasse.

Von der abstrakten Klasse `Shape` können zwar keine Objekte angelegt werden, aber die Verwendung als Referenzvariable ist weiter zulässig. Auch Arrays daraus können angelegt werden.




