---
title: Komandozeilen-Argumente
subtitle: Python
---

# Direkt

Direkter Zugriff auf `sys.argv`

```python
import sys
sys.argv # array
sys.argv[0] # Skript Name
sys.argv[1:] # Nur die Argumente
x = " ".join(sys.argv[1:])
```



# Library

 [argparse](https://docs.python.org/3/library/argparse.html)

```python
import argparse

parser = argparse.ArgumentParser(description='Tool Description.')

# configure arguments and options with 'add_argument'

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

# parse arguments and options
args = parser.parse_args()

#access arguments
print(args)
print(args.fileName)

# test options
if args.boolTest:
  print("is True")
else:
  print("is NOT True")

# option with argument
if(args.fromdate):
  print(f"set to '{args.fromdate}''")
  print(type(args.fromdate)) # always string!
```

Mit Option `-h, --help` wird ein automatisch erzeugter Hilfetext angezeigt.



# Mehrere Files

Wenn die Argumente lesbare Files sein sollen ([Multiple files for one argument in argparse](https://stackoverflow.com/a/27008413)). Z.B. Verhalten von `cat file1.txt file2.txt`

```python
parser.add_argument('file', type=argparse.FileType('r'), nargs='+')
args = parser.parse_args()
print(args.files)
```

Fehlermeldung wenn eine Datei nicht lesbar ist. Bearbeitung:

```python
args = parser.parse_args()
for f in args.files:
  print(f)
  for line in f:
    print(line)
```

Mit `nargs='+'` muss mindestens ein Argument angegeben werden (sonst Fehlermeldung). `nargs='*'` ermöglicht auch 0 Argumente.

# Stdin

Lesen von stdin wenn kein Argument angegeben:

```python
parser.add_argument('files', type=argparse.FileType('r'), nargs='*', default=[sys.stdin])
```

Links

- [argparse:type](https://docs.python.org/3/library/argparse.html#type)

