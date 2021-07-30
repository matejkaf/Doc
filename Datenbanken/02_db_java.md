---
title: Java JDBC
subtitle: Databases
describtion: Access SQL databases from Java with JDBC
tags: [Database]
---



Access SQL databases from Java with JDBC (Java Database Connectivity).

Package `java.sql` and classes:

- Connection
- Statement
- ResultSet



## Connect to database server

Get an object of class `Connection`:

```java
String url="jdbc:mysql://localhost:3306/htl_test";
String user="root"; 
String pass="";

Connection con;
con = DriverManager.getConnection(url, user, pass);
// *** access the database here ***
con.close();
```

**Caveat:**
Exception handling is necessary for `SQLException` (use Netbeans feature "`{surround with}"').






## Executing SQL statements

<article>
Once the connection to the database is established, statements can be sent and the results processed from within the program.


An SQL statement is associated with an object of class `Statement`.

Execute a `SELECT` query:

```java
Statement stmt = con.createStatement();
String query = "SELECT * FROM Books";
ResultSet rs = stmt.executeQuery(query);
```

\pause
The `ResultSet` Object gives access to the retrieved data:

```java
while(rs.next()) {
    name=rs.getString("Author");
    System.out.println(name);
}
```

<article>
The result of a SELECT query may contain many rows.
The result set gives the possibility to process one row at a time.



## Other SQL statements

SQL statements which **change** the table content (`INSERT`, `UPDATE`, `DELETE`, \ldots) are processed using the method
executeUpdate()} 

```java
// SQL insert command
String strSQL = "INSERT INTO Books ...";
int rowsEffected = stmt.executeUpdate(strSQL);
```

Return value is the **number of affected** (changed, deleted) rows (data records).

