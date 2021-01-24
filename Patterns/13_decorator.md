---
title: Doc
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---

# Decorator – Design Pattern

- [refactoring.guru](https://refactoring.guru/design-patterns/decorator)

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

Optional sind die folgenden Extras (auch mehrfach und kombiniert) möglich:

- Oliven (+0,5 EUR)
- Sardellen (+0,9 EUR)
- Artischocken (+0,7 EUR)

Implementiere mit Hilfe des Decorator Patterns. Es soll für jede bestellte Pizza ein informativer Text und der Preis ausgegeben werden.

---



## Beispiel

```csharp
///(c) G.Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DecoratorTheoryCode
{
  class Program
  {
    static void Main(string[] args)
    {
      IComponent component = new Component();

      Console.WriteLine(new DecoratorA(component).Operation());
      Console.WriteLine(new DecoratorB(component).Operation());
      Console.WriteLine(new DecoratorB(new DecoratorA(component)).Operation());
      Console.WriteLine(new DecoratorA(new DecoratorB(component)).Operation());

      Console.ReadLine();
    }
  }

  interface IComponent
  {
    string Operation();
  }

  class Component : IComponent
  {
    public string Operation()
    {
      return "I am walking ";
    }
  }

  class DecoratorA : IComponent
  {
    private IComponent component;

    public DecoratorA(IComponent component)
    {
      this.component = component;
    }

    public string Operation()
    {
      string s = this.component.Operation();
      s += "and listening to Classic FM ";
      return s;
    }
  }

  class DecoratorB : IComponent
  {
    private IComponent component;
    public string addedState = "past the Coffee Shop ";

    public DecoratorB(IComponent component)
    {
      this.component = component;
    }

    public string Operation()
    {
      string s = this.component.Operation();
      s += "to school";
      return s;
    }

    public string AddedBehavior()
    {
      return "and I bought a cappuccino ";
    }
  }
}

```



## Extension Method

C# Konzept, Ähnliche Anwendung wie Decorator.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensionMethodTest
{
  class Program
  {
    static void Main(string[] args)
    {
      string s = "Ein Neger mit Gazelle zagt im Regen nie";

      Console.WriteLine(s.Reverse());

      if(s.IsPalindrome())
      {
        Console.WriteLine("Es ist ein Palindrom!");
      }
      else
      {
        Console.WriteLine("Es ist kein Palindrom!");
      }

      Console.ReadLine();
    }
  }

  static class MyStringExtensions
  {
    public static string Reverse(this string s)
    {
      return new string(s.ToCharArray().Reverse().ToArray());
    }

    public static bool IsPalindrome(this string s)
    {
      return (s = s.Replace(" ", "").ToLower()).Equals(s.Reverse());
    }
  }
}
```

