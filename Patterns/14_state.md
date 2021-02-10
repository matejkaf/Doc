---
title: Doc
cmds: ['md_html.bash','md_html.bash --small']
tags: [lecture, patterns ]
---

# State – Design Pattern

- [refactoring.guru](https://refactoring.guru/design-patterns/state)



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



# Beispiel Getränkeautomat

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
        case Zustand.Euro0: Console.WriteLine("0Euro");
          break;

        case Zustand.Euro1: Console.WriteLine("1Euro");
          break;

        case Zustand.Cent50:Console.WriteLine("50Ct");
          break;
      }
    }
  }
}

```

