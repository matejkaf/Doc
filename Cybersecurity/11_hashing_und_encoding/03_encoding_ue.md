---
title: Kryptographie
subtitle: Encoding Übungen
tags: [assignment]
---

#### **Übung (Base64 kodieren):**

Kodiere ASCII `"Nb"` als Base64. Verwende [Tabelle](https://en.wikipedia.org/wiki/Base64#Base64_table).
`'N'=0x4e`, `'b'=0x62`

---

#### **Übung (SHA256 mit openssl)**

Verwende ein Bash [replit](https://replit.com) um mittels des CLI Tools `openssl` den SHA256 Hashwert der Datei hinter dem Link `https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe.txt` zu ermitteln. Der Download der Datei geht mit dem Tool `wget`.

- Reduziere die Standard Ausgabe auf den base16 String (Hinweis: `cut`)
- Ermittle den Hashwert im base64 Format ([StackExchange](https://unix.stackexchange.com/questions/3675/how-can-i-get-a-base64-encoded-shax-on-the-cli))
- Ermittle durch Kommandozeilentools die Text-Länge der beiden Kodierungsformate (Hinweis: `cut` und `wc`).

