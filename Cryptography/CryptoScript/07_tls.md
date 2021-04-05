---
title: Transport Layer Security (TLS) 
description:
tags: [5AHELS,lecture, krypto ]
---



# TLS / HTTPS

TLS (Transport Layer Security) ist ein standardisiertes Kommunikations-Protokoll das Browser und Web-Server zum gesichterten Datenaustausch verwenden. Es bietet einen **sicheren Kanal** mit **authenticity**, **integrity** und **confidentiality**.

Die sogenannte **Cipher Suite** legt fest, welche Kombination aus vier Methoden für den sicheren Kanal verwendet werden sollen:

- **Schlüsselaustausch**, bspw.: RSA (key transport), DH (key agreement)
- **Authentifizierung** (durch Zertifikat), bspw.: RSA, DSA
- **Hashfunktion**, bspw.:  MD5, SHA
- **Verschlüsselung** und Mode, bspw.:  3DES, AES; CBC, GCM




# Handshake

Der Handshake findet vor dem eigentlichen Datenaustausch statt. Dabei wird die **cipher suite** ausgehandelt und der Client **authentifiziert** den Server. 

<img src="fig/tls_handshake.png" style="zoom:50%;" />


- **Client Hello**
  TLS Version, Zeit, client random, Liste von cipher suites (z.B. `TLS_DHE_RSA_WITH_AES_128_CBC_SHA`) in bevorzugter Reihenfolge

- **Server Hello**
  Ausgewähle cipher suite, server random, session ID

- **Server Certificate**
  *X.509 certificate chain* des Servers

- **Server Key Exchange** (nicht im Bild)


  - Diffie-Hellman: nonce des Servers
  - RSA Server Authentifizierung: Nachricht wird mit dem private key des Servers unterschrieben

- **Server Hello Done**
  Gibt die Initiative an den Client zurück, Server ist fertig.

- **Client Key Exchange**


  - Diffie-Hellman: nonce des Clients, 
  - RSA key exchange: vom Client gewählter 48 Byte *pre-master-secret* mit dem public key des Servers verschlüsselt.

  Nach dem Austausch des *pre-master-secret* (48 Byte) ermitteln Client und Server je nach cipher-suite das gemeinsame *master-secret* (48 Byte) für Verschlüsselung und MAC. Aus dem *master-secret* werden bis zu **6 keys** ermittelt: 2 MAC keys, 2 encryption keys und 2 initialization vectors.

- **Client Change Cipher Spec**
  Client gibt bekannt, dass dieser alle Informationen über Verbindungsparameter und Schlüssel hat.

- **Client Finished**
  Ist verschlüsselt und per MAC gegen Veränderung geschützt. Enthält einen Hashwert der vorhergehenden Handshake Messages gemischt mit dem *master-secret* – zum Erkennen von Fälschungen.

- **Server Change Cipher Spec** und  **Server Finished**
Wie Client.

Die **Finished messages** sind kryptografisch geschützt. Der enthaltene Hash Wert wird überprüft. Bei einem Angriffs-Versuch (z.B. man-in-the-middle attack) geht diese Prüfung schief und die Verbindung kommt nicht zustande.

Siehe auch: [The SSL/TLS Handshake: an Overview](https://www.ssl.com/article/ssl-tls-handshake-overview/)



# Authentifizierung

- Ist in TLS optional. 
- Der Server wird aber meist authentifiziert. 

- Möglich – aber seltener verwendet – ist die **Client Authentifizierung**.



# Key exchange

Beliebt: RSA, DHE_RSA, ECDH_RSA

- **RSA**
  Client verschlüsselt den 48 Byte *pre-master-secret* mit dem public-key des Servers. **Nachteil**: der public-key ist üblicherweise mehrere Jahre in Verwendung, wird dieser einmal kompromitiert so sind alle alte (aufgezeichnete) Sessions entschlüsselbar. Daher aktueller Trend zu anderen Verfahren die **forward-secrecy** unterstützen.
- **DHE_RSA**
  Diffie-Hellman mit RSA Authentifizierung. Bietet forward-secrecy (der key kann zu einem späteren Zeitpunkt nicht mehr rekonstruiert werden) ist aber leider **rechenintesiv**. Da DHE gegen man-in-the-middle attack anfällig ist muss zusätzlich **authentifiziert** werden (meist mit RSA).
- **ECDH_RSA**
  Elliptic Curve Diffie-Hellman. Bietet forward-secrecy und **höhere Geschwindigkeit**. Neuere Entwicklung, nicht von allen Systemen unterstützt. Hier ist ebenfalls eine Authentifizierung notwendig.



# Cipher Suite

Das TLS Protokoll ist sehr flexibel, es werden die unterschiedlichsten Kombination von kryptografischen Mechanismen unterstützt. Welche das konkret sind wird durch die Cipher-Suite festgelegt.

Eine TLS cipher suite hat folgendes Aussehen:

<img src="fig/suit.jpg" alt="suit" style="zoom:33%;" />

Beispiele:

- TLS_DHE_RSA_WITH_AES_128_CBC_SHA
- TLS_RSA_WITH_AES_128_GCM_SHA256

Der Client schlägt eine Liste von Suites vor – bevorzugte Suites zuerst. Der Server wählt eine dieser Suites aus.



# TLS Record protocol

Sichert den Datenaustausch mit Hilfe der im Handshake ausgetauschten keys. Das record protocol ist verantwortlich für das Verschlüsseln, sichern der Integrität und Authentizität.

Je nach verwendeter cipher suite sieht dieses Protokoll unterschiedlich aus. Für das mit Abstand am häufigsten eingesetzte AES-CBC (random IV) hat es folgende Form (MAC-then-encrypt):

<img src="fig/tls_record_protocol.png" style="zoom: 33%;" />



# Bemerkungen

TLS ist sehr offen für Erweiterungen. Dies ist auch notwendig da immer wieder **neue Angriffsmöglichkeiten** bekannt werden und eine Änderung notwendig machen.

Beispiele:

- [Padding oracle attack, 2002](https://en.wikipedia.org/wiki/Padding_oracle_attack)
- [Lucky Thirteen attack, 2013](https://en.wikipedia.org/wiki/Lucky_Thirteen_attack)
- [Heartbleed, 2014](https://en.wikipedia.org/wiki/Heartbleed)
- [OpenSSL ChangeCipherSpec Injection Vulnerability, 2014](https://www.netskope.com/blog/openssl-changecipherspec-injection-vulnerability/)
- [POODLE attack, 2014](https://en.wikipedia.org/wiki/POODLE)

SHA-1 als Hash in Zertifikaten gilt nicht mehr als sicher (siehe [Google Security Blog](https://security.googleblog.com/2014/09/gradually-sunsetting-sha-1.html)). Allerdings: HMAC berechnung mit SHA1 ist davon nicht betroffen.



# Quellen

- Buch: *Bulletproof SSL and TLS*, Ivan Ristic
- Buch: *Cryptography Engineering*, Niels Ferguson, Bruce Schneier, Tadayoshi Kohno


