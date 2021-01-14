# Übersicht

- VS Code
- "Get started with .NET Core"
- Einstieg
- Klasse / Objekt
- (Vererbung / Polymorphismus)
- (Abstrakte Klasse / Interface)
- Properties, Object Initializers
- Strings
- Arrays
- Einfache Datenstrukturen (Array, List, Dictionary)
- Value vs. Reference type (S. 25) class vs. struct
- Delegates, Beispiel/Aufgabe mit Transform
- Events (siehe csharp.md)

- Command line interface, Deployment
- Deployment auf Raspberry Pi

- ref/out Parameter (S.50)
- optional Parameters, named arguments (S.53)
- Null-operators (?.) (S.60)
- [Tuples](https://docs.microsoft.com/en-us/dotnet/csharp/tuples)
- [Asynchronous programming](https://docs.microsoft.com/en-us/dotnet/csharp/async) (Task-based Asynchronous Pattern (TAP)), oder klassisches (?) APM (siehe Dokument von Gerhard)
    - für einen Vergleich siehe [Asynchronous programming patterns](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/)


# Sonstige Themen

- Installieren und Arbeiten in Linux (Kali Linux unter VirtualBox)
- .NET Core 3.0 Blazor (Web Client Apps)
- Avalonia UI


# Übersicht

- [.NET Core wikipedia](https://de.wikipedia.org/wiki/.NET_Core)
- .NET Framework und .NET core wachsen zusammen
- Xamarin (Entwickler von Mono): app Plattform für Android und iOS


# Kapitel 

- Einstieg/Klasse/Objekt
- Strings
- Arrays
- Delegates
- Streams



# Gerhards Projekte

- `2018_09_10_Gruppe1_HelloWorld`: Hello World mit Klasse instance- und class-method
- `2018_09_11_Klasse_HelloWorld`: Hello World mit einfacher Klasse
- `2018_09_11_Klasse_PrimeCheck`: Primzahlenermittlung, Eingabe auf der Konsole, static und nicht static Methode
- `2018_09_11_Klasse_PrintPrimes`: Alle Primzahlen in Bereich start bis end, `TryParse` (Mit out Parameter)

- `2018_09_17_Gruppe2_StringTest1`: string (Length, Insert), StringBuilder (Append, ToString)
- `2018_09_17_Gruppe2_StringTest2`: `==` vs. Equals (bei string und StringBuilder)
- `2018_09_17_Gruppe2_StringTest3`: `Split` Tokenizer
- `2018_09_17_Gruppe2_URLTokenizer`: Split Anwendung auf eine URL
- `2018_09_24_Gruppe1_CaesarCipher`: Klasse mit Statischen Methoden, Caesar chiffre mit StringBuilder
- `2018_09_24_Gruppe1_PalindromeCheck`: Reverse/Equals mit StringBuilder
- `2018_09_24_Gruppe1_URLTokenizer`: Split Anwendung auf eine URL
- `2018_10_01_Gruppe2_CaesarCipher`: Caesar chiffre mit StringBuilder
- `2018_10_01_Gruppe2_PalindromeCheck`: Equals / Reverse

- `2018_09_18_Klasse_ArrayTest1`: Array anlegen, for/foreach, Laufzeitfehler -> Index außerhalb des Arrays
- `2018_09_18_Klasse_ArrayTest2`: Array aus Objekte (`Pupil`), `ToString`
- `2018_09_18_Klasse_ArrayTest3`: 2D Arrays, Anonymes Array
- `2018_09_18_Klasse_ArrayTest4`: 2D Arrays, nicht rechteckig
- `2018_09_25_Klasse_PropertyTest`: `Pupil` mit Properties (noch keine Arrays)
- `2018_09_25_Klasse_IndexerTest`: `SchoolClass` aus `Pupil`, `[]` Verhalten bestimmen.
- `2018_09_25_Klasse_ArrayTest5`: 2D Array Ein- und Ausgabe
- `2018_10_01_Gruppe1_ArrayTest5`: 2D Array Ein- Ausgabe, Zeilen- und Spaltenweise
- `2018_10_01_Gruppe2_ArrayTest6`: 2D Array Ein- Ausgabe, Zeilen- und Spaltenweise
- `2018_10_02_Klasse_MAU1A`: Lösung für Test
- `2018_10_02_Klasse_MAU1B`: Lösung für Test
- `2018_10_08_Gruppe1_ArrayTest6`:  2D Array Ein- Ausgabe, Zeilen- und Spaltenweise
- `2018_10_08_Gruppe1_ArrayTest7`: 2D Array Haupt und Nebendiagonalen ausgeben
- `2018_10_08_Gruppe1_ArrayTest8`: Zeile mit maximaler Summe
- `2018_10_08_Gruppe1_ArrayTest9`: Zeilen die nur aus gleichen Zahlen bestehen finden
- `2018_10_09_Klasse_InterfaceTest1`: `IMoveable`, `Car`, `Water`
- `2018_10_09_Klasse_InterfaceTest2`: Umfangreich - sortieren eines Arrays aus Büchern.
- `2018_10_15_Gruppe2_ArrayTest7`: 2D Array Haupt und Nebendiagonalen ausgeben
- `2018_10_15_Gruppe2_ArrayTest8`: Zeilen die nur aus gleichen Zahlen bestehen finden
- `2018_10_15_Gruppe2_ArrayTest9`: 2D Array aus Strings, Zeilen finden in denen die Namen nur auf "er" enden
- `2018_10_15_Gruppe2_InterfaceTest3`: Bücherliste sortieren mit Interface IComparer und IComparable
- `2018_10_16_Klasse_MAU2A`/`2018_10_16_Klasse_MAU2B`: Lösung für Test, String Aufgaben
- `2018_10_16_Klasse_InterfaceTest3`: Bücher sortieren mit `System.Collections.Generic.IComparable<T>`
- `2018_10_16_Klasse_InterfaceTest4`: Array aus Fußballspielern, `foreach` für eigene Arrays, `IEnumerable`, `IEnumerator`
- `2018_10_29_Gruppe1_ArrayTest10`:  2D Array aus Strings, Zeilen finden in denen die Namen nur auf "er" enden
- `2018_10_29_Gruppe1_InterfaceTest5`: Array aus Speisen nach Kalorien sortieren, `IComparer<Meal>` `IComparable<Meal>`
- `2018_11_12_Gruppe2_InterfaceTest6`: Array aus Schüler sortieren, `IComparer<Pupil>` `IComparable<Pupil>` `Array.Sort`
- `2018_11_12_Gruppe2_InterfaceTest7`: Bücherliste, `foreach` für eigene Arrays, `IEnumerable`, `IEnumerator`

- `2018_11_06_Klasse_DelegateTest1`: `Calculation`
- `2018_11_19_Gruppe1_DelegateTest2`: Bücherliste sortieren mit Hilfe von Delegates, Lambda Expressions
- `2018_11_19_Gruppe1_DelegateTest3`: Array aus Fußballspielern, filtern mit Hilfe von Delegates
- `2018_11_19_Gruppe1_DelegateTest4`: `List<Player>` `FindAll` Methode verwenden
- `2018_11_20_Klasse_EventTest1`: 2 Files, `Counter` mit min und max
- `2018_11_26_Gruppe2_CasarCipherGUI`: 
- `2018_11_26_Gruppe2_EventTest2`: Würfel mit Events bei einem Sechser oder ungültigen Wurf
- `2018_11_27_Klasse_VierGewinnt`: Spiellogik in `FourWinsGameField` mit Events an das UI
- `2018_12_03_Gruppe1_FourWinsGUI`
- `2018_12_10_Gruppe2_DelegateTest3`: Array aus Fußballspielern, filtern mit Hilfe von Delegates
- `2018_12_10_Gruppe2_FourWinsGUI`: 


- `2018_12_11_Klasse_StreamTest1`: Schreiben in ein Text File, Exceptions try/catch/finally
- `2018_12_11_Klasse_StreamTest2`: Lesen aus einem Text File
- `2018_12_11_Klasse_StreamTest3`: Zeilenweise in Text File schreiben
- `2018_12_11_Klasse_StreamTest4`: Zeilenweise aus Text File lesen
- `2018_12_11_Klasse_StreamTest5`: Binär in File schreiben
- `2018_12_11_Klasse_StreamTest6`: Binär aus File lesen (hex)
- `2018_12_11_Klasse_StreamTest7`: Binär schreiben unter berücksichtigung von Datentypen, `BinaryWriter`
- `2018_12_11_Klasse_StreamTest8`: Datentyp sensitiv binär lesen, `BinaryReader`
- `2018_12_17_Gruppe1_FileCopy1`: file copy byte weise, mit `Stopwatch`
- `2018_12_17_Gruppe1_FileCopy2`: file copy Block weise, mit `Stopwatch`
- `2018_12_17_Gruppe1_LineNumberCopy`: Textdateien kopieren, im Ziel Zeilennummern einfügen
- `2018_12_17_Gruppe1_VowelCounter`: Zählt die Anzahl der Selbstlaute
- `2018_12_18_Klasse_MAU5A`/`2018_12_18_Klasse_MAU5B`: Lösung für Test
- `2019_01_07_Gruppe2_FileCopy1`: file copy byte weise, mit `Stopwatch`
- `2019_01_07_Gruppe2_FileCopy2`: file copy Block weise, mit `Stopwatch`
- `2019_01_07_Gruppe2_LineNumberCopy`:  Textdateien kopieren, im Ziel Zeilennummern einfügen
- `2019_01_07_Gruppe2_NumberCols`: Zahlenkolonnen addieren
- `2019_01_07_Gruppe2_VowelCounter`: Zählt die Anzahl der Selbstlaute
- `2019_01_14_Gruppe1_HexDump`: hex dump
- `2019_01_14_Gruppe1_NumberCols`: Zahlenkolonnen addieren
- `2019_01_15_Klasse_MAU5A2`/`2019_01_15_Klasse_MAU5B2`: Lösung für Test
- `2019_01_21_Gruppe2_HexDump`: hex dump

- `2019_01_21_Gruppe2_ListTest1`: `List<string>` Grundlagen
- `2019_01_22_Klasse_ListTest1`: `List<string>`, auführlich mit Lambda Expressions
- `2019_01_25_Klasse_DictionaryTest1`: `Dictionary<int, string>`
- `2019_01_28_Gruppe1_ListTest2`: `List` - Song Playlist, IEnumerator, FindLastIndex, ForEach Methode
- `2019_01_31_Gruppe1_DictionaryTest2`: Dictionary aus Personen, mit Key (SVNR)
- `2019_02_04_Gruppe1_DictionaryTest3`: `List`! aus Autos
- `2019_02_04_Gruppe2_DictionaryTest2`: `Dictionary` aus Büchern, mit Key (ISBN)
- `2019_02_04_Gruppe2_ListTest2`: `List` aus Büchern
- `2019_02_11_Gruppe1_DictionaryTest4`: `Dictionary`, Matrikelnummer -> Schüler

- `2019_02_12_Klasse_ThreadTest1`: Starten eines Threads
- `2019_02_12_Klasse_ThreadTest2`: Starten eines Threads mit Parameter-Übergabe
- `2019_02_25_Gruppe2_DictionaryTest3`: Dictionary aus Personen, mit Key (SVNR)
- `2019_02_25_Gruppe2_ListTest3`: `List` aus Autos

- `2019_02_26_Klasse_StreamTest9`: Zählen einer Bytefolge `0x34 0x41`
- `2019_02_26_Klasse_ThreadTest3`: Starten eines Threads mit eigenem Objekt (`CounterParameter`) als Parameter-Übergabe
- `2019_02_26_Klasse_ThreadTest4`: Stoppen eines Threads
- `2019_03_04_Gruppe1_IncrementerDecrementer`: Synchronisation mit `Monitor`
- `2019_03_04_Gruppe1_ProducerConsumerProblem`: Mit `Queue` und `lock`
- `2019_03_04_Gruppe1_ThreadTest5`: Ein globaler Zähler, Zugriff von mehreren Threads aus.


- `2019_03_05_Klasse_ManualResetEventTest`: Signaling mit `ManualResetEvent`
- `2019_03_05_Klasse_MutexTest`: Synchronisation über `Mutex`
- `2019_03_11_Gruppe2_IncrementerDecrementer`: s.o.
- `2019_03_11_Gruppe2_ProducerConsumerProblem`: s.o.
- `2019_03_11_Gruppe2_ThreadTest5`: Ein globaler Zähler, Zugriff von mehreren Threads aus.
- `2019_03_19_Klasse_APMPolling`: APM (Asynchronous Programming Model), Pollend
- `2019_03_19_Klasse_APMWaitUntilDone`: Blockierend auf Ende warten
- `2019_03_25_Gruppe1_DayTimeClient`: Liest die Zeit von einem Server (? Implementierung des Servers)
- `2019_03_25_Gruppe1_DayTimeClientGUI`: Lesen der Zeit in einem Thread, Man kann nicht vom Thread auf das UI Zugreifen, Threadsichere Methode mit `Invoke`
- `2019_03_25_Gruppe1_DayTimeClientWF`: Unterschied zum vorherigen ist mir nicht ganz klar
- `2019_03_26_Klasse_APMCallback`: BeginRead mit `AsyncCallback` delegate
- `2019_03_26_Klasse_EBAPTest`: Event Based Asynchronous Pattern, Thread mit Fortschrittsanzeige
- `2019_03_28_Klasse_EBAPGUI`: BackgroundWorker in VisualStudio hinzufügen: From the Components tab of the Toolbox, add a BackgroundWorker component named backgroundWorker1. (https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.backgroundworker?view=netframework-4.8)
- `2019_03_28_Klasse_EBAPUebung`: Irgendwas mit Fortschrittsanzeige
- `2019_03_28_Klasse_GUIThreadTest`: Fortschrittsbalken
- `2019_04_01_Gruppe2_DayTimeClient`: Liest die Zeit von einem Server
- `2019_04_01_Gruppe2_DayTimeClientGUI`: Lesen der Zeit in einem Thread, Man kann nicht vom Thread auf das UI Zugreifen, Threadsichere Methode mit `Invoke`
- `2019_04_01_Gruppe2_DayTimeServer`: Date and Time Server
- `2019_04_01_Gruppe2_DownloadClient`: Dateinamen eingeben -> Download von Server
- `2019_04_01_Gruppe2_DownloadServer`: Download Server
- `2019_04_08_Gruppe1_DayTimeClientAPM`: APM (Asynchronous Programming Model), WindowsForm mit Invokde
- `2019_04_08_Gruppe1_DayTimeClientEBAP`: Mit BackgroundWorker
- `2019_04_08_Gruppe1_DayTimeServer`: Date and Time Server
- `2019_04_08_Gruppe1_DownloadClient`: Dateinamen eingeben -> Download von Server
- `2019_04_08_Gruppe1_DownloadClientGUI`: 
- `2019_04_08_Gruppe1_DownloadServer`: Download Server
- `2019_04_30_Klasse_HTTPTest1`: TCP + GET aufs Notenmanagement
- `2019_04_30_Klasse_HTTPTest2`: Das gleiche mit `HttpWebRequest`
- `2019_04_30_Klasse_HTTPTest2b`: Mit `AsyncCallback` 
- `2019_04_30_Klasse_HTTPTest3`: ?, Schlüsselwort `using` (?Klasse WebClient)
- `2019_05_06_Gruppe1_NotenmanagementClient`: Zugriff auf Notenmanagement API
- `2019_05_20_Gruppe2_NotenmanagementClient`: Zugriff auf Notenmanagement API
- `2019_06_03_Gruppe2_GoogleGeocodingAPI`: Geo-Coding

