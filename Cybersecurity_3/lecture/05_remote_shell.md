---
title: Remote shells
---

Ziel von Hackern ist es Zugriff auf entfernte Rechner zu erhalten. Dies geschieht meist durch direktes ausnutzen von Sicherheitslücken oder indem Anwender geschickt dazu manipuliert werden ein Programm zu starten (social engineering). Häufig ist das Ergebnis dieser exploitation eine shell die das Fernsteuern des Opfer-Rechners ermöglicht.

Darum ist auch häufig von eingeschleustem "shell-code" die Rede.

Aber auch für legale Anwender sind remote shells sehr praktisch. Damit können auch weit entfernte Systeme gewartet werden in dem über das Netzwerk eine Verbindung aufgebaut wird.

Möglichkeiten:

- [telnet](https://en.wikipedia.org/wiki/Telnet) (teletype network)
- [ssh](https://en.wikipedia.org/wiki/Secure_Shell) (secure shell)



# Telnet

Text-orientierte Verbindung zum Zielsystem. Sehr einfach. Keine Verschlüsselung! Username und Passwort können sehr einfach abgehört werden.

- Port 23/TCP

- Am Zielsystem muss ein telnet Server (Linux: demon) laufen

- telnet Client: Kommandozeilen tool `telnet` (muss unter Windows aktiviert werden).

Achtung: telnet ist völlig unsicher und sollte in Produktivsystemen nicht zum Einsatz kommen.



# SSH

Verwendet kryptographische Methoden um die Verbindung abzusichern.

