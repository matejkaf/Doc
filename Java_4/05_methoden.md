---
title: Methoden
subtitle: Vererbung
tags: [lecture]
---



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


Implementierung der Basisklasse aufrufen: Oft macht es Sinn das was die Basisklasse schon kann, in der abgeleiteten Klasse wiederzuverwenden. Dies geht mit dem Schlüsselwort `super`.

```java
public class Schueler extends Person {
    int knr;
    public String toString() {
        return "KatNr: "+knr+", "+super.toString();
    }
}
```







# Die Klasse Object

Eigentlich kann in Java **keine Klasse ohne Vererbung** angelegt werden. Wird das `extends` Schlüsselwort weggelassen, so erbt die Klasse automatisch von der Standard Java Klasse mit dem Namen `Object`.

Dieser Mechanismus sorgt dafür, dass bestimmte Methoden von allen Klassen immer unterstützt werden.
Diese Methoden sind in der Klasse `Object` vorgegeben, die Klasse `Object` ist in der Vererbungshierarchie ganz oben, sie ist die gemeinsame Basisklasse für alle anderen Klassen.

#### Übung (Object IntelliSense)

Verwende IntelliSense um herauszufinden welche Methoden die Klasse `Object` unterstützt.
Welche Methoden sind schon bekannt?