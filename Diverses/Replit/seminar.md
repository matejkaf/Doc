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

[C/C++ in REPL](/Doc/C_1/01_C_tidbits.md)

Grafik mit Allegro



### Java

Experimente mit AWT: [REPL : JavaAWT](https://replit.com/@htlmatejka/JavaAWT)

Leider kein automatisches Hinzufügen von Imports

### 



## Minimaler Web Server

Repl unterstützt  keinen webbasierten Download von generierten Files.

Lösung – Starten eines lokalen HTTP Servers:

```bash
$ python3 -m http.server 8000
```

download mit `wget`:

```bash
$ wget https://BlockCipherKeyGenerator.htlmatejka.repl.co/key.bin
```

