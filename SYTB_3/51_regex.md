---
title: Regular Expressions
---

regex = regular expression = Erweiterte String Suche

Beispiel `klassenkassa.csv`, alle  Namen die mit `W` beginnen (genauer: alle Zeilen die einen Text enthalten der mit W beginnt und mit einem Beistrich endet dazwischen kann ein beliebiger Text stehen)

```sh
$ cat klassenkassa.csv 
Müller,21.09.2019,3.0,Bus
Mayr,22.09.2019,20.0,Werkstatt
Gruber,21.09.2019,3.0,Bus
Wagner,18.09.2019,20.0,Werkstatt
Huber,15.09.2019,2.5,Kino
Wallner,22.09.2019,20.0,Werkstatt
Steiner,18.09.2019,20.0,Werkstatt
```



```bash
$ grep 'W.*,' klassenkassa.csv 
Wagner,18.09.2019,20.0,Werkstatt
Wallner,22.09.2019,20.0,Werkstatt
```

`.` ... beliebiges Zeichen

`*` ... Wiederholung (des vorhergehenden Zeichens)

Regular Expressions sind für viele Tools und Programmiersprachen verfügbar, z.B.:

- grep
- sed
- awk
- vi
- java
- python
- C#
- ...



Weiteres Beispiel (alle "1er" Tage):

```bash
$ grep '1\d\.' klassenkassa.csv
Wagner,18.09.2019,20.0,Werkstatt
Huber,15.09.2019,2.5,Kino
Steiner,18.09.2019,20.0,Werkstatt
```

`\d` ... Ziffer

`\.` ... Punkt (escaping mittels `\`)

Für alle 2er Tage:

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

Line anchors:

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



## Übersicht 

(BRE – Basic Regular Expressions)

[Quelle](https://unix.stackexchange.com/a/119906)

Features:

- `^` and `$` match only at the beginning and end of a line.
- `.` matches any character.
- `[…]` matches any one character listed inside the brackets (character set). If the first character after the opening bracket is a `^`, the characters which are not listed are matched instead. If `-` is between two characters, it denotes a range.
- Backslash before any of `^$.*\[` quotes the next character.
- `*` matches the preceding character or subexpression 0, 1 or more times.
- `\(…\)` is a syntactic group, for use with the `*` operator or backreferences and `\DIGIT` replacements.
- Backreferences `\1`, `\2`, … match the exact text matched by the corresponding group, e.g. `\(fo*\)\(ba*\)\1` matches `foobaafoo` but not `foobaafo`.

The following features are also standard, but missing from some restricted implementations:

- `\{*m*,*n*\}` matches the preceding character or subexpression between *m* to *n* times; *n* or *m*can be omitted, and `\{*m*\}` means exactly *m*.

- Inside brackets, [character classes](https://en.wikipedia.org/wiki/Regular_expression#Character_classes) can be used, for example `[[:alpha:]]` matches any letter.

- `\d` includes all digits (shorthand for `[:digit:]`)

- `\s` stands for “whitespace character” (shorthand for `[:space:]`)

  

The following are **common extensions** (especially in GNU tools), but they are not found in all implementations. Check the manual of the tool you're using.

- `\|` for alternation: `foo\|bar` matches `foo` or `bar`.
- `\?` (short for `\{0,1\}`) and `\+` (short for `\{1,\}`) match the preceding character or subexpression at most 1 time, or at least 1 time respectively.
- `\n` matches a newline, `\t` matches a tab, etc.
- `\w` matches any word constituent (short for `[_[:alnum:]]` but with variation when it comes to localisation) and `\W` matches any character that isn't a word constituent.
- `\<` and `\>` match the empty string only at the beginning or end of a word respectively; `\b`matches either, and `\B` matches where `\b` doesn't.



# ERE

Extended Regular Expressions. Mit Option `-r` bei `sed` und `-E` bei `grep`. Undokumentiert: `-E` geht auch bei `sed`.

- `+`: wie `*` aber mindestens einmal des vorhergehenden. 

- Ein `?` steht für 0 oder einmal des vorhergehenden.

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



## Übersicht ERE

[Quelle](https://unix.stackexchange.com/a/119906)

Extended regular expressions are codified by the [POSIX standard](http://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap09.html#tag_09_04). Their major advantage over BRE: it is not necessary to backslash the operators like `(` `)` `|` `?`.

It is the syntax used by `awk`, `grep -E` or `egrep`, GNU `sed -r`, and bash's `=~` operator. This syntax provides the following features:

- `^` and `$` match only at the beginning and end of a line.
- `.` matches any character (or any character except a newline).
- `[…]` matches any one character listed inside the brackets (character set). Complementation with an initial `^` and ranges work like in BRE. [Character classes](https://en.wikipedia.org/wiki/Regular_expression#Character_classes) can be used but are missing from a few implementations.
- `(…)` is a syntactic group, for use with `*` or `\DIGIT` replacements.
- `|` for alternation: `foo|bar` matches `foo` or `bar`.
- `*`, `+` and `?` matches the preceding character or subexpression a number of times: 0 or more for `*`, 1 or more for `+`, 0 or 1 for `?`.
- Backslash quotes the next character if it is not alphanumeric.
- `{*m*,*n*}` matches the preceding character or subexpression between *m* and *n* times (missing from some implementations); *n* or *m* can be omitted, and `{*m*}` means exactly *m*.
- Some common extensions as in BRE: `\*DIGIT*` backreferences (notably absent in awk); special characters `\n`, `\t`, etc.; word boundaries `\b` and `\B`, word constituents `\b` and `\B`, …



## Anhang

[RegEx101](https://regex101.com)

[pythex](https://pythex.org)

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

