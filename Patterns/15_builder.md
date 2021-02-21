---
title: Doc
tags: [5AHELS, lecture, patterns ]
---



# Builder – Design Pattern

- [refactoring.guru](https://refactoring.guru/design-patterns/builder)
- [Beispiel - 8 design patterns that every developer should know](http://www.thedevpiece.com/design-patterns-that-every-developer-should-know/)
- [The builder pattern in practice](https://jlordiales.me/2012/12/13/the-builder-pattern-in-practice/)



## Konstruktor Problem

Probleme wenn Konstruktoren **zu viele Parameter** haben

- Aus der Position wird die Bedeutung nicht klar.
- Unterscheidung optional/required Parameter
- Defaultwerte bei optional Parametern



Mit Konstruktor:

```java
Student hans = new Student("Hans",3);
```

Lösung mit Builder:

```java
Student hans = new StudentBuilder().
        setName("Hans").
        setGrade(3).
        build();
```



## Implementierung (Java)

2 Klassen: `Student` und `StudentBuilder`

```java
public class Student {
    private final String name;
    private final int grade;

    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }    
    
}
```



### StudentBuilder


```java
public class StudentBuilder {

    private String name;
    private int grade;

    public StudentBuilder() {
    }

    public StudentBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public StudentBuilder setGrade(int grade) {
        this.grade = grade;
        return this;
    }

    public Student build() {
        return new Student(name, grade);
    }
    
}
```



## Implementierung (C#)

`readonly` fields, [Final variables in C#](https://www.tutorialspoint.com/Final-variables-in-Chash)



## Immutability

Begründung für `private final`: Die allermeisten Instanzvariablen werden nach dem Istanzieren nicht mehr verändert. Es bringt mehrere Vorteile ein Objekt so zu entwerfen, dass es **immutable** (d.h. unveränderbar ist). Bedeutet alle Instanzvariablen sind `final`. Siehe z.B. [The ins and outs of immutability](https://www.javacodegeeks.com/2013/01/the-ins-and-outs-of-immutability.html)

- result in cleaner designs and easier to read code.
- less error prone 
- you can just share around those immutable objects without having to worry about [defensive copies](https://javacreed.com/what-is-defensive-copying)
- just plain simple. They can be in only one state and they keep that state for their entire life
- inherently thread-safe



## optional/required

Andere Variante mit Builder als innerer Klasse und Unterscheidung zwischen required und optional Parametern. Beispiel Klasse für eine Person:

- Vorname und Nachname müssen immer angegeben werden (required)
- Alter und Telefonnummer sind optional.

```java
package buildertest;

public class Person {

    private final String firstName; // required
    private final String lastName; // required
    private final int age; // optional
    private final String phone; // optional

    private Person(PersonBuilder builder) {
        firstName = builder.firstName;
        lastName = builder.lastName;
        age = builder.age;
        phone = builder.phone;
    }

    // Getter Methoden ....
    
    // static nested class:
    // im Namespace von Person, aber nicht mit jedem Person Objekt verbunden
    public static class PersonBuilder {

        // Kopie der Instanzvariablen, required sind final
        private final String firstName;
        private final String lastName;
        private int age;
        private String phone;

        // Konstruktor mit den required Parametern
        public PersonBuilder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        // "setter" für die optionalen Parameter
        public PersonBuilder age(int age) {
            this.age = age;
            return this;
        }

        public PersonBuilder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Person build() {
            return new Person(this);
        }

    }
}
```

```java
Person p = new Person.PersonBuilder("Max","Mustermann")
        .age(22).build();
```



## Sonstiges

Netbeans: Rechtsklick in den Konstruktor >> Refactor >> Replace Constructor with Builder.



## Beispiel – Java

Weiteres Beispiel, RESTful Webservice in Netbeans mit **JAX-RS**. Build eines `Response` Objekts:

```java
@POST
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public Response post(Grade grade) {
    System.out.println("post: "+grade);
    Grade newGrade = Model.getInstance().addNewGrade(grade);
    return Response.
        status(Response.Status.CREATED). // 201
        header("Location", "grades/"+newGrade.getId()).
        entity(newGrade).
        build();
}
```



## Beispiel – Rust

```rust
use flappybird::FlappyBird;

fn main() {
  // Make a Context.
  let (mut ctx, mut event_loop) = ContextBuilder::new("my_game", "Cool Game Author")
  .window_setup(ggez::conf::WindowSetup::default().title("Flappy Bird"))
  .window_mode(ggez::conf::WindowMode::default().dimensions(1200_f32,600_f32))
  .build()
  .expect("aieee, could not create ggez context!");

  let mut my_game = FlappyBird::new(&mut ctx);

}

```



