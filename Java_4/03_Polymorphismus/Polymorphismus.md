
# Polymorphismus

Das Überschreiben von Methoden bewirkt ein sehr interessantes und nützliches Verhalten das man als **Polymorphismus** bezeichnet.

Als Beispiel wollen wir Klassen betrachten die die Flächen geometrischer Objekte wie Quadrat und Kreis berechnen.

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


Diese beiden Klassen **haben etwas gemeinsam**, nämlich die Methode `area()`. Selber Name, selbe Bedeutung. Solche Gemeinsamkeiten sind ein typischer Anwendungsfall für Vererbung. Man hebt sozusagen (wie bei Multiplikation) den gemeinsamen Teil heraus und gibt diesen in eine gemeinsame Oberklasse.

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

<div class='uebung' caption='Shape'>
Schreibe eine `static` Funktion mit dem Namen `sumArea` die die Summe aller Flächen berechnet und zurück gibt.
</div>


<div class='fact'>
Was ist der Vorteil, dass `Shape` als Basisklasse zur Verfügung steht? Hinweis: Überlege was in der Methode `sumArea` geändert werden müsste wenn es eine zusätzliche Klasse `Rectangular` gibt?
</div>

<div class="definition">
Dieses Verhalten nennt man **Polymorphie** und tritt immer dann auf wenn man eine Referenzvariable auf eine allgemeingültige Basisklasse (`Shape`) hat und diese auf ein Objekt einer davon abgeleiteten Klasse zeigt (`Circle`). Wird eine vererbte, überschriebene Methode (`area`) aufgerufen so wird die Methode aufgerufen die zum konkreten Objekt passt.
</div>

<div class='uebung' caption='Erweiterungen in Shape'>
ergänze in `Shape` einen `private String` für den Namen des Grafik-Objekts. Definiere zusätzlich in `Shape` eine Methode `toString` für den Namen und die Fläche.
Wie verhält sich das im Zusammenhang mit Polymorphie?
</div>

\pagebreak

# Abstrakte Klassen

<div class='uebung' caption='toString'>
Erstelle ein Objekt der Klasse `Shape` und rufe die `toString` Methode auf. Was passiert?
</div>

Manche Basisklassen bei Vererbung bestehen aus Variablen und Methoden die andere, davon abgeleitet Klassen gemeinsam haben ("gemeinsamer Faktor"). Häufig ist es aber so, dass konkrete Objekte von diesen Basisklassen keinen Sinn machen. 

<div class="example">
Beispiel:
Ein Objekt der Klasse `Shape` hat keinen Namen (es weiß ja nicht ob es ein Kreis, Rechteck oder sonstwas ist) und kann keine Fläche berechnen.
</div>

<div class="definition">
Klassen können als **abstrakt** definiert werden. Abstrakte Klassen sind wie normale Klassen, aber:

- von abstrakten Klassen können **keine Objekt** angelegt werden,
- abstrakte Klassen können **abstrakte Methoden** enthalten. Diese haben keine Implementierung.
</div>

Das Schlüsselwor `abstract` kann bei Klassen und Methoden angewendet werden:

```java
public abstract class Abstract {
    public abstract void someMethod();
}
```

<div class='uebung' caption='Abstract'>
Ändere `Shape` in eine abstrakte Klasse.
</div>



# Beispiele - Tiere

Ein Tier kann gewisse Laute von sich geben, z.B.\ ein Hund: "`Wuff"'.

Von einem Tier wissen wir dass es Laute von sich geben kann, aber noch nicht genau welche.

```java
public abstract class Tier {
    abstract public void gibLaut();
}
```


```java
public class Hund 
  extends Tier {
  public void gibLaut() {
      sout("Wuff");
  }
}
```


```java
public class Katze 
  extends Tier {
  public void gibLaut() {
    sout("Miau");
  }
}
```

```java
Hund wuffi=new Hund();
Katze muzi=new Katze();

wuffi.gibLaut();
muzi.gibLaut();

Tier viech=new Katze();
viech.gibLaut();
```

Ausgabe:

```
Wuff
Miau
Miau
```

Von der abstrakten Klasse Tier können zwar keine Objekte angelegt werden, aber die Verwendung als Referenzvariable (wie oben) ist zulässig und in manchen Fällen ziemlich praktisch.

<div class='uebung' caption='Tier'>
Füge ein weiteres Tier hinzu.
</div>


<div class='uebung' caption='Tier Array'>
Lege ein Array aus unterschiedlichen Tieren an.
Gib in **einer** Schleife alle Laute dieser Tiere aus.
</div>

<div class='uebung' caption='Getränke'>
Schreibe ein Programm das unterschiedliche Getränke in einer ArrayList verwaltet.


- Erstelle eine Basisklasse `Getraenk` mit den abstrakten Methoden
    - `String name()`
    - `String wirkung()`    
- Implementiere weiters: `String toString`, soll erzeugen `"Das Getränk <name> wirkt: <wirkung>"`.  Für `<name>` und `<wirkung>` sind die Methoden `name()` und `wirkung()` aufzurufen.
- Leite nun von `Getraenk` einige weitere Klassen ab (z.B. `Kaffee`, `Kakao`, `Tee`, usw.) und überschreibe jeweils die Methoden `name()` und `wirkung()`. Instanziere Objekte und rufe die `toString()` Methode zum Test auf.
- Lege ein `ArrayList<Getraenk>` an und füge einige Getränke hinzu. Gib die Wirkung aller Getränke im Array aus (in einer Schleife).

</div>


 

# Übungsaufgabe

<div class='uebung' caption='Grafikobjekte'>
Verwende **Processing** für diese Übung

Es sollen unterschiedliche Grafik-Objekte (Kreise, Rechtecke) am Bildschirm animiert werden.

Jedes Objekt hat eine eigenständige Position und Geschwindigkeit.
Stelle diesen Sachverhalt durch eine abstrakte Klasse dar.

Mehrere Kreise und Rechtecke sollen sich am Bildschirm bewegen.

Ergänze ein Grafik Objekt das aus einem Quadrat und einem Kreis besteht. Das Quadrat soll dem Kreis eingeschrieben sein.

Ergänze (zusätzlich) Kreise die während der Bewegung die Farbe ändern.

Durch klicken mit der Maus auf ein Objekt, ändert dieses (zufällig) die Bewegungsrichtung und Geschwindigkeit.

Erweiterungen:

- Reflektieren am Bildschirmrand
- Weitere Grafik-Objekte
- Besondere Grafik-Objekte die bei Kollision mit einem anderen Objekt, dieses und sich selbst zerstören.
- Objekte ändern bei Kollision die Farbe
- Objekte können abgeschossen werden
- Rotierende Quadrate

</div>
