---
title: Basics
subtitle: Databases
tags: [Database]
---

* TOC
{:toc}

> A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools. (Douglas Adams)

# Databases

- For large amounts of data, 
- flexible queries, and
- fast access.




## Usage Examples
Databases are an important part of todays computerized systems. 


- 
Banking, accounts, transactions
- 
Customer relation, orders, shipment, billing, payment
- 
Social networking platforms
- 
Googles search database
- 
Integrated in most mobile phone platforms


It is very likely that your mobile phone apps depend heavily on databases. There is the address book with your contacts, the list of recent calls, your personal messages, and so on. 



## Ex. Customer Relations Database
You would like store 

- **hundreds** of customers and 
- **thousands** of order-, shipment- and payment information.


**Questions** that may arise:

- 
All customers that received a certain product in the last 6 month.
- 
What was last years best selling product?
- 
Which customers in Germany, buying more than 100 pieces a year, were most often late in their payment?
- 
What is the number of unpaid deliveries?









# Records and Tables




## Records
In a database data is organized in **records** (Datensatz).


**Ex.**
For storing all the books of a library a record may consist of:


- **Id** – Identifier, e.g. unique number
- **Title** – Book Title
- **Publ** – Year of publication
- **Author** – Book's author



A record consists of **fields**, each field stores a **single data value**. A field has a name.

| Id   | Title        | Publ | Author  |
| ---- | ------------ | ---- | ------- |
| 1    | Learning SQL | 2009 | Jon Doe |


Every field has a datatype (like `INT`).



## Table
Records are stored in a table (Tabelle).
All records within a table share the same structure.

**Ex.** Library

| *Id* | Title             | Publ | Author       |
| ---- | ----------------- | ---- | ------------ |
| 1    | Learning SQL      | 2009 | Jon Doe      |
| 2    | Print something   | 1452 | J. Gutenberg |
| 3    | Life with Asterix | -44  | J. Caesar    |




- **row** (*Zeile*) ⟶ one record (*Datensatz*)
- **column** (*Spalte*) ⟶ fields of same name and datatype
- **Id** (*identifier*) ⟶ key (*Schlüssel*) – unique value



## Summerize


**Def.**

- **record**: fixed number of fields with values
- **table**: many records
- **database**: many tables



# SQL

A database consists of files, where the data gets stored. Access is managed by the DBMS (*database management system*). The programmer interacts with the DBMS using a special programming language:
**SQL** (structured query language).



## Create / delete a table

```c
CREATE TABLE table_name (column_title data_type, ...);
```

```c
DROP TABLE table_name;
```

Example
```c
CREATE TABLE Books (
    Id INT,
    Title VARCHAR(40),
    Publ INT,
    Author VARCHAR(20)
);
```

`INT` ⟶ Integer
`VARCHAR(max_len)` ⟶ String with max. length




## Insert rows

```c
INSERT INTO table_name
VALUES (value1,value2,value3,...);
```

```c
INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);
```

```c
INSERT INTO ... VALUES (...) , (...) , ...;
```

Example
```c
INSERT INTO Books VALUES
	(1,'Learning SQL',2009,'Jon Doe'),
	(2,'Print something',1452,'Johannes Gutenberg'),
	(3,'Life with Asterix',-44,'Julius Caesar');
```

Database storage is **persistent** stored on a hard disk.



## Query (Show content)
All rows:
```c
SELECT * FROM table_name;
```

With condition:
```c
SELECT * FROM Books WHERE Id=2;
```

```c
SELECT * FROM Books WHERE Publ>2000;
```



## Change or delete

**Change**
```c
UPDATE Books
SET Title='bla', Author='xyz', ...
WHERE Id=123;
```

**Delete a row**
```c
DELETE FROM table_name WHERE condition;
```




## NULL

Special value for a field. Meaning: the field has no value.


Example:
```c
INSERT INTO Books (Id,Title) SET (4,'War and Peace');
```
All other fields are set to `NULL`.



Query for NULL values

```c
SELECT * FROM Books WHERE Publ IS NULL;
```

```c
SELECT * FROM Books WHERE Publ IS NOT NULL;
```







# Key

- The key is a special field with a value which appears only once (=unique) throughout the table.

- A key is used to identify a single row.

- Every table must have a key.

| *Id* | Title             | Publ | Author       |
| ---- | ----------------- | ---- | ------------ |
| 1    | Learning SQL      | 2009 | Jon Doe      |
| 2    | Print something   | 1452 | J. Gutenberg |
| 3    | Life with Asterix | -44  | J. Caesar    |

In this table the values of the Id column are the keys.



## Take special care when choosing a key field.

Bad:

- Names (Mayer, Müller, ...)
- Katalognummer




OK:

- Sozialversicherungsnummer
- Matrikelnummer
- `Id` with unique numbers



## Unique Identifier


Most often it makes sense to introduce an additional field as key additionally to all the data fields. This field is frequently called `Id` (for Identifier) and of data type `INT`.

Example
```c
CREATE TABLE Books (
    Id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (Id),
    
    Title VARCHAR(40),
    Publ INT,
    Author VARCHAR(20)
);
```



- `NOT NULL` ⟶ must have a value.
- `PRIMARY KEY(field name)` ⟶ defines the key.
- `AUTO_INCREMENT` ⟶ value automatically generated (if set to NULL). 




