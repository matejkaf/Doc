# 	Arrays

- Anlegen, 
- normale Schleifen, 
-  `foreach(int zahl in zahlen)`, 
- index check (Exception), 
- Anonymes Array, 
- Array an Methode Übergeben - z.B. mit anonymen Array
- Array als Rückgabewert

```c#
using System;

namespace _191114a_Array_Tests_01
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[] a;
            int n=10;
            a = new int[n];

            // a[10] = 42; Index wird geprüft

            for(int i=0; i<a.Length; i++)
            {
                a[i] = i+1;
            }

            // Ausgabe
            for(int i=0; i<a.Length; i++)
            {
                System.Console.Write(a[i]+" ");
            }
            System.Console.WriteLine();

            System.Console.WriteLine(string.Join(", ", a));

            foreach(var x in a)
            {
                System.Console.Write(x+" ");
            }
            System.Console.WriteLine();

            foo(a);
            System.Console.WriteLine(string.Join(", ", a));

            System.Console.WriteLine( sum(a) );

            // anonymes Array
            System.Console.WriteLine( sum( new int[] {1,2,3,4} ) );

            int[] b = bar(15);
            System.Console.WriteLine(string.Join(", ", b));

        }

        // Methode die ein Array zurückgibt mit Parameter = Anzahl der Elemente
        // Inhalt: die ungeraden Zahlen
        public static int[] bar(int n)
        {
            int[] a = new int[n];
            for(int i=0; i<a.Length; i++)
                a[i] = i*2+1;
            return a;
        }


        public static void foo(int[] arr)
        {
            for(int i=0; i<arr.Length; i++)
                arr[i]++;
        }
        public static int sum(int[] arr)
        {
            int sum = 0;
            foreach (var x in arr)
                sum += x;
            return sum;
        }
    }
}
```



- Ausgabe: `string.Join(",", arr);`

- Array aus Klasse `Pupil`, `ToString` Methode 

  ```c#
  
  using System;
  using System.Linq;
  
  namespace _191114b_Objektarray
  {
      class Pupil
      {
          public string Name {get; set;}
          public int MatNr {get; set;}
          override public string ToString()
          {
              return $"{Name} ({MatNr})";
          }
      }
  
      class Program
      {
          static void Main(string[] args)
          {
              Pupil[] pupils = new Pupil[3];
  
              // pupils[0].Name = "Aigner"; Objekt noch nicht vorhande
              pupils[0] = new Pupil() {Name="Aigner", MatNr=4856};
              pupils[1] = new Pupil() {Name="Augustin", MatNr=1234};
              pupils[2] = new Pupil() {Name="Bader", MatNr=4321};
  
              foreach(var pupil in pupils)
              {
                  System.Console.WriteLine(pupil.Name);
              }
  
  
              System.Console.WriteLine( string.Join(", ", (object[])pupils) );
  
              
              var pupils2 = new Pupil[] {  
                  new Pupil() {Name="Aigner", MatNr=4856},
                  new Pupil() {Name="Augustin", MatNr=1234},
                  new Pupil() {Name="Bader", MatNr=4321},
                new Pupil() {Name="Baischer", MatNr=3567},
                  new Pupil() {Name="Bleck", MatNr=9876},
                new Pupil() {Name="Buchegger", MatNr=2553},
                  new Pupil() {Name="Christoforetti", MatNr=2356},
                  new Pupil() {Name="Ellmer", MatNr=2135},
                  
              };
              
              // In zufällige Reihenfolge bringen
              Random rnd = new Random();
              var pupils3 = pupils2.OrderBy(x => rnd.Next()).ToArray();    
              System.Console.WriteLine( string.Join(", ", (object[])pupils3) );
          }
      }
  }
  
  ```
  
  ## Indexer
  

