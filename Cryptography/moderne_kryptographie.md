---
title: Moderne Kryptographie
subtitle: Übersicht
use_math: true
---

Schnellübersicht Stream- und Block-Cipher

# Moderne Kryptographie

Verschlüsseln auf Bit-Ebene (statt Buchstaben – wie bei den klassischen Verfahren)

Einteilung:

- Symmetrisch
  - stream-cipher
  - block-cipher
- Asymmetrisch
  - public key cryptography

plaintext, key, ciphertext: Strings aus Bits (0/1)

ciphertext gleiche Anzahl Bits wie plaintext



# Stream-Cipher

- Idee: **One-Time-Pad** ( = key, zufällig gewählter Bit-String so lang wie plaintext), ciphertext=plaintext XOR otpad, absolut sicher aber nicht praktikabel.
- Stream-Cipher: Annäherung an One-Time-Pad
  - Wähle eine Start-Bitfolge $K_0$ (128 bzw. 256 Bits) als seed
  - $K_0$ ist der symmetrische Schlüssel (shared secret key)
  - $K_1=\text{R}(K_0)$, $K_2=\text{R}(K_1)$, usw.
    - R (random) ist ein besonders guter Pseudo-Zufallszahlengenerator (vgl. `srand` und `rand`). Ergebnis lässt sich für einen Beobachter nicht von einer wirklich zufälligen Bitfolge unterscheiden.
  - Schlüssel werden aneinandergefügt $K_0 \mathbin\Vert K_1 \mathbin\Vert K_2 \mathbin\Vert K_3 \mathbin\Vert \ldots$ dann XOR mit plaintext



# Block-Cipher

Häufigst verwendet.

- Älter: DES, Triple-DES, Data Encryption Standard
- Aktuell: **AES**, Advanced Encryption Standard

plaintext wird in 128 Bit lange Blöcke zerteilt, aus diesen plus dem key (128 oder 256 Bits) entstehen 128 Bit ciphertext.
$$
C_i = \text{E}(K,P_i)
$$

- $P_i$ ... $i$-ter 128 Bit Plaintextblock

- $\text{E}(K,P_i)$ ... Encrypt, Verschlüsselungsfunktion

- $K$ ... Key (128 oder 256 Bit)

- $C_i$ ...  $i$-ter 128 Bit Ciphertextblock

Entschlüsseln
$$
P_i = \text{D}(K,C_i)
$$


<img src="fig/image-20201112105732350.png" alt="image-20201112105732350" style="zoom: 33%;" />

Dieses Verfahren wird **ECB** (electronic code book) Mode genannt.



Mit **CBC** (Cipher Block Chaining) Mode, werden die Daten noch besser unkenntlich gemacht.

XOR des i-ten plaintext Blocks mit dem vorhergehenden ciphertext Block
$$
C_i = \text{E}(K,P_i \oplus C_{i-1}) \\
C_0 = \text{IV}
$$

- IV ... initialization vector – Zufällige Zahl

<img src="fig/image-20201112110005595.png" alt="image-20201112110005595" style="zoom:33%;" />

**Stream Cipher** mittels block-cipher durch generieren von **Zufallszahlen**: $K_1, K_2, \ldots$:
$$
K_i = \text{E}(K,K_{i-1}) \\
K_0 = \text{IV}
$$
Es wird jeweils der Vorgänger-Key verschlüsselt.

Erkenntnis: Jede gute Block-Cipher ist auch ein guter Zufallszahlengenerator.
