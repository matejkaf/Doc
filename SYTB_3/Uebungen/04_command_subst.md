---
title: command substitution
subtitle: bash scripting
tags: [lecture,3AHITS]
---



Command substitution ermöglicht den Output eines Programms als Variablenwert zu verwenden. Die generelle Syntax ist `$(<CMD>)`.

```sh
$ myvar=$( ls /etc | wc -l )
$ echo There are $myvar entries in the directory /etc 
```

Newlines in der Ausgabe werden durch Leerzeichen ersetzt:

```sh
$ echo $( ls )
```



---

#### Übung (Zufälliges Wort)

Erstelle ein Skript das ein zufälliges Wort aus der [Wortliste](testdata/wortliste1000.txt) (1000 häufigste deutsche Wörter) ausgibt.

Hinweis: Das Komando `sed -n 5p` gibt vom Input nur die 5te Zeile aus. 




---

#### Übung (dated copy V1)

Create a script which will take a filename as its first argument and create a dated copy of the file. eg. if our file was named `file1.txt` it would create a copy such as `2021-10-29_file1.txt`. (To achieve this you will probably want to play with command substitution and the command **date**)



---

#### Übung (dated copy V2)

**Challenge:** To make it a bit harder, see if you can get it so that the date is after the name of the file (eg. `file1_2021-10-29.txt` (The command **basename** can be useful here.)



---

#### Übung (dated copy V3)

**Challenge:** Now see if you can expand the previous question to accept a list of files on the command line and it will create a named copy of all of them. (The command [xargs](https://ryanstutorials.net/linuxtutorial/bonus.php#xargs) may be useful here.)

---

