---
title: Grundlagen UNIX shell
subtitle: grep, sed und Regular Expressions
---



## grep

Zeigt Zeilen die einen Text enthalten.

```bash
$ grep Gruber klassenkassa.csv       
Gruber,21.09.2019,3.0,Bus

$ grep Werkstatt klassenkassa.csv 
Mayr,22.09.2019,20.0,Werkstatt
Wagner,18.09.2019,20.0,Werkstatt
```

Sehr nützlich zum Filtern langer Ausgaben anderer Kommandos.

```bash
ifconfig | grep inet
```



## sed

stream editor, zum Ersetzen und Entfernen von Text

[GeeksforGeeks – Sed Command in Linux/Unix with examples](https://www.geeksforgeeks.org/sed-command-in-linux-unix-with-examples/)

`s/` = substitute

```bash
sed 's/besser/bessere/' sedtest.txt
```

Es wird das erste Vorkommen (pro Zeile) ersetzt:

```bash
$ echo "abc %-= def." | sed 's/abc/XYZ/'
XYZ %-= def.
```



n-tes Vorkommen:

```bash
sed 's/Beispiel/für/2' sedtest.txt
```

Nur in der n-ten Zeile:

```bash
sed '3 s/sinnlos/brauchbar/' sedtest.txt
```

Alle Vorkommen ersetzen:

```bash
sed 's/die/der/g' sedtest.txt
...

$ echo "abc %-= def. abc" | sed 's/abc/XYZ/g'
XYZ %-= def. XYZ
```



`d`=delete (Zeilen)

Entfernt die 3-te Zeile

```bash
sed '3d' sedtest.txt
```

Zeilen 3–6 entfernen:

```bash
sed '3,6d' sedtest.txt
```

Zeile 4 bis Ende:

```bash
sed '4,$d' sedtest.txt
```

Zeilen die einen Text enthalten:

```bash
sed '/Beispiel/d' sedtest.txt 
```



Ersten Buchstaben in jedem Wort groß schreiben

```bash
$ echo 'this troubles me' | sed  "s/\b\(.\)/\u\1/g"
```

[sed - grymoire](https://www.grymoire.com/Unix/Sed.html)

