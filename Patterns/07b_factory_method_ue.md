---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [assignment, 5AHELS, patterns ]
---

# Factory Method – Design Pattern (Übungen)



**Übung (Meal Decider)**

Schreibe ein Programm mit Klasse `MealDecider`  und factory method `GetMeal` die für die **aktuelle Stunde** (Hinweis: Verwende die .NET Klasse `DateTime`) ein bestimmtes Objekt mit **IMeal** interface erzeugt. Es gibt auch Stunden des Tages in denen es nichts zu essen gibt, in diesem Fall liefert die factory method eine Nullreferenz.

Beispiel:

```csharp
interface IMeal
{
  string Eat();
}

class Muesli : IMeal
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



---

