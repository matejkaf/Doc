---
title: Grundlagen UNIX shell
subtitle: bash scripting
tags: [lecture,3AHITS]
---

* TOC
{:toc}
**Scripts** sind Programme die durch **Interpreter** ausgeführt werden, es gibt keinen Compiler. Da Shells in Textform eingegebene Befehle sofort ausführen sind diese bereits eine Form von Interpreter.

Shell Kommandos können in Textdateien geschrieben und dann ausgeführt werden. Ergibt gleiches Ergebnis als wenn diese direkt in der shell ausgeführt werden.



# Hello World Script


Erstellen eines einfachen shell scripts

```bash
$ echo '#!/bin/sh' > my-script.sh
$ echo 'echo Hello World' >> my-script.sh
$ chmod 755 my-script.sh
$ ./my-script.sh
Hello World
$ 
```


- shebang (`#!`)
- eXecution flag
- warum `./`? siehe `echo $PATH`!

Inhalte des scripts:

```bash
#!/bin/sh
echo Hello World
```

Kommentare

```bash
#!/bin/sh
# Say Hello to the world
echo Hello World
```



# Argumente

Sind spezielle Variable

```sh
#!/bin/sh
echo $0
echo $1
echo $2
echo $3
```



# Weitere spezielle Variable

```sh
$0 - The name of the Bash script.
$1 - $9 - The first 9 arguments to the Bash script.
$# - How many arguments were passed to the Bash script.
$@ - All the arguments supplied to the Bash script.
$? - The exit status of the most recently run process.
$$ - The process ID of the current script.
$USER - The username of the user running the script.
$HOSTNAME - The hostname of the machine the script is running on.
$SECONDS - The number of seconds since the script was started.
$RANDOM - Returns a different random number each time is it referred to.
$LINENO - Returns the current line number in the Bash script.
```

---

#### Übung (spezielle Variable)

Probiere diese Variable aus

---

#### Übung (Zufallszahlen)

Schreibe ein Bash Skript das 3 Zufallszahlen in einer einzigen Zeile ausgibt.

---



## Command substitution

Die Ausgabe eines Kommandos kann als Wert für eine Variable verwendet werden.

Die Syntax ist `$(<Kommando>)`

```bash
echo "Hello, $(whoami)."
```

```bash
mydir='/etc'
myvar=$( ls /etc | wc -l )
echo There are $myvar entries in the directory $mydir
```

---

#### Übung (Datum)

Schreibe ein Skript. Der Name einer Datei wird über die Kommandozeile übergeben. Es soll eine Backup dieser Datei angelegt werden indem eine Kopie erstellt wird, der Dateiname dieser Kopie enthält das heutige Datum.

```
test.txt --> 2021-09-14-test.txt
```

Schreibe einen Einzeiler mit Hilfe von Command Substitution.

---





