

# Datum

Arbeiten mit Datumswerten

TODO

Könnte später dann beim Einlesen von Geburtsdaten aus einer CSV Datei verwendet werden.



# She-Bang

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

