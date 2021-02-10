---
title: Design Pattern für Asynchrones IO in .NET
cmds: ['md_html.bash', 'md_html.bash --small']
tags: [lecture,dotnet, csharp, thread, apm, eap, tap]
---

Historische Entwicklung (siehe [microsoft: Asynchronous programming patterns](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/)):

- APM – Asynchronous Programming Model (Legacy)
- EAP – Event-Based Asynchronous Pattern (seit .NET 2.0)
- **TAP – Task-based Asynchronous Pattern** (seit .NET 4)



# APM – Asynchronous Programming Model

Unterstützt durch 2 Methoden: `BeginXXX` and `EndXXX`.

```csharp
byte[] buffer = new byte[100];
string filename = "mfc71.pdb";
FileStream strm = new FileStream(filename, FileMode.Open, FileAccess.Read, FileShare.Read, 1024, FileOptions.Asynchronous);
// Make the asynchronous call
IAsyncResult result = strm.BeginRead(buffer, 0, buffer.Length, null, null);
// ... Do some work here while you wait ...
// Calling EndRead will block until the Async work is complete 
int numBytes = strm.EndRead(result);
// Don't forget to close the stream strm.Close();
Console.WriteLine("Read {0} Bytes", numBytes); Console.WriteLine(BitConverter.ToString(buffer));
```

Im Vergleich der synchrone (blockierende) Read Aufruf

```csharp
int Read(byte[] array, int offset, int count);
```

`BeginRead` asynchron und nicht blockierend:

```csharp
IAsyncResult BeginRead( byte[] array, int offset, int numBytes, AsyncCallback userCallback, object stateObject);
// userCallback: Methode die aufgerufen wird wenn IO Operation fertig ist
// stateObject: 
```

`int EndRead(IAsyncResult asyncResult)` ist ein blockierender Aufruf, d.h. wartet auf das Ende der IO Operation und liefert die Ergebnisse.

## Rendezvous Models

Wie wartet man auf das Ende der Operation?

- wait-until-done, 
- polling (spinning), und 
- callback

### wait

Blockierendes Warten durch Aufruf von `EndRead`. 

```csharp
IAsyncResult result = strm.BeginRead(buffer, 0, buffer.Length, null, null);
int numBytes = strm.EndRead(result); // blocking call
```

### polling (spinning)

```csharp
IAsyncResult result = strm.BeginRead(buffer, 0, buffer.Length, null, null);
while (!result.IsCompleted)
{
  // ... some work here ...
	Thread.Sleep(100); 
}
int numBytes = strm.EndRead(result); // will return without blocking
```

### callback

```csharp
IAsyncResult result = strm.BeginRead( buffer, 0, buffer.Length, 
                                     new AsyncCallback(CompleteRead), // userCallback
                                     strm);														// stateObject
// ...
static void CompleteRead(IAsyncResult result) 
{
  FileStream strm = (FileStream)result.AsyncState;
  int numBytes = strm.EndRead(result); // will return without blocking
  strm.Close();
  Console.WriteLine(BitConverter.ToString(buffer)); 
}
```



# EAP – Event-Based Asynchronous Pattern

Verwendet delegates/events anstelle von callbacks. Passt besonders für GUI Programme da diese viele Events verwenden.

Beispiel asynchrones Laden eines Bilds ein eine `PictureBox` (`System.Windows.Forms`):

```csharp
public Form1()
{
  InitializeComponent();
  this.pictureBox1.LoadCompleted += new
  System.ComponentModel.AsyncCompletedEventHandler(this.pictureBox1_LoadCompleted); 
}

private void loadButton_Click(object sender, EventArgs e) 
{
  pictureBox1.LoadAsync("http://www.tailspintoys.com/image.jpg"); 
}

private void cancelLoadButton_Click(object sender, EventArgs e) 
{
  pictureBox1.CancelAsync(); 
}

private void pictureBox1_LoadCompleted(object sender, AsyncCompletedEventArgs e) 
{
  if (e.Error != null) {
  	MessageBox.Show(e.Error.Message, "Load Error"); }
  else if (e.Cancelled) {
  	MessageBox.Show("Load canceled", "Canceled"); }
  else {
  	MessageBox.Show("Load completed", "Completed"); }
}

```



# TAP – Task-based Asynchronous Pattern

State of the art.

