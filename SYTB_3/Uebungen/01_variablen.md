---
title: Variablen
subtitle: bash scripting
tags: [lecture,3AHITS]
---

[Ryans Tutorials – Bash Scripting Tutorial - 2. Variables](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php)

```sh
$ myvariable=Hello
$ anothervar=Fred
$ echo $myvariable $anothervar
```

Achtung: Keine Leerzeichen bei `=`

```bash
sampledir=/etc
ls $sampledir
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

Beispiel:

```bash
myvar='Hello World'
echo $myvar
newvar="More $myvar"
echo $newvar
newvar='More $myvar'
echo $newvar
```



# curly braces

Wenn kein Leerzeichen/Trennzeichen nach der Variable

Wenn der Name der Variable sonst nicht vom umgebenden Text abgetrennt werden kann.

```bash
NAME="myfile"
echo $NAME_001
echo ${NAME}_001
```

