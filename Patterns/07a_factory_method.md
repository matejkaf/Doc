---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [lecture, 5AHELS, patterns ]
---

# Factory Method – Design Pattern

[wikipedia – Factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)

In class-based programming, the **factory method pattern** is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects **by calling a factory method**—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.



## Variante 1

Produkt monatsabhängig aus unterschiedlichen Ländern verfügbar. Z.B. Orangen, ...

```csharp
using System;

namespace _210118_factory_method
{
  class Program
  {
    static void Main(string[] args)
    {
      for(int month=1; month<=12 ; month++) {
        IOrange orange = OrangeCreator.newInstance(month);
        System.Console.WriteLine(month + " : "+ orange.ShipFrom());
      }
    }
  }

  interface IOrange {
    string ShipFrom();
  }

  class OrangeSpain : IOrange
  {
    public string ShipFrom()
    {
      return "I am from spain";
    }
  }

  class OrangeSouthAfrica : IOrange
  {
    public string ShipFrom()
    {
      return "I am from south africa";
    }
  }

  class OrangeUnavailable : IOrange
  {
    public string ShipFrom()
    {
      return "Not Available";
    }
  }

  class OrangeCreator {
    public static IOrange newInstance(int month) {
      if(month==11 || month==12 || month==1) {
        return new OrangeSpain();
      } else if(month==3 || month==4 || month==5) {
        return new OrangeSouthAfrica();
      } else {
        return new OrangeUnavailable();
      }
    }
  }

}

```