[Recommended Asynchronous Pattern in .NET](https://www.dotnetcurry.com/csharp/1517/async-pattern-dotnet)

Seit .NET 4: neue Methoden, enden auf `...TaskAsync` und liefern `Task<T>` als Rückgabewert.

Mit C# keywords `async` und `await` kann asynchroner Programmcode fast so einfach wie synchroner Code geschrieben werden.



Beispiel anhand [`FileStream.CopyToAsync`](https://docs.microsoft.com/en-us/dotnet/api/system.io.filestream.copytoasync?view=netcore-3.1)

```csharp
static void Main(string[] args)
{
  copyFiles("big.pptx","big_copy.pptx");
  // nach dem ersten await in copyFiles geht es hier weiter
  Console.WriteLine("After Method Call");
  Thread.Sleep(2000);
}

// async keyword bei der Methode
async static void copyFiles(string srcFile, string destFile)
{
  using (
    FileStream srcStream = new FileStream(srcFile, FileMode.Open),
    destStream = new FileStream(destFile, FileMode.Create))
  {
    System.Console.WriteLine("Copying ...");
    await srcStream.CopyToAsync(destStream);
    // ist die ...Async Methode fertig, geht es hier weiter.
    System.Console.WriteLine("... Copy has Finished");
  }
}
```



Grundgerüst für eigene `...TaskAsync` Methoden (siehe [Implementing the Task-based Asynchronous Pattern](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/implementing-the-task-based-asynchronous-pattern)):

```csharp
public Task<int> DoTaskAsync()
{
  return Task.Run(() =>
                  {
                    int result=0;
                    // do some lengthy calculations
                    return result;
                  });
}
```

Verwendung (`await` mit Rückgabewert):

```csharp
int r = await DoTaskAsync();
```

*Übung: Zahlen Summieren Zahlen von Start bis Ende als Asynchroner Task*

## Parallelisierung mit `await`

```csharp
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace _43_await_2
{
    class Program
    {
        static int Sum(int start, int end)
        {
            int sum = 0;
            for (int i = start; i <= end; i++)
            {
                sum += i;
            }
            return sum;
        }

        static Task<int> SumTaskAsync(int start, int end)
        {
            return Task.Run( ()=> Sum(start,end));
        }

        public static async void DoInBackground(int start, int end)
        {
            int tid = Thread.CurrentThread.ManagedThreadId;
            System.Console.WriteLine($"BG({tid}) AAA");
            int result = await SumTaskAsync(start,end);
            tid = Thread.CurrentThread.ManagedThreadId;
            System.Console.WriteLine($"BG({tid}) BBB");
            System.Console.WriteLine($"BG({tid}) Processor:{Thread.GetCurrentProcessorId()}");
            System.Console.WriteLine($"BG({tid}) result={result}");
        }

        // Idee von [](https://stackoverflow.com/questions/17197699/awaiting-multiple-tasks-with-different-results)
        public static async void DoInParallel()
        {
            var limits = new (int Start, int End)[]
            {
                (10,100), (100,10000),(9999,999999)
            };
            var tasks = new Task<int>[limits.Length];
            for (int i = 0; i < limits.Length; i++)
            {
                tasks[i] = SumTaskAsync( limits[i].Start, limits[i].End );
            }

            // await all Tasks in parallel
            // [Task.WhenAll Method](https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.task.whenall?view=netcore-3.1)
            await Task.WhenAll(tasks);

            // get results with await an each task
            var results = new int[limits.Length]; 
            for (int i = 0; i < limits.Length; i++)
            {
                results[i] = await tasks[i];
            }
            System.Console.WriteLine(string.Join(", ", results));
        }

        static void Main(string[] args)
        {
            // Erste Versuche
            System.Console.WriteLine("Main "+Thread.CurrentThread.ManagedThreadId);
            System.Console.WriteLine("Main PrID "+Thread.GetCurrentProcessorId());
            Console.WriteLine("111 ");
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            DoInBackground(10,100);
            Console.WriteLine("222");
            Thread.Sleep(1000);

            System.Console.WriteLine("=================================================");
            // Parallelisierung
            DoInParallel();
            Thread.Sleep(1000);
            System.Console.WriteLine("=================================================");
        }
    }
}
```



## Aufgaben

- Implementiere die Primzahlenzählung mit Hilfe der `async` und `await` Schlüsselwörter
- Verwende `WebClient` `DownloadDataTaskAsync` um von einem Array von URL´s die Inhalte zu lesen (HTML Seiten, Bilder, etc.). Diese Daten sollen in Files gespeichert werden. Der ganze Ablauf, lesen der Daten aus dem Netz und schreiben in Files soll parallelisiert ablaufen. Siehe dafür auch [microsoft: Asynchronous file access (C#)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/using-async-for-file-access).



