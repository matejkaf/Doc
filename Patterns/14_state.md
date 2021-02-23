---
title: Doc
tags: [5AHELS, lecture, patterns ]
---

# State – Design Pattern

- [refactoring.guru](https://refactoring.guru/design-patterns/state)



## Beispiel – Pattern Matcher

DFS ... Deterministic Finite State Machine

Text besteht nur aus den Buchstaben `A`, `B` und `C`. Aufgabe: finde die exakte Buchstabenfolge `ABC` in einem Text.

```csharp
//(c) G.Waser
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StateTest1
{

  public enum State { START, A, B, END };

  class Program
  {
    static void Main(string[] args)
    {
      State state = State.START;
      int index = 0;

      StreamReader sr = null;

      try
      {
        // ABC in Text finden
        // pattern matching = 

        sr = new StreamReader(@"D:\Test\input.txt");

        int data;
        while((data = sr.Read()) != -1)
        {
          char c = (char)data;

          switch(state)
          {
            case State.START:
              if(c == 'A')
              {
                state = State.A;
              }
              break;

            case State.A:
              if (c == 'B')
              {
                state = State.B;
              }
              else
              {
                if (c != 'A')
                {
                  state = State.START;
                }
              }
              break;

            case State.B:
              if (c == 'C')
              {
                Console.WriteLine(index - 2);
                state = State.START;
              }
              else
              {
                if(c == 'A')
                {
                  state = State.A;
                }
                else
                {
                  state = State.START;
                }
              }

              break;
          }

          index++;
        }
      }
      catch(Exception ex)
      {
        Console.WriteLine(ex.Message);
      }
      finally
      {
        if(sr != null)
        {
          sr.Close();
        }
      }

      Console.ReadLine();
    }
  }
}

```



## Pattern Matcher mit OOP

```csharp
// F.Matejka 22.02.2021

using System;

// Design Pattern: State
//   DFS deterministic finite state machine
// refactoring.guru

// Gegeben: String
//  JDGFJKSHABCkjdsl
// Match: ABC

namespace _210222_state_pattern
{
    class PatternMatcher 
    {
        enum State {START, A, B, END};
        State state = State.START;

        public void reset()
        {
            state = State.START;
        }
        public bool isMatch()
        {
            return state==State.END;
        }
        public void match(char c) 
        {
            switch(state)
            {
                case State.START:
                    if(c=='A')
                    {
                        state = State.A;
                    }
                break;
                case State.A:
                    if(c=='B')
                    {
                        state = State.B;
                    }
                    else
                    {
                        state = State.START;
                    }
                break;
                case State.B:
                    if(c=='C')
                    {
                        state = State.END;
                    }
                    else
                    {
                        state = State.START;
                    }
                break;
                case State.END:
                    break;
            }

        }
    }

    // mit Design Pattern:
    class PatternMatcherContext
    {
        IState state;

        public PatternMatcherContext()
        {
            reset();
        }

        public void changeState(IState nextState)
        {
            state = nextState;
        }

        public void reset()
        {
            state = new StateStart(this);
        }
        public bool isMatch()
        {
            return state is StateEnd;
        }
        public void match(char c)
        {
            state.match(c);
        }
    }

    interface IState
    {
        void match(char c);
    }

    class StateStart : IState
    {
        PatternMatcherContext context;
        public StateStart(PatternMatcherContext context)
        {
            this.context = context;
        }
        public void match(char c)
        {
            if(c=='A')
            {
                context.changeState(new StateA(context));
            }
        }
    }
    class StateA : IState
    {
        PatternMatcherContext context;
        public StateA(PatternMatcherContext context)
        {
            this.context = context;
        }
        public void match(char c)
        {
            if(c=='B')
            {
                context.changeState(new StateB(context));
            }
            else
            {
                context.changeState(new StateStart(context));
            }
        }
    }
    class StateB : IState
    {
        PatternMatcherContext context;
        public StateB(PatternMatcherContext context)
        {
            this.context = context;
        }
        public void match(char c)
        {
            if(c=='C')
            {
                context.changeState(new StateEnd(context));
            }
            else
            {
                context.changeState(new StateStart(context));
            }
        }
    }
    class StateEnd : IState
    {
        PatternMatcherContext context;
        public StateEnd(PatternMatcherContext context)
        {
            this.context = context;
        }
        public void match(char c)
        {
        }
    }


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var matcher = new PatternMatcher();
            var str = "ksjdhfkdshfjhABCsdkjfkdsafhjk";
            foreach(var c in str)
            {
                matcher.match(c);
                if(matcher.isMatch()) 
                {
                    System.Console.WriteLine("MATCH !");
                    break;
                }
            }
            System.Console.WriteLine("END");

            System.Console.WriteLine("Mit State Pattern");
            var matcher2 = new PatternMatcherContext();
            foreach (var c in str)
            {                
                matcher2.match(c);
                if(matcher.isMatch()) 
                {
                    System.Console.WriteLine("MATCH !");
                    break;
                }

            }
        }
    }
}

```





## Beispiel Getränkeautomat

Getränk kostet einen Euro, Automat akzeptiert 50 Cent und 1 Euro.

- Zuviel eingeworfenes Geld kommt sofort wieder heraus.

Ereignisse (Methoden ohne Parameter):

- Start
- Einwurf50Cent
- Einwurf1Euro
- GetraenkeTaste
- RueckgabeTaste



Zustände:

- Euro0
- Cent50
- Euro1

`public enum Zustand { Euro0, Cent50, Euro1 };`



Aktionen

- GetraenkAusgeben
- GeldZurueckgeben
- NeuerZustand (Für Anzeige)



### Source Code

2 Dateien

```csharp
//(c) G.Waser


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetraenkeAutomat
{
  public enum Zustand { Euro0, Cent50, Euro1 };

  public class NeuerZustandEventArgs
  {
    public Zustand Zustand { get; }

    public NeuerZustandEventArgs(Zustand zustand)
    {
      this.Zustand = zustand;
    }
  }

  public class GeldRueckgabeEventArgs
  {
    public int Cent { get; }

    public GeldRueckgabeEventArgs(int cent)
    {
      this.Cent = cent;
    }
  }

  class GetraenkeAutomat
  {
    // Startzustand
    private Zustand zustand = Zustand.Euro0;

    // Ereignisse
    public delegate void NeuerZustandDelegate(object sender, NeuerZustandEventArgs e);
    public event NeuerZustandDelegate NeuerZustand = delegate { };

    public delegate void GetraenkAusgebenDelegate(object sender, EventArgs e);
    public event GetraenkAusgebenDelegate GetraenkAusgabe = delegate { };

    public delegate void GeldRueckgabeDelegate(object sender, GeldRueckgabeEventArgs e);
    public event GeldRueckgabeDelegate GeldRueckgabe = delegate { };

    public void Start()
    {
      // Ereignis auslösen
      this.NeuerZustand(this, new NeuerZustandEventArgs(this.zustand));
    }

    public void Einwurf50Cent()
    {
      switch(this.zustand)
      {
        case Zustand.Euro0: // Keine Aktion
          this.ZustandWechseln(Zustand.Cent50);
          break;

        case Zustand.Cent50:// Keine Aktion
          this.ZustandWechseln(Zustand.Euro1);
          break;

        case Zustand.Euro1: 
          this.GeldZurueckgeben(50);
          break;
      }
    }

    public void Einwurf1Euro()
    {
      switch (this.zustand)
      {
        case Zustand.Euro0: // Keine Aktion
          this.ZustandWechseln(Zustand.Euro1);
          break;

        case Zustand.Cent50:
          this.GeldZurueckgeben(50);
          this.ZustandWechseln(Zustand.Euro1);
          break;

        case Zustand.Euro1: 
          this.GeldZurueckgeben(100);
          break;
      }
    }

    public void GetraenkeTaste()
    {
      switch (this.zustand)
      {
        case Zustand.Euro0: // Keine Aktion
          break;

        case Zustand.Cent50:// Keine Aktion
          break;

        case Zustand.Euro1: 
          this.GetraenkAusgeben();
          this.ZustandWechseln(Zustand.Euro0);
          break;
      }
    }

    public void RueckgabeTaste()
    {
      switch (this.zustand)
      {
        case Zustand.Euro0: // Keine Aktion
          break;

        case Zustand.Cent50:
          this.GeldZurueckgeben(50);
          this.ZustandWechseln(Zustand.Euro0);
          break;

        case Zustand.Euro1: this.GeldZurueckgeben(100);
          this.ZustandWechseln(Zustand.Euro0);
          break;
      }
    }

    private void ZustandWechseln(Zustand neuerZustand)
    {
      // Neuen Zustand setzen
      this.zustand = neuerZustand;

      // Ereignis auslösen
      this.NeuerZustand(this, new NeuerZustandEventArgs(this.zustand));
    }

    private void GetraenkAusgeben()
    {
      // Ereignis auslösen
      this.GetraenkAusgabe(this, EventArgs.Empty);
    }

    private void GeldZurueckgeben(int cent)
    {
      // Ereignis auslösen
      this.GeldRueckgabe(this, new GeldRueckgabeEventArgs(cent));
    }
  }
}

```



### Hauptprogramm

```csharp
//(c) G.Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GetraenkeAutomat
{
  class Program
  {
    static void Main(string[] args)
    {
      GetraenkeAutomat getraenkeAutomat = new GetraenkeAutomat();

      getraenkeAutomat.NeuerZustand += GetraenkeAutomat_NeuerZustand;
      getraenkeAutomat.GetraenkAusgabe += GetraenkeAutomat_GetraenkAusgabe;
      getraenkeAutomat.GeldRueckgabe += GetraenkeAutomat_GeldRueckgabe;

      getraenkeAutomat.Start();

      getraenkeAutomat.Einwurf50Cent();
      getraenkeAutomat.RueckgabeTaste();

      getraenkeAutomat.Einwurf50Cent();
      getraenkeAutomat.Einwurf1Euro();
      getraenkeAutomat.RueckgabeTaste();

      getraenkeAutomat.Einwurf50Cent();
      getraenkeAutomat.Einwurf50Cent();
      getraenkeAutomat.GetraenkeTaste();

      Console.ReadLine();
    }

    private static void GetraenkeAutomat_GeldRueckgabe(object sender, GeldRueckgabeEventArgs e)
    {
      switch(e.Cent)
      {
        case 50:    Console.WriteLine("Geldrückgabe: 50ct");
          break;

        case 100:   Console.WriteLine("Geldrückgabe: 1Euro");
          break;
      }
    }

    private static void GetraenkeAutomat_GetraenkAusgabe(object sender, EventArgs e)
    {
      Console.WriteLine("Getränk ausgeben!");
    }

    private static void GetraenkeAutomat_NeuerZustand(object sender, NeuerZustandEventArgs e)
    {
      Console.Write("Anzeige: ");
      switch(e.Zustand)
      {
        case Zustand.Euro0: 
          Console.WriteLine("0Euro");
          break;

        case Zustand.Euro1: 
          Console.WriteLine("1Euro");
          break;

        case Zustand.Cent50:
          Console.WriteLine("50Ct");
          break;
      }
    }
  }
}

```

