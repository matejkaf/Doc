# Regular Expressions

- [RegexOne Tutorial](https://regexone.com)
- [regex101 – Online Compiler](https://regex101.com/)
- [How to write Regular Expressions?](https://www.geeksforgeeks.org/write-regular-expressions/)
- [The regular expression game](http://play.inginf.units.it/)
- [Python Regular Expression](https://www.w3resource.com/python-exercises/re/)
- [Brilliant](https://brilliant.org/practice/regular-expressions/)
- [HackerRank](https://www.hackerrank.com/domains/regex)



## In .NET

- [.NET regular expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions)

- [Regular Expression Language - Quick Reference](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)

- [Regex Class](https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex?view=netcore-3.1)



Erstes Beispiel

```csharp
string input="bla bla aaxysdjbb und so weiter";
Match match = Regex.Match(input, "aa.*bb");
if (match.Success)
{
    Console.WriteLine($"'{match.Value}' found at {match.Index}");
}
```



Mehrfaches Vorkommen:

```csharp
string input="bla bla aaxysdjbb und aasobb weiter";
// Lazy statt Greedy *? statt *
Match match = Regex.Match(input, "aa.*?bb");
while (match.Success)
{
    Console.WriteLine($"'{match.Value}' found at {match.Index}");
    match = match.NextMatch();
}

```

Gruppen

```csharp
string input="bla bla aaxysdjbb und aasobb weiter";
Match match = Regex.Match(input, "aa(.*?)bb");
while (match.Success)
{
    Console.WriteLine($"'{match.Value}' found at {match.Index}");
    Console.WriteLine($"'{match.Groups[1].Value}' found at {match.Groups[1].Index}");
    // Groups[0] entspricht "match"
    match = match.NextMatch();
}

```

Gruppen können auch innerhalb des Patterns wiederverwendet werden

```csharp
string input="das ist aaanur einaaa test";
Match match = Regex.Match(input, @"(aaa|bbb|ccc)(.*?)\1");
// das am Anfang vorkommt muss sich am Ende wiederholen
if (match.Success)
{
    Console.WriteLine($"'{match.Value}' found at {match.Index}");
}
```





```csharp
string pattern = "(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )";
string[] names = { "Mr. Henry Hunt", "Ms. Sara Samuels",
                  "Abraham Adams", "Ms. Nicole Norris" };
foreach (string name in names)
    Console.WriteLine(Regex.Replace(name, pattern, String.Empty));        
```





```csharp
string pattern = @":\w+\b";
string input = "nur ein :kleiner test :sonst nichts";
foreach (Match match in Regex.Matches(input, pattern))
	Console.WriteLine($"'{match.Value}' at {match.Index}"); 
```



# Aufgaben

Starttag und Endtag (HTML) in einem String parsen.



