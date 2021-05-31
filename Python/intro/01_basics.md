---
title: Basics
subtitle: Python Einführung
---

Python ist ein Skriptsprache, d.h. der Quelltext wird direkt durch einen Interpreter ausgeführt und nicht compiliert.

Beispiel:

```python
# Dokument mit dem Namen hello.py
print("Hallo Welt")
```

Dieses Skript wird durch das Programm `python` ausgeführt:

```bash
$ python hello.py
```

Python hat auch einen interaktiven Modus (eignet sich zum schnell ausprobieren):

```python
$ python
>>> 3+4
7
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



# if Anweisung

```python
str = input("Wert eingeben: ")
val = int(str)
if val>100:
  print("Ohhh")
  print("Wow")
else:
  print("Naja")
  print("Geht")
```

---

**Beachte**: In Python keine `{}` sondern `:` und einrücken! Welche Programmzeilen in einem Block zusammengehören ergibt sich durch die Einrückungstiefe.

---

Beispiel:

```python
str = input("Wert eingeben: ")
val = int(str)
if val>100:
  print("Ohhh")
  if val>200:
    print("Wow")
    if val>300:
      print("UiUiii")
  else:
    print("200 nicht erreicht")
```

`elif`: (else if)

```python
if x < 0:
  x = 0
  print 'Negative changed to zero'
elif x == 0:
  print 'Zero'
else:
  print 'More'
```

**conditional** expression

```python
result = x if a > b else y
```

```python
# Absolutwert
value = -500
abs = value if value>=0 else -value
```

```python
# signum
value = -42
sgn = -1 if value<0 else 0 if value==0 else 1
```

**Boolsche Operatoren**: `and`, `or`, `not`

```python
a = 200
b = 33
c = 500
if not (a > b and c > a) or b==34:
  print("weird condition is True")
```



# while

```python
i=0
while i<10:
  print("Hallo Welt")
  i+=1
```



# for

```python
for i in range(10):
  print(i)
# 0,..,9
```

