---
title: Shell Scripts
subtitle: Übungen bash scripting
tags: [assignment,3AHITS]
---

#### Übung (Directory Struktur)

Schreibe ein Shell-Script das Unterverzeichnisse und Dateien anlegt.

Aufruf:  `./build_dirs.sh abcd`

Dies führt zu folgender Directorystruktur:

```
./
└── abcd/
    ├── abcd_01/
    │   ├── abcd.01.1.txt
    │   ├── abcd.01.2.txt
    │   └── abcd.01.3.txt
    └── abcd_02/
        ├── abcd.02.1.txt
        ├── abcd.02.2.txt
        └── abcd.02.3.txt
```

Schreibe weiters ein Shell-Script `clean_dir.sh` das diese Verzeichnisstruktur wieder löscht.

---

#### Übung (Skript Generator)

Schreibe ein Skript das 

- eine Skriptdatei erzeugt, 
- die She-Bang Zeile einfügt, 
- einen echo Befehl einfügt und 
- das eXecution Flag für das Skript setzt.

Anwendung:

```sh
$ ./makescript.sh mytest
```

erzeugt die Datei `mytest.sh` :

```sh
#!/bin/sh

echo "mytest Skript"

# write yor script here

```

Das Skript kann sofort ausgeführt werden:

```sh
$ ./mytest.sh
```

---

#### Übung (self listing script)

Schreibe ein Skript das nach dem Starten den enthaltenen Text ausgibt (sozusagen sich selbst ausgibt)

---

