---
title: Arithmetic
subtitle: bash scripting
tags: [lecture,3AHITS]
---



[Bash Scripting Tutorial - 4. ArithmeticTutorial Sections ](https://ryanstutorials.net/bash-scripting-tutorial/bash-arithmetic.php)



Mit `let`

```sh
let a=5+4 # keine Leerzeichen erlaubt
let "a = 5 + 4"
let "a = $1 * 2"
let a=a\*2  # * muss escaped werden
```

Mit  `expr`  wird das Ergebnis ausgegeben anstelle es mit `let` in einer Variable zu speichern

```sh
expr 5 + 4 # Leerzeichen sind OK
echo $(expr 5 + 4) # $(...) command substitution
```

Mit `$((<expr>))` – 2 Klammern! – sind C ähnliche Ausdrücke möglich. 

`(())` wenn das Ergebnis nicht weiterverwendet wird.

```bash
#!/bin/bash
# Basic arithmetic using double parentheses
a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5)) # Leerzeichen sind nicht wichtig
echo $a # 8

b=$(( a + 3 )) # ohne $ Zeichen
echo $b # 11

# noch C ähnlicher
((a=2*a)) 
((a++))
((a+=4))

```

> There are several ways in which to do arithmetic in Bash scripts. Double parentheses is the preferred method.



#### Übung ()

Create a simple script which will take two command line arguments and then multiply them together using each of the methods detailed above.



#### Übung ()

Schreibe 2 Skripts: `time_start.sh` und `time_stop.sh`. Bei Aufruf von `time_stop.sh` wird die Anzhahl der Sekunden ausgegeben die seit dem letzten Aufruf von `time_start.sh` vergangen sind. 

- Hinweis 1: verwende `date` um die Anzahl der Sekunden seit 01.01.1971 herauszufinden (die UNIX Zeit bezieht sich immer auf diesen Referenzpunkt). 

- Hinweis 2: Speichere die Zeit in `time_start.sh` in einer Datei.



#### Übung ()

Remember when we looked at [variables](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php) we discovered `$RANDOM` will return a random number. This number is between 0 and 32767 which is not always the most useful. Let's write a script which will use this variable and some arithmetic (hint: play with modulus) to return a random number between 0 and 100.

Now let's play with the previous script. Modify it so that you can specify as a command line argument the upper limit of the random number. Can you make it so that a lower limit can be specified also? eg. if I ran `./random.sh 10 45` it would only return random numbers between 10 and 45.

