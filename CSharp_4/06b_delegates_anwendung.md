---
title: Delegates Anwendungen
cmds: ['md_html.bash']
---

## Anwendungen

- Aufgabe 1: Sortieren mit `Array.Sort`
- Aufgabe 2: Klasse Bibliothek (Gerüst vorgeben). Methode `FilterBuecher`  implementieren.
- Aufgabe 3: `List::FindAll` verwenden. Dies ist eine Standard Method die die gleiche Aufgabe wie `FilterBuecher` erfüllt.
- Aufgabe 4: Alle Autoren in Großbuchstaben, mit `List::ForEach`



```csharp
using System;
using System.Collections.Generic;

namespace _200227c_Delegates
{
    class Buch
    {
        public string Titel;
        public string Autor;
        public int Seiten;
        public override string ToString()
        {
            return Titel + " " + Autor + " " + Seiten;
        }
    }
    class Bibliothek
    {   
        private Buch[] buecher;
        // Konstruktor
        public Bibliothek(Buch[] buecher)
        {
            this.buecher = buecher;
        }
        public delegate bool MatchBuch(Buch b);

        public List<Buch> FilterBuecher(MatchBuch matcher)
        {
            var list = new List<Buch>();
            // erzeugt eine Liste aller Buecher für die matcher ein true liefert
            foreach (var buch in this.buecher)
            {
                if(matcher(buch)) 
                {
                    list.Add(buch);
                }
            }
            return list;
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            /*
            Aufgabe:

            Book Klasse
            - Titel
            - Author
            - Seiten

            Book Array

            Sortieren mit Array.Sort:
            1. benannte Methode nach Titel
            2. anonymene Methode nach Author
            3. lambda expression nach Seiten
            */


            Buch[] books = new Buch[]
            {
                new Buch { Titel = "Blackout", Autor="Elsberg", Seiten=500 },
                new Buch { Titel = "Zero", Autor="Elsberg", Seiten=400 },
                new Buch { Titel = "Der Prozess", Autor="Kafka", Seiten=500 },
                new Buch { Titel = "Amerika", Autor="Kafka", Seiten=300 },
                new Buch { Titel = "Faust", Autor="Goethe", Seiten=150 },
            };

            System.Console.WriteLine("==========================");
            foreach (var item in books)
            {
                System.Console.WriteLine(item);
            }
            System.Console.WriteLine("==========================");

            // Mit benannter Methode
            Array.Sort(books, SortTitelAufst);
            
            foreach (var item in books)
            {
                System.Console.WriteLine(item);
            }
            System.Console.WriteLine("==========================");

            // Mit anonymer Methode
            Array.Sort(books, delegate (Buch b1, Buch b2 ) {return b1.Autor.CompareTo(b2.Autor);} );
            foreach (var item in books)
            {
                System.Console.WriteLine(item);
            }
            System.Console.WriteLine("==========================");

            // Mit Lambda Expression
            Array.Sort(books, (Buch b1, Buch b2 ) => b1.Seiten-b2.Seiten );
            foreach (var item in books)
            {
                System.Console.WriteLine(item);
            }
            System.Console.WriteLine("==========================");


            // Bibliothek
            Bibliothek bib = new Bibliothek(books);

            /* einige Filer (Lambda Expressions) ausprobieren:
                - Buecher mit über 300 Seiten
                - Buecher von Autoren mit A am Anfang
                - Buecher mit einem r im Titel
                - Alle Buecher von Kafka
            */
            System.Console.WriteLine("== Filter ==");
            List<Buch> set1 = bib.FilterBuecher( b => b.Seiten>300 );
            List<Buch> set2 = bib.FilterBuecher( b => b.Autor.ToLower().StartsWith("e") );
            List<Buch> set3 = bib.FilterBuecher( b => b.Titel.ToLower().Contains("r") );
            List<Buch> set4 = bib.FilterBuecher( b => b.Autor=="Kafka" );

            System.Console.WriteLine( string.Join("\n",set1) );            
            System.Console.WriteLine("==========================");
            System.Console.WriteLine( string.Join("\n",set2) );
            System.Console.WriteLine("==========================");
            System.Console.WriteLine( string.Join("\n",set3) );
            System.Console.WriteLine("==========================");
            System.Console.WriteLine( string.Join("\n",set4) );
            System.Console.WriteLine("==========================");

          	//
            // array --> List<Buch>
            // Es gibt Methode in List für obigen Anwendungsfall
            //  ! verwenden
            List<Buch> buecherliste = new List<Buch>(books);
            System.Console.WriteLine( string.Join("\n", buecherliste.FindAll(b => b.Seiten>300) ) );            

          	//
            // Alle Authoren in Großbuchstaben, mit "ForEach"
            // Kafka --> KAFKA
            System.Console.WriteLine("==========================");
            buecherliste.ForEach(  b => b.Autor = b.Autor.ToUpper()  );
            buecherliste.ForEach( b => System.Console.WriteLine(b) );
            //System.Console.WriteLine( string.Join("\n",buecherliste) );
        }

        public static int SortTitelAufst(Buch b1, Buch b2)
        {
            return b1.Titel.CompareTo(b2.Titel);
        }
    }
}

```



