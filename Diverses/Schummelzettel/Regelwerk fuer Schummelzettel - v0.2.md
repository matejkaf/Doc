# Regelwerk für Schummelzettel - v0.2

- v0.1: Idee und erste Version, David Fankhauser, 4AHELS 2019/20
- v0.2: Anpassungen, Franz Matejka

## Beschreibung eines Schummelzettels

### Was soll ein Schummelzettel (bzw. Dokumentation) sein?

Durch den Schummelzettel soll das auswendig lernen von Befehlen, deren Bedeutung und Syntax vermieden werden.
Er soll kurz gehalten und übersichtlich sein.

### Was soll ein Schummelzettel (bzw. Dokumentation) NICHT sein?

Es soll auf keinen Fall ganze Programme enthalten. Er sollte auch nicht "zusammen-gequetscht" sein.

### Konsequenzen

Ein schwerer Verstoß gegen diese Regeln wird wie Schummeln beim Test geahndet.

## Regeln für Schummelzettel

### Quelle

Ein Schummelzettel muss immer **selbst geschrieben** sein. Weiters hat die Ausführung **handschriftlich** zu erfolgen, Ausnahmen davon (d.h. am Computer erstellte Schummelzettel) müssen begründet und vom Lehrer (durch Vorlage des Schummelzettels) genehmigt werden.
Das **Kopieren** von Dokumentation aus dem Internet oder von Schulkollegen ist strengstens untersagt. Bei zu großer Ähnlichkeit kann der Lehrer eine Rechtfertigung verlangen.

### Umfang

Ein Schummelzettel ist grundsätzlich **eine DIN A4 Seite**. Bei großem Stoffumfang können vom Lehrer auch mehr Seiten genehmigt werden.

### Strukturierung

Die Strukturierung muss **klar** sein und sollte **einfach** gehalten werden. 
Falls eine nicht-handschriftliche Ausführung genehmigt wurde ist eine vernünftige Schriftgröße zu wählen. (PC: 14px).

Ein Befehl kann immer mit einem kurzen Kommentar und/oder ein kurzes Codebeispiel beschrieben werden (oder vergleichbare Strukturierung).

## Positives Beispiel

### StringBuilder

```c#
StringBuilder sb = new StringBuilder(String, Int32) or (String) or (Int32); //Int32 = Capacity
sb.Remove(Int32, Int32); //(Startindex, amount)
sb.Replace(String, String); //First String replaced by second String (=all occurences)
```

Hier steht kurz und knapp ein Befehl und als Kommentar die Beschreibung der Variablen.

## Negatives Beispiel

```c#
using System;
using System.Collections.Generic;

namespace _191128_ArraySort
{
    class Book
    {
        public string Title { get; set; }
        public string Autor { get; set; }
        public int Pages { get; set; }
        public int Rating { get; set; }

        public override string ToString()
        {
            string rating = "";
            for (int i = 0; i < Rating; i++)
                rating += '\u2605';
            while (rating.Length<5)
            {
                rating += '\u2606';
            }
            return $"{Title} ({Autor}) - {Pages} {Rating}";
        }

        public int CompareTo(object o){
            return Pages - (o as Book).Pages;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
             var books =new Book[]
            {
                new Book() {Title="Blackout", Autor= "Elsberg", Pages=500, Rating =4},
                new Book() {Title="Warrior Cats", Autor= "Hunter", Pages=352, Rating =3},
                new Book() {Title="Der Prozess", Autor= "Kafka", Pages=1000, Rating =2},
                new Book() {Title="Im Westen nichts Neues", Autor= "Remarque", Pages=1000, Rating =2}
            };
                     
            Array.Sort(books, new AscendingTitleComparer());         
            Array.Sort(books, (b1,b2)=> b2.Pages-b1.Pages);
        }
    }
    class AscendingTitleComparer : IComparer<Book>
    {
        public int Compare(Book b1, Book b2){
            return b1.Title.CompareTo(b2.Title);
        }
    }
}
```

Hier wird einfach das Programm kopiert ohne jede Beschreibung eines Befehls.