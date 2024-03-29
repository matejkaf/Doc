---
title: Beispiele für bash Scripts
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



## Alle Verzeichnisse löschen

[remove all directories (and contents) but not files in pwd](https://superuser.com/a/713745)

```sh
$ find -mindepth 1 -maxdepth 1 -type d -exec rm -r {} \;
# gfind on mac GNU find!
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
    [ -f "$filename" ] || break  # if exists and is regular file
    echo $filename "${filename%.*}.md"
done

```



## wget – Web Grabber

Download einer kompletten Website

```bash
$ wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://matejkaf.github.io/Doc/5AHELS.html
```



## sed

In Markdown file alle

```
**Übung (Zeitrechnung):**
```

in

```
#### Übung (Zeitrechnung)
```

wandeln:

```sh
$ gsed -r "s/\*\*(Übung.*):\*\*/#### \1/" challenge01.md >challenge01_.md
$ -r, --regexp-extended
```

Oder inplace mit `-i`

```sh
$ gsed -i -r "s/\*\*(Übung.*):\*\*/#### \1/" challenge01.md
```

Ersetze alle `$$` denen mindestens ein Buchstabe folgt mit `$`

```sh
$ gsed -i -r 's/\$\$(.)/\$\1/g' xyz.md
```



## cURL

Länge einer Website

```sh
$ curl --head --silent google.com | grep 'Content-Length' | cut -d ' ' -f 2
219
```





## xargs

Erstellt ein neues Kommando aus dem Output eines anderen Kommandos.

- [12 Practical Examples of Linux Xargs Command for Beginners](https://www.tecmint.com/xargs-command-examples/)

- [Linux and Unix xargs command tutorial with examples](https://shapeshed.com/unix-xargs/)

grep ergibt alle Pfade mit einem bestimmten Inhalt, für jedes davon `wc` anwenden.

```sh
$ ggrep -r -l --include=\*.md mathjax.org . | xargs wc
```

```
      94     395    3562 ./Cryptography/python/07_hmac.md
     102     461    3342 ./Cryptography/python/09_block_cipher_manipulation.md
     118     491    4051 ./Cryptography/07_pubkey_math.md
...
     224     970    7881 ./Cybersecurity_3/lecture/06_passwoerter.md
      48     186    1754 ./Java_3/04_Arrays_en/07_Arrays_ue_weg.md
     116     724    5452 ./Java_3/04_Arrays_en/15_Arrays_Polynom.md
    3838   14030  104491 total
```

sed auf einem bestimmten Satz von Dateien ausführen

```sh
ggrep -r -l --include=\*.md mathjax.org . | xargs gsed -i -r 's/\$\$(.)/\$\1/g'
```

Alle Dateien mit Endung `md` die den Text `mathjax.org` beinhalten öffnen:

```sh
ggrep -r -l --include=\*.md mathjax.org . | xargs open
```

Mit der Option `-I` werden mehrere Kommandos generiert nicht nur eines.

