---
title: Doc
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



# Template Method – Design Pattern

GoF Pattern. [wikipedia: Template method pattern](https://en.wikipedia.org/wiki/Template_method_pattern)

[refactoring guru – template mothod](https://refactoring.guru/design-patterns/template-method)

> This pattern is an example of [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control) because the high-level code no longer determines what algorithms to run; a lower-level algorithm is instead selected at run-time.

![Template Method scheme](fig/Template_Method.png)



## Beispiel

```csharp
abstract class Person {
  // template method:
  public void TaeglicherAblauf() {
    Aufstehen();
    Fruestueck();
    Anreise();
    Arbeit();
    Heimreise();
    Entspannung();
    Schlafen();
  }
  abstract void Aufstehen();
  abstract void Fruestueck();
  abstract void Anreise();
  abstract void Arbeit();
  abstract void Heimreise();
  abstract void Entspannung();
  abstract void Schlafen();
}
```

Methoden können auch als *Hook methods* bereits in der abstrakten Basisklasse implementiert werden. Eventuell auch mit leerem Block.

## Beispiel

```csharp
//(c) G.Waser
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TemplateMethodTest2
{
  class Program
  {
    static void Main(string[] args)
    {
      List<Player> players = new List<Player>();

      players.Add(new Player { Name = "Engleitner", Number = 6, Position = "Verteidigung" });
      players.Add(new Player { Name = "Dörfler", Number = 10, Position = "Mittelfeld" });
      players.Add(new Player { Name = "Brachmaier", Number = 7, Position = "Torwart" });
      players.Add(new Player { Name = "Baischer", Number = 4, Position = "Verteidigung" });
      players.Add(new Player { Name = "Achrainer", Number = 8, Position = "Bankerldrücker" });
      players.Add(new Player { Name = "Moser", Number = 13, Position = "Mittelfeld" });
      players.Add(new Player { Name = "Hartl", Number = 9, Position = "Stürmer" });
      players.Add(new Player { Name = "Damoser", Number = 5, Position = "Bankerldrücker" });
      players.Add(new Player { Name = "Eberharter", Number = 69, Position = "Stürmer" });
      players.Add(new Player { Name = "Heinrich", Number = 1, Position = "Ersatztorwart" });

      // Verwendung einer Filtermethode aus der Bibliothek
      List<Player> fplayers = players.FindAll(p => p.Position.Equals("Mittelfeld"));

      Team team = new Team("5AHELS", players);

      // Mit Interface IPlayerFilter
      List<Player> filteredPlayers = team.FilterPlayers(new MidfieldPlayerFilter());

      // Mit Delegate => Benannte Methode
      filteredPlayers = team.FilterPlayers(new Team.PlayerMatches(IsMidfieldPlayer));

      // Mit Delegate => Anonyme Methode
      filteredPlayers = team.FilterPlayers(
        delegate (Player p)
        {
          return p.Position.Equals("Mittelfeld");
        }
      );

      // Mit Delegate => Lambda-Ausdruck
      filteredPlayers = team.FilterPlayers(p => p.Position.Equals("Mittelfeld"));

      foreach (Player p in filteredPlayers)
      {
        Console.WriteLine(p);
      }

      Console.WriteLine();

      foreach(Player p in team)
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

  class MidfieldPlayerFilter : IPlayerFilter
  {
    public bool PlayerMatches(Player p)
    {
      return p.Position.Equals("Mittelfeld");
    }
  }

  class Player
  {
    public string Name { get; set; }
    public int Number { get; set; }
    public string Position { get; set; }

    public override string ToString()
    {
      return this.Name + ", " + this.Number + ", " + this.Position;
    }
  }

  interface IPlayerFilter
  {
    bool PlayerMatches(Player p);
  }

  class Team : IEnumerable
  {
    public string Name { get; set; }

    private List<Player> players;

    public Team(string name, List<Player> players)
    {
      this.Name = name;
      this.players = players;
    }

    // Mit Interface
    public List<Player> FilterPlayers(IPlayerFilter playerFilter)
    {
      List<Player> filteredPlayers = new List<Player>();

      foreach (Player p in this.players)
      {
        if (playerFilter.PlayerMatches(p))
        {
          filteredPlayers.Add(p);
        }
      }

      return filteredPlayers;
    }

    // Mit Delegate
    public delegate bool PlayerMatches(Player p);

    public List<Player> FilterPlayers(PlayerMatches playerMatches)
    {
      List<Player> filteredPlayers = new List<Player>();

      foreach (Player p in this.players)
      {
        if (playerMatches(p))
        {
          filteredPlayers.Add(p);
        }
      }

      return filteredPlayers;
    }

    // Verwendung des IEnumerators des Typs List
    public IEnumerator GetEnumerator()
    {
      return this.players.GetEnumerator();
    }
  }
}
```

