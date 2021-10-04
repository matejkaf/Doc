# Rogue DHCP Server

Dynamic Host Configuration Protocol

DHCP-DORA: discovery, offer, request, and acknowledgement 

 versorgt Hosts mit

- IP address lease
- default gateway



Eigenschaften

- DHCP Server sind nicht am gleichen subnet wie die clients

- DHCP discover broadcast -> relay agent -> unicast zu DHCP Server

- DHCP offer -> relay agent -> host

- Daher: Es sind einige Hops zwischen dem Host und dem DHCP Server

- Wenn mehrere Offer beim Host (mehrere DHCP Server) ankommen, wird normalerweise der erste genommen

Rogue DHCP Server nutzen dies aus, Video 1:21–3:15

Ein Rogue DHCP Server konfiguriert sich selbst als default gateway. Der gesamte Datenverkehr läft dann über den Rogue DHCP Server:

- Daten mithören (und evtl. exfiltrieren)
- man-in-the-middle attacks



## Schutz

Tool das die IP Adresse des auf DHCP discover antwortenden DHCP Server prüft.

**DHCP snooping** im Layer 2 Switch. Switch ports sind trusted oder untrusted konfiguriert. An untrusted ports ankommende DHCP offer werden verworfen. Video ab 04:55. 



# DHCP starvation

Begrenzte Menge an verfügbaren IP Adressen. 

Hacker schickt große Anzahl von DHCP discover messages mit spoofed MAC adressen. Nach DORA Prozess: IP Adressen gehen aus.

Die echten clients bekommen keine IP Adressen mehr. DoS (Denial of service) attack, speziell DHCP starvation attack. 

Tool um Angriff auszuführen: Metasploit, Gobbler.



## Schutz

DHCP Snooping mit prüfen der MAC Adresse. *Am Ende des Videos kurz erklärt*

