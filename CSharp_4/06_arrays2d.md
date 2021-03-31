

# 2D Arrays

- 2D Array

  - [Multidimensional Arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/multidimensional-arrays)
  - [Iterate through 2 dimensional array c#](https://stackoverflow.com/questions/8184306/iterate-through-2-dimensional-array-c-sharp)
  - [How do I 'foreach' through a two-dimensional array?](https://stackoverflow.com/questions/2834233/how-do-i-foreach-through-a-two-dimensional-array)

  ```csharp 
  int[,] arr = new int[4,2]; // Zeilen/Spalten Rows/Columns
  arr.Length; // Gesamtanzahl
  arr.Rank; // Anzahl Dimensionen
  arr.GetLength(0); // erste Dimension (=Anzahl Zeilen)
  arr.GetLength(1); // zweite Dimension (=Anzahl Spalten)
  ```

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest3
  {
      class Program
      {
          static void Main(string[] args)
          {
              // Syntax für rechteckige Arrays
              int[,] zahlen = new int[4,3];
  
              int[,] zahlen2 =
              {
                  { 1, 2, 3},
                  { 5, 6, 7},
                  { 8, 9,10}
              };
  
              zahlen2 = new int[,]
              {
                  { 1, 2, 3, 11},
                  { 5, 6, 7, 11},
                  { 8, 9,10, 11}
              };
  
              // Anonymes Array
              Worker.Test(new int[,]
              {
                  { 1, 2, 3},
                  { 5, 6, 7},
                  { 8, 9,10}
              });
  
              // Gesamtanzahl der Element
              Console.WriteLine(zahlen2.Length);
              Console.WriteLine(zahlen2.GetLength(0));
              Console.WriteLine(zahlen2.GetLength(1));
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static void Test(int[,] values)
          {
  
          }
      }
  }
  
  ```

  



- 2D Array (Rectangular) - Ein-/Ausgabe, `CS_Projekte/Gerhard/03_Arrays/2018_10_08_Gruppe1_ArrayTest6.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest6
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[,] zahlen = new int[3, 4];
  
              Worker.InputRows(zahlen);
              Worker.OutputCols(zahlen);
  
              Console.ReadLine();
          }
      }
      
      class Worker
      {
          public static void InputRows(int[,] values)
          {
              int r;
              int c;
  
              for (r = 0; r < values.GetLength(0); r++)
              {
                  for (c = 0; c < values.GetLength(1); c++)
                  {
                      values[r, c] = int.Parse(Console.ReadLine());
                  }
              }
          }
  
          public static void OutputRows(int[,] values)
          {
              int r;
              int c;
  
              for (r = 0; r < values.GetLength(0); r++)
              {
                  for (c = 0; c < values.GetLength(1); c++)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
  
          public static void InputCols(int[,] values)
          {
              int r;
              int c;
  
              for (c = 0; c < values.GetLength(1); c++)
              {
                  for (r = 0; r < values.GetLength(0); r++)
                  {
                      values[r, c] = int.Parse(Console.ReadLine());
                  }
              }
          }
  
          public static void OutputCols(int[,] values)
          {
              int r;
              int c;
  
              for (c = 0; c < values.GetLength(1); c++)
              {
                  for (r = 0; r < values.GetLength(0); r++)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
      }
  }
  ```

  

- 2D Arrays (Rectangular) - HD und ND ausgeben, `CS_Projekte/Gerhard/03_Arrays/2018_10_08_Gruppe1_ArrayTest7.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest7
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[,] zahlen = 
              {
                  { 1, 2, 3, 4, 5 },
                  { 6, 7, 8, 9,10 },
                  {11,12,13,14,15 },
                  {16,17,18,19,20 }
              };
  
              zahlen = new int[,]
              {
                  { 1, 2, 3, 4, 5 },
                  { 6, 7, 8, 9,10 },
                  { 11,12,13,14,15 },
                  { 16,17,18,19,20 }
              };
  
              //Worker.OutputHDs(zahlen);
              Worker.OutputNDs(zahlen);
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static void OutputHDs(int[,] values)
          {
              int r;
              int c;
              int startr;
              int startc;
  
              for (startc = 0; startc < values.GetLength(1); startc++)
              {
                  for (r = values.GetLength(0) - 1, c = startc; r >= 0 && c >= 0; r--, c--)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
  
              for (startr = values.GetLength(0) - 2; startr >= 0; startr--)
              {
                  for (r = startr, c = values.GetLength(1) - 1; r >= 0 && c >= 0; r--, c--)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
  
          public static void OutputNDs(int[,] values)
          {
              int r;
              int c;
              int startr;
              int startc;
  
              for (startr = values.GetLength(0) - 1; startr >= 0; startr--)
              {
                  for (r = startr, c = values.GetLength(1) - 1; r < values.GetLength(0) && c >= 0; r++, c--)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
  
              for (startc = values.GetLength(1) - 2; startc >= 0; startc--)
              {
                  for (r = 0, c = startc; r < values.GetLength(0) && c >= 0; r++, c--)
                  {
                      Console.Write(values[r, c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
      }
  }
  
  ```


## Aufgaben

Jweils bei einem gegebenen 2D int Array:

- Methode `LastRowWithMaxSum` die den Index der Zeile mit der größten Zeilensumme findet.
- Methode `LastColumnWithMaxSum` die den Index der Spalte mit der größten Spaltensumme findet.
- Methode  `LastRowWithEqualValues` die eine Zeile aus gleichen Zahlen findet.
- Methode `RowsWithEqualValues` die in einem Array die Indizes aller Zeilen liefert die aus gleichen Zahlen bestehen. Hinweis: mit `Array.Resize` kann ein Array verkleinert werden.



## Vier Gewinnt

```csharp
// Spiellogik
class FourWins
{
    public static const int PLAYER1 = 1;
    public static const int PLAYER2 = 2;
    public static const int EMPTY = 0;

    private int[,] field;
    private int player;

    public FourWinsGameField(int rows, int cols)
    {
        this.ReStart(rows, cols);
    }

    // Startet das Spiel neu
    public void ReStart(int rows, int cols)
    {
        // 2do
    }

    // Change Player
    public void ChangePlayer()
    {
        // PLAYER1 <-> PLAYER2
    }

    // Indexer
    public int this[int row, int col]
    {
        // 2do
    }

    // Es wird versucht, einen Stein das aktuellen Spielers in die übergebene Spalte einzuwerfen
    // false wenn Spalte voll
    public bool ThrowIn(int col)
    {
		// 2do
    }

    // prüft, ausgehend von row/col ob 4 in einer Reihe
    public bool IsWon(int row, int col)
    {
        // Horizontal
        // Vertical
        // Minor diagonal
        // Major diagonal
    }

    // prüfe ob Feld voll
    public bool CheckDraw()
    {
        // 2do
    }
    
    // Ausgabe des Spielfeldes auf der Konsole
    public void ShowConsole()
    {
        // 2do
    }
}
```

Später Umschreiben auf Events.





# Jagged Arrays (optional)

schräge 2D Arrays (jagged array, Array wo die Elemente wieder Arrays sind), `CS_Projekte/Gerhard/03_Arrays/2018_09_18_Klasse_ArrayTest4.cs`

Dieses Thema ist m.E. ziemlich optional.

-  [Jagged Arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArrayTest4
{
    class Program
    {
        static void Main(string[] args)
        {
            int[][] zahlen = new int[3][];
            int[][][] zahlen3 = new int[3][][];

            zahlen3[0] = new int[3][];

            zahlen[0] = new int[4];
            zahlen[1] = new int[3];
            zahlen[2] = new int[2];

            int[][] zahlen2 = 
            {
                new int[] { 1, 2, 3, 4 },
                new int[] { 5, 6, 7 },
                new int[] { 8, 9 }
            };

            zahlen2 = new int[][]
            {
                new int[] { 1, 2, 3, 4 },
                new int[] { 5, 6, 7 },
                new int[] { 8, 9 }
            };

            // Anonymes Array
            Worker.Test(new int[][]
            {
                new int[] { 1, 2, 3, 4 },
                new int[] { 5, 6, 7 },
                new int[] { 8, 9 }
            });

            Console.WriteLine(zahlen2.Length);
            Console.WriteLine(zahlen2[2].Length);

            Console.ReadLine();
        }
    }

    class Worker
    {
        public static void Test(int[][] values)
        {

        }
    }
}
```



- 2D Array - Ein-/Ausgabe, `CS_Projekte/Gerhard/03_Arrays/2018_10_01_Gruppe1_ArrayTest5.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest5
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[][] zahlen = new int[3][];
              zahlen[0] = new int[4];
              zahlen[1] = new int[4];
              zahlen[2] = new int[4];
  
              Worker.InputCols(zahlen);
              Worker.OutputRows(zahlen);
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static void InputRows(int[][] values)
          {
              int r;
              int c;
  
              for (r = 0; r < values.Length; r++)
              {
                  for (c = 0; c < values[r].Length; c++)
                  {
                      values[r][c] = int.Parse(Console.ReadLine());
                  }
              }
          }
  
          public static void OutputRows(int[][] values)
          {
              int r;
              int c;
  
              for (r = 0; r < values.Length; r++)
              {
                  for (c = 0; c < values[r].Length; c++)
                  {
                      Console.Write(values[r][c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
  
          public static void OutputRows2(int[][] values)
          {
              foreach (int[] row in values)
              {
                  foreach (int value in row)
                  {
                      Console.Write(value + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
  
          // Voraussetzung: Das Array ist rechteckig
          public static void InputCols(int[][] values)
          {
              int r;
              int c;
  
              for (c = 0; c < values[0].Length; c++)
              {
                  for (r= 0; r < values.Length; r++)
                  {
                      values[r][c] = int.Parse(Console.ReadLine());
                  }
              }
          }
  
          // Voraussetzung: Das Array ist rechteckig
          public static void OutputCols(int[][] values)
          {
              int r;
              int c;
  
              for (c = 0; c < values[0].Length; c++)
              {
                  for (r = 0; r < values.Length; r++)
                  {
                      Console.Write(values[r][c] + "\t");
                  }
  
                  Console.WriteLine();
              }
          }
      }
  }
  ```

  

- 2D Arrays (Jagged), `RowWithMaxSum`, `CS_Projekte/Gerhard/03_Arrays/2018_10_08_Gruppe1_ArrayTest8.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest8
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[][] zahlen =
              {
                  new int[] { 1, 2, 3, 4, 5 },
                  new int[] { 1, 2, 3, 4, 5 },
                  new int[] { 1, 2, 3, 4, 5 },
                  new int[] { 1, 2, 3, 4, 5 }
              };
  
              zahlen = new int[][]
              {
                  new int[] { 1, 2, 3, 4, 5 },
                  new int[] { 11, 2, 31, 4, 55 },
                  new int[] { 1, 42, 73, 47, 5 },
                  new int[] { 11, 2, 33, 4, 5 }
              };
  
              Console.WriteLine(Worker.RowWithMaxSum(zahlen));
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static int RowWithMaxSum(int[][] values)
          {
              int r;
              int c;
              int sum;
              int maxSum = int.MinValue;
              int lineWithMaxSum = 0;
  
              for (r = 0; r < values.Length; r++)
              {
                  for (c = 0, sum = 0; c < values[r].Length; c++)
                  {
                      sum += values[r][c];
                  }
  
                  if (sum > maxSum)
                  {
                      maxSum = sum;
                      lineWithMaxSum = r;
                  }
              }
  
              return lineWithMaxSum;
          }
      }
  }
  ```

  

- 2D Arrays (Jagged), `LastRowWithEqualValues`, `RowsWithEqualValues`, `CS_Projekte/Gerhard/03_Arrays/2018_10_15_Gruppe2_ArrayTest8.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest8
  {
      class Program
      {
          static void Main(string[] args)
          {
              int[][] zahlen = new int[][]
              {
                  new int[] { 1, 1, 1, 1, 1},
                  new int[] { 1, 2, 3},
                  new int[] { 45, 45},
                  new int[] { 1, 2, 3, 4}
              };
  
              //Console.WriteLine(Worker.LastRowWithEqualValues(zahlen));
  
              int[] rows = Worker.RowsWithEqualValues(zahlen);
              foreach(int row in rows)
              {
                  Console.WriteLine(row);
              }
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static int LastRowWithEqualValues(int[][] values)
          {
              int r;
              int c;
             
              for (r = values.Length - 1; r >= 0; r--)
              {
                  for (c = 1; c < values[r].Length; c++)
                  {
                      if (values[r][c] != values[r][0])
                      {
                          break;
                      }
                  }
  
                  if (c == values[r].Length)
                  {
                      return r;
                  }
              }
  
              return -1;
          }
  
          public static int[] RowsWithEqualValues(int[][] values)
          {
              int r;
              int c;
              int count = 0;
              int[] rows = new int[values.Length];
  
              for (r = 0; r < values.Length; r++)
              {
                  for (c = 1; c < values[r].Length; c++)
                  {
                      if (values[r][c] != values[r][0])
                      {
                          break;
                      }
                  }
  
                  if (c == values[r].Length)
                  {
                      rows[count++] = r;
                  }
              }
  
              Array.Resize(ref rows, count);
  
              return rows;
          }
      }
  }
  ```

  

- 2D Arrays (Jagged), `RowsWithOnlyERNames`, `CS_Projekte/Gerhard/03_Arrays/2018_10_15_Gruppe2_ArrayTest9.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest9
  {
      class Program
      {
          static void Main(string[] args)
          {
              string[][] names = new string[][]
              {
                  new string[] {"Ulmer", "Reichl", "Schacherbauer"},
                  new string[] {"Schertler", "Voglperger"},
                  new string[] {"Mayr", "Steinkreß", "Zechmeister"},
                  new string[] {"Wydra", "Moharitsch", "Mayr"},
              };
  
              int[] rows = Worker.RowsWithOnlyERNames(names);
              foreach(int row in rows)
              {
                  Console.WriteLine(row);
              }
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static int[] RowsWithOnlyERNames(string[][] names)
          {
              int r;
              int c;
              int count = 0;
              int[] rows = new int[names.Length];
  
              for (r = 0; r < names.Length; r++)
              {
                  for (c = 0; c < names[r].Length; c++)
                  {
                      if (!names[r][c].ToLower().EndsWith("er"))
                      {
                          break;
                      }
                  }
  
                  if (c == names[r].Length)
                  {
                      rows[count++] = r;
                  }
              }
  
              Array.Resize(ref rows, count);
  
              return rows;
          }
      }
  }
  ```

  

- 2D Arrays (Jagged), `RowsWithoutERName`, `CS_Projekte/Gerhard/03_Arrays/2018_10_29_Gruppe1_ArrayTest10.cs`

  ```c#
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace ArrayTest10
  {
      class Program
      {
          static void Main(string[] args)
          {
              string[][] names = new string[][]
              {
                  new string[] {"Jinariu", "Dörfler", "Engleitner"},
                  new string[] {"Brachmaier", "Baischer", "Achrainer"},
                  new string[] {"Augustin", "Eberharter"},
                  new string[] {"Moser", "Hartl"}
              };
  
              int[] rows = Worker.RowsWithoutERName(names);
  
              foreach(int row in rows)
              {
                  Console.WriteLine(row);
              }
  
              Console.ReadLine();
          }
      }
  
      class Worker
      {
          public static int[] RowsWithoutERName(string[][] names)
          {
              int r;
              int c;
              int count = 0;
              int[] rows = new int[names.Length];
  
              for (r = 0; r < names.Length; r++)
              {
                  for (c = 0; c < names[r].Length; c++)
                  {
                      if (!names[r][c].ToLower().EndsWith("er"))
                      {
                          rows[count++] = r;
                          break;
                      }
                  }
              }
  
              Array.Resize(ref rows, count);
  
              return rows;
          }
      }
  }
  ```

  