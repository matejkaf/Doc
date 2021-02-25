---
title: Doc
tags: [5AHELS, lecture, python, flask, repl]
---

# Flask

Alternative zu Flask wäre Django ([Vergleich](https://testdriven.io/blog/django-vs-flask/)).

```bash
$ python3 -m pip install flask
# sudo on MacOS!
```

```python
#! /usr/bin/python3
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
```

- [stackoverflow: What does the “at” (@) symbol do in Python?](https://stackoverflow.com/questions/6392739/what-does-the-at-symbol-do-in-python) – Decorator [](https://realpython.com/primer-on-python-decorators/), kurz: Funktion wird als Parameter übergeben.
- Interessant: automatischer restart des Server Scripts bei Änderung



## repl.it Hosting

[Flask Tutorial](https://repl.it/talk/learn/Flask-Tutorial-Part-1-the-basics/26272)

Enthält das python File `import` so wird flask automatisch installiert.

## curl

[jslinux](https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192), Geht auch in der shell von repl.it

```bash
localhost:~# curl https://flasktest01.franzmatejka.repl.co
```



## RESTful API

Siehe [Designing a RESTful API with Python and Flask](https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask). 

[Source auf github](https://github.com/miguelgrinberg/REST-tutorial/blob/master/rest-server.py)



## sqlite

[sqlite Example auf repl.it](https://repl.it/@delamath/sqlite-example)

```python
import sqlite3

conn = sqlite3.connect("test.db")
c = conn.cursor()

c.execute('''
DROP TABLE IF EXISTS test_table2
''')

c.execute('''
CREATE TABLE IF NOT EXISTS test_table
(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)''')

c.execute('''
CREATE TABLE IF NOT EXISTS stocks
(id INTEGER PRIMARY KEY AUTOINCREMENT, date text, trans text, symbol text, qty real, price real)''')

#c.execute("INSERT INTO stocks (date, trans, symbol, qty, price) VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

#c.execute("INSERT INTO stocks (date, trans, symbol, qty, price) VALUES ('2016-04-21','SELL','RHAT',200,37.14)")

print(c.fetchall())

c.execute("""
SELECT name FROM sqlite_master WHERE type='table'
""")
a = c.fetchall()
print(a)

c.execute("""
SELECT * FROM stocks
""")
a = c.fetchall()
print(a)

conn.commit()
#conn.close()
```

Legt in repl.it eine Datei `test.db` an.