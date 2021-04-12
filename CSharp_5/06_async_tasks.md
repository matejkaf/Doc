---
title: C# Tasks
tags: [dotnet, csharp, thread,5AHELS]
---

Klasse `Task`, aufbauend auf Thread. Höhereres Abstraktionsniveau und Performance Optimierungen.

Vorteile von `Task`:

- Verwendet **Thread Pooling** (=Wiederverwendung von gestoppten Threads, daher schnelleres starten)
- Zurückgeben von Werten aus einem abgeschlossenen Thread
- Tasks können nach Beenden einer Aufgabe weitere Aufgaben ausführen
- Tasks können verkettet werden
- Exceptions werden weitergereicht (bei Threads bleiben diese lokal im Thread)



Einfaches Beispiel

```csharp
Task.Run( ()=> Console.WriteLine("Huh"));
System.Console.WriteLine("Hi");
```



Weiteres Beispiel:

```csharp
Task task = Task.Run( ()=> 
{
    Console.WriteLine("Huh");
    Thread.Sleep(10);
    Console.WriteLine("Hah");
});
System.Console.WriteLine(task.IsCompleted);
System.Console.WriteLine("Hi");
System.Console.WriteLine(task.IsCompleted);
task.Wait();
System.Console.WriteLine(task.IsCompleted);
```

Werte zurückgeben mit `Task<TResult>` (Property `Result`).

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace _28_Task
{
    class Program
    {
        static double Sum(int n)
        {
            int s = 0;
            for (int i = 1; i <= n; i++)
                s += i;
            return s;
        }
        static void Main(string[] args)
        {
            int value = 20;
            Task<double> task = Task.Run( () => Sum(value) );
            System.Console.WriteLine(task.GetType());
            System.Console.WriteLine(task.IsCompleted);
          
            task.Wait();
            System.Console.WriteLine(task.IsCompleted);
            System.Console.WriteLine(task.Result.GetType());
            System.Console.WriteLine(task.Result);
        }
    }
}
```



# Callbacks

Methode die aufgerufen wird wenn ein Task beendet wurde.

Mit `awaiter` Objekt.

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace _28_Task
{
    class Program
    {
        static double Sum(int n)
        {
            System.Console.WriteLine("Thread Sum: "+Thread.CurrentThread.ManagedThreadId);
            System.Console.WriteLine("Background: "+Thread.CurrentThread.IsBackground);
            int s = 0;
            for (int i = 1; i <= n; i++)
                s += i;
            return s;
        }
        static void Main(string[] args)
        {
            System.Console.WriteLine("Main Thread: "+Thread.CurrentThread.ManagedThreadId);
            int value = 20;
            Task<double> task = Task.Run( () => Sum(value) );
            
            var awaiter = task.GetAwaiter();
            awaiter.OnCompleted( () =>
            {
                System.Console.WriteLine("Thread OnCompleted: "+Thread.CurrentThread.ManagedThreadId);
                double result = awaiter.GetResult();
                System.Console.WriteLine("Ready: "+result);
            });

            System.Console.WriteLine("Ende");
            Thread.Sleep(10);
        }
    }
}

```

`OnCompleted` wird im Kontext des (beendeten) Threads aufgerufen.

Auch mit `ContinueWith` (erzeugt einen neuen Thread für den Callback):

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace _28_Task
{
    class Program
    {
        static double Sum(int n)
        {
            System.Console.WriteLine("Thread Sum: "+Thread.CurrentThread.ManagedThreadId);
            System.Console.WriteLine("Background: "+Thread.CurrentThread.IsBackground);
            int s = 0;
            for (int i = 1; i <= n; i++)
                s += i;
            return s;
        }
        static void Main(string[] args)
        {
            System.Console.WriteLine("Main Thread: "+Thread.CurrentThread.ManagedThreadId);
            int value = 20;
            Task<double> task = Task.Run( () => Sum(value) );
            
            
            task.ContinueWith((finTask)=>
            {
                System.Console.WriteLine("Thread ContinueWith: "+Thread.CurrentThread.ManagedThreadId);
                double result = finTask.Result;
                System.Console.WriteLine("Ready: "+result);
            });

            task.Wait();
            System.Console.WriteLine("Ende");
            Thread.Sleep(10);
        }
    }
}

```



# Parallele Programmierung

Aufteilen eines rechenintensiven Vorgangs auf mehrere Threads. Betriebssystem teilt auf Cores/Prozessoren auf.

## Eine Methode asynchron machen

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace _28_Task
{
    class Program
    {
        static int Do(int value)
        {
            for (int i = 0; i < value; i++)
            {
                System.Console.WriteLine(i);
            }
            return value;
        }

        static Task<int> DoAsync(int value)
        {
            return Task.Run(() => Do(value));
        }

        static void Main(string[] args)
        {
            int ret1;
            int ret2;
            int ret3;

            // Synchron Sequentiell
            ret1 = Do(3);
            ret2 = Do(4);
            ret3 = Do(5);
            System.Console.WriteLine($"{ret1} {ret2} {ret3}");

            // Asynchron Parallel
            var doTask1 = DoAsync(3);
            var doTask2 = DoAsync(4);
            var doTask3 = DoAsync(5);

            Task.WaitAll(new Task[] {doTask1,doTask2,doTask3});

            System.Console.WriteLine($"{doTask1.Result} {doTask2.Result} {doTask3.Result}");
        }
    }
}
```



