---
title: Listen (Arrays)
subtitle: Python Einführung
---

Arrays in Python werden Listen (*list*) genannt und sind wesentlich flexibler als Arrays in C oder Java, aber ähnlich zu verwenden [[docs.python](https://docs.python.org/3/tutorial/introduction.html#lists)].

Eine Liste definieren:

```python
colors = ['red', 'blue', 'green']
```

  Zugriff per Index:

```python
print(colors[0])    ## red
print(colors[2])    ## green
colors[0]='Red'
```

```python
Negative Indices:
colors[-1] # green – letztes Element
colors[-2] # blue – vorletztes Element
```

Länge einer Liste:

```python
print(len(colors))  ## Länge = 3
```

Ganze Liste ausgeben:

```python
print(colors)
```



# Liste aufbauen

Häufig wird mit einer leeren Liste `[]` gestartet und `append()` verwendet um Elemente anzufügen:

```
  list = []          ## Start as the empty list
  list.append('a')   ## Use append() to add elements
  list.append('b')
```



# Schleife

Schleife über alle Elemente in einer Liste:

```python
a=[1,2,3,4]
for el in a:
  print(el)
```

Zuätzlicher Index mit `enumerate`:

```python
a=[11,22,33,44]
for i, el in enumerate(a):
  print(f'{i} : {el}')
```



# `in` Test

`in` testet ob ein Wert in einer Liste enthalten ist, liefert `True`/`False`:

```python
list = ['larry', 'curly', 'moe']
if 'curly' in list:
  print 'yay'
```



# List Methoden

Neues Element am Ende anfügen:

```python
l=[3,4,5]
l.append(42)
```

Neues Element an Index einfügen:

```python
l=['zwei','drei']
l.insert(0,'eins')
```

Element an Index entfernen

```python
list=['a','bb','b','c','d','e']
el=list.pop(1)	## return = entferntes Element
print(el)		## bb
el=list.pop()		## vorderstes Element entfernen
print(el)		## a
```

Siehe [docs.python](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists) – alle List Methoden (`append`, `extend`, `insert`, `remove`, `pop`, `clear`, `index`, `count`, `sort`, `reverse`, `copy`)



# Split

Teilt einen String aufgrund eines Trennzeichens in mehrere Substrings. Das Ergebnis ist ein Array aus Strings.

```python
csv_str="Mustermann,42,mm@test.com"
csv_data=csv_str.split(',')
print(csv_data)		## ['Mustermann', '42', 'mm@test.com']
```



# String Join

```python
"_".join(['a','b','c'])		# a_b_c
```



# Slices

Syntax `[von:bis]` – der bis Index ist nicht dabei.

```python
>>> a=[1,2,3,4,5,6,7,8]
>>> a[1:-1]
[2, 3, 4, 5, 6, 7]
```

Slices sind Kopien

von und bis können weggelassen werden.

```python
>>> a[3:]				## bis zum Ende
[4, 5, 6, 7, 8]
>>> a[:4]				## vom Anfang
[1, 2, 3, 4]
>>> a[:]				## komplette Kopie
[1, 2, 3, 4, 5, 6, 7, 8]
```

Slices ersetzen:

```python
# Slice der Länge 2 durch eine Liste aus 3 Elementen ersetzen:
>>> a[1:3] = [11,22,33]
>>> a
[1, 11, 22, 33, 4, 5, 6, 7, 8]
```

Slices löschen:

```python
>>> a
[1, 11, 22, 33, 4, 5, 6, 7, 8]
>>> a[4:7]=[]
>>> a
[1, 11, 22, 33, 7, 8]
```

Einfügen mit Slices:

```python
>>> a
[1, 11, 22, 33, 7, 8]
>>> a[2:2]=[555,666]
>>> a
[1, 11, 555, 666, 22, 33, 7, 8]
```

