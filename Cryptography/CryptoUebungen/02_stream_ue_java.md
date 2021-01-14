---
title: Kryptographie Stream Cipher (Übungen)
description: Übungen zu Stream Cipher
type: assignment
cmds: []
tags: [ krypto, java ]
---

---





# Stream cipher Übungen (Java)

**Übung 1  (Stream Cipher)** 

Ein stream cipher wurde mit Hilfe der Klasse `Random` und eines 64 Bit seed erzeugt. Siehe Code (`Uebung_Streamcipher.java`).
Der seed wird aus den ASCII Codes eines Passworts berechnet (siehe Methode `seedFromPassword`).


Bei der Verschlüsselung mit `"hero2018"` entsteht der ciphertext (Radix-16)

`9a5b3b723f933f1c59b0445a85ffed1db1118aa7243e5fa60edf01beda`

Entschlüssele diesen Text.

---

**Übung 2  (Stream Cipher Integrity Attack)** 

Der Text `"4CHELS"` wurde mit dem Passwort `"hackme"` verschlüsselt als Ergebnis entsteht der ciphertext `"db19e8064d3c"`.
Wie muss der ciphertext manipuliert werden damit die Entschlüsselung 
`"5AHELS"` ergibt?

---

**Übung 3  (Break a Stream Cipher)** 

Du findest die folgende verschlüsselte Nachricht unter deinen Files:

`6fe6ced31123dd2e1aa38ffe7c543b44ed86f9d6dddbd0826b56977942`

Leider hast Du einen Teil des Schlüssels vergessen.
An `Xab4d#f` kannst Du Dich noch erinnern, aber das letzte Zeichen hast Du vergessen. 
Kannst Du den Code knacken?

Anleitung: Alle ASCII Codes 32..127 durchprobieren.

---

