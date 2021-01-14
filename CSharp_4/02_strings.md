# Strings

`Gerhard/2018_09_17_Gruppe2_StringTest1`:

## string 'Schnitzeljagd': 

[MS docs string](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.8#methods)

- Length, 
- [] Index Zugriff (lesen, schreiben?)
- Equals, Equals static, ==
- Substring
- Contains
- Compare (static), 
- CompareTo
- StartsWith, EndsWith
- ToLower, ToUpper
- IndexOf, LastIndexOf
- Insert
- IsNullOrEmpty
- PadLeft, PadRight
- Split, `string[] tokens = s.Split(new char[] { ' ', '-' }, StringSplitOptions.RemoveEmptyEntries);`
- Trim, TrimStart, TrimEnd


## StringBuilder 'Schnitzeljagd': 

[MS docs StringBuilder](https://docs.microsoft.com/en-us/dotnet/api/system.text.stringbuilder?view=netframework-4.8#methods)

- [] Index Zugriff
- Length, Capacity, MaxCapacity
- ==, Equals, Vergleich mit string
- Remove
- Clear
- Insert (Unterschied zu string Insert?)
- Append
- Replace

StringBuilder Methoden returnieren das selbe StringBuilder Objekt => Methodenaufrufe können hintereinandergeschachtelt werden.

## Weiteres

- `Gerhard/2018_09_17_Gruppe2_StringTest2`: Vergleiche von Strings und StringBuilder Objekten
- `Gerhard/2018_09_17_Gruppe2_StringTest3`: `Split` Methode
- `Gerhard/2018_09_17_Gruppe2_URLTokenizer`: `Split` Anwendung auf eine URL

char (s.229), string (S.231)
StringBuilder: (S.238)
`17_StringBuilderTest` - Performance Vergleich zwischen `string` und `StringBuilder` mit Zeitmessung


## Format mit string interpolation

Info: Format geht auch als ToString Parameter!

- [$ - string interpolation (C# reference)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated?view=netframework-4.8)
- [Format String Component](https://docs.microsoft.com/en-us/dotnet/standard/base-types/composite-formatting#format-string-component)
- [Formatting types in .NET](https://docs.microsoft.com/en-us/dotnet/standard/base-types/formatting-types)
- [Using Standard Numeric Format Strings](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#using-standard-numeric-format-strings)

```csharp
var date = new DateTime(1731, 11, 25);
Console.WriteLine($"On {date:dddd, MMMM dd, yyyy} Leonhard Euler introduced the letter e to denote {Math.E:F5} in a letter to Christian Goldbach.");
```

```csharp
Console.WriteLine($"|{"Left",-7}|{"Right",7}|");
const int FieldWidthRightAligned = 20;
Console.WriteLine($"{Math.PI,20}"); // Feldbreite (right aligned)
Console.WriteLine($"{Math.PI,-20}"); // Feldbreite (left aligned)
Console.WriteLine($"{Math.PI,20:F3}"); // precission
Console.WriteLine($"{Math.PI:F2}"); // after comma places
```



## Aufgaben

- `Gerhard/2018_09_24_Gruppe1_PalindromeCheck`: Reverse/Equals mit StringBuilder
- `Gerhard/2018_09_24_Gruppe1_CaesarCipher`: Klasse mit Statischen Methoden, Caesar chiffre mit StringBuilder

- Vignere Veschlüsselung
Einschränkung: nur Buchstaben (keine Leerzeichen)

Bsp. "htl" mit key "cf"


Angriff auf Code:
LBCDUIQVHNJOHYOYGNCVHVG
What fools these mortals be
Keyword: puck
Hint Plaintext enthält das Wort "fools" (Englisch)

- DNA als Abfolge (Sequenz) der Basen Adenin (A), Guanin (G), Cytosin (C) und Thymin (T), zufällig erstellen - kommen Teile von `cggta` vor (longest common substring)
- HTML: Alles zwischen Start- und End-Tag, Erweiterung: mehrfaches vorkommen. Alle Attribut key/values ausgeben
- `CS_Projekte/Eigene/24_htmlElementParse` - innerHTML extrahieren
- Datum/Zeit aus einem String extrahieren
