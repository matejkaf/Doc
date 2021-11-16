---
title: Arrays
subtitle: Übungen Static Array (mit Generic)
tags: [assignment]
---



Mittels **Generics** können Klassen definiert werden die mit beliebigen Datentypen arbeiten können. Die Klasse ArrayList ist beispielsweise generic.

```java
ArrayList<Wort> woerter;
ArrayList<Integer> werte;
```

Folgendes Beispiel illustriert wie man selbst eine generische Klasse anlegen kann:

```java
public class Box<T> {
  // T steht stellvertretend für eine beliebige Klasse. (T=Type)
  private T t;

  public void set(T t) {
    this.t = t;
  }

  public T get() {
    return t;
  }
}

// ...

public static void main(String[] args) {
  Box<Integer> integerBox = new Box<Integer>();
  Box<String> stringBox = new Box<String>();

  integerBox.set(new Integer(10));
  stringBox.set(new String("Hello World"));

  System.out.printf("Integer Value :%d\n\n", 
                    integerBox.get());
  System.out.printf("String Value :%s\n", 
                    stringBox.get());
}
```


Hinweis: Leider lassen sich Arrays nicht generisch anlegen dazu ist ein zusätzlicher Parameter in den Konstruktoren notwendig.

```java
class Test<T> {
  T[] arr;
  public Test(int length) {
    arr = new T[length]; // geht nicht!
  }
  public Test(Class<T> c, int length) {
    arr = (T[])Array.newInstance(c, length); // aber so
  }
}

Test<Integer> test = new Test<Integer>(Integer.class, 7);
```



---

#### Übung (Generic StaticArray)

Erweitere die Klasse `StaticArray` mittels Generics so, dass Arrays beliebiger Datentypen verwaltet werden können.

Teste mit den Klassen:

- `Person` (Name und Alter), 
- `Integer` und 
- `String`.



---

#### Übung (Generic StaticArray)

Erweitere durch:

- eine Methode `slice` die ein Teil Array (definiert durch Start und End-Index zurückliefert). Rückgabewert ist `StaticArray`.
- eine Methode `add` die als Parameter ein `StaticArray` Objekt erhält und ein neues `StaticArray` Objekt erzeugt das die Daten des lokalen und des als Parameter übergebenen Objekts enthält.  Rückgabewert ist `StaticArray`.
- eine Methode `find` die einen Wert im Array sucht. Rückgabewert ist der Index, bzw. $-1$ falls nicht gefunden.

