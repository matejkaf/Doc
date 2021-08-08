---
title: Key Derivation
subtitle: Sicheres Passwort Hashing
---



> Key derivation and key stretching algorithms are designed for secure password hashing. Naive algorithms such as `sha1(password)` are not resistant against brute-force attacks. A good password hashing function must be tunable, slow, and include a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography)).

Anwendung:

- Speichern eines Passworts in einem File
- Wandeln eines Passworts in einen 128/256 Bit Key (für block cipher)



# PBKDF2

[Python : hashlib#key-derivation](https://docs.python.org/3/library/hashlib.html#key-derivation)

`hashlib.pbkdf2_hmac(hash_name, password, salt, iterations, dklen=None)`

> The function provides PKCS#5 password-based key derivation function 2. It uses HMAC as pseudorandom function.

```python
import hashlib
dk = hashlib.pbkdf2_hmac('sha256', b'password', b'salt', 100000)
dk.hex()
```

Generieren von 128 Bit IV und 256 Bit Key aus einem Passwort.

```python
salt = os.urandom(16) # random 16 byte salt
print(salt.hex())
password=b'geheim'
# 128 Bit IV und 256 Bit Key – 16 bytes + 32 bytes
derived_key = hashlib.pbkdf2_hmac('sha256', password, salt, 100_000, dklen=16+32)
print(derived_key.hex())
print(len(derived_key))
iv = derived_key[:16]
key = derived_key[16:]
```

[REPL : PW PBKDF2](https://replit.com/@htlmatejka/PW-PBKDF2)

Zum Entschlüsseln wird Salt benötigt. Da dieses nicht sicherheitsrelevant ist kann es unverschlüsselt mit den verschlüsselten Daten transportiert werden.



# Crypt

Unix Passwörter

[Python : crypt Library](https://docs.python.org/3/library/crypt.html)

[REPL : PW-Crypt-SHA512](https://replit.com/@htlmatejka/PW-Crypt-SHA512)

```python
# password key derivation / key stretching
# UNIX crypt mit SHA-512

import crypt
import getpass
import hmac

# Zeile aus dem password File
pwline = 'matejka:$6$Y.6vLGlD1cGsutIg$Hn2/2.hNyojM19F1AwNHPAzAHEk.3vPhsOqWOGyds5hieGvedb45DCxV5aqZ194w12zhaet1rhWJyCx/mzePk.:1000:1000:Franz MATEJKA,,,:/home/matejka:/bin/bash'
pw_elements = pwline.split(':')
salt_and_hash = pw_elements[1]
salt = salt_and_hash[:salt_and_hash.rfind('$')] # $6$Y.6vLGlD1cGsutIg

password = getpass.getpass(prompt='Password: ') # franz
#password = 'franz'

crypted_password = crypt.crypt(password, salt=salt) # algorithm indicated by $digit$

if hmac.compare_digest(crypted_password, salt_and_hash):
  print('login OK')
else:
  print('login FAILED')


```

[Python : getpass](https://docs.python.org/3/library/getpass.html) – verdecktes einlesen eines Passworts

An `crypt.crypt` kann als zweiter Parameter der komplette verschüsselte Passwort (`$6$...$...`) übergeben werden. Durch `hmac.compare_digest(a, b)` ([Library : hmac](https://docs.python.org/3/library/hmac.html)) statt `==` werden sidechannel (timing) Angriffe verhindert.

## Rounds

Um einen brute force Angriff zu erschweren wird wiederholt gehasht. Default bei crypt ist 5000. Mit `crypt.mksalt` können die Runden definiert werden, diese werden in der Form `$6$rounds=10000$...` in den gehashten Passwort-String geschrieben.

```python
password = 'geheim'
salt = crypt.mksalt(method=crypt.METHOD_SHA512, rounds=10000)
print(salt)
crypted_password = crypt.crypt(password, salt=salt)
print(crypted_password)
```

```
$6$rounds=10000$aP2SKm6cgh1TloTC
$6$rounds=10000$aP2SKm6cgh1TloTC$SzskHgEa2R0aagxKgUwAVEJNrLyDB9gZQhQa3FZwwKN3jF1xNz.g1xvqImNdQMuQ7WEOM.HYIk1DQo6cRWyAs/
```

