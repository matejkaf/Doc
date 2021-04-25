---
title: REPLIT
---



## REPLIT.com

Was kann man machen?

- C/C++
- HTML/CSS/JS inkl. Hosting
- Java
- C# Mono
- Python
- Bash, bzw. allgemeines Arbeiten mit Linux Shell
- SQLite





## Details

- Linux virtuelle Maschine
- Shell Programmierung
  - wget, openssl, python



### C/C++ Programmieren

[C/C++ in REPL](/Doc/C_1/01_C_tidbits)

Grafik mit Allegro



### Java

Experimente mit AWT: [REPL : JavaAWT](https://replit.com/@htlmatejka/JavaAWT)

Leider kein automatisches Hinzufügen von Imports





## Minimalster Web Server

Repl unterstützt  keinen webbasierten Download von generierten Files.

Lösung – Starten eines lokalen HTTP Servers:

```bash
$ python3 -m http.server 8000
```

download mit `wget`:

```bash
$ wget https://BlockCipherKeyGenerator.htlmatejka.repl.co/key.bin
```



## Web Server in Python

Mit Flask, Hosting von statischen Dateien im Unterordner `static`.

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
  return 'Minimaler Web Server – Dateien im Ordner "static" ablegen!'

app.run(debug=True, host='0.0.0.0')
```

[REPL : MinimalWebServer](https://replit.com/@htlmatejka/MinimalWebServer)

[https://MinimalWebServer.htlmatejka.repl.co/static/test.html](https://MinimalWebServer.htlmatejka.repl.co/static/test.html)



## .draw Files

Zeichnen mit [excalidraw](https://excalidraw.com), auch im Multiplayer Mode. Dazu eine Datei mit der Endung `.draw` erstellen.

