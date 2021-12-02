---
title: Digitale Signatur
tags: [lecture, krypto, 3AHITS ]
---

Mit dem RSA Verfahren kann auch der **private key zum verschlüsseln** verwendet werden. Eine solche Nachricht kann durch den **public key entschlüsselt** werden. Da der public key jedem zur Verfügung steht ist diese Nachricht **nicht geheim** aber **fälschungssicher**.

Die Entschlüsselung ergibt nur mit dem **passenden public key** sinnvolle Daten.

Idee für digitale Unterschrift:

Nachricht doppelt gesendet (Alice an Bob)

- einmal im Klartext und 
- ein andermal mit dem private key von Alice verschlüsselt

Stimmen bei Bob nach dem entschlüsseln beide Teile der Nachricht überein, dann weiß Bob:

- (1) die Nachricht ist sicher von Alice (der private key ist nicht fälschbar)
- (2) die Nachricht wurde von niemanden verändert

Aufgrund des **Rechenaufwands** sieht die Praxis wieder etwas anders aus. Die zu unterschreibenden Daten werden **zuerst gehasht** (z.B. SHA256) und dann mit dem private key verschlüsselt. Diese digitale Signatur wird den Daten angefügt.

![](fig/Digital_Signature_diagram.png)



## Beispiel für Größenordnungen

- private/public key: 4096 bits
- Hashwert: 256 bits
- Digitale Signatur: 4096 bits (wie key) 




## Andere Signatur Verfahren

Ein weiteres gängiges Verfahren für die Digitale Signatur ist **DSA** (Digital Signature Algorithm) dies kann nur für digitale Signatur aber **nicht zum Verschlüsseln** verwendet werden.



# openSSL

[/Doc/Linux/openssl](/Doc/Linux/openssl#rsa-encryptiondecrytion)



# Python

ToDo
