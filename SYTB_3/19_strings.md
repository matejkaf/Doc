---
title: Stringmanipulation
subtitle: bash scripting
tags: [lecture,3AHITS]
---



- [Advanced Bash-Scripting Guide: Chapter 10. Manipulating Variables](https://tldp.org/LDP/abs/html/string-manipulation.html)

Substitution (ähnlich `sed`):

```sh
${a/23/BB}             # Substitute "BB" for "23" in variable a.
```



The braces, in addition to delimiting a variable name are used for [parameter expansion](http://tiswww.case.edu/php/chet/bash/bashref.html#Shell-Parameter-Expansion) so you can do things like:

- Entfernen vom Ende einer Variable

  ```sh
  $ var="abcde"; echo ${var%d*}
  abc
  ```

  Das Pattern `d*` wird entfernt

- Make substitutions similar to `sed`

  ```sh
  $ var="abcde"; echo ${var/de/12}
  abc12
  ```
  
  Ersetzt das Pattern `de` mit `12`.

- Default Wert verwenden wenn eine Variable nicht existiert

  ```sh
  $ default="hello"; unset var; echo ${var:-$default}
  hello
  ```

- ...



# Pfade

Mit den Tools `basename` und `dirname`.

```sh
FULL_PATH=/home/user/doc.pdf
BASENAME=$(basename $FULL_PATH)
DIRNAME=$(dirname $FULL_PATH)
echo $BASENAME # doc.pdf
echo $DIRNAME  # /home/user
```



Ermitteln der file extension mit parameter expansion, `#` für entfernen eines pattern match am Anfang:

```sh
BASENAME=doc.pdf
echo ${BASENAME#*.} # pdf
```

Allerdings:

```sh
BASENAME=doc.test.pdf
echo ${BASENAME#*.} # test.pdf
```

weil `#` den kürzesten Match ergibt, verwende `##` für den längst möglichen Match (greedy)

```sh
BASENAME=doc.test..xyz.pdf
echo ${BASENAME##*.} # pdf
```

