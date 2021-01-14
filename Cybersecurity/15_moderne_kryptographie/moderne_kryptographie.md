## Moderne Kryptographie

Verschlüsseln auf Bit-Ebene (statt Buchstaben – wie bei den klassischen Verfahren)

Einteilung:

- Symmetrisch
  - stream-cipher
  - block-cipher
- Asymetrisch
  - public key cryptography

plaintext, key, ciphertext: String aus Bits (0/1)

key: 128 bzw. 256 Bits bei aktuellen Verfahren

ciphertext gleiche Anzahl Bits wie plaintext

### Stream-Cipher

- Idee: One-Time-Pad (zufällig gewählter Bit-String genauso lang wie plaintext = key), ciphertext=plaintext XOR otpad, absolut sicher aber nicht praktikabel.
- Annäherung an One-Time-Pad
  - Wähle eine Start-Bitfolge K0 (128 bzw. 256 Bits) als seed
  - Diese ist der Schlüssel
  - K₁=P(K₀), K2=P(K₁), usw.
    - P ist ein besonders guter Pseudo-Zufallszahlengenerator (vg. srand und rand). Ergebnis lässt sich für einen Beobachter nicht von einer wirklich zufälligen Bitfolge unterscheiden.
  - Schlüssel werden aneinandergefügt K₀ ‖ K₁ ‖ K₂ ‖ ... dann XOR mit plaintext
- Praxis Stream-Cipher ist eine spezielle Anwendung eines Block-Ciphers

### Block-Cipher

Häufigst verwendet.

- Älter: DES, Triple-DES, Data Encryption Standard
- Neu: AES, Advanced Encryption Standard

plaintext wird in 128 Bit lange Blöcke zerteilt, aus diesen plus dem key (128 oder 256 Bits) entstehen 128 Bit ciphertext.

- Cᵢ=E(K,Pᵢ) (für 1≤i≤k)

*Zeichnung ECB (electronic code book)*

Normaleweise wird durch XOR des i-ten plaintext Blocks mit dem vorhergehenden ciphertext Block die Analyse der Verschlüsselung weiter erschwert (CBC – Cipher Block Chaining).

- Cᵢ=E(K,Pᵢ ⊕ Cᵢ₋₁) (für 1≤i≤k)

- C₀ = IV (initialization vector) – Zufällige Zahl

*Zeichnung CBC*

Stream Cipher mittels block-cipher:

- Kᵢ=E(K,Kᵢ₋₁)

- K₀ = IV

block-cipher generiert die Zufallszahlen K₁, K₂, usw.
