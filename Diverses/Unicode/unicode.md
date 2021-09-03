---
title: Unicode
subtitle: Allgemeines und Encoding
tag: [5AHELS,lecture, unicode, UTF-8, UTF-16, latin1, ]
---

# Inhalt

* TOC
{:toc}

## Allgemeines

Unicode = *Universal Coded Character Set*

> **Unicode** is a computing industry standard for the consistent encoding, representation, and handling of [text](https://en.wikipedia.org/wiki/Character_(computing)) expressed in most of the world's writing systems. [[wikipedia](https://en.wikipedia.org/wiki/Unicode)]

Das Ziel von Unicode ist alle weltweit verwendeten Text-Zeichen in einem gemeinsamen Standard zu vereinen.

Unicode definiert ≈144.000 Zeichen. Jedem Zeichen wird eine Nummer – **code point** – zugeordnet.

Ein code point wird durch **4 Hex Ziffern** angegeben: U+00F7 (÷, Divisionszeichen), U+00B6 (¶, Pilcrow Sign), U+20AC (€, Euro), U+20A9 (₩, Koreanischer Won).

Darüber hinausgehende Code Points (max. 21 Bits) verwenden 5 bzw. 6 hex Ziffern, z.B. U+1F40C (🐌, Snail) oder U+1F9B9 (🦹, Supervillain).

- Die codepoints 0-127 sind identisch zum ASCII Code.
- 128 bis codepoint 255 ist ident mit [ISO-8859-1](https://en.wikipedia.org/wiki/ISO-8859-1) ("Latin-1", standard westeuropäischer Zeichensatz) für maximale Kompatibilität mit bestehendem westlichen Text.  \"Ä\" ist z.B. U+00C4.

  > ISO Latin-1 (ISO 8859-1) coded character set provides the Western European alphabet and symbols and their numeric representations. 



## Liste von Unicode Zeichen

- [Wikipedia: List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin)



## Character Encoding

Encoding: die Art und Weise wie die Nummern der Zeichen (codepoints) konkret abgespeichert werden (als Bits und Bytes)

-  [UTF-8](https://en.wikipedia.org/wiki/UTF-8), [UTF-16](https://en.wikipedia.org/wiki/UTF-16), und [UTF-32](https://en.wikipedia.org/wiki/UTF-32)

**UTF-8** verwendet nur ein Byte für die ersten 128 code points, diese entsprechen dem ASCII Standard. D.h. jeder ASCII Text ist auch im UTF-8 Format. Zeichen in UTF-8 variieren in der Länge – 1 bis 4 Bytes. UTF-8 ist die häufigste Kodierung.

**UTF-16** verwendet für die meisten Zeichen 2 Bytes. Für selten verwendete Zeichen werden 4 Bytes verwendet. UTF-16 wird von Java und C# verwendet.

In **UTF-32** benötigt jedes Zeichen immer 4 Byte. Dieses Encoding ist aufgrund des großen Speicherbedarfs selten in Verwendung.



### UTF-8

UTF-8 stellt einen codepoint in einem bis vier Bytes dar, je nach dem wie viele Bits benötigt werden um den codepoint darzustellen. Die folgende Tabelle zeigt das Schema des Encodings. Die x stehen für die Bits des codepoints. Es wird jeweils die kürzest mögliche Variante gewählt.

| Number of bytes | Bits for code point | First code point | Last code point |  Byte 1  |  Byte 2  |  Byte 3  |  Byte 4  |
| :-------------: | :-----------------: | :--------------: | :-------------: | :------: | :------: | :------: | :------: |
|        1        |          7          |      U+0000      |     U+007F      | 0xxxxxxx |          |          |          |
|        2        |         11          |      U+0080      |     U+07FF      | 110xxxxx | 10xxxxxx |          |          |
|        3        |         16          |      U+0800      |     U+FFFF      | 1110xxxx | 10xxxxxx | 10xxxxxx |          |
|        4        |         21          |     U+10000      |    U+10FFFF     | 11110xxx | 10xxxxxx | 10xxxxxx | 10xxxxxx |

- Die ersten 128 Zeichen (US-ASCII) brauchen ein byte. 
- Die nächsten 1,920 Zeichen brauchen zwei Bytes, deckt die meisten lateinischen Alphabete ab sowie Armenisch, Hebräisch, Arabisch, Syrisch, ...
- Drei Bytes für weitere gängige Zeichen, z.B. Chinesisch, Japanisch und Koreanisch
- Und Vier Bytes dann für Historische Schriften, Mathematische Symbolse, Emoji

UTF-8 versucht maximale Kompatibilität zu erreichen. ASCII Codes <128 sind automatisch in UTF-8. UTF-8 ist außerdem so designed, dass Software automatisch erkennen kann ob z.B. eine Datei in UTF-8 ist (es ist sehr unwahrscheinlich, dass bestehende Zeichen-Kodierungen gültiges UTF-8 ergeben, Quelle [wikipedia](https://en.wikipedia.org/wiki/UTF-8) )

Zum Encoding:

- die ersten Bits im ersten Byte kennzeichnen eindeutig die Anzahl der folgenden Bytes.
- Bytes die auf das erste folgen beginnen mit einer anderen Bit-Sequenz (10), daher kann in einem Datenstrom von jeder Stelle aus der Beginn des nächsten Zeichens gefunden werden (**self-synchronisation**).

### UTF-16

- U+0000-U+D7FF und U+E000-U+FFFF, diese codepoints werden 1:1 als 16 Bit Wert abgebildet
- Ist der erste 16 Bit Wert im Bereich 0xD800-0xDFFF so wird durch einen nachfolgenden 16 Bit Wert erweitert. Die Erweiterung ist nur notwendig für Emoji, seltene Symbole sowie selten verwendete chinesische Schriftzeichen.

Java und C#/.Net verwenden intern UTF-16 zur String Darstellung. Siehe [wikipedia](https://en.wikipedia.org/wiki/UTF-16)

### UTF-32

In dieser Kodierung wird jedes Zeichen durch 4 Bytes dargestellt. Dies ist die einfachste Kodierung, benötigt aber am meisten Speicher. Wird eher selten verwendet.



## Byte Order

BOM = Byte Order Mark

Steht am Anfang der Zeichenfolge und dient bei UTF-16 und UTF-32 um die Byte Reihenfolge (Little oder Big-Endian) zu kennzeichnen. Bei Little-Endian kommt das niederwertigste Byte zuerst.

Beispiel: U+01FE (Ǿ) = 511 dez, wird entweder in der Reihenfolge `FF 01` (little endian) oder `01 FF` (big endian) angegeben. 

In UTF-16 besteht das BOM in [Big-Endian](https://de.wikipedia.org/wiki/Byte-Reihenfolge)-Notation aus der Zweibyte-Sequenz `FE FF`, in der [Little-Endian](https://de.wikipedia.org/wiki/Byte-Reihenfolge)-Notation umgekehrt aus `FF FE`. Da das Zeichen U+FFFE als ungültig definiert ist, kann durch die Reihenfolge der zwei Bytes eindeutig die Reihenfolge der Bytes festgestellt werden. Bei UTF-32 stehen davor oder dahinter noch zwei Nullbytes, die zur Erkennung der Byte-Reihenfolge dienen.

Die [UTF-8](https://de.wikipedia.org/wiki/UTF-8)-Kodierung des BOM besteht aus der Bytesequenz `EF BB BF`. Bei UTF-8 gibt es  keinen Unterschied in der Byte Reihenfolge ein BOM wird trotzdem oft verwendet um Editoren die automatische Erkennung der Kodierung zu erleichtern.

[Quelle: wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)

## Legacy

Am Beginn der Computerei waren viele verschiedene Zeichensätze in Verwendung. Der Austausch von Texten zwischen unterschiedlichen Systemen gestaltete sich demensprechend schwierig. Der erste Schritt zur vereinheitlichung war 1963 der ASCII Code. Im ASCII Code sind Zeichen mit den code points 32–126 definiert. 

Der ASCII Code ist auf **7 Bit** beschränkt (Systeme zu dieser Zeit nutzten 7 Bits) und enthält die Zeichen einer englischsprachigen Tastatur. Durch den Übergang auf **8 Bit** Systeme ergab sich die Möglichkeit die Codepoints 128–254 zu nutzen (z.B. für westeuropäische Zeichen, éóöä). Wieder entstanden unterschiedliche Zeichensätze die zwar alle den ASCII Code verwendeten aber sich in der oberen Hälfte (128–254) unterschieden.

IBM nannte diese Zeichensätze **Code Pages** und begann diese  durchzunummerieren. Microsoft, Oracle, SAP, u.a. haben dieses Nummernschema übernommen. Besonders bekannt ist Code Page 1252. Microsoft verwendet **CP-1252** (auch Windows-1252 oder ANSI encoding genannt) für englische und die meisten westlichen Sprachvarianten von Windows. CP-1252 ist wahrscheinlich der am meisten verbreitete 8-Bit Zeichensatz.

Um den von den Firmen verursachten Zeichensatz-Wildwuchs einzudämmen gab es die Arbeit an der Norm **ISO 8859** und später **Unicode**.

> [ISO 8859](https://en.wikipedia.org/wiki/ISO_8859) is an 8-bit extension of ASCII that supports all of the ASCII code points and adds 12 more, providing 256 character combinations. LATIN1, which is officially named ISO-8859-1, is the most frequently used member of the ISO 8859 family of encodings. In addition to the ASCII characters, LATIN1 contains accented characters, other letters needed for languages of Western Europe, and some special characters.

[CP-1252](https://de.wikipedia.org/wiki/Windows-1252) und ISO 8859-1 sind im wesentlichen identisch. Ein in ISO 8859-1 frei gehaltener Bereich (code points 128-159) wird durch CP-1252 jedoch für druckbare Zeichen verwendet (Euro Symbol, einige französische Zeichen). Die in ISO 8859-1 fehlenden Zeichen wurden in ISO 8859-15 ergänzt.

| ISO Standard                                               | Name of Encoding | Description                               |
| :--------------------------------------------------------- | :--------------- | :---------------------------------------- |
| [ISO 8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) | LATIN 1          | US and Western European                   |
| ISO 8859-2                                                 | LATIN 2          | Central and Eastern European              |
| ISO 8859-3                                                 | LATIN 3          | Southern European, Maltese, and Esperanto |
| ISO 8859-4                                                 | BALTIC           | Northern European                         |
| ISO 8859-5                                                 | CYRILLIC         | Slavic languages                          |
| ISO 8859-6                                                 | ARABIC           | Arabic                                    |
| ISO 8859-7                                                 | GREEK            | Modern Greek                              |
| ISO 8859-8                                                 | HEBREW           | Hebrew and Yiddish                        |
| ISO 8859-9                                                 | TURKISH          | Turkish                                   |
| ISO 8859-10                                                | LATIN 6          | Nordic (Inuit, Sámi, Icelandic)           |
| ISO 8859-11                                                | LATIN/THAI       | Thai                                      |
| ISO 8859-13                                                | LATIN 7          | Baltic Rim                                |
| ISO 8859-14                                                | LATIN 8          | Celtic                                    |
| ISO 8859-15                                                | LATIN 9          | Western European                          |
| ISO-8859-16                                                | LATIN 10         | Central and Eastern European              |



## Python

[str.encode](https://docs.python.org/3/library/stdtypes.html#str.encode)

```python
text = "oö aä uü z÷ |🐌|"
text_bytes = text.encode('utf-8')
print(text_bytes)
```

Bytestring im UTF-8 Encoding:

```
b'o\xc3\xb6 a\xc3\xa4 u\xc3\xbc z\xc3\xb7 |\xf0\x9f\x90\x8c|'
```



[bytes.decode](https://docs.python.org/3/library/stdtypes.html#bytes.decode):

```python
b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'.decode('utf-16')
```

```
'蓏콯캁澽苏'
```

[Liste von Encodings](https://docs.python.org/3/library/codecs.html#standard-encodings)



```python
f = open('latin.txt','rb')
text = f.read()
print(text)
text2 = text.decode('latin-1')
print(text2)
print(text2.encode('utf-8'))

print('--------------------')
f = open('ansi.txt','rb')
text = f.read()
print(text)
text2 = text.decode('cp1252')
print(text2)
```



## MySQL

- [character set](https://www.mysqltutorial.org/mysql-character-set/)
  Beispiel: `latin1`, `utf8`

- [collation](https://www.mysqltutorial.org/basic-mysql-tutorial.aspx)

  Beispiel: `latin1_german1_ci`, `utf8_general_ci`

  > Collations bestimmen die Sortierreihenfolgen eines SQL-Servers, beispielsweise in ORDER BY-Abfragen. Wenn eine SQL-Abfrage Textfelder auf- oder absteigend sortieren soll, ist es wichtig zu wissen, wie beispielsweise deutsche Umlaute behandelt werden sollen. Dies wird durch die verwendete Collation festgelegt. [[Quelle](https://sirmark.de/computer/mysql/mysql-collation-latin1_german1_ci-oder-latin1_german2_ci-1086.html)]

  `_ci` ... case insensitive



Dumps

```bash
$ mysqldump db_name  --default-character-set=utf8mb4 -uuser_name -p'my_pass' >data.sql

# Import from Dump
$ cat data.sql | mysql --default-character-set=utf8mb4 --user=user_name --password='my_pass' db_name
```



```mysql
CREATE TABLE htl_job_user_company_matches (
  `user_id` INT NOT NULL UNIQUE, -- datatype must match table `users`
  `company_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`user_id`, `company_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`company_id`) REFERENCES `htl_job_company`(`id`) ON DELETE CASCADE
) CHARACTER SET 'utf8mb4';
```



```mysql
-- set character set and collation
ALTER DATABASE htl_job_2019 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;
```



```mysql
-- check encoding of table ()
SELECT CCSA.character_set_name FROM information_schema.`TABLES` T,
       information_schema.`COLLATION_CHARACTER_SET_APPLICABILITY` CCSA
WHERE CCSA.collation_name = T.table_collation
  AND T.table_schema = "htl_job_2019"
  AND T.table_name = "htl_job_companygroup";

-- or, per column
SHOW FULL COLUMNS FROM htl_job_companygroup;
```



[Guide to UTF-8 Encoding in PHP and MySQL](https://www.toptal.com/php/a-utf-8-primer-for-php-and-mysql)

[How to make MySQL handle UTF-8 properly](https://stackoverflow.com/questions/202205/how-to-make-mysql-handle-utf-8-properly)

[Dumping and importing from/to MySQL in an UTF-8 safe way](https://makandracards.com/makandra/595-dumping-and-importing-from-to-mysql-in-an-utf-8-safe-way)



## C#

> A string is basically a sequence of characters. Each character is a Unicode character in the range U+0000 to U+FFFF.

> Each code point is encoded using UTF-16 encoding



```csharp
using System;
using System.IO;
using System.Text;

namespace _210407_encoding
{
  class Program
  {
    static void Main(string[] args)
    {
      var encodings = Encoding.GetEncodings();
      foreach (var encoding in encodings)
      {
        System.Console.WriteLine(encoding.Name);
      }

      // Zusätzliche Encodings muss man installieren
      // $ dotnet add package System.Text.Encoding.CodePages
      Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);


      var reader = new StreamReader("latin.txt", Encoding.GetEncoding("latin1"));
      var text = reader.ReadLine();
      System.Console.WriteLine(text);

      reader = new StreamReader("ansi.txt", Encoding.GetEncoding("Windows-1252"));
      text = reader.ReadLine();
      System.Console.WriteLine(text);

      // in byte Array wandeln
      byte[] data = Encoding.UTF8.GetBytes(text);
      foreach (var d in data)
      {
        System.Console.Write($"{d:X2} ");
      }
      System.Console.WriteLine();
      var text2 = Encoding.UTF8.GetString(data);
      System.Console.WriteLine(text2);

      // Export in latin1
      data = Encoding.GetEncoding("latin1").GetBytes(text);
      foreach (var d in data)
      {
        System.Console.Write($"{d:X2} ");
      }
      System.Console.WriteLine();
      text2 = Encoding.GetEncoding("latin1").GetString(data);
      System.Console.WriteLine(text2);


    }
  }
}

```



### String Literale

[Unicode Character “π” (U+03C0)](https://www.compart.com/en/unicode/U+03C0)

[Unicode Character “𝜋” (U+1D70B)](https://www.compart.com/en/unicode/U+1D70B)

```csharp
string unicodeString = "Pi \u03a0 \u3a0 \U0001D70B";
string unicodeString2 = "Pi 𝜋 π";
// Achtung auf die Kodierung des Source-Files
```

- `\uxxxx` - Unicode escape sequence for character with hex value `xxxx`
- `\xn[n][n][n]` - Unicode escape sequence for character with hex value `nnnn` (variable length version of `\uxxxx`)
- `\Uxxxxxxxx` - Unicode escape sequence for character with hex value `xxxxxxxx` (for generating surrogates)

> Now, the Unicode coded character set contains more than 65536 characters. This means that a single `char`(`System.Char`) cannot cover every character. This leads to the use of *surrogates* where characters above U+FFFF are represented in strings as two characters. Essentially, `string` uses the UTF-16 character encoding form. Most developers may well not need to know much about this, but it's worth at least being aware of it.

### Encoding Class

[System.Text.Encoding Class](https://docs.microsoft.com/en-us/dotnet/api/system.text.encoding?view=netcore-3.1)

### StreamReader

[C# Help reading foreign characters using StreamReader](https://stackoverflow.com/questions/592824/c-sharp-help-reading-foreign-characters-using-streamreader)

```csharp
// csharp StreamReader ISO-8859-1 source (http default encoding)
StreamReader sr = new StreamReader(
	response.GetResponseStream(), // Http response
  System.Text.Encoding.GetEncoding("ISO-8859-1")
);
```

[StreamReader Constructors](https://docs.microsoft.com/en-us/dotnet/api/system.io.streamreader.-ctor?view=netcore-3.1)

Daten aus Windows Quellen:

```c#
System.Text.Encoding.GetEncoding(1252);
```

Default Encoding:

```c#
System.Text.Encoding.Default;
```

Lesen einer Datei

```csharp
var fs = new FileStream(path, FileMode.Open, FileAccess.Read);
var sr = new StreamReader(fs, Encoding.UTF8);
string line = String.Empty;
while ((line = sr.ReadLine()) != null)
{
	Console.WriteLine(line);
}
```

Automatisches Erkennen des Encodings [[Quelle](https://stackoverflow.com/questions/3746530/auto-encoding-detect-in-c-sharp)]

```csharp
using (var reader = new StreamReader("foo.txt"))
{
  // Make sure you read from the file or it won't be able
  // to guess the encoding
  var file = reader.ReadToEnd();
  Console.WriteLine(reader.CurrentEncoding);
}
```



### File Class

```csharp
using System;
using System.IO;
using System.Text;

var path = "test.txt";
var enumLines = File.ReadLines(path, Encoding.UTF8);
foreach (var line in enumLines)
{
    Console.WriteLine(line);
}
```



## Java

```java
System.out.println(System.getProperty("file.encoding"));
```



## HTML

Durch ein `meta` Tag am Beginn des Dokuments

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Title of the document</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```



## HTTP

Der Web Server ermittelt das Encoding des HTML Dokuments z.B. durch das `meta` Tag im HTML `<head>`.

Im HTTP Request/Response Header

```http
Content-Type: text/html; charset=utf-8
```

>  HTTP 1.1 says that the default charset is ISO-8859-1



## Look At

- [Different UTF-16 Encoding in Java versus C#](https://stackoverflow.com/questions/34167777/different-utf-16-encoding-in-java-versus-c-sharp)
- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)

