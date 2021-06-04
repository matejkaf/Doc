---
title: Ryuk Ransomware
subtitle: Kryptographischer Ablauf und Übungsaufgabe
---

# Ryuk Ransomware

- [Ryuk Ransomware: A Targeted Campaign Break-Down](https://research.checkpoint.com/2018/ryuk-ransomware-targeted-campaign-break/)

- [Big Game Hunting with Ryuk: Another Lucrative Targeted Ransomware](https://www.crowdstrike.com/blog/big-game-hunting-with-ryuk-another-lucrative-targeted-ransomware/)

  > Another notable difference between Hermes and Ryuk is how the encryption keys are created. Hermes starts the encryption initialization by first generating an RSA public and private key pair  — referred to as a “victim key.” An AES-256 key is generated and the victim’s RSA private key is encrypted in AES-CBC mode. The attacker-controlled public RSA key is used to encrypt the AES key (previously used to encrypt the victim’s RSA private key). Then, for each file encrypted, an AES key is generated, which is used to encrypt the file. Finally, the AES key for each file is encrypted with the victim’s RSA public key, then stored at the end of the file.
  >
  > Ryuk contains the same logic, but no longer generates the victim-specific RSA key pair. Instead, Ryuk has two public RSA keys embedded in the executable, and what was previously the victim’s RSA private key is encrypted and embedded in the executable. Because Ryuk does not generate a victim-specific RSA key pair, all hosts can be decrypted with the same decryption key. This might appear to be a design flaw but is not, since Ryuk has a unique key for each executable.
  >
  > If a single executable is used for a single victim environment, then there are no repercussions if the private keys are leaked because it will only decrypt the damage from a single Ryuk executable. Thus, it is highly likely that Ryuk pre-generates the RSA key pairs for each victim. This is arguably more secure, since the victim’s system will never have access to the unencrypted RSA key pair parameters without paying the ransom. This approach is similar to INDRIK SPIDER’s BitPaymer ransomware, which generates a victim-specific sample with a hard-coded public key.



# Übung

Übungsaufgabe die auf der Funktionsweise der Ryuk Ransomware beruht. Von **Christoph Roschger** – TGM Wien.

Die Aufgabe enthält ein Java Programm das den Ablauf nachstellt und alle lokalen Dateien verschlüsselt. Es ist eine zu entschlüsselnde Datei gegeben und das `pem` File mit dem globalen privaten RSA Schlüssel.

[Übungsaufgabe](https://exercises.itsi.rocks/crypto/index.html)



# Lösung

[REPL Lösung](https://replit.com/@htlmatejka/Roschger-Ransomware#main.sh)

Alle Dateien (inkl. Angabe der Übungsaufgabe in HTML) sind im REPL enthalten.

```bash

# AES Key der den Victim Private RSA Key verschlüsselt
# Dieser ist wieder mit Global Public RSA Key verschlüsselt
echo "hEVXLZ+3woCSEwCsvLY69glGpc92f7MKbsblM8EXJo5lb6Ni8cbL7L+WAyV9YKTInkm91coMGonM6wPS3m3TO/XwjsYATimVH5AGHMejWnQaHHaLECkG9RcHUzddJGZV1OByXP/77Ax7aqtFfhD+pvSacFHybwNiZGTDpcFzC1Bpk0/grhI598VFSdnQm2tPf0TWaR7GHVfqPkrGXTxjNoszwmEwcGJz/mKVHTmcqc03Pv34HVYn8pK7rM/lU0QYUu6x5MxTw1nuVCdKJhpXUmQVHF/WZ3kelZvQKJgqtTqs8wllu0C/B47FYxPy+48A/xP30RY45fbJyYZE4LUk1g==" > aes_victim_key.enc.b64
base64 --decode aes_victim_key.enc.b64 > aes_victim_key.enc

# der mit aes_victim_key AES-256-CBC verschlüsselte Victim Private RSA Key
echo "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"  > rsa_victim_key.enc.b64

base64 --decode rsa_victim_key.enc.b64 > rsa_victim_key.enc

# Entschlüssele aes_victim_key mit Global Public RSA Key
openssl rsautl -decrypt -in aes_victim_key.enc -inkey global_key.pem > aes_victim_key

echo "aes_victim_key als hex"
xxd -p aes_victim_key | tr -d '\n'

echo
# das was hier ausgegeben wird ist der AES victim key in hex - einsetzten im nächsten Kommando in der -K option
openssl aes-256-cbc -d -in rsa_victim_key.enc -K '0106eb4887051520fcf40b5e8fa5acceab272785c1055ce53e3c201b1d3441fe' -iv 0 >rsa_victim_key.pem
# Fehlermeldung "hex string is too short, padding with zero bytes to length" kann ignoriert werden

# vom ende von watchme das Ende wegschneiden. ist mit 2048 Bit verschlüsselt, d.h. die letzten 256 Bytes der Datei ist der verschlüsselte AES Key
tail -c 256 watchme.txt.enc > aes_file_key.enc
head -c -256 watchme.txt.enc > watchme.txt.enc.data

# Entschlüssele aes_file_key mit Victim Public RSA Key
openssl rsautl -decrypt -in aes_file_key.enc -inkey rsa_victim_key.pem > aes_file_key

echo "aes_aes_file_keyvictim_key als hex"
xxd -p aes_file_key | tr -d '\n'

openssl aes-256-cbc -d -in watchme.txt.enc.data -K '4313ba62692390aede1bcac8f7da82a6201cf4edd59873859b8b7eafeb49de70' -iv 0 >watchme.txt

#
# Lösung: 
# https://www.latlmes.com/breaking/students-break-ransomware-code-1
#
```



# Java Programm

Ablauf der Ransomware wird durch `encryptIT.jar` nachgestellt. Aufruf verschlüsselt alle Dateien im gleichen Verzeichnis.

```bash
$ java -jar encryptIT.jar
```

Es entsteht weiters eine Datei mit dem Namen `UNIQUE_ID_DO_NOT_REMOVE` die 2 Schlüssel enthält die verschlüsselt sind.



# Hintergrund / Ablauf

Aus kryprographischer Sicht passiert bei einem Angriff das folgende:

1. Der Angreifer erstellt ein 2048 Bit RSA Schlüsselpaar (`global_key_public` und `global_key_private`)
2. Der Angreifer erstellt für ein spezifisches Opfersystem ein weiteres 2048 Bit RSA Schlüsselpaar `rsa_victim_key_public` und `rsa_victim_key_private`. Ebenso generiert der Angreifer einen 256 Bit AES Schlüssel `aes_victim_key`. 
3. Der Angreifer erstellt für das Opfersystem eine maßgeschneiderte Ransomware die folgende Schlüssel enthält:
   - `rsa_victim_key_public`
   - `aes_victim_key(rsa_victim_key_private)`: `rsa_victim_key_private` AES verschlüsselt mit `aes_victim_key` (AES-256-CBC, IV=0)
     - Hinweis: `rsa_victim_key_private` kann nicht direkt mit `rsa_victim_key_public` verschlüsselt werden, da mit einem RSA Key von 2048 Bits = 256 Bytes maximal Daten mit 245 Bytes (11 Bytes Padding) verschlüsselt werden können. Daher hybride Verschlüsselung. Siehe auch Dokument zu `openssl`.
   - `global_key_public(aes_victim_key)`: `aes_victim_key` RSA verschlüsselt mit `global_key_public`
4. Die Ransomware wird am Opfersystem ausgeführt
5. Für jede Datei wird ein eigener 256 Bit AES Schlüssel generiert `aes_file_key`. Dieser wird mit `rsa_victim_key_public` RSA verschlüsselt. Es entstehen 2048 Bits (256 Bytes) Schlüssel der verwendet wird um die Datei zu verschlüsseln. Dannach wird der verschlüsselte `aes_file_key` an die verschlüsselte Datei angefügt. Die Originaldatei wird gelöscht und `aes_file_key` verworfen.
6. Sind alle Dateien nach diesem Schema verschlüsselt worden hinterläßt die Ransomware noch die verschlüsselten Schlüssel im System (z.B. in einer Datei):
   - `aes_victim_key(rsa_victim_key_private)`, und
   - `global_key_public(aes_victim_key)`
7. Die Ransomware zeigt ihre Forderungen an. 
8. Der Geschädigte geht auf die Forderungen ein und schickt `global_key_public(aes_victim_key)` an die Angreifer. Diese entschlüsseln mit Hilfe `global_key_private` und schicken `aes_victim_key` zurück
9. Am Opfersystem kann mit Hilfe von `aes_victim_key` der Schlüssel  `rsa_victim_key_private` wiederhergestellt werden.
10. Von jeder verschlüsselten Datei werden die letzten 256 Bytes entnommen und mittels  `rsa_victim_key_private` entschlüsselt man erhält `aes_file_key` und kann damit die Datei wiederherstellen.