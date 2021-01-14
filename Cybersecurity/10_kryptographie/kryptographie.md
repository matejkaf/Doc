# Kryptographie

Geheimschrift / Verschlüsselungsverfahren

Allgemein: Information widerstandsfähig gegen Manipulation und unbefugtes Lesen machen.



## Ziele der Kryptographie

Es sollen Verschlüsselungsverfahren (Chiffre, engl. Cipher) definiert werden die eines (oder mehrere) der folgenden Ziele erfüllen:

- Vertraulichkeit/Zugriffsschutz: Zugriff nur für Berechtigte
- Integrität/Änderungsschutz: Veränderung kann erkannt werden.
- Authentizität/Fälschungsschutz:  Urheber der Daten ist eindeutig identifizierbar sein.
- Verbindlichkeit/Nichtabstreitbarkeit: Urheberschaft nicht bestreitbar.



## Grundbegriffe

- Plaintext
- Ciphertext
- Key

Alice Bob Eve

*Zeichnung: Alice schickt an Bob, plaintext-encrypt (cipher+key)-ciphertext-decrypt (cipher+key)-plaintext, Eve hört mit*



## Klassische Kryptographie

Ohne Computer-Unterstützung. Gelten heute als unsicher.

Einzelne Buchstaben werden betrachtet und entweder:

- (Substitution) durch einen anderen Buchstaben ersetzt, oder
- (Transposition) wechseln die Position mit anderen Buchstaben

**Schlüssel**: Die Information die Sender und Empfänger zum ver- und entschlüsseln brauchen



### Caesar-Chiffre

[Video – Die Caesar Verschlüsselung - Was ist eine Verschlüsselung?](https://youtu.be/DcX77qgbBZw)

[Video – Einleitung+Caesar](https://youtu.be/-nK32SkZdgY)

*Was ist der Schlüssel im Caesar Verfahren*?

*Allgemeines Substitutionsverfahren, Umstellung (Permutation) des Alphabets = Schlüssel*

Diese Verfahren nennt man Monoalphabetische Substition



### Polyalphabetische Substitution

Z.B. Vignère

- [Video: Krypto im Advent 2015 - Vigenère-Verschlüsselung](https://youtu.be/4y4nCG8631g)
- [Video: Kryptologie - Vigenere Code](https://youtu.be/Bc7I9tD4PuA)
- [Video: Die Vigenère-Chiffre und der Kasiski-Test](https://youtu.be/Y6qimy9o3f4)



### Transposition-Chiffre

- Scytale-Cipher (von den Spartanern verwendet?!) = Gartenzaun-Verschlüsselung. Beispiel: diezweiahitsisthierx, 5 Zaunlatten, es ergeben sich 4 Zeilen, beim Dechiffrieren muss man die Anzahl der Zeilen ausrechnen.

Sonstige:

- [Playfair Cipher](https://youtu.be/-KjFbTK1IIw)



## Moderne Kryptographie

Computerunterstützt – Daten werden so verändert, dass sie nicht mehr von zufälligen Werten unterscheidbar sind.

