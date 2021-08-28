---
title: AWK
---



# AWK

Insbesondere zum verarbeiten von in Spalten organisierten Daten.

Verdoppelt jede Zeile:

```bash
$ awk '{print $0;print $0}' shopping.txt
```

- `$0` ganze Input-Zeile, 

- `$1`, `$2`, ... die Wörter in der Zeile

```bash
$ awk '{print $1 " " $3}' shopping.txt
```

Wenn nicht durch Leerzeichen getrennt: Setze den field seperator auf Komma (`-F,`)

```bash
$ awk -F, '{print $1 " " $3}' klassenkassa.csv
```

Summiere die Zahlen von 1 bis 20:

```bash
$ seq 20 | gawk 'BEGIN {sum=0} {sum=sum+$0} END {print sum}'
```

Nur Zeilen mit "oranges" ausgeben und die Anzahl aufsummieren:

```bash
$ awk 'BEGIN {count=0} /oranges/ {print $0;count=count+$3} END {print count, "oranges"}'  shopping.txt 
Susy oranges 5
Terry oranges 9
Susy oranges 12
26 oranges
```

Hinweis: Ausführung nur wenn `$0` die regex `/oranges/` matched

```sh
$ awk 'BEGIN {count=0} /oranges/ {print $0;count=count+$3} END {print count, "oranges"}'  shopping.txt
```

Mit exaktem Zugriff auf die Spalte in der "oranges" steht:

```sh
$ awk 'BEGIN {sum=0} $2 == "oranges" {count=$3;print count;sum+=count} END {print "Summe=" sum}' shopping.txt
```

```
5
9
12
Summe=26
```

Arbeiten mit Daten die über mehrere Zeilen verteilt sind, siehe `dev/awk/shopping2.txt`.

```bash
$ gawk '{print $0}' shopping2.txt
$ gawk '/oranges/ {print $0}' shopping2.txt # /regex/ {action}
# mit getline zur nächsten Zeile gehen und $2 = die Anzahl, ausgeben:
$ gawk '/oranges/ {getline; print $2}' shopping2.txt

# Daten von 3 Zeilen sammeln:
$ gawk '/name/ {name=$2;getline;fruit=$2;getline;count=$2;print name,fruit,count}' shopping2.txt

# Nur jene Daten die "oranges" sind:
$ gawk '/name/ {name=$2;getline;fruit=$2;getline;count=$2;if(fruit=="oranges") print name,fruit,count}' shopping2.txt
```



# Testdateien

`klassenkassa.csv`

```
Müller,21.09.2019,3.0,Bus
Mayr,22.09.2019,20.0,Werkstatt
Gruber,21.09.2019,3.0,Bus
Wagner,18.09.2019,20.0,Werkstatt
Huber,15.09.2019,2.5,Kino
Wallner,22.09.2019,20.0,Werkstatt
Steiner,18.09.2019,20.0,Werkstatt
```

`shopping.txt`

```
Fred apples 20
Susy oranges 5
Mark watermellons 12
Robert pears 4
Terry oranges 9
Lisa peaches 7
Susy oranges 12
Mark grapes 39
Anne mangoes 7
Greg pineapples 3
Oliver rockmellons 2
Betty limes 14
George bananas 11
Maria strawberries 13
Tony maracuja 3
```



`shopping2.txt`

```
name: Fred
fruit: apples
count: 20
name: Susy
fruit: oranges
count: 5
name: Mark
fruit: watermellons
count: 12
name: Robert
fruit: pears
count: 4
name: Terry
fruit: oranges
count: 9
name: Lisa
fruit: peaches
count: 7
name: Susy
fruit: oranges
count: 12
name: Mark
fruit: grapes
count: 39
name: Anne
fruit: mangoes
count: 7
name: Greg
fruit: pineapples
count: 3
name: Oliver
fruit: rockmellons
count: 2
name: Betty
fruit: limes
count: 14
name: George
fruit: bananas
count: 11
name: Maria
fruit: strawberries
count: 13
name: Tony
fruit: maracuja
count: 3
```



# Sammlung

*Frage: ist sed notwendig, oder genügt eigentlich awk? [Difference Between sed and awk](https://pediaa.com/difference-between-sed-and-awk/)*

Anschauen:

- [EVERYONE Needs to Learn a Little Bit of AWK!](https://www.youtube.com/watch?v=jJ02kEETw70&feature=share)

