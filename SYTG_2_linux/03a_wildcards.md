---
title: Wildcards
subtitle: Elemementare bash Bedienung
tags: [lecture, unix, shell, bash, SYTG_2_Linux, 2AHITS ]
---



# Wildcards

Um mehrere Files auf einmal anzugeben

- `*` mehrere Zeichen
- `?` einzelnes Zeichen
- `[]` einzelnes Zeichen aus mehreren Möglichkeiten
- `[^]` Negation

```bash
ls b*
ls /home/ryan/linuxtutorialwork/*.txt
ls ?i*
ls *.???
ls [sv]*
ls *[0-9]*
ls [^a-k]*
```

`cd /bin` ist auch gut für Beispiele.

```bash
# Alle Dateien die mit l beginnen:
$ cd /lib
$ ls l*
# * steht fuer beliebige Zeichenfolge

# Alle Dateien mit einer bestimmten Dateiendung:
$ ls *.o

# Kann auch mehrfach verwendet werden
$ ls a*.o

# ? steht fuer ein einzelnes Zeichen
# Beispiel
$ ls lib?.a
libc.a  libg.a  libm.a

# [] fuer Liste mit erlaubten Buchstaben
$ ls lib[cg].a
libc.a  libg.a
# Der gesamte [] Ausdruck steht stellvertretend fuer einen einzigen Buchstaben.

# Negation moeglich
$ ls lib[^cg].a
libm.a
```

Curly Braces Expansion:

```sh
$ ls -l image.{jpg,png}
$ mv *{.py,.sh} <folder>
```

```sh
$ mkdir test{0..9}
$ ls
test0	test1	test2	test3	test4	test5	test6	test7	test8	test9
```



## Übungen

TODO