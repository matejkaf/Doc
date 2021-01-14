# .NET Core Web API

[MS Tutorial](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio-code)

[Create web APIs with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-3.1)





```bash
dotnet new webapi -o 36_TodoApi
code -r 36_TodoApi
# cd TodoApi
# dotnet add package Microsoft.EntityFrameworkCore.SqlServer
# dotnet add package Microsoft.EntityFrameworkCore.InMemory
# code -r ../TodoApi
```

```bash
dotnet run
```

Öffnen im Browser: `https://localhost:5001/WeatherForecast`

Siehe Dateien:

```
WeatherForecast.cs
Controllers/WeatherForecastController.cs
```



Eigenen Controller (ohne Model – Unterschied zum Tutorial)

```bash
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet tool install --global dotnet-aspnet-codegenerator
dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -dc TodoContext -outDir Controllers
# -m Option weggelassen
```



Alles viel zu mühsam!