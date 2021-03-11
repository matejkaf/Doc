---
title: Design Pattern
subtitle: Decorator
tags: [5AHELS, lecture, patterns ]
---

- [refactoring.guru](https://refactoring.guru/design-patterns/decorator)

- [wikipedia](https://en.wikipedia.org/wiki/Decorator_pattern)

- [tutorialspoint](https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm)



<img src="fig/606px-Decorator_UML_class_diagram.svg.png" alt="img" style="zoom:67%;" />



**Decorator** Erweitert das bestehende Interface um

- Zusätzliches Verhalten (bereits vorhandener Methoden)
- Zusätzlichem Zustand (Instanzvariablen)
- Zusätzliche Methoden



## Beispiel – Java Stream Klassen:

```java
URLConnection connectionHTL=urlHTL.openConnection();
BufferedReader in =
  new BufferedReader(
  new InputStreamReader( connectionHTL.getInputStream() ));              
```

```java
BufferedReader file = new BufferedReader(new FileReader("test.txt"));
```



## Beispiel – Kaffee (Java)

... der optional mit Milch und/oder Zucker sein kann.

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



## Beispiel – Kaffee (C#)

Optional: Milch, Zucker, Whiskey

```csharp
using System;

namespace _210215_decorator
{
  interface ICoffee {
    public string GetIngredients();
  }

  class PlainCoffee : ICoffee {
    public string GetIngredients() {
      return "Kaffee";
    }
  }

  abstract class CoffeeDecorator : ICoffee {
    ICoffee decoratedCoffee;
    public CoffeeDecorator(ICoffee c) {
      decoratedCoffee = c;
    }

    public virtual string GetIngredients()
    {
      return decoratedCoffee.GetIngredients();
    }
  }

  class WithMilk : CoffeeDecorator
  {
    public WithMilk(ICoffee c) : base(c) { }
    public override string GetIngredients()
    {
      return base.GetIngredients() + ", mid Milli";
    }
  }

  class WithSugar : CoffeeDecorator
  {
    public WithSugar(ICoffee c) : base(c) { }
    public override string GetIngredients()
    {
      return base.GetIngredients() + ", mid Guzzi";
    }
  }

  class WithWhiskey : CoffeeDecorator
  {
    public WithWhiskey(ICoffee c) : base(c) { }
    public override string GetIngredients()
    {
      return base.GetIngredients() + ", mid Geist";
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      ICoffee kaffee = new PlainCoffee();
      System.Console.WriteLine(kaffee.GetIngredients());

      ICoffee k2 = new WithSugar( new PlainCoffee() );
      System.Console.WriteLine(k2.GetIngredients());

      ICoffee k3 = new WithMilk( new WithSugar( new PlainCoffee() ) );
      System.Console.WriteLine(k3.GetIngredients());

      ICoffee k4 = new WithSugar( new WithMilk( new PlainCoffee() ) );
      System.Console.WriteLine(k4.GetIngredients());

      ICoffee k5 = new WithWhiskey( new WithSugar( new WithMilk( new PlainCoffee() ) ) );
      System.Console.WriteLine(k5.GetIngredients());

      ICoffee k6 =  new WithWhiskey( new WithWhiskey( new WithSugar( new WithMilk( new PlainCoffee() ) ) ) );
      System.Console.WriteLine(k6.GetIngredients());
    }
  }
}

```



## Beispiel

```csharp
// (c) G.Waser
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



## C# Extension Method

C# Konzept, ähnliche Anwendung wie Decorator aber nicht gleich. Erweitert einen Datentypen ohne einen neuen anzulegen. Statisches Konzept im Vergleich zu Decorator – [The Decorator Pattern & Extension Methods in c#](https://stackoverflow.com/questions/4888116/the-decorator-pattern-extension-methods-in-c-sharp)

> You can use extension methods to extend a class or interface, but **not to override** them. An extension method with the same name and signature as an interface or class method will never be called. [[Extension Methods (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods#binding-extension-methods-at-compile-time)]



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
      return ( s = s.Replace(" ", "").ToLower() ).Equals(s.Reverse());
    }
  }
}
```

- [LINQ – Enumerable.Reverse](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.reverse?view=netframework-4.8)

- [LINQ – Enumerable.ToArray](https://docs.microsoft.com/en-us/dotnet/api/system.linq.enumerable.toarray?view=net-5.0)