## Beispiel von Gerhard

Erstes Beispiel, `public delegate double Calculation(double x, double y);`, `CS_Projekte/Gerhard/04_Delegates/2018_11_06_Klasse_DelegateTest1.cs`

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateTest1
{
    class Program
    {
        public delegate double Calculation(double x, double y);

        static void Main(string[] args)
        {
            Calculation calculation;
            calculation = new Calculation(Addieren);
            Console.WriteLine(calculation(3.0, 4.0));

            calculation = Multiplizieren;
            Console.WriteLine(calculation(3.0, 4.0));
            Console.ReadLine();
        }

        static double Addieren(double a, double b)
        {
            return a + b;
        }

        static double Multiplizieren(double a, double b)
        {
            return a * b;
        }
    }
}

```



- Array aus Büchern sortieren mit delegates, `CS_Projekte/Gerhard/04_Delegates/2018_11_19_Gruppe1_DelegateTest2.cs`

  - [Sort<T>(T[], Comparison<T>)](https://docs.microsoft.com/en-us/dotnet/api/system.array.sort?view=netframework-4.8#System_Array_Sort__1___0___System_Comparison___0__)
  - Siehe evtl. auch [CityInfo in Comparison<T> Delegate](https://docs.microsoft.com/en-us/dotnet/api/system.comparison-1?view=netframework-4.8)
  - (1) Mit benannter Methode
  - (2) Mit anonymer Methode (eher veraltet)
  - (3) Mit lambda expression

  ```csharp
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Text;
  using System.Threading.Tasks;
  
  namespace DelegateTest2
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
  
              // Mit benannter Methode (alt)
              //Array.Sort(books, new Comparison<Book>(BooksDescendingPagesCompare));
  
              // Mit benannter Methode (neu)
              Array.Sort(books, BooksDescendingPagesCompare);
  
              // Mit anonymer Methode
              /*
              Array.Sort(books,
                  delegate(Book b1, Book b2)
                  {
                      return b2.Pages - b1.Pages;
                  }
              );
              */
  
              // Mit Lambda-Ausdruck
              Array.Sort(books, (b1, b2) => b2.Pages - b1.Pages);
  
              foreach(Book b in books)
              {
                  Console.WriteLine(b);
              }
  
              Console.ReadLine();
          }
  
          static int BooksDescendingPagesCompare(Book b1, Book b2)
          {
              return b2.Pages - b1.Pages;
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
  }
  
  ```

  







- Aufgabe: List aus Fußballspielern, einen Filter implementieren, `CS_Projekte/Gerhard/04_Delegates/2018_11_19_Gruppe1_DelegateTest3.cs`



```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateTest3
{
    class Program
    {
        static void Main(string[] args)
        {
            Player[] players = new Player[]
            {
                new Player { Name = "Jinariu", Position="Verteidigung", Number=13 },
                new Player { Name = "Dörfler", Position="Verteidigung", Number=2 },
                new Player { Name = "Engleitner", Position="Stürmer", Number=9 },
                new Player { Name = "Brachmaier", Position="Mittelfeld", Number=7 },
                new Player { Name = "Baischer", Position="Mittelfeld", Number=6 },
                new Player { Name = "Achrainer", Position="Stürmer", Number=8 },
                new Player { Name = "Heinrich", Position="Stürmer", Number=9 },
                new Player { Name = "Eberharter", Position="Mittelfeld", Number=7 },
                new Player { Name = "Hartl", Position="Mittelfeld", Number=6 },
                new Player { Name = "Moser", Position="Stürmer", Number=8 }
            };

            Team team = new Team("4AHELS", players);

            // Mit benannter Methode
            //List<Player> midfieldPlayers = team.FilterPlayers(new Team.MatchesDelegate(IsMidfieldPlayer));

            /*
            // Mit anonymer Methode
            List<Player> midfieldPlayers = team.FilterPlayers(
                delegate (Player p)
                {
                    return p.Position.Equals("Mittelfeld");
                }
            );
            */

            // Mit Lambda-Ausdruck
            List<Player> midfieldPlayers = team.FilterPlayers(p => p.Position.Equals("Mittelfeld"));

            //List<Player> midfieldPlayers = team.FilterPlayers(p => p.Name.EndsWith("er"));

            foreach (Player p in midfieldPlayers)
            {
                Console.WriteLine(p);
            }

            Console.ReadLine();
        }

        static bool IsMidfieldPlayer(Player p)
        {
            return p.Position.Equals("Mittelfeld");
        }
    }

    class Player
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public int Number { get; set; }

        public override string ToString()
        {
            return this.Name + ", " + this.Position + ", " + this.Number;
        }
    }

    class Team
    {
        private string name;
        private Player[] players;

        public Team(string name, Player[] players)
        {
            this.name = name;
            this.players = players;
        }

        public delegate bool MatchesDelegate(Player p);

        public List<Player> FilterPlayers(MatchesDelegate matches)
        {
            List<Player> filteredPlayers = new List<Player>();

            foreach(Player p in this.players)
            {
                if(matches(p))
                {
                    filteredPlayers.Add(p);
                }
            }

            return filteredPlayers;
        }
    }
}

