---
title: command substitution
subtitle: Übungen bash scripting
tags: [assignment,3AHITS]
---

Löse alle Aufgaben mit Hilfe von command substitution.



#### Übung (Zufälliges Wort)

Erstelle ein Skript das einen Satz aus 5 zufälligen Wörtern bildet, z.B.:

```
richtig ganzen Kilometer auf Mittel.
```

Wähle die Wörter aus der [Wortliste](testdata/wortliste1000.txt) (1000 häufigste deutsche Wörter).

Hinweis: Das Komando `sed -n 5p` gibt vom Input bspw. nur die 5te Zeile aus. 

Hinweis: Berechnungen (`+`, `-`, `*`, `/`, `%`) können mit der Syntax `$(( EXPR ))` durchgeführt werden.

Erweiterung: Das Skript soll auch die Anzahl der in der Wortliste enthaltenen Wörter ermitteln. D.h. die Konstante 1000 soll im Skript nicht vorkommen.




---

#### Übung (dated copy V1)

Create a script which will take a filename as its first argument and create a dated copy of the file. eg. if our file was named `file1.txt` it would create a copy such as `2021-10-29_file1.txt`. (To achieve this you will probably want to play with command substitution and the command `date`)



---

#### Übung (dated copy V2)

**Challenge:** To make it a bit harder, see if you can get it so that the date is after the name of the file (eg. `file1_2021-10-29.txt` (Hint: Use `cut` to seperate filename from extension)



---

#### Übung (dated copy V3)

**Challenge:** Now see if you can expand the previous question to accept a list of files on the command line and it will create a named copy of all of them. (Hint: The command [xargs](https://ryanstutorials.net/linuxtutorial/bonus.php#xargs) may be useful here.)

---

