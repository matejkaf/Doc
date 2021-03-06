---
title: Vererbung
tags: [l]
---



# Allgemein

Bei der **Vererbung** wird eine neue Klasse angelegt die den Inhalt einer bestehenden Klasse enthält.


Vorteile:

- Wiederverwendung von bestehendem Code.
- Software besser strukturiert.
- Arbeitsersparnis.

Beispiel

```java
public class Person {
    String name;
}

public class Schueler extends Person {
    // Schueler erbt Inhalt von Person
    int knr; 
}

Schueler s = new Schueler();
s.name = "mayr"; // geerbt
s.knr = 12;
```

Man sagt:

- Die Klasse `Schueler` ist von der Klasse `Person` **abgeleitet**
- `Person` ist die **Basisklasse**
- Die Klasse `Schueler` **erbt** von `Person`



# Vererbung von Methoden

Auch Methoden werden vererbt.

```java
public class Person {
    String name;
    String capName() {
        return name.substring(0,1).toUpperCase() +
            name.substring(1).toLowerCase();
    } 
}

public class Schueler extends Person {
    int knr;
}
```

Klasse `Schueler` erbt die Methode `capName`.

```java
Schueler s = new Schueler();
s.name = "mayr";
s.knr = 12;
System.out.println( s.capName() );
```


Methoden in der Klasse `Schueler` haben Zugriff auf geerbte Instanzvariablen und Methoden.

```java
public class Schueler extends Person {
    int knr;
    public void print() {
        System.out.println(knr + ": " + capName() );
    }
}
```

# Überschreiben von Methoden

```java
public class Person {
    String name;
    public String toString() {
        return "Name: "+name;
    }
}
```

```java
public class Schueler extends Person {
    int knr;
    public String toString() {
        return "KatNr: "+knr+", Name: "+name;
    }
}
```

`toString` bekommt in der Klasse `Schueler` eine neue Bedeutung, daher **Überschreiben**.


Implementierung der Basisklasse aufrufen:
Oft macht es Sinn das was die Basisklasse schon kann, in der abgeleiteten Klasse wiederzuverwenden. Dies geht mit dem Schlüsselwort `super`.

```java
public class Schueler extends Person {
    int knr;
    public String toString() {
        return "KatNr: "+knr+", "+super.toString();
    }
}
```

Übung 1 und Übung 2 vom Übungsblatt.


# Vererbungshierarchien

Geerbt werden kann immer nur von einer einzigen Klasse, aber wie oft Vererbung hintereinander ausgeführt wird ist nicht begrenzt.
Außerdem kann eine Klasse die Basisklasse für mehrere abgeleitete Klassen sein.

```java
public class Person {...}

public class Schueler extends Person {...}

public class OeffArb extends Schueler {...}
```

Erweitere Übung 1 vom Übungsblatt.
Lege eine Klasse für Öffentlichkeitsarbeiter an.


Zeichne eine Klassenhierarchie aus 
`Person`,
`Schueler`,
`Lehrer`,
`OeffArb`,
`Jahrling`,
`Maturant`,
`Walter`.

# Konstruktoren

Konstruktoren werden **nicht vererbt** sondern **automatisch aufgerufen**.

Beispiel

```java
public class A  {
    public A() {
        System.out.println("AAA");
    }
}

public class B extends A {
    public B() {
        System.out.println("BBB");
    }
}
```

Es wird automatisch der Default-Konstruktor der Basisklasse `A` aufgerufen.
Das könnte man auch direkt hinschreiben mit dem Schlüsselwort `super`: 

```java
public class B extends A {
    public B() {
        super(); // Aufruf Default Konstruktor in Klasse A
        System.out.println("BBB");
    }
}
```

`super` wird benötigt wenn ein Konstruktor mit Parameter aufgerufen werden soll. Siehe nachfolgende Aufgabe.

Übung (Erweiterung)

Erweitere die Klasse A um eine private int Instanzvariable.
Ergänze Konstruktoren (in beiden Klassen) mit einem Parameter um diese Instanzvariable auf einen Startwert setzen zu können.

Übung 3 und 4 vom Übungsblatt.


# Die Klasse Object

Eigentlich kann in Java **keine Klasse ohne Vererbung** angelegt werden.
Wird das `extends` Schlüsselwort weggelassen, so erbt die Klasse automatisch von der Standard Java Klasse mit dem Namen `Object`.

Dieser Mechanismus sorgt dafür, dass bestimmte Methoden von allen Klassen immer unterstützt werden.
Diese Methoden sind in der Klasse `Object` vorgegeben, die Klasse `Object` ist in der Vererbungshierarchie ganz oben, sie ist die gemeinsame Basisklasse für alle anderen Klassen.

Übung (Experiment)

Verwende IntelliSense um herauszufinden welche Methoden die Klasse `Object` unterstützt.
Welche Methoden sind schon bekannt?