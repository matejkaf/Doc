---
title: Doc
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ 5AHELS, patterns ]
---

# Adapter – Design Pattern

GoF Pattern. [wikipedia: Adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern)

Auch "wrapper" genannt, 

> Converts one interface to another so that it matches what the client is expecting.

- Client erwartet sich `Target` Interface
- `Adaptee` stellt das nicht in gewünschter Form zur Verfügung
- `Adapter` erweitert `Adaptee` und stellt das `Target` Interface für den Client zur Verfügung.



```csharp
// (c) Gerhard WASER
namespace AdapterTest1
{
    class Program
    {
        static void Main(string[] args)
        {
            IMyMathLibrary myMathLibrary = new MyMathLibary();

            double result = myMathLibrary.SinusDegree(45);

            Console.WriteLine(result);

            Console.ReadLine();
        }
    }

    // Adaptee
    class MathLibrary
    {
        public double SinusRadian(double radian)
        {
            return Math.Sin(radian);
        }
    }

    // ITarget
    interface IMyMathLibrary
    {
        double SinusDegree(double degree);
    }

    // Adapter
    class MyMathLibary : MathLibrary, IMyMathLibrary
    {
        public double SinusDegree(double degree)
        {
            return this.SinusRadian(degree * (Math.PI / 180));
        }
    }
}
```

