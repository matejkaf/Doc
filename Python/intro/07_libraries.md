---
title: Python Standard Library (Module)
subtitle: Python Einführung
---

Die **Python Standard Library** enthält zahlreiche **Module** für unterschiedlichste Anwendungen.

[Übersicht über alle Python Standard Libraries](https://docs.python.org/3/library/)



# Importieren

Um die Bestandteile eines Moduls zu verwenden ist dieses zuerst zu importieren:

```python
>>> import math
>>> math.pi
3.141592653589793
```

Alle Bestandteile eines Moduls sind in einem eigenen **Namespace** (hier `math`) organisiert, daher schreibt man `math.pi` und nicht nur `pi`. 

mit `from ...` können selektiv einzelne Elemente eines Moduls ausgewählt und in den globalen Namespace übernommen werden.

```python
>>> from math import pi
>>> pi
3.141592653589793
>>> math.pi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'math' is not defined
```

Module können auch umbenannt werden:

```python
>>> import math as m
>>> m.pi
3.141592653589793
```



# sys

[`sys`](https://docs.python.org/3/library/sys.html#module-sys) — System-specific parameters and functions

**Kommandozeilen Argumente**

```python
import sys
sys.argv # array
sys.argv[0] # Skript Name
sys.argv[1:] # Nur die Argumente
x = " ".join(sys.argv[1:])

```

**Betriebssystem Info**

```python
>>> import sys
>>> sys.platform
'darwin'
```



# math

```python
>>> import math
>>> math.pi
3.141592653589793
>>> math.e
2.718281828459045
>>> math.ceil(3.14)
4
>>> math.floor(3.14)
3
>>> math.fabs(-3.14)  # Absolutwert
3.14
>>> math.sqrt(2)
1.4142135623730951
>>> math.degrees(math.pi)
180.0
>>> math.radians(180)
3.141592653589793

# usw. usf.
```



# csv

[`csv`](https://docs.python.org/3/library/csv.html#module-csv) — CSV File Reading and Writing

TODO
