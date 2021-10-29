---
title: command substitution
subtitle: bash scripting
tags: [lecture,3AHITS]
---



Command substitution ermöglicht den Output eines Programms als Variablenwert zu verwenden. Die generelle Syntax ist `$(<CMD>)`.

```sh
$ myvar=$( ls /etc | wc -l )
$ echo There are $myvar entries in the directory /etc 
```

Newlines in der Ausgabe werden durch Leerzeichen ersetzt:

```sh
$ echo $( ls )
```



[Übungen](04b_cmdsubst)
