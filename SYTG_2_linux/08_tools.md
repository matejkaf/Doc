---
title: Grundlagen UNIX shell
subtitle: Grundlegende bash Tools
tags: [lecture, unix, shell, bash,SYTG_2_Linux ]
---

* TOC
{:toc}

# Mehr über Optionen

- `head`

Optionen die das Verhalten von Kommandos verändern werden häufig benötigt.

Es gibt sie in 2 Varianten: **shorthand** und **longhand**. Shorthand ist nur ein Buchstabe, longhand ist ein Wort (leichter zu merken)

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

Datei `shopping.txt` für weitere Tests mit dem Tool `wget` downloaden:

```bash
$ wget https://matejkaf.github.io/Doc/SYTG_2_linux/testdata/shopping.txt
```

`head` gibt die ersten 10 Zeilen einer Textdatei aus.

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

**Übung: date**

**Übung: epoch**

Systeme können sich bei den Optionen unterscheiden. Gibt unterschiedliche Standards und Implementierungen (GNU/POSIX). Beispiel  `date` auf dem Mac (BSD) hat keine `-I` Option, cygwin/GNU (Mac: `gdate` falls installiert) schon.



# Pipes

> `ls -l`, `more`, Pipes, `less`

Mit `ls -l` bekommt man mehr Information über den Verzeichnisinhalt

```bash
$ ls -l /etc
```

Wenn die Ausgaben sehr lang sind kann mit `more` nach einer Seite gestoppt werden.

```bash
$ ls -l /etc >etc.txt
$ more <etc.txt # weiter mit Leertaste
# oder direkt die Datei angeben
$ more etc.txt
```

Mit Hilfe von **Pipes** können mehrere Befehle hintereinander ausgeführt werden (`$ cmd1 | cmd2 | cmd3`), dabei wird stdout des einen Befehls zum stdin des nächsten Befehls. Die Befehle werden dabei durch das Pipe (`'|'`) Zeichen voneinander getrennt.

Beispiel:

```bash
$ ls -l /etc | more
```

Hinweis: Der Befehl `less` ist ähnlich wie `more` aber mit zusätzlichen Funktionen (Pfeiltasten, Bild rauf/runter, Abbruch mit `'q'` - quit).

**Übung head**

**Übung: date input format**

