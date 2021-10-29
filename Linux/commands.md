---
title: Linux Kommandos
---

* TOC
{:toc}

# small tools

`history` - zeigt die shell History an (shell built in)

`cal` - calendar (`cal 2020`, `cal 5 2020`)

`date` - Uhrzeit und Datum

`env` - listet alle shell umgebungs (*environment*) variablen

`export` - converts local variable to environment variable

`which` - zeigt pfad zum tool (`which ls`)

`whoami` - loggin name

`id` – Login/Group id

`hostname`

`alias` - listet alle Alias

`uname` - Systeminformation (`uname -a`)

`clear` (auch Ctrl-K)

`ascii` Zeige ASCII Tabelle (immer installiert? Nicht macOS)

`pwd`, `cd`

`touch`

`mkdir`

`tee` – read from standard input and write to standard output and files

`basename`, `dirname` – return filename or directory portion of pathname



# Tools

## ls

```bash
# -l Lang Format
# -h: human readable size
$ ls -lh /usr/bin/perl                        
-rwxr-xr-x 2 root root 11K Feb  4  2018 /usr/bin/perl

# auch versteckte Dateien
$ ls -a

# Zeige Directories und nicht deren Inhalt
$ ls -d S*

# Rekursiv
$ ls -R

# Sort by size
$ ls -lS

# Sort by modification time
$ ls -lt

# show all time information
$ ls --full-time

# -r ... reverse order


```



## man

Suche in man pages mit `/`, `n` für next.

Suche nach man pages: `man -f passwd`. Shows different sections. `man 5 passwd`.

`man -k copy` : searches both the names and descriptions of the man pages for a keyword



## file

```bash
$ file etc.txt 
etc.txt: ASCII text
```

Linux ist "extensionless" d.h. Dateiendungen sind ohne Bedeutung. 

> In other systems such as Windows the extension is important and the system uses it to determine what type of file it is. Under Linux the system actually ignores the extension and looks inside the file to determine what type of file it is.



## cp

```bash
$ cp [source] [destination]
# -v Verbose mode
# -i prompt before overwriting
# -n no overwrite
# -r copy directory
```



## mv (move, rename)

```bash
$ mv [source] [destination]
# -v Verbose mode
# -i prompt before overwriting
# -n no overwrite
```

Verschiebt auch Directories.



## rm

```bash
$ rm -i * # ask 
$ rm -r # delete directory
$ rmdir # delete directory (if empty)
```



## grep

Mit filename (`-H`) und Zeilennummer (`-n`)
```bash
$ grep -Hn ToDo *
```

Rekursiv (`-r`) + ignore case  (`-i`)
```bash
$ grep -rin searchstring *
```

Text in Files rekursiv suchen in Dateien mit Endung `md`

```sh
$ grep -r --include=\*.md summe2 .
# -l, --files-with-matches
#    Write only the names of files containing selected lines to standard output.
```

`*` wird escaped sonst shell globbing



## ps

Zeige Prozesse

```bash
$ sudo ps -elf
# -e selects all processes (not only current user)
# -l long format
# -f full
```



```bash
$ sudo ps –ejH
# show process tree
# nicht BSD/macOS
```



## mount / umount

```bash
# list mounted file systems
$ mount

$ mkdir second_drive

# mount drive B - Partition 1
$ sudo mount /dev/sdb1 ~/second_drive/

# unmount file system
$ sudo umount /dev/sdb1

```



## seq

```bash
$ seq -w 01 10
01
02
03
04
05
06
07
08
09
10
```



```bash
for num in $(seq -w 01 10); do
    mkdir "$num"
done
```



## xxd – hexdump

```bash
$ xxd backuptoonedrive.bash 
00000000: 2321 2f62 696e 2f62 6173 680a 0a23 2068  #!/bin/bash..# h
00000010: 7474 7073 3a2f 2f68 656c 702e 7562 756e  ttps://help.ubun
00000020: 7475 2e63 6f6d 2f63 6f6d 6d75 6e69 7479  tu.com/community
$ xxd -p backuptoonedrive.bash 
23212f62696e2f626173680a0a232068747470733a2f2f68656c702e7562
756e74752e636f6d2f636f6d6d756e6974792f4261636b7570596f757253
797374656d2f5441520a0a746172202d6376707a66202f566f6c756d6573
2f4672616e7a2f4f6e6544726976655f48544c2f4261636b7570732f446f
63756d656e74735f242864617465202b25595f256d5f25645f25485f254d
292e7461722e677a202d2d6f6e652d66696c652d73797374656d202e0a
```

Tool kann auch in der Gegenrichtung agieren.



## chmod

[ask ubuntu](https://askubuntu.com/questions/932713/what-is-the-difference-between-chmod-x-and-chmod-755)

```bash
chmod 755 
# is equal to (rwx r-x r-x)
chmod u=rwx,go=rx
# 755 means full permissions for the owner and read and execute permission for others
```



## su

substitute user identity

Gleichbleibende Umgebung (Variablen, etc.):

```sh
$ su user
```

Neue Umgebung (login shell) mit den Einstellungen des Users [[*](https://superuser.com/a/453989)]:

```sh
$ su - user
```



## du – disc usage

```
du -sh file_path
```

**Explanation**

- `du` (**d**isc **u**sage) command estimates file_path space usage 

- The options `-sh` are (from `man du`):

  ```
    -s, --summarize
           display only a total for each argument
  
    -h, --human-readable
           print sizes in human readable format (e.g., 1K 234M 2G)
  ```

  To check more than one directory and see the total, use `du -sch`:

  ```
    -c, --total
           produce a grand total
  ```

Kombination mit `find`:

> It works very nice with `find` e.g. to count the amount of space in specific subdirectories in current path: `$ find . -type d -name "node_modules" -prune -exec du -sh {} \;`

