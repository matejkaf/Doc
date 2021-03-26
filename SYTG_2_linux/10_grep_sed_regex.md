---
title: Grundlagen UNIX shell
subtitle: grep sed und Regular Expressions
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



## Regular Expressions

= Erweiterte Suche

Beispiel `klassenkassa.csv`, alle Namen mit `W`

```bash
$ grep 'W.*,' klassenkassa.csv 
Wagner,18.09.2019,20.0,Werkstatt
Wallner,22.09.2019,20.0,Werkstatt
```

`.` ... beliebiges Zeichen

`*` ... Wiederholung



```bash
$ grep '1\d\.' klassenkassa.csv
Wagner,18.09.2019,20.0,Werkstatt
Huber,15.09.2019,2.5,Kino
Steiner,18.09.2019,20.0,Werkstatt
```

`\d` ... Ziffer

`\.` ... Punkt (escaping mittels `\`)

Obiges Beispiel: alle 1er Tage. Für alle 2er Tage:

```bash
$ grep '2\d\.' klassenkassa.csv
Müller,21.09.2019,3.0,Bus
Mayr,22.09.2019,20.0,Werkstatt
Gruber,21.09.2019,3.0,Bus
Wagner,18.09.2019,20.0,Werkstatt
Wallner,22.09.2019,20.0,Werkstatt
Steiner,18.09.2019,20.0,Werkstatt
```

Match auch durch das Jahr. Verbesserung der regex:

```bash
grep '2\d\.\d\d' klassenkassa.csv
Müller,21.09.2019,3.0,Bus
Mayr,22.09.2019,20.0,Werkstatt
Gruber,21.09.2019,3.0,Bus
Wallner,22.09.2019,20.0,Werkstatt
```

Auch sed unterstützt regex

```bash
$ echo '1234ccbbaa1234' | sed 's/cc..aa/XYZ/'
1234XYZ1234
$ echo '1234ccWWaa1234' | sed 's/cc..aa/XYZ/'
1234XYZ1234
```

Gruppe von Zeichen `[]`. Matched irgendein Zeichen aus der Gruppe

```bash
$ echo '1234ccbbaa1234' | sed 's/[ab]/X/'
1234ccXbaa1234
```

Mit `^` kann die Gruppe negiert werden. `-` ermöglicht *ranges*.

```bash
$ echo 'ksuhFljslK' | sed 's/[^a-z]/X/'
ksuhXljslK
```

Ein `*` matched beliebig viele Wiederholungen des vorhergehenden Zeichens

```bash
$ echo '1234aaaaaa1234' | sed 's/aa*/X/'

# '*' matched auch 0 Wiederholungen
$ echo '1234aaaaaa1234' | sed 's/a*/X/'
X1234aaaaaa1234
```

`\.` matched einen Punkt.  `&` im replacement string ist der 'match'.

```bash
$ echo 'Version V12.51 / Dec 2019' | gsed 's/V[0-9]*\.[0-9]*/(&)/'
Version (V12.51) / Dec 2019
```

mit der `-o` Option von grep wird nur der gematchte Teilstring ausgegeben:

```bash
$ echo 'Version V12.51 / Dec 2019' | grep -o 'V[0-9]*\.[0-9]*'
V12.51
```

Line anchors

- **^** – match beginning of line.
- **$** – match end of line.

```bash
$ echo 'aa bb aaaa' | sed 's/aa*$/X/'
aa bb X
# Match nur wenn am Anfang
$ echo 'aa bb aaaa' | sed 's/bb/X/'
aa X aaaa
$ echo 'aa bb aaaa' | sed 's/^bb/X/'
aa bb aaaa
```



## ERE

Extended Regular Expressions. Mit Option `-E` bei `sed` und `grep`.

`+` wie `*` aber mindestens einmal. Ein `?` steht für 0 oder einmal.

```bash
$ echo '1234aaaaaa1234' | sed -E 's/a+/X/'
1234X1234
```

`|` für Alternativen

```bash
$ echo 'abcdAAefgBBBhijk' | sed -E 's/AA|BBB/X/'
abcdXefgBBBhijk
$ echo 'abcdBBBefgAAhijk' | sed -E 's/AA|BBB/X/'
abcdXefgAAhijk
```

`()`: Syntaktische Gruppe

```bash
$ echo '1234ccaabbccccaaccbb1234 ' | sed -E 's/(aa|bb|cc)+/X/'
1234X1234
```

`\1`, `\2`, backreferences auf die entsprechende syntaktische Gruppe - enthalten den gematchten Text.

```bash
$ echo 'Ajfhl1234' | sed -E 's/^(A|B)[a-z]*([0-9]+)$/\2/'
1234
```



## Anhang

[Online Tester](https://regex101.com)

[sed - grymoire](https://www.grymoire.com/Unix/Sed.html)

[stackoverflow - gute Übersicht BRE vs. ERE](https://unix.stackexchange.com/questions/119905/why-does-my-regular-expression-work-in-x-but-not-in-y)

[POSIX BRE/ERE](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html#tag_09_03)

[.NET Regular Expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions?view=netframework-4.8)

## Aufgaben

- [Coding Game](https://www.codingame.com/playgrounds/218/regular-expressions-basics/introduction)
- Datum re-formatieren von `MM/TT/YYYY` auf `TT.MM.YYYY`. `01/12/2020`-> `12.01.2020`
- [RegexONE](https://regexone.com)
- [RegexGolf](https://alf.nu/RegexGolf)
- [Regex Cross­word](https://regexcrossword.com)
- Log-Files siehe directory `log_files`
- 