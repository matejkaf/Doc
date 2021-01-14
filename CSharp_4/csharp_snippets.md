

# Data types

```csharp
int y=42;
System.Console.WriteLine(y.GetType());
```

# Console Output

```csharp
Console.Write("xyz");
Console.WriteLine("xyz");
Console.Write("\t{0}", i);
Console.WriteLine($"Hello {name}"); // C# 6 string interpolation syntax

```

# Console Input

```csharp
string input = Console.ReadLine();
int value = int.Parse(input);
if (!int.TryParse(input, out value))
{
    Console.WriteLine("Ungültige Eingabe");
    Console.ReadKey();
    return;
}
System.Console.ReadKey();
```

# Strings 

```csharp
// verbatim string
string filePath = @"C:\Users\scoleridge\Documents\";

// Methods
if(names[r][c].ToLower().EndsWith("er"))

```

# Convert

```csharp
Convert.ToChar(97+i);
Convert.ToInt32("1234");
double x=3.14;
Convert.ToInt32(x); // rundet!
```



# Array

```csharp
Array.Resize(ref arr, newsize);
```

# foreach range

```csharp
foreach (var i in Enumerable.Range(10, 10) ) // start, anzahl
{
    System.Console.WriteLine(i);    
    System.Console.WriteLine(i.GetType());  // int           
}
```

# Delegate

```csharp
// Control.Invoke

public Form1()
{
    InitializeComponent();
    //Do some work on a new thread
    Thread backgroundThread = new Thread(BackgroundWork);
    backgroundThread.Start();
}        

private void BackgroundWork()
{
    int counter = 0;
    while (counter < 5)
    {
        counter++;
        Thread.Sleep(50);
    }

    DoWorkOnUI();
}

private void DoWorkOnUI()
{
    // https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.methodinvoker?view=netframework-4.8
    MethodInvoker methodInvokerDelegate = delegate() 
                { label1.Text = "Updated From UI"; };

    //This will be true if Current thread is not UI thread.
    if (this.InvokeRequired)
        this.Invoke(methodInvokerDelegate);
    else
        methodInvokerDelegate();
}
```



# Release

```bash
dotnet run --configuration Release
```


# Assertions

-   [Debug.Assert](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.debug.assert?view=netframework-4.8)
-   [Trace.Assert](https://docs.microsoft.com/en-us/dotnet/api/system.diagnostics.trace.assert?view=netframework-4.8)

```csharp
Debug.Assert(index > -1); 
Debug.Assert(index > -1, "Index failure");
// not present in Release builds (use Trace instead if needed)
```


# Tuples

```csharp
var filenames = new[] {
    (input:"level4-0.in",output:"level4-0.out"),
    (input:"level4-1.in",output:"level4-1.out"),
    (input:"level4-2.in",output:"level4-2.out"),
};

foreach (var filename in filenames)
{
    System.Console.WriteLine(filename.input);
    System.Console.WriteLine(filename.output);
}
```


# List

Liste Leer:

```csharp
list.Any()
```



Enthaltensein eines Objekts in einer Liste:

```csharp
bool b = pathPostions.Contains(p);
// Equals Methode muss implementiert sein

// zusätzlich der Index wo sich das Objekt befindet
var idx = positions.IndexOf(pth.CurrentPosition);
```

```csharp
public override bool Equals(System.Object obj)
{
    if (obj == null)
    {
        return false;
    }

    var p = obj as Position;
    if ((System.Object)p == null)
    {
        return false;
    }

    // Return true if the fields match:
    return (Row == p.Row && Col == p.Col);// && (y == p.y);
}
```

Sortieren einer Liste:

```csharp
flights.Sort( (f1,f2) => {
  if (f1.start==f2.start)
  {
    return f1.destination.CompareTo(f2.destination);
  }
  else
  {
    return f1.start.CompareTo(f2.start);
  }
});
System.Console.WriteLine(string.Join("\n",flights));
```

Suchen eines Elements:

[List<T>.Find(Predicate<T>) Method](https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.find?view=netframework-4.8)

```csharp
var vertex = vertices.Find( v => v.Name==name);
// null wenn nicht gefunden
```


# DateTime

```csharp
DateTime date;
var dateTimeString = "22.04.2020 08:30";
date = DateTime.ParseExact(
    dateTimeString, 
    "dd.MM.yyyy HH:mm", 
    System.Globalization.CultureInfo.InvariantCulture);
System.Console.WriteLine(date);
System.Console.WriteLine(date.ToString("dd.MM.yyyy HH:mm",System.Globalization.CultureInfo.InvariantCulture));
```


# JSON

erfordert .NET core 3

[JSON HOWTO](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-how-to)

Informationen zu JSON:
- [Video 1](https://youtu.be/iiADhChRriM)
- [Video 2](https://youtu.be/KdweixONFyA)

```csharp
class CoronaData
{
    // nur public properties werden berücksichtigt
    public int PositivTested {get; set;}
    public int Diseased {get; set;}
    public DateTime TimeStamp {get; set;}
}
```

```csharp
var options = new JsonSerializerOptions
{
    WriteIndented = true,
};

var data = new CoronaData() {TimeStamp=CoronaData.makeDate("22.04.2020 12:00"), PositivTested=120, Diseased=30};

string jsonString = JsonSerializer.Serialize(data, options);

jsonString = JsonSerializer.Serialize(data); // compact

// Liste serialisieren (JSON Array)
var list = new List<CoronaData>();
list.Add(data);
var data2 = new CoronaData() {TimeStamp=CoronaData.makeDate("22.04.2020 11:00"), PositivTested=118, Diseased=31};
list.Add(data2);
jsonString = JsonSerializer.Serialize(list, options);

// Deserialisieren

//single value
jsonString = JsonSerializer.Serialize(data);
var data3 = JsonSerializer.Deserialize<CoronaData>(jsonString);

//complete list
jsonString = JsonSerializer.Serialize(list);
var list2 = JsonSerializer.Deserialize<List<CoronaData>>(jsonString);

// jsonString = File.ReadAllText(fileName);
// File.WriteAllText(fileName, jsonString);

```
