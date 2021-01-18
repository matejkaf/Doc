---
title: Doc
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ 5AHELS, patterns ]
---



# Factory Method – Design Pattern

[wikipedia – Factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)

In class-based programming, the **factory method pattern** is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects **by calling a factory method**—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.



## Variante 1

```csharp
// (c) Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethodTheoryCode
{
    class Program
    {
        static void Main(string[] args)
        {
            Creator c = new Creator();
            IProduct product;

            //IProduct p = new ProductA();
            
            for (int i = 1; i <= 12; i++)
            {
                product = Creator.newInstance(i);
                Console.WriteLine("Avocados " + product.ShipFrom());
            }

            Console.ReadLine();
        }
    }

    interface IProduct
    {
        string ShipFrom();
    }

    class ProductA : IProduct
    {
        public String ShipFrom()
        {
            return " from South Africa";
        }
    }
    class ProductB : IProduct
    {
        public String ShipFrom()
        {
            return " from Spain";
        }
    }
    class DefaultProduct : IProduct
    {
        public String ShipFrom()
        {
            return "not available";
        }
    }

    class Creator
    {
        public static IProduct newInstance(int month)
        {
            if (month >= 4 && month <= 11)
            {
                return new ProductA();
            }
            else
            {
                if (month == 1 || month == 2 || month == 12)
                {
                    return new ProductB();
                }
                else
                {
                    return new DefaultProduct();
                }
            }
        }
    }
}
```
