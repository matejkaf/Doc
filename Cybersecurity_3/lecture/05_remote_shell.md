---
title: Remote shells
tags: [lecture,3AHITS]
---

Ziel von Hackern ist es Zugriff auf entfernte Rechner zu erhalten durch:

- direktes ausnutzen von Sicherheitslücken, oder
- Anwender geschickt (social engineering) dazu manipuliert werden ein Programm zu starten oder Login Daten auf einer gefälschten Website einzugeben (Phishing).

Ergebnis ist häufig eine shell die das Fernsteuern des Opfer-Rechners ermöglicht.

Darum ist auch häufig von eingeschleustem "shell-code" die Rede.

Aber auch für legale Anwender sind remote shells sehr praktisch zum Zugriff auf entfernte Systeme bzw. Systeme ohne Tastatur/Bildschirm (Server).

Möglichkeiten:

- [telnet](https://en.wikipedia.org/wiki/Telnet) (teletype network)
- [ssh](https://en.wikipedia.org/wiki/Secure_Shell) (secure shell)



# Telnet

Text-orientierte Verbindung zum Zielsystem. Sehr einfach. Keine Verschlüsselung! Username und Passwort können **sehr einfach** abgehört werden.

- Port 23/TCP

- Am Zielsystem muss ein **telnet Server** (Linux: demon) laufen

- telnet Client: Kommandozeilen tool `telnet` (muss unter Windows aktiviert werden).

Achtung: telnet ist völlig unsicher und sollte in Produktivsystemen nicht mehr zum Einsatz kommen.



# SSH

Kryptografisches Netzwerkprotokoll für remote shell Zugriff, sehr sicher, Ersatz für Telnet.

- Passwörter und Datenverkehr verschlüsselt  (Vertraulichkeit)
- Manipulationsschutz (Integrität)

Port 22/TCP

SSH Server: Läuft als Dienst (demon) auf dem System auf dem man sich Remote einloggen will.

SSH Client:

- Linux Shell: `ssh user@host`
- Windows:
  -  `putty.exe`
  -  Ab Windows 10 Version 1709 (Oktober 2017) integriert, siehe [[ct : SSH unter Windows 10 nutzen](https://www.heise.de/tipps-tricks/SSH-unter-Windows-10-nutzen-4224757.html)], über Kommandozeile aufrufbar.
