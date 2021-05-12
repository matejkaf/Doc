---
title: Netzwerkkonfiguration
subtitle: Cybersecurity Lab
---

* TOC
{:toc}

## Überblick

### Passwörter

- Kali
  - kali/kali
  
- Ubuntu
  - root/toor
  - ubuntu/ubuntu
  
- Debian

  - root/toor
  - eric/debiantest

- Metasploitable

  - msfadmin/msfadmin

  

Idee: user / resu bzw. root / toor verwenden.

Oder: kali / kali, debian/debian







## Netzwerk-Adressen



Fritz.Box:

- Kali: 192.168.178.?
- Metasploitable: 192.168.178.71



## Virtual Box

### NAT

VirtualBox hat einen internen DHCP Server der aus 10.0.2.0/24 eine IP Adresse zuweist. Zugriff auf das Internet ist möglich. VMs können nicht untereinander kommunizieren.

### Bridged / Netzwerkbrücke

Virtual Box verbindet die VM mit einer Bridge (ein in Software implementierter Switch). Die VM wird dadurch ein "echter" Teilnehmer im Netzwerk. Die VMs können untereinander kommunizieren und sind auch vom Netzwerk aus erreichbar.

### Internal Network

Netzwerk das nur die VMs untereinander verbindet. Keine Verbindung nach außen. Um die IP Adressen muss man sich selber kümmern (z.B. statisch). Interne Netze haben einen Namen.



## Netzwerkkonfiguration – Linux

Überprüfen der Neztwerkkonfiguration (IP Adressen, ...)

```bash
$ ifconfig
```

Debian – kein `ifconfig`

```bash
$ su - # substitute user
toor # root pwd
# ifconfig
... nicht gefunden
$ ip addr show # neuerer und besserer Befehl
```



## KALI

### GUI Neztwerkkonfiguration

Rechte obere Ecke Symbol in der Form einer Netzwerkbuchse

- Rechts-Klick >> Edit Connections...
- Verbindung auswählen, Zahnrad-Symbol
- Tab IPv4 Settings
- Bei wieder aktivieren von DHCP müssen die statischen IP Adressen gelöscht werden

Änderungen werden erst übernommen wenn man Disconnected und wieder Connected (Netzwerksymbol)

## Debian

### GUI Neztwerkkonfiguration

Rechte obere Ecke Netzwerksymbol. 

- "Kabelgebunden verbunden" >> LAN-Einstellungen
- Zahnrad-Symbol >> IPv4
- evtl. Verbindung beenden und wieder starten (Schalter neben Zahnrad-Symbol)



