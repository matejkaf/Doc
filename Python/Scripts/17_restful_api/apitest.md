# JSON API mit Flask

Siehe [Designing a RESTful API with Python and Flask](https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask). Alternative wäre Django ([Vergleich](https://testdriven.io/blog/django-vs-flask/)).

[Source auf github](https://github.com/miguelgrinberg/REST-tutorial/blob/master/rest-server.py)

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



## Static Files

[How to serve static files in Flask](https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask)



## repl.it

[Flask Tutorial](https://repl.it/talk/learn/Flask-Tutorial-Part-1-the-basics/26272)

