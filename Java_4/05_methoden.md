---
title: Methoden
subtitle: Vererbung
tags: [lecture,4BHELS]
---



# Überschreiben von Methoden

```java
public class Person {
  public String essen() {
    return "Burger";
  }
}
```

```java
public class Schueler extends Person {
  public String essen() {
    return "Pizza";
  }
}
```

Die Methode `essen` bekommt in der Klasse `Schueler` eine neue Bedeutung, daher **Überschreiben** einer Methode.


Oft macht es Sinn das was die Basisklasse schon kann, in der abgeleiteten Klasse wiederzuverwenden. Dies geht mit dem Schlüsselwort `super` damit wird die Implementierung in der Basisklasse aufgerufen:

```java
public class Schueler extends Person {
  public String essen() {
    return super.essen()+" mit Pommes";
  }
}
```



# Die Klasse Object

Eigentlich kann in Java **keine Klasse ohne Vererbung** angelegt werden. Wird das `extends` Schlüsselwort weggelassen, so erbt die Klasse automatisch von der Standard Java Klasse mit dem Namen `Object`.

Dieser Mechanismus sorgt dafür, dass bestimmte Methoden von allen Klassen immer unterstützt werden.
Diese Methoden sind in der Klasse `Object` vorgegeben, die Klasse `Object` ist in der Vererbungshierarchie ganz oben, sie ist die gemeinsame Basisklasse für alle anderen Klassen. Beispiele:

- toString
- equals