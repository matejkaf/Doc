---
title: Public-key cryptography
subtitle: Anwendungen
tags: [lecture, krypto ]
---

# RSA Verfahren

Bekanntestes public-key Verfahren. Rivest-Shamir-Adleman / public key cryptosystem. Turing Preis 2002. [wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).



# Key exchange

Aufgrund des **extremen Rechenaufwands** (rechnen mit Zahlen die tausende Stellen haben können) wird RSA kaum zum verschlüsseln der gesamten Kommunikation verwendet.

Stattdessen generiert Alice einen **shared secret key** (für stream- oder block-cipher) und schickt diesen mit dem public key verschlüsselt an Bob.  Bob und Alice verwenden dann weiters eine stream- oder block-cipher für die weitere Kommunikation. Dies wird hybride Verschlüsselung genannt. Der ausgetauschte Schlüssel wird nur kurzzeitig verwendet (session key).




# Digitale Signatur

Mit dem RSA Verfahren kann auch der **private key zum verschlüsseln** verwendet werden. Eine solche Nachricht kann durch den **public key entschlüsselt** werden. Da der public key jedem zur Verfügung steht ist diese Nachricht **nicht geheim**.

Allerdings ergibt die Entschlüsselung nur dann sinnvolle Daten wenn ver- und entschlüsselung mit einem zusammenpassenden private/public Schlüsselpaar erfolgte.

Das bedeutet eine **Fälschung der Nachricht** ohne den private key ist nicht möglich.

Für die digitale Unterschrift wird die Nachricht doppelt und zwar einmal unverschlüsselt und ein andermal mit dem private key verschlüsselt von Alice an Bob gesendet. 

Stimmen bei Bob nach dem entschlüsseln beide Teile der Nachricht überein, dann weiß Bob:

- die Nachricht ist sicher von Alice (der private key ist nicht fälschbar)
- die Nachricht wurde von niemanden verändert

Aufgrund des **Rechenaufwands** sieht die Praxis wieder etwas anders aus. Die zu unterschreibenden Daten werden **zuerst gehasht** (z.B. SHA256) und dann mit dem private key verschlüsselt. Diese digitale Signatur wird den Daten angefügt.

![](fig/Digital_Signature_diagram.png)



## Beispiel für Größenordnungen

- private/public key: 4096 bits
- Hashwert: 256 bits
- Digitale Signatur: 4096 bits (wie key) 




## Andere Signatur Verfahren

Ein weiteres gängiges Verfahren für die Digitale Signatur ist **DSA** (Digital Signature Algorithm) dies kann nur für digitale Signatur aber **nicht zum Verschlüsseln** verwendet werden.

