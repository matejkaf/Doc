---
title: Kryptographie in Python
subtitle: Block Cipher
---

* TOC
{:toc}

Verschlüsseln eines Texts mittels AES block cipher mit Mode CBC (Cipher Block Chaining).

- Library: [Cryptography](https://cryptography.io/en/latest/)

- [Cryptography Library: Symmetric encryption](https://cryptography.io/en/latest/hazmat/primitives/symmetric-encryption.html)

- [[REPL:BlockCipher](https://replit.com/@htlmatejka/BlockCipher#main.py)]

# Verschlüsseln

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

Nach Aufruf von `finalize` kann `encryptor` nicht mehr weiter verwendet werden.



# Padding

Die plaintext Daten müssen ein Vielfaches von 16 Byte (128 Bits) sein. Falls nicht muss ein Padding am Ende ergänzt werden.

Unterschiedliche Möglichkeiten, z.B. [PKCS#7](https://en.wikipedia.org/wiki/Padding_(cryptography)#PKCS#5_and_PKCS#7).

**PKCS#7**: Die Nachricht wird durch angefügte Füllbytes auf ein Vielfaches von 128 Bit (16 Byte) erweitert. Die Padding Bytes haben den Wert der Padding Länge. Es gibt immer ein padding – sind die Daten ein Vielfaches von 16 Bytes so wird ein Padding der Länge 16 mit Wert `\x10` verwendet.



## Verschlüsseln mit Padding

```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

plaintext_str = "Zu verschlüsselnde Nachricht"
plaintext = plaintext_str.encode('utf-8')
padder = padding.PKCS7(algorithms.AES.block_size).padder()
plaintext_padded = padder.update(plaintext) + padder.finalize()
print(plaintext_padded)
# now encrypt the padded data
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
encryptor = cipher.encryptor()
ciphertext = encryptor.update(plaintext_padded) + encryptor.finalize()
print(ciphertext.hex())
```

## Entschlüsseln mit Padding

```python
# decrypt
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
decryptor = cipher.decryptor()
plaintext_padded = decryptor.update(ciphertext) + decryptor.finalize()
print(plaintext_padded)
# after decryption remove padding
unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
plaintext = unpadder.update(plaintext_padded) + unpadder.finalize()
print(plaintext)
```

[[REPL BlockCipher](https://replit.com/@htlmatejka/BlockCipher)]



# Simulation einer Datenübertragung

- Key Generator: erzeugt einen 256 Bit Key und speichert diesen in einer Datei `key.bin` – diese muss auf sicherem Weg mit Sender und Empfänger geteilt werden.
- Sender ...

## Key Generator

Speichern eines gemeinsamen Schlüssels (shared secret key) in eine Datei `key.bin`

```python
import os

# generate key
key = os.urandom(32) # 256 Bit key
print(key)

# write to binary file
f = open('key.bin', 'wb') # write / binary mode
f.write(key)
f.close()

# read from binary file (for testing)
print('*** READ ***')
f = open('key.bin','rb')
key_read = f.read()
f.close()
print(key_read)

# python3 -m http.server 8000
# wget https://BlockCipherKeyGenerator.htlmatejka.repl.co/key.bin
```

[[REPL BlockCipherKeyGenerator](https://replit.com/@htlmatejka/BlockCipherKeyGenerator)]

Sender und Empfänger müssen diese Datei (`key.bin`) haben (shared key). Repl unterstützt aber keinen direkten Download von generierten Files. Text-copy-paste der Dateiinhalte verändert die Daten da diese Binär sind (Beispiel warum base64 sinnvoll ist).

Lösung – Starten eines lokalen HTTP Servers:

```bash
$ python3 -m http.server 8000
```

und `wget` von anderen REPLs aus:

```bash
$ wget https://BlockCipherKeyGenerator.htlmatejka.repl.co/key.bin
```

[stackoverflow:One line ftp server in python](https://stackoverflow.com/a/4994745)

## Sender

Die Verschlüsselung erfolgt mit AES und Mode CBC. Für CBC ist ein 128 Bit Initialization Vector (IV) notwendig. Dies soll eine zufällige Zahl sein, ist aber nicht geheim, d.h. kann mit den verschlüsselten Daten mitgeschickt werden.

> In [cipher-block chaining mode](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher-block_chaining_(CBC)) (CBC mode), the IV need not be secret, but must be unpredictable (In particular, for any given plaintext, it must not be possible to predict the IV that will be associated to the plaintext in advance of the generation of the IV.) at encryption time. [[wikipedia:Initialization vector](https://en.wikipedia.org/wiki/Initialization_vector)]



> The IV has to be non-repeating and, for some modes, random as well. The initialization vector is used to ensure distinct ciphertexts are produced even when the same plaintext is encrypted multiple times independently with the same key.[[wikipedia:Block cipher mode of operation]](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)

Der Sender schreibt den IV und die verschlüsselten Daten in eine Datei `encrypt.bin` und verwendet dazu den Schlüssel in `key.bin`:

```python
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

# text to encrypt
plaintext = 'Guten Morgen, welch ein schöner Tag'
plaintext_byte = plaintext.encode('utf-8')

# read the secret key
f = open('key.bin','rb')
key = f.read()
f.close()
print(key)

# create IV
iv = os.urandom(16)  # 128 bit random initialization vector

# pad to multiple of 16 bytes
padder = padding.PKCS7(algorithms.AES.block_size).padder()
plaintext_byte_padded = padder.update(plaintext_byte) + padder.finalize()

# encrypt padded data
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
encryptor = cipher.encryptor()
ciphertext = encryptor.update(plaintext_byte_padded) + encryptor.finalize()

# combine iv and encrypted data
data = iv + ciphertext

# save data in binary file
f = open('encrypted.bin', 'wb') # write / binary mode
f.write(data)
f.close()

print(data)

# python3 -m http.server 8000
```

[[REPL BlockCipherSender](https://replit.com/@htlmatejka/BlockCipherSender)]

Programm "Sender" speichert in eine Datei `encrypted.bin` aus der Programm "Empfänger" liest.

## Empfänger

```python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding

# wget https://BlockCipherSender.htlmatejka.repl.co/key.bin
# wget https://BlockCipherSender.htlmatejka.repl.co/encrypted.bin

# read from file
f = open('encrypted.bin','rb')
data = f.read()
f.close()

# split into IV and encrypted data
iv = data[:16]
ciphertext = data[16:]

# read key from file
f = open('key.bin','rb')
key = f.read()
f.close()

# decrypt
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
decryptor = cipher.decryptor()
plaintext_padded = decryptor.update(ciphertext) + decryptor.finalize()
print(plaintext_padded)

# remove padding
unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
plaintext_byte = unpadder.update(plaintext_padded) + unpadder.finalize()
print(plaintext_byte)

# now decode into UTF8
plaintext = plaintext_byte.decode('utf-8')
print(plaintext)
```

[[REPL:BlockCipherReceiver](https://replit.com/@htlmatejka/BlockCipherReceiver)]

