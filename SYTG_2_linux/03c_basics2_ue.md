---
title: Grundlagen UNIX shell II
subtitle: Elemementare bash Bedienung (Übungen)
tags: [assignment, unix, shell, bash,SYTG_2_Linux, 2AHITS ]
---

#### Übung (Kopie mit cat)

Erstelle mit Hilfe von "cat" eine Kopie der Datei `test.txt` → `test2.txt`

---

#### Übung (dirlist in File)

Schreibe den Inhalt des Verzeichnisses `/etc`  in eine Datei mit dem Namen `etcdir.txt`.

---

#### Übung (C Hallo Welt)

Erstelle mit Hilfe von `echo` Befehlen eine Datei `hello.cpp` mit folgendem Inhalt: 

```c++
#include <iostream>

int main() {
  printf("\n\t*** Hallo Welt ***\n");
	return 0;
}
```

Compiliere und starte das C Programm mit folgendem Befehl in der Kommandozeile:

```sh
$ g++ -o hello hello.cpp;./hello
```

Hinweis: Verwende einfache Hochkommas rund um den mit `echo` auszugebenden Text (`echo 'text'`) ansonsten hat die shell "Schwierigkeiten" mit den Sonderzeichen `#`,`<`,`>` etc.

---