```



- List aus Fußballspielern, die Methoden `FindAll` und `ForEach` von `List` anwenden, `CS_Projekte/Gerhard/04_Delegates/2018_11_19_Gruppe1_DelegateTest4.cs`

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegateTest4
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Player> players = new List<Player>();

            players.Add(new Player { Name = "Jinariu", Position = "Verteidigung", Number = 13 });
            players.Add(new Player { Name = "Dörfler", Position = "Verteidigung", Number = 2 });
            players.Add(new Player { Name = "Engleitner", Position="Stürmer", Number=9 });
            players.Add(new Player { Name = "Brachmaier", Position="Mittelfeld", Number=7 });
            players.Add(new Player { Name = "Baischer", Position="Mittelfeld", Number=6 });
            players.Add(new Player { Name = "Achrainer", Position="Stürmer", Number=8 });
            players.Add(new Player { Name = "Heinrich", Position="Stürmer", Number=9 });
            players.Add(new Player { Name = "Eberharter", Position="Mittelfeld", Number=7 });
            players.Add(new Player { Name = "Hartl", Position="Mittelfeld", Number=6 });
            players.Add(new Player { Name = "Moser", Position = "Stürmer", Number = 8 });

            // Mit benannter Methode
            //List<Player> filteredPlayers = players.FindAll(new Predicate<Player>(IsPlayerNameLongerThan8));

            /*
            // Mit anonymer Methode
            List<Player> filteredPlayers = players.FindAll(
                delegate(Player p)
                {
                    return p.Name.Length > 8;
                }
            );
            */

            // Mit Lambda-Ausdruck
            List<Player> filteredPlayers = players.FindAll(p => p.Name.Length > 8);

            foreach (Player p in filteredPlayers)
            {
                Console.WriteLine(p);
            }

            Console.WriteLine();

            // Die Nummer jedes Spielers um eins erhöhen
            players.ForEach(p => p.Number++);

            foreach (Player p in players)
            {
                Console.WriteLine(p);
            }

            Console.ReadLine();
        }

        static bool IsPlayerNameLongerThan8(Player p)
        {
            return p.Name.Length > 8;
        }
    }

    class Player
    {
        public string Name { get; set; }
        public string Position { get; set; }
        public int Number { get; set; }

        public override string ToString()
        {
            return this.Name + ", " + this.Position + ", " + this.Number;
        }
    }
}
```

