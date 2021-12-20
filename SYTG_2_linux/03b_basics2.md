---
title: stdin / stdout
subtitle: Grundlagen UNIX shell
tags: [lecture, unix, shell, bash,SYTG_2_Linux, 2AHITS ]
---

* TOC
{:toc}
[! 2AHITS G1 06.12.2021]

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



## echo in Dateien

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




## Quotes

Leerzeichen trennen für die shell unterschiedliche Komponenten der Befehlszeile. Möchte man das nicht so haben, z.B. bei Datei- und Ordnernamen mit Leerzeichen, sind Hochkommas zu verwenden (single oder double quotes).

```bash
$ mkdir 'Urlaubs Fotos'
$ ls
$ pwd
/root/Urlaubs Fotos
```

ls zeigt die `'` an diese gehören aber nicht zum Dateinamen, wie man an der Ausgabe von `pwd` sieht.

Quotes werden auch verwendet wenn Zeichen als Argumente verwendet werden die für die shell eine besondere Bedeutung haben, z.B. `<` `>` 

```sh
$ echo '>>> ACHTUNG <<<'

$ echo >>> ACHTUNG <<< 
zsh: parse error near `>'
```





## An Dateien anfügen

Mit `>>` wird an den bestehenden Datei-Inhalt angefügt.

```bash
$ echo Hallo Welt >hallo.txt
$ echo Zweite Zeile >>hallo.txt 
$ echo '>>> Dritte Zeile <<<'
$ echo -n 'Beginn der vierten Zeile, '
$ echo 'Ende der vierten Zeile'
$ cat <hallo.txt 
Hallo Welt
Zweite Zeile
```

Hinweis: `echo` fügt auch einen Zeilenumbruch ein die Option `-n` unterbindent dies.

Anmerkung: `cat` kann auch mit Filenamen (statt stdin) verwendet werden:

```bash
$ cat hallo.txt
$ cat hallo.txt test.txt
# Zusammenfügen (concatenation)
$ cat hallo.txt test.txt >hallotest.txt
```

[Übung "C Hallo Welt"](03b_basics2_ue)



