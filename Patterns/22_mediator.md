---
title: Doc
tags: [5AHELS, lecture, patterns ]
---

# Mediator – Design Pattern

[refactoring.guru](https://refactoring.guru/design-patterns/mediator)

> Over time a mediator can evolve into a [God Object](https://refactoring.guru/antipatterns/god-object).

[wikipedia – Mediator Pattern](https://en.wikipedia.org/wiki/Mediator_pattern)

![img](fig/W3sDesign_Mediator_Design_Pattern_UML.jpg)

[tutorialspoint](https://www.tutorialspoint.com/design_pattern/mediator_pattern.htm) - Beispiel: Chat Room (in Java)

[dofactory](https://www.dofactory.com/net/mediator-design-pattern) – Chat Room in C#

[geeksforgeeks](https://www.geeksforgeeks.org/mediator-design-pattern/) - Air Traffic Controller (Java)

```csharp
// (c) G.Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MediatorTheoryCode
{
    class Program
    {
        static void Main(string[] args)
        {
            Mediator m = new Mediator();
            // Two from head office and one from a branch office
            Colleague head1 = new Colleague(m, "John");
            ColleagueB branch1 = new ColleagueB(m, "David");
            Colleague head2 = new Colleague(m, "Lucy");
            
            head1.Send("Meeting on Tuesday, please all ack");
            branch1.Send("Ack"); // by design does not get a copy
            m.Block(branch1.Receive); // temporarily gets no messages
            head1.Send("Still awaiting some Acks");
            head2.Send("Ack");
            m.Unblock(branch1.Receive); // open again
            head1.Send("Thanks all");

            Console.ReadLine();
        }
    }

    class Mediator
    {
        public delegate void Callback(string message, string from);
        Callback respond;

        public void SignOn(Callback method)
        {
            respond += method;
        }

        public void Block(Callback method)
        {
            respond -= method;
        }
        public void Unblock(Callback method)
        {
            respond += method;
        }

        // Send is implemented as a broadcast
        public void Send(string message, string from)
        {
            respond(message, from);
            Console.WriteLine();
        }
    }

    class Colleague
    {
        private Mediator mediator;
        protected string name;

        public Colleague(Mediator mediator, string name)
        {
            this.mediator = mediator;
            this.name = name;

            mediator.SignOn(Receive);
        }
        public virtual void Receive(string message, string from)
        {
            Console.WriteLine(name + " received from " + from + ": " + message);
        }

        public void Send(string message)
        {
            Console.WriteLine("Send (From " + name + "): " + message);
            mediator.Send(message, name);
        }
    }

    class ColleagueB : Colleague
    {
        public ColleagueB(Mediator mediator, string name) : base(mediator, name)
        {

        }

        // Does not get copies of own messages
        public override void Receive(string message, string from)
        {
            if (!String.Equals(from, name))
            {
                Console.WriteLine(name + " received from " + from + ": " + message);
            }
        }
    }
}

```

