---
title: Umgebungsvariablen
subtitle: environment variables
---

Liefern Informationen über das System und die shell.

```bash
$ printenv
```

```
TERM_PROGRAM=Apple_Terminal
SHELL=/bin/bash
TERM=xterm-256color
USER=matejkafr
SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.k8iezSnEjX/Listeners
PATH=/Users/matejkafr/.npm-global/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/share/dotnet:~/.dotnet/tools:/Applications/Wireshark.app/Contents/MacOS
PWD=/Users/matejkafr
NODE_PATH=/Users/matejkafr/.npm-global/lib/node_modules
PS1=$ 
SHLVL=1
HOME=/Users/matejkafr
LOGNAME=matejkafr
LC_CTYPE=UTF-8
_=/usr/bin/printenv
```

```bash
$ echo $SHELL
...
$ echo $PATH
...
$ echo $PS1
...
```



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

oder auch mit command substitution

```bash
$ PATH=$PATH:$(pwd)
```



Beispiel für PATH: C Programm schreiben,

- muss mit `./main` aufgerufen werden
- `PATH` so ändern, dass das nicht mehr notwendig ist
- `.bashrc` editieren. Geht aber in REPL nicht da `.bashrc` bei neu laden überschrieben wird.



# C Programm Umgebungsvariablen lesen

```c++
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
  char* my_env_var = getenv("MY_ENV_VAR");

  if(my_env_var)
    printf("Var found: %s", my_env_var );
  else
    printf("Var not found.");                
}
```

