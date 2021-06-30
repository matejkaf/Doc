---
title: Beispiel für bash - Scripts
---

* TOC
{:toc}

## Welche shell läuft?

```bash
echo $SHELL
# oder
echo $0
```



## macOS - IP Adresse per command substitution einbauen

```bash
echo HOST_IP=$(ifconfig en0 | awk '/ *inet /{print $2}')
```



## Ein Zeilenumbruch in langen Befehlszeilen ist mit `\` möglich.

```bash
$ date \
> -I
2019-10-24
```



## Schnelles erstellen einer Textdatei

```bash
cat >test.txt
this is 
a test
^D
# ^D ... EOF (at beginning of new line), ^C ... SIGINT
```



## Nummerierte Verzeichnisse erzeugen

```bash
#!/bin/bash
# create_dirs.bash
for num in $(seq -w 01 50); do
    mkdir "$num"
done
```



Ein zusätzliches nummeriertes Verzeichnis:

```bash
#!/bin/bash
# -------------------------------------------------------
#  find last created directory: format NNNN
# -------------------------------------------------------
lastdir=$(ls -d [0-9][0-9][0-9][0-9] | tail -1)

# -------------------------------------------------------
#  create new sequential directory
# -------------------------------------------------------
newdir=$((++lastdir))
mkdir $(printf "%04u" $newdir)
```



## Alle Dateien eines Typs (extension) bewegen

```bash
#!/bin/bash

# search all subfolders for mp4 files and move all of them to the current folder
find . -mindepth 2 -type f  -name "*.mp4" -print -exec mv {} . \;
```



## Filtern nach Dateigröße

```bash
#!/bin/bash

# move all smaller mp4 files to ../fin
# larger ones to ../lager

maxsize=500000000 # 500 MB
files=(*.mp4)
filecount="${#files[@]}"

#echo $files
#echo $filecount

for (( i=0; i<$filecount; i++ ))
do
#>>>>>
filename="${files[$i]}"
filesize=$(stat -f%z "$filename")
echo "$filename $filesize"
if (( filesize > maxsize )); then
    mv "$filename" "../lager"
else
    mv "$filename" "../fin"
fi
#<<<<<
done
```



`stat -f%z` ist macOS spezifisch, Linux `stat -f%s`?



## Logfile mit System- und Dateizeiten

```bash
#
# create a log-file entry
#
currentDate=`date +"%d.%m.%Y %H:%M"` # 26.09.2019 11:33
mysqlFile=dump.tar.gz
termineFile=termine.csv

# https://stackoverflow.com/questions/12169710/formatted-modified-date-time-of-file-on-mac-bash

mysqlFileDate=`stat -f "%Sm" -t "%d.%m.%Y %H:%M" ${mysqlFile}`
termineFileDate=`stat -f "%Sm" -t "%d.%m.%Y %H:%M" ${termineFile}`

echo "${currentDate}: ${mysqlFile}(${mysqlFileDate}) ${termineFile}(${termineFileDate})" >> copy_dump_from_htl.log

# show the last 5 lines of logfile
tail -n 5 copy_dump_from_htl.log
```



## Teile von Filenamen löschen

```bash
for filename in ./*; do mv "./$filename" "./$(echo "$filename" | sed -e 's/to delete//g')";  done
```



## Alle .tex Files in einem Verzeichnis bearbeiten

```bash
#!/bin/sh
#
# alle .tex Files in einem Verzeichnis bearbeiten
#
for filename in *.tex; do
    [ -f "$filename" ] || break
    echo $filename "${filename%.*}.md"
    mv $filename "${filename%.*}.md"
    tex_to_md.bash "${filename%.*}.md"
done

```



## wget – Web Grabber

Download einer kompletten Website

```bash
$ wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://matejkaf.github.io/Doc/5AHELS.html
```

