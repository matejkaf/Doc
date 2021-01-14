# Installieren

## Cygwin

<TODO></TODO>



## Ubuntu

Installieren [[How to Install GCC Compiler on Ubuntu 18.04](https://linuxize.com/post/how-to-install-gcc-compiler-on-ubuntu-18-04/)]:

```bash
# updates the package lists
$ apt update
# package 'build-essential' contains gcc and other tools
$ apt install build-essential
# ... 214 MB of additional disk space will be used.
```



# Compilieren und starten

Installation testen:

```bash
gcc --version
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



# C Programm in der shell

stdin / stdout

Ideen:

- Dateiumleitung und Pipes anhand eines C Programms demonstrieren (z.B. viel Text ausgeben und in more pipen)
- stdin aus einer Datei

- Kommandozeilenparameter, dabei demonstrieren was qoutes bewirken



