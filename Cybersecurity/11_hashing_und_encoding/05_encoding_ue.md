---
title: Kryptographie
subtitle: Encoding Übungen
tags: [assignment,2AHITS_Teach,2AHITS]
---

#### Übung (Base64 kodieren)

Kodiere `4e62` (ASCII `"Nb"`, `'N'=0x4e`, `'b'=0x62`) als Base64. Verwende diese [Tabelle](https://en.wikipedia.org/wiki/Base64#Base64_table).



---

#### Übung (SHA256 mit CyberChef)

Verwende [CyberChef](https://gchq.github.io/CyberChef/) um den SHA256 Hashwert von [goethe.txt](https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe.txt) in Hex und Base64 zu berechnen. 



---

#### Übung (SHA256 mit openssl)

Verwende ein Bash [replit](https://replit.com) um mittels des CLI Tools `openssl` den SHA256 Hashwert der Datei hinter dem Link `https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe.txt` zu ermitteln. Der Download der Datei geht mit dem Tool `wget`.

- Reduziere die Standard Ausgabe auf den **base16 (hex)** String
  - Variante 1: mit  `cut`
  - Variante 2: mit der `openssl dgst` Option  `-binary` und  `xxd`
- Ermittle den Hashwert im **base64** Format
  - Variante 1: mittels openssl, siehe [StackExchange](https://unix.stackexchange.com/questions/3675/how-can-i-get-a-base64-encoded-shax-on-the-cli)
  - Variante 2: Mittels `base64`
- Ermittle durch Kommandozeilentools (`wc`) die Text-Länge (Anzahl der Buchstaben) von Hex und base64.

Manpages:

- [cut](https://man7.org/linux/man-pages/man1/cut.1.html)
- [wc](https://man7.org/linux/man-pages/man1/wc.1.html)
- [base64](https://man7.org/linux/man-pages/man1/base64.1.html)
- [xxd](https://helpmanual.io/help/xxd/)
- [openssl dgst](https://www.openssl.org/docs/man1.1.1/man1/dgst.html)

