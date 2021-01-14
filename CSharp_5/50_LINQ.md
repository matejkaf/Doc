# LINQ – Language INtegrated Query

Ideen aus:

- SQL
- Functional Programming



# Material

- Buch S.351
- [LINQ Tutorial](https://www.tutorialsteacher.com/linq/linq-tutorials)

- [Sample LINQ Queries](https://www.tutorialsteacher.com/linq/sample-linq-queries)



# Parallel LINQ

Erweiterung die LINQ Abläufe automatisch parallelisiert.

Z.B. `ParallelEnumerable` stat `Enumerable`

```csharp
static void Main(string[] args)
{
  System.Console.WriteLine("========================================");
  int[] primesInRange = PrimNumbersInRange(2,200000);
  //System.Console.WriteLine(string.Join(',',primesInRange));
  System.Console.WriteLine(primesInRange.Length);
  System.Console.WriteLine("========================================");
  primesInRange = PrimNumbersInRangeParallel(2,200000);
  System.Console.WriteLine(primesInRange.Length);
  System.Console.WriteLine("========================================");

}

public static int[] PrimNumbersInRange(int start, int end)
{
  // including start and end
  int count = (end-start)+1;
  return Enumerable.Range(start,count).Where(n => Enumerable.Range(2,n-2).All(i => n%i!=0)).ToArray();
}

public static int[] PrimNumbersInRangeParallel(int start, int end)
{
  // including start and end
  int count = (end-start)+1;
  return ParallelEnumerable.Range(start,count).Where(n => Enumerable.Range(2,n-2).All(i => n%i!=0)).ToArray();
}

```



