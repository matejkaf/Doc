---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment, patterns ]
---

# Factory Method Variante 2

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

