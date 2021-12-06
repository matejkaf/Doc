---
title: Digitale Signatur
tags: [lecture, krypto, 3AHITS ]
---

Mit dem RSA Verfahren kann auch der **private key zum verschlüsseln** verwendet werden. Eine solche Nachricht kann durch den **public key entschlüsselt** und ist daher **nicht geheim** aber **fälschungssicher**.

Idee:

Nachricht wird 2x gesendet (Alice an Bob)

- einmal im Klartext und 
- ein andermal mit dem **private key** von Alice verschlüsselt

Stimmen bei Bob nach dem entschlüsseln beide Teile der Nachricht überein, dann weiß Bob:

- (1) die Nachricht ist sicher von Alice (der private key ist nicht fälschbar)
- (2) die Nachricht wurde von niemanden verändert

Hoher Rechenaufwand, daher in der Praxis:

- Klartext wird gehasht (z.B. SHA256)
- Hashwert wird verschlüsselt
- Klartext und der verschlüsselte Hashwert werden übertragen

![](fig/Digital_Signature_diagram.png)



# Beispiel für Größenordnungen

- private/public key: 4096 bits
- Hashwert: 256 bits
- Digitale Signatur: 4096 bits (wie key) 




# DSA

Ein weiteres gängiges Verfahren für die Digitale Signatur ist **DSA** (Digital Signature Algorithm) – kann nur für digitale Signatur aber **nicht zum Verschlüsseln** verwendet werden.



# openSSL

Linux Tool für Kryptographie.

[/Doc/Linux/openssl](/Doc/Linux/openssl#rsa-encryptiondecrytion)



# Python

ToDo
