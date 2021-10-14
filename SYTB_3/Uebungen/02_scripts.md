---
title: Shell Scripts
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
$ chmod u+x my-script.sh  # octal 755
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

Sind spezielle Variable für Kommandozeilenargumente

```sh
#!/bin/sh
echo $0
echo $1
echo $2
echo $3
```

Aufruf mit

```sh
$ ./args.sh eins zwei drei vier
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



# Variablen in Skripts

Skript:

```sh
echo $PWD
echo $MYVAR
```

Aufruf:

```sh
MYVAR=HALLLOOOO
$ ./test.sh 
/home/runner/NaturalNanoDos

$
```

`$MYVAR` steht nicht in der gestarteten Shell zur Verfügung – muss erst exportiert werden

```sh
$ export MYVAR
$ ./test.sh
/home/runner/NaturalNanoDos
HALLLOOOO
```

Für jedes gestartete Script wird eine eigener shell Prozess gestartet, es werden dabei nur die exportierten shell Variablen übergeben.





---

#### Übung (spezielle Variable)

Probiere die speziellen Variablen aus

---

#### Übung (Zufallszahlen)

Schreibe ein Bash Skript das 3 Zufallszahlen in **einer einzigen** Zeile ausgibt.

---



