---
title: TCP
subtitle: Grundlegende Begriffe und Funktionen
---

**TCP** (Transmission Control Protocol, [RFC 793 - Transmission Control Protocol](https://tools.ietf.org/html/rfc793)) ist das am meisten verwendete Protokoll zum Datentransfer in Netzwerken.

Es bietet einen **verbindungsorientierten**, **gesicherten Datenstrom**. Gehen Daten am Weg verloren oder ändert sich die Reihenfolge sorgt TCP für eine Korrektur.

TCP ist ein Layer 4 **Transport Layer** Protokoll. TCP PDU's nennt man **Segmente** diese werden in IP Paketen transportiert, und diese wiederum in Ethernet Frames.

Geräte die in einem Netzwerk per TCP erreichbar sind werden **Host** genannt. Anwendungen auf diesen Hosts binden sich zu **Ports**. Jeder Host hat die Ports 1–65535 (**Portnummern**).

Jeder Host hat eine eindeutige **IP Adresse**. Eine IP Adresse ist ein 32 Bit Wert, eine Portnummer hat 16 Bit.

Ein **Server** ist eigentlich nichts anderes als eine Anwendung die sich auf einem Host an einen bestimmten Port **gebunden** hat. Ein Web Server würde sich z.B. an den Port 80 binden.

Will ein **Client** mit einer **Server-Anwendung** Daten austauschen ist zuerst eine Verbindung aufzubauen. Der Host wird über die IP Adresse identifiziert. Zusätzlich benötigt der Client noch die Port-Nummer an die sich die Server-Anwendung gebunden hat. Nach dem Datenaustausch wird die Verbindung wieder beendet.

Ports eines Hosts mit einer daran gebundenen Anwendung werden als **offene Ports** bezeichnet, alle anderen Ports sind geschlossen.

Beispiel – Offene TCP Ports eines Hosts mit Metasploit (`nmap`):

```
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
23/tcp   open  telnet
25/tcp   open  smtp
53/tcp   open  domain
80/tcp   open  http
111/tcp  open  rpcbind
139/tcp  open  netbios-ssn
445/tcp  open  microsoft-ds
513/tcp  open  login
514/tcp  open  shell
2049/tcp open  nfs
2121/tcp open  ccproxy-ftp
3306/tcp open  mysql
5432/tcp open  postgresql
5900/tcp open  vnc
6000/tcp open  X11
8009/tcp open  ajp13
```



