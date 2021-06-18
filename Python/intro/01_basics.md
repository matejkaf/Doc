---
title: Basics
subtitle: Python Einführung
---

Die Programmiersprache Python ist ein **Skriptsprache**, d.h. der Quelltext wird direkt durch einen **Interpreter** ausgeführt und nicht compiliert. Python ist **einfach** aber trotzdem sehr **mächtig**.

Beispiel:

```python
# Dokument mit dem Namen hello.py
print("Hallo Welt")
```

Dieses Skript wird durch das Programm `python` (=Interpreter) ausgeführt:

```bash
$ python3 hello.py
```

Python hat auch einen **interaktiven Modus** (eignet sich zum schnell ausprobieren), mit `exit()` wird beendet:

```python
$ python3
>>> 3+4
7
>>> exit()
$
```

Das Starten eines Skripts läßt sich (unter Linux) noch weiter vereinfachen durch eine sogenannte **shebang** (`#!`) Zeile:

```python
#! /usr/bin/env python3
print("Hallo Welt")
```

Zusätzlich muss das eXecutable flag des Skript Files gesetzt werden:

```sh
$ ls -l main.py
-rw-r--r-- 1 runner runner 851 Jun 16 16:24 main.py
$ chmod u+x main.py  # _u_ser / _g_roup / _o_thers / _a_ll
$ ls -l main.py
-rwxr--r-- 1 runner runner 851 Jun 16 16:24 main.py
```

Der `python3` Interpreter wird durch die shell gestartet:

```python
$ ./main.py
```



# Kommentare

```python
# one line comment

"""
This is a comment
written in 
more than just one line
"""
```



# Variablen

Es genügt eine Zuweisung (keine Definition notwendig).

```python
x=42
```

Datentypen werden automatisch zugewiesen.

```python
a = 1    		# int
b = 2.8  		# float
c = True 		# bool (True/False)
d = "abcd" 	# string
```

Interessant: `int` Werte können beliebig groß werden.

Datentypumwandlungen:

```python
x=3.14
y=int(x)
textInt="42"
n=int(textInt)
textFloat="1.2345"
m=float(textFloat)
```



# Berechnungen

```python
a=3
b=(1+a)*3
i=1
# kein i++ i--
i+=1 # i=i+1
i-=1 # i=i+1
2**8 # 2^8=256
```



# Module

Um die Bestandteile eines Moduls zu verwenden ist dieses zuerst zu importieren, dann verwendet man den Modulnamen um auf die enthaltenen Elemente zuzugreifen, dies können Variablen oder Funktionen sein.

```python
import math
r=5.0
a=r*r*math.pi
print(a)

print( math.gcd(54,24) ) # greatest common divisor
```

