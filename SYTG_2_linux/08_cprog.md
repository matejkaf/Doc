---
title: Grundlagen UNIX shell
subtitle: C Programmieren
tags: [2AHITS_Teach]
---

## Installation

### Cygwin

```bash
$ ./setup-x86_64.exe --no-admin -q -P "gcc-g++"
```



### Ubuntu

Installieren [[How to Install GCC Compiler on Ubuntu 18.04](https://linuxize.com/post/how-to-install-gcc-compiler-on-ubuntu-18-04/)]:

```bash
# updates the package lists
$ apt update
# package 'build-essential' contains gcc and other tools
$ apt install build-essential
# ... 214 MB of additional disk space will be used.
```



## Replit.com

`C++` REPL. 

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



## Unix / Linux generell

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



## GNU Debugger (gdb)

```bash
# -g ... compile with debugging flags, for use with gdb
$ g++ main.cpp -g -o main
$ gdb main
```

gdb:

- `b main` ... Breakpoint auf `main`
- `r` /  `c`  ... run / continue
- `s` ... single-step
- `n` ... next (step-over)
- `f` `finish` ... step-out
- `p <variable>` ... Variablenwert anzeigen
- `q` beenden
- `l` ... list program
  - `l <line-nr>`
  - `l <function-name>`
- `where` `f` ... (frame) aktuell Programmzeile
- `display <variable>` ... Variablenwert ständig anzeigen

[[GDB - Quick Guide](https://www.tutorialspoint.com/gnu_debugger/gdb_quick_guide.htm)]

[[GDB frequent commands](https://www.tutorialspoint.com/gnu_debugger/gdb_commands.htm)]



## C Programm in der shell

stdin / stdout

Ideen:

- Dateiumleitung und Pipes anhand eines C Programms demonstrieren (z.B. viel Text ausgeben und in more pipen)
- stdin aus einer Datei umleiten

- Kommandozeilenparameter, dabei demonstrieren was qoutes und wildcards bewirken



