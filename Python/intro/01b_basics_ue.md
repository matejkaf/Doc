---
title: Basics
subtitle: Übungen
---

# input

Mit der `input` Funktion sind Eingaben möglich:

```python
print('Gib deinen Namen ein:')
name = input()
print('Hallo, ' + name)
```

Bei der Eingabe von Zahlen ist zu bedenken, dass dies Strings sind und für evtl. Berechnungen erst mit `int()` bzw. `float()` gewandelt werden müssen.

```python
valueStr = input('Ganze Zahl')
value = 2*int(valueStr)
print(value)
```

```python
valueStr = input('Komma-Zahl')
value = 2.718*float(valueStr)
print(value)
```



# Aufgaben

**Übung (Celsius nach Fahrenheit)**

Schreibe ein Python Skript das zur Eingabe einer Temperatur in Fahrenheit auffordert und diese in Celsius umgerechnet wieder ausgibt. Die Ausgabe soll so aussehen:

```bash
42 Grad Fahrenheit sind 5.555555555555555 Grad Celsius
```

Zusatzaufgabe (Recherche): gib das Ergebnis auf 2 Kommastellen gerundet aus.

---

**Übung (Name und Alter)**

Schreibe ein Python Skript das zur Eingabe eines Namens und eines Geburtsjahrs auffordert. Die Ausgabe soll den Namen und das Alter enthalten.

```
Name:
Franz
Geburtsjahr
1969
Liebe/r Franz du bis 51 Jahre alt
```

---