```csharp
using System;

namespace _191114c_Indexer1
{
    class IndexerTest
    {
        int i1;
        int i2;
        int i3;
        public int this[string index]
        {
            get { 
                if(index=="A")
                    return i1;
                else if(index=="B")
                    return i2;
                else if(index=="C")
                    return i3;
                else
                    throw new Exception("du dodl! des gibts ned!!!");
             }
            set {  
                if(index=="A")
                    i1 = value;
                else if(index=="B")
                    i2 = value;
                else if(index=="C")
                    i3 = value;
                else
                    throw new Exception("du dodl! des gibts ned!!!");
            }
        }
        public int this[int index]
        {
            get { 
                if(index==1)
                    return i1;
                else if(index==2)
                    return i2;
                else if(index==3)
                    return i3;
                else
                    throw new Exception("du dodl! des gibts ned!!!");
             }
            set {  
                if(index==1)
                    i1 = value;
                else if(index==2)
                    i2 = value;
                else if(index==3)
                    i3 = value;
                else
                    throw new Exception("du dodl! des gibts ned!!!");
            }
        }
        override public string ToString()
        {
            return $"{i1} {i2} {i3}";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            IndexerTest it = new IndexerTest();
            it[1] = 3;
            System.Console.WriteLine(it);
            System.Console.WriteLine(it[3]);
            //it[0] = 3;
            System.Console.WriteLine(it["A"]);
            it["C"] = 42;
            System.Console.WriteLine(it);
        }
    }
}

```

Aufgabe: `SchoolClass` mit Array aus `Pupil` Objekten, 

```c#
using System;
using System.Linq;

namespace _191114d_SchoolClass
{
    class Pupil
    {
        public string Name {get; set;}
        public int MatNr {get; set;}
        override public string ToString()
        {
            return $"{Name} ({MatNr})";
        }
    }
    class SchoolClass
    {
        Pupil[] pupils;
        public int Length {get {return pupils.Length;} }
        public SchoolClass(Pupil[] pupils)
        {
            this.pupils = pupils;
        }
        public Pupil this[int index]
        {
            get { return pupils[index]; }
            set {
                if(index==-1)
                {
                    System.Console.WriteLine("Test");
                    var temp = new Pupil[pupils.Length+1];
                    for(int i=0; i<pupils.Length; i++)
                        temp[i] = pupils[i];
                    temp[pupils.Length] = value;
                    pupils = temp;
                } 
                else 
                {
                    pupils[index]=value; 
                }
            }
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            
            var pupils2 = new Pupil[] {  
                new Pupil() {Name="Aigner", MatNr=4856},
                new Pupil() {Name="Augustin", MatNr=1234},
                new Pupil() {Name="Bader", MatNr=4321},
                new Pupil() {Name="Baischer", MatNr=3567},
                new Pupil() {Name="Bleck", MatNr=9876},
                new Pupil() {Name="Buchegger", MatNr=2553},
                new Pupil() {Name="Christoforetti", MatNr=2356},
                new Pupil() {Name="Ellmer", MatNr=2135},
                
            };
            Random rnd = new Random();
            var pupils3 = pupils2.OrderBy(x => rnd.Next()).ToArray();    

            System.Console.WriteLine( string.Join(", ", (object[])pupils3) );


            //
            // 
            SchoolClass ahels = new SchoolClass(pupils3);
            for(int i=0; i<ahels.Length; i++)
            {
                System.Console.WriteLine( ahels[i] );  
            }
            ahels[3] = new Pupil(){Name="Mustermann", MatNr=7777 };
            ahels[-1] = new Pupil() {Name="Esterer", MatNr=4567}; // zusätzlich am Ende anfügen
            for(int i=0; i<ahels.Length; i++)
            {
                System.Console.WriteLine( ahels[i] );  
            }

        }
    }
}
```

##  List

- `List<>` und `Dictionary<>`: siehe `06_Data_Structures`
- [**List<>**](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=netframework-4.8)

```c#
using System;
using System.Collections.Generic;

namespace _191114e_List
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = new List<string> {
                "Ana", "Felipe", "Emillia"
            };
            foreach(var name in names)
            {
                System.Console.WriteLine($"Hallo {name}");
            }
            System.Console.WriteLine(names.ToString());
            // aber
            System.Console.WriteLine(string.Join(", ", names));
            System.Console.WriteLine(names[1]);
            System.Console.WriteLine(names.Count);

            names.Add("Eve");
            System.Console.WriteLine(string.Join(", ", names));

            names[0] = "Hans";
            names.Insert(2,"Bob");
            System.Console.WriteLine(string.Join(", ", names));
            names.RemoveAt(3);
            System.Console.WriteLine(string.Join(", ", names));
            names.Remove("Hans");
            System.Console.WriteLine(string.Join(", ", names));
        }
    }
}
```

## Dictionary

