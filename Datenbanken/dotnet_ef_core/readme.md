# Allgemein

Entity Framework Core

- [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)

# Beispiel mit SQlite

[Getting Started with EF Core on .NET Core Console App with a New database](https://docs.microsoft.com/en-us/ef/core/get-started/netcore/new-db-sqlite)

Achtung: namespace von Model.cs an Program.cs anpassen, bevor migration aufgerufen wird.

[SQLite EF Core Database Provider](https://docs.microsoft.com/en-us/ef/core/providers/sqlite/)

SQL query ausführen
[Raw SQL Queries](https://docs.microsoft.com/en-us/ef/core/querying/raw-sql)
Folgende direktiven anfügen (sonst Compiler Fehler):

```csharp
using Microsoft.EntityFrameworkCore;
using System.Linq;
```

Trotzdem immer noch Exception !?

sqlite3 ist Bestandteil von macOS!

```bash
$ sqlite3 blogging.db 
SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.
sqlite> .tables
Blogs                  Posts                  __EFMigrationsHistory
sqlite> select * from Blogs;
1|http://blogs.msdn.com/adonet
2|http://blogs.msdn.com/adonet
3|http://blogs.msdn.com/adonet2
4|http://blogs.msdn.com/adonet2
sqlite> .exit
$ 
```


