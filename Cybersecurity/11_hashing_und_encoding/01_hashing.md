---
title: Kryptographie
subtitle: Hashfunktionen
tags: [lecture,2AHITS_Teach]
---

- Daten (beliebig groß) ⇨ Hashfunktion ⇨ Wert fixer Länge, z.B. 128, 256 oder 512 Bits. 
- nicht umkehrbar (one way function)
- praktisch unmöglich andere Daten zu finden die den gleichen Hashwert ergeben

## Kryptographische Anwendung

- Erkennen von Fälschungen (Integrität einer Nachricht)
- Digitale Unterschrift (Authentizität)
- Speichern von Passwörtern
- Kryptowährungen (Bitcoin ⇨ SHA-256)

## Umsetzung

Erste Idee: 8-Bit Summe der ASCII Codes. 

```
L  U  K  A  S
76 85 75 65 83
Summe = 384%256 = 128
```

Ist nicht umkehrbar (viele Texte können 128 ergeben)

Aber: `KLAUS` ergibt den gleichen Hash-Code (=Hash-Kollision).

```
K  L  A  U  S
75 76 65 85 83
Summe = 384%256 = 128
```

Es sollte nicht so einfach sein Daten zu finden die den gleichen Hashwert ergeben. Brauchen eine bessere Lösung!  ⇨

## Sichere Hash Funktionen

*secure hash functions*, Komplexe Mathematik – sind ziemlich gut!

- historisch: [MD5](https://en.wikipedia.org/wiki/MD5) (128 Bit, 16 Byte), [SHA1](https://en.wikipedia.org/wiki/SHA-1) (160 Bit, 20 Byte)
- [**SHA2**](https://en.wikipedia.org/wiki/SHA-2), aktuell in Verwenung (SHA-256, SHA-512)
- [SHA3](https://en.wikipedia.org/wiki/SHA-3) (seit 2015), noch nicht verbreitet (SHA3-512)

Eigenschaften:

- Hashwert = **Fingerabdruck** der Daten

- **Unumkehrbar** – Eine Rekonstruktion der Daten aus dem Hashwert ist nicht möglich (außer durch durchprobieren – brute force attack)
- **Kollisionssicher** – es ist praktisch unmöglich bei gegebenen Daten andere Daten zu finden die den gleichen Hash haben (=Kollision).

Anmerkung: **SHA-1** gilt als nicht mehr sicher, da Wege zum erzeugen einer Fälschung (=Kollision) gefunden wurden. 

- 2013 theoretisch durch Mark Stevens.  
- [2017 praktisch – Announcing the first SHA1 collision](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html) – 1000e Jahre an CPU Rechenzeit notwendig.