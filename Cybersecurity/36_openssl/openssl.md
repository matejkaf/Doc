# openssl

Kommandozeilentool für Kryptographie.



## Datei 

Mit AES-128 verschlüsseln

```bash
$ openssl aes-128-cbc -in main.cpp -out main.cpp.aes128
```

und wieder entschlüsseln

```bash
$ openssl aes-128-cbc -d -in main.cpp.aes128 -out main.cpp
```

> This example uses the Advanced Encryption Standard (AES) cipher in cipher-block chaining mode. The file is very strongly encrypted for normal purposes assuming that you picked a good passphrase.

[OpenSSL: Encrypt a File with a Password from the Command Line](https://rietta.com/blog/openssl-encrypt-file-with-password-from/)

```bash
$ openssl list -cipher-algorithms
```



## Hashwerte

Mit `dgst` – (message) digest

```bash
$ openssl dgst -sha512 goethe.txt
SHA512(goethe.txt)= a36110e65caab98c5bfdaa2f75d731e54c58f496e4e1e73bc9bdf79543f0cac74fe866cfa0d21372793c3dc6ea36f5bd04079593f25d991e72d7fd558f1082c9
```

Ausgabe erfolgt im hex Format.

```bash
$ openssl dgst -sha512 -out goethe.txt.sha512 goethe.txt
```



## private key genererieren

generating a private key using RSA and a key size of 2048 bits.

```bash
$ openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out private-key.pem
# -pkeyopt opt:value (option des Algorithmus setzen)
```

Privacy-Enhanced Mail (PEM) is a de facto file format for storing and sending cryptographic keys, certificates, and other data. base64 kodiert.

Um den private key verschlüsselt abzuspeichern:

```bash
$ openssl genpkey -aes256 -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out private-key.pem
```

Erwas lesbarere Anzeige

```bash
$ openssl pkey -in private-key.pem -text
```

Der public key ist in diesen Informationen auch enthalten.



## public key erzeugen

Den zum private key passenden public key extrahieren.

```bash
$ openssl pkey -in private-key.pem -out public-key.pem -pubout
```

Ausgabe des Ergebnis:

```bash
$ openssl pkey -in public-key.pem -pubin -text
```



## RSA encryption/decrytion

[Encrypt and decrypt files to public keys via the OpenSSL Command Line](https://raymii.org/s/tutorials/Encrypt_and_decrypt_files_to_public_keys_via_the_OpenSSL_Command_Line.html)

> Because of how the RSA algorithm works it is not possible to encrypt large files. If you create a key of `n` bits, then the file you want to encrypt must not larger than (`n` minus 11) bits. The most effective use of RSA crypto is to encrypt a random generated password, then encrypt the file with the password using symmetric crypto. If the file is larger then the key size the encryption command will fail:

Es ist nicht möglich Daten zu verschlüsseln die größer sind als die key size (z.B. 4096 Bits)!

ToDo...



## Digitale Signatur

### Erzeugen

Im binären Format:

```bash
$ openssl dgst -sha512 -sign private-key.pem -out goethe.txt.sha512.sign goethe.txt
```

Heinweis: bei digitaler Signatur wird der private key zum Verschlüsseln verwendet.

In base63 Kodierung anzeigen/umwandeln:

```bash
$ openssl enc -base64 -in goethe.txt.sha512.sign
LMHzinBf7QcnihFSvD1KlpJnUrnTffm/O9Oq6ZAuL2u0YflVEEHMilXUmNmZcpcO
iYukX6QrmYpat7xWia3DADVI7krq5tPv6j8bBKtXc50l+rSVAu8on8HAgRIMGAR0
...
68O87wkNPBFvZBziwYB7Qp8tW1s9j3P6PylLzBHxkhStlEpOlZsM/FOqJsFl0Nxd
orfG3eg9CMyQocH8AA0gu2A72Kul8ap7BFB0HUoOaes=
$ openssl enc -base64 -in goethe.txt.sha512.sign -out goethe.txt.sha512.sign.base64
```



### Verifizieren

base64 decodieren:

```bash
$ openssl enc -base64 -d -in goethe.txt.sha512.sign.base64 -out goethe.txt.sha512.sign
```

Signatur verifizieren:

```bash
$ openssl dgst -sha512 -verify public-key.pem -signature goethe.txt.sha512.sign goethe.txt
Verified OK
```

Heinweis: bei digitaler Signatur wird der public key zum Verifizieren verwendet.

Quelle: [How to use OpenSSL: Hashes, digital signatures, and more](https://opensource.com/article/19/6/cryptography-basics-openssl-part-2) (Generel sehr gute Übersicht über openssl)



