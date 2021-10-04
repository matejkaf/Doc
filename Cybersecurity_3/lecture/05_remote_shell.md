---
title: Remote shells
tags: [lecture,3AHITS]
---

Ziel von Hackern ist es Zugriff auf entfernte Rechner zu erhalten durch:

- direktes ausnutzen von Sicherheitslücken, oder
- social engineering – Anwender geschickt dazu manipuliert 
  - Programm zu starten (Trojaner), oder 
  - per Phishing auf gefälschten Login Seite locken

Ergebnis ist eine unsichtbare shell über die der (entfernte) Angreifer das System übernehmen kann.

Die eingeschleusten Programme heißen daher of "shell-code".

Solche remote shells haben aber auch legale Anwendung bei Zugriff auf 

- entfernte System
- Systeme ohne Tastatur/Bildschirm (Server)

2 Möglichkeiten:

- [telnet](https://en.wikipedia.org/wiki/Telnet) (teletype network)
- [ssh](https://en.wikipedia.org/wiki/Secure_Shell) (secure shell)



# Telnet

Text-orientierte Verbindung zum Zielsystem. Sehr einfach. Keine Verschlüsselung! Username und Passwort können **sehr einfach** abgehört werden.

- Port 23/TCP
- Am Zielsystem muss ein **telnet Server** (Linux: demon) laufen
- telnet Client: Kommandozeilen tool `telnet` (muss unter Windows aktiviert werden).
- da telnet Daten 1:1 weitergibt ist damit der Zugriff auf jedes textbasierte Protokoll möglich (z.B. http)

Achtung: telnet ist völlig unsicher und sollte in Produktivsystemen nicht mehr zum Einsatz kommen.



# SSH

Kryptografisches Netzwerkprotokoll für remote shell Zugriff, sehr sicher, Ersatz für Telnet.

- Verschlüsselt Passwörter und Datenverkehr (Vertraulichkeit)
- Manipulationsschutz (Integrität)
- Schutz gegen MITM attacks

Port 22/TCP

SSH Server: Läuft als Dienst (demon) auf dem System auf dem man sich Remote einloggen will.

SSH Client:

- Linux Shell: `ssh user@host`
- Windows:
  -  `putty.exe`
  -  Ab Windows 10 Version 1709 (Oktober 2017) integriert, siehe [[ct : SSH unter Windows 10 nutzen](https://www.heise.de/tipps-tricks/SSH-unter-Windows-10-nutzen-4224757.html)], über Kommandozeile aufrufbar.
