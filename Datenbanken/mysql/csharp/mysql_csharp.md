# C# Zugriff auf mysql Datenbank

Siehe [MySQL Connector/NET Developer Guide](https://dev.mysql.com/doc/connector-net/en/)

World-db Beispiel wird verwendet.

# World DB importieren

File `world.sql.gz` ist Ausgangspunkt.
Siehe [How To Import and Export Databases in MySQL or MariaDB](https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb)

```bash
$ gzip -d world.sql.gz
$ ls -l
# database "worlddb" anlegen!
$ mysql --user=root --password=toor worlddb < world.sql
```

# Dokumentation

- [The MySqlConnection Object](https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-connection.html)
- [The MySqlCommand Object](https://dev.mysql.com/doc/connector-net/en/connector-net-tutorials-sql-command.html)
- [MySqlDataReader Class](https://dev.mysql.com/doc/dev/connector-net/8.0/html/T_MySql_Data_MySqlClient_MySqlDataReader.htm)

`MySqlDataReader`: indexer liefert object
- [MySqlDataReader.Item Property (Int32)](https://dev.mysql.com/doc/dev/connector-net/8.0/html/P_MySql_Data_MySqlClient_MySqlDataReader_Item.htm)
- `GetType` verwenden um Datentyp herauszufinden
[How can I get the data type of a variable in C#?(]https://stackoverflow.com/questions/11634079/how-can-i-get-the-data-type-of-a-variable-in-c/11634832)

