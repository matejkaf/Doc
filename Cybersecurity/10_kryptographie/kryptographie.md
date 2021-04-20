---
title: Kryptographie
subtitle: Grundlagen
tags: [lecture,2AHITS_Teach]
---

* TOC
{:toc}

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

<img src="fig/Vigenere_square.png" alt="Vigenère_square_shading.svg" style="zoom:25%;" />



### Transposition-Chiffre

Umstellung der Reihenfolge

- [Scytale-Cipher](https://de.wikipedia.org/wiki/Skytale) (von den Spartanern verwendet?!)



#### Gartenzaunverschlüsselung

- [Erklärvideo Gartenzaun-Verschlüsselung [2:56]](https://youtu.be/EIJ73KApF18)

- [wikipedia Rail fence cipher](https://en.wikipedia.org/wiki/Rail_fence_cipher)

Verschlüsselung

```
plaintext: NACHMITTAGPARK
key: 4
```

```
N     T     R
 A   I T   A K
  C M   A P  
   H     G    
--> NTR AITAK CMAP HG
```

Entschlüsselung

```
NTR AITAK CMAP HG
key:4
14 Buchstaben
```

Zuerst ZigZak zeichnen für 16 Buchstaben

```
1     1     1
 2   6 2   6 2
  3 5   3 5   
   4     4   
```

Daraus sieht man wie viele Buchstaben in jeder Zeile einzusetzen sind.



### Playfair Cipher

- [Playfair Cipher (en) [19:17]](https://youtu.be/-KjFbTK1IIw)
- [wikipedia](https://en.wikipedia.org/wiki/Playfair_cipher)
- [A WW2 Playfair message sent after the disappearance of John F. Kennedy](https://scienceblogs.de/klausis-krypto-kolumne/2020/05/27/a-ww2-playfair-message-sent-after-the-disappearance-of-john-f-kennedy/)
- [Online Tool](http://rumkin.com/tools/cipher/playfair.php)
- [REPL : PlayfairCipher](https://replit.com/@htlmatejka/PlayfairCipher) 



Wähle Schlüsselwort: "HTL IST SUPER"

Bilde 5x5 Quadrat aus allen Buchstaben des Alphabets (einen wenig verwendeten Buchstaben streichen – z.B. Q oder X). 'Q' bspw. durch O ersetzen. Quadrat mit dem Schlüsselwort füllen (mehrfache Buchstaben auslassen), vervollständigen mit den fehlenden Buchstaben – in alphabetischer Reihenfolge.

```
H T L I S
U P E R A
B C D F G
J K M N O
V W X Y Z
```

Zu verschlüsselnde Nachricht:

```
TEST AM FREITAG
```

Leerzeichen weg, paarweise ordnen, mit wenig verwendeten Buchstaben (z.B. X) auffüllen

```
TE ST AM FR EI TA GX
```

= Bigramm

Tritt ein Buchstabe doppelt auf so wird ein X (oder seltener Buchstabe) eingebaut

```
SAMMLUNG
SA MM LU NG
SA MX ML UN GX
```

### Regeln zum Verschlüsseln

- Buchstaben in gleicher Zeile: mit dem jeweiligen rechten Nachbarn ersetzen (wrap around falls notwendig)
- Buchstaben in gleicher Zeile: mit dem jeweiligen Buchstaben darunter ersetzen (wrap around falls notwendig)
- Buchstaben bilden ein Rechteck: Buchstaben aus der gleichen Zeile/gegenüberliegende Ecke

[wikipedia : Beispiel](https://en.wikipedia.org/wiki/Playfair_cipher#Example)

### Beispiel

```
H T L I S
U P E R A
B C D F G
J K M N O
V W X Y Z
```

```
TE ST AM FR EI TA GX
```

```
LP HL EO NF RL SP DZ
```

### Eigenschaften

- Sehr einfach durchführbar

- Sicherer gegen Buchstaben Frequenz-Analyse

  - Grund: Buchstaben werden, abhängig vom 2ten Buchstaben, immer auf unterschiedliche Buchstaben verschlüsselt.

    ```
    Beispiel für 'U':
    UM => EJ
    UN => RJ
    ```

  - für alle 600 Bigramme Frequenz-Analyse möglich, aber wesentlich aufwändiger



#### Übung (Playfair Entschlüsseln)

Schlüsselwort: `CYBERSECURITY`

Q mit O ersetzten, Füllzeichen X

Entschlüssele: `USIVTHHTEZ`

Lösung: `SAUWETTER`





## Vorschau: Moderne Kryptographie

Computerunterstützt – Daten werden so verändert, dass sie nicht mehr von zufälligen Werten unterscheidbar sind. 

Grundidee: 

- Auf Bit-Ebene (nicht auf Buchstaben aufbauend)
- XOR mit einem pseudozufälligen Bitmuster
  - sehr gute Zufallszahlgeneratoren
  - geschickte Substitution / Transposition
- Mathematik 
  - Galois Felder
  - (große) Primzahlen – tausende Stellen

Es stehen große Rechenleistungen zur Verfügung – durch durchprobieren aller Schlüssel ist ein **knacken immer möglich** (brute force attack). Ziel – Angriff dauert lange – Ergebnis wertlos.

Sicherer Zeitraum – abhängig von der Länge des Schlüssels:

- 64 Bit: Stunden bzw. Tage
- 128 Bit: Jahrzehnte
- 256 Bit: Jahrzehnte, auch mit Quantencomputern

