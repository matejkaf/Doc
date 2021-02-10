---
title: Doc
tags: [lecture,4AHELS]
---

# Streams für Text

Lesen und Schreiben von Files die Text enthalten.

## Grundgerüst und zeichenweises Schreiben

Schreiben einzelner Buchstaben in eine Textdatei

```csharp
StreamWriter sw = null; // auf null setzen

try
{
  sw = new StreamWriter("test.txt");

  sw.Write('4');
  sw.Write('A');
  sw.Write('H');
  sw.Write('E');
  sw.Write('L');
  sw.Write('S');
}
catch(Exception ex)
{
  // bei Auftreten einer exception
  Console.WriteLine(ex);
}
finally
{
  // finally wird garantiert immer aufgerufen im Normalfall und in dem
  // Fall, dass eine Exception aufgetreten ist.
  if(sw != null)
  {
    sw.Close();
    // Close ist wichtig bei Programmen die länger laufen
    // Betriebssysteme ermöglichen nur eine begrenzte Anzahl offener Dateien
    // pro Programm
  }
}
```

**Übung 1:** Programm ausprobieren. Textfile überprüfen.



## Textfile lesen – Zeichenweise

`StreamReader`:

```csharp
// Kurzübersicht StreamReader
var sr = new StreamReader("test1.txt");
int data = sr.Read();
if( data != -1) // -1 : Ende der Datei
{
  char c = (char)data;
}
```

**Übung 2:** Textfile zeichenweise einlesen und am Bildschirm ausgeben.



## Textfile – Zeilenweise

`StreamWriter`:

```csharp
// Kurzübersicht StreamWriter
var sw = new StreamWriter("test2.txt");
sw.WriteLine("Heute ist Dienstag");
sw.WriteLine("Morgen ist Mittwoch");
sw.WriteLine("Übermorgen ist Donnerstag");
```

`StreamReader`:

```csharp
var sr = new StreamReader("test2.txt");
string line = sr.ReadLine();
if(line==null)
	Console.WriteLine("ENDE"); // Ende der Datei
else
	Console.WriteLine(line);
```

**Übung 3:** Schreibe und lese eine Textdatei zeilenweise – Ergebnis am Bildschirm ausgeben.



## Aufgaben

**Übung 4:** (Zahlenkolonnen addieren) Die Textdatei `columns.txt` enthält einige Zeilen mit Zahlen, Jede Zeile besteht aus 3 Zahlen. Der gesamte Datenbestand besteht somit aus 3 Spalten, die extra aufaddiert werden sollen. Die 3 sich ergebenden Spaltensummen sind auszugeben. Berücksichtige, dass die Datei Leerzeilen enthalten kann (auch mit Leerzeichen und Tabulatoren). Außerdem können Kommentare enthalten sein, Kommentare beginnen mit einem `#` Zeichen und gehen bis zum Ende der Zeile. Kommentare können eine ganze Zeile betreffen oder nach den Zahlen stehen.

**Übung 5:** Lies die Gemeindedaten aus `gemeinden.csv` (`String.split` verwenden!). Lege dazu eine Klasse `Gemeinde` an und speichere die gelesenen Objekte in `List<Gemeinde> gemeinden`. Die Klasse `Gemeinde` soll die Daten aus der csv Datei mit passendem Datentyp (`string`, `int`, `double`) enthalten. Gib die Namen der Gemeinden und die Einwohnerzahl sortiert nach absteigender Einwohnerzahl aus (Hinweis: Methode `sort` der Klasse `List`, Beispiel: `list.Sort( (emp1,emp2)=>emp1.FirstName.CompareTo(emp2.FirstName) );`).



## using Direktive

Zur Vereinfachung der try/catch/finally Syntax.

[using statement (C# Reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement)

```csharp
using (var reader = new StreamReader(path))
{
  string item;
  while( (item = reader.ReadLine()) != null )
  {
    Console.WriteLine(item);
  }
}
```

C#8: geht auch ohne `{}`



Vom Compiler übersetzt in:

```csharp
var reader = new StreamReader(path);
try {
  string item;
  while( (item = reader.ReadLine()) != null )
  {
    Console.WriteLine(item);
  }
} finally
{
  reader?.Dispose();
}
```

