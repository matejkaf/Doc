# Prims

Ermittle alle Primzahlen von einem Start- bis zu einem Endwert (inklusive).

```csharp
using System;
using System.Linq;

namespace _39_Linq
{
    class Program
    {
        static void Main(string[] args)
        {
            // Anzahl der Primzahlen in Bereich (S.581)
            Console.WriteLine("Hello World!");
            var x = Enumerable.Range(10,5);
            // x ... IEnumerable
            System.Console.WriteLine(String.Join(',', x));
            var n = 43;
            var y =Enumerable.Range(2,n-2);
            System.Console.WriteLine(String.Join(',', y));

            var z =Enumerable.Range(2,n-2).All(i => n%i!=0);
            System.Console.WriteLine(z);

//412, 352
            var values = new int[] {2,4,5,6,3,9,11,17};
            var values2 = values.Where(n=>n%2==0);
            System.Console.WriteLine(String.Join(',', values2));

            var primes = values.Where(n => Enumerable.Range(2,n-2).All(i => n%i!=0));
            System.Console.WriteLine(String.Join(',', primes));

            var primeCount = Enumerable.Range(2,10000-1).Count(n => Enumerable.Range(2,n-2).All(i => n%i!=0));
            System.Console.WriteLine(primeCount);

            //
            // Test Methods
            //
            int[] primesInRange = PrimNumbersInRange(10000,19999);
            System.Console.WriteLine("========================================");
            System.Console.WriteLine(string.Join(',',primesInRange));
            System.Console.WriteLine(primesInRange.Length);

        }

        public static int[] PrimNumbersInRange(int start, int end)
        {
            // including start and end
            int count = (end-start)+1;
            return Enumerable.Range(start,count).Where(n => Enumerable.Range(2,n-2).All(i => n%i!=0)).ToArray();
        }

    }
}

```

