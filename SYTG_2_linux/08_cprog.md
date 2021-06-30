---
title: Grundlagen UNIX shell
subtitle: C Programmieren
tags: [2AHITS_Teach]
---

* TOC
{:toc}

# Installation

## Cygwin

```bash
$ ./setup-x86_64.exe --no-admin -q -P "gcc-g++"
```



## Ubuntu

Installieren [[How to Install GCC Compiler on Ubuntu 18.04](https://linuxize.com/post/how-to-install-gcc-compiler-on-ubuntu-18-04/)]:

```bash
# updates the package lists
$ apt update
# package 'build-essential' contains gcc and other tools
$ apt install build-essential
# ... 214 MB of additional disk space will be used.
```



# Replit.com

`C++` REPL

```c++
#include <iostream>

int main() {
  printf("Hello World!\n");
}
```

In der shell:

```bash
$ g++ main.cpp -o program
$ ./program
```



# Unix / Linux generell

Installation testen:

```bash
gcc --version
g++ --version
```

Hallo Welt in C:

```c
#include <stdio.h>
int main()
{
  printf ("Hello World!\n");
  return 0;
}
```

```bash
$ mkdir hello
$ cd hello
$ nano hello.c
$ gcc hello.c -o hello
$ ls
$ ./hello
```



# Rückgabewert von main

```c++
int main() {
  printf("Hello World!\n");
  return 10; // exit status, 0 ... kein Fehler, 
}
```

```bash
$ g++ main.cpp -o programm
$ ./programm 
Hello World!
$ echo $?
3
```



# Arbeiten mit `$?`

shell scripts sind Dateien mit shell Befehlen. Auch Variablen, if-Anweisungen und Schleifen sind möglich.

Beispiel bash Script für Compiler Start und ausführen des Programms wenn keine Fehler aufgetreten sind.

```bash
echo "Compiler wird gestartet"
g++ hello.cpp -o hello
# Compilevorgang fehlerfrei?
if [ $? -eq 0 ]
then
  ./hello
  echo $?  # exit status von hello
else
  echo "Compiler Fehler: $?"
fi
```





# C Programm und stdin / stdout


- stdin aus einer Datei ins Programm umleiten
- Dateiumleitung und Pipes anhand eines C Programms demonstrieren (z.B. viel Text ausgeben und in `more` pipen)

[!2AHITS Grp1 21.05.2021]



# Kommandozeilenparameter

```c++
int main(int argc, char *argv[]) {
  printf("%d\n",argc);
  for(int i=0; i<argc; i++) {
    printf("%s\n",argv[i]);
  }
}
```

Mit Quotes

```bash
$ ./main aaa bbb "ccc ddd eee"
4
./main
aaa
bbb
ccc ddd eee
```

Mit Wildcards

```bash
$ ls *
main  main.cpp
$ ./main  *
3
./main
main
main.cpp
```

Alle Kommandozeilenargumente sind Strings, sollen diese als `int` oder `float` weiterverwendet werden gibt es die Funktionen  `atoi` (ASCII to inteteger) sowie `atof` (ASCII to float):

```c++
#include <stdlib.h>     /* atoi */
...
int data = atoi(argv[1]);
for(int i=0; i<data; i++) {
  printf(".");
}
printf(".\n");
```



Optionen erkennen durch Stringvergleich mit `strcmp`, z.B. Anzahl der Zeilen die ein Programm ausgeben soll.

```bash
$ ./main -n 20
```

Default: 10

```c++
char nrLinesOption[] = "-n";
int nrLines = 10;  
if( strcmp(nrLinesOption,argv[1]) == 0 ) {
  nrLines=atoi(argv[2]);
}

for(int i=0;i<nrLines;i++) {
  printf("line %d\n", i);
}
```




