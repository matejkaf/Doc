---
title: test Kommando
subtitle: bash scripting
tags: [lecture,3AHITS]
---



Das Kommando `test` zeigt im exit status (`$?`) das Ergebnis von Vergleichen. Grundlage für if Anweisungen in scripts. Siehe [Linux test command](https://www.computerhope.com/unix/test.htm).

-   `$?` ist 0: entspricht true
-   `$?` ist 1: entspricht false



```bash
$ test 'xyz' = 'xyz'; echo $?
0
$ test 'xyz' = 'xy'; echo $?
1
```

Achtung die Leerzeichen sind wichtig:

```bash
$ test 'xyz'=='xyz'; echo $?
0
```

Andere Form mit `[]` 

```bash
$ [ 'xyz' = 'xyz' ]; echo $?
0
# Leerzeichen neben den [ ] !
```

Exit Status mit `&&` und `||` Operatoren:

```bash
$ test 100 -gt 99 && echo "Yes, that's true."
$ test 98 -gt 99 && echo "Yes, that's true."
$ test 98 -gt 99 || echo "No, that's false."
$ test 100 -gt 99 || echo "No, that's false."

# Möglich aber vielleicht nicht so gut lesbar.
$ test 100 -gt 99 && echo "Yes, that's true." || echo "No, that's false."
Yes, that's true.
```

> The right side of `&&` will only be evaluated if the exit status of the left side is zero (i.e. true). `||` is the opposite: it will evaluate the right side only if the left side exit status is non-zero (i.e. false).

Übersicht [`test`](https://man7.org/linux/man-pages/man1/test.1.html) Vergleiche:

|              Operator | Description                                                  |
| --------------------: | :----------------------------------------------------------- |
|          ! EXPRESSION | Negate.                                                      |
|             -n STRING | The length of STRING is greater than zero.                   |
|             -z STRING | The lengh of STRING is zero (ie it is empty).                |
|     STRING1 = STRING2 | STRING1 is equal to STRING2                                  |
|    STRING1 != STRING2 | STRING1 is not equal to STRING2                              |
| INTEGER1 -eq INTEGER2 | INTEGER1 is numerically equal to INTEGER2                    |
| INTEGER1 -gt INTEGER2 | INTEGER1 is numerically greater than INTEGER2                |
| INTEGER1 -lt INTEGER2 | INTEGER1 is numerically less than INTEGER2                   |
|               -d FILE | FILE exists and is a directory.                              |
|               -e FILE | FILE exists.                                                 |
|               -f FILE | FILE exists and is a [regular file](https://en.wikipedia.org/wiki/Unix_file_types#Regular_file) (text or binary data) |
|               -r FILE | FILE exists and the read permission is granted.              |
|               -s FILE | FILE exists and it's size is greater than zero (ie. it is not empty). |
|               -w FILE | FILE exists and the write permission is granted.             |
|               -x FILE | FILE exists and the execute permission is granted.           |



---

#### Übung (Datei zu groß)

Schreibe ein Skript mit einer Datei als Argument, es soll der Text `Datei ist zu groß` ausgegeben werden wenn die Datei mehr als 100kB hat.

---
