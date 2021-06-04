---
title: openssl
subtitle: Kommandozeilentool für Kryptographie
---

* TOC
{:toc}

# AES encryption/decrytion

Mit AES-128 verschlüsseln

```bash
$ openssl aes-128-cbc -in main.cpp -out main.cpp.aes128
# fragt nach Passwort
```

und wieder entschlüsseln (Option `-d`)

```bash
$ openssl aes-128-cbc -d -in main.cpp.aes128 -out main.cpp
# fragt nach Passwort
```

> This example uses the Advanced Encryption Standard (AES) cipher in cipher-block chaining mode. The file is very strongly encrypted for normal purposes assuming that you picked a good passphrase.

[OpenSSL: Encrypt a File with a Password from the Command Line](https://rietta.com/blog/openssl-encrypt-file-with-password-from/)

```bash
$ openssl list -cipher-algorithms
# aes-256-cbc
```

Mit Schlüssel und IV

```
-iv IV
    The actual IV to use: this must be represented as a string 
    comprised only of hex digits. When only the key is specified 
    using the -K option, the IV must explicitly be defined.

-K key    
    The actual key to use: this must be represented as a string
    comprised only of hex digits. If only the key is specified, the
    IV must additionally be specified using the -iv option.
```

Verschlüsseln:

```bash
$ openssl aes-256-cbc -in data.bin -K '0106eb4887051520fcf40b5e8fa5acceab272785c1055ce53e3c201b1d3441fe' -iv 0 >data.bin.enc
```

Entschlüsseln:

```bash
openssl aes-256-cbc -d -in data.bin.enc -K '0106eb4887051520fcf40b5e8fa5acceab272785c1055ce53e3c201b1d3441fe' -iv 0 >data.bin
```



# Hashwerte

Mit `dgst` – (message) digest

```bash
$ openssl dgst -sha512 goethe.txt
SHA512(goethe.txt)= a36110e65caab98c5bfdaa2f75d731e54c58f496e4e1e73bc9bdf79543f0cac74fe866cfa0d21372793c3dc6ea36f5bd04079593f25d991e72d7fd558f1082c9
```

Ausgabe erfolgt im hex Format:

```bash
$ openssl dgst -sha512 -out goethe.txt.sha512 goethe.txt
```

Option `-binary`

```bash
$ openssl dgst -sha256 -binary goethe.txt
$ openssl dgst -sha256 -binary goethe.txt | xxd -p
```



# Private Key genererieren

Generieren eines private/public **Schlüsselpaars** mit 4096 Bits:

```bash
$ openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out private-key.pem
# -pkeyopt opt:value (option des Algorithmus setzen)
```

Privacy-Enhanced Mail (PEM) ist das de facto File Format zur Ablage kryptografischer Schlüssel, Zertifikate, ... – ist Base64 kodiert.

Um den private key mit Passwort verschlüsselt abzuspeichern die `-aes256` Option verwenden:

```bash
$ openssl genpkey -aes256 ...Rest wie oben...
```

Etwas lesbarere Anzeige

```bash
$ openssl pkey -in private-key.pem -text
```

Der public key ist in diesen Informationen auch enthalten.



# Public Key extrahieren

In `private-key.pem` ist der private und der public key enthalten. Weitergeben möchte man jedoch nur den public key. Diesen kann man aus dem `pem` File extrahieren (in ein eigenes `pem` File):

```bash
$ openssl pkey -in private-key.pem -out public-key.pem -pubout
```

Ausgabe des Ergebnis in lesbarer Form (Option `-pubin` muss angegeben werden sonst wird nach einem private key gesucht):

```bash
$ openssl pkey -in public-key.pem -pubin -text
```



# RSA encryption/decrytion

[Encrypt and decrypt files to public keys via the OpenSSL Command Line](https://raymii.org/s/tutorials/Encrypt_and_decrypt_files_to_public_keys_via_the_OpenSSL_Command_Line.html)

## Limits / Padding

Grundsätzlich: Es ist nicht möglich Daten zu verschlüsseln die größer sind als die key size (z.B. 4096 Bits)!

Weiters:

Um die RSA Verschlüsselung gegen Angriffe abzusichern werden die zu verschlüsselnden Daten durch ein Padding ergänzt [[*](https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Padding_schemes)]. Das Standard Padding Schema von openssl ist [PKCS#1 v1.5](https://crypto.stackexchange.com/a/32558), [[*](https://medium.com/asecuritysite-when-bob-met-alice/whats-so-special-about-pkcs-1-v1-5-and-the-attack-that-just-won-t-go-away-51ccf35d65b7)] und kann durch Optionen verändert werden [[*](https://www.openssl.org/docs/man1.0.2/man1/rsautl.html)].

> The overhead of PKCS#1 v1.5 padding is *at least* 11 bytes.

D.h. bei einer Schlüssellänge von 2048 Bits (256 Bytes) können max. 256–11=245 Bytes verschlüsselt werden. Insbesondere folgt daraus, dass ein RSA Schlüssel nicht durch einen RSA Schlüssel gleicher Länge verschlüsselt werden kann.



> Because of how the RSA algorithm works it is not possible to encrypt large files. If you create a key of `n` bits, then the file you want to encrypt must not larger than (`n` minus 11) bits. The most effective use of RSA crypto is to encrypt a random generated password, then encrypt the file with the password using symmetric crypto. If the file is larger then the key size the encryption command will fail:



## Verschlüsseln mit Public Key

```bash
$ openssl rsautl -encrypt -inkey public-key.pem -pubin -in data.bin -out data.bin.enc
```

```
-pubin
by default a private key is read from the input file: with this option a public key is read instead.
```



## Entschlüsseln mit Private Key

```bash
$ openssl rsautl -decrypt -inkey private-key.pem -in data.bin.enc -out data.bin
```



# Digitale Signatur

Quelle: [How to use OpenSSL: Hashes, digital signatures, and more](https://opensource.com/article/19/6/cryptography-basics-openssl-part-2) (Generel sehr gute Übersicht über openssl)

## Erzeugen

Im binären Format:

```bash
$ openssl dgst -sha512 -sign private-key.pem -out goethe.txt.sha512.sign goethe.txt
```

Heinweis: bei digitaler Signatur wird der **private key** zum Verschlüsseln verwendet.

In base64 Kodierung anzeigen/umwandeln:

```bash
$ openssl enc -base64 -in goethe.txt.sha512.sign
LMHzinBf7QcnihFSvD1KlpJnUrnTffm/O9Oq6ZAuL2u0YflVEEHMilXUmNmZcpcO
iYukX6QrmYpat7xWia3DADVI7krq5tPv6j8bBKtXc50l+rSVAu8on8HAgRIMGAR0
...
68O87wkNPBFvZBziwYB7Qp8tW1s9j3P6PylLzBHxkhStlEpOlZsM/FOqJsFl0Nxd
orfG3eg9CMyQocH8AA0gu2A72Kul8ap7BFB0HUoOaes=
```

in Datei schreiben

```bash
$ openssl enc -base64 -in goethe.txt.sha512.sign -out goethe.txt.sha512.sign.b64
```



## Verifizieren

base64 decodieren:

```bash
$ openssl enc -base64 -d -in goethe.txt.sha512.sign.b64 -out goethe.txt.sha512.sign
```

Signatur verifizieren:

```bash
$ openssl dgst -sha512 -verify public-key.pem -signature goethe.txt.sha512.sign goethe.txt
Verified OK
```

Heinweis: bei digitaler Signatur wird der **public key** zum Verifizieren verwendet.
