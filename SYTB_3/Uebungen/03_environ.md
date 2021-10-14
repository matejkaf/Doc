---
title: Umgebungsvariablen
subtitle: bash scripting
tags: [lecture,3AHITS]
---

* TOC
{:toc}
```sh
$ env
...
```

Können in Skripts verwendet werden.

Spezielle Bedeutung:

- `$SHELL`
- `$PATH`
- `$PS1`
- `$PWD`

Liefern Informationen über das System und die shell.



# shell Prompt

Beschreibung des Prompt wird in `$PS1` gespeichert. [[Syntax](https://wiki.ubuntuusers.de/Bash/Prompt/)]

```bash
$ PS1='> '
# aktuelle Uhrzeit:
$ PS1='\t $'
$ PS1='\d $'
# Arbeitsverzeichnis: \w (lang) oder \W (kurz)
```



# PATH

Die PATH Variable bestimmt wo nach ausführbaren Programmen gesucht wird.

```bash
$ pwd
/place/with/the/file
$ PATH=$PATH:/place/with/the/file
```



Beispiel für PATH: C Programm schreiben,

- muss mit `./main` aufgerufen werden
- `PATH` so ändern, dass das nicht mehr notwendig ist
- `.bashrc` editieren. Geht aber in REPL nicht da `.bashrc` bei neu laden überschrieben wird.

