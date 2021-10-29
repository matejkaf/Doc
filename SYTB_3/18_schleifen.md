---
title: Schleifen
subtitle: bash scripting
tags: [lecture,3AHITS]
---

[Bash Scripting Tutorial - 6. Loops](https://ryanstutorials.net/bash-scripting-tutorial/bash-loops.php)

# while

```bash
#!/bin/bash
# Basic while loop
counter=1
while [ $counter -le 10 ] # <=
do
	echo $counter
	((counter++))
done
echo All done
```



# for

Schleife über **Listen** – Text mit Leerzeichen (white spaces) getrennt

```sh
#!/bin/bash
# Basic for loop
names='Stan Kyle Cartman'
for name in $names
do
	echo $name
done
echo 'All done'
```

Kompakter:

```sh
for name in $names; do
```



**Ranges**:

```bash
#!/bin/bash
# Basic range in for loop
for value in {1..5}
do
	echo $value
done
echo All done
```

Mit `seq` Tool:

```bash
for x in $(seq 1 10)
do
 echo "hallo $x"
done
```

Als Einzeiler (mit `;`):

```bash
for x in $(seq 1 10); do echo "hallo $x"; done
```

File **Wildcards**:

```bash
for f in *.jpg
do
  echo $f
done
```

Siehe auch: [Looping over a directory of files using wildcards in Bash](https://www.moreofless.co.uk/bash-shell-linux-looping-directory-files-wildcards/)

Daten aus einer **Datei** – Schleife über alle durch white-space getrennte Strings:

`data.txt`

```
eins zwei drei
vier
ende
```

```bash
for word in $(cat data.txt)
do
  echo $word
done
```



---

#### Übung ()

Create a simple script which will print the numbers 1 - 10 (each on a separate line) and whether they are even or odd.

---

#### Übung ()

Write a Bash script which will take a single command line argument (a directory) and will print each entry in that directory. If the entry is a file it will print it's size. If the entry is a directory it will print how many items are in that directory. The script should produce no output if the directory is not existent.

---

