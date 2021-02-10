---
title: Grundlagen UNIX shell
description: Elemementare bash Bedienung
cmds: ['md_html.bash']
tags: [lecture, unix, shell, bash ]
---



# Grundlagen

> was ist eine shell, Command-Prompt, `date`, Optionen, Argumente, `echo`

Eine shell (Kommandozeile, Terminal) ist eine textorientierte Schnittstelle zum Computersystem.
Befehle können als Text eingetippt werden und als Rückmeldung kommt ebenfalls Text zurück.

Die Eingabe erfolgt nach dem **Prompt**. Durch *Enter* wird der Befehl ausgeführt.

Beispiel:

```bash
$ date
Thu Oct 24 13:33:20 UTC 2019
```



## Optionen

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



## Argumente

Auf Befehle können Argumente folgen die vom Befehl verarbeitet werden.

Beispiel: `echo` gibt das Argument einfach wieder aus.

```bash
$ echo Hallo Welt
Hallo Welt
```

Optionen und Argumente koennen gemeinsam verwendet werden.



## History

Mit den Pfeil-rauf und runter Tasten hat man Zugriff auf bereits vorher ausgeführte Befehle.



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
rm -r
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


# Testdaten

Download eines **git Repositories** 

git: source control system, Verwaltung von Dateien

**Zielrechner:**

cygwin Installation von git:

```bash
$ cd /
$ ./setup-x86_64.exe --no-admin -q -P git
$ git --version
```

git Repository klonen:

```bash
$ git clone https://github.com/matejkaf/sytg2-testdata
```

Es gibt viele Repos (meist für Source Code):

```bash
$ git clone https://github.com/iryndin/10K-Most-Popular-Passwords
```

**Quellrechner:**

```bash
$ git init
$ git add .
$ git commit -m "start"
$ git remote add origin https://github.com/matejkaf/sytg2-testdata.git
$ git branch -M main
$ git push -u origin main
```



# Mehr über Optionen

- `head`

Optionen die das Verhalten von Kommandos verändern werden häufig benötigt.

Es gib sie in 2 Varianten: **shorthand** und **longhand**. Shorthand ist nur ein Buchstabe, longhand ist ein Wort (leichter zu merken)

```bash
$ ls -a    # zeigt auch verborgene Dateien
$ ls --all  # longhand von -a
```

shorthand können verbunden werden
```bash
$ ls -l -a
$ ls -la
```

Weiteres Beispiel für Optionen: das `head` Kommando.

Head gibt die ersten 10 Zeilen einer Textdatei aus.

```bash
$ cat shopping.txt
$ head shopping.txt
```

Die Option `-n` legt die Anzahl der Zeilen fest.

```bash
$ head -n3 shopping.txt
```

Hier werden 3 Zeilen ausgegeben. Diese Zusatzangabe zu einer Option nennt man Argument.

Zwischen Option und Argument ist auch ein Leerzeichen erlaubt:

```bash
$ head -n 3 shopping.txt
```

Die long option von `-n` ist `--lines`, Argumente werden mit `=` angegeben.

```bash
$ head --lines=3 shopping.txt
```

Welche Optionen/Argumente unterstützt ein Kommando?  `--help` oder `man` nutzen.

---

**Übung (head)**
Versuche zu verstehen was das folgender shell Ausdruck macht:

```bash
$ head --help | head -n12
```


---

**Übung (date)**

Verwende Optionen von `date` damit die Ausgabe des Datums und der Uhrzeit in der Form `30.10.20 09:15` erfolgt.

---



Systeme können sich bei den Optionen unterscheiden. Gibt unterschiedliche Standards und Implementierungen (GNU/POSIX). Beispiel  `date` auf dem Mac (BSD) hat keine `-I` Option, cygwin/GNU (Mac: `gdate` falls installiert) schon.



# Filter

- `head` / `tail` / `sort`

Aufgabe: Sortiere die Einkaufsliste `shopping.txt`, gib dann nur die letzten 5 Zeilen aus.

```bash
$ cat shopping.txt | tail -n5
```

> [!2AHITS G1 29.01.2021]

Erweiterung: verwende cat.

```bash
$ cat shopping.txt | sort | tail -n5
```

Sortiere den Inhalt von `shopping.txt` kombiniert mit `shopping2.txt`. Hinweis: `cat` kann mehr als eine Datei auf stdout ausgeben.

```bash
cat shopping.txt shopping2.txt | sort | tail -n15
```

