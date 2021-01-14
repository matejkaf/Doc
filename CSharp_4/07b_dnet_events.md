---
title: .NET Events
cmds: ['md_html.bash']
---



# .NET Events

- `CS_Projekte/Gerhard/04_Delegates/2018_11_20_Klasse_EventTest1`: 2 Files, `Counter` mit min und max



Schreibe eine Klasse `Counter`, diese verwaltet einen ganzzahlen Wert der um eins erhöht (Methode `Increment`) und um eins vermindert (Methode `Decrement`) werden kann. Der Zähler hat 2 über den Konstruktor einstellbare Grenzen eine untere und eine obere. 

Es soll einer von 2 Events ausgelöst werden wenn sich der Zähler außerhalb dieser Grenzen verändert hat:

- MaxExceeded

- MinUnderrun

Der aktuelle Zählerwert soll als Parameter dem Event Delegate übergeben werden.

Teste mit einem Objekt der Klasse `Counter` und 2 Subscribern pro Event - ein Subscriber sollen statische Klassenmethoden der andere die Methoden einer Objektinstanz sein.

Lösung:

```csharp
using System;

namespace eventsuebung
{
    class Counter
    {
        int Max; // obere Grenze
        int Min; // untere Grenze

        public delegate void MaxExceededHandler(int val);
        public delegate void MinUnderrunHandler(int val);

        public event MaxExceededHandler MaxExceeded;
        public event MinUnderrunHandler MinUnderrun;

        public Counter(int max, int min, int val)
        {
            Max = max;
            Min = min;
            Cnt = val;
        }

        private int cnt; // backing field
        private int Cnt
        {
            get { return cnt; }
            set 
            { 
                cnt = value;
                if (MinUnderrun!=null && cnt<Min)
                {
                    MinUnderrun(cnt);
                }
                if (MaxExceeded!=null && cnt>Max)
                {
                    MaxExceeded(cnt);
                }
            }
        }

        public void Increment()
        {
            Cnt++;
        }

        public void Decrement()
        {
            Cnt--;
        }
        
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Delegate example");
            Counter counter = new Counter(12,9,10);
            Test test = new Test();
            counter.MaxExceeded += test.exceeded;
            counter.MaxExceeded += static_exceeded;
            counter.MinUnderrun += test.underrun;
            counter.MinUnderrun += static_underrun;
            
            counter.Increment();
            counter.Increment();
            counter.Increment(); // exceeded event fired
            counter.Increment(); // exceeded event fired

            counter.Decrement(); // exceeded event fired
            counter.Decrement(); // exceeded event fired
            System.Console.WriteLine("====================");
            counter.Decrement();  
            counter.Decrement();  
            counter.Decrement();  
            counter.Decrement(); // underrun event fired

            System.Console.WriteLine("=== ENDE ===");
        }
        public static void static_exceeded(int val)
        {
            System.Console.WriteLine("static_exceeded "+val);
        }
        public static void static_underrun(int val)
        {
            System.Console.WriteLine("static_underrun "+val);
        }
    }

    class Test
    {
        public void exceeded(int val)
        {
            System.Console.WriteLine("Test::exceeded "+val);
        }
        public void underrun(int val)
        {
            System.Console.WriteLine("Test::underrun "+val);
        }
    }
}
```



Schreibe die vorhergehende Event Aufgabe so um, dass es dem **Standard .NET Event Pattern** entspricht.

