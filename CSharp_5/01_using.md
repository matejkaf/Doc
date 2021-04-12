---
title: using statement
tags: [5AHELS]
---

> [ms docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement): Provides a convenient syntax that ensures the correct use of [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable) objects.

<!--Buch Seite 163:-->

Many classes encapsulate unmanaged resources, such as file handles, graphics han‐ dles, or database connections. These classes implement System.IDisposable, which defines a single parameterless method named Dispose to clean up these resources. The using statement provides an elegant syntax for calling Dispose on an IDisposable object within a finally block.

The following:

```csharp
using (StreamReader reader = File.OpenText ("file.txt")) {
}
```

is precisely equivalent to:

```csharp
{
  StreamReader reader = File.OpenText ("file.txt"); 
  try
  {
    ...
  } finally {
    if (reader != null) {
      ((IDisposable)reader).Dispose();
    } 
  }
}
```

C#8.0 (.NET Core 3.x) braucht keine `{}`:

```csharp
using (StreamReader reader = File.OpenText ("file.txt"));
...
```

Mit .NET Core 3.1 ausprobiert: hat nicht funktioniert!

