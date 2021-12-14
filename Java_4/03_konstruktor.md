---
title: Konstruktoren
subtitle: Vererbung
tags: [lecture,4BHELS]
---

Konstruktoren werden **nicht vererbt** sondern **automatisch aufgerufen**.

Beispiel:

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


