---
title: Kryptographie in .NET Core
type: lecture
cmds: ['md_html.bash','md_html.bash --small']
tags: [ krypto, core, csharp ]
---



# Kryptographie

Wissenschaft um Nachrichten geheim zu halten.

- Confidentiallity – schutz vor lesen
- Integrity – erkennen von Veränderungen
- Authentication – Absender prüfen
- Non-repudiation – Sender kann später die Nachricht nicht abstreiten

.NET: `System.Security.Cryptography`



# C# / .NET Helper



## string ⟷ byte[]

```csharp
byte[] System.Text.Encoding.UTF8.GetBytes(string);
string System.Text.Encoding.UTF8.GetString(byte[] data);
```



## Base64

```csharp
string Convert.ToBase64String(byte[]);
byte[] Convert.FromBase64String(string);
```



## Hex

```csharp
// byte[] ==> hex string
string BitConverter.ToString(byte[] data); // 20-2A-C5-A8-03-29-04-AC-20
String.Replace("-","");

// hex string ==> byte[]
byte[] data = 
            Enumerable.Range(0, str.Length / 2)
            .Select(x => Convert.ToByte(str.Substring(x * 2, 2), 16))
            .ToArray();
```



## File

```csharp
boolean File.Exists(string path);
File.WriteAllText(string path, string data);
string File.ReadAllText(string path);
```





## using statement

Hat mit Kryptographie nichts zu tun, kommt aber im Zusammenhang öfter vor.

[ms docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement): Provides a convenient syntax that ensures the correct use of [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable) objects.

> Many classes encapsulate unmanaged resources, such as file handles, graphics handles, or database connections. These classes implement System.IDisposable, which defines a single parameterless method named Dispose to clean up these resources. The using statement provides an elegant syntax for calling Dispose on an IDisposable object within a finally block.

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

