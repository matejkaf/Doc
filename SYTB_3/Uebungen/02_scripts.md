---
title: Shell Scripts
subtitle: bash scripting
tags: [lecture,3AHITS]
---

* TOC
{:toc}
[3AHITS G2 21.10.2021]

**Skripts** sind Programme die durch **Interpreter** ausgeführt werden, es gibt keinen Compiler. Da Shells in Textform eingegebene Befehle sofort ausführen sind diese bereits eine Form von Interpreter.

Shell Kommandos können in **Textdateien** geschrieben und dann ausgeführt werden. Ergibt gleiches Ergebnis als wenn diese direkt in der shell ausgeführt werden.



# Hello World Script

Erstellen eines einfachen shell scripts `hello.sh` in `vi`

```sh
# Hello World Skript
echo Hello World
```

Aufruf:

```sh
$ sh hello.sh
```

`sh` startet eine weitere shell

Das zu startende Programm kann auch in die erste Zeile des Skripts integriert werden:

```bash
#!/bin/sh
# Hello World Skript
echo Hello World
```

Um es direkt starten zu können muss das eXecution flag gesetzt werden:

```bash
$ chmod u+x hello.sh  # octal 755
$ ./hello.sh
Hello World
```


- shebang (`#!`)
- eXecution flag
- warum `./`? siehe `echo $PATH`!



# Argumente

Sind spezielle Variable für Kommandozeilenargumente

```
$0 - The name of the Bash script.
$1 - $9 - The first 9 arguments to the Bash script.
$# - How many arguments were passed to the Bash script.
```

Test:

```sh
#!/bin/sh
echo $#
echo $0
echo $1
echo $2
echo $3
```

Aufruf mit

```sh
$ ./args.sh eins zwei drei vier
```



[3AHITS G1 14.10.2021]

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



# process ID

```
$$ - The process ID of the current script.
```



---

#### Übung (process ID `$$`)

Verifiziere, dass beim Starten eines Skripts ein eigener Prozess gestartet wird. D.h. dass die shell die ein shell-script startet ein anderer Prozess ist als die shell die das script dann tatsächlich ausführt

---



# Argumentliste (`$@`)

ergibt eine Liste aller übergebenen Argumente. Dies kann für eine Schleife verwendet werden:

```sh
$ for args in $@; do echo "$args"; done
```

oder

```sh
for args in $@
do
  echo "$args"
done
```

---

#### Übung (Headline Cat)

Schreibe ein Skript das eine Art `cat` zur Verfügung stellt. Als Argumente werden Textdateien übergeben. Das Ergebnis wird in die Datei `result.txt` geschrieben (ist die Datei vorhanden soll deren Inhalt überschrieben werden). Jedem Datei-Inhalt soll eine Überschrift vorangestellt werden.

Beispiel – der Aufruf

```sh
$ ./headline_cat.sh file1.txt file2.txt file3.txt
```

ergibt die Datei `result.txt` mit folgendem Inhalt:

```
== file1.txt ==========================================
Das ist der Inhalt
der ersten Textdatei

== file2.txt ==========================================
Das ist der Inhalt
der zweiten Textdatei

== file3.txt ==========================================
Das ist der Inhalt
der dritten Textdatei

```

---



# Weitere Variablen

```sh
$USER - The username of the user running the script.
$HOSTNAME - The hostname of the machine the script is running on.
$SECONDS - The number of seconds since the script was started.
$RANDOM - Returns a different random number each time is it referred to.
$LINENO - Returns the current line number in the Bash script.
```



---

#### Übung (spezielle Variable)

Probiere die speziellen Variablen aus

Gib 3 Zufallszahlen in **einer einzigen** Zeile ausgibt.

---



