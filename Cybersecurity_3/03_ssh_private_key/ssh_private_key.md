---
title: SSH Login mit private key
tags: [lecture]
---



Quelle: [How To Configure SSH Key-Based Authentication on a Linux Server](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server)

SSH Server (am Rechner mit dem man sich verbinden möchte) **authentifizieren** Clients über unterschiedliche Methoden. Die elementarste ist per **Passwort**, dies ist einfach zu verwenden aber nicht die sicherste Methode.

**Bots** greifen gerne SSH Server an und versuchen per password guessing Zugang zu erhalten (network based brute force). Passwörter sind oft nicht lang und komplex genug so dass dieser automatisierte Vorgang häufig erfolgreich ist.

# SSH keys

**SSH keys** stellen eine sicherere Alternative zu Passwörtern dar.

Dabei wird ein kryptografisch sicheres Schlüsselpaar aus einem public- und einem private-key verwendet.

Der private key bleibt am Client (und muss sorgfältig verwahrt werden). Ein kompromitierter private key ermöglicht das einloggen in die Server mit entsprechenden public key ohne weitere Authentifizierung. 

Am Client:

- `~/.ssh/id_rsa` – private key
- `~/.ssh/id_rsa.pub` – public key

Am Host

- `~/.ssh/authorized_keys` – public keys



## Ablauf

Die Authentifizierung läuft über einen **challenge-response** Mechanismus. Im Wesentlichen sieht dieser so aus [[1](https://crypto.stackexchange.com/a/76662)], [[2](https://docstore.mik.ua/orelly/networking_2ndEd/ssh/ch03_04.htm#ch03-83508.html)]:

- Client baut eine Verbindung mit dem Server auf (private-key wird nicht bekannt gegeben!). Erstellen eines 128-Bit session identifier der für die Verbindung eindeutig ist.
- Server schickt Challenge: zufällig gewählte 256-Bit Zahl, mittels public-key verschlüsselt.
- Der Client entschlüsselt Challenge mit dem Private Key. Das Ergebnis wird gemeinsam mit dem session identifier MD5 gehasht und zum Server zurückgeschickt.
- Der Server empfängt die Response und prüft das Ergebnis. Stimmt der Hash wird die Authentifizierung akzeptiert.

Der zusätzlich gehashte session identifier schützt vor diversen Angriffen.





