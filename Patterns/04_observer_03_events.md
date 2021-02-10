---
title: Observer Design Pattern – C# Events
cmds: ['md_html.bash']
tags: [lecture, patterns ]
---



# C# Events

C# Events als Beispiel für Observer Design Pattern.



## Temperatur Sensor

Standard .NET event pattern

```csharp
using System;

namespace _201221_events
{
    class Thermometer {
        public class ThermometerChangedEventArgs : System.EventArgs {
            public readonly double NewTemp;
            public ThermometerChangedEventArgs(double NewTemp)
            {
                this.NewTemp = NewTemp;
            }
        }
        public event EventHandler<ThermometerChangedEventArgs> TempChanged;
        double temp = 27.0;
        public double Temp { 
            get {return temp;}
            set {
                    if(temp != value)
                    {
                        temp = value;
                        TempChanged(this, new ThermometerChangedEventArgs(temp));
                    }
                }
        }

    }

    class Program
    {
        // Keine eignen Klassen für die Observer notwendig
        public static void tooCold(object o, Thermometer.ThermometerChangedEventArgs args)
        {
            if(args.NewTemp<18) {
                System.Console.WriteLine("Too Colddddddd ....");
            }
        }
        public static void tooHot(object o, Thermometer.ThermometerChangedEventArgs args)
        {
            if(args.NewTemp>35) {
                System.Console.WriteLine("Too Hot Phhhhhhhh ....");
            }
        }
        static void Main(string[] args)
        {
            var thermometer = new Thermometer();
            thermometer.TempChanged += tooCold;
            thermometer.TempChanged += tooHot;
            thermometer.Temp = 10;
            thermometer.Temp = 36;
            thermometer.Temp = 36;
            thermometer.Temp = 37;

        }
    }
}

```





## Dice Roller

```csharp
// (c) G.Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ObserverTest1
{
    class Program
    {
        static void Main(string[] args)
        {
            Dice dice = new Dice();

            dice.ValidRoll += Dice_ValidRoll;
            dice.InvalidRoll += Dice_InvalidRoll;
            dice.SixRolled += Dice_SixRolled;

            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();
            dice.Roll();

            Console.ReadLine();
        }

        private static void Dice_SixRolled(object sender, EventArgs e)
        {
            Console.WriteLine("Sechser gewürfelt!");
        }

        private static void Dice_InvalidRoll(object sender, Dice.InvalidRollEventArgs e)
        {
            Console.WriteLine("Ungültiger Wurf: " + e.InvalidRollType);
        }

        private static void Dice_ValidRoll(object sender, Dice.ValidRollEventArgs e)
        {
            Console.WriteLine("Gültiger Wurf: " + e.Value);
        }
    }

    class Dice
    {
        // Ereignisse
        // - Gültiger Wurf => Wert als Ereignisargument
        // - Ein Sechser wurde gewürfelt
        // - Ungültiger Wurf
        //   => Der Würfel ist hinuntergefallen
        //   => Der Würfel steht schräg

        public enum InvalidRollTypes { DICE_FALLEN_DOWN, DICE_DIAGONAL };

        public class ValidRollEventArgs : EventArgs
        {
            public int Value { get; }

            public ValidRollEventArgs(int value)
            {
                this.Value = value;
            }
        }

        public class InvalidRollEventArgs : EventArgs
        {
            public InvalidRollTypes InvalidRollType { get; }

            public InvalidRollEventArgs(InvalidRollTypes invalidRollType)
            {
                this.InvalidRollType = invalidRollType;
            }
        }

        private Random random = new Random();

        public delegate void IsValidRollDelegate(object sender, ValidRollEventArgs e);
        public event IsValidRollDelegate ValidRoll = delegate { }; 
      	//  = delegate { } vermutlich nicht notwendig da += auf events funktioniert die null sind.

        public delegate void SixRolledDelegate(object sender, EventArgs e);
        public event SixRolledDelegate SixRolled = delegate { };

        public delegate void InvalidRollDelegate(object sender, InvalidRollEventArgs e);
        public event InvalidRollDelegate InvalidRoll = delegate { };

        public void Roll()
        {
            int value = this.random.Next(1, 9);

            if(value >= 1 && value <= 6)
            {
                // Gültiger Wurf -> Ereignis auslösen
                this.ValidRoll(this, new ValidRollEventArgs(value));
            }

            if (value == 6)
            {
                // 6er gewürfelt -> Ereignis auslösen
                this.SixRolled(this, EventArgs.Empty);
            }

            if (value == 7)
            {
                // Wurf ungültig -> Ereignis auslösen
                this.InvalidRoll(this, new InvalidRollEventArgs(InvalidRollTypes.DICE_FALLEN_DOWN));
            }

            if (value == 8)
            {
                // Wurf ungültig -> Ereignis auslösen
                this.InvalidRoll(this, new InvalidRollEventArgs(InvalidRollTypes.DICE_DIAGONAL));
            }
        }
    }
}

```

