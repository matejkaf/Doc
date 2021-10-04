---
title: Grundlagen UNIX shell
subtitle: Elemementare bash Bedienung
tags: [lecture, unix, shell, bash,SYTG_2_Linux, 2AHITS ]
---

* TOC
{:toc}
> was ist eine shell, Command-Prompt, `date`, Optionen, Argumente, `echo`

Eine shell (Kommandozeile, Terminal) ist eine textorientierte Schnittstelle zum Computersystem.
Befehle können als Text eingetippt werden und als Rückmeldung kommt ebenfalls Text zurück.

Die Eingabe erfolgt nach dem **Prompt**. Durch *Enter* wird der Befehl ausgeführt.

Beispiel:

```bash
$ date
Thu Oct 24 13:33:20 UTC 2019
```



# Optionen

Folgen (durch Leerzeichen getrennt) auf den Befehl.


```bash
$ date -I
2019-10-24
```

Viele Befehle unterstützen auch die Option `--help` um eine Hilfe anzuzeigen.

```bash
$ date --help
```

Befehle und deren Optionen sind in `man pages` detailiert beschrieben. 

```bash
$ man date
```

Auch google: `man date` möglich



# Argumente

Auf Befehle können Argumente folgen die vom Befehl verarbeitet werden.

Beispiel: `echo` gibt das Argument einfach wieder aus.

```bash
$ echo Hallo Welt
Hallo Welt
```

Optionen und Argumente koennen gemeinsam verwendet werden.



# History

Mit den Pfeil-rauf und runter Tasten hat man Zugriff auf bereits vorher ausgeführte Befehle. 



# Tastenkürzel

- `Strg+a`: Anfang der Zeile
- `Strg+e`: Ende der Zeile
- `Strg+k`: Anzeige löschen
- `Strg+c`: Laufendes Programm abbrechen

