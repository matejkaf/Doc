---
title: Strategy – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Strategy

Mit dem *Strategy* Pattern können zur Laufzeit austauschbare Algorithmen definiert werden.
[wikipedia: Strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern)

Beispiel - Bargetränke die je nach Tageszeit (happy hour) unterschiedliche Preise haben:

```java
interface PriceStrategy {
    public double calculatePrice(double price);
}
```

```java
class Drink {
    double cost;
    PriceStrategy priceStrategy;
    public Drink(double cost) {
        this.cost = cost;
    }

    public void setPriceStrategy(PriceStrategy priceStrategy) {
        this.priceStrategy = priceStrategy;
    }

    double getCost() {
        return priceStrategy.calculatePrice(cost);
    }
}
```

```java
class NormalPriceStrategy implements PriceStrategy {
    public double calculatePrice(double price) {
        return price;
    }
}

class HappyHourPriceStrategy implements PriceStrategy {
    public double calculatePrice(double price) {
        return price*0.5;
    }
}
```

```java
public class StrategyMain {    
    public static void main(String[] args) {
        
        Drink martini = new Drink(3.50);

        // normal price
        martini.setPriceStrategy(new NormalPriceStrategy());
        System.out.println(martini.getCost());

        // happy hour price
        martini.setPriceStrategy(new HappyHourPriceStrategy());
        System.out.println(martini.getCost());
        
    }
}
```

---

**Übung (Strategy Pattern – Bankkonten**

Eine Bank bietet ein Girokonto für Studenten und Berufstätigen an. Die Konditionen sind unterschiedlich für die jährlichen Zinsen und ob man das Konto überziehen kann (ins Minus kommen) oder nicht.

Implementiere mit Hilfe des Strategy Patterns ein Software Design, dass ein Konto darstellen kann mit dem folgendes möglich ist:

- Einzahlungen
- Auszahlungen
- Berechnung und Gutschrift der jährlichen Zinsen
- Überweisungen von einem Konto auf ein anderes

---
