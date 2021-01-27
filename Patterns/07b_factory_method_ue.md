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

Es gibt auch Stunden des Tages in denen es nichts zu essen gibt, in diesem Fall liefert die factory method eine Nullreferenz.

---

