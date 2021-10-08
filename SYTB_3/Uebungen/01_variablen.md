---
title: Variablen
subtitle: bash scripting
tags: [lecture,3AHITS]
---



# Variablen

[Ryans Tutorials – Bash Scripting Tutorial - 2. Variables](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php#activities)



```bash
#!/bin/bash
# A simple variable example
myvariable=Hello
anothervar=Fred
echo $myvariable $anothervar
echo
sampledir=/etc
ls $sampledir
```



## Quotes

Leerzeichen dienen oft als Trenner zwischen mehreren Teilen eines Kommandos.
Daher Variablenwerte mit Hochkomma definieren wenn diese Leerzeichen enthalten

```bash
myvar="Hallo Welt"
echo $myvar
```

Es gibt einfache (single quotes) und doppelte Hochkomma (double quotes).

- Single quotes: Inhalt wird 1:1 übernommen
- Double quotes: Variablen werden eingesetzt (variable substitution)

Beispiel:

```bash
myvar='Hello World'
echo $myvar
newvar="More $myvar"
echo $newvar
newvar='More $myvar'
echo $newvar
```

curly braces: Wenn kein Leerzeichen nach der Variable

Wenn der Name der Variable sonst nicht vom umgebenden Text abgetrennt werden kann.

```bash
name="myfile"
echo $name_001
echo ${name}_001
```

