---
title: Doc
type: solution
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---

# Lösung

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

