---
title: Kryptographie
subtitle: Encoding Übungen (Lösungen)
tags: [solution]
---

#### Übung (Base64 kodieren)

TBD

---

#### Übung (SHA256 mit openssl)

```bash
$ wget https://matejkaf.github.io/Doc/Cybersecurity/11_hashing_und_encoding/goethe.txt

$ openssl dgst -sha256 goethe
$ openssl dgst -sha256 -binary goethe.md | openssl base64

# Berechnungen mit word count (wc)
$ openssl dgst -sha256 -binary goethe.md | openssl base64 | wc -m
$ openssl dgst -sha256 goethe.md | cut -d ' ' -f 2 | wc -m
```



