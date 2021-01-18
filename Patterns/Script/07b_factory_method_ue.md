---
title: Doc
type: assignment
cmds: ['md_html.bash','md_html.bash --small']
tags: [ 5AHELS, patterns ]
---

# Factory Method – Design Pattern (Übungen)



**Übung (Meal Decider)**

Schreibe ein Programm mit Klasse `MealDecider`  und factory method `GetMeal` die für die aktuelle Stunde (Verwende die .NET Klasse `DateTime`) ein bestimmtes Objekt mit **IMeal** interface erzeugt. 

Beispiel:

```csharp
interface IMeal
{
  string Eat();
}

class Müsli : IMeal
{
  public string Eat()
  {
    return "Müsli essen";
  }
}

class Jausenweckerl : IMeal
{
  public string Eat()
  {
    return "Jausenweckerl essen";
  }
}
//...
```

Es gibt auch Stunden des Tages in denen es nichts zu essen gibt, in diesem Fall liefert die factory method eine Nullreferenz.

---



## Variante 2

![W3sDesign_Factory_Method_Design_Pattern_UML](fig/W3sDesign_Factory_Method_Design_Pattern_UML.jpg)



[w3design Factory Method](http://w3sdesign.com/?gr=c03&ugr=proble#gf)

```csharp
using System;

namespace factory
{
    class Program
    {
        interface Fruit {
            public string GetName();
            public string Squeeze();
        }

        abstract class FruitPile {
            public Fruit fruit;
            public abstract Fruit factoryMethod();
            
          // design algorithms: w/o concrete class knowledge
            public void SqeezeIt() {
                // lazy instantiation
                if (fruit==null) {
                    fruit=factoryMethod();
                }
                System.Console.WriteLine($"squeezing {fruit.GetName()} gives {fruit.Squeeze()} ");
                fruit.Squeeze();
            }
        }

        class Apple : Fruit {
            public string GetName() {
                return "Apple";
            }
            public string Squeeze() {
                return "Apple juice";
            }
        }

        class ApplePile : FruitPile
        {
            public override Fruit factoryMethod() {
                return new Apple();
            }
        }

        static void Main(string[] args)
        {
            var applePile = new ApplePile();
            applePile.SqeezeIt();

        }
    }
}
	
```

