---
title: Schleifen
subtitle: bash scripting
tags: [lecture,3AHITS]
---

[Bash Scripting Tutorial - 6. Loops](https://ryanstutorials.net/bash-scripting-tutorial/bash-loops.php)

## while

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

## for

Listen – Text mit Leerzeichen getrennt

```bash
#!/bin/bash
# Basic for loop
names='Stan Kyle Cartman'
for name in $names
do
	echo $name
done
echo All done
```

Ranges:

```bash
#!/bin/bash
# Basic range in for loop
for value in {1..5}
do
	echo $value
done
echo All done
```

Wildcards:

```bash
for f in *.jpg
do
  echo $f
done
```

Siehe auch: [Looping over a directory of files using wildcards in Bash](https://www.moreofless.co.uk/bash-shell-linux-looping-directory-files-wildcards/)

Mit `seq` Tool:

```bash
for x in $(seq 1 10)
do
 echo "hallo $x"
done
```

Als Einzeiler:

```bash
for x in $(seq 1 10);do echo "hallo $x";done
```

Schleife über alle durch white-space getrennte Strings:

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





