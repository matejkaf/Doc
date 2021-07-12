---
title: Caesar
subtitle: Caesar Verschlüsselung in Python
---

Ein Text soll mittels Caesar verschlüsselt werden.

```python
plaintext = "HALLO WELT"
key = 4  # 1, ..., 26
```

Als plaintext sind die 26 lateinischen Großbuchstaben zugelassen.

Der Schlüssel ist die Anzahl der Buchstaben um die verschoben werden soll

```
key = 4
ABCDEFGHI...		
    ^
	 E
  E
 E
E
EFGHIJKLM...

PLAIN:  ABCDEFGHIJKLMOPQRSTUVWXYZ
CIPHER: EFGHIJKLMOPQRSTUVWXYZABCD
```

Aufgabe: Verschlüssele `"HALLO WELT"`

# Schritt 1: Verschlüsseln eines Buchstabens

Erster Versuch:

```python
plainchar = "H"
print(plainchar)
cipherchar = plainchar+4
print(cipherchar)
```

Erkenntnis: So einfach gehts nicht!

Fehlermeldung:

```
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    cipherchar = plainchar+4
TypeError: can only concatenate str (not "int") to str
```

ASCII Code eines Buchstaben ermitteln?

Mit `ord`

```python
plainchar = "H"
print(plainchar)
print(ord(plainchar))
```

Nun kann der Schlüssel addiert werden.

```python
cipherascii = ord(plainchar)+4
```

Vom ASCII Code zum Buchstaben? Mit `chr`.

```python
cipherchar = chr(cipherascii)
```



# Expose

- Einen Buchstaben verschlüsseln
- `ord` und `chr`
- Funktion für einen Buchstaben anlegen
- wrap-around berücksichtigen (mit if Anweisung)
- Schleife über alle Buchstaben im Text
- Funktion aufrufen und String zusammenbauen
- Sicherstellen, dass alles Großbuchstaben sind
- Alle nicht Großbuchstaben entferenen
- Benutzereingabe
- Über die Kommandozeile aufrufen mit Argumenten und Optionen







## Ideen

- Lookup Table statt Addition und if Anweisung



# REPL

[Caesar](https://replit.com/@franzmatejka/Caesar)

