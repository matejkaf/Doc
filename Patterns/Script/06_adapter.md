---
title: Adapter – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Adapter

GoF Pattern. [wikipedia: Adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern)

Auch "wrapper" genannt, 

> Converts one interface to another so that it matches what the client is expecting.

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

---

Übungsaufgabe: todo

---

**Lösung:**

```csharp
// (c) Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdapterTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Graphics graphics = new Graphics();

            graphics.Rectangle(50, 70, 200, 100);

            Console.WriteLine();

            IMyGraphics myGraphics = new MyGraphics();
            myGraphics.Rectangle(50, 70, 250, 170);

            Console.ReadLine();
        }
    }

    // ITarget
    interface IMyGraphics
    {
        void Rectangle(int left, int top, int right, int bottom);
    }

    // Adaptee
    class Graphics
    {
        public void Rectangle(int left, int top, int width, int height)
        {
            Console.WriteLine("Rectange, Left: " + left + ", Top: " + top + ", Width: " + width + ", Height: " + height);
        }
    }

    // Adapter
    class MyGraphics : Graphics, IMyGraphics
    {
        public new void Rectangle(int left, int top, int right, int bottom)
        {
            base.Rectangle(left, top, right - left, bottom - top);
        }
    }
}
```

