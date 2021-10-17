---
title: Variablen
subtitle: bash scripting
tags: [lecture,3AHITS]
---

[Ryans Tutorials – Bash Scripting Tutorial - 2. Variables](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php)

```sh
$ MYVAR=Hello
$ echo $MYVAR
```

Achtung: Keine Leerzeichen bei `=`

Großbuchstaben = Konvention

Verwenden von Variablen

```sh
FILE_NAME=test.txt
DIR=mydir
mkdir $DIR
echo "Das ist ein Text" > $DIR/$FILE_NAME
```



```bash
DIR1=hallo
DIR2=welt
FILE=test
EXTENSION=txt
mkdir $DIR1
mkdir $DIR1/$DIR2
touch $DIR1/$DIR2/$FILE.$EXTENSION
FILE_PATH=$DIR1/$DIR2/$FILE.$EXTENSION
echo "nur ein test" > $FILE_PATH
more $FILE_PATH
```



# Quotes

Leerzeichen dienen oft als Trenner zwischen mehreren Teilen eines Kommandos. Daher Variablenwerte mit Hochkomma definieren wenn diese Leerzeichen enthalten.

```bash
MYVAR="Hallo Welt"
echo $MYVAR
```

Es gibt einfache (single quotes) und doppelte Hochkomma (double quotes).

- Single quotes: Inhalt wird 1:1 übernommen
- Double quotes: Variablen werden eingesetzt (variable substitution)

Innerhalb von `"`: Variable substitution.

```sh
NAME=Franz
GREETING="Lieber $NAME Guten Morgen!"
echo $GREETING
```


```sh
STR1='$NAME Single quoted string'
STR2="$NAME Double quoted \$ string"
echo $STR1
echo $STR2
```

single: Text 1:1
double: Variable substitution

`$'string'` Syntax für `\n` usw.[[Quelle](https://stackoverflow.com/a/3182519)]

```sh
TEXT=$'Hallo\nWELT'
echo $TEXT # \n wird als Trenner interpretiert!
echo "$TEXT" # daher Quotes notwendig
```



# Curly Braces

Wenn kein Leerzeichen/Trennzeichen nach der Variable

Wenn der Name der Variable sonst nicht vom umgebenden Text abgetrennt werden kann.

```bash
FILE_NAME="myfile"
echo "$FILE_NAME_001"  # myfile_001
echo "$FILE_NAME_002"  # myfile_002
```


Geht nicht weil nach Variablen `FILE_NAME_001` gesucht wird.

Lösung: curly braces `{}` um den Variablennamen

```sh
FILE_NAME="myfile"
echo "${FILE_NAME}_001"  # myfile_001
echo "${FILE_NAME}_002"  # myfile_002
```

