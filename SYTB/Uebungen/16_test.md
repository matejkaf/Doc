---
title: test Kommando
subtitle: bash scripting
tags: [lecture,3AHITS]
---



Zeigt im exit status (`$?`) das Ergebnis von Vergleichen. Grundlage für if Anweisungen in scripts.

-   `$?` ist 0: entspricht true
-   `$?` ist 1: entspricht false

Siehe [Linux test command](https://www.computerhope.com/unix/test.htm)

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
$ test 100 -gt 99 && echo "Yes, that's true." || echo "No, that's false."

Yes, that's true.
```

> The right side of && will only be evaluated if the exit status of the left side is zero (i.e. true). || is the opposite: it will evaluate the right side only if the left side exit status is non-zero (i.e. false).

---

#### Übung (Datei zu groß)

Schreibe ein Skript mit einer Datei als Argument, es soll der Text `Datei ist zu groß` ausgegeben werden wenn die Datei mehr als 100kB hat.

