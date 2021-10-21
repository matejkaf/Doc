---
title: Basics
subtitle: Python Einführung
---

Die Programmiersprache Python ist ein **Skriptsprache**, d.h. der Quelltext wird direkt durch einen **Interpreter** ausgeführt und nicht compiliert. Python ist **einfach** aber trotzdem sehr **mächtig**, man kommt ziemlich schnell zu einem funktionierenden Programm.

Beispiel:

```python
# Dokument mit dem Namen hello.py
print("Hallo Welt")
```

Dieses Skript wird durch das Programm `python` (=Interpreter) ausgeführt:

```bash
$ python3 hello.py
```

`python3` ... 3 ist die Versionsnummer der aktuellen Python Version.



# Entwicklungsumgebung

Es gibt mehrere Möglichkeiten Python zu verwenden.

Die einfachste ist wahrscheinlich die Online IDE [replit.com](https://replit.com/) zu Verwenden.

Eine andere Variante ist sich lokal eine Python IDE zu installieren, z.B.

- Visual Studio Code ([Anleitung](https://code.visualstudio.com/docs/python/python-tutorial))
- PyCharm von [JetBrains](https://www.jetbrains.com)



# Interaktiver Modus

Python hat auch einen **interaktiven Modus** (eignet sich zum schnell ausprobieren), in diesen kommt man wenn man `python3` ohne weiteren Argumente aufruft:



```python
$ python3
>>> 3+4
7
>>> exit()
$
```

Mit `exit()` wird beendet.



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

