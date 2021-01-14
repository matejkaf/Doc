# Infos

- [Google's Python Class](https://developers.google.com/edu/python)
- [docs.python.org](https://docs.python.org/3/)
- [wikibooks - Python Programming](https://en.wikibooks.org/wiki/Python_Programming)
- [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial)

# Interesting

- Python mit Turtle [repl.it](https://repl.it/@franzmatejka/DesertedGummyLivecd#main.py)



# Allgemein

V2 vs. V3

V2 wird seit 01.01.2020 nicht mehr gewartet. macOS und Linux (Ubuntu, Kali, Raspbian,...) beide Versionen sind im Standard Umfang enthalten.



# PIP

```bash
sudo python3 -m pip install python-frontmatter
```



# Command Line

```bash
$ python --help
$ python --version
$ python3 --version
```

Interaktiv

```bash
$ python
Python 2.7.16 (default, Oct 16 2019, 00:34:56) 
[GCC 4.2.1 Compatible Apple LLVM 10.0.1 (clang-1001.0.37.14)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 3+4
7
```

Sofortige Ausführung

```bash
$ python -c 'print(3+4)'
7
$ python -c 'print("Hallo "*10)'
Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo Hallo 
$ python -c 'for i in range(10): print(str(i) + " Hallo")'
0 Hallo
1 Hallo
2 Hallo
3 Hallo
4 Hallo
5 Hallo
6 Hallo
7 Hallo
8 Hallo
9 Hallo
```

Skript

```bash
$ touch hallo.py
$ nano hallo.py
```

```python
for i in range(10):
	print(str(i) + " Hallo")
```

```bash
$ python hallo.py
0 Hallo
1 Hallo
2 Hallo
3 Hallo
4 Hallo
5 Hallo
6 Hallo
7 Hallo
8 Hallo
9 Hallo
```

Mit shebang `#!`

```bash
$ which python
/usr/bin/python
```

```python
#!/usr/bin/python
for i in range(10):
	print(str(i) + " Hallo")
```

```bash
$ chmod u+x hallo.py # make executable
$ ./hallo.py
0 Hallo
1 Hallo
2 Hallo
3 Hallo
4 Hallo
5 Hallo
6 Hallo
7 Hallo
8 Hallo
9 Hallo
```



# Basics

Keine Klammern, Einrückung wesentlich.

Datentypen

```python
True, False, None
```


```python
# one line comment

"""
This is a comment
written in 
more than just one line
"""
print("Hello, World!")
```



# Variable

```python
# Multi assignment
x, y, z = "Orange", "Banana", "Cherry"
```

```python
x = 5
print(type(x))
```

```python
x = 1    # int
y = 2.8  # float
z = 1j   # complex
# conversions
a = float(x)
b = int(y)
c = complex(x)

# von String geht auch
u = int("3")

# in String wandeln mit str()
d = str(y)

# kein i++ / i--
```





# Strings

[wikibooks Python Programming/Strings](https://en.wikibooks.org/wiki/Python_Programming/Strings#split,_splitlines)

strings sind nicht änderbar (wie Java).

```python
str1 = "Hello"                # A new string using double quotes
str2 = 'Hello'                # Single quotes do the same
str3 = "Hello\tworld\n"       # One with a tab and a newline
str4 = str1 + " world"        # Concatenation
str5 = str1 + str(4)          # Concatenation with a number
str6 = str1[2]                # 3rd character
str6a = str1[-1]              # Last character
#str1[0] = "M"                # No way; strings are immutable
for char in str1: print char  # For each character
str7 = str1[1:]               # Without the 1st character
str8 = str1[:-1]              # Without the last character
str9 = str1[1:4]              # Substring: 2nd to 4th character
str10 = str1 * 3              # Repetition
str11 = str1.lower()          # Lowercase
str12 = str1.upper()          # Uppercase
str13 = str1.rstrip()         # Strip right (trailing) whitespace
str14 = str1.replace('l','h') # Replacement
list15 = str1.split('l')      # Splitting
if str1 == str2: print "Equ"  # Equality test
if "el" in str1: print "In"   # Substring test
if "el" not in str1: print "X"   # Substring test
length = len(str1)            # Length
pos1 = str1.find('llo')       # Index of substring or -1
pos2 = str1.rfind('l')        # Index of substring, from the right
count = str1.count('l')       # Number of occurrences of a substring
"#".join(['a','b','c'])       # build string by joining an iterable
```

String interpolation (Python 3.6):
```python
print(f'{x*2} Test')
```



# Array / List

[Google for Education](https://developers.google.com/edu/python/lists)

```python
a = ['spam', 'eggs', 100, 1234] # list a[0]
for el in a:
  print(el)
len(a) # list length

# slices
a[1:-1]
# slices sind immer Kopien
a[:] # shallow copy
# Listenelemente können überschrieben werden a[2] = a[2] + 23
a[0:2] = [1, 12] # Replace some items
a[0:2] = [] # Remove some
a[1:1] = ['bletch', 'xyzzy'] # Insert some 

# list comprehension
[3*x for x in vec if x > 3]

# nested lists
q = [2, 3]
p = [1, q, 4] p[1]
p[1][0]

# enumerate (Index mitführen) und del (Löschen eines Elements)
files = ['text.txt','input.csv','zweites.csv']
for i, fileName in enumerate(files):
    if fileName.find('csv')==-1:
        print(str(i)+fileName)
        del files[i]
```

Lists: append(), insert(), remove(), filter(), map(), reduce()



# Dictionary

```python
params = {"id":33,"method":"authenticate","params":{"user":"matejkafr", "password":"mypass", "client":"CLIENT"},"jsonrpc":"2.0"}
print(params['id'])

```



Pretty print dict

```python
import pprint # pretty print
pprint.pprint(params)
```



# Parallel Assignment

```python
# Fibonacci
a, b = 0, 1
while b < 10:
  print b
  a, b = b, a+b
```



# Control flow  


```python
if x < 0:
    x = 0
    print 'Negative changed to zero'
elif x == 0:
    print 'Zero'
else:
    print 'More'

# in operator
if ok in ('y', 'ye', 'yes'):
  
for x in a:
	pass

range(10)
range(5, 10)
range(-10, -100, -30)
```

`for` loop mit Index:

```python
presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Adams", "Jackson"]
for num, name in enumerate(presidents, start=1):
    print("President {}: {}".format(num, name))
# Note: the start=1 option to enumerate here is optional. If we didn’t specify this, we’d start counting at 0 by default.
```

conditional expression (like ternary operator)

```python
result = x if a > b else y
```



# Funktionen

```python
def fib2(n): # return Fibonacci series up to n
    """Return a list containing the Fibonacci series up to n."""
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)    # see below
        a, b = b, a+b
    return result
```

Globale Variablen

```python
x=5
def foo():
  global x # wenn man die Variable ändern möchte
  x+=1
```



# Klassen

[Object-Oriented Programming (OOP) in Python 3](https://realpython.com/python3-object-oriented-programming/)

```python
class Dog:
    species = "Canis familiaris" # Class attribute
    def __init__(self, name, age):
        self.name = name # instance attributes
        self.age = age
        
		# called for print(...)
    def __str__(self):
        return f"{self.name} is {self.age} years old"
    
    # Another instance method
    def speak(self, sound):
        return f"{self.name} says {sound}"
```

**dunder methods:** begin and end with double underscores

```python
buddy = Dog("Buddy", 9)
print(buddy.name)
print(buddy)  # calls __str__
print(buddy.speak('Wau'))
```

Class- und Static-Methods. Aufruf über das Objekt oder den Klassennamen. [Python's Instance, Class, and Static Methods Demystified](https://realpython.com/instance-class-and-static-methods-demystified/)

```python
@classmethod
def classmethod(cls):
  # can access class attributes
  return 'class method called', cls

@staticmethod
def staticmethod():
  return 'static method called'
```



# import / main

```python
# lib.py
if __name__ == "__main__":
    # execute only if run as a script
    main()
```

```python
from lib import name # selective import

import lib
lib.name # qualification necessary

```



# Snippets

## Read from standard input

[stackoverflow - How do you read from stdin?](https://stackoverflow.com/questions/1450393/how-do-you-read-from-stdin)

```python
import sys
for line in sys.stdin:
  print(line)
```



## Copy files

```python
#! /usr/bin/env python

import shutil
import os

src = './script04.py'
dst1 = './copy.py'
dst2 = './copy2.py'

print os.path.getmtime(src)
shutil.copy(src,dst1)
shutil.copy2(src,dst2)
print os.path.getmtime(dst1)
print os.path.getmtime(dst2)

#copy: modification date ändert sich
#copy2: modification date bleibt gleich
```



## UTF8

In python3 nicht mehr notwendig?

```python
#! /usr/bin/env python
# -*- encoding: utf-8 -*-

```



## Dir Rekursion

Rekursiver Scan von Verzeichnissen

```python
#! /usr/bin/env python

import os
import fnmatch

def dirrec(src,pattern='*'):
    names = os.listdir(src)
    result=[]
    #print names
    for name in names:
        filename=os.path.join(src, name)
        if os.path.islink(filename):
           pass #ignore
        elif os.path.isdir(filename):
           #print 'DIR: '+filename
           result = result+dirrec(filename,pattern)
        elif fnmatch.fnmatch(filename, pattern):
           result.append(filename)
           #print filename
    return result

       
ret = dirrec('/Users/matejkafr/Dropbox/Documents/Htl/','*.tex')
for path in ret:
    os.system('convutf8.py '+'"'+path+'"')
```



## datetime

[Python doc](https://docs.python.org/3/library/datetime.html)

```python
from datetime import timedelta
from datetime import date

delta = timedelta(days=50)
# arithmetische Operationen sind möglich

now = date.today()
then = date(2002, 12, 31)
delta = now-then # timedelta

future = date.today() + timedelta(days=50)
```

## random

```python
import random

print(random.randrange(1, 10))
```



## Kommandozeilen Argument

```python
import sys
sys.argv # array
sys.argv[0] # Skript Name
sys.argv[1:] # Nur die Argumente
x = " ".join(sys.argv[1:])

```

