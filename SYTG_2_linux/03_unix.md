---
title: Betriebssystem - UNIX/Linux
description: Allgemeines zu UNIX und Linux
tags: [lecture, unix, SYTG_2_Linux, 2AHITS ]
---

[! 2AHITS G1 08.11.2021]

Ein Betriebssystem (*operating system*, OS) macht die HW eines Computers verwendbar. Aufgaben:

- Programme starten
- Prozessorleistung und den Speicher verwalten
- Kommunikation mit der Umgebung (Tastatur, Bildschirm, Netzwerk) 
-  Datenverwaltung (Festplatte).

2 Möglichkeiten der Interaktion:

- GUI – Graphical User Interface
- CLI – Command Line Interface/CLI (Kommandozeile, shell, Terminal)



# UNIX/Linux

**UNIX** ist ein Betriebssystem. 1970-80 in den Bell Labs von Ken Thomson und Dennis Ritchie (Programmiersprache C) entwickelt – Kommerziell.

https://upload.wikimedia.org/wikipedia/commons/7/77/Unix_history-simple.svg

**Linux** (Linus Torwalds, 1992):

- UNIX kompatibel
- Kostenfreie Software, Open Source = Gemeinschaftsprojekt
- Gute Interoperabilität mit anderen Systemen
- Sparsam mit Systemresourcen (Speicher, CPU)
- Sehr zuverlässig (Server, IoT,...)
- Hohe (Cyber-)Sicherheit

Linux besteht aus

- **Kernel** für die OS Basis Funktionalität
- Zusätzlich installierte **Pakete** (Webserver, C Compiler, ...)
- Grafischer Desktop (GNOME, KDE, Unity, Xfce, ...)

Hunderte Distributionen bieten einen unterschiedlichen Mix aus diesen 3 Hauptkomponenten. Beliebte Distributionen:

- **Debian**: Nur aus freien und quelloffenen Komponenten aufgebaut. Seit 1993. Langsamere Entwicklungszyklen, Konzentration auf Stabilität.
- **Ubuntu**: General Purpose - für fast alles geeignet (Office Desktop, Server). Benutzerfreundlichere und sich schneller entwickelnde Debian Variante. 
- **Kali**: basiert auf Debian, viele Cybersecurity Tools vorinstalliert. Für penetration testing – Ethical Hacking.
- **Weitere**:
  - CentOS, 
  - openSUSE, 
  - Alpine, 
  - ...



[! 2AHITS G2 18.10.2021]



# Einsatzgebiete

Linux kostet nichts und kann viel. Daher stark verbreitet:

Beispiele:

- Android
- Apple macOS, iOS (BSD Unix)
- Chrome OS
- Server
- Desktop Rechner
- Netzwerkinfrastruktur
  - Router
  - Switch
  - Firewall
  - ...
- IoT Geräte
  - Raspberry Pi
  - Kameras
  - Drucker
  - ...



# shell

Eine **shell** ist ein Programm das ein Text basiertes User Interface zum Zugriff auf die Dienste eines Betriebsystems.

Begriff: shell ist die Schale um den Kernel.

Arbeitsweise:

- Eingabe einer Befehlszeile
- Ausführen durch Enter-Taste
- Rückmeldungen am Bildschirm

Bedeutung:

- Historisch erste Art Computer zu bedienen
- unter UNIX/Linux weiter enorm wichtig
- insbesondere für **Administratoren**.

Mit der shell (das ein Programm ist) wird über ein **Terminal** (auch **Konsole**, bzw. **TTY** -TeleTYpe) kommuniziert. Das Terminal war früher ein eigenes per Kabel mit dem Computer verbundenes Gerät. Heute ist es meist ein Terminal **Emulator**, d.h. ein Programm das so tut als wäre es ein Terminal. 



## Shells

Es gibt viele verschiedene.

- Linux
  - sh (Bourne Shell)
  - **bash** (Bourne Again Shell - Erweiterung von sh, [Difference between sh and bash](https://stackoverflow.com/questions/5725296/difference-between-sh-and-bash))
  - csh: C ähnlich, nicht so weit verbreitet wie bash
  - zsh: Erweiterung von bash, findet vermehrt Verbreitung
- Windows: 
  - Kommandozeile (`cmd`), 
  - Powershell
  - **cygwin**: Besonderheit. Stellt Unix shell Funktionen unter Windows bereit.

