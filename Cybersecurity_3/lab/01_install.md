---
title: Virtuelle Maschinen installieren
subtitle: Übung
tags: [assignment]
---

[Häufig benötigte Linux Befehle](../../Linux/cheatsheet)



#### Übung (Kali)

Installiere Kali Linux im VmWare Player. [Anleitung](../lib/install_vmware_kali)



#### Übung (Metasploitable)

Installiere Metasploitable im VmWare Player.



#### Übung (Netzwerk NAT/Bridged)

Stelle beide VMs auf Bridged Mode und warte ca. 10 Sekunden bis sich das Netzwerk neu konfiguriert hat.

- Prüfen in beiden VMs welche IP Adresse (`ifconfig eth0`) und Default Gateway (`route -n`) dieser erhalten haben.
- Führe von Kali aus einen Ping auf Metasploitable aus.
- Umgekehrter Ping (Metasploitable auf Kali).
- Führe vom Host System einen Ping auf beide VMs aus.
- Führe vom Kali VM einen Ping auf ein anderes Kali System auf einem anderen Rechner aus.

Stelle nun beide VMs zurück auf NAT und wiederhole obige Versuche

