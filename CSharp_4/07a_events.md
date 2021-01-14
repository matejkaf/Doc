---
title: Events
cmds: ['md_html.bash']
---



# Events

Events (S.146)

Spezielle Art von delegates.

Beispiel Stocks

```csharp
using System;

namespace _12_Event
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Stock Exchange ===");
            Stock voest = new Stock(){Name="Voest AG", Price=33.2};

            Buyer investor = new Buyer(voest) {Limit=29.5, Amount=42};
            voest.Price=30;
            voest.Price=29; 

            Seller moneyMaker = new Seller(voest)  {Limit=39, Amount=100};
            voest.Price=40;


            System.Console.WriteLine("=== END ===");
        }
    }

    class Stock {
        public string Name;
        public delegate void PriceChangeDel(double oldPrice, double newPrice);
        public event PriceChangeDel PriceChange;
        private double price;
        public double Price {
            get {return price;}
            set {
                double oldPrice = price;
                price=value;
                if(PriceChange!=null) {
                    PriceChange(oldPrice, price); // fire event
                }
            }
        }
    }

    class Buyer 
    {
        public double Limit;
        public int Amount;
        public Buyer(Stock s) {
            s.PriceChange += TestForBuy; // register for event
        }
        public void TestForBuy(double oldPrice, double newPrice) {
            if(newPrice<Limit) {
                System.Console.WriteLine($"BUY signal! {Limit} reached: buy {Amount} shares at {newPrice}");
            }
        }
    }

    // Aufgabe: class Seller

    class Seller 
    {
        public double Limit;
        public int Amount;
        public Seller(Stock s) {
            s.PriceChange += TestForSell; // register for event
        }
        public void TestForSell(double oldPrice, double newPrice) {
            if(newPrice>Limit) {
                System.Console.WriteLine($"SELL signal! {Limit} reached: sell {Amount} shares at {newPrice}");
            }
        }

    }
}


```



Warum Events:

Grundsätzlich kann das Event Schlüsselwort weggelassen werden. Aber die subscriber können sich dann gegenseitig stören. Das event Schlüsselwort verhindert Fehler.

```csharp
using System;

namespace _13_Events_Why
{
    // copied from "12_Event"

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== Stock Exchange ===");
            Stock voest = new Stock(){Name="Voest AG", Price=33.2};

            Buyer investor = new Buyer(voest) {Limit=29.5, Amount=42};
            MaliciousBuyer blackHeart = new MaliciousBuyer(voest) {Limit=29.2, Amount=100};
            Seller moneyMaker = new Seller(voest)  {Limit=39, Amount=100};

            voest.Price=30;
            voest.Price=29; // (2) investor not informed!

            System.Console.WriteLine("Har Har Har");
            blackHeart.DoTheBadThing(voest);

            System.Console.WriteLine("=== END ===");
        }
    }

    class Stock {
        public string Name;
        public delegate void PriceChangeDel(double oldPrice, double newPrice);

        // (1) works without event keyword, but see (2) and (3)
        public /* event */ PriceChangeDel PriceChange;
        private double price;
        public double Price {
            get {return price;}
            set {
                double oldPrice = price;
                price=value;
                if(PriceChange!=null) {
                    PriceChange(oldPrice, price); // fire event
                }
            }
        }
    }

    class Buyer 
    {
        public double Limit;
        public int Amount;
        public Buyer(Stock s) {
            s.PriceChange += TestForBuy; // register for event
        }
        public void TestForBuy(double oldPrice, double newPrice) {
            if(newPrice<Limit) {
                System.Console.WriteLine($"BUY signal! {Limit} reached: buy {Amount} shares at {newPrice}");
            }
        }
    }

    class MaliciousBuyer 
    {
        public double Limit;
        public int Amount;
        public MaliciousBuyer(Stock s) 
        {
            // (2) = instead of += (kicks out all other subscribers)
            s.PriceChange = TestForBuy; 
        }
        public void DoTheBadThing(Stock s) 
        {
            // (3) invoke delegate
            s.PriceChange(20.0, 50.0);

            /* Das event Schlüsselwort verhindert, die Verwendung des Delegates außerhalb
             * von Stock (nur += und -= ist erlaubt) 
             */
        }
        public void TestForBuy(double oldPrice, double newPrice) {
            if(newPrice<Limit) {
                System.Console.WriteLine($"BUY signal! {Limit} reached: buy {Amount} shares at {newPrice}");
            }
        }
    }

    // Aufgabe: class Seller

    class Seller 
    {
        public double Limit;
        public int Amount;
        public Seller(Stock s) {
            s.PriceChange += TestForSell; // register for event
        }
        public void TestForSell(double oldPrice, double newPrice) {
            if(newPrice>Limit) {
                System.Console.WriteLine($"SELL signal! {Limit} reached: sell {Amount} shares at {newPrice}");
            }
        }

    }
}

```