```csharp
using System;

namespace dotnetevents
{

    public class CountChangedEventArgs : System.EventArgs
    {
        public readonly int NewCount;
        public CountChangedEventArgs(int newCount)
        {
            NewCount = newCount;
        }
    }

    class Counter
    {
        int Max; // obere Grenze
        int Min; // untere Grenze


        public event EventHandler<CountChangedEventArgs> MaxExceeded;
        protected virtual void OnMaxExceeded(CountChangedEventArgs e)
        {
            if (MaxExceeded!=null)
            {
                MaxExceeded(this, e);
            }
        }

        public event EventHandler<CountChangedEventArgs> MinUnderrun;
        protected virtual void OnMinUnderrun(CountChangedEventArgs e)
        {
            if (MaxExceeded!=null)
            {
                MinUnderrun(this, e);
            }
        }

        public Counter(int max, int min, int val)
        {
            Max = max;
            Min = min;
            Cnt = val;
        }

        private int cnt; // backing field
        private int Cnt
        {
            get { return cnt; }
            set 
            { 
                cnt = value;
                if (MinUnderrun!=null && cnt<Min)
                {
                    OnMinUnderrun(new CountChangedEventArgs(cnt));
                }
                if (MaxExceeded!=null && cnt>Max)
                {
                    OnMaxExceeded(new CountChangedEventArgs(cnt));
                }
            }
        }

        public void Increment()
        {
            Cnt++;
        }

        public void Decrement()
        {
            Cnt--;
        }
        
    }

    class Program
    {
        static void Main(string[] args)
        {
            Counter c = new Counter(6,4,5);
            c.MinUnderrun += TooLow;
            c.MaxExceeded += TooHigh;
            System.Console.WriteLine("--");
            c.Decrement();
            System.Console.WriteLine("--");
            c.Decrement();
            System.Console.WriteLine("++");
            c.Increment();
            System.Console.WriteLine("++");
            c.Increment();
            System.Console.WriteLine("++");
            c.Increment();
            System.Console.WriteLine("++");
            c.Increment();
            System.Console.WriteLine("++");
            c.Increment();
            System.Console.WriteLine("ENDE");
            
        }

        public static void TooHigh(object o, CountChangedEventArgs e)
        {
            var counter = o as Counter;
            System.Console.WriteLine("TooHigh: "+e.NewCount);
        }

        public static void TooLow(object o, CountChangedEventArgs e)
        {
            var counter = o as Counter;
            System.Console.WriteLine("TooLow: "+e.NewCount);            
        }
    }
}


```



Aufgabe: Schreibe das Stock Beispiel mit Hilfe von .NET Events.



- `CS_Projekte/Gerhard/04_Delegates/2018_11_26_Gruppe2_CasarCipherGUI`: 
- `CS_Projekte/Gerhard/04_Delegates/2018_11_26_Gruppe2_EventTest2`: Würfel mit Events bei einem Sechser oder ungültigen Wurf



Events bei Vier gewinnt:

`FourWinsGameField.cs` verwenden für eine Simulation.



- `CS_Projekte/Gerhard/04_Delegates/2018_11_27_Klasse_VierGewinnt`: Spiellogik in `FourWinsGameField` mit Events an das UI

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VierGewinnt
{
    class Program
    {
        static void Main(string[] args)
        {
            FourWinsGameField gameField = new FourWinsGameField(6, 7);

            gameField.DrawNewToken += GameField_DrawNewToken;
            gameField.IsDraw += GameField_IsDraw;
            gameField.PlayerChanged += GameField_PlayerChanged;
            gameField.PlayerHasWon += GameField_PlayerHasWon;

            gameField.ThrowIn(0);
            gameField.ThrowIn(1);
            gameField.ThrowIn(1);
            gameField.ThrowIn(2);
            gameField.ThrowIn(3);
            gameField.ThrowIn(2);
            gameField.ThrowIn(2);
            gameField.ThrowIn(3);
            gameField.ThrowIn(4);
            gameField.ThrowIn(3);
            gameField.ThrowIn(3);


            Console.ReadLine();
        }

        private static void GameField_PlayerHasWon(object sender, PlayerHasWonEventArgs e)
        {
            Console.WriteLine("Spieler " + e.Player + " hat gewonnen!");
        }

        private static void GameField_PlayerChanged(object sender, PlayerChangedEventArgs e)
        {
            Console.WriteLine("Spielerwechsel -> Neuer aktueller Spieler: " + e.ActualPlayer);
        }

        private static void GameField_IsDraw(object sender, IsDrawEventArgs e)
        {
            Console.WriteLine("Unentschieden!");
        }

        private static void GameField_DrawNewToken(object sender, DrawNewTokenEventArgs e)
        {
            Console.WriteLine("Neuer Spielstein von Spieler " + e.Player + " auf Position " + e.Row + "," + e.Col);
        }
    }
}

```





- `CS_Projekte/Gerhard/04_Delegates/2018_12_03_Gruppe1_FourWinsGUI`
- `CS_Projekte/Gerhard/04_Delegates/2018_12_10_Gruppe2_FourWinsGUI`





