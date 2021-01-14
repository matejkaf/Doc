---
title: Threads
type: lecture
description: Einführung in .NET Threads. Race conditions.
cmds: ['md_html.bash', 'md_html.bash --small']
tags: [csharp, dotnet, threads]
---

- Ein Thread ist ein unabhänger Pfad der Programm-Ausführung.
- Mehrere Threads laufen parallel/gleichzeitig.
- Wird ein Programm gestartet erzeugt das Betriebssystem einen **Prozess**. 
  - Ein Prozess enthält das ausführbare Programm, verwaltet die Daten und einen oder mehrere Threads. 
- Ein Thread (**Main-Thread**) wird durch das Betriebssystem beim erzeugen des Prozesses gestartet.
  - Weitere Threads werden durch das Programm selbst gestartet.

```csharp
using System;
using System.Threading;

namespace _27_Thread
{
    class Program
    {
        static void DoInBackground()
        {
            for (int i = 0; i < 1000; i++)
            {
                System.Console.Write(" B"+i);
            }
        }

        static void Main(string[] args)
        {
            Thread t = new Thread(DoInBackground); // argument: delegate/lambda expression
            t.Start();            
            Console.WriteLine("Thread started;");
            for (int i = 0; i < 1000; i++)
            {
                System.Console.Write(" f"+i);
            }
        }
    }
}
```

Obiges Programm besteht aus 2 Threads: `Main` und `DoInBackground`

Klasse [`Thread`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.thread?view=netcore-3.1)

- `IsAlive` property, zeigt ob Thread noch läuft
- `Name` property (einmal setzbar)
- static: `Thread.CurrentThread`



## Parallel Processing

Die Parallele Abarbeitung wird erzielt durch:

- Multi-Processor
- Multi-Core
- bzw. Time-Slicing (auf einem Core)
  Threads erhalten abwechselnd eine Zeitscheibe des Prozessors (z.B. 10ms). Ist die Zeit abgelaufen wird dem Thread der Prozessor entzogen (*preempted*) und einem anderen Thread zugewiesen.



## Thread Zustände

Im Grundzustand `Running` erhält der Thread einen Anteil an der CPU Zeit.

In gewissen Fällen wechselt der Thread in einen **blockierten Zustand**. Das Betriebssystem weist dem Thread erst dann wieder die CPU zu wenn der Grund des blockierens weg ist.

Ein Thread kann z.B. blockieren 

- wenn auf das beenden eines anderen Threads gewartet wird (`Join`) oder 
- wenn eine gewisse Zeit "geschlafen" wird (`Thread.Sleep`) oder
- bei Warten auf das Ende längerer IO Operationen (z.B. Warten auf Benutzereingabe, Datei Inhalt lesen, ...).



Warten auf das Beenden eines Threads:

```csharp
Thread t = new Thread(DoInBackground);
t.Start();
Console.WriteLine("Thread started;");
for (int i = 0; i < 10; i++)
{
  System.Console.Write(" f"+i);
}
// wait for Thread to stop
t.Join(); // blockiert bis t beendet
System.Console.WriteLine("\nThread stopped\n");
```

Eigenen Thread pausieren (andere Threads bekommen die CPU)

```csharp
Thread.sleep(100); // 100 ms
Thread.sleep(0); // eine Zeitscheibe freigeben
```

