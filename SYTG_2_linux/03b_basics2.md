---
title: Grundlagen UNIX shell II
subtitle: Elemementare bash Bedienung
tags: [lecture, unix, shell, bash,SYTG_2_Linux, 2AHITS ]
---

* TOC
{:toc}

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

[! 2AHITS G1 06.12.2021]

# stdin / stdout

> `cat`, Umleitung stdout `>` und `>>`, Umleitung stdin `<`

Befehl der über die shell gestartet wird liest von stdin (standard input) und schreibt auf stdout (standard output). Normalerweise:

- stdin : Tastatur
- stdout : Konsole/Bildschirm

Beispiel: `cat` – dieser Befehl liest Zeichen von der Tastatur und gibt sie am Bildschirm wieder aus.

```bash
$ cat
# Abbruch mit Strg-C
```

> genauer: Die Zeichen werden vom Terminal gesammelt, der Anwender sieht dabei seine Eingaben (das nennt sich *echo*). Erst beim drücken der Enter Taste werden die Daten an den laufenden `cat` Befehl übergeben.

Die shell kann stdin und stdout aber auch ganz flexibel festlegen.

**Umleiten (redirect)** von stdout in eine Datei mit `>`:

```bash
# stdin: Tastatur
# stdout: umgeleitet in Datei
$ cat >test.txt
# Abbruch mit Strg-C
$ ls
```

**Umleiten** einer Datei von stdin mit `<`.

```bash
# stdin: von Datei
# stdout: Terminal
$ cat <test.txt
```

[Übungen "Kopie mit cat" und "dirlist in File"](03b_basics2_ue)



## An Datei anfügen

Der Befehl `echo` gibt sein Argument auf stdout aus, durch stdout Umleitung kann eine Datei mit Textinhalt erzeugt werden.

```bash
$ echo Hallo Welt >hallo.txt
$ cat <hallo.txt 
Hallo Welt
```

Ist die Datei schon vorhanden wird allerdings der Inhalt überschrieben:

```bash
$ echo Hallo Welt Welt Welt>hallo.txt
$ cat <hallo.txt 
Hallo Welt Welt Welt
```

Mit `>>` wird an den bestehenden Datei-Inhalt angefügt.

```bash
$ echo Hallo Welt >hallo.txt
$ echo Zweite Zeile >>hallo.txt 
$ cat <hallo.txt 
Hallo Welt
Zweite Zeile
```

Hinweis: `echo` fügt auch einen Zeilenumbruch ein – Option `-n` um das zu unterbinden.

Anmerkung: `cat` kann auch mit Filenamen (statt stdin) verwendet werden:

```bash
$ cat hallo.txt
$ cat hallo.txt test.txt
# Zusammenfügen (concatenation)
$ cat hallo.txt test.txt >hallotest.txt
```

[Übung "C Hallo Welt"](03b_basics2_ue)






# Quotes

Leerzeichen trennen für die shell unterschiedliche Komponenten der Befehlszeile. Möchte man das nicht so haben, z.B. bei Datei- und Ordnernamen mit Leerzeichen, sind Hochkommas zu verwenden (single oder double quotes).

```bash
$ mkdir 'Urlaubs Fotos'
$ ls
$ pwd
/root/Urlaubs Fotos
```

ls zeigt die `'` an diese gehören aber nicht zum Dateinamen, wie man an der Ausgabe von `pwd` sieht.

Eine andere Möglichkeit zum Umgang mit Leerzeichen ist diese mit `\` zu "escapen". Tab completion fügt dies automatisch ein.

```bash
$ cd ..
$ ls
# ...
$ cd Urlaubs\ Fotos
$ pwd
$ cd ..
$ cd "Urlaubs Fotos" # double quotes
```

