---
title: Dictionaries
subtitle: Python Einführung
---

Wie eine Liste die einen String anstatt eines ganzzahligen Index verwendet.

```python
dict = {}
dict['a'] = 'alpha'
dict['g'] = 'gamma'
dict['o'] = 'omega'
print(dict['g'])
print(dict)
print(dict['z'])	## KeyError!
```

Ein Dictionary speichert Key / Value Paare. `dict['key']=value`

Initialisierung:

```python
d = {'eins':1, 'zwei':2, 'drei':3}
```

Schleife (über die Keys):

```python
for key in d: 
  print key ## eins, zwei, drei
```

`in`:

```python
if 'z' in dict: 
  print dict['z']     ## Avoid KeyError
```



# Verschachtelungen

Dicts und Lists können fast beliebig ineinander verschachtelt werden:

```python
data = {'name':'Mustermann', 'ageOfChildren': [3,5,9]}
```