Zustände eines Threads ([`ThreadState`](https://docs.microsoft.com/en-us/dotnet/api/system.threading.threadstate?view=netcore-3.1)) abfragen:

```csharp
t.Start();
System.Console.WriteLine(t.ThreadState.GetType());
while (t.ThreadState != ThreadState.Stopped)
{
    System.Console.WriteLine("\n"+t.ThreadState);
}
System.Console.WriteLine(t.ThreadState);
```



# IO-bound vs. CPU-bound

Längere Aktionen in einem Programm können sein:

- **IO-bound**: Meiste Zeit wird auf IO Operationen gewartet.
  Auslagerung in Threads ermöglicht anderen Threads (z.B. UI Thread) das weiterarbeiten.
- **CPU-bound**: Meiste Zeit wird gerechnet
  Längere Berechnungen werden im Hintergrund durchgeführt bzw. die zur Verfügung stehenden Cores werden genutzt.



# blocking vs. spinning

Bei warten auf IO.

- **Blocking**: Warten kostet keine CPU-Zeit.
- **Spinning**: In Schleife kostet CPU-Zeit.

Allgemein: **asynchrones Programmieren**, es wird versucht die CPU so wenig wie möglich durch spinning zu belasten.



# Object Context

Thread im Context eines Objekts starten:

```csharp
using System;
using System.Threading;

namespace _27_Thread
{
    class ThreadTest
    {
        int val;
        public void Go()
        {
            for (int i = 0; i < 5; i++)
            {
                System.Console.Write("?"+(val++)+" ");
            }
        }

    }
    class Program
    {

        static void Main(string[] args)
        {
            ThreadTest tt = new ThreadTest();
            new Thread(tt.Go).Start();
            new Thread(tt.Go).Start();
            new Thread(tt.Go).Start();
            new Thread(tt.Go).Start();
            tt.Go();

        }
    }
}
```

Erkenntnis: Alle Threads teilen sich den Zustand eines Objekts (**shared state**).



# Parameter

Übergabe eines Parameters an einen Thread, mit Lambda Expression:

```csharp
using System;
using System.Threading;

namespace _27_Thread
{
    class Program
    {
        public static void Go(string txt)
        {
            for (int i = 0; i < 20; i++)
            {
                System.Console.Write("Hi from "+txt);
            }
        }

        static void Main(string[] args)
        {
            Thread t1 = new Thread( ()=> Go("AAA"));
            t1.Start();
            Thread t2 = new Thread( ()=> Go("BBB"));
            t2.Start();
        }
    }
}
```

​	

# Videos

- [Intro to Processes & Threads](https://youtu.be/exbKr6fnoUw)
  CPU Basics, program execution, thread, scheduler, multitasking, process, hyper-threading, multi-core, multi-processor
- [Udacity: Process vs Thread](https://youtu.be/Dhf-DYO1K78)
  Wie der Titel sagt
- [Udacity: Process Thread Relationship](https://youtu.be/brdp6d6KDso)
  Ein noch genauerer Blick
- [Udacity: Benefits of Multithreading](https://youtu.be/3WmNGc9qP0g)
  speed up (same code - different data), specialized tasks, cache utilization, multithreading vs. multiprocessing
- [Udacity: Benefits of Multithreading: Single CPU](https://youtu.be/X668LfXObaM)
  Hat multithreading in einer single CPU einen Vorteil
- [Udacity: Benefits of Multithreading: Apps and OS](https://youtu.be/vmXjVXQEJUI)
  Vorteile im OS und in Apps
- [Udacity: Basic Thread Mechanisms](https://youtu.be/Hdd1BlnI4GQ)
  shared address space of threads, data race, mutual exclusion, 
- [C# Tutorial 16 Threads](https://youtu.be/hOVSKuFTUiI)
  Erste Schritte mit Thread in C#



# Race Conditions

Greifen mehrere Threads auf die gleichen Variablen zu kann es zu *race conditions* kommen.

## Programm 1

```csharp
using System;
using System.Threading;

namespace _27_Thread
{
    class ThreadTest
    {
        public int count = 0;
        public void A()
        {
            for (int i = 0; i < 9999999; i++)
            {
                int temp = count + 1;
                if (temp != count + 1)
                {
                    System.Console.WriteLine("Race Condition !!! "+temp);
                    return; // exit thread
                }
                count = temp;
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            ThreadTest tt = new ThreadTest();
            new Thread(tt.A).Start();
            tt.A();
        }
    }
}
```



## Programm 2

race condition mit `++` und `--`

```csharp
using System;
using System.Threading;

namespace _38_race_condition
{
    class Program
    {
        private static int _shared_value = 0;
        private static readonly int LOOPS = 10000000; // 1000 vs. 10 Mio.

        static void Main(string[] args)
        {
            var threads = new Thread[2];
            threads[0] = new Thread(Increment);
            threads[1] = new Thread(Decrement);

            foreach (var thread in threads)
            {
                thread.Start();
            }

            foreach (var thread in threads)
            {
                thread.Join();
            }

            System.Console.WriteLine(_shared_value);
          	// Ausgabe von 0 erwartet, durch Race Condition aber != 0
        }

        private static void Increment()
        {
            for (int i = 0; i < LOOPS; i++)
            {
                _shared_value++;
            }
        }

        private static void Decrement()
        {
            for (int i = 0; i < LOOPS; i++)
            {
                _shared_value--;
            }
        }
    }
}

```

Eine Race Conditions entsteht durch einen Thread Wechsel **zwischen dem Lesen und dem Schreiben** einer Variablen (read/modify/write) wenn im anderen Thread dann diese Variable auch verändert wird. Auch für  `++` und `--` muss gelesen und geschrieben werden.

## Lock

Race Conditions vermeiden durch `lock`. Ein **Lock kann immer nur ein Thread haben**, andere **blockieren** falls es zu einem gleichzeitigem anfordern des Locks kommt.

Programm 1 mit lock:

```csharp
static readonly object _locker = new object();
public void A()
{
    for (int i = 0; i < 9999999; i++)
    {
        lock (_locker)
        {
            int temp = count + 1;
            if (temp != count + 1)
            {
                System.Console.WriteLine("Race Condition !!! " + temp);
                return; // exit thread
            }
            count = temp;
        }
    }
}
```

Programm 2 mit lock:

```csharp
static readonly object _locker = new object();
// ...
lock (_locker)
{
  _shared_value++;
}
// ...
lock (_locker)
{
  _shared_value--;
}
```

Code der gleichzeitig von mehreren Threads verwendet werden kann wird als *thread safe* bezeichnet. Im allgemeinen ist Code der darauf nicht speziell rücksicht nimmt **nicht thread safe**.



