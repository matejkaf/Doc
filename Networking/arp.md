---
title: ARP
subtitle: Address Resolution Protocol
---

Jeder Host eines Ethernet Subnets hat eine konfigurierte IP Adresse (4 Byte) und eine fix programmierte MAC Adresse (6 Byte). Damit eine Nachricht zum Ziel findet ist die MAC Adresse notwendig. Es ist aber nur die IP Adresse bekannt.

Das ARP – **Address Resolution Protocol** – ermittelt die MAC Adresse aufgrund der IP Adresse.

- ARP Request (broadcast) von 192.168.1.5 an alle ("wer von euch hat die IP Adresse 192.168.1.7")
- ARP Reply (unicast) angesprochener Host ("ich und ich habe MAC Adresse A1:A1:A1:A1:A1:A1"). Alle gelernten MAC Adressen werden im ARP cache gespeichert.
- Um das zu Beschleunigen: neues Gerät im Netzwerk kann ein gratuitous (de: grundlos) ARP Reply als broadcast schicken. Damit lernen alle Hosts die das empfangen die MAC und IP Adresse dieses Geräts.



![image-20200730101758302](fig/arp01.png)

![image-20200730101821876](fig/arp02.png)

