---
title: Vererbung
tags: [lecture,4BHELS]
---



Bei der **Vererbung** wird eine neue Klasse angelegt die den Inhalt einer bestehenden Klasse enthält.


Vorteile:

- Wiederverwendung von bestehendem Code
- Software besser strukturiert
- Arbeitsersparnis

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
        return name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
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

