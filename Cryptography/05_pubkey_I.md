---
title: Public-key cryptography
subtitle: Allgemeines
tags: [lecture,krypto]
use_math: true
---

Bei symetrischer Verschlüsselung verwenden Sender und Empfänger den gleichen Schlüssel – dieser muss einmal ausgtauscht werden – dieser Schlüsselaustausch ist angreifbar.

**Public-key cryptography** ist eine innovative/mathematische Idee aus den 1970er Jahren die einen solchen Angriff unmöglich macht. 

Dabei gibt es 2 Schlüssel:

- einen geheimen **private key** der nicht weitergegeben wird und
- einen öffentlichen **public key** der ohne Einschränkung verbreitet werden kann.

Die Schlüssel sind sehr groß, z.B. 4096 bits.


Anwendung:

- *encryption* (eingeschränkt da sehr rechenaufwändig und Daten<Schlüssellänge)
- *authentication* (z.B. SSH)
- *symmetric key* transport (*key exchange*)
- *digital signature* (in Verbindung mit Hash Funktion)



# Ablauf 

Alice will an Bob eine verschlüsselte Nachricht schicken.

- Bob (als Empfänger) erstellt ein Schlüsselpaar: einen *public key* ($P_{Bob}$) und einen *private (secret) key* ($S_{Bob}$).
- Den *public key* ($P_{Bob}$) kann Alice (und jeder andere) zum verschlüsseln verwenden. Bob kann diesen auf beliebige Weise zur Verfügung stellen. Auch wenn dieser in die falschen Hände fällt ist das kein Problem.
- den *private (secret) key* ($S_{Bob}$) muss Bob absolut sicher verwahren.

- Alice holt sich Bobs *public key* ($P_{Bob}$) und erstellt damit aus der Nachricht/Klartext $m$ den verschlüsselten Ciphertext $c$:

$$
c=\operatorname{E}(P_{Bob},m)
$$



- Bob empfängt $c$ und kann mit Hilfe des geheimen *private key* ($S_{Bob}$) die ursprüngliche Nachricht $m$ wiederherstellen:

$$
m=\operatorname{D}(S_{Bob},c)
$$

- Für Kommunikation in **umgekehrter Richtung** (Bob an Alice) muss Alice ein eigenes public/private Schlüsselpaar ($P_{Alice}$, $S_{Alice}$) erzeugen.

- **Eve** die die Nachricht abhört kennt $c$ und $P_{Bob}$ kann damit aber nicht entschlüsseln

$$
garbage=\operatorname{D}(P_{Bob},c)
$$







![](fig/public.jpg)

![](fig/overv03.png)