- [**Dictionary<>**](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=netframework-4.8)
- [tutorialsteacher](https://www.tutorialsteacher.com/csharp/csharp-dictionary)

```c#
using System;
using System.Collections.Generic;

namespace _191114f_Dictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            var schueleranzahl = new Dictionary<string,int>();
            // string --> int
            // (key)      (value)
            schueleranzahl["4AHELS"] = 27;
            schueleranzahl["2BHELS"] = 36;
            schueleranzahl["1CHELS"] = 34;

            foreach(var klasse in schueleranzahl)
            {
                System.Console.WriteLine(klasse);
                System.Console.WriteLine(klasse.Key);
                System.Console.WriteLine(klasse.Value);
            }

            System.Console.WriteLine(schueleranzahl["4AHELS"]);
            // System.Console.WriteLine(schueleranzahl["5AHELS"]); ! KeyNotFoundException
            
            // nicht vorhandene Key ?
            if(schueleranzahl.ContainsKey("5AHELS")) 
            {
                System.Console.WriteLine(schueleranzahl["5AHELS"]);
            }
            else
            {
                System.Console.WriteLine("Uuuuupsss");
            }
            
            // besser dafür TryGetValue
            int anzahl;
            if(schueleranzahl.TryGetValue("5AHELS", out anzahl))
            {
                System.Console.WriteLine(anzahl);
            }
            else
            {
                System.Console.WriteLine("Uuuuupsss");
            }

            // Initializer List
            var dict2 = new Dictionary<string,int> {
                {"4AHELS",27}, {"5AHELS",20}
            };

            schueleranzahl.Remove("2BHELS");
            System.Console.WriteLine(string.Join(", ",schueleranzahl));

        }
    }
}
```

- Mehr Info: [System.Collections.Generic Namespace](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic?view=netframework-4.8)

```c#
/*
IList<T>
IDictionary<T>
ISet<T>            
*/
```



# Interfaces

- Interface Basics, `IMoveable` `Car : IMoveable`

```c#
using System;
using System.Collections.Generic;

namespace _191114g_Interfaces
{
    interface IMoveable
    {
        void Move();
        void SetSpeed(int speed);
    }

    class Car : IMoveable
    {
        int speed;
        public void SetSpeed(int speed)
        {
            this.speed = speed;
        }
        public void Move()
        {
            System.Console.WriteLine("Car is moving with speed "+speed);
        }
    }

    class NakedSnail : IMoveable
    {
        int speed;
        public void SetSpeed(int speed)
        {
            this.speed = speed/8;
        }
        public void Move()
        {
            System.Console.WriteLine("Snail is moving slowly but steadily "+speed);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            IMoveable movingThing = new Car();
            movingThing.SetSpeed(180);
            movingThing.Move();
            var movingThings = new List<IMoveable>()
            { new Car(), new NakedSnail(), new Car(), new NakedSnail() };
            foreach(var moving in movingThings)
            {
                moving.SetSpeed(100);
            }
            foreach(var moving in movingThings)
            {
                moving.Move();
            }
            
        }
    }
}
```



# Bücher sortieren (start)

```c#
using System;

namespace _191114h_BuecherSortieren
{
    class Book
    {
        public string Title {get; set;}
        public string Author {get; set;}
        public int Pages {get; set;}
        public int Rating {get; set;}

        override public string ToString()
        {
            string rating = "";
            for(int i=0;i<Rating;i++)
                rating += '\u2605';
            while(rating.Length<5)
                rating += '\u2606';
            return $"{Title} ({Author}) - {Pages} {rating}";
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var b = new Book(){Title="xyz", Author="abcd", Pages=1000, Rating=2};
            System.Console.WriteLine(b);

            // to be continued next time
        }
    }
}
```



## Eigene Sortier Methode

- Sortieren eines Arrays aus Büchern, Unterschiedliche Möglichkeiten (Interface, delegate, lambda expression), `CS_Projekte/Gerhard/03_Arrays/2018_10_09_Klasse_InterfaceTest2.cs`
  `CS_Projekte/Gerhard/03_Arrays/2018_10_29_Gruppe1_InterfaceTest5.cs`

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceTest2
{
    class Program
    {
        static void Main(string[] args)
        {
            Book[] books = new Book[]
            {
                new Book { Title = "Blackout", Author="Elsberg", Pages=500 },
                new Book { Title = "Zero", Author="Elsberg", Pages=400 },
                new Book { Title = "Der Prozess", Author="Kafka", Pages=500 },
                new Book { Title = "Amerika", Author="Kafka", Pages=300 },
                new Book { Title = "Faust", Author="Goethe", Pages=150 },
            };
			
            // (1)
            // Mit Comparable in Books implementiert
            Worker.Sort(books);

            foreach(Book b in books)
                Console.WriteLine(b);
            Console.WriteLine();

            // (2)
            // Sort(object[] objects, Comparer comparer)
            // mit einem Objekt das das Comparer Interface implementiert
            Worker.Sort(books, new BookAscendingPagesComparer());

            foreach (Book b in books)
                Console.WriteLine(b);
            Console.WriteLine();

            // (3)
            // int CompareDelegate(object o1, object o2);
        	// void Sort(object[] objects, CompareDelegate compare)
            // mittels delegate (Übergabeparemter ist eine Methode).
            
            // (3.1)
            // Mit benannter Methode
            Worker.Sort(books, new Worker.CompareDelegate(CompareBooksAscendingPages));
            // geht vielleicht auch so: 
            // Worker.Sort(books, CompareBooksAscendingPages );

            foreach (Book b in books)
                Console.WriteLine(b);
            Console.WriteLine();

            // (3.2)
            // Mit anonymer Methode (eigentlich durch Lambda Ausdruck ersetzt)
            Worker.Sort(books,
                delegate (object o1, object o2)
                {
                    Book b1 = o1 as Book;
                    Book b2 = o2 as Book;

                    return b1.Pages - b2.Pages;
                }
            );

            foreach (Book b in books)
                Console.WriteLine(b);
            Console.WriteLine();

            // (3.3)
            // Mit Lamba-Ausdruck
            Worker.Sort(books, (o1, o2) =>
                {
                    Book b1 = o1 as Book;
                    Book b2 = o2 as Book;

                    return b1.Pages - b2.Pages;
                }
            );

            foreach (Book b in books)
                Console.WriteLine(b);
            Console.WriteLine();

            Console.ReadLine();
        }

        static int CompareBooksAscendingPages(object o1, object o2)
        {
            Book b1 = o1 as Book;
            Book b2 = o2 as Book;

            return b1.Pages - b2.Pages;
        }
    }

    class Book : Comparable
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int Pages { get; set; }

        public override string ToString()
        {
            return this.Title + ", " + this.Author + ", " + this.Pages;
        }

        public int CompareTo(object o)
        {
            Book other = o as Book;
            return this.Title.CompareTo(other.Title);
        }
    }

    class BookAscendingPagesComparer : Comparer
    {
        public int Compare(object o1, object o2)
        {
            Book b1 = o1 as Book;
            Book b2 = (Book)o2;

            return b1.Pages - b2.Pages;
        }
    }

    interface Comparable
    {
        int CompareTo(object o);
    }

    interface Comparer
    {
        int Compare(object o1, object o2);
    }

    class Worker
    {
        public static void Sort(object[] objects)
        {
            int i;
            bool swapped = true;
            object temp;

            while(swapped)
            {
                for(i = 0, swapped = false; i < (objects.Length - 1); i++)
                {
                    if((objects[i] as Comparable).CompareTo(objects[i + 1]) > 0)
                    {
                        temp = objects[i];
                        objects[i] = objects[i + 1];
                        objects[i + 1] = temp;

                        swapped = true;
                    }
                }
            }
        }

        public static void Sort(object[] objects, Comparer comparer)
        {
            int i;
            bool swapped = true;
            object temp;

            while (swapped)
            {
                for (i = 0, swapped = false; i < (objects.Length - 1); i++)
                {
                    if (comparer.Compare(objects[i], objects[i + 1]) > 0)
                    {
                        temp = objects[i];
                        objects[i] = objects[i + 1];
                        objects[i + 1] = temp;

                        swapped = true;
                    }
                }
            }
        }

        public delegate int CompareDelegate(object o1, object o2);

        public static void Sort(object[] objects, CompareDelegate compare)
        {
            int i;
            bool swapped = true;
            object temp;

            while (swapped)
            {
                for (i = 0, swapped = false; i < (objects.Length - 1); i++)
                {
                    if (compare(objects[i], objects[i + 1]) > 0)
                    {
                        temp = objects[i];
                        objects[i] = objects[i + 1];
                        objects[i + 1] = temp;

                        swapped = true;
                    }
                }
            }
        }
    }
}

