---
title: Delegates
cmds: ['md_html.bash']
---



# Delegates

Delegates (S.137)

- Eine Methode als Datentyp 
- Methoden verwenden wie Daten

```csharp
using System;
namespace _200227a_Delegates
{
    class Program
    {
        //(1)
        public delegate double Calculation(double x, double y);
        // Bezeichner "Calculation" wird zum speziellen Datentyp

        // (3)
        public delegate void PrintSomething();

        static void Main(string[] args)
        {
            // (1) Klassenmethoden
            Calculation calculation;

            // statische Methoden
            calculation = Add; // (1)
            System.Console.WriteLine( calculation(2,3) );

            calculation = Sub;
            System.Console.WriteLine( calculation(5,2) );

            calculation = new Calculation(Add);
            // alte Syntax für (1)

            // (2) für Objekte (Instanzen)
            MyClass mc;
            mc = new MyClass() {a=23};
            MyClass mc2 = new MyClass() {a=46};
            MyClass.DelEmpty myDel;
            myDel = mc.meth;
            myDel();
            myDel = mc2.meth;
            myDel();

            // System.Delegate - Datentyp eines Delegates
            System.Console.WriteLine(myDel);
            System.Console.WriteLine(myDel.GetType() );
            System.Console.WriteLine(myDel.Method);
            System.Console.WriteLine(myDel.Target);

            // (3) Array aus Delegates
            PrintSomething[] printers = new PrintSomething[3];
            printers[0] = Meth1;
            printers[1] = Meth2;
            printers[2] = Meth3;
            foreach (var meth in printers)
            {
                meth();
            }

            // (4) delegate multi-casting
            System.Console.WriteLine("==================");
            PrintSomething ps = null;
            ps += Meth1;
            ps();
            System.Console.WriteLine("---");
            ps += Meth2;
            ps(); // 2 Methoden werden aufgrufen
            System.Console.WriteLine("---");
            ps += Meth3;
            ps(); // 3 Methoden werden aufgrufen

            System.Console.WriteLine("---");
            ps -= Meth1;
            ps();

            System.Console.WriteLine("---");
            ps += Meth2;
            ps();
            System.Console.WriteLine("**");
            ps -= Meth2;
            ps();
            
        }

        // (3)
        static void Meth1()
        {
            System.Console.WriteLine("Meth1");
        }
        static void Meth2()
        {
            System.Console.WriteLine("Meth2");
        }
        static void Meth3()
        {
            System.Console.WriteLine("Meth3");
        }

        // (1)
        static double Add(double a, double b)
        {
            return a+b;
        }
        static double Sub(double a, double b)
        {
            return a-b;
        }

    }

    // (2)
    class MyClass 
    {
        public delegate void DelEmpty(); // no parameters

        public int a;
        public void meth() {
            System.Console.WriteLine("meth "+a);
        }

    }
}

```



## Details

```csharp
using System;
namespace _200227b_Delegates
{
    class Program
    {
        static void Main(string[] args)
        {
            // Worker.Transform Beispiel
            int[] values = new int[] {4,2,7,9};
            System.Console.WriteLine(string.Join(",",values));

            Worker.Transform(values, Doppelt);
            System.Console.WriteLine(string.Join(",",values));

            // nested function
            int Half(int x) {
                System.Console.WriteLine("huh");
                return x/2;
            }
            Worker.Transform(values, Half);
            System.Console.WriteLine(string.Join(",",values));

            // anonymous functions (C# >= V2.0)
            Worker.Transform(values, delegate(int x) {return x+3;});
            System.Console.WriteLine(string.Join(",",values));

            // lambda expressions (C# >= V3.0)
            Worker.Transform(values, x => x-11 );
            System.Console.WriteLine(string.Join(",",values));
        }

        public static int Doppelt(int x)
        {
            return 2*x;
        }
    }

    class Worker
    {
        public delegate int Transformer(int x);
        public static void Transform(int[] arr, Transformer t)
        {
            for (int i = 0; i < arr.Length; i++)
            {
                arr[i] = t( arr[i] );
            }
        }
    }
}

```




