
# .NET SDK Installation

- [MS .NET Tutorial](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro), hier kann man das .NET SDK downloaden, .NET Core SDK 2.2.300
```
The following was installed at /usr/local/share/dotnet 
	•	.NET Core SDK 2.2.300
	•	.NET Core Runtime 2.2.5
	•	ASP.NET Core Runtime 2.2.5
```
Nach dem Installieren ein **neues** Terminal öffnen.

Test nach SDK install:

```bash
$ dotnet --info
```

- [.NET Core Guide](https://docs.microsoft.com/en-us/dotnet/core/)
- [.NET Core command-line interface (CLI) tools](https://docs.microsoft.com/en-us/dotnet/core/tools/index?tabs=netcore2x)


## Kali Linux

In Kali Linux login as user, Google ".net core download". Advanced, ...,  ".NET Core Binaries: x64"
Es erscheint ein Fenster in dem die folgende Anleitung angezeigt wird

```bash
mkdir -p $HOME/dotnet && tar zxf dotnet-sdk-2.2.401-linux-x64.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet
# Variablen nur in der aktuellen shell session gültig
```

"~/.bashrc":
- `:$HOME/dotnet` an PATH anfügen, oder falls nicht vorhanden obige Version nehmen.
- Die Zeile mit `DOTNET_ROOT` and Ende übernehmen


# VS Code

- [Setting up C# on a Mac](https://www.macworld.co.uk/how-to/mac-software/code-c-sharp-mac-3640347/), VS Code mit Extension für C#, .NET CLI Tools (=SDK ?) fehlen dann noch
- [Working with C#](https://code.visualstudio.com/docs/languages/csharp)


```bash
$ dotnet new console -o 01_hello_world
# new erzeugt ein neues subdir
```

Das neue Subdir mit VS Code öffnen. Dieses fragt ob "Assets" dafür angelegt werden sollen (`tasks.json` und `launch.json` im subdir `.vscode`).

Start mit `Menü>Debug>Start without Debugging ^F5`

Compiler starten mit `Menü>Terminal>Run Build Task...`


# Command Line

```bash
$ dotnet new console -o 01_hello_world
$ dotnet run # build and run

# build application
$ dotnet build

# directories bin and obj can be deleted anytime
```

# NuGet

```bash
# MySQL Connector
$ dotnet add package MySql.Data
```


## Deployment

[Publish .NET Core apps with the CLI](https://docs.microsoft.com/en-us/dotnet/core/deploying/deploy-with-cli)

```bash
# FDE - Framework dependent deployment
#  .NET Core runtime must be installed, dotnet command needed to start application
$ dotnet publish -c Release
$ cd bin/Release/netcoreapp2.2/publish
$ dotnet 01_hello_world.dll

# Framework-dependent executable
#  .NET Core runtime must be installed, standalone executable, needs a bit more space
$ dotnet publish -c Release -r osx-x64 --self-contained false
$ ./bin/Release/netcoreapp2.2/osx-x64/publish/01_hello_world 

# FDE for windows
$ dotnet publish -c Release -r win10-x64 --self-contained false

# SCD self-contained deployment
$ dotnet publish -c Release -r osx-x64 --self-contained true

# 70 MB!

```
Bei FDE ist immer der ganze publish Ordner notwendig.


## Mehrere Projekte

- [Mehrere Projekte mit reference](https://www.humankode.com/visual-studio-code/how-to-add-multiple-projects-in-visual-studio-code), daraus könnte man ein DLL Beispiel machen.


Mehrere Projekte mit einem Solution File
```bash
$ dotnet new sln -n mysolution
$ dotnet new console -o proj1
$ dotnet new console -o proj2
$ dotnet sln add proj1/proj1.csproj
$ 
```

- In `tasks.json` den build pfad kürzen auf `"${workspaceFolder}"`.
- In `launch.json` eine weitere launch configuration hinzufügen (Hier kann man auch die Namen anpassen)
- Nun kann man in der Debug View die Launch Configuration wählen


# Events

## Info

Publisher Subscriber Design-Pattern

Spezielle, häufige Anwendung für Delegates.

Publisher: 
Benachrichtigt die Subscriber über Ereignisse. Subscriber können sich an/abmelden. 
Implementierung des Publishers ohne Kenntniss der konkreten Subscriber (stark entkoppelt).

Subscriber:
Meldet sich beim Publisher für ein konkretes Ereignis an. Die Benachrichtigung erfolgt wenn das Ereignis auftritt. Als Zusatzinformation enthält ein Event das Objekt das Absenders und Event spezifische Daten.

Events sind ein auf Delegates aufbauendes C# Sprachfeature das genau dieses Design-Pattern umsetzt. Hauptziel: vermeiden dass sich die Subscriber in die Quere kommen (S. 146).

Grund für Event:

Das event Schlüsselwort verhindert dass ein Event von außerhalb der Publisher Klasse auf eine andere Art und Weise als subscribe (`+=`) oder unsubscribe (`-=`) verwendet werden kann. D.h. die Anwendungsmöglichkeiten von delegates werden beschränkt. Fehlervermeidung!
Siehe Projekt `13_Events_Why`

## Event vs. Delegate

delegate is a 'container' of a method
(variable container of a value)

A delegate is similar to a function pointer in C/C++. It holds a reference to a method and to an object instance (if the method is non-static). Delegates are usually multicast, i.e. they hold references to several object/method pairs.

An event is a notification mechanism, based on delegates. The only thing it exposes publicly is a pair of methods (add/remove) to subscribe to or unsubscribe from the notification. A delegate type is used to define the signature of the handler methods, and the list of subscribers are (usually) stored internally as a delegate.

An event is a “property” that exposes an add and remove method (invoked via += and -= in code) to add/remove subscribers to a delegate list.

## Expose

- Stock Beispiel (`12_Event`)
- Begründung für `event` (`13_Events_Why`)
- .NET Konform. Siehe S.148 (`14_Events_NET`)
- Evtl. [Counter Example](https://docs.microsoft.com/en-us/dotnet/api/system.eventhandler?view=netframework-4.8)
- ? WindowsForm Beispiel


# ASP.NET Core Web Application 

**Razor** is an ASP.NET programming syntax used to create dynamic web pages with the C# or VB.NET programming languages. 

[Visual Studio for Mac: Build Your First App, GitHub Emoji](https://www.youtube.com/watch?v=2CsZpJdFFnQ)

[Quickstart: Use Visual Studio to create your first ASP.NET Core web app](https://docs.microsoft.com/en-us/visualstudio/ide/quickstart-aspnet-core?view=vs-2019)

[Tutorial: Get started with C# and ASP.NET Core in Visual Studio](https://docs.microsoft.com/en-us/visualstudio/get-started/csharp/tutorial-aspnet-core?view=vs-2019)

[HOSTING AN ASP.NET CORE 2 APPLICATION ON A RASPBERRY PI](https://thomaslevesque.com/2018/04/17/hosting-an-asp-net-core-2-application-on-a-raspberry-pi/)



# Database Access Tests

[Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)

ADO.NET

[Database Provider List](https://docs.microsoft.com/en-us/ef/core/providers/index)

[](https://www.nuget.org/packages/MySql.Data)


Looks interesting (EF) - research: [Using Database in ASP.NET Core](https://medium.com/@daniel.sagita/using-database-in-asp-net-core-f69f99048bb)

https://stackoverflow.com/questions/38510740/is-ado-net-in-net-core-possible

https://stackoverflow.com/questions/35864716/net-core-mysql


# Avalonia GUI

[Avalonia](https://github.com/AvaloniaUI/Avalonia)

[Tutorial](http://avaloniaui.net/docs/quickstart/create-new-project)

[Avalonia Templates installieren](https://github.com/AvaloniaUI/avalonia-dotnet-templates)

```bash
git clone https://github.com/AvaloniaUI/avalonia-dotnet-templates
# avalonia-dotnet-templates = Pfad des geclonten Repositories
dotnet new --install avalonia-dotnet-templates
```

Neues Projekt

```bash
dotnet new avalonia.app -o 21_MyAvaloniaApp
cd 21_MyAvaloniaApp
dotnet run
# Öffnet ein Fenster mit einem Text
```

Versuch hier abgebrochen weil im Tutorial keine Events vorkommen (und dafür wäre es eigentlich gedacht gewesen). 


# Encoding

HTTP: `iso-8859-1` Ist default encoding einer web-site wenn nichts im Header steht! (gemeinden.at)

[stackoverflow: C# Convert string from UTF-8 to ISO-8859-1 (Latin1) H](https://stackoverflow.com/questions/1922199/c-sharp-convert-string-from-utf-8-to-iso-8859-1-latin1-h)


> Actually, a String is a counted sequence of UTF-16 code units. (Unfortunately, the term Unicode has been misapplied in Encoding.Unicode and in the Win32 API. Unicode is a character set, not an encoding. UTF-16 is one of several encodings for Unicode.)


```csharp
string url="http://www.gemeinden.at/gemeinden/bezirk/404/braunau-am-inn";
HttpWebRequest hwr = (HttpWebRequest) WebRequest.Create(url);
hwr.UserAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15"; // just trick the server
HttpWebResponse response = (HttpWebResponse) hwr.GetResponse();
if(response.StatusCode == HttpStatusCode.OK)
{
    Console.WriteLine(response.Headers);
    // ### >>> !!!
    Encoding isoEncoding = Encoding.GetEncoding("ISO-8859-1");
    StreamReader sr = new StreamReader(response.GetResponseStream(), isoEncoding);
    string line;
    while((line = sr.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
    sr.Close();
}
else
{
    Console.WriteLine("HTTP Statuscode: " + response.StatusCode);
}

```

## Konsole

todo:
[Console.OutputEncoding Property](https://docs.microsoft.com/en-us/dotnet/api/system.console.outputencoding?view=netframework-4.8)