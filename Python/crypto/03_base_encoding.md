---
title: Kryptographie in Python
subtitle: Base Encoding
description: Base16, Base64
---

Binärdaten (Python Bytestrings) als Text (ASCII String) darstellen.

- Hintergrund: ASCII Texte (Codes 32-126) können mit den geringsten Problemen zwischen unterschiedlichen Systemen ausgetauscht werden. Sie können in Nachrichten versendet und handschriftlich notiert werden.



## Beispieldaten

```python
bytestring = b'\x0a\x31\x55\7e'
print(plaintext_bytes.hex())
```



## base64 Encoding

([base64 Library](https://docs.python.org/3/library/base64.html))

```python
import base64
input_byte = b'\x0a\x31\x55\7e'
base64encoded = base64.b64encode(input_byte) 
print(base64encoded) # bytestring
```

```
b'CjFVB2U='
```



## base64 Decoding

Base64 String ⟶ Bytestring

```python
decoded_byte = base64.b64decode(base64encoded)
print(decoded_byte)
```

```
b'\n1U\x07e'
```



## base16 Encoding

```python
base16encoded = base64.b16encode(input_byte)
print(base16encoded) # bytestring (hex Großbuchstaben)
```

```
b'0A31550765'
```



## Base16 Decoding

```
decoded_byte = base64.b16decode(base16encoded)
print(decoded_byte)
```

```
b'\n1U\x07e'
```

