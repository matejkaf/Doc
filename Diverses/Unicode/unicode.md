# Allgemein

Unicode = *Universal Coded Character Set*

> **Unicode** is a computing industry standard for the consistent encoding, representation, and handling of [text](https://en.wikipedia.org/wiki/Character_(computing)) expressed in most of the world's writing systems. [[wikipedia](https://en.wikipedia.org/wiki/Unicode)]



> *The Unicode Standard* consists of a set of code charts for visual reference, an encoding method and set of standard [character encodings](https://en.wikipedia.org/wiki/Character_encoding), a set of reference [data files](https://en.wikipedia.org/wiki/Data_file), and a number of related items, such as character properties, rules for [normalization](https://en.wikipedia.org/wiki/Unicode_normalization), decomposition, [collation](https://en.wikipedia.org/wiki/Unicode_collation_algorithm), rendering, and [bidirectional](https://en.wikipedia.org/wiki/Bi-directional_text) display order (for the correct display of text containing both right-to-left scripts, such as [Arabic](https://en.wikipedia.org/wiki/Arabic_script) and [Hebrew](https://en.wikipedia.org/wiki/Hebrew_alphabet), and left-to-right scripts). [[wikipedia](https://en.wikipedia.org/wiki/Unicode)]

collation = Reihenfolge (z.B. Alphabetisch)

Unicode ist ein **coded character set** = Zuordnung von Nummern (genannt **code points**) auf Zeichen. 

> ISO Latin-1 (ISO 8859-1) coded character set provides the Western European alphabet and symbols and their numeric representations. 

Ein code point wird durch 4 Hex Ziffer angegeben: U+00F7 (Divisionszeichen, ÷). Darüber hinausgehende Code Points verwenden 5 oder 6 hex Ziffern, z.B. U+1F40C (🐌). Maximal verwendet Unicode 21 Bits.

- Die codepoints 0-127 sind identisch zum ASCII Code.
- 128 bis codepoint 255 ist ident mit [ISO-8859-1](https://en.wikipedia.org/wiki/ISO-8859-1) (Latin-1) für maximale Kompatibilität mit bestehendem westlichen Text.  \"Ä\" istz.B. U+00C4.

Die aktuell Version 11.0 des Standards kennt ca. 140000 Zeichen, Symbole und Emojis in 146 Schriftsystemen.



# Liste von Unicode Zeichen

- [Wikipedia: List of Unicode characters](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Basic_Latin)
- [Unicode Character “🦹” (U+1F9B9) - Supervillain](https://www.compart.com/en/unicode/U+1F9B9)



# Character Encoding

Encoding: die Art und Weise wie die Nummern der Zeichen (codepoints) konkret abgespeichert werden (als Bits und Bytes)

-  [UTF-8](https://en.wikipedia.org/wiki/UTF-8), [UTF-16](https://en.wikipedia.org/wiki/UTF-16), and [UTF-32](https://en.wikipedia.org/wiki/UTF-32)

UTF-8: verwendet nur ein Byte für die ersten 128 code points, diese entsprechen dem ASCII Standard. D.h. jeder ASCII Text ist auch im UTF-8 Format. Zeichen in UTF-8 variieren in der Länge, 1 bis 4 Bytes. UTF-8 ist die häufigste Kodierung.

UTF-16 is a 16-bit form that contains all of the most common characters in all modern writing systems. Most of the characters are uniformly represented with 2 bytes, although there is extended space, called *surrogate space*, for additional characters that require 4 bytes. UTF-16 wird von Java und C# verwendet.

In UTF-32 benötigt jedes Zeichen immer 4 Byte.



## UTF-8

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
- Bytes die auf das erste folgen beginnen mit einer anderen Bit-Sequenz (10), daher kann in einem Datenstrom von jeder Stelle aus der Beginn des nächsten Zeichens gefunden werden (self-synchronisation).

## UTF-16

- U+0000-U+D7FF und U+E000-U+FFFF, diese codepoints werden 1:1 als 16 Bit Wert abgebildet
- Ist der erste 16 Bit Wert im Bereich 0xD800-0xDFFF so wird durch einen nachfolgenden 16 Bit Wert erweitert. Die Erweiterung ist nur notwendig für Emoji, seltene Symbole, selten verwendete chinesische Schriftzeichen.

Java und c#/.Net verwenden intern UTF-16 zur String Darstellung.

Siehe [wikipedia](https://en.wikipedia.org/wiki/UTF-16)

## UTF-32

In dieser Kodierung wird jedes Zeichen durch 4 Bytes dargestellt. Dies ist die einfachste Kodierung benötigt aber am meisten Speicher. Wird eher selten verwendet.



## Byte Order

BOM = Byte Order Mark

Steht am Anfang der Zeichenfolge und dient bei UTF-16 und UTF-32 um die Byte Reihenfolge zu kennzeichnen.

Beispiel: 0x01FF (= 511 dez), wird entweder in der Reihenfolge FF 01 (little endian) oder 01 FF (big endian) angegeben. Bei little endian kommt das niederwertigste Byte zuerst.

In UTF-16 besteht das BOM in [Big-Endian](https://de.wikipedia.org/wiki/Byte-Reihenfolge)-Notation aus der Zweibyte-Sequenz `FE FF`, in der [Little-Endian](https://de.wikipedia.org/wiki/Byte-Reihenfolge)-Notation umgekehrt aus `FF FE`. Da das Zeichen U+FFFE als ungültig definiert ist, kann durch die Reihenfolge der zwei Bytes eindeutig die Reihenfolge der Bytes festgestellt werden. Bei UTF-32 stehen davor oder dahinter noch zwei Nullbytes, die zur Erkennung der Byte-Reihenfolge dienen.

Die [UTF-8](https://de.wikipedia.org/wiki/UTF-8)-Kodierung des BOM besteht aus der Bytesequenz `EF BB BF`. Bei UTF-8 gibt es  keinen Unterschied in der Byte Reihenfolge ein BOM wird trotzdem oft verwendet um Editoren die automatische Erkennung der Kodierung zu Erleichtern.

[Quelle: wikipedia](https://de.wikipedia.org/wiki/Byte_Order_Mark)

# Legacy

Code Page = Name für Nummer auf Zeichen Zuordnung

Hintergrund: IBM hat begonnen alle verwendeten Zeichensätze durchzunummerieren (Microsoft, Oracle, SAP, u.a. haben dieses Nummernschema übernommen). Besonders bekannt ist Code Page 1252

Microsoft verwendet CP-1252 (auch Windows-1252 oder ANSI encoding genannt) für englische und die meisten westlichen Sprachvarianten von Windows. CP-1252 ist wahrscheinlich der am meisten verbreitete 8-Bit Zeichensatz.

Um dem von den Firmen verursachten Zeichensatz-Wildwuchs einzudämmen gab es die Arbeit an der Norm ISO 8859 und später Unicode.

[ISO 8859](https://en.wikipedia.org/wiki/ISO_8859) is an 8-bit extension of ASCII that supports all of the ASCII code points and adds 12 more, providing 256 character combinations. LATIN1, which is officially named ISO-8859-1, is the most frequently used member of the ISO 8859 family of encodings. In addition to the ASCII characters, LATIN1 contains accented characters, other letters needed for languages of Western Europe, and some special characters. HTTP and HTML protocols are based on Unicode.

Siehe Vergleich [8859-1 / 8859-15 / 1252 / Unicode](http://de.wikipedia.org/wiki/ISO_8859-1#ISO_8859-1_vs._ISO_8859-15_vs._Windows-1252_vs._Unicode).

[CP-1252](https://de.wikipedia.org/wiki/Windows-1252) und ISO 8859-1 sind im wesentlichen identisch. Ein in ISO 8859-1 frei gehaltener Bereich wird durch CP-1252 jedoch für druckbare Zeichen verwendet (Euro Symbol, einige französische Zeichen). Die in ISO 8859-1 fehlenden Zeichen wurden in ISO 8859-15 ergänzt.

ISO 8859-1 wird häufig auch als Latin-1 bezeichnet.

The ISO 8859 family has other members that are designed for other languages.

**Other Encodings Approved by ISO**

| ISO Standard | Name of Encoding | Description                               |
| :----------- | :--------------- | :---------------------------------------- |
| ISO 8859-1   | LATIN 1          | US and Western European                   |
| ISO 8859-2   | LATIN 2          | Central and Eastern European              |
| ISO 8859-3   | LATIN 3          | Southern European, Maltese, and Esperanto |
| ISO 8859-4   | BALTIC           | Northern European                         |
| ISO 8859-5   | CYRILLIC         | Slavic languages                          |
| ISO 8859-6   | ARABIC           | Arabic                                    |
| ISO 8859-7   | GREEK            | Modern Greek                              |
| ISO 8859-8   | HEBREW           | Hebrew and Yiddish                        |
| ISO 8859-9   | TURKISH          | Turkish                                   |
| ISO 8859-10  | LATIN 6          | Nordic (Inuit, Sámi, Icelandic)           |
| ISO 8859-11  | LATIN/THAI       | Thai                                      |
| ISO 8859-13  | LATIN 7          | Baltic Rim                                |
| ISO 8859-14  | LATIN 8          | Celtic                                    |
| ISO 8859-15  | LATIN 9          | Western European                          |
| ISO-8859-16  | LATIN 10         | Central and Eastern European              |

# MySQL



# C#

```csharp
// csharp StreamReader ISO-8859-1 to UTF-8
// https://stackoverflow.com/questions/592824/c-sharp-help-reading-foreign-characters-using-streamreader
StreamReader sr = new StreamReader(response.GetResponseStream(), System.Text.Encoding.GetEncoding("ISO-8859-1"));

```

# Java



```java
System.out.println(System.getProperty("file.encoding"));
```



# Look At

- [Different UTF-16 Encoding in Java versus C#](https://stackoverflow.com/questions/34167777/different-utf-16-encoding-in-java-versus-c-sharp)