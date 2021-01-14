
# NodeJS und mysql

`mysql` npm package zum Zugriff auf mysql bzw. mariaDB Datenbanken.

[NodeJS npm package mysql](https://www.npmjs.com/package/mysql)


# Installation

```bash
$ npm install mysql --save
```

# Verbindung mit mysql server

```javascript
var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'mate',
        dateStrings: true, /* dates are retrieved as 'YYYY-MM-DD' strings */
    });

connection.connect();
```


# query ausführen

```javascript
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
        console.log(error)
        return
    }
    console.log('The solution is: ', results[0].solution);
});
```

Das Abfrage Ergebnis wird als Array geliefert.
Die Array Elemente sind javascript Objekte, ein Element entspricht einem Datensatz, die Properties sind die Spalten des Ergebnisses.

<div class="uebung" caption="Select">
Teste mit einer Tabelle.
</div>

# Escaped Query Values

Durch Escapen von query values werden Werte von javascript Variablen in SQL Befehle integriert. 
[Siehe: Escaping query values](https://www.npmjs.com/package/mysql#escaping-query-values)

```javascript
let sqlStr = 'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?'
let userId = getUserID()
connection.query(
    sqlStr, 
    ['a', 'b', 'c', userId], 
    function (error, results, fields) {
        if (error) throw error;
        console.log(this.sql)
        // ...
    }
);
```

`this.sql` enthält den fertigen SQL String (fürs debugging).


Beispiel für SET mit js object:

```javascript
let post  = {idx: 1, title: 'Hello MySQL'};
let query = connection.query(
    'INSERT INTO posts SET ?', 
    post, 
    function (error, results, fields) {
        if (error) throw error;
        // Neat!

        // results.insertId: von AUTO_INCREMENT
        console.log('ID=' + results.insertId);
        console.log('affectedRows=' + results.affectedRows)
    }
);
console.log(query.sql); 
// INSERT INTO posts SET `idx` = 1, `title` = 'Hello MySQL'
```

