---
title: Verändern von verschlüsselten Daten
subtitle: Kryptographie in Python
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

# Hintergrund

Eine Verschlüsselung von Daten erfüllt in der Regel das kryptografische Ziel der Vertraulichkeit. Das bedeutet allerdings nicht dass die Daten vor Veränderungen geschützt sind. Mit ein wenig Kenntnis der kryptografischen Mechanismen kann es sogar sehr leicht sein Daten zu verändern.

In diesem Beispiel wird der **CTR Mode** verwendet da dieser besonders anfällig für diese Art des Angriffs hat. CTR Mode verhält sich wie ein Stream Cipher es wird eine Bitmaske generiert die mit den Daten per XOR verknüpft wird.

Kennt ein Angreifer Daten aus dem plaintext so kann er diese durch eine XOR Manipulation verändern.



# Ver- und Entschlüsseln

$$p$$ ist ein Byte aus dem Plaintext und dem Angreifer bekannt. $$k$$ (Key, Schlüssel) ist ein Byte aus der Bitmaske die verwendet wird um $$p$$ zu verschlüsseln. Der Ciphertext ergibt sich mit:

$$c=p \oplus k$$

Das Entschlüsseln ergibt sich durch ein weiteres anwenden von $$k$$:

$$c \oplus k = (p \oplus k) \oplus k = p \oplus (k \oplus k) = p \oplus 0 = p$$

Durch die XOR Operation hebt sich der Schlüssel auf weil $$k \oplus k = 0$$ und $$x \oplus 0 = x$$ gilt.



# Manipulation

Ein Angreifer der $$c$$ abgefangen hat und $$p$$ kennt kann dieses so manipulieren, dass der Empfänger statt dem $$p$$ ein beliebiges $$p'$$ empfängt.

Der Angreifer ersetzt $$c$$ durch $$c'$$:

$$c'= c \oplus p \oplus p'$$

Dazu muss der Angreifer den Schlüssel nicht kennen.

Der Empfänger erhält $$c'$$ und entschlüsselt mit $$k$$:
$$
\begin{align*}
c' \oplus k &= (c \oplus p \oplus p') \oplus k \\
 &= ((p \oplus k) \oplus p \oplus p') \oplus k \\
 &= (p \oplus p \oplus k \oplus p') \oplus k \\
 &= (1 \oplus k \oplus p') \oplus k \\
 &= (k \oplus p') \oplus k \\ 
 &= p' \oplus k \oplus k \\
 &= p'
\end{align*}
$$
Der Empfänger erhält die manipulierten Daten $$p'$$, es gibt keine Möglichkeit die Manipulation zu erkennen.



# Code

Proof of Concept, [REPL](https://replit.com/@htlmatejka/ManipulateBlockCipher#main.py)

```python
# Ein Angreifer ändert die verschlüsselten Daten ohne den Schlüssel zu kennen

import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes


# [CTR mode](https://cryptography.io/en/latest/hazmat/primitives/symmetric-encryption/#cryptography.hazmat.primitives.ciphers.modes.CTR)

key = os.urandom(32) # 256 Bit key
nonce = os.urandom(16)  # 128 bit nonce vector

cipher = Cipher(algorithms.AES(key), modes.CTR(nonce))

# 
# Verschlüsseln
#
encryptor = cipher.encryptor()

#             0123456789012345
plaintext = b"pay alice 123,--" # 16 Bytes lang
print(plaintext)
ciphertext = encryptor.update(plaintext) + encryptor.finalize()
print(ciphertext.hex(' '))

#
# Eve manipuliert die Nachricht
#
ciphertext = bytearray(ciphertext) # unmutable bytes durch mutable bytearray ersetzen
ciphertext[10] = ciphertext[10] ^ ord('1') ^ ord('9')
ciphertext[11] = ciphertext[11] ^ ord('2') ^ ord('9')
ciphertext[12] = ciphertext[12] ^ ord('3') ^ ord('9')

# 
# Entschlüsseln
#
decryptor = cipher.decryptor()
plaintext = decryptor.update(ciphertext) + decryptor.finalize()
print(plaintext)
```

