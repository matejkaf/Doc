---
title: Kryptographie
subtitle: Grundlagen
tags: [lecture,2AHITS_Teach]
---

# Kryptographie

Geheimschrift / Verschlüsselungsverfahren

Information widerstandsfähig gegen unbefugtes Lesen und Manipulation machen.



## Ziele

Es sollen Verfahren (Chiffre, engl. Cipher) definiert werden die eines (oder mehrere) der folgenden Ziele erfüllen:

- Vertraulichkeit (*confidentiality*) / Zugriffsschutz
  Zugriff nur für Berechtigte
- Integrität (*integrity*) / Änderungsschutz
  Veränderung kann erkannt werden.
- Authentizität (*authentication*) / Fälschungsschutz
  Urheber der Daten ist eindeutig identifizierbar.
- Verbindlichkeit (*non-repudiation*) / Abstreitschutz
  Urheberschaft nicht bestreitbar.



## Grundbegriffe

- Alice Bob Eve
- Plaintext (Klartext)
- Ciphertext (Geheimtext)
- Key, **Schlüssel**: Die Information die Sender **und** Empfänger zum ver- und entschlüsseln brauchen.
- Verschlüsselungsmethode / Chiffre / Cipher



*Zeichnung: Alice schickt an Bob, plaintext-encrypt (cipher+key)-ciphertext-decrypt (cipher+key)-plaintext, Eve hört mit*

- Symmetrische Verschlüsselung (shared key)

- Public Key Verschlüsselung



## Klassische Kryptographie

Ohne Computer-Unterstützung – gelten heute als unsicher.

Einzelne Buchstaben werden betrachtet und entweder:

- **Substitution:** durch einen anderen Buchstaben ersetzt, oder
- **Transposition:** wechseln die Position mit anderen Buchstaben



### Caesar-Chiffre

[Video – Die Caesar Verschlüsselung - Was ist eine Verschlüsselung? [5:21]](https://youtu.be/DcX77qgbBZw)

*Was ist der Schlüssel im Caesar Verfahren*?

*Allgemeines Substitutionsverfahren, Umstellung (Permutation) des Alphabets = Schlüssel*

Diese Verfahren nennt man **monoalphabetische Substition**



### Polyalphabetische Substitution

Z.B. Vignère

- [Video: Krypto im Advent 2015 - Vigenère-Verschlüsselung](https://youtu.be/4y4nCG8631g)
- [Video: Die Vigenère-Chiffre und der Kasiski-Test [5:56]](https://youtu.be/Y6qimy9o3f4)

### Transposition-Chiffre

- [Scytale-Cipher](https://de.wikipedia.org/wiki/Skytale) (von den Spartanern verwendet?!)
- Gartenzaun-Verschlüsselung. [Erklärvideo Gartenzaun-Verschlüsselung [2:56]](https://youtu.be/EIJ73KApF18)
  - Beispiel: diezweiahitsisthierx, 5 Zaunlatten, es ergeben sich 4 Zeilen, beim Dechiffrieren muss man die Anzahl der Zeilen ausrechnen.

Sonstige:

- [Playfair Cipher (en) [19:17]](https://youtu.be/-KjFbTK1IIw)



## Moderne Kryptographie

Computerunterstützt – Daten werden so verändert, dass sie nicht mehr von zufälligen Werten unterscheidbar sind. 

Grundidee: 

- XOR mit einem pseudozufälligen Bitmuster
- Mathematik mit großen Primzahlen

