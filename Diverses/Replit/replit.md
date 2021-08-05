---
title: replit.com
subtitle: Web Entwicklungsumgebung
---



[replit.com](https://replit.com) ist eine **Web basierte Entwicklungsumgebung**. Editor, Compiler und Laufzeitumgebung (virtuelle Linux Maschine) sind online. Es genügt ein **Browser**, es sind keine Installationen notwendig. Internetverbindung vorausgesetzt sind alle erstellten Programme von überall verfügbar. Auch auf **Tablets und Handys** ist es möglich an den Programmen (genannt REPL – read eval print loop) zu arbeiten.

![Screenshot 2021-03-25 at 08.42.57](fig/Screenshot 2021-03-25 at 08.42.57.png)

Erstellte REPL können weitergegeben werden, siehe:

- [CppHelloWorld](https://replit.com/@htlmatejka/CppHelloWorld) – klicken und starten!



# Ein paar Features

- Der Editor unterstützt Intellisense (Basis von Visual Studio Code)
- Jedes REPL läuft in einer eigenständigen, virtuellen Linux Umgebung.
- Eine Linux Shell kann genutzt werden
- Debugging ist möglich
- Einfache Spiele im Terminal sind möglich. Implementierung einer `conio.h` ähnlichen Library – siehe [REPL Conio](https://replit.com/@htlmatejka/ReplConio).
- Es ist möglich Dateien hochzuladen und z.B. von einem Programm aus darauf zuzugreifen.
- Programme können ebenfalls Dateien erzeugen
- Mit Flask (Python) können Webserver erstellt werden – statische Webseiten, generierte Webseiten und sogar komplette RESTful APIs sind möglich.

Ein paar Highlights was möglich ist:

- C/C++
- HTML/CSS/JS inkl. Hosting
- Java
- C# Mono
- Python
- Python WebServer / RESTful API
- PHP
- Bash, bzw. allgemeines Arbeiten mit Linux Shell
- SQLite
- nodeJS

# Mit Schülern

Mit C, C++, Java und Python werden alle für FSST, SEW, AIIT und teilweise SEN nötigen Programmiersprachen unterstützt. Auch C# ist möglich, dabei handelt es sich aber leider um Mono (vielleicht kommt ja einmal .NET Core).

Die Schüler müssen sich nur auf [replit.com](https://replit.com) anmelden. Probleme beim Installieren von Entwicklungsumgebungen und verlieren von Programmen kommen nicht mehr vor.



## Teams for education

Ist ein kostenpflichtiger Dienst (finanziert der Elterverein derzeit). Bei Interesse bitte Email mit dem replit Usernamen an [Franz Matejka](mailto:franz.matejka@htl-braunau.at).

Schüler können zu Teams hinzugefügt werden:

![Screenshot 2021-03-25 at 09.02.44](fig/Screenshot 2021-03-25 at 09.02.44.png)

Auf alle in einem Team erstellte REPLs hat man Zugriff und kann den Schülern sogar live beim Coden zusehen:

![Screenshot 2021-03-25 at 08.42.05](fig/Screenshot 2021-03-25 at 08.42.05.png)

![Screenshot 2021-03-25 at 09.02.00](fig/Screenshot 2021-03-25 at 09.02.00-6693243.png)



Im Code der Schüler können Kommentare eingefügt bzw. dieser gleich direkt (auch gemeinsam mit dem Schüler) editiert werden (Multiplayer Editor).

Die REPLs bleiben gespeichert und können in Ordnern organisiert werden.

![image-20210325183010065](fig/image-20210325183010065.png)

# Persönliches Fazit

Bin ziemlich begeistert und in fast allen Klassen/Gruppen auf dieses Tool umgestiegen. Hat noch ein paar Macken ist aber in ständiger Entwicklung/Verbesserung.

replit.com ist aus meiner Sicht ein vollständiger Ersatz für

- Visual C++
- Netbeans

Außerdem sind möglich

- Arbeiten mit Linux-Shell (bash Scripts)
- PHP
- WebServer in Python bzw. PHP
- ...



# Nachteile

- Schüler können jederzeit in die REPLs anderer Schüler schauen
- C# nur mit Mono
- Kein MySQL, jedoch SQLite



# Details

- Linux virtuelle Maschine
- Editor auf Basis von VisualStudio Code mit IntelliSense
- Shell Programmierung
  - wget, openssl, python, ...
  - package nachinstallieren nicht möglich, allerdings download und selber compilieren geht (siehe Allegro)
- Geht auch auf Tablet/Handy passabel



## C/C++ Programmieren

[[C/C++ in REPL](/Doc/C_1/01_Grundlagen/02_C_tidbits)]

[[REPL : Grafik mit Allegro](https://replit.com/@htlmatejka/Allegro)]



## Java

Experimente mit AWT: [[REPL : JavaAWT](https://replit.com/@htlmatejka/JavaAWT)] verwendet [VNC](https://docs.replit.com/repls/vnc)

Auch automatisches Hinzufügen von Imports funktioniert





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



## Markdown Files

Files mit der Endung `md` werden als Markdown Files interpretiert und es öffnet sich eine eigene Vorschau.

