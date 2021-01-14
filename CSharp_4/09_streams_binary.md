# Streams mit Binärdaten

Lesen und Schreiben von Binärfiles.



# Binärfile 

`byte` = 8-bit unsigned integer.

```csharp
var fs = new FileStream("test1.bin", FileMode.Create);
for(int i = 0; i <= 255; i++)
{
  fs.WriteByte((byte)i); // einzelne bytes schreiben
}
```



```csharp
// Inhalt hexadezimal ausgeben
var fs = new FileStream("test1.bin", FileMode.Open);
int data;
while ((data = fs.ReadByte()) != -1)
{
  Console.Write(data.ToString("X02") + " ");
}
```



**Übung 1:** Schreibe und lese eine Binärdatei. Die gelesenen Daten sollen im hexadezimalen Format, maximal 16 Byte pro Zeile ausgegeben werden.



# Binärfile – Datentyp sensitiv

Mit Wrapperklasse `BinaryWriter` ("wrapped" `FileStream`)

```csharp
var bw = new BinaryWriter(new FileStream("test2.bin", FileMode.Create));
int i = 259;
float f = 12.625f;
string s = "4AHELS";

bw.Write(i);
bw.Write(f);
bw.Write(s);
```

 `BinaryReader`:

```csharp
var br = new BinaryReader(new FileStream("test2.bin", FileMode.Open));
int i = br.ReadInt32();
float f = br.ReadSingle();
string s = br.ReadString();

Console.WriteLine(i);
Console.WriteLine(f);
Console.WriteLine(s);
```



# Zeitmessungen

Für spätere Aufgabenstellung.

```csharp
using System.Diagnostics;
Stopwatch stopWatch = new Stopwatch();
stopWatch.Start();
// ... code to measure ...
stopWatch.Stop();
Console.WriteLine(stopWatch.ElapsedMilliseconds);
```



# File Copy

Byteweise

```csharp
var src = new FileStream("big.bin", FileMode.Open); // for read
var dest = new FileStream("copy.bin", FileMode.Create); // for write
int data;
```

Mit buffer (= Beschleunigung da mehr Bytes auf einmal transportiert werden)

```csharp
var src = new FileStream(...);
var dest = new FileStream(...);
int readBytes;
byte[] buffer = new byte[4 * 1024];
while ((readBytes = src.Read(buffer, 0, buffer.Length)) != 0)
{
  dest.Write(buffer, 0, readBytes);
}
// buffer.Length ... maximal zu lesende Bytes (kann am Dateiende weniger sein)
// readBytes ... Rückgabe von Read(), tatsächlich gelesene Bytes
```



**Übung 2:** Implementiere beide Kopiervarianten in einem Program (je als eine Klassen-Methode). Messe den Laufzeitunterschied. Experimentiere mit unterschiedlichen Puffer-Größen, ab welcher Puffer-Größe gibt es einen signifikanten Geschwindigkeitsvorteil, ab welcher Größe findet kaum mehr eine Beschleunigung statt?



# Kommandozeilenparameter

```csharp
static void Main(string[] args)
{
  System.Console.WriteLine(args.Length);
  if(args.Length==2)
  {
    System.Console.WriteLine(args[0]);
    System.Console.WriteLine(args[1]);
  }
}
```

Aufruf in der Kommandozeile

```bash
$ dotnet run big.bin big_copy.bin
```

**Übung 3**: Implementiere ein Kopierprogramm für eine Textdatei. Quell und Zielpfad können als Kommandozeilenparameter vorgegeben werden. In der Zieldatei sollen alle kopierten Zeilen am Anfang mit einer fortlaufenden Nummer (beginnend bei 1) versehen werden.



# Aufgaben

**Übung 4:** Mehrere Bilddateien (jpg, png, gif, ...) sollen zusammengefügt als eine einzige Binärdatei gespeichert  und daraus wieder extrahiert werden können.
Das Programm soll über die Kommandozeile bedient werden können. Z.B. würde die folgende Zeile die input Dateien `donald.gif`, `lotus.jpg` und  `Lenna.png` zusammenfügen und unter dem Namen `container.dat` speichern. Wird das Programm mit einer anderen Option (`--unstuff`) aufgerufen so werden die Bilddateien wieder extrahiert.

```bash
compacter --stuff container.dat donald.gif lotus.jpg Lenna.png

compacter --unstuff container.dat
```

Das Datenformat soll beliebig viele, unterschiedlich lange Binärdateien unterstützen. Die Gesamtdateigröße soll unter 2GB bleiben (damit sind 4 Byte Werte ausreichend). Die ersten 4 Byte des Compacter File Formats gibt die Anzahl der enthaltenen Bild–Files an. Darauf folgen die Bild-Files in der Reihenfolge wie durch die Kommandozeile vorgegeben. Am Beginn eines jeden Bild-Files steht zusätzlich noch ein 4 Byte Wert mit der Länge des Bild-Files sowie der File-Name (erstes Byte ist dabei die String Länge), darauf folgen die eigentlichen Bilddaten.



**Übung 5:** Ein großer Anteil der Datenkommunikation und Speicherung findet textbasiert statt. Dabei haben manche Zeichen spezielle Bedeutung (z.B. `\n`). Binärdaten unter diese Textdaten zu mischen funktioniert nur begrenzt weil diese Bytewerte enthalten die als Sonderzeichen interpretiert werden würden. Daher werden Binärdaten speziell in Textform kodiert bzw. später wieder dekodiert.
Ein Standardverfahren für die Kodierung ist eine gewisse Anzahl von Bits zu nehmen und jedem Bit-Muster einen Buchstaben zuzuorden. Wenn man 4 Bits zusammenfasst und die Buchstaben `0..9,A..F` zur Kodierung verwendet ergeben sich hexadezimale Ziffern, diese Kodierung nennt man Base16. Base16 ist aber ineffizient – um 4 binäre Bits zu kodieren werden 8 Bits für eine hexadezimale Ziffer benötigt. In der praktischen Anwendung ist [Base64](https://en.wikipedia.org/wiki/Base64): 6 Bits werden auf 64 unterschiedliche Zeichen kodiert.

Schreibe ein Programm das über die Kommandozeile aufgerufen werden kann und ein Binär-File in ein Base64 kodiertes Textfile umwandeln kann. Das gleiche Programm soll (über eine Kommandozeilen-Option steuerbar) auch die umgekehrte Richtung unterstützen.

