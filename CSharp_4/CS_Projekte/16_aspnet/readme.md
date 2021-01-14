Projekt anlegen, starten und eine kleine Änderung durchführen:
[Tutorial: Get started with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/getting-started/index?view=aspnetcore-2.2&tabs=macos)

[Tutorial: Get started with Razor Pages in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-2.2&tabs=visual-studio)

Each **Razor page** is a pair of files:
- A .cshtml file that contains HTML markup with C# code using Razor syntax.
- A .cshtml.cs file that contains C# code that handles page events.

Basis für das Aussehen aller Seiten siehe `Pages/Shared/_Layout.cshtml`

Eigene Seite anlegen:

Kopieren der `cshtml` und `cshtml.cs` Files -> anpassen.

[Link](https://localhost:5001/MyPage) ohne Dateiendung!

```csharp
System.Console.WriteLine("DEBUG: OnGet"); // in der CL Ausgabe
```

Bei Änderungen im cshtml File muss nicht neu compiliert werden (Browser Reload genügt)


# Blazor

Client Side C#!

ab ASP.NET Core 3.0 (An official release is planned for September 2019)

[Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-3.0)

Running .NET code inside web browsers is made possible by **WebAssembly** (abbreviated wasm). WebAssembly is a compact bytecode format optimized for fast download and maximum execution speed. WebAssembly is an open web standard and supported in web browsers without plugins.

[Switching between .NET Core SDK Versions](https://markheath.net/post/switching-between-netcore-sdk-versions)


