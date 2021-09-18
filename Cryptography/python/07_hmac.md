---
title: HMAC
subtitle: hash-based message authentication code
use_math: true
---

# Allgemeines

[wikipedia : HMAC](https://en.wikipedia.org/wiki/HMAC)

Um Veränderungen einer Nachricht erkennen zu können ist ein Hash-Wert alleine zu wenig. Denn dieser Hash-Wert könnte vom Angreifer neu berechnet werden. Um Fälschungssicherheit zu erreichen wird der berechnete Hash-Wert zusätzlich mit einem geheimen Schlüssel gesichert.

Verschlüsselter Hash-Wert = MAC (message authentication code)

HMAC ist ein spezielles (häufig angewandtes) Verfahren. Für HMAC kann eine beliebige kryptografische Hashfunktion verwendet werden – z.B. HMAC-SHA256. Der Output von HMAC ist gleich lang wie das Ergebnis der Hashfunktion. Der Schlüssel kann beliebige Länge haben.

$\text{HMAC}(K,m)$$

Auf der Empfängerseite muss der für die HMAC Berechnung verwendet Schlüssel bekannt sein. Wenn sich der gleiche HMAC Wert ergibt wurde die Nachricht nicht manipuliert.

Da einem Angreifer der Schlüssel K nicht zur Verfügung steht kann die Nachricht nicht unerkannt verfälscht werden.



# Definition

[Quelle: wikipedia](https://en.wikipedia.org/wiki/HMAC#Definition)

$\begin{align}
  \operatorname{HMAC}(K, m) &= \operatorname{H}\Bigl(\bigl(K' \oplus opad\bigr) \parallel 
\operatorname{H} \bigl(\left(K' \oplus ipad\right) \parallel m\bigr)\Bigr) \\
                         K' &= \begin{cases}
                                 \operatorname{H}\left(K\right) & K\text{ is larger than block size} \\
                                 K                              & \text{otherwise}
                                \end{cases}
\end{align}$$

- H is a cryptographic hash function
-  ''m'' is the message to be authenticated
- ''K'' is the secret key
- $K'$ is a block-sized key derived from the secret key, ''K''; either by padding to the right with 0s up to the block size, or by hashing down to less than or equal to the block size first and then padding to the right with zeros
- ‖ denotes concatenation
- ⊕ denotes bitwise exclusive or (XOR)
- ''opad'' is the block-sized outer padding, consisting of repeated bytes valued 0x5c
- ''ipad'' is the block-sized inner padding, consisting of repeated bytes valued 0x36



**Block size** ([siehe Tabelle](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms)): 

- SHA-256: 512 Bit
- SHA-512: 1024 Bit
- SHA3-256: 1088 Bit

Bei der Hashwertberechnung werden die Input Daten in einzelnen chunks in block size Größe verarbeitet. Diese ist unterschiedlich zur Größe des finalen Hashwerts. [[*](https://stackoverflow.com/a/51335622)]



# Python

[Library : `hmac`](https://docs.python.org/3/library/hmac.html#module-hmac) — Keyed-Hashing for Message Authentication

[REPL : HMAC](https://replit.com/@htlmatejka/HMAC) 

```python
import hmac
import hashlib
import os
key = os.urandom(32)
text = b'Das ist ein Beispieltext'
h = hmac.new(key, text, hashlib.sha256)
print(h.name)
print(h.digest_size)
print(h.digest())
print(h.hexdigest())

h2 = hmac.new(key, text, hashlib.sha256)
if hmac.compare_digest(h2.digest(),h.digest()):
  print("MAC OK")
else:
  print("MAC Verification failure")
```

```
hmac-sha256
32
b'\x9a\x1fqjdG\xc6\xd3\xde\xf9\x11\xae\xf6\xbd\xfc\x7f\xb6^\xfa\xd4\xda\xfe\xd9\xfeh6\xe7\xc3\xa2\xd6>\x0e'
9a1f716a6447c6d3def911aef6bdfc7fb65efad4dafed9fe6836e7c3a2d63e0e
MAC OK
```

Hinweis: Empfehlung ist dass der Schlüssel genau so lang ist wie die Hashlänge (`digest_size`).

