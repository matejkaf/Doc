---
title: Decorator – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Decorator

Beispiel: Java Stream Klassen:

```java
URLConnection connectionHTL=urlHTL.openConnection();
    BufferedReader in =
       new BufferedReader(
           new InputStreamReader(
              connectionHTL.getInputStream()));              
```

```java
BufferedReader file;
file = new BufferedReader(new FileReader("test.txt"));
```

Beispiel - Kaffee der optional mit Milch und/oder Zucker sein kann.

```java
interface Coffee {
    public String getIngredients();
}

class PlainCoffee implements Coffee {

    @Override
    public String getIngredients() {
        return "Coffee";
    }
}
```

```java
abstract class CoffeeDecorator implements Coffee {
    private final Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee c) {
        this.decoratedCoffee = c;
    }

    public String getIngredients() {
        return decoratedCoffee.getIngredients();
    }
}
```

```java
class WithMilk extends CoffeeDecorator {

    public WithMilk(Coffee c) {
        super(c);
    }

    @Override
    public String getIngredients() {
        return super.getIngredients() + ", Milk";
    }    
}

class WithShugar extends CoffeeDecorator {

    public WithShugar(Coffee c) {
        super(c);
    }

    @Override
    public String getIngredients() {
        return super.getIngredients() + ", Shugar";
    }    
}
```

```java
public class CoffeeMain {

    public static void main(String[] args) {

        Coffee coffee1 = new PlainCoffee();
        System.out.println(coffee1.getIngredients());

        Coffee coffee2 = new WithMilk(new PlainCoffee());
        System.out.println(coffee2.getIngredients());

        Coffee coffee3 = new WithShugar(new WithMilk(new PlainCoffee()));
        System.out.println(coffee3.getIngredients());


    }
}
```

[Weiteres Decorator Beispiel - tutorialspoint](https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm)

---

**Übung (Pizza Service)**

Ein Pizza Service bietet die folgenden Pizzen:

- Margherita (8,00 EUR)
- Napoli (9,50 EUR)
- Mafiosi (9,80 EUR)

Optional sind die folgenden Extras möglich:

- Oliven (+0,5 EUR)
- Sardellen (+0,9 EUR)
- Artischocken (+0,7 EUR)

Implementiere mit Hilfe des Decorator Patterns. Es soll für jede bestellte Pizza ein informativer Text und der Preis ausgegeben werden.

---


# 