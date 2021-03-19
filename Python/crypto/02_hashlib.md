---
title: Kryptographie in Python
subtitle: Hashing
---

[`hashlib` — Secure hashes and message digests](https://docs.python.org/3/library/hashlib.html)

[REPLIT HashlibTest](https://repl.it/@franzmatejka/HashlibTest)

```python
import hashlib

plaintext = "Text der gehasht werden soll ö ä ü"
plaintext_bytes = plaintext.encode('utf-8')

m = hashlib.sha256()
m.update(plaintext_bytes)
hash_value = m.digest() # hashwert als bytestring

print(type(hash_value)) # <class 'bytes'>
print('digest:')
print(hash_value)
print(f'digest_size:{m.digest_size*8} bits {m.digest_size} bytes')
```

base16 Encoding

```python
hash_value_base16 = m.hexdigest()
print(hash_value_base16)
```

base64 Encoding

```python
import base64

# https://docs.python.org/3/library/base64.html
hash_value_base64 = base64.b64encode(hash_value) # bytestring als parameter
print(hash_value_base64) # bytestring
```

base16 Encoding (Variante mit base64 Library)

```python
hash_value_base16 = base64.b16encode(hash_value)
print(hash_value_base16) # bytestring
```

Decoding (Base64 String ⟶ Bytestring)

```python
decoded = base64.b64decode(hash_value_base64)
```



```python
print(hashlib.algorithms_available)
```

```
{'sha384', 'sha3_224', 'sha512_224', 'sm3', 'sha3_512', 'sha224', 'shake_256', 'sha1', 'md5-sha1', 'sha512_256', 'md4', 'blake2b', 'whirlpool', 'sha512', 'md5', 'sha3_256', 'sha3_384', 'blake2s', 'ripemd160', 'shake_128', 'sha256'}

```



**Experiment** — sha256 Hash einer Datei in Base64 Format ermitteln.

[REPLIT HashFile](https://repl.it/@franzmatejka/HashFile)

```python
import hashlib
import base64

in_file = open("goethe.md", "rb") # opening for [r]eading as [b]inary
data = in_file.read() # data ... bytestring

m = hashlib.sha256()
m.update(data)
hash_value = m.digest() # hashwert als bytestring
hash_value_base64 = base64.b64encode(hash_value)
print(hash_value_base64)

in_file.close()
```

```
b'v/jIRLy+z5z9BTzvD3oJ9ZjllY5K64wIkaNsyaeWPkM='
```

