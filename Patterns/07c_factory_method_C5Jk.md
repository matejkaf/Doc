---
title: Doc
type: solution
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---

# Lösung

Meal Decider

```csharp
// (c) Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactoryMethodTest2
{
  class Program
  {
    static void Main(string[] args)
    {
      int i;

      //for(i = 0; i <= 23; i++)
      {
        IMeal meal = MealDecider.GetMeal();

        if(meal != null)
        {
          Console.WriteLine(meal.Eat());
        }
        else
        {
          Console.WriteLine(": Es gibt nichts zu essen!");
        }
      }

      Console.ReadLine();
    }
  }

  class MealDecider
  {
    // Factory Method
    public static IMeal GetMeal()
    {
      int hour = DateTime.Now.Hour;

      switch(hour)
      {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: return null;

        case 6:
        case 7: return new Müsli();

        case 8: return null;

        case 9: return new Jausenweckerl();

        case 10:
        case 11: return null;

        case 12:
        case 13: return new Schnitzel();

        case 14:
        case 15: return null;

        case 16: return new Apfel();

        case 17: return null;

        case 18:
        case 19: return new Salat();

        case 20:
        case 21:
        case 22:
        case 23: return null;

        default: return null;
      }
    }
  }

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

  class Schnitzel : IMeal
  {
    public string Eat()
    {
      return "Schnitzel essen";
    }
  }

  class Apfel : IMeal
  {
    public string Eat()
    {
      return "Apfel essen";
    }
  }

  class Salat : IMeal
  {
    public string Eat()
    {
      return "Salat essen";
    }
  }
}

```

