---
title: Konstruktoren
subtitle: Vererbung
tags: [lecture,4BHELS]
---

Konstruktoren sind eine Ausnahme, sie werden **nicht vererbt** sondern **automatisch aufgerufen**. Es wird immer dafür gesorgt, dass ein Konstruktor in der Basisklasse aufgerufen wird. Falls dieser Aufruf fehlt wird er automatisch ausgeführt.

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

Es wird automatisch der Default-Konstruktor der Basisklasse `A` aufgerufen. Das könnte man auch direkt hinschreiben mit dem Schlüsselwort `super`: 

```java
public class B extends A {
    public B() {
        super(); // Aufruf Default Konstruktor in Klasse A
        System.out.println("BBB");
    }
}
```

`super()` ist der Aufruf des Konstruktors in der Basisklasse.

`super` wird benötigt wenn ein Konstruktor mit Parameter(n) aufgerufen werden soll. Siehe nachfolgende Beispiele.

# private

Instanzvariablen werden häufig als `private` deklariert um Implementierungsdetails nach außen zu verbergen. Das verbessert die Änderbarkeit einer Klasse, weil Abhängigkeiten zu anderen Klassen vermieden werden.

```java
class ExampleBase {
  private int a;
  public ExampleBase(int a) {
    this.a=a;
  }
}
```

In einer abgeleiteten Klasse kann mit `super` der Konstruktor der Basisklasse aufgerufen werden. Eine Parameterübergabe ist dabei möglich und bei `private` Variablen sogar notwendig:

```java
class ExampleInherited extends ExampleBase {
  private int b;
  public ExampleInherited(int a, int b) {
    super(a); // Aufruf des Konstruktors in der Basisklasse `ExampleBase`
    // this.a=a ... nicht möglich da private
    this.b=b;
  }
}
```

Anwendung:

```java
ExampleInherited exi=new ExampleInherited(42,73);
exi.a=10; // nicht möglich da private 
exi.b=12; // nicht möglich da private
```

Als `private`  deklarierte Instanzvariablen können nur in der Klasse verwendet werden in der sie definiert wurden. Wenn ein Zugriff von Außen auf den Wert der Instanzvariable notwendig ist, geschieht dies geordnet über sogenannte getter und setter Methoden:

```java
class ExampleBase {
  private int a;
	// ...
  public int getA() { // getter Methode für a
    return a;
  } 
  public void setA(int a) { // setter Methode für a
    this.a=a;
  }
}
```

Anwendung kann auch an einem `ExampleInherited` Objekt erfolgen da dieses alle Methoden erbt (auch die getter und setter Methoden):

```java
ExampleInherited exi=new ExampleInherited(42,73);
exi.setA(10);
int a_in_exi = exi.getA();
```

