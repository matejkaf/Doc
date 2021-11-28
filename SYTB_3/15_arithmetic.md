---
title: Arithmetic
subtitle: bash scripting
tags: [lecture,3AHITS]
---



[Bash Scripting Tutorial - 4. ArithmeticTutorial Sections ](https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php)

# let

Mit `let`

```sh
let a=5+4 # keine Leerzeichen erlaubt
let "a = 5 + 4"
let "a = $1 * 2"
let a=a\*2  # * muss escaped werden
```

# expr

Mit  `expr`  wird das Ergebnis ausgegeben anstelle es mit `let` in einer Variable zu speichern

```sh
expr 5 + 4 # Leerzeichen sind OK
echo $(expr 5 + 4) # $(...) command substitution
```



# BASH Arithmetik

> There are several ways in which to do arithmetic in Bash scripts. **Double parentheses is the preferred method**.

Mit `$((<expr>))` – 2 Klammern! – sind C ähnliche Ausdrücke möglich. 

```bash
#!/bin/bash
# Basic arithmetic using double parentheses
a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5)) # Leerzeichen sind nicht wichtig
echo $a # 8

b=$(( a + 3 )) # ohne $ Zeichen
echo $b # 11
```

`(())` – ohne `$` – wenn das Ergebnis nicht weiterverwendet wird (kein "return").

```bash
# noch C ähnlicher
((a=2*a)) 
((a++))
((a+=4))

```


[BASH Arithmetic](http://faculty.salina.k-state.edu/tim/unix_sg/bash/math.html#bash-arithmetic):

| Operator | Operation                           |
| -------- | ----------------------------------- |
| `+ -`    | Addition, subtration                |
| `++ --`  | Increment, decrement                |
| `* / %`  | Multiplication, division, remainder |
| `**`     | Exponentiation                      |

Numerical boolean expressions in [Control Constructs](http://faculty.salina.k-state.edu/tim/unix_sg/bash/control.html#control) are also expressed using double parenthesis.

```sh
if (( x > y )); then
    echo "x > y"
fi
```

| `<= >= < >` | Less than or equal, greater than or equal, less than, greater than |
| ----------- | ------------------------------------------------------------ |
| `== !=`     | Equal, not equal                                             |
| `!`         | Logical NOT                                                  |
| `&&`        | Logical AND                                                  |
| `||`        | Logical OR                                                   |