---

**Übung (Sort)**

-  Sortiere in umgekehrter Reihenfolge (Option von sort)
-  Sortiere nach der 2ten Spalte (Obstnamen)
- Gib die letzten 7 Elemente aus die sich durch alphabetisch absteigende Reihenfolge des Personennamens ergeben (Z zuerst). Diese 7 Elemente sollen aufsteigend sortiert nach Obstname ausgegeben werden.


[!2AHITS G2 05.02.2021]

---

**Übung (middle)**

Gib von `shopping.txt` alles bis auf die ersten zwei und die letzten zwei Zeilen aus. Hinweis: die `-n` Option von `head` und `tail` erlaubt dies durch eine spezielle Angabe bei der Zeilenanzahl.

---



# Zählen

- `nl`: number lines

Aufgabe: Nummeriere `shopping.txt` in der Form (Links 10 Zeichen einrücken)
```
         1. Fred apples 20
         2. Susy oranges 5
         3. Mark watermellons 12
         4. Robert pears 4
         5. Terry oranges 9
```

```bash
$ nl -s '. ' -w 10 shopping.txt
```

- `wc`: word count

Aufgabe:  Ermittle welches File in `sampletextfiles` aus den meisten Zeilen besteht.
Die Ausgabe soll bestehen aus der Zeilenanzahl gefolgt vom Dateinamen.

Lösung:

```bash
$ wc -l sampletextfiles/* | sort | tail -n2 | head -n1
# -l number of lines
```



# Cut, uniq, tac, grep

- `cut` (filtert spalten)
- `uniq` (report or filter out repeated lines in a file)
- `tac` (concatenate and print files in reverse, cat/tac)

```bash
$ cut -d , -f 2 klassenkassa.csv
# -d , ... Beistricht als delimiter (Standard: TAB)
# -f 2 ... 2tes Feld wählen
```

`grep`

Zeigt nur Zeilen die einen Text enthalten.

```bash
$ grep Gruber klassenkassa.csv       
Gruber,21.09.2019,3.0,Bus

$ grep Werkstatt klassenkassa.csv 
Mayr,22.09.2019,20.0,Werkstatt
Wagner,18.09.2019,20.0,Werkstatt
```



---

**Übung (Anzahl Werkstatt)**

Schreibe ein shell Kommando das in `klassenkassa.csv` die Anzahl der Einträge mit dem Text `Werkstatt` zählt.

---

**Übung (Werkstatt Einzeiler)**

Schreibe ein shell Kommand das in `klassenkassa.csv` alle Beträge mit dem Text `Werkstatt`  in folgender Form als Einzeiler ausgibt:

```
20.0+20.0+20.0+20.0
```

Hinweise:

- Verwende `grep` und `cut` um nur die Beträge zu filtern – diese stehen jedoch dann noch auf einzelnen Zeilen.
- Verwende `paste` um die Zeilen zusammenzufassen.

Lösung:

```bash
$ grep Werkstatt klassenkassa.csv | cut -d, -f3 | paste -s -d+
20.0+20.0+20.0+20.0
```

Auswerten eines arithmetischen Ausdrucks mit python:

```bash
echo '1+2+3' | python3 -c 'print(eval(input()))'
```

> [!TODO] Das tatsächlich summieren der Werte wäre ein Beispiel für AWK



# Translate

`tr` Translate (einzelne Zeichen ersetzen/löschen)

Stelle das CSV File `klassenkassa.csv` lesbarer dar (`','` durch `'\t'` - Tabulator - erstetzen ).

```bash
$ cat klassenkassa.csv | tr ',' '\t'
```

Mehr Beispiele siehe [tr command in Unix/Linux with examples](https://www.geeksforgeeks.org/tr-command-in-unix-linux-with-examples/).



## sed (stream editor)

[Sed Command in Linux/Unix with examples](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)

```bash
$ echo "hello there"
hello there
$ echo "hello there" | sed "s/hello/hi/"
hi there
```

- `s` = substitute

```bash
$ echo "hello there" | sed "s/hello/hi/" | sed "s/there/robots/"
hi robots
```



# Weiterführend

- [List of GNU Core Utilities commands](https://en.wikipedia.org/wiki/List_of_GNU_Core_Utilities_commands)



# Übungen

Verwende `od` um den Inhalt einer Textdatei im ASCII Code anzuzeigen.

```bash
$ $ od -A x -t x1z -v shopping.txt
```

