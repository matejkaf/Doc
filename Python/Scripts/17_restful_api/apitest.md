# JSON API mit Flask

Siehe [Designing a RESTful API with Python and Flask](https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask)

```bash
$ python3 -m pip install flask
# sudo on MacOS!
```

```python
#! /usr/bin/python3
# -*- encoding: utf-8 -*-

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
```

- [stackoverflow: What does the “at” (@) symbol do in Python?](https://stackoverflow.com/questions/6392739/what-does-the-at-symbol-do-in-python) – kurz: Funktion wird als Parameter übergeben.
- Interessant: automatischer restart des Server Scripts bei Änderung