[siehe hier](https://blog.ssdnodes.com/blog/cheatsheet-bash-shortcuts/)



# Filesystem

> Navigation im File System, mit `cd`, `ls`, `pwd`. Neue Verzeichnisse mit `mkdir` anlegen. Absolute und relative Pfade.

Die shell bietet als wesentlichen Teil einen Zugang zum Filesystem, d.h. Zugriff auf die Dateien und die Ordner (bzw. Verzeichnisse, engl.: directory, folder) in denen diese organisiert sind.

Das Filesystem ist hierarchisch organisiert. Es gibt ein Wurzelverzeichnis (manchmal root genannt). Dort sind Ordner und Dateien enthalten. Ordner können wiederum Ordner und Dateien enthalten und so weiter. Im Prinzip sind beliebig tief verschachtelte Ordner-Strukturen möglich.

Die shell befindet sich im **Arbeitsverzeichnis** (working directory). Ausgeführte Befehle wirken sich grundsätzlich in diesem Arbeitsverzeichnis aus.

Das Arbeitsverzeichnis kann mit `cd` gewechselt werden.

```bash
cd /etc
```

Dies wechselt in das Wurzelverzeichnis (der `'/'` ganz vorne) und von dort in das Verzeichnis mit dem Namen `etc`.

Mit `ls` (=list) wird der Inhalt des Arbeitsverzeichnis angezeigt.

```bash
$ ls
bin  games  include  lib  local  sbin  share  src
```

Wenn man in einen Ordner im aktuellen Arbeitsverzeichnis wechseln will.

```bash
$ cd bin
$ ls
```

Mit `pwd` (Print Working Directory) sieht man das aktuelle Arbeitsverzeichnis.

```bash
$ pwd
/usr/bin
```

Mit `cd ..` kommt man eine Verzeichnis-Ebene zurück.

```bash
$ cd ..
$ pwd
/usr
```

Mit `cd` alleine kommt man in das dem aktuellen Benutzer zugeordnete home directory.

```bash
$ cd
$ pwd
/root
```

Ein leeres File anlegen mit `touch`:

```bash
$ touch empty.txt
```

Neue Unterordner werden mit dem Befehl `mkdir` (Make Directory) erzeugt:

```bash
$ mkdir mydir
$ mkdir mysecondir
$ ls
```

darunter einen weiteren Unterordner erzeugen: 

```bash
$ cd mydir
# Tab Completion: automatische vervollständigung des Namens mit Tab
$ mkdir testdir
$ cd testdir
$ pwd
/root/mydir/testdir
$ mkdir testsubdir
$ cd testsubdir
/root/mydir/testdir/testsubdir
```

Unter einem **Pfad** versteht man die mit  `'/'` getrennte Position eines Ordners oder einer Datei innerhalb der gesamten Verzeichnisstruktur.

Man unterscheidet absolute und relative Pfade.

- Beginnt ein Pfad mit `'/'` so handelt es sich um einen **absoluten Pfad**, dieser geht immer vom Wurzelverzeichnis aus.

- Ein Pfad ohne  `'/'` am Anfang ist ein **relativer Pfad**, dieser hat als Ausgangspunkt das aktuelle Arbeitsverzeichnis.

Relative Pfade:

```bash
$ cd ../../../mysecondir
$ pwd
/root/myseconddir
```



# Weitere file Kommandos

Files und Ordner löschen.

`rm`, `rmdir`

Nicht leere Verzeichnisse löschen:

```bash
$ rm -r <dir_path>
```

Dateien kopieren

```bash
$ cp
# recursive
$ cp -r
```

Dateien/Directory bewegen/umbenennen.

```bash
$ mv xyz abcd.txt
# mv <alt> <neu>

# Die Datei hallo.txt in das Verzeichnis mydir verschieben:
$ mv hallo.txt mydir
```



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



# stdin / stdout

> `cat`, Umleitung stdout `>` und `>>`, Umleitung stdin `<`

Befehl der über die shell gestartet wird liest von stdin (standard input) und schreibt auf stdout (standard output).

Normalerweise:

- stdin : Tastatur
- stdout : Konsole/Bildschirm

Beispiel: `cat` – dieser Befehl liest Zeichen von der Tastatur und gibt sie am Bildschirm wieder aus.

```bash
$ cat
# Abbruch mit Strg-C
```

> genauer: Die Zeichen werden vom Terminal gesammelt, der Anwender sieht dabei seine Eingaben (das nennt sich *echo*). Erst beim drücken der Enter Taste werden die Daten an den laufenden `cat` Befehl übergeben.

Die shell kann stdin und stdout flexibel festlegen.

**Umleiten (redirect)** von stdout in eine Datei:

```bash
# stdin: Tastatur
# stdout: umgeleitet in Datei
$ cat >test.txt
# Abbruch mit Strg-C
$ ls
```

**Umleiten** einer Datei (stdin) auf das Terminal (stdout).

```bash
# stdin: von Datei
# stdout: Terminal
$ cat <test.txt
```

**Übung:** mit Hilfe von "cat" eine Kopie der Datei test.txt --> test2.txt

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

> Hinweis: echo fügt auch einen Zeilenumbruch ein!

`cat` kann auch mit Filenamen verwendet werden

```bash
$ cat hallo.txt
```



# Pipes

> `ls -l`, `more`, Pipes, `less`

Mit `ls -l` bekommt man mehr Information über den Verzeichnisinhalt

```bash
$ ls -l /etc
# Inhalt von '/etc' mit mehr Detail
```

Die Ausgabe kann man natürlich auch in eine Datei schreiben:

```bash
$ ls -l /etc >etc.txt
$ cat etc.txt
# cat kann auch selbst ohne Umleitung aus einer Datei lesen
# der Dateiname wird als Argument angegeben.
```

Wenn die Ausgaben sehr lang sind kann mit `more` nach einer Seite gestoppt werden.

```bash
$ more etc.txt
# weiter mit Leertaste
```

Das geht natürlich auch mit einer Dateiumleitung auf stdin

```bash
$ more <etc.txt
# weiter mit Leertaste
```

Mit Hilfe von Pipes können mehrere Befehle hintereinander ausgeführt werden, dabei wird stdout des einen Befehls zum stdin des nächsten Befehls. Die Befehle werden dabei durch das Pipe (`'|'`) Zeichen voneinander getrennt.

Beispiel:

```bash
$ ls -l /etc | more
```

Hinweis: Der Befehl `less` ist ähnlich wie `more` aber mit zusätzlichen Funktionen (Pfeiltasten, Bild rauf/runter, Abbruch mit `'q'` - quit).




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
