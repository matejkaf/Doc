---
title: Proxy – Design Pattern
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ patterns ]
---



```csharp
// (c) G. Waser
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProxyTheoryCode
{
    class Program
    {
        static void Main(string[] args)
        {
            ProtectionProxy subject = new ProtectionProxy();

            Console.WriteLine(subject.Request());

            subject.Authenticate("Abracadabra");

            Console.WriteLine(subject.Request());

            Console.ReadLine();
        }
    }

    class Subject
    {
        public string Request()
        {
            return "Subject Request " + "Choose left door\n";
        }
    }

    public interface ISubject
    {
        string Request();
    }

    public class ProtectionProxy : ISubject
    {
        // An authentication proxy first asks for a password
        Subject subject = null;
        string password = "Abracadabra";

        public string Authenticate(string supplied)
        {
            if (supplied != password)
            {
                return "Protection Proxy: No access";
            }
            else
            {
                subject = new Subject();
            }
            return "Protection Proxy: Authenticated";
        }

        public string Request()
        {
            if (subject == null)
            {
                return "Protection Proxy: Authenticate first";
            }
            else
            {
                return "Protection Proxy: Call to " + subject.Request();
            }
        }
    }
}

```

