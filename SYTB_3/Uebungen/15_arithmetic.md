---
title: Arithmetic
subtitle: bash scripting
tags: [lecture,3AHITS]
---



[Bash Scripting Tutorial - 4. ArithmeticTutorial Sections ](https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php)

Mit `$((<expr>))`



```bash
#!/bin/bash
# Basic arithmetic using double parentheses
a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5))
echo $a # 8 - Leerzeichen sind nicht wichtig

b=$(( a + 3 ))
echo $b # 11 - ohne $ Zeichen

((b++))
# Hier kein $ !

b=$(( $a + 4 ))
echo $b # 12 - aber auch mit $ Zeichen

a=$(( 4 * 5 ))
echo $a # 20
```

Hinweis: Es gibt auch `let`  und `expr` mit ähnlicher Syntax.

Aufgabe:

- Skript das zufällige Zahlen erzeugt (`$RANDOM`)

