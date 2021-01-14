---
title: Iterator – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Iterator

*Unklar wozu die delegates gut sind. Beispiel zeigt wohl die Integration des Iterator Patterns in C#*

```csharp
// (c) Waser
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IteratorTest1
{
    class Program
    {
        static void Main(string[] args)
        {
            Pupil[] pupils = new Pupil[]
            {
                new Pupil { Name = "Ulmer", MatrikelNr = 1234 },
                new Pupil { Name = "Reichl", MatrikelNr = 5678 },
                new Pupil { Name = "Spitzwieser", MatrikelNr = 9012 },
                new Pupil { Name = "Schacherbauer", MatrikelNr = 3456 },
                new Pupil { Name = "Achrainer", MatrikelNr = 7890 }
            };

            SchoolClass schoolClass = new SchoolClass(pupils);

            foreach(Pupil p in schoolClass)
            {
                Console.WriteLine(p);
            }

            Console.WriteLine();

            IEnumerator schoolClassEnumerator = schoolClass.GetEnumerator();
            while(schoolClassEnumerator.MoveNext())
            {
                Console.WriteLine(schoolClassEnumerator.Current);
            }

            Console.WriteLine();

            foreach(Pupil p in schoolClass.GetERNamesEnumerator())
            {
                Console.WriteLine(p);
            }

            Console.ReadLine();
        }
    }

    public delegate void Test();

    class Pupil
    {
        public string Name { get; set; }
        public int MatrikelNr { get; set; }

        public override string ToString()
        {
            return this.Name + ", " + this.MatrikelNr;
        }
    }

    class SchoolClass : IEnumerable
    {
        private Pupil[] pupils;
        private Test test;

        public SchoolClass(Pupil[] pupils)
        {
            this.test += MyTest;
            this.test += MyTest2;
            Delegate[] delegates = test.GetInvocationList();

            foreach(Delegate d in delegates)
            {
                d.Method.Invoke(this, null);
            }


            this.pupils = pupils;
        }

        public void MyTest()
        {
            Console.WriteLine("Test");
        }

        public void MyTest2()
        {
            Console.WriteLine("Test2");
        }

        public IEnumerator GetEnumerator()
        {
            //return new SchoolClassEnumerator(this.pupils);
            return this.pupils.GetEnumerator();
        }

        public IEnumerable GetERNamesEnumerator()
        {
            foreach(Pupil p in this.pupils)
            {
                if(p.Name.EndsWith("er"))
                {
                    yield return p;
                }
            }
        }

        class SchoolClassEnumerator : IEnumerator
        {
            int index = -1;
            private Pupil[] pupils;

            public SchoolClassEnumerator(Pupil[] pupils)
            {
                this.pupils = pupils;
            }

            public object Current
            {
                get
                {
                    return this.pupils[this.index];
                }
            }

            public bool MoveNext()
            {
                return ++this.index < this.pupils.Length;
            }

            public void Reset()
            {
                this.index = -1;
            }
        }
    }

    
}

```

