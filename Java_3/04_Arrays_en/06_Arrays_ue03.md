---
title: Arrays
subtitle: Übungen Static Array
cmds: ['md_html.bash --small']
tags: [assignment]
---

In dieser Aufgabenstellung ist eine Klasse zu implementieren die Daten in einem Array verwalten kann. Ähnlich wie bei der Standard Klasse `ArrayList` sollen die Array Elemente über eine `get` und eine `set` Methode zugreifbar sein. Anders als bei der Klasse `ArrayList` ist das durch diese Klasse verwaltete Array nicht ein dynamisches sondern ein statisches Array einer fixen Größe, es kann daher nicht beliebig groß werden. 



---

#### **Übung (StaticArray):**

Implementiere:

- eine Klasse `StaticArray` mit einem `int` Array als Instanzvariable.
- einen Konstruktor mit der gewünschten Array Länge als `int` Parameter.
Im Konstruktor soll das Array mit `new` angelegt werden.
- eine `toString` Methode die aus dem Inhalt des `int` Arrays einen String der Form `[1,2,3,4]` erzeugt.
- eine `set` Methode mit der ein Array Element an einem Index auf einen Wert gesetzt werden kann (2 Parameter: Index und Wert).
- eine `get` Methode die ein Array Element an einem Index (Parameter) liest und den Wert an dieser Index Position als Rückgabewert liefert.
- programmiere `get` und `set` so, dass keine `ArrayIndexOutOfBounds` Exceptions entstehen können.
Zugriffe mit ungültigen Indizes sollen ignoriert werden.



---

#### **Übung (StaticArray Erweiterungen):**

Erweitere durch:

- 
einen weiteren Konstruktor der zusätzlich zur Länge einen Startwert (auf den jedes Array Element gesetzt werden soll) als Parameter hat.
- 
Einen Konstruktor der als Parameter ein `int` Array übergeben bekommt.
Das übergebene Array soll übernommen werden.
Experimentiere was bei Änderung der Array Werte passiert – wenn Array Elemente im `StaticArray` Objekt verändert werden ändert sich dann auch das Array das an den Konstruktor übergeben wurde? Warum ist das so?
Implementiere so, dass das übergebene Array unabhängig von den Daten im `StaticArray` Objekt ist.


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

   public void add(T t) {
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
    
      integerBox.add(new Integer(10));
      stringBox.add(new String("Hello World"));

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
		arr = (T[])Array.newInstance(c, length);
	}
}

Test<Integer> test = new Test<Integer>(Integer.class, 7);
```



---

#### **Übung (Generic StaticArray):**

Erweitere die Klasse `StaticArray` mittels Generics so, dass Arrays beliebiger Datentypen verwaltet werden können.

Teste mit den Klassen:

- `Person` (Name und Alter), 
- `Integer` und 
- `String`.



---

#### **Übung (Generic StaticArray):**

Erweitere durch:

- 
eine Methode `slice` die ein Teil Array (definiert durch Start und End-Index zurückliefert). Rückgabewert ist `StaticArray`.
- 
eine Methode `add` die als Parameter ein `StaticArray` Objekt erhält und ein neues `StaticArray` Objekt erzeugt das die Daten des lokalen und des als Parameter übergebenen Objekts enthält.  Rückgabewert ist `StaticArray`.
- eine Methode `find` die einen Wert im Array sucht. Rückgabewert ist der Index, bzw. $-1$ falls nicht gefunden.
