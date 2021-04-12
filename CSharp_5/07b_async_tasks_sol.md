---
title: C# Tasks (Lösuung für Aufgaben)
tags: [solution,5AHELS]
---



**Primzahlen parallelisiert ermitteln**

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;

namespace _28_Task
{
    class Program
    {
        static bool isPrime(long n)
        {
            for (long i = 2; i < Math.Sqrt(n); i++)
            {
                if(n%i==0)
                    return false;                
            }
            return true;
        }
        static long PrimeCount(long start, long end)
        {
            long count = 0;
            for (long i = start; i <= end; i++)
            {
                if (isPrime(i))
                    count++;                    
            }
            return count;
        }

        static Task<long> PrimeCountAsync(long start, long end)
        {
            return Task.Run(() => PrimeCount(start, end));
        }


        static void Main(string[] args)
        {
            System.Console.WriteLine(isPrime(42));
            System.Console.WriteLine(isPrime(101));

		    System.Diagnostics.Stopwatch stopwatch = new System.Diagnostics.Stopwatch();

            System.Console.WriteLine("=== Synchron ===");
            stopwatch.Start();
            System.Console.WriteLine(PrimeCount(1,1000000));
            System.Console.WriteLine(PrimeCount(1000001,2000000));
            System.Console.WriteLine(PrimeCount(2000001,3000000));
            System.Console.WriteLine(PrimeCount(3000001,4000000));
            System.Console.WriteLine(PrimeCount(4000001,5000000));
            stopwatch.Stop();
            System.Console.WriteLine(stopwatch.Elapsed);

            System.Console.WriteLine("=== Asynchron ===");
            stopwatch.Reset();
            stopwatch.Start();
            var primeTask1 = PrimeCountAsync(1,1000000);
            var primeTask2 = PrimeCountAsync(1000001,2000000);
            var primeTask3 = PrimeCountAsync(2000001,3000000);
            var primeTask4 = PrimeCountAsync(3000001,4000000);
            var primeTask5 = PrimeCountAsync(4000001,5000000);
            Task.WaitAll(new Task[] {primeTask1,primeTask2,primeTask3,primeTask4,primeTask5});
            System.Console.WriteLine(primeTask1.Result);
            System.Console.WriteLine(primeTask2.Result);
            System.Console.WriteLine(primeTask3.Result);
            System.Console.WriteLine(primeTask4.Result);
            System.Console.WriteLine(primeTask5.Result);
            stopwatch.Stop();
            System.Console.WriteLine(stopwatch.Elapsed);
        }
    }
}
```



