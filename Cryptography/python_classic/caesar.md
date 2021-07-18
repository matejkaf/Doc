---
title: Caesar
subtitle: Caesar Verschlüsselung in Python
---

* TOC
{:toc}
# Allgemeines

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

# Schritt für Schritt

## Verschlüsseln eines Buchstabens

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

Vom ASCII Code zurück zum Buchstaben? Mit `chr`:

```python
cipherchar = chr(cipherascii)
```



## Funktion für einen Buchstaben

```python
def encrypt_char(plainchar, key):
  cipherascii = ord(plainchar)+key
  return chr(cipherascii)

plainchar = "H"
cipherchar = encrypt_char(plainchar,4)
print(cipherchar)
```



## wrap-around

Aus `Z` wird `^`.

```python
def encrypt_char(plainchar, key):
  cipherascii = ord(plainchar)+key
  if cipherascii>ord("Z"):
    cipherascii -= 26
  return chr(cipherascii)
```



## Kompletter Text

```python
plaintext="GANZGEHEIM"
for c in plaintext:
  print(c)
```



```python
plaintext="GANZGEHEIM"
key=4
for c in plaintext:
  print(f"{c} --> {encrypt_char(c,key)}")
```



## Als Funktion

und mit Wandlung in Großbuchstaben

```python
def encrypt_text(plaintext, key):
  ciphertext = ""
  plaintext = plaintext.upper()
  for c in plaintext:
    ciphertext += encrypt_char(c,key)
  return ciphertext

plaintext = "GanzGeheim"
key=4
ciphertext = encrypt_text(plaintext,key)
print(ciphertext)
```



## Andere Buchstaben entfernen

Regular Expression

[](https://pythex.org)

```python
import re
plaintext = "GANZ_GEHEIM!?"
result = re.sub(r"[^A-Z]", "", plaintext)
print(result)
```



```python
def encrypt_text(plaintext, key):
  ciphertext = ""
  plaintext = plaintext.upper()
  plaintext = re.sub(r"[^A-Z]", "", plaintext) # <---!!!
  for c in plaintext:
    ciphertext += encrypt_char(c,key)
  return ciphertext
```



## Userinput

```python
plaintext = input("Klartext eingeben: ")
```



## Übungen

#### Übung (decrypt)

Erweitere das Programm so, dass auch wieder die Entschlüsselung möglich ist.

---



## Kommandozeile



# Expose

- Einen Buchstaben verschlüsseln
- `ord` und `chr`
- Funktion für einen Buchstaben anlegen
- wrap-around berücksichtigen (mit if Anweisung)
- Schleife über alle Buchstaben im Text
- Funktion aufrufen und String zusammenbauen
- Funktion `encrypt_text` erstellen
- Sicherstellen, dass alles Großbuchstaben statt Kleinbuchstaben sind
- Alle nicht Großbuchstaben entferenen
- Benutzereingabe
- Über die Kommandozeile aufrufen mit Argumenten und Optionen



## Ideen

- Lookup Table statt Addition und if Anweisung



# REPL

[Caesar](https://replit.com/@franzmatejka/Caesar)

