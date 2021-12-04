---
title: Public Key Cryptography
subtitle: Cybersecurity Übung
tags: [3AHITS]
---

Die Übungen sind durch Internet Recherche zu lösen.

---

#### Übung (Schlüsselpaar erstellen)

Verwende das Tool `openssl` um ein private/public Schlüsselpaar mit 4096 Bits für das RSA Verfahren  zu erstellen. Das Ergebnis soll in einem `private-key.pem` File abgespeichert werden. Dieses File enthält typischerweise den public und den private Key.

Erstelle weiters mittels `openssl` eine Datei `public-key.pem` die nur den public key enthält. Dieses File kann problemlos weitergegeben werden ohne die Verschlüsselungssicherheit zu gefährden.

---

#### Übung (Ver- und Entschlüsseln)

Verwende `openssl` zum sicheren Austausch einer selbsterstellten Textdatei. 

- Gib deinen public key an die/den in der Klassenliste folgenden (anwesenden) Schüler*in.
- Verschlüssele deine Nachricht mit dem public key und sende diese **Base64 kodiert** per **Email** an die Person mit dem passenden private key. 
- Entschlüssele die Nachricht die du von jemand anderen erhalten hast.

---

#### Übung (Limits)

1. Versuche eine Datei zu verschlüsseln die aus mehr als 4096 Bits (Schlüsslellänge) besteht.
2. Kannst du das private key File `private-key.pem` mit sich selbst verschlüsseln?

---
