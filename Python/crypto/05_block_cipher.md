---
title: Kryptographie in Python
subtitle: Block Cipher
---

Library: [Cryptography](https://cryptography.io/en/latest/)

[Cryptography Library: Symmetric encryption](https://cryptography.io/en/latest/hazmat/primitives/symmetric-encryption.html)

[REPL BlockCipher](https://replit.com/@htlmatejka/BlockCipher#main.py)

## Verschlüsseln

Verschlüsseln einer Nachricht die ein Vielfaches von 16 Bytes (AES Block length) lang ist.

```python
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

key = os.urandom(32) # 256 Bit key
iv = os.urandom(16)  # 128 bit initialization vector

cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
encryptor = cipher.encryptor()

plaintext = b"a secret message" # 16 Bytes lang
ciphertext = encryptor.update(plaintext) + encryptor.finalize()
print(ciphertext.hex(' '))
```

```
ee 50 a1 6d e6 77 c1 1a 85 36 44 a0 4f 9e 85 9c
```

Nach Aufruf von `finalize` kann das `encryptor` nicht mehr weiter verwendet werden.





## Padding

[PKCS#7](https://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS#5_and_PKCS#7)