```

## Array.Sort

- `IComparable` (1 Parameter - im Objekt) und `IComparer` (2 Parameter - eigenes Objekt) aus der Klassenbibliothek.

```c#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceTest3
{
    class Program
    {
        static void Main(string[] args)
        {
            Book[] books = new Book[]
            {
                new Book { Title = "Blackout", Author="Elsberg", Pages=500 },
                new Book { Title = "Zero", Author="Elsberg", Pages=400 },
                new Book { Title = "Der Prozess", Author="Kafka", Pages=500 },
                new Book { Title = "Amerika", Author="Kafka", Pages=300 },
                new Book { Title = "Faust", Author="Goethe", Pages=150 },
            };

            // (1)
            // IComparable<Book> durch Books implementiert
            Array.Sort(books);

            foreach(Book b in books)
            {
                Console.WriteLine(b);
            }
            Console.WriteLine();

            // (2)
            // Eigene Vergleichsklasse implementiert IComparer<Book>
            Array.Sort(books, new BookDescendingAuthorComparer());

            foreach (Book b in books)
            {
                Console.WriteLine(b);
            }

            Console.WriteLine();

            // (3)
            // Delegate/Lambda-Expression
			// `Comparison` (Delegate Datentyp)
  			Array.Sort(books, (b1, b2) => b1.Pages - b2.Pages);

            Console.ReadLine();
        }
    }

    class BookDescendingAuthorComparer : IComparer<Book>
    {
        public int Compare(Book b1, Book b2)
        {
            return b2.Author.CompareTo(b1.Author);   
        }
    }

    class Book : IComparable<Book>
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int Pages { get; set; }

        public override string ToString()
        {
            return this.Title + ", " + this.Author + ", " + this.Pages;
        }

        public int CompareTo(Book other)
        {
            return this.Title.CompareTo(other.Title);
        }
    }
}

