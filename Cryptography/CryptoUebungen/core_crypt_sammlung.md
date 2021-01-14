

[Video: Cryptography 101 with .NET Core](https://www.youtube.com/watch?v=rLEJLuA3hd0) – Brauchbare .NET Crypto Basics.

- 3:16-5:17 Intro+Basics
- **5:18-9:30 Hashing**
- 9:31-17:10 Symmetric en-/decryption
- 17:11-20:18 Asymmetric en-/decryption
- 20:19-21:24 Digital Signatures (w/o Demo)
- 21:25-22:07 .Net core 3.0
- 22:08-29:09 Summary and END



# Digitale Unterschrift

Für Integrity, Authentication und Non-repudiation.

Prinzip

- Nachricht hashen
- Hash mit private key des Senders verschlüsseln

Neu in .NET 3.0 – Authenticated Encryption: gemeinsam mit Verschlüsselung der Nachricht

- AesGcm
- AesCcm





# MAC (Message Authentication Code)

Ähnlich wie digitale Unterschrift mit private key aber geringerer Rechenaufwand. 

Verwendet einen symetrischen Schlüssel. 

Integrity, Authentication und Non-repudiation 

[HMAC Class](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.hmac?view=netcore-3.1)

