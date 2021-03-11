---
title: Design Pattern
subtitle: Strategy
tags: [lecture, 5AHELS, patterns ]
---

Mit dem *Strategy* Pattern können zur Laufzeit austauschbare Algorithmen definiert werden.
[wikipedia: Strategy pattern](https://en.wikipedia.org/wiki/Strategy_pattern)

## Beispiel – Java

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



## Beispiel – C#

```csharp
using System;

//
// Strategy Pattern
//

/*
Für zur Laufzeit austauschbare Algorithmen.

Bsp. Bar die je nach Tageszeit (happy hour) unterschiedliche Preise.
*/

namespace _210113_DIC_Strategy
{

  // Strategy Klassisch
  interface IPriceStrategy {
    double calculatePrice(double basePrice);
  }
  class Drink {
    string Name;
    double Cost;
    public Drink(string Name, double Cost) {
      this.Name = Name;
      this.Cost = Cost;
    }

    IPriceStrategy _PriceStrategy;
    public IPriceStrategy PriceStrategy
    {
      set { _PriceStrategy = value; }
    }

    public double GetCost() {
      return _PriceStrategy.calculatePrice(Cost);
    }
  }
  class NormalPriceStrategy : IPriceStrategy
  {
    public double calculatePrice(double basePrice)
    {
      return basePrice;
    }
  }
  class HappyHourPriceStrategy : IPriceStrategy
  {
    public double calculatePrice(double basePrice)
    {
      return basePrice*0.5;
    }
  }

  //
  // Strategy mit delegates
  class Drink2 {
    string Name;
    double Cost;
    public Drink2(string Name, double Cost) {
      this.Name = Name;
      this.Cost = Cost;
    }

    public delegate double PriceCalcDelegateDef(double basePrice);
    PriceCalcDelegateDef _PriceCalcDelegate;
    public PriceCalcDelegateDef PriceCalcDelegate {
      set {_PriceCalcDelegate=value;}
    }
    public double GetCost() {
      return _PriceCalcDelegate(Cost);
    }
  }


  class Program
  {
    public static double NormalPriceCalc(double basePrice) {
      System.Console.WriteLine("NormalPriceCalc");
      return basePrice;
    }

    static void Main(string[] args)
    {
      var bier = new Drink("Bier",3.5);
      bier.PriceStrategy = new NormalPriceStrategy();
      System.Console.WriteLine(bier.GetCost());
      bier.PriceStrategy = new HappyHourPriceStrategy();
      System.Console.WriteLine(bier.GetCost());

      // mit delegate
      var ginTonic = new Drink2("Gin Tonic", 6.0);
      ginTonic.PriceCalcDelegate = NormalPriceCalc;
      System.Console.WriteLine(ginTonic.GetCost());
      ginTonic.PriceCalcDelegate = basePrice => basePrice*0.5;
      System.Console.WriteLine(ginTonic.GetCost());
    }
  }
}
```

