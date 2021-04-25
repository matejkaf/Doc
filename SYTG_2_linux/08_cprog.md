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
- `f`  ... finish (step-out)
- `p <variable>` ... Variablenwert anzeigen
- `q` beenden
- `l` ... list program
  - `l <line-nr>`
  - `l <function-name>`
- `where` `f` ... (frame) aktuell Programmzeile
- `display <variable>` ... Variablenwert ständig anzeigen

[[GDB - Quick Guide](https://www.tutorialspoint.com/gnu_debugger/gdb_quick_guide.htm)]

[[GDB frequent commands](https://www.tutorialspoint.com/gnu_debugger/gdb_commands.htm)]



Hexdump in gdb

```c++
char buf[100] = "\x01\x02\x03\x04String Data\xAA\xBB\xCC";
int x = 42;
printf("%d\n",x);

```

```
(gdb) x /20bx buf
0x7ffe25c16c80: 0x01    0x02    0x03    0x04    0x53    0x74    0x72    0x69
0x7ffe25c16c88: 0x6e    0x67    0x20    0x44    0x61    0x74    0x61    0xaa
0x7ffe25c16c90: 0xbb    0xcc    0x00    0x00
```

`x /20x buf` selbes ergebnis (d.h. `b` byte, ist default)



Siehe [stackoverflow](https://stackoverflow.com/questions/9233095/memory-dump-formatted-like-xxd-from-gdb)

Binär

```
x /4t buf
0x7ffe25c16c80: 00000001    00000010    00000011    00000100
```

Siehe [x command](https://visualgdb.com/gdbreference/commands/x)



## C Programm und stdin / stdout


- Dateiumleitung und Pipes anhand eines C Programms demonstrieren (z.B. viel Text ausgeben und in `more` pipen)
- stdin aus einer Datei umleiten



## Kommandozeilenparameter

```c++
int main(int argc, char *argv[]) {
  printf("%d\n",argc);
  for(int i=0; i<argc; i++) {
    printf("%s\n",argv[i]);
  }
}
```



Werte mit `atoi`:

```c++
int data = atoi(argv[1]);
for(int i=0; i<data; i++) {
  printf(".");
}
printf(".\n");
```



Mit Quotes

```bash
$ ./main aaa bbb "ccc ddd"
4
./main
aaa
bbb
ccc ddd
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



## Übungen

#### Übung (Addieren)

Schreibe ein C Programm das zwei über die Kommandozeile vorgegebene Zahlen **addiert**. 

Programmaufruf in der shell:

```bash
$ ./main 3 5
8
```



---

#### Übung (Rechner)

Schreibe ein C Programm das über die Kommandozeile die **4 Grundrechenarten** anbietet. 

Programmaufruf in der shell:

```bash
$ ./main 3 * 5
15
```



---

#### Übung (Rechner int+float)

Schreibe den Rechner so, dass dieser auch **optional mit Kommazahlen** rechnen kann.

Programmaufruf in der shell:

```bash
$ ./main 2 / 4 -f
0.5
```

**Erweiterung:** Eine Option die die Anzahl der darzustellenden Nachkommastellen bestimmt.