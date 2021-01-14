# Digitale Signatur

Mit dem RSA Verfahren kann auch der private key zum verschlüsseln verwendet werden.
Eine solche Nachricht kann durch den public key entschlüsselt werden. Da der public key jedem zur Verfügung steht ist diese Nachricht **nicht geheim**.

Allerdings ergibt die Entschlüsselung nur dann sinnvolle Daten wenn ver- und entschlüsselung mit einem zusammenpassenden private/public Schlüsselpaar erfolgte.
Das bedeutet eine Fälschung der Nachricht ohne den private key ist nicht möglich.

Für die digitale Unterschrift wird die Nachricht doppelt und zwar einmal unverschlüsselt und ein andermal mit dem private key verschlüsselt von Alice an Bob gesendet. 
Stimmen bei Bob nach dem entschlüsseln beide Teile der Nachricht überein, dann weiß Bob:

- die Nachricht ist sicher von Alice (der private key ist nicht fälschbar)
- die Nachricht wurde von niemanden verändert

Aufgrund des **Rechenaufwands** sieht die Praxis wieder etwas anders aus.
Die zu unterschreibenden Daten werden **zuerst gehasht** (z.B. SHA256) und dann mit dem private key verschlüsselt.
Diese digitale Signatur wird den Daten angefügt.

![](img/Digital_Signature_diagram.png)
\ 

Beispiel für Größenordnungen:

- private/public key: 4096 bits
- Hashwert: 256 bits
- Digitale Signatur: 4096 bits (wie key) 

