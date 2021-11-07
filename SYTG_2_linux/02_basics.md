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

[! 2AHITS G1 11.10.2021]

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

Übung ["Directories und Files"](02_basics_ue).



# Weitere file Kommandos

Files und Ordner **löschen**.

`rm`, `rmdir`

Nicht leere Verzeichnisse löschen:

```bash
$ rm -r <dir_path>
```

Dateien **kopieren**

```bash
$ cp
# recursive
$ cp -r
```

Dateien/Directory **bewegen**/**umbenennen**.

```bash
$ mv xyz abcd.txt
# mv <alt> <neu>

# Die Datei hallo.txt in das Verzeichnis mydir verschieben:
$ mv hallo.txt mydir
```

[Übung "Bewegen und Kopieren"](02_basics_ue)

