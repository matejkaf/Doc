---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [5AHELS, lecture, patterns ]
---



# Bridge – Design Pattern

GoF Pattern. [Bridge pattern](https://en.wikipedia.org/wiki/Bridge_pattern)

[refactoring.guru](https://refactoring.guru/design-patterns/bridge) – Super Erklärt!

![img](fig/W3sDesign_Bridge_Design_Pattern_UML-4197503.jpg)



![img](fig/1024px-Bridge_UML_class_diagram.svg.png)

```csharp
// (c) Gerhard WASER
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BridgeTheoryCode
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Bridge Pattern\n");
            Abstraction abstraction = new Abstraction(new ImplementationA());

            Console.WriteLine(abstraction.Operation());

            abstraction.SetImplementation(new ImplementationB());

            Console.WriteLine(abstraction.Operation());

            Console.ReadLine();
        }
    }

    class Abstraction
    {
        private IBridge bridge;

        public Abstraction(IBridge implementation)
        {
            this.bridge = implementation;
        }

        public void SetImplementation(IBridge implementation)
        {
            this.bridge = implementation;
        }

        public string Operation()
        {
            return "Abstraction" + " <<< BRIDGE >>>> " + bridge.OperationImp();
        }
    }

    interface IBridge
    {
        string OperationImp();
    }

    class ImplementationA : IBridge
    {
        public string OperationImp()
        {
            return "ImplementationA";
        }
    }

    class ImplementationB : IBridge
    {
        public string OperationImp()
        {
            return "ImplementationB";
        }
    }
}
```



---

**Übung (Bridge Pattern):**

todo

---



```csharp
// (c) Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BridgeTest
{
    class Program
    {
        static void Main(string[] args)
        {
            Printer printer = new Printer(new PlainPrinter());
            printer.Print("5AHELS");

            printer.SetPrinter(new HTMLPrinter());
            printer.Print("5AHELS");

            Console.ReadLine();
        }
    }

    // Abstraction
    class Printer
    {
        private IPrinter printer;

        public Printer(IPrinter printer)
        {
            this.printer = printer;
        }

        public void SetPrinter(IPrinter printer)
        {
            this.printer = printer;
        }

        public void Print(string s)
        {
            this.printer.Print(s);  // Polymorpher Methodenaufruf
        }
    }

    // Bridge
    interface IPrinter
    {
        void Print(string s);
    }

    // ImplementationA
    class PlainPrinter : IPrinter
    {
        public void Print(string s)
        {
            Console.WriteLine(s);
        }
    }

    // ImplementationB
    class HTMLPrinter : IPrinter
    {
        public void Print(string s)
        {
            Console.WriteLine("<p>" + s + "</p>");
        }
    }
}
```



