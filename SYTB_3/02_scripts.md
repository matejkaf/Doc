---
title: Shell Scripts
subtitle: bash scripting
tags: [lecture,3AHITS]
---

* TOC
{:toc}
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

[Übungen](02b_scripts_ue)

# process ID

```
$$ - The process ID of the current script.
```

#### Übung (process ID `$$`)

Verifiziere, dass beim Starten eines Skripts ein eigener Prozess gestartet wird. D.h. dass die shell die ein shell-script startet ein anderer Prozess ist als die shell die das script dann tatsächlich ausführt



# Argumentliste

`$@` ergibt eine Liste (white space getrennt) aller übergebenen Argumente. Dies kann für eine Schleife verwendet werden:

```sh
$ for args in "$@"; do echo "$args"; done
```

oder

```sh
for args in "$@"
do
  echo "$args"
done
```

[Übungen](02d_scripts_ue)

# Weitere Variablen

```sh
$USER - The username of the user running the script.
$HOSTNAME - The hostname of the machine the script is running on.
$SECONDS - The number of seconds since the script was started.
$RANDOM - Returns a different random number each time is it referred to.
$LINENO - Returns the current line number in the Bash script.
```

[Übungen](02e_scripts_ue)
