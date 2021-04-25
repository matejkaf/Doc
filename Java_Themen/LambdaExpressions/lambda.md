---
title: Lambda Expressions und Streams
subtitle: Java 8
---

Lambda Expressions und Streams sind Erweiterungen von Java 8 (2014)

- Lambda Expression: Anonyme Funktion ohne Namen, die wie eine Variable verwendet werden kann.
- Streams: Datenverarbeitung in einer Pipeline.

Folgendes Beispiel verwendet Streams und Lambda Expressions um von einem String Array die Anzahl der Strings zu zählen die länger sind als 4 Buchstaben.

```java
Collection<String> myList = Arrays.asList("wtf","Hello","Java","xyz","123");
long countLongStrings = myList.stream().filter(element -> element.length() > 4).count();
```


## Lambda Expressions

Sind Methoden die **keinen Namen** erhalten (anonym) und die sich **wie Werte** verhalten. D.h. eine Methode kann einer Variablen (z.B. bei Parameterübergabe) zugewiesen werden.
Die Syntax der Methoden-Definition wird dabei stark vereinfacht.
Diese Methoden sind meist kurz, häufig nur eine Zeile.

Gleiche Funktionalität kann mit Interfaces auch erreicht werden aber umständlich.

Beispiel:
Interface zum Testen einer Person auf gewisse Eigenschaften (z.B. älter als 40 Jahre).

```java
class Person {
    String name;
    int age;
}
```

```java
interface CheckPerson {
    boolean test(Person p);
}
```

Konkrete Implementierung des Interface:

```java
class AgeTester implements CheckPerson {
    @Override
    public boolean test(Person p) {
        return p.age > 40;
    }
}
```

Anwendung in einer Methode:

```java
public static void testPerson(Person p, CheckPerson tester) {
    if (tester.test(p)) {
        System.out.println("Person is good");
    } else {
        System.out.println("BAD");
    }
}
```

```java
Person person = new Person();
person.age = 42;
testPerson(person, new AgeTester());
```

Vereinfachen kann man dies in einem ersten Schritt durch Definition einer **anonymen Klasse**.
Dadurch ist es nicht mehr notwendig eine eigene, vom Interface `AgeTester` abgeleitete, Klasse anzulegen.

```java
testPerson(
    person,
    new CheckPerson() {
        @Override
        public boolean test(Person p) {
            return p.age > 40;
        }
    }
);

```

Für Interfaces die nur eine einzige Methode (**functional interface**) enthalten kann eine Lambda Expression statt der Definition und Instanzierung eines Objekts verwendet werden.

**Lösung mit Lambda Expression:**

```java
testPerson(
    person,
    (Person p) -> {
        return p.age > 40;
    }
);

// auch kurz-Variante
testPerson(person, p  -> p.age > 40);
```


## Standard Interfaces

Anstatt das Interface selbst zu definieren, können generische Interfaces aus `java.util.function` verwendet werden.
Zum Beispiel das Interface `Predicate` das folgendermaßen vordefiniert ist.

```java
interface Predicate<T> {
    boolean test(T t);
}
```

Damit kann obiges Beispiel ohne das Interface `CheckPerson` implementiert werden:

```java
public static void testPerson2(Person p, Predicate<Person> tester) {
    if (tester.test(p)) {
        System.out.println("Person is good");
    } else {
        System.out.println("BAD");
    }
}
```
Weitere Functional Interfaces in `java.util.function` siehe
[javadoc](https://docs.oracle.com/javase/8/docs/api/java/util/function/package-summary.html).



## Alternative zur extended for loop

Die extended for loop (*for-each Schleife*) baut auf dem Interface `Iterable` auf, dieses wurde in Java 8 um die Methode `forEach` ([javadoc](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html#forEach-java.util.function.Consumer-)) erweitert.

```java
myList.forEach((String element) -> System.out.println("# "+element));
```

Die Lambda Expression steht dabei für eine Methode die das Interface `Consumer` erfüllt:

```java
Consumer<String> printer = (String element) -> System.out.println("* "+element);
myList.forEach(printer);
```


Functional Interface `Consumer` mit Methode `accept` (mit generischem Parameter, keine Rückgabwert).
([javadoc für Consumer](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html))

Die Lösung würde **ohne Lambda Expressions** folgendermaßen aussehen:

```java
List<String> myList = Arrays.asList("element1", "element2", "element3");
myList.forEach(new Consumer<String>() {
    public void accept(String element) {
        System.out.println(element);
    }
});
```




## Streams

Erweiterung des `Collection` Interface.

Mit streams können Befehls-Pipelines erstellt werden.
Beispiel (mit Lambda Expression):

```java
Collection<String> myList = Arrays.asList("wtf","Hello","Java","xyz","123");
long countLongStrings = myList.stream().filter(element -> element.length() > 4).count();
```


Beispiel - Aufgabenstellung:   
Aus einer Liste von Schülern sollen jene ausgewählt werden die schon mindestens 18 sind. Für diese Schüler ist ein String aus, durch Beistrichen getrennte Email Adressen, zu erzeugen. 

Klasse für einen Schüler:

```java
class Schueler {
    String vn;
    String nn;
    int age;
    // ...
}
```

Collection aus Schülern:

```java
List<Schueler> htlBraunau = new ArrayList<>();
htlBraunau.add(new Schueler("Max","Mustermann",18));
htlBraunau.add(new Schueler("Eva","Musterfrau",18));
htlBraunau.add(new Schueler("Fritz","Müller",16));
```

**Lösung mittels Streams:**

```java
emailString = "";
htlBraunau
        .stream()
        .filter(schueler -> schueler.age>=18)
        .map(schueler -> schueler.vn + "." + schueler.nn + "@htl-braunau.at")
        .forEach(email -> emailString += email +',');
```

## Quellen

- [Oracle Quick Start](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html)
- [Oracle OO Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)
- [Java 8 Erste Schritte mit Lambdas und Streams](https://blog.codecentric.de/2013/10/java-8-erste-schritte-mit-lambdas-und-streams/)
- [Processing Data with Java SE 8 Streams](http://www.oracle.com/technetwork/articles/java/ma14-java-se-8-streams-2177646.html)

