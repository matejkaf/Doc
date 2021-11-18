---
title: command substitution
subtitle: bash scripting
tags: [lecture,3AHITS]
---



Command substitution ermöglicht den Output eines Programms als Variablenwert zu verwenden. Die generelle Syntax ist `$(<CMD>)`.

```sh
$ echo "Das aktuelle Datum ist $(date)"
```

Ermitteln der Anzahl Einträge in einem Verzeichnis:

```sh
$ ls /etc | wc -l
```



```sh
$ myvar=$( ls /etc | wc -l )
$ echo "Es sind $myvar Einträge im dir /etc" 
$ echo "Es sind $( ls /etc | wc -l ) Einträge im dir /etc"
```

Newlines in der Ausgabe werden durch Leerzeichen ersetzt:

```sh
$ echo $( ls )
```



[Übungen](04b_cmdsubst_ue)
