---
title: Grundlagen UNIX shell
subtitel: Shell Scripts
---

Shell Scripts sind kleine Programme die durch die shell selbst ausgeführt werden. Diese sind Textdateien und enthalten shell Kommandos.

Ein shell script kann jedes shell Kommando enthalten. Umgekehrt kann jeder Teil eines Scripts auch direkt in der shell ausgeführt werden.

## Hello World Script


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
- warum `./` (`echo $PATH`)

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

## Variablen

### special Variables

Command line arguments (`$1`, `$2`)

- `$0` - The name of the Bash script.
- `$1`- `$9` - The first 9 arguments to the Bash script. (As mentioned above.)
- `$#` - How many arguments were passed to the Bash script.
- `$@` - All the arguments supplied to the Bash script.
- `$?` - The exit status of the most recently run process.
- `$$` - The process ID of the current script.
- `$USER` - The username of the user running the script.
- `$HOSTNAME` - The hostname of the machine the script is running on.
- `$SECONDS` - The number of seconds since the script was started.
- `$RANDOM` - Returns a different random number each time is it referred to.
- `$LINENO` - Returns the current line number in the Bash script.

```bash
#!/bin/bash
# A simple variable example
myvariable=Hello
anothervar=Fred
echo $myvariable $anothervar
echo
sampledir=/etc
ls $sampledir
```

## Quotes

Leerzeichen dienen oft als Trenner zwischen mehreren Teilen eines Kommandos.
Daher Variablenwerte mit Hochkomma definieren wenn diese Leerzeichen enthalten

```bash
myvar="Hallo Welt"
echo $myvar
```

Es gibt einfache (single quotes) und doppelte Hochkomma (double quotes).

- Single quotes: wird 1:1 übernommen
- Double quotes: Variablen werden eingesetzt (variable substitution)

Beispiel:

```bash
myvar='Hello World'
echo $myvar
newvar="More $myvar"
echo $newvar
newvar='More $myvar'
echo $newvar
```

curly braces:

Wenn der Name der Variable sonst nicht vom umgebenden Text abgetrennt werden kann.

```bash
name="myfile"
echo $name_001
echo ${name}_001
```



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

[Look at](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php#activities)


## User input - read

```bash
echo Hello, who am I talking to?
read varname
echo It\'s nice to meet you $varname
```

```bash
#!/bin/bash
# Ask the user for login details
read -p 'Username: ' uservar
read -sp 'Password: ' passvar
# -p ... show prompt
# -s ... hidden input
echo
echo Thankyou $uservar we now have your login details
```



## Arithmetic

[Bash Scripting Tutorial - 4. ArithmeticTutorial Sections ](https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php)

Mit `$((<expr>))`



```bash
#!/bin/bash
# Basic arithmetic using double parentheses
a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5))
echo $a # 8 - Leerzeichen sind nicht wichtig

b=$(( a + 3 ))
echo $b # 11 - ohne $ Zeichen

((b++))
# Hier kein $ !

b=$(( $a + 4 ))
echo $b # 12 - aber auch mit $ Zeichen

a=$(( 4 * 5 ))
echo $a # 20
```

Hinweis: Es gibt auch `let`  und `expr` mit ähnlicher Syntax.

Aufgabe:
- Skript das zufällige Zahlen erzeugt (`$RANDOM`)


## test Kommando

Zeigt im exit status (`$?`) das Ergebnis von Vergleichen. Grundlage für if Anweisungen in scripts.

-   `$?` ist 0: entspricht true
-   `$?` ist 1: entspricht false

Siehe [Linux test command](https://www.computerhope.com/unix/test.htm)

```bash
$ test 'xyz' = 'xyz'; echo $?
0
$ test 'xyz' = 'xy'; echo $?
1
```

Achtung die Leerzeichen sind wichtig:

```bash
$ test 'xyz'=='xyz'; echo $?
0
```

Andere Form mit `[]` 

```bash
$ [ 'xyz' = 'xyz' ]; echo $?
0
# Leerzeichen neben den [ ] !
```

Exit Status mit `&&` und `||` Operatoren:

```bash
$ test 100 -gt 99 && echo "Yes, that's true." || echo "No, that's false."

Yes, that's true.
```

> The right side of && will only be evaluated if the exit status of the left side is zero (i.e. true). || is the opposite: it will evaluate the right side only if the left side exit status is non-zero (i.e. false).



Aufgaben:

-   Schreibe eine Kommandozeile die den Text `Datei ist zu groß` ausgibt wenn die Datei mehr als 100kB hat.



## if statement

[Bash Scripting Tutorial - 5. If Statements](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)

[Conditions in bash scripting (if statements)](https://linuxacademy.com/blog/linux/conditions-in-bash-scripting-if-statements/)

```bash
#!/bin/bash
# Basic if statement
if [ $1 -gt 100 ]
then
	echo "Hey that's a large number."
	pwd
fi
date
```

Wie `test` Kommando.

Übersicht:

|              Operator | Description                                                  |
| --------------------: | :----------------------------------------------------------- |
|          ! EXPRESSION | The EXPRESSION is false.                                     |
|             -n STRING | The length of STRING is greater than zero.                   |
|             -z STRING | The lengh of STRING is zero (ie it is empty).                |
|     STRING1 = STRING2 | STRING1 is equal to STRING2                                  |
|    STRING1 != STRING2 | STRING1 is not equal to STRING2                              |
| INTEGER1 -eq INTEGER2 | INTEGER1 is numerically equal to INTEGER2                    |
| INTEGER1 -gt INTEGER2 | INTEGER1 is numerically greater than INTEGER2                |
| INTEGER1 -lt INTEGER2 | INTEGER1 is numerically less than INTEGER2                   |
|               -d FILE | FILE exists and is a directory.                              |
|               -e FILE | FILE exists.                                                 |
|               -r FILE | FILE exists and the read permission is granted.              |
|               -s FILE | FILE exists and it's size is greater than zero (ie. it is not empty). |
|               -w FILE | FILE exists and the write permission is granted.             |
|               -x FILE | FILE exists and the execute permission is granted.           |



```bash
#!/bin/bash
# else example
if [ $# -eq 1 ]
then
	nl $1
else
	nl /dev/stdin
fi
```



Aufgaben:

-   Ein Directory anlegen wenn dieses nicht existiert.
-   Create a Bash script which will take 2 numbers as command line arguments. It will print to the screen the larger of the two numbers.
-   Create a Bash script which will print a message based upon which day of the week it is (eg. 'Happy hump day' for Wedensday, 'TGIF' for Friday etc).



## Schleifen

[Bash Scripting Tutorial - 6. Loops](https://ryanstutorials.net/bash-scripting-tutorial/bash-loops.php)

### while

```bash
#!/bin/bash
# Basic while loop
counter=1
while [ $counter -le 10 ] # <=
do
	echo $counter
	((counter++))
done
echo All done
```

### for

Listen – Text mit Leerzeichen getrennt

```bash
#!/bin/bash
# Basic for loop
names='Stan Kyle Cartman'
for name in $names
do
	echo $name
done
echo All done
```

Ranges:

```bash
#!/bin/bash
# Basic range in for loop
for value in {1..5}
do
	echo $value
done
echo All done
```

Wildcards

```bash
for f in *.jpg
do
  echo $f
done
```

Siehe auch: [Looping over a directory of files using wildcards in Bash](https://www.moreofless.co.uk/bash-shell-linux-looping-directory-files-wildcards/)



## Quellen

-   [Ryans Tutorials – Bash Scripting Tutorial](https://ryanstutorials.net/bash-scripting-tutorial/)

