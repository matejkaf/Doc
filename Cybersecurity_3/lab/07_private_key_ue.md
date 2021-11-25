---
title: Public Key Cryptography
subtitle: Cybersecurity Übung
tags: [3AHITS]
---

Die Übungen sind durch Internet Recherche zu lösen.

---

#### Übung (Schlüsselpaar erstellen)

Verwende das Tool `openssl` um ein private/public Schlüsselpaar für das RSA Verschlüsselungsverfahren mit 4096 Bits zu erstellen. Das Ergebnis soll in einem `private-key.pem` File abgespeichert werden. Dieses File enthält typischerweise den public und den private Key.

Erstelle weiters mittel `openssl` eine Datei `public-key.pem` die nur den public key enthält. Dieses File kann problemlos weitergegeben werden ohne die Verschlüsselungssicherheit zu gefährden.

---

#### Übung (Ver- und Entschlüsseln)

Verwende `openssl` zum sicheren Austausch einer Textdatei. 

- Gib deinen public key an die/den in der Klassenliste folgenden Schüler*in.
- Verschlüssele deine Nachricht mit dem public key und sende diese base64 kodiert an die Person mit dem passenden private key. 
- Entschlüssele die Nachricht die du von jemand anderen erhalten hast.

---

#### Übung (Limits)

1. Versuche eine Datei zu verschlüsseln die aus mehr als 4096 Bits (Schlüsslellänge) besteht.
2. Kannst du den private key mit sich selbst verschlüsseln?

---
