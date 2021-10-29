---
title: Arithmetic
subtitle: Übungen bash scripting
tags: [assignment,3AHITS]
---

#### Übung (multiply)

Create a simple script which will take two command line arguments and then multiply them together using each of the discussed methods.



---

#### Übung (Zeitmessung)

Schreibe 2 Skripts: `time_start.sh` und `time_stop.sh`. Bei Aufruf von `time_stop.sh` wird die Anzhahl der Sekunden ausgegeben die seit dem letzten Aufruf von `time_start.sh` vergangen sind. 

- Hinweis 1: verwende `date` um die Anzahl der Sekunden seit 01.01.1971 herauszufinden (die UNIX Zeit bezieht sich immer auf diesen Referenzpunkt). 

- Hinweis 2: Speichere die Zeit in `time_start.sh` in einer Datei.



---

#### Übung (Random Number V1 & V2)

Remember when we looked at [variables](https://ryanstutorials.net/bash-scripting-tutorial/bash-variables.php) we discovered `$RANDOM` will return a random number. This number is between 0 and 32767 which is not always the most useful. Let's write a script which will use this variable and some arithmetic (hint: play with modulus) to return a random number between 0 and 100.

Now let's play with the previous script. Modify it so that you can specify as a command line argument the upper limit of the random number. Can you make it so that a lower limit can be specified also? eg. if I ran `./random.sh 10 45` it would only return random numbers between 10 and 45.

