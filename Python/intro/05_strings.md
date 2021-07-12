---
title: Strings
subtitle: Python Einführung
---

Strings werden wahlweise mit `""` oder `''` geschrieben, es gibt keinen Unterschied bei beiden Schreibweisen.

```python
str="abcd"
text='xyz'
```

Strings können mit `+` zu einem neuen String zusammengfefügt werden:

```python
a="Hello"
b="World"
c=a+" "+b
```

Zahl nach String wandeln mit `str`

```python
x=42
text="x="+str(x)
```

Zugriff auf Buchstaben per Index:

```python
str[2]                # 3rd character
str[-1]              # Last character
```

Länge eines Strings

```python
len(str)
```

String *slices*:

```python
str="ABCDEFG"
strA = str[1:]               # Without the 1st character
strB = str[:-1]              # Without the last character
strC = str[1:4]              # Substring: 2nd to 4th character
```

Wiederholung

```python
t = "abc"
r = t*3 # abcabcabc
```



# String interpolation

*String interpolation* (Python ≥3.6) mit `f`-Strings. String kann Ausdrücke (Variablen, Berechnungen) enthalten diese werden durch ihr Ergebnis ersetzt.

```python
x=3
print(f'Das doppelte von {x} ist {x*2}')
```

Kommastellen begrenzen mit [format specifier](https://www.python.org/dev/peps/pep-0498/#format-specifiers).

```python
import math
str = f"{math.pi:.3f}"
print("π auf 3 Kommastellen: {str}")
```



# Strings vergleichen

```python
if str1 == str2: 
  print "Equ"

if str1 != str2: 
  print "!Equ"
```



# String Methoden

Neue Strings mit nur Groß- bzw. Kleinbuchstaben

```python
lo = str.lower()          # Lowercase
up = str.upper()          # Uppercase
```

Teile von Strings ersetzen (in einem neuen String)

```python
rep = str.replace('abc','xy') # Replacement
```

Substring-Suche, Ergebnis ist der Index oder –1 falls nicht gefunden:

```python
pos1 = str.find('lol')       # Index of substring or -1
pos2 = str1.rfind('wow')     # Index of substring, from the right
```



# Substring Test

Mit Schlüsselwort `in`:

```python
if "el" in str1: 
  print "In"
if "el" not in str1: 
  print "X"
```