```



- Array aus `Meal` Objekten, Sortieren mit `Array.Sort`, `CS_Projekte/Gerhard/03_Arrays/2018_10_29_Gruppe1_InterfaceTest5.cs` wie Books Beispiel aber mehr Vergleicher.
- Array aus `Pupil` Objekten, `CS_Projekte/Gerhard/03_Arrays/2018_11_12_Gruppe2_InterfaceTest6.cs`, Verwenden von `IComparer`. Wie Books Beispiel.

# foreach für eigene Klassen

- `2018_10_16_Klasse_InterfaceTest4.cs`, `CS_Projekte/Gerhard/03_Arrays/2018_11_12_Gruppe2_InterfaceTest7.cs` :`IEnumerable` `IEnumerator` - `foreach` für eigene Klassen.
- Array aus Büchern, `IEnumerable` und `IEnumerator` verwenden (foreach), 

```c#
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfaceTest7
{
    class Program
    {
        static void Main(string[] args)
        {
            Book[] books = new Book[]
            {
                new Book { Title = "Blackout", Author = "Elsberg", Pages = 500 },
                new Book { Title = "Zero", Author = "Elsberg", Pages = 400 },
                new Book { Title = "Der Prozess", Author = "Kafka", Pages = 500 },
                new Book { Title = "Amerika", Author = "Kafka", Pages = 300 },
                new Book { Title = "Faust", Author = "Goethe", Pages = 150 },
            };

            Library library = new Library(books);

            foreach (Book b in library)
            {
                Console.WriteLine(b);
            }

            Console.WriteLine();

            IEnumerator libraryEnumerator = library.GetEnumerator();
            while(libraryEnumerator.MoveNext())
            {
                Console.WriteLine(libraryEnumerator.Current);
            }

            Console.ReadLine();
        }
    }

    class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public int Pages { get; set; }

        public override string ToString()
        {
            return this.Title + ", " + this.Author + ", " + this.Pages;
        }
    }

    class Library : IEnumerable
    {
        private Book[] books;

        public Library(Book[] books)
        {
            this.books = books;
        }

        public IEnumerator GetEnumerator()
        {
            return new LibraryEnumerator(this.books);
        }
    }

    class LibraryEnumerator : IEnumerator
    {
        private int index = -1;
        private Book[] books;

        public LibraryEnumerator(Book[] books)
        {
            this.books = books;
        }

        public object Current
        {
            get
            {
                return this.books[this.index];
            }
        }

        public bool MoveNext()
        {
            return ++this.index < this.books.Length;
        }

        public void Reset()
        {
            this.index = -1;
        }
    }
}

```


