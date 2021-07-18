---
title: Python
subtitle: Übersicht zum Nachschlagen
---

* TOC
{:toc}
# Infos

- [Google's Python Class](https://developers.google.com/edu/python)
- [docs.python.org](https://docs.python.org/3/)
- [wikibooks - Python Programming](https://en.wikibooks.org/wiki/Python_Programming)
- [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial)
- [w3schools](https://www.w3schools.com/python/default.asp)



# Interesting

- Python mit Turtle [repl.it](https://repl.it/@franzmatejka/DesertedGummyLivecd#main.py)



# V2 vs. V3

V2 wird seit 01.01.2020 nicht mehr gewartet. 

macOS und Linux (Ubuntu, Kali, Raspbian,...): beide Versionen sind im Standard Umfang enthalten.



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

```python
#!/usr/bin/env python3
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

`int` Datentypen können beliebig groß werden (automatisch BigInteger)

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



```python
val = input("Enter your value: ")
# This function first takes the input from the user and then evaluates the expression, which means Python automatically identifies whether user entered a string or a number or list.
```



```python

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

# in String wandeln mit str()
d = str(y)

# kein i++ / i-- aber
i+=1
```

String nach Wert

```python
u = int("3")
v = float("3.14")
```



# Strings

[wikibooks Python Programming/Strings](https://en.wikibooks.org/wiki/Python_Programming/String)

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
str13b = str1.lstrip()        # Strip left (leading) whitespace
str13c = str1.strip()         # lstrip+rstrip
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

```python
txt = "Thank you\nfor the music\nWelcome to the jungle"
x = txt.splitlines() # array of strings
```



String interpolation (Python ≥3.6):

```python
print(f'{x*2} Test')
```

Formattierung

```python
'{:02}_{}'.format(3, 'sometext')
ordinal=2
f'{ordinal:02}_{match.group(1)}'

```



`ord` (Unicode-Zeichen ⟶ `int`–Codepoint) und `chr` (Codepoint⟶Zeichen)

```python
print(ord('5'))    # 53
print(ord('A'))    # 65
print(ord('$'))    # 36

print(chr(97)) 		# a
print(chr(65)) 		# A
print(chr(1200)) 	# Ұ
```



# Array / List

[Google for Education](https://developers.google.com/edu/python/lists)

```python
a = ['spam', 'eggs', 100, 1234] # list a[0]
print(a[0])
print(a)
for el in a:
  print(el)
len(a) # list length
```

```python
a[-1] # letztes Element
a[-2] # vorletztes Element
```



List Methoden:

```python
list = ['larry', 'curly', 'moe']
list.append('shemp')         ## append elem at end
list.insert(0, 'xxx')        ## insert elem at index 0
list.extend(['yyy', 'zzz'])  ## add list of elems at end
print(list)  ## ['xxx', 'larry', 'curly', 'moe', 'shemp', 'yyy', 'zzz']
print(list.index('curly'))    ## 2
list.remove('curly')         ## search and remove that element
list.pop(1)                  ## removes and returns 'larry'
print(list)  ## ['xxx', 'moe', 'shemp', 'yyy', 'zzz']
```

Slices:

```python
a[von:bis]
a[1:-1]
# slices sind immer Kopien
a[:] # (shallow) copy
# Listenelemente können überschrieben werden a[2] = a[2] + 23
a[0:2] = [1, 12] # Replace slices
a[0:2] = [] # Remove
a[1:1] = ['bletch', 'xyzzy'] # Insert 
```

list comprehension

```python
a=[(i+1)*2 for i in range(5)]
print(a)

[3*x for x in vec if x > 3]
```

`for` loop mit Index `enumerate`:

```python
presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe", "Adams", "Jackson"]
for num, name in enumerate(presidents, start=1):
    print("President {}: {}".format(num, name))
# Note: the start=1 option to enumerate here is optional. If we didn’t specify this, we’d start counting at 0 by default.
```



```python
# nested lists
q = [2, 3]
p = [1, q, 4] p[1]
p[1][0]
```

filter(), map(), reduce()



# Dictionary

[Google edu: Python Dict and File](https://developers.google.com/edu/python/dict-files)

```python
## Can build up a dict by starting with the the empty dict {}
## and storing key/value pairs into the dict like this:
## dict[key] = value-for-that-key
dict = {}
dict['a'] = 'alpha'
dict['g'] = 'gamma'
dict['o'] = 'omega'

print(dict)  ## {'a': 'alpha', 'o': 'omega', 'g': 'gamma'}

print(dict['a'])     ## Simple lookup, returns 'alpha'
dict['a'] = 6       ## Put new key/value into dict
'a' in dict         ## True
## print dict['z']                  ## Throws KeyError
if 'z' in dict: 
  print dict['z']     ## Avoid KeyError
print dict.get('z')  ## None (instead of KeyError)
```

```python
## By default, iterating over a dict iterates over its keys.
## Note that the keys are in a random order.
for key in dict: 
  print(key)
## prints a g o

## Exactly the same as above
for key in dict.keys(): 
  print(key)

## Get the .keys() list:
print(dict.keys())  ## ['a', 'o', 'g']

## Likewise, there's a .values() list of values
print(dict.values())  ## ['alpha', 'omega', 'gamma']

## Common case -- loop over the keys in sorted order,
## accessing each key/value
for key in sorted(dict.keys()):
  print(key + " " + dict[key])

## .items() is the dict expressed as (key, value) tuples
print dict.items()  ##  [('a', 'alpha'), ('o', 'omega'), ('g', 'gamma')]

## This loop syntax accesses the whole dict by looping
## over the .items() tuple list, accessing one (key, value)
## pair on each iteration.
for k, v in dict.items(): 
  print(f"{k} => {v}")
  ## a => alpha    o => omega     g => gamma
```



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

conditional expression (like ternary operator)

```python
result = x if a > b else y
```

Boolsche Operatoren: `and`, `or`, `not`

```python
a = 200
b = 33
c = 500
if not (a > b and c > a) or b==34:
  print("weird condition is True")
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
def main():
  pass

if __name__ == "__main__":
    # execute only if run as a script
    main()
```

```python
from lib import name # selective import

import lib
lib.name # qualification necessary
```



# Files

Textfiles lesen

```python
f = open('path','r')

contents = f.read() # all content

line = f.readline()

lines = f.readlines()
for line in lines:
  print(line)

f.close()
```

```python
f = open('path','w')
f.write('this is a line\n')
print('text', file=f)
f.close()
```

- Mode `a` für append

Binary Files

```python
f = open('path','rb')
data = f.read() # bytestring
f.close()

f = open('path','wb')
data = b'abc1234\xab\xfe'
f.write(data)
f.close()
```

Encoding

```python
open(fname, encoding='latin-1')
open("t1.txt", "w", encoding="utf-8")
```

Oder als Binärdatei öffnen und `encode` `decode` verwenden.



## with

File wird automatisch geschlossen – auch bei Exceptions

```python
with open('file_path', 'w') as file:
  file.write('hello world !')
```



# Short Infos

- [range() und xrange()](https://www.geeksforgeeks.org/range-vs-xrange-python/) – xrange braucht weniger Speicher
- [Role of Underscore(_) in Python](https://www.datacamp.com/community/tutorials/role-underscore-python) – Schleifen Laufvariable, ...
- [List comprehension without brackets in Python](https://stackoverflow.com/questions/9060653/list-comprehension-without-in-python)



# Exceptions



```python
try:
   fh = open("testfile", "w")
   fh.write("This is my test file for exception handling!!")
except IOError:
   print "Error: can\'t find file or read data"
else:
   print "Written content in the file successfully"
   fh.close()
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

[shutil — High-level file operations](https://docs.python.org/3/library/shutil.html)

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



## Encoding / UTF8 / Bytestrings

```python
#! /usr/bin/env python
# -*- encoding: utf-8 -*-

```

In python3 nicht mehr notwendig!

[str.encode](https://docs.python.org/3/library/stdtypes.html#str.encode)

```python
text = "oö aä uü z÷ |🐌|"
text_bytes = text.encode('utf-8')
print(text_bytes)
```

```
b'o\xc3\xb6 a\xc3\xa4 u\xc3\xbc z\xc3\xb7 |\xf0\x9f\x90\x8c|'
```

Bytestring im UTF-8 Encoding

[bytes.decode](https://docs.python.org/3/library/stdtypes.html#bytes.decode):

```python
b'\xcf\x84o\xcf\x81\xce\xbdo\xcf\x82'.decode('utf-16')
```

```
'蓏콯캁澽苏'
```

[Hexadezimal](https://docs.python.org/3/library/stdtypes.html#bytes.hex)

```python
data = b'o\xc3\xb6 a\xc3'
print( data.hex() ) # Kleinbuchstaben Hex
```

```python
# usage: hex([sep[, bytes_per_sep]])
>>> value = b'\xf0\xf1\xf2'
>>> value.hex('-')
'f0-f1-f2'
>>> value.hex('_', 2)
'f0_f1f2'
>>> b'UUDDLRLRAB'.hex(' ', -4)
'55554444 4c524c52 4142'
```




```python
>>> bytes.fromhex('2Ef0 F1f2  ') # ASCII whitespace ignored
b'.\xf0\xf1\xf2'
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

```python
def getDateEu(dateStr):
  s = dateStr.split('.')
  return datetime.date(int(s[2]),int(s[1]),int(s[0]))

print(getDateEu('01.10.2020')<=getDateEu('22.11.2020'))
print(getDateEu('01.10.2020')>=getDateEu('22.11.2020'))
print(getDateEu('01.10.2020')>=getDateEu('01.10.2020'))
```

## random

```python
import random

print(random.randrange(1, 10))
```



## Kommandozeilen Argumente

```python
import sys
sys.argv # array
sys.argv[0] # Skript Name
sys.argv[1:] # Nur die Argumente
x = " ".join(sys.argv[1:])

```

[argparse](https://docs.python.org/3/library/argparse.html)

```python
import argparse

parser = argparse.ArgumentParser(description='Tool Description.')

# positional arguments
parser.add_argument("fileName", help="file name")

# options, if not set value ist "None"
parser.add_argument("--fromdate", help="from date")

# True/False values
#    option present: True
#    option missing: False
parser.add_argument("--boolTest", help="boolean test", action="store_true")

# shorthand with default value and specific type
parser.add_argument("-n", "--number", help="a number (default: 5)", default=5, type=int)

args = parser.parse_args()

#access arguments
print(args)
print(args.fileName)

if args.boolTest:
  print("is True")
else:
  print("is NOT True")

# test if an optional argument is set
if(args.fromdate):
  print(f"set to '{args.fromdate}''")
  print(type(args.fromdate)) # always string!
```

Links

- [argparse:type](https://docs.python.org/3/library/argparse.html#type)



## Regular Expressions

[docs.python Referenz](https://docs.python.org/3/library/re.html)

[docs.python HOWTO](https://docs.python.org/3/howto/regex.html#regex-howto)

[regex101](https://regex101.com)

[pythex](https://pythex.org)



`re.search`

```python
html_header = " bla bla   Content-Length: 1234  bla bla  "
content_length_search = re.search(r"Content-Length:\s\d*",html_header)
if content_length_search:
  content_length = content_length_search.group(0)
  print(content_length)
```

Output

```
Content-Length: 1234
```

Mit Gruppen

```python
html_header = " bla bla   Content-Length: 1234  bla bla  "
content_length_search = re.search(r"Content-Length:\s(\d*)",html_header)
if content_length_search:
  content_length = content_length_search.group(1)
  print(content_length)
```

`group(0)` ist immer der gesamte match.

Ersetzen mit `re.sub`:

```python
result = re.sub(pattern, repl, string);

result = re.sub(r'\s+', ' ',   input)           # Eliminate duplicate whitespaces
```



Beispiel – Datum extrahieren:

```python
import re
import datetime

tests = [
  '5AHELS KSN Gruppe B (Di, 13.10.2020)',
  '5AHELS KSN Gruppe B (22.11.2020)',
  '5AHELS KSN Gruppe B (22.11.2020) Test',
  '5AHELS DIC Gruppe A (Mi, 07.10.2020, 13:00-14:40)',
  '5AHELS DIC Gruppe A',
  '5AHELS DIC Gruppe A (Nix) Bla',
]


def getDate(str):
  date_pattern = re.compile(r'.*\(.*(\d\d\.\d\d\.\d\d\d\d).*\)')
  match = date_pattern.search(str)
  if match:
    return getDateEu(match.group(1))
  else:
    return None

for str in tests:
  print(getDate(str))

```



## Minimaler Web Server

Starten eines lokalen HTTP Servers:

```bash
$ python3 -m http.server 8000
```



## Inplace Editing

```python
import fileinput
for line in fileinput.input(file_name, inplace=1):
  sys.stdout.write(line)
```



## Tuple/List unpacking

```python
def foo():
  return [1,2]

def bar():
  return (1,2)

# unpacking list
eins,zwei = foo()

# unpacking tuple
eins,zwei = bar()
```

