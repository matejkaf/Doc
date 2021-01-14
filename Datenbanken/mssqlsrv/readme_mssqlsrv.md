[docker Microsoft SQL Server](https://hub.docker.com/_/microsoft-mssql-server)

# docker

[Quickstart: Run SQL Server container images with Docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-2017&pivots=cs1-powershell)

[`docker-compose` Beispiel](https://blog.logrocket.com/how-to-run-sql-server-in-a-docker-container/)

## CLI

```bash
$ docker-compose --project-name mssqltest up

$ docker-compose --project-name mssqltest rm -f # remove container, (removes database too!)
$ docker-compose --project-name mssqltest rm -f -v # remove container and the volumes that are attached to the containers

$ docker ps -a

```

## MS SQL Server

```bash
$ docker exec -it sql1 "bash"

> /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<YourStrong!Passw0rd>'
# exit with 'quit' or 'exit'

```

[sqlcmd Utility](https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-2017)


## SQL

```sql

create database TestDB
select Name from sys.Databases
GO

USE TestDB
CREATE TABLE Inventory (id INT, name NVARCHAR(50), quantity INT)
INSERT INTO Inventory VALUES (1, 'banana', 150); INSERT INTO Inventory VALUES (2, 'orange', 154);
GO

select * from Inventory;
go

drop table if exists Inventory
go

```

# ASP.NET Core + SQL Server

[Quickstart: Compose and ASP.NET Core with SQL Server](https://docs.docker.com/compose/aspnet-mssql-compose/)

Achtung: Funktioniert nur mit Anpassungen!

[](localhost:8000)

Problem:

```bash
$ docker-compose up


Unable to bind to http://localhost:5000 on the IPv6 loopback interface: 'Cannot assign requested address'.

```

in launchSettings.json
```json
      "applicationUrl": "http://0.0.0.0:5000",
```

Port-Mapping in docker-compose.yml anpassen

```yml
        ports:
            - "8000:5000"
```

In entrypoint.sh die server option weglassen

```bash
run_cmd="dotnet run"
```

