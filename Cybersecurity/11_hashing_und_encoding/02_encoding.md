---
title: Kryptographie
subtitle: Encoding / Kodierung
tags: [lecture]
---

Hashwerte sind große Binärzahlen (typisch 128/256/512 Bits). 

Binärzahlen eignen sich nicht für Darstellung und Übertragung (Email, SMS, ...)

```bash
$ openssl dgst -sha256 -binary goethe.txt
��_�+�BP�c�T}�?9�+d�U�?�p�
```

Es wird eine Darstellung als Text gewünscht. Jede Art der Darstellung von Daten/Information nennt man **Kodierung** (engl. Encoding).

Möglichkeit – Hex (0–9,a–f):

```bash
$ openssl dgst -sha256 goethe.txt
SHA256(goethe.txt)= a911a35ff92bcd4250c063a0547dae3f1ba2b839eaf12b64c955cf3ff7e570e0
```



## Encodings

Häufige Kodierungen sind

- Hex (Radix-16), 1 Buchstabe = 4 Bit
  - NT: Platzbedarf
  - 1 Byte ⟶ 2 Buchstaben
- Base64 (Radix-64), 1 Buchstabe = 6 Bit
  - 3 Byte ⟶ 4 Buchstaben

```
Hex:
a36110e65caab98c5bfdaa2f75d731e54c58f496e4e1e73bc9bdf79543f0cac74fe866cfa0d21372793c3dc6ea36f5bd04079593f25d991e72d7fd558f1082c9

Base64:
o2EQ5lyquYxb/aovddcx5UxY9Jbk4ec7yb33lUPwysdP6GbPoNITcnk8PcbqNvW9BAeVk/JdmR5y1/1VjxCCyQ==
```

Siehe [Base64 wikipedia en](https://en.wikipedia.org/wiki/Base64)

Die `=` am Ende des Base64 Strings? 3 Bytes (3\*8=24 Bits) werden als 4 Buchstaben dargestellt (4\*6=24). Wenn die Länge der Daten kein Vielfaches von 3 ist wird `=` oder `==` hinten angefügt (Padding).

