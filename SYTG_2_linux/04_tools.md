---
title: Grundlagen UNIX shell
subtitle: Grundlegende bash Tools
tags: [lecture, unix, shell, bash,2AHITS_Teach ]
---



# Grundlegende Tools

## Testdaten

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



## Mehr über Optionen

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



## Filter

- `head` / `tail` / `sort`

Aufgabe: Sortiere die Einkaufsliste `shopping.txt`, gib dann nur die letzten 5 Zeilen aus.

```bash
$ cat shopping.txt | tail -n5
```

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

---

**Übung (middle)**

Gib von `shopping.txt` alles bis auf die ersten zwei und die letzten zwei Zeilen aus. Hinweis: die `-n` Option von `head` und `tail` erlaubt dies durch eine spezielle Angabe bei der Zeilenanzahl.

---


## Zählen

- `nl`: number lines

**Übung (Nummerieren)** Nummeriere `shopping.txt` in der Form (Links 10 Zeichen einrücken)

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

---

**Übung (word count)**  Ermittle welches File in `sampletextfiles` aus den meisten Zeilen besteht.
Die Ausgabe soll bestehen aus der Zeilenanzahl gefolgt vom Dateinamen.

---

Lösung:

```bash
$ wc --lines sampletextfiles/* | head -n-1 | sort --key=1 --general-numeric-sort | tail -n1
# -l number of lines
```

---



## Cut, tac, grep

- `cut` (filtert Spalten)
- `grep` (filtert Zeilen)

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

**Übung (Anzahl Werkstatt)**: Schreibe ein shell Kommando das in `klassenkassa.csv` die Anzahl der Einträge mit dem Text `Werkstatt` zählt.

---

**Übung (Werkstatt Einzeiler)**: Schreibe ein shell Kommando das in `klassenkassa.csv` alle Beträge mit dem Text `Werkstatt`  in folgender Form als Einzeiler ausgibt:

```
20.0+20.0+20.0+20.0
```

Hinweise:

- Verwende `grep` und `cut` um nur die Beträge zu filtern – diese stehen jedoch dann noch auf einzelnen Zeilen.
- Verwende `paste` um die Zeilen zusammenzufassen.

---

Lösung:

```bash
$ grep Werkstatt klassenkassa.csv | cut -d, -f3 | paste -s -d+
```

```
20.0+20.0+20.0+20.0
```

---

Erweiterung: Auswerten eines arithmetischen Ausdrucks mit python:

```bash
echo '1+2+3' | python3 -c 'print(eval(input()))'
```

> [!TODO] Das tatsächlich summieren der Werte wäre ein Beispiel für AWK



## Translate

`tr` Translate (einzelne Zeichen ersetzen/löschen)

Stelle das CSV File `klassenkassa.csv` lesbarer dar (`','` durch `'\t'` - Tabulator - erstetzen).

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

> [!2AHITS G1 19.03.2021]

> [!2AHITS G2 26.03.2021]



## Weiterführend

- [List of Unix commands](https://en.wikipedia.org/wiki/List_of_Unix_commands)



## Übungen

Verwende `od` um den Inhalt einer Textdatei im ASCII Code anzuzeigen.

```bash
$ od -A x -t x1z -v shopping.txt
```

Geht besser mit `xxd` (wenn installiert)